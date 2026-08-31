/* =========================================================================
   PARTICLE IMAGE EFFECT — real particle-reconstruction of a photo.
   Samples an <img> onto an offscreen canvas to get per-pixel color +
   position, spawns that many GPU points at the center, blasts them
   outward (explosion + drag), then springs + swirls every single one
   of them back to its correct pixel position until the photo has
   visibly been *built* out of particles — never a fade/scale-in.
   Self-contained: no postprocessing passes, no extra CDN files, so it
   only needs the Three.js build the page already loads.
   ========================================================================= */
window.ParticleImageEffect = (function () {
  if (typeof THREE === 'undefined') {
    return { run: () => Promise.resolve(false), pickParticleCount: () => 0 };
  }

  const coarsePointer = matchMedia('(pointer: coarse)').matches;
  const fewCores = (navigator.hardwareConcurrency || 8) <= 4;
  const lowMemory = (navigator.deviceMemory || 8) <= 4;
  const LOW_POWER = coarsePointer && (fewCores || lowMemory);

  // Desktop/high-end: full 13k particles (within the requested 8k–15k band).
  // Phones & underpowered devices: scaled down so the animation still holds
  // a smooth 60fps instead of dropping frames — quality over raw count.
  function pickParticleCount() {
    if (LOW_POWER) return 5500;
    if (coarsePointer) return 8500;
    return 13000;
  }

  function glowTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.4, 'rgba(255,255,255,.85)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  }

  // Samples the image onto a small offscreen canvas sized so roughly
  // `count` pixels come out of it, skipping near-transparent pixels.
  function sampleImage(img, count) {
    const aspect = img.naturalWidth / img.naturalHeight || 1;
    const cols = Math.max(4, Math.round(Math.sqrt(count * aspect)));
    const rows = Math.max(4, Math.round(count / cols));
    const c = document.createElement('canvas');
    c.width = cols; c.height = rows;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0, cols, rows);
    let data;
    try { data = ctx.getImageData(0, 0, cols, rows).data; }
    catch (e) { return { points: [], aspect }; } // e.g. blocked by CORS on some hosts
    const points = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const idx = (y * cols + x) * 4;
        const a = data[idx + 3];
        if (a < 40) continue;
        points.push({
          x: (x / cols) - 0.5,
          y: -((y / rows) - 0.5),
          r: data[idx] / 255, g: data[idx + 1] / 255, b: data[idx + 2] / 255,
        });
      }
    }
    return { points, aspect };
  }

  /**
   * @param {HTMLCanvasElement} canvas - dedicated canvas to render into
   * @param {string} imageUrl - image to reconstruct out of particles
   * @param {number} [particleCount] - defaults to a device-appropriate count
   * @param {(stage:'explode'|'converge'|'settled')=>void} [onStageChange]
   * @returns {Promise<boolean>} resolves true once the sequence has started
   */
  function run({ canvas, imageUrl, particleCount, onStageChange }) {
    return new Promise((resolve) => {
      if (!canvas || !imageUrl) return resolve(false);
      const img = new Image();
      img.onload = () => {
        try { build(img); } catch (e) { resolve(false); }
      };
      img.onerror = () => resolve(false);
      img.src = imageUrl;

      function build(img) {
        const count = particleCount || pickParticleCount();
        const { points, aspect } = sampleImage(img, count);
        const n = points.length;
        if (!n) return resolve(false);

        const width = canvas.clientWidth || innerWidth;
        const height = canvas.clientHeight || innerHeight;
        const dpr = Math.min(devicePixelRatio || 1, LOW_POWER ? 1 : 1.6);

        const renderer = new THREE.WebGLRenderer({
          canvas, alpha: true, antialias: false, powerPreference: 'high-performance',
        });
        renderer.setPixelRatio(dpr);
        renderer.setSize(width, height, false);
        renderer.autoClear = false;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
        camera.position.set(0, 0, 9);

        // ---- fullscreen translucent quad = the "trail" fade behind particles ----
        const fadeScene = new THREE.Scene();
        const fadeCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const fadeMesh = new THREE.Mesh(
          new THREE.PlaneGeometry(2, 2),
          new THREE.MeshBasicMaterial({ color: 0x060a16, transparent: true, opacity: 0.16, depthWrite: false, depthTest: false })
        );
        fadeScene.add(fadeMesh);

        // clear once to solid dark navy, then never clear again — the fade
        // quad above is what keeps the buffer from turning into pure noise
        // while still leaving short glowing trails behind each particle.
        renderer.setClearColor(0x060a16, 1);
        renderer.clear();

        // ---- map the sampled grid onto a plane sized to fill most of the view ----
        const vFOV = (camera.fov * Math.PI) / 180;
        const viewHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
        const planeHeight = viewHeight * 0.62;
        const planeWidth = planeHeight * aspect;

        const targets = new Float32Array(n * 3);
        const colors = new Float32Array(n * 3);
        const positions = new Float32Array(n * 3);
        const velocities = new Float32Array(n * 3);

        for (let i = 0; i < n; i++) {
          const p = points[i];
          const ix = i * 3;
          targets[ix] = p.x * planeWidth;
          targets[ix + 1] = p.y * planeHeight;
          targets[ix + 2] = (Math.random() - 0.5) * 0.5;
          colors[ix] = p.r; colors[ix + 1] = p.g; colors[ix + 2] = p.b;

          // every particle starts stacked at the center, then gets its own
          // explosion velocity — a real physical outward blast, not a fade-in
          positions[ix] = 0; positions[ix + 1] = 0; positions[ix + 2] = 0;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          const speed = 3 + Math.random() * 7;
          velocities[ix] = Math.sin(phi) * Math.cos(theta) * speed;
          velocities[ix + 1] = Math.sin(phi) * Math.sin(theta) * speed;
          velocities[ix + 2] = Math.cos(phi) * speed * 0.5;
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
          size: LOW_POWER ? 0.05 : 0.034,
          map: glowTexture(),
          vertexColors: true,
          transparent: true,
          opacity: 0.95,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true,
        });

        // soft ambient glow sitting behind the particles — cheap stand-in
        // for a real bloom pass (no postprocessing files are loaded here)
        const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({
          map: glowTexture(), color: 0x8fd0ff, transparent: true, opacity: 0.22,
          blending: THREE.AdditiveBlending, depthWrite: false,
        }));
        glowSprite.scale.set(planeWidth * 1.5, planeHeight * 1.5, 1);
        glowSprite.position.set(0, 0, -1.2);
        scene.add(glowSprite);

        const pointsObj = new THREE.Points(geo, mat);
        scene.add(pointsObj);

        let stage = 'explode';
        let stageTime = 0;
        const EXPLODE_DURATION = 1.0;
        const CONVERGE_SWIRL_FADE = 2.6;
        const SETTLE_AFTER = 3.4;
        let running = true;
        let raf = null;
        const clock = new THREE.Clock();

        function onResize() {
          const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
        addEventListener('resize', onResize);

        function frame() {
          if (!running) return;
          raf = requestAnimationFrame(frame);
          const dt = Math.min(clock.getDelta(), 0.05);
          stageTime += dt;
          const pos = geo.attributes.position.array;

          if (stage === 'explode') {
            for (let i = 0; i < n; i++) {
              const ix = i * 3;
              pos[ix] += velocities[ix] * dt;
              pos[ix + 1] += velocities[ix + 1] * dt;
              pos[ix + 2] += velocities[ix + 2] * dt;
              velocities[ix] *= 0.96; velocities[ix + 1] *= 0.96; velocities[ix + 2] *= 0.96;
            }
            if (stageTime > EXPLODE_DURATION) {
              stage = 'converge'; stageTime = 0;
              if (onStageChange) onStageChange('converge');
            }
          } else if (stage === 'converge') {
            const springK = 2.4, damping = 3.6;
            const swirl = Math.max(0, 1 - stageTime / CONVERGE_SWIRL_FADE);
            for (let i = 0; i < n; i++) {
              const ix = i * 3;
              const dx = targets[ix] - pos[ix], dy = targets[ix + 1] - pos[ix + 1], dz = targets[ix + 2] - pos[ix + 2];
              // swirl: a force perpendicular to the pull-toward-target vector,
              // strongest right after the explosion and fading out as it settles
              const tx = -dy, ty = dx;
              const tlen = Math.hypot(tx, ty) || 1;
              velocities[ix] += (dx * springK + (tx / tlen) * swirl * 2.1) * dt;
              velocities[ix + 1] += (dy * springK + (ty / tlen) * swirl * 2.1) * dt;
              velocities[ix + 2] += dz * springK * dt;
              velocities[ix] -= velocities[ix] * damping * dt;
              velocities[ix + 1] -= velocities[ix + 1] * damping * dt;
              velocities[ix + 2] -= velocities[ix + 2] * damping * dt;
              pos[ix] += velocities[ix] * dt;
              pos[ix + 1] += velocities[ix + 1] * dt;
              pos[ix + 2] += velocities[ix + 2] * dt;
            }
            if (stageTime > SETTLE_AFTER) {
              stage = 'settled'; stageTime = 0;
              if (onStageChange) onStageChange('settled');
            }
          } else if (stage === 'settled') {
            const t = performance.now() * 0.001;
            for (let i = 0; i < n; i++) {
              const ix = i * 3;
              pos[ix + 2] = targets[ix + 2] + Math.sin(t * 0.6 + i * 0.01) * 0.025;
            }
            camera.position.z += (7.4 - camera.position.z) * dt * 0.4;
            camera.updateProjectionMatrix();
          }
          geo.attributes.position.needsUpdate = true;

          renderer.render(fadeScene, fadeCam);
          renderer.render(scene, camera);
        }
        frame();

        run._stop = () => { running = false; if (raf) cancelAnimationFrame(raf); removeEventListener('resize', onResize); };
        resolve(true);
      }
    });
  }

  return { run, pickParticleCount };
})();
