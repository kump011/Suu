/* =========================================================================
   SCENE ENGINE — cinematic WebGL environments, one per story chapter.
   A single Three.js canvas sits behind the whole site. Every theme's
   objects are built once at startup (cheap: procedural points + sprites,
   no external assets) then cross-faded in/out as the visitor scrolls
   between sections. Progressive enhancement: if Three.js failed to load
   (offline, blocked CDN) the site still works — CSS gradients in
   #bg-a/#bg-b already carry each section's color mood on their own.
   ========================================================================= */
window.SceneEngine = (function () {
  if (typeof THREE === 'undefined') return { init() {}, setTheme() {} };

  // Lightweight-mode: scale particle density and rendering cost down on
  // phones/tablets with fewer cores or less memory, so motion stays smooth
  // instead of dropping frames. Desktop and high-end phones get full quality.
  const coarsePointer = matchMedia('(pointer: coarse)').matches;
  const fewCores = (navigator.hardwareConcurrency || 8) <= 4;
  const lowMemory = (navigator.deviceMemory || 8) <= 4;
  const LOW_POWER = coarsePointer && (fewCores || lowMemory);
  const QUALITY = LOW_POWER ? 0.4 : 1;

  let renderer, scene, camera, canvas, clock;
  let mouse = { x: 0, y: 0 };
  let targetMouse = { x: 0, y: 0 };
  let width = innerWidth, height = innerHeight;
  let activeTheme = null;
  const themes = {}; // name -> { groups: THREE.Group[], fog: {color,density}, tint }

  /* ---------------- texture generators (all procedural, no files) ---------------- */
  function makeCanvasTexture(draw, size = 128) {
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d');
    draw(ctx, size);
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  }
  function glowTexture(hex = '#ffffff') {
    return makeCanvasTexture((ctx, s) => {
      const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
      g.addColorStop(0, hex);
      g.addColorStop(0.35, hex);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, s, s);
    });
  }
  function softCloudTexture(hex = '#ffffff') {
    return makeCanvasTexture((ctx, s) => {
      ctx.clearRect(0, 0, s, s);
      for (let i = 0; i < 5; i++) {
        const x = s * (0.3 + Math.random() * 0.4);
        const y = s * (0.3 + Math.random() * 0.4);
        const r = s * (0.22 + Math.random() * 0.16);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, hex);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.globalAlpha = 0.55;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      }
    }, 256);
  }
  function diamondTexture(hex = '#ffffff') {
    return makeCanvasTexture((ctx, s) => {
      const c = s / 2;
      ctx.translate(c, c); ctx.rotate(Math.PI / 4);
      const g = ctx.createLinearGradient(-c, -c, c, c);
      g.addColorStop(0, '#ffffff'); g.addColorStop(0.5, hex); g.addColorStop(1, '#ffffff');
      ctx.fillStyle = g;
      ctx.fillRect(-c * 0.5, -c * 0.5, c, c);
    });
  }
  function petalTexture(hex = '#d6b5fd') {
    return makeCanvasTexture((ctx, s) => {
      ctx.translate(s / 2, s / 2);
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.42);
      ctx.bezierCurveTo(s * 0.32, -s * 0.2, s * 0.32, s * 0.28, 0, s * 0.46);
      ctx.bezierCurveTo(-s * 0.32, s * 0.28, -s * 0.32, -s * 0.2, 0, -s * 0.42);
      ctx.closePath();
      const g = ctx.createLinearGradient(0, -s * 0.4, 0, s * 0.4);
      g.addColorStop(0, '#fff'); g.addColorStop(1, hex);
      ctx.fillStyle = g; ctx.fill();
    });
  }
  function lanternTexture(hex = '#8ddefc') {
    return makeCanvasTexture((ctx, s) => {
      const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
      g.addColorStop(0, '#e7f6fe'); g.addColorStop(0.4, hex); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(s / 2, s / 2, s / 2, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.9)';
      ctx.fillRect(s * 0.42, s * 0.12, s * 0.16, s * 0.1);
    });
  }
  function streakTexture(hex = '#ffffff') {
    return makeCanvasTexture((ctx, s) => {
      const g = ctx.createLinearGradient(0, 0, s, 0);
      g.addColorStop(0, 'rgba(255,255,255,0)');
      g.addColorStop(0.85, hex);
      g.addColorStop(1, '#ffffff');
      ctx.fillStyle = g;
      ctx.fillRect(0, s * 0.46, s, s * 0.08);
    });
  }

  /* ---------------- factories ---------------- */
  function twinkleStars(count, spread, size, colorNear, colorFar) {
    count = Math.max(4, Math.round(count * QUALITY));
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const phase = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const cNear = new THREE.Color(colorNear), cFar = new THREE.Color(colorFar);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.6 + spread * 0.15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread;
      phase[i] = Math.random() * Math.PI * 2;
      const c = cNear.clone().lerp(cFar, Math.random());
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true,
      uniforms: { uTime: { value: 0 }, uSize: { value: size }, uOpacity: { value: 1 } },
      vertexShader: `
        attribute float aPhase; uniform float uTime; uniform float uSize;
        varying float vTwinkle; varying vec3 vColor;
        void main(){
          vColor = color;
          vTwinkle = 0.55 + 0.45 * sin(uTime * 1.6 + aPhase);
          vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = uSize * vTwinkle * (300.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        uniform float uOpacity; varying float vTwinkle; varying vec3 vColor;
        void main(){
          float d = length(gl_PointCoord - vec2(0.5));
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(vColor, a * vTwinkle * uOpacity);
        }`,
    });
    const pts = new THREE.Points(geo, mat);
    pts.userData.isTwinkle = true;
    return pts;
  }

  function glowParticles(count, spread, hex, size, opts = {}) {
    count = Math.max(4, Math.round(count * QUALITY));
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread * (opts.vertical || 0.5);
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.5;
      speeds[i] = 0.2 + Math.random() * 0.6;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      map: glowTexture(hex), size, transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, opacity: 1,
    });
    const pts = new THREE.Points(geo, mat);
    pts.userData = { isGlow: true, speeds, rise: opts.rise !== false, drift: opts.drift || 0.15 };
    return pts;
  }

  function rayGroup(count, hex, len) {
    const g = new THREE.Group();
    const tex = makeCanvasTexture((ctx, s) => {
      const grad = ctx.createLinearGradient(0, 0, 0, s);
      grad.addColorStop(0, hex); grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad; ctx.fillRect(0, 0, s, s);
    }, 64);
    for (let i = 0; i < count; i++) {
      const w = 3 + Math.random() * 4;
      const h = 30 + Math.random() * 20;
      const geo = new THREE.PlaneGeometry(w, h);
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
      const mesh = new THREE.Mesh(geo, mat);
      const ang = (i / count) * Math.PI * 0.9 - Math.PI * 0.45;
      mesh.position.set(Math.sin(ang) * 4, h / 2 - 6, -10);
      mesh.rotation.z = ang * 0.6;
      g.add(mesh);
    }
    g.userData.isRays = true;
    return g;
  }

  function cloudSprites(count, hex, sizeRange, area) {
    count = Math.max(4, Math.round(count * QUALITY));
    const g = new THREE.Group();
    const tex = softCloudTexture(hex);
    for (let i = 0; i < count; i++) {
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.5, depthWrite: false });
      const s = new THREE.Sprite(mat);
      const size = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
      s.scale.set(size, size * 0.5, 1);
      s.position.set((Math.random() - 0.5) * area, Math.random() * area * 0.25, -8 - Math.random() * 6);
      s.userData.speed = 0.05 + Math.random() * 0.1;
      g.add(s);
    }
    g.userData.isClouds = true;
    return g;
  }

  function petalGroup(count, hex, area) {
    count = Math.max(4, Math.round(count * QUALITY));
    const g = new THREE.Group();
    const tex = petalTexture(hex);
    for (let i = 0; i < count; i++) {
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.85, depthWrite: false });
      const s = new THREE.Sprite(mat);
      const size = 0.6 + Math.random() * 0.9;
      s.scale.set(size, size, 1);
      s.position.set((Math.random() - 0.5) * area, Math.random() * area - area / 2, (Math.random() - 0.5) * 6);
      s.material.rotation = Math.random() * Math.PI * 2;
      s.userData = { fall: 0.03 + Math.random() * 0.05, sway: Math.random() * 0.02, phase: Math.random() * 10, spin: (Math.random() - 0.5) * 0.02 };
      g.add(s);
    }
    g.userData.isPetals = true;
    g.userData.area = area;
    return g;
  }

  function lanternGroup(count, hex, area) {
    count = Math.max(4, Math.round(count * QUALITY));
    const g = new THREE.Group();
    const tex = lanternTexture(hex);
    for (let i = 0; i < count; i++) {
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending });
      const s = new THREE.Sprite(mat);
      const size = 1 + Math.random() * 0.8;
      s.scale.set(size, size, 1);
      s.position.set((Math.random() - 0.5) * area, -2 + Math.random() * 2, -3 - Math.random() * 4);
      s.userData = { phase: Math.random() * 10, driftX: (Math.random() - 0.5) * 0.15 };
      g.add(s);
    }
    g.userData.isLanterns = true;
    return g;
  }

  function planet(radius, hex, ring) {
    const geo = new THREE.SphereGeometry(radius, 24, 24);
    const mat = new THREE.MeshBasicMaterial({ color: hex });
    const mesh = new THREE.Mesh(geo, mat);
    if (ring) {
      const ringGeo = new THREE.RingGeometry(radius * 1.4, radius * 2, 48);
      const ringMat = new THREE.MeshBasicMaterial({ color: ring, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2.4;
      mesh.add(ringMesh);
    }
    return mesh;
  }

  function galaxySwarm(count, spread) {
    count = Math.max(4, Math.round(count * QUALITY));
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const inner = new THREE.Color('#f7eafe'), outer = new THREE.Color('#7d60fb');
    for (let i = 0; i < count; i++) {
      const r = Math.pow(Math.random(), 0.6) * spread;
      const spin = r * 0.6;
      const ang = Math.random() * Math.PI * 2 + spin;
      pos[i * 3] = Math.cos(ang) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.12;
      pos[i * 3 + 2] = Math.sin(ang) * r - 15;
      const c = inner.clone().lerp(outer, r / spread);
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const mat = new THREE.PointsMaterial({ size: 0.18, vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending, map: glowTexture('#ffffff') });
    const pts = new THREE.Points(geo, mat);
    pts.userData.isGalaxy = true;
    return pts;
  }

  function nebulaClouds(count, colors, area) {
    count = Math.max(4, Math.round(count * QUALITY));
    const g = new THREE.Group();
    colors.forEach((hex, ci) => {
      const tex = softCloudTexture(hex);
      for (let i = 0; i < count; i++) {
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending });
        const s = new THREE.Sprite(mat);
        const size = 14 + Math.random() * 16;
        s.scale.set(size, size, 1);
        s.position.set((Math.random() - 0.5) * area, (Math.random() - 0.5) * area * 0.5, -20 - Math.random() * 20);
        s.userData.speed = 0.01 + Math.random() * 0.02;
        g.add(s);
      }
    });
    g.userData.isNebula = true;
    return g;
  }

  function auroraPlane(colorsArr) {
    const geo = new THREE.PlaneGeometry(60, 22, 1, 1);
    const colorUniforms = colorsArr.map(c => new THREE.Color(c));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uC1: { value: colorUniforms[0] }, uC2: { value: colorUniforms[1] }, uC3: { value: colorUniforms[2] },
      },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        varying vec2 vUv; uniform float uTime; uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;
        void main(){
          float y = vUv.y;
          float wave1 = sin(vUv.x * 4.0 + uTime * 0.5) * 0.08;
          float wave2 = sin(vUv.x * 7.0 - uTime * 0.35) * 0.05;
          float band = smoothstep(0.0, 0.5, y + wave1) * smoothstep(1.0, 0.4, y + wave2);
          vec3 col = mix(uC1, uC2, sin(uTime*0.2 + vUv.x*3.0)*0.5+0.5);
          col = mix(col, uC3, y);
          float alpha = band * 0.55 * (0.6 + 0.4*sin(uTime*0.6 + vUv.x*6.0));
          gl_FragColor = vec4(col, alpha);
        }`,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(0, 9, -18);
    mesh.userData.isAurora = true;
    return mesh;
  }

  function lakePlane(hex) {
    const geo = new THREE.PlaneGeometry(60, 18, 1, 1);
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(hex) } },
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragmentShader: `
        varying vec2 vUv; uniform float uTime; uniform vec3 uColor;
        void main(){
          float ripple = sin(vUv.x*20.0 + uTime*1.2) * 0.02 + sin(vUv.x*40.0 - uTime*0.8) * 0.015;
          float band = smoothstep(0.0,1.0, vUv.y + ripple);
          float shine = smoothstep(0.46,0.5, vUv.x+ripple) * smoothstep(0.54,0.5, vUv.x+ripple);
          vec3 col = mix(uColor*0.5, uColor, band);
          col += shine * 0.5;
          gl_FragColor = vec4(col, 0.55 * (1.0-vUv.y*0.4));
        }`,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2.5;
    mesh.position.set(0, -7, -8);
    mesh.userData.isLake = true;
    return mesh;
  }

  // Kept intentionally modest — a small, recognizable moon with a soft
  // glow, not a giant glowing ball dominating the frame behind the text.
  function moonGlow(hex) {
    const g = new THREE.Group();
    const mat = new THREE.SpriteMaterial({ map: glowTexture(hex), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.55 });
    const s = new THREE.Sprite(mat);
    s.scale.set(3.2, 3.2, 1);
    s.position.set(6, 6, -15);
    g.add(s);
    const core = new THREE.Mesh(new THREE.CircleGeometry(0.55, 32), new THREE.MeshBasicMaterial({ color: '#e7f6fe' }));
    core.position.copy(s.position);
    g.add(core);
    g.userData.isMoon = true;
    return g;
  }

  function shootingStarSystem() {
    const g = new THREE.Group();
    g.userData.isShooting = true;
    g.userData.timer = 0;
    g.userData.next = 2 + Math.random() * 4;
    return g;
  }
  function spawnShootingStreak(group) {
    const tex = streakTexture('#ffffff');
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 1 });
    const s = new THREE.Sprite(mat);
    s.scale.set(6, 0.6, 1);
    s.material.rotation = -0.5;
    s.position.set(-8 + Math.random() * 6, 6 + Math.random() * 4, -12);
    s.userData = { vx: 0.35 + Math.random() * 0.15, vy: -0.16, life: 1 };
    group.add(s);
  }

  /* ---------------- theme definitions ---------------- */
  function buildThemes() {
    themes['night-sky'] = {
      groups: [
        twinkleStars(2200, 60, 1.6, '#ffffff', '#d0e3fe'),
        auroraPlane(['#8dfcc7', '#8db5fc', '#b7a5fd']),
        moonGlow('#c9e9fe'),
        shootingStarSystem(),
      ],
      fog: { color: '#130d2f', density: 0.012 },
    };
    themes['galaxy'] = {
      // (giant additive-blend nebula bokeh blobs removed — they read as
      // large washed-out glow balls over the text; the twinkling star
      // field + small swarm + two solid planets keep the depth instead)
      groups: [
        twinkleStars(1800, 70, 1.4, '#e1d9fe', '#8ba6fc'),
        galaxySwarm(2200, 16),
        planet(1.6, '#67bdcd', '#97d5eb'),
        planet(1.0, '#779ad4', null),
      ],
      fog: { color: '#0b0925', density: 0.02 },
    };
    themes['sunrise'] = {
      groups: [
        rayGroup(9, 'rgba(255,214,140,0.9)'),
        cloudSprites(6, '#e1f6fe', [10, 18], 40),
        glowParticles(120, 30, '#b2e6fd', 0.5, { vertical: 0.6, drift: 0.1 }),
      ],
      fog: { color: '#aae8fd', density: 0.008 },
    };
    themes['garden'] = {
      groups: [
        glowParticles(160, 26, '#c8fda0', 0.4, { vertical: 0.8, drift: 0.2 }),
        glowParticles(70, 24, '#b2dbfd', 0.35, { vertical: 0.9, drift: 0.05 }),
        rayGroup(6, 'rgba(200,255,170,0.5)'),
      ],
      fog: { color: '#eafcdb', density: 0.01 },
    };
    themes['luxury'] = {
      // (the giant 16-unit additive-blend "bloom" sprite that used to sit
      // right behind the text has been removed — it was the large glowing
      // sphere washing out this theme's sections. Small stars + tiny
      // drifting particles keep the mood without covering the content.)
      groups: [
        twinkleStars(500, 26, 2.2, '#c9e9fe', '#7dd4fc'),
        glowParticles(90, 20, '#b2e2fd', 0.6, { vertical: 0.7, drift: 0.08 }),
      ],
      fog: { color: '#0d333c', density: 0.014 },
    };
    themes['sakura'] = {
      groups: [
        petalGroup(60, '#d6b5fd', 30),
        glowParticles(70, 26, '#f7f0ff', 0.35, { vertical: 0.8, drift: 0.1 }),
        cloudSprites(3, '#f0e4fe', [16, 22], 34),
      ],
      fog: { color: '#ead8fe', density: 0.01 },
    };
    themes['lake'] = {
      groups: [
        twinkleStars(600, 34, 1.4, '#e0f2fe', '#a1c9fd'),
        lakePlane('#1a5b7e'),
        lanternGroup(7, '#8ddefc', 22),
        glowParticles(60, 20, '#caeffe', 0.35, { vertical: 0.5, drift: 0.05 }),
        moonGlow('#ebf6fe'),
      ],
      fog: { color: '#0c2a3c', density: 0.016 },
    };
  }

  /* ---------------- lifecycle ---------------- */
  function init(canvasEl) {
    canvas = canvasEl;
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !LOW_POWER, powerPreference: 'low-power' });
    renderer.setPixelRatio(LOW_POWER ? 1 : Math.min(devicePixelRatio, 1.75));
    renderer.setSize(width, height);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 120);
    camera.position.set(0, 0, 12);
    clock = new THREE.Clock();

    buildThemes();
    Object.values(themes).forEach(t => {
      t.groups.forEach(g => { g.visible = false; setGroupOpacity(g, 0); scene.add(g); });
    });

    addEventListener('resize', onResize);
    addEventListener('pointermove', (e) => {
      targetMouse.x = (e.clientX / innerWidth) * 2 - 1;
      targetMouse.y = (e.clientY / innerHeight) * 2 - 1;
    });

    animate();
  }

  function onResize() {
    width = innerWidth; height = innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function setGroupOpacity(g, v) {
    g.traverse(obj => {
      if (obj.material) {
        if ('opacity' in obj.material) obj.material.opacity = v * (obj.userData.baseOpacity ?? obj.material.__base ?? 1);
        if (obj.material.uniforms && obj.material.uniforms.uOpacity) obj.material.uniforms.uOpacity.value = v;
      }
    });
    g.userData.opacity = v;
  }

  function setTheme(name) {
    const theme = themes[name];
    if (!theme || name === activeTheme) return;
    const prev = activeTheme ? themes[activeTheme] : null;
    activeTheme = name;

    if (window.gsap) {
      if (prev) {
        prev.groups.forEach(g => {
          const proxy = { v: g.userData.opacity ?? 1 };
          gsap.to(proxy, { v: 0, duration: 1.1, ease: 'power2.out', onUpdate: () => setGroupOpacity(g, proxy.v), onComplete: () => { g.visible = false; } });
        });
      }
      theme.groups.forEach(g => {
        g.visible = true;
        const proxy = { v: g.userData.opacity ?? 0 };
        gsap.to(proxy, { v: 1, duration: 1.3, delay: 0.15, ease: 'power2.out', onUpdate: () => setGroupOpacity(g, proxy.v) });
      });
      const fogProxy = { r: 0, g: 0, b: 0 };
      const targetColor = new THREE.Color(theme.fog.color);
      gsap.to(scene.fog || (scene.fog = new THREE.FogExp2(theme.fog.color, theme.fog.density)).color, {
        r: targetColor.r, g: targetColor.g, b: targetColor.b, duration: 1.2, ease: 'power2.out',
      });
      if (scene.fog) gsap.to(scene.fog, { density: theme.fog.density, duration: 1.2 });
      // subtle camera "zoom" punch for the portal-transition feel
      gsap.fromTo(camera, { fov: 58 }, { fov: 55, duration: 0.9, ease: 'power3.out', onUpdate: () => camera.updateProjectionMatrix() });
    } else {
      if (prev) prev.groups.forEach(g => { g.visible = false; setGroupOpacity(g, 0); });
      theme.groups.forEach(g => { g.visible = true; setGroupOpacity(g, 1); });
      scene.fog = new THREE.FogExp2(theme.fog.color, theme.fog.density);
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    const dt = Math.min(clock.getDelta(), 0.05);

    mouse.x += (targetMouse.x - mouse.x) * 0.04;
    mouse.y += (targetMouse.y - mouse.y) * 0.04;
    camera.position.x = mouse.x * 0.6;
    camera.position.y = -mouse.y * 0.4;
    camera.lookAt(0, 0, -10);

    scene.children.forEach(g => {
      if (!g.visible) return;
      if (g.userData.isTwinkle || g.userData.isGalaxy) {
        if (g.material.uniforms) g.material.uniforms.uTime.value = t;
        g.rotation.y += dt * (g.userData.isGalaxy ? 0.01 : 0.002);
      }
      if (g.userData.isAurora) g.material.uniforms.uTime.value = t;
      if (g.userData.isLake) g.material.uniforms.uTime.value = t;
      if (g.userData.isGlow) {
        const pos = g.geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          let y = pos.getY(i) + g.userData.speeds[i] * dt * (g.userData.rise ? 1 : -1);
          let x = pos.getX(i) + Math.sin(t + i) * g.userData.drift * dt;
          if (y > 14) y = -14; if (y < -14) y = 14;
          pos.setY(i, y); pos.setX(i, x);
        }
        pos.needsUpdate = true;
      }
      if (g.userData.isClouds) g.children.forEach(s => { s.position.x += s.userData.speed * dt * 6; if (s.position.x > 30) s.position.x = -30; });
      if (g.userData.isPetals) {
        g.children.forEach(s => {
          s.position.y -= s.userData.fall * dt * 6;
          s.position.x += Math.sin(t * 0.6 + s.userData.phase) * s.userData.sway;
          s.material.rotation += s.userData.spin;
          if (s.position.y < -g.userData.area / 2) s.position.y = g.userData.area / 2;
        });
      }
      if (g.userData.isLanterns) g.children.forEach(s => { s.position.y += Math.sin(t * 0.5 + s.userData.phase) * 0.002; s.position.x += s.userData.driftX * dt; if (Math.abs(s.position.x) > 14) s.userData.driftX *= -1; });
      if (g.userData.isBloom) g.children[0].scale.setScalar(16 + Math.sin(t * 1.2) * 1.5);
      if (g.userData.isMoon) g.children[0].material.opacity = 0.75 + Math.sin(t * 0.8) * 0.15;
      if (g.userData.isShooting) {
        g.userData.timer += dt;
        if (g.userData.timer > g.userData.next) { g.userData.timer = 0; g.userData.next = 3 + Math.random() * 5; spawnShootingStreak(g); }
        g.children.forEach(s => {
          s.position.x += s.userData.vx; s.position.y += s.userData.vy; s.userData.life -= dt * 0.6;
          s.material.opacity = Math.max(s.userData.life, 0);
        });
        g.children = g.children.filter(s => s.userData.life > 0);
      }
      if (g.userData.isNebula) g.children.forEach(s => { s.rotation.z += s.userData.speed * dt; });
    });

    renderer.render(scene, camera);
  }

  return { init, setTheme };
})();
