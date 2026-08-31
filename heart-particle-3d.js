/* =========================================================================
   HEART PARTICLE MERGE EFFECT — the premium "click the heart" centerpiece.
   Thousands of GPU points start stacked at the center, blast outward with
   a real explosion (velocity + drag), swirl through 3D space, then spring
   back together — but instead of settling into noise or a generic burst,
   every particle's target sits on the surface of an actual volumetric
   heart shape (classic implicit heart isosurface, filled + given depth so
   it reads as a puffed 3D heart, not a flat decal). Once merged, the heart
   breathes with a slow pulse and stays lit with additive-blended glow
   (cheap stand-in for bloom — same technique already used by
   particle-image.js, so no extra postprocessing files are needed).
   Self-contained: only needs the Three.js build the page already loads.
   ========================================================================= */
window.HeartParticleEffect = (function () {
  if (typeof THREE === 'undefined') {
    return { run: () => Promise.resolve(false), stop: () => {} };
  }

  const coarsePointer = matchMedia('(pointer: coarse)').matches;
  const fewCores = (navigator.hardwareConcurrency || 8) <= 4;
  const lowMemory = (navigator.deviceMemory || 8) <= 4;
  const LOW_POWER = coarsePointer && (fewCores || lowMemory);

  // "Thousands" of particles, scaled down on underpowered phones so the
  // animation still holds a smooth frame rate instead of dropping frames.
  function pickParticleCount() {
    if (LOW_POWER) return 2600;
    if (coarsePointer) return 4200;
    return 7000;
  }

  function glowTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.35, 'rgba(255,200,220,.9)');
    g.addColorStop(1, 'rgba(255,120,170,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  }

  // Classic filled heart isosurface: (x²+y²-1)³ - x²y³ ≤ 0.
  // Rejection-sample the bounding box so particles land anywhere *inside*
  // the heart (a solid, glowing fill) rather than only tracing its outline.
  function insideHeart(x, y) {
    const a = x * x + y * y - 1;
    return a * a * a - x * x * y * y * y <= 0;
  }

  function buildHeartPoints(n) {
    const pts = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      let x, y;
      let tries = 0;
      do {
        x = (Math.random() * 2 - 1) * 1.3;
        y = (Math.random() * 2 - 1.05) * 1.35;
        tries++;
      } while (!insideHeart(x, y) && tries < 40);
      // "puffed" volume: particles nearer the silhouette's center bulge
      // further toward/away from camera, giving the heart real 3D depth
      // instead of sitting flat on one plane.
      const bulge = Math.sqrt(Math.max(0, 1 - (x * x + y * y * 0.7) / 1.9));
      const z = (Math.random() * 2 - 1) * bulge * 0.55;
      const ix = i * 3;
      pts[ix] = x;
      pts[ix + 1] = y + 0.15; // recenters the heart curve's visual weight
      pts[ix + 2] = z;
    }
    return pts;
  }

  let activeStop = null;

  /**
   * @param {HTMLCanvasElement} canvas - dedicated canvas to render into
   * @param {number} [particleCount] - defaults to a device-appropriate count
   * @param {(stage:'explode'|'converge'|'settled')=>void} [onStageChange]
   * @returns {Promise<boolean>}
   */
  function run({ canvas, particleCount, onStageChange } = {}) {
    return new Promise((resolve) => {
      if (!canvas) return resolve(false);
      try { build(); } catch (e) { resolve(false); }

      function build() {
        const n = particleCount || pickParticleCount();
        const raw = buildHeartPoints(n);

        const width = canvas.clientWidth || innerWidth;
        const height = canvas.clientHeight || innerHeight;
        const dpr = Math.min(devicePixelRatio || 1, LOW_POWER ? 1 : 1.75);

        const renderer = new THREE.WebGLRenderer({
          canvas, alpha: true, antialias: false, powerPreference: 'high-performance',
        });
        renderer.setPixelRatio(dpr);
        renderer.setSize(width, height, false);
        renderer.autoClear = true;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
        camera.position.set(0, 0, 6.4);

        const scale = LOW_POWER ? 1.5 : 1.75;
        const targets = new Float32Array(n * 3);
        const colors = new Float32Array(n * 3);
        const positions = new Float32Array(n * 3);
        const velocities = new Float32Array(n * 3);

        const hot = new THREE.Color('#fff2f6');   // glowing white-pink core
        const mid = new THREE.Color('#ff6fa5');   // signature site pink
        const edge = new THREE.Color('#ff2f6d');  // deep rose edge

        for (let i = 0; i < n; i++) {
          const ix = i * 3;
          targets[ix] = raw[ix] * scale;
          targets[ix + 1] = raw[ix + 1] * scale;
          targets[ix + 2] = raw[ix + 2] * scale;

          const r = Math.min(1, Math.hypot(raw[ix], raw[ix + 1] - 0.15) / 1.15);
          const c = r < 0.55 ? hot.clone().lerp(mid, r / 0.55) : mid.clone().lerp(edge, (r - 0.55) / 0.45);
          colors[ix] = c.r; colors[ix + 1] = c.g; colors[ix + 2] = c.b;

          // every particle starts stacked at the center, then gets its own
          // explosion velocity — a real physical outward blast
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          const speed = 2.6 + Math.random() * 6.4;
          velocities[ix] = Math.sin(phi) * Math.cos(theta) * speed;
          velocities[ix + 1] = Math.sin(phi) * Math.sin(theta) * speed;
          velocities[ix + 2] = Math.cos(phi) * speed * 0.6;
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
          size: LOW_POWER ? 0.075 : 0.052,
          map: glowTexture(),
          vertexColors: true,
          transparent: true,
          opacity: 0.95,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true,
        });
        const pointsObj = new THREE.Points(geo, mat);
        scene.add(pointsObj);

        // soft ambient glow sitting behind the particles — cheap bloom
        const glow = new THREE.Sprite(new THREE.SpriteMaterial({
          map: glowTexture(), color: 0xff6fa5, transparent: true, opacity: 0.35,
          blending: THREE.AdditiveBlending, depthWrite: false,
        }));
        glow.scale.set(scale * 3.6, scale * 3.6, 1);
        glow.position.set(0, 0.1, -1.4);
        scene.add(glow);

        let stage = 'explode';
        let stageTime = 0;
        const EXPLODE_DURATION = 0.7;
        const CONVERGE_SWIRL_FADE = 1.5;
        const SETTLE_AFTER = 1.9;
        let running = true;
        let raf = null;
        const clock = new THREE.Clock();
        const startTime = performance.now();

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
              velocities[ix] *= 0.95; velocities[ix + 1] *= 0.95; velocities[ix + 2] *= 0.95;
            }
            if (stageTime > EXPLODE_DURATION) {
              stage = 'converge'; stageTime = 0;
              if (onStageChange) onStageChange('converge');
            }
          } else if (stage === 'converge') {
            const springK = 3.0, damping = 3.8;
            const swirl = Math.max(0, 1 - stageTime / CONVERGE_SWIRL_FADE);
            for (let i = 0; i < n; i++) {
              const ix = i * 3;
              const dx = targets[ix] - pos[ix], dy = targets[ix + 1] - pos[ix + 1], dz = targets[ix + 2] - pos[ix + 2];
              // force perpendicular to the pull-to-target vector — strongest
              // right after the explosion, fading out as the heart forms
              const tx = -dy, ty = dx, tz = dx * 0.3;
              const tlen = Math.hypot(tx, ty, tz) || 1;
              velocities[ix] += (dx * springK + (tx / tlen) * swirl * 2.6) * dt;
              velocities[ix + 1] += (dy * springK + (ty / tlen) * swirl * 2.6) * dt;
              velocities[ix + 2] += (dz * springK + (tz / tlen) * swirl * 2.6) * dt;
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
            const t = (performance.now() - startTime) * 0.001;
            // slow breathing pulse — the "glowing heart" heartbeat
            const pulse = 1 + Math.sin(t * 1.7) * 0.045;
            for (let i = 0; i < n; i++) {
              const ix = i * 3;
              pos[ix] = targets[ix] * pulse;
              pos[ix + 1] = targets[ix + 1] * pulse;
              pos[ix + 2] = targets[ix + 2] * pulse + Math.sin(t * 0.8 + i * 0.05) * 0.015;
            }
            pointsObj.rotation.y = Math.sin(t * 0.35) * 0.18;
            glow.material.opacity = 0.3 + Math.sin(t * 1.7) * 0.08;
          }
          geo.attributes.position.needsUpdate = true;
          renderer.render(scene, camera);
        }
        frame();

        const stop = () => {
          running = false;
          if (raf) cancelAnimationFrame(raf);
          removeEventListener('resize', onResize);
          geo.dispose(); mat.dispose(); glow.material.map && glow.material.map.dispose();
          glow.material.dispose(); mat.map && mat.map.dispose();
          renderer.dispose();
        };
        activeStop = stop;
        resolve(true);
      }
    });
  }

  function stop() { if (activeStop) { activeStop(); activeStop = null; } }

  return { run, stop };
})();
