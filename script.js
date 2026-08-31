/* =========================================================
   ✏️ EDIT ME — personalize the whole site from right here
   ========================================================= */
const CONFIG = {
  metSince: "2025-10-10T00:00:00", // ✏️ set this to your real October 10 — the year your love story began
  birthdayMonth: 9, // ✏️ birthday month (1-12) — September
  birthdayDay: 2, // ✏️ birthday day of month — the countdown always targets this month/day, rolling to next year automatically once it passes
  // ✏️ Only 4 cards expected — replace the emoji/captions with your own 4 memories.
  gallery: [
    { emoji: "🎉", cap: "That ridiculous night out", photo: "assets/pic1.jpg" },
    { emoji: "🍕", cap: "Terrible pizza, great night", photo: "assets/pic2.jpg" },
    { emoji: "🎮", cap: "The gaming marathon", photo: "assets/pic3.jpg" },
    { emoji: "🎂", cap: "That birthday", photo: "assets/pic4.jpg" },
  ],
  // ✏️ Our Journey — cards start as a mystery (just an emoji). Tap to unlock each memory.
  timeline: [
    { emoji: "💙", title: "First Meet", date: "Jan 25",
      text: "Some love stories begin unexpectedly,\nbut become unforgettable forever." },
    { emoji: "😊", title: "Crazy Moments", date: "Jan 25",
      text: "The right person turns ordinary days\ninto beautiful memories." },
    { emoji: "📸", title: "Best Memories", date: "Forever", isPhoto: true,
      photo: "assets/pic6.jpg",
      text: "No matter where life takes us,\nthese memories will always stay with us." },
    { emoji: "🎂", title: "Birthday Wishes", date: "Always",
      text: "Happy Birthday Suu ❤️\nThank you for being the love of my life." },
  ],
  // ✏️ Love Quotes — short romantic lines shown in the Love Quotes section.
  loveQuotes: [
    "Somewhere between friendship and love, you became someone I could never imagine losing.",
    "I lost pieces of my peace, but I never lost the care I had for you.",
    "Even when life became heavy, your smile still mattered to me.",
    "I didn't stay because everything was easy. I stayed because you became too important to lose.",
    "I cared about your feelings even when I was struggling to understand my own.",
    "What started as friendship slowly became the love I was afraid to lose.",
    "Your happiness became something my heart naturally cared about.",
    "I never wanted perfect days. I only wanted us to stay when the days became difficult.",
    "Maybe I couldn't always say it right, but I never stopped caring.",
    "You became more than a person in my life. You became a part of the way I feel.",
    "Home isn't a place. It's you.",
    "Every 'I love you' still feels like the first one.",
  ],
  wishes: [
    "You make ordinary days fun ❤️",
    "My favorite person to annoy 💕",
    "Yours, always 💖",
    "Thank you for everything 🌸",
    "I love your laugh 😊",
    "Home is wherever you are 🏡",
    "You make ordinary days magic ✨",
    "Still my favorite hello 👋",
  ],
  // ✏️ Little Things I Love About You — short lines shown as cards.
  littleThings: [
    "The way you laugh at your own jokes",
    "How you remember tiny details",
    "The way you say good morning",
    "How you always share your fries",
    "The way your eyes light up when you're excited",
    "How you make even errands feel like a date",
    "The way you hum without noticing",
    "How safe I feel around you",
  ],
  reasons: [
    "the way you laugh at your own jokes", "your terrible taste in memes", "how you remember tiny details",
    "the way you roast me and mean it lovingly", "your ridiculous energy", "how you always share your fries",
    "the way you hum without noticing", "your unstoppable curiosity", "how safe I feel around you",
    "your bad singing in the car", "the way you cheer me on", "how you make even errands fun",
    "your honesty, always", "the way you show up when it matters", "how you remember our inside jokes",
    "your patience with me", "the way your eyes light up when you're excited", "how you always know what to say",
    "your kindness to strangers", "the way you dance like nobody's watching", "how you believe in me",
    "your endless playlists", "the way you say 'good morning'", "how you make me a better person",
    "your bravery in small moments", "the way you always have my back", "how you never give up on us",
  ],
  quiz: [
    { q: "What's my favorite color?", options: ["Blue", "Pink", "Green", "Purple"], correct: 1 },
    { q: "What's my favorite food?", options: ["Pizza", "Gobi", "Sushi", "Pasta"], correct: 1 },
    { q: "Where did we first hang out?", options: ["The park", "A coffee shop", "Mysore", "A restaurant"], correct: 2 },
    { q: "What's my dream travel destination?", options: ["Same-college", "Bijapur", "Yadgir", "Oxford-Nagrabetta"], correct: 0 },
    { q: "What song reminds me of us?", options: ["Perfect", "Kesariya", "Mungaru Maleyali", "Sahiba"], correct: 2 },
  ],
  letter: "Suu, somewhere along the way, you became more than someone I cared about. ❤️\n\nYour happiness, your smile, and your feelings started meaning everything to me.\n\nI may not always say it, but I care about you more than I show.\n\nMaybe my little secret is simple—I just love caring for you. 🫶❤️\n\nAnd you'll always have a special place in my heart. ♾️",
  // ✏️ "Things I Never Knew How To Say" — a private, unspoken letter. Each string is its own
  // paragraph, revealed one at a time as the reader scrolls. Wrap a phrase in **double
  // asterisks** to have it softly highlighted.
  unspokenLetter: [
    "I know we have fought a lot of times, and I know I've made mistakes too. But one thing I never changed was the trust I had in you. No matter how many problems came between us, I still believed in you.",
    "I don't know what you think about me now, or what I mean to you anymore. But honestly, I feel guilty every time I think about everything that happened between us. Maybe I could have handled things better, maybe I could have understood you more.",
    "But when I needed you the most, especially when I was at my worst, I felt like I was alone. You didn't come to fix things with me — you left, and I had to suffer through those moments by myself. **There were so many times I just wanted you beside me, not to solve everything, but simply to stay.**",
    "This college life already feels difficult to me. At my lowest, I didn't want anyone else. I just wanted you. And when even you neglected me during those moments, it hurt more than I can explain.",
    "I'm not saying all this to blame you or make you feel guilty. I'm saying it because I've kept so much inside me for so long. I can fight with you, I can get angry, and I can make mistakes — but **deep down, I never stopped caring about you.**",
    "Even after everything, a part of me still hopes that you'll understand what I was feeling instead of only seeing my mistakes.",
    "I don't know what will happen between us, but I know one thing: **I never wanted to lose you.** I just wanted us to fix things together instead of leaving each other when things became difficult.",
    "And honestly, I'll probably carry this guilt and these feelings with me for a very long time, because **you mattered to me more than I ever knew how to explain.**",
  ],
  // ✏️ "The Things My Heart Still Says" — four emotional quote cards.
  heartStillSays: [
    { icon: "🥀", text: "I lost friends. I lost peace. I went through hurt I never talked about. 💔 But through all of it, one thing never changed — I still cared about you, your feelings, your smile and your happiness more than my own. ❤️‍🩹" },
    { icon: "🌙", text: "Maybe you will never know how much I fought silently just to stay beside you. 🥺 I didn't stay because it was painless. I stayed because somewhere along the way, you became too important to lose. ❤️‍🩹🫶" },
    { icon: "🫂", text: "We started as friends, but you became the person whose sadness I feel, whose silence I notice, whose happiness matters to me, and whose heart I want to protect. ❤️🔐" },
    { icon: "❤️", text: "I don't want to be just the person you love on your best days. I want to be the person who understands you on your worst ones — and still chooses you. 🥹🫶♾️" },
  ],
  // ✏️ "Forever Begins" — the closing line of the whole site.
  foreverQuote: "I didn't fall in love with you in a single moment. I lost pieces of myself slowly — friends, peace, comfort — and somewhere in that struggle, I found something I never expected: a love that made me care about your feelings more than my own.",
  // ✏️ Finale page ("FOREVER BEGINS") — shown right after she taps YES.
  finaleMessage: "I didn't fall in love with you in a single moment.\n\nI lost pieces of myself slowly—friends, peace, comfort—and somewhere in that struggle, I found something I never expected:\n\na love that made me care about your feelings more than my own.",
  finaleSecret: "If you ever wonder what you mean to me...\n\nyou became someone I never wanted to lose. ❤️",
  // ✏️ Files expected in songs/ using these exact filenames
  tracks: [
    { title: "Nange Allav", src: "songs/1.mp3" },
    { title: "Manasella", src: "songs/2.mp3" },
  ],
};

/* =========================================================
   MUSIC MANIFEST AUTO-LOADER
   Drop your mp3 files into songs/, then list them in songs/manifest.json.
   Each entry can be a plain filename ("1.mp3" — the title is guessed from
   the filename) or an object with a custom title: { "file": "1.mp3", "title": "Nange Allav" }.
   The player below fetches that manifest and builds the whole playlist
   from it, so nothing is hardcoded in this file. If the manifest can't be
   fetched (e.g. the site is opened directly as a local file instead of
   through a server), it quietly falls back to CONFIG.tracks above.
   ========================================================= */
const tracksReadyPromise = fetch('songs/manifest.json', { cache: 'no-store' })
  .then(r => (r.ok ? r.json() : null))
  .then(list => {
    if (Array.isArray(list) && list.length) {
      CONFIG.tracks = list.filter(Boolean).map(entry => {
        const isObj = typeof entry === 'object' && entry !== null;
        const file = String(isObj ? entry.file : entry).replace(/^\/+/, '');
        return {
          title: (isObj && entry.title) ? entry.title : file.replace(/\.[a-z0-9]+$/i, ''),
          src: 'songs/' + file.split('/').map(encodeURIComponent).join('/'),
        };
      });
    }
  })
  .catch(() => { /* manifest missing/unreachable — keep the built-in CONFIG.tracks */ });

/* =========================================================
   LANDING → MAIN TRANSITION
   ========================================================= */
const bigHeart = document.getElementById('big-heart');
const landing = document.getElementById('landing');
const overlay = document.getElementById('explosion-overlay');
const site = document.getElementById('site');
const cine = document.getElementById('cinematic-overlay');

bigHeart.addEventListener('click', () => {
  if (bigHeart.classList.contains('popping')) return;
  bigHeart.classList.add('popping');
  cine.classList.add('active', 'freeze');

  // Stage 1 (0–500ms): heart pulses hard, background freezes
  // Stage 2 (500–900ms): screen slowly zooms
  setTimeout(() => landing.classList.add('leaving'), 550);

  // Stage 3 (~900ms): heart explodes into thousands of glowing 3D particles
  // (heart-particle-3d.js) that swirl and physically merge back into a real
  // volumetric heart shape, plus the lighter 2D sparkle/petal/butterfly
  // flourish layered on top.
  setTimeout(() => {
    const heart3dCanvas = document.getElementById('heart-particle-3d-canvas');
    if (window.HeartParticleEffect && heart3dCanvas) {
      HeartParticleEffect.run({ canvas: heart3dCanvas });
    }
    burstHeartParticles();
    cine.classList.add('burst');
  }, 900);

  // Stage 4 (~4200ms): once the particles have merged into the heart and
  // pulsed a couple of times, soft white flash
  setTimeout(() => overlay.classList.add('fire'), 4200);

  // Stage 5 (~4900ms): website fades in like a Disney movie
  setTimeout(() => {
    if (window.HeartParticleEffect) HeartParticleEffect.stop();
    landing.remove();
    cine.remove();
    site.hidden = false;
    site.classList.add('fade-in-disney');
    document.body.style.cursor = matchMedia('(hover:hover)').matches ? 'none' : 'auto';
    initMainSite();
    tracksReadyPromise.then(tryPlayMusic);
  }, 4900);
});

/* =========================================================
   VECTOR SHAPE HELPERS (canvas) — used instead of emoji glyphs
   ========================================================= */
function drawVectorHeart(ctx, x, y, size, color) {
  const s = size / 20;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.beginPath();
  ctx.moveTo(0, 8);
  ctx.bezierCurveTo(-16, -6, -20, -14, -10, -18);
  ctx.bezierCurveTo(-3, -21, 0, -14, 0, -10);
  ctx.bezierCurveTo(0, -14, 3, -21, 10, -18);
  ctx.bezierCurveTo(20, -14, 16, -6, 0, 8);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}
function drawVectorSparkle(ctx, x, y, size, color) {
  const s = size / 20;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.beginPath();
  ctx.moveTo(0, -10);
  ctx.quadraticCurveTo(1, -1, 10, 0);
  ctx.quadraticCurveTo(1, 1, 0, 10);
  ctx.quadraticCurveTo(-1, 1, -10, 0);
  ctx.quadraticCurveTo(-1, -1, 0, -10);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}
function drawVectorPetal(ctx, x, y, size, rotationDeg, color) {
  const s = size / 20;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate((rotationDeg * Math.PI) / 180);
  ctx.scale(s, s);
  ctx.beginPath();
  ctx.moveTo(0, -12);
  ctx.bezierCurveTo(9, -6, 9, 8, 0, 14);
  ctx.bezierCurveTo(-9, 8, -9, -6, 0, -12);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, -12, 0, 14);
  grad.addColorStop(0, color[0]);
  grad.addColorStop(1, color[1]);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.restore();
}

function burstHeartParticles() {
  const canvas = document.getElementById('particle-burst-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = innerWidth; canvas.height = innerHeight;
  const cx = innerWidth / 2, cy = innerHeight / 2;
  const colors = ['#ffd6e8', '#ff8fb8', '#ffe9b0', '#e6d9ff', '#ffffff'];
  const particles = Array.from({ length: 220 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 7;
    const kindRoll = Math.random();
    return {
      x: cx, y: cy,
      vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
      size: 4 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      kind: kindRoll < 0.35 ? 'heart' : kindRoll < 0.55 ? 'sparkle' : 'dot',
      life: 1,
    };
  });
  let frames = 0;
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.globalAlpha = Math.max(p.life, 0);
      if (p.kind === 'heart') {
        drawVectorHeart(ctx, p.x, p.y, p.size * 1.4, p.color);
      } else if (p.kind === 'sparkle') {
        drawVectorSparkle(ctx, p.x, p.y, p.size * 1.4, p.color);
      } else {
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      p.x += p.vx; p.y += p.vy; p.vy += 0.03;
      p.life -= 0.012;
    });
    ctx.globalAlpha = 1; ctx.shadowBlur = 0;
    frames++;
    if (frames < 130) requestAnimationFrame(loop);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  loop();
}

/* =========================================================
   CURSOR TRAIL (heart + sparkle)
   ========================================================= */
(function cursorTrail() {
  if (matchMedia('(hover: none), (pointer: coarse)').matches) return; // touch devices: skip entirely, don't just hide it
  const canvas = document.getElementById('cursor-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
  resize(); addEventListener('resize', resize);

  let last = 0;
  addEventListener('pointermove', (e) => {
    const now = performance.now();
    if (now - last < 40) return;
    last = now;
    const isHeart = Math.random() > 0.6;
    particles.push({ x: e.clientX, y: e.clientY, life: 1, isHeart, size: isHeart ? 13 : 9, vy: -0.4 - Math.random() * 0.4 });
    if (particles.length > 60) particles.shift();
  });

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.shadowColor = p.isHeart ? 'rgba(255,111,165,.8)' : 'rgba(255,207,138,.8)';
      ctx.shadowBlur = 10;
      if (p.isHeart) drawVectorHeart(ctx, p.x, p.y, p.size, '#ff6fa5');
      else drawVectorSparkle(ctx, p.x, p.y, p.size, '#ffcf8a');
      ctx.shadowBlur = 0;
      p.y += p.vy;
      p.life -= 0.02;
    });
    particles = particles.filter(p => p.life > 0);
    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  }
  loop();
})();

/* =========================================================
   AMBIENT PARTICLES — hearts, falling roses, fireflies
   ========================================================= */
(function ambient() {
  const canvas = document.getElementById('ambient-canvas');
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = innerWidth; canvas.height = document.documentElement.scrollHeight; }
  resize();
  addEventListener('resize', resize);
  const resizeObs = new ResizeObserver(resize);
  resizeObs.observe(document.body);

  const hearts = Array.from({ length: 22 }, makeHeart);
  const petals = Array.from({ length: 14 }, makePetal);
  const flies = Array.from({ length: 18 }, makeFly);

  function makeHeart() {
    return {
      x: Math.random() * innerWidth, y: Math.random() * canvas.height,
      size: 8 + Math.random() * 16, speed: 0.15 + Math.random() * 0.3,
      drift: Math.random() * 2 - 1, opacity: 0.25 + Math.random() * 0.4,
    };
  }
  function makePetal() {
    return {
      x: Math.random() * innerWidth, y: Math.random() * -canvas.height,
      size: 10 + Math.random() * 8, speed: 0.4 + Math.random() * 0.6,
      sway: Math.random() * 2, rot: Math.random() * 360,
    };
  }
  function makeFly() {
    return {
      x: Math.random() * innerWidth, y: Math.random() * canvas.height,
      t: Math.random() * 1000, r: 20 + Math.random() * 30,
    };
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(h => {
      ctx.globalAlpha = h.opacity;
      drawVectorHeart(ctx, h.x, h.y, h.size, '#ff85b3');
      h.y -= h.speed;
      h.x += Math.sin(h.y / 60) * 0.3 * h.drift;
      if (h.y < -20) { h.y = canvas.height + 20; h.x = Math.random() * innerWidth; }
    });

    ctx.globalAlpha = 0.85;
    petals.forEach(p => {
      drawVectorPetal(ctx, p.x, p.y, p.size, p.rot, ['#ffd6e8', '#ff9fc4']);
      p.y += p.speed;
      p.x += Math.sin(p.y / 40) * p.sway;
      p.rot += 1.2;
      if (p.y > canvas.height + 20) { p.y = -20; p.x = Math.random() * innerWidth; }
    });

    flies.forEach(f => {
      f.t += 0.02;
      const fx = f.x + Math.cos(f.t) * f.r;
      const fy = f.y + Math.sin(f.t * 1.3) * f.r;
      const glow = (Math.sin(f.t * 3) + 1) / 2;
      ctx.globalAlpha = 0.3 + glow * 0.6;
      ctx.fillStyle = '#fff3b0';
      ctx.shadowColor = '#fff3b0';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(fx, fy, 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  }
  loop();
})();

/* =========================================================
   CINEMATIC SCENE ENGINE bootstrap (runs immediately, not gated
   behind the landing screen, so the first theme is ready the
   moment #site becomes visible)
   ========================================================= */
let currentBgTheme = null;
let activeBgLayer = 'a';
function applyTheme(theme) {
  if (!theme || theme === currentBgTheme) return;
  currentBgTheme = theme;
  const showId = activeBgLayer === 'a' ? 'bg-b' : 'bg-a';
  const hideId = activeBgLayer === 'a' ? 'bg-a' : 'bg-b';
  const showEl = document.getElementById(showId);
  const hideEl = document.getElementById(hideId);
  showEl.className = `bg-theme-layer theme-${theme} active`;
  hideEl.classList.remove('active');
  activeBgLayer = activeBgLayer === 'a' ? 'b' : 'a';
  if (window.SceneEngine) window.SceneEngine.setTheme(theme);
  firePortalTransition();
}
function firePortalTransition() {
  const layer = document.getElementById('transition-burst-layer');
  if (!layer) return;
  layer.classList.remove('firing');
  void layer.offsetWidth;
  layer.classList.add('firing');
  const trail = document.createElement('div');
  trail.className = 'portal-trail';
  layer.appendChild(trail);
  setTimeout(() => trail.remove(), 950);
  const site = document.getElementById('site');
  if (site) {
    site.classList.remove('portal-zoom');
    void site.offsetWidth;
    site.classList.add('portal-zoom');
  }
  setTimeout(() => { layer.classList.remove('firing'); if (site) site.classList.remove('portal-zoom'); }, 1000);
}
(function bootSceneEngine() {
  const canvas = document.getElementById('scene-canvas');
  if (canvas && window.SceneEngine) window.SceneEngine.init(canvas);
  // set the very first theme immediately (landing + chapter one are both "night-sky")
  applyTheme(document.querySelector('[data-theme]')?.dataset.theme || 'night-sky');
})();
function initThemeTransitions() {
  const themedEls = Array.from(document.querySelectorAll('[data-theme]'));
  const ratios = new Map(themedEls.map(el => [el, 0]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => ratios.set(e.target, e.intersectionRatio));
    let best = null, bestRatio = 0;
    ratios.forEach((ratio, el) => { if (ratio > bestRatio) { bestRatio = ratio; best = el; } });
    if (best && bestRatio > 0.15) applyTheme(best.dataset.theme);
  }, { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1] });
  themedEls.forEach(el => io.observe(el));
}

/* =========================================================
   MAIN SITE INIT (runs once landing is dismissed)
   ========================================================= */
function initMainSite() {
  initCountdown();
  initTimeline();
  initGiftFrameChapter();
  initLoveQuotes();
  initGallery();
  initWishes();
  initFavoritePerson();
  initEntireWorld();
  initMilestones();
  initReasons();
  initQuiz();
  initLetter();
  initLittleThings();
  initUnspokenWords();
  initHeartStillSays();
  initSu7Page();
  initTapReveal();
  initProposal();
  initGift();
  initDotNav();
  ensureMusicPlayer();
  initSurpriseMoments();
  initSmoothScroll();
  initCinematicReveals();
  initMagneticButtons();
  initClickRipples();
  initThemeTransitions();
  initLightbox();
  initEndingFinale();
}

/* ---------- Countdown ---------- */
// Always targets CONFIG.birthdayMonth/birthdayDay in the user's own local
// timezone: if that date already passed this year (or is happening right
// now), it targets next year instead — recomputed live so it keeps working
// correctly forever without ever hardcoding a year. Using the local-time
// Date constructor (not UTC math) means the "day" always matches the
// visitor's own calendar, and JS's Date normalizes month/day overflow for
// us, so leap years (e.g. a Feb 29 birthday) roll over correctly too.
function nextBirthdayTarget() {
  const now = new Date();
  const month = CONFIG.birthdayMonth - 1; // JS months are 0-indexed
  const day = CONFIG.birthdayDay;
  let target = new Date(now.getFullYear(), month, day, 0, 0, 0, 0);
  if (target.getTime() <= now.getTime()) {
    target = new Date(now.getFullYear() + 1, month, day, 0, 0, 0, 0);
  }
  return target.getTime();
}
function isBirthdayToday(now = new Date()) {
  return now.getMonth() === (CONFIG.birthdayMonth - 1) && now.getDate() === CONFIG.birthdayDay;
}
function initCountdown() {
  let target = nextBirthdayTarget();
  const els = {
    d: document.getElementById('cd-days'), h: document.getElementById('cd-hours'),
    m: document.getElementById('cd-mins'), s: document.getElementById('cd-secs'),
  };
  const wrap = document.getElementById('countdown-wrap');
  const subtitle = document.getElementById('countdown-subtitle');
  const todayPanel = document.getElementById('birthday-today');
  let showingToday = null; // tri-state so we only touch the DOM on an actual change

  function showBirthdayState(isToday) {
    if (showingToday === isToday) return;
    showingToday = isToday;
    if (wrap) wrap.hidden = isToday;
    if (todayPanel) todayPanel.hidden = !isToday;
    if (subtitle) subtitle.hidden = isToday;
  }

  function tick() {
    const now = new Date();
    if (isBirthdayToday(now)) {
      showBirthdayState(true);
      return;
    }
    showBirthdayState(false);

    let diff = target - now.getTime();
    if (diff <= 0) {
      // the target moment just passed (e.g. tab left open past midnight on
      // the birthday) — recompute so it rolls straight into next year's
      // countdown instead of freezing at zero.
      target = nextBirthdayTarget();
      diff = target - Date.now();
    }
    const sec = Math.floor(diff / 1000);
    els.d.textContent = Math.floor(sec / 86400);
    els.h.textContent = Math.floor((sec % 86400) / 3600);
    els.m.textContent = Math.floor((sec % 3600) / 60);
    els.s.textContent = sec % 60;
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------- Scroll reveal helper ---------- */
function revealOnScroll(selector, className = 'in') {
  const els = document.querySelectorAll(selector);
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(className); });
  }, { threshold: 0.25 });
  els.forEach(el => io.observe(el));
}
/* ---------- Our Journey: mystery memory cards ---------- */
function initTimeline() {
  const track = document.getElementById('timeline');
  track.innerHTML = CONFIG.timeline.map((m, i) => {
    const paragraphs = m.text.split('\n\n').map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
    const photoInner = m.isPhoto
      ? (m.photo
          ? `<div class="tl-photo tl-photo-real"><img src="${m.photo}" alt="${m.title}" loading="lazy" onerror="this.closest('.tl-photo').classList.add('tl-photo-placeholder');this.remove();this.closest('.tl-photo').insertAdjacentHTML('beforeend','<svg viewBox=&quot;0 0 24 24&quot; width=&quot;34&quot; height=&quot;34&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.4&quot;><rect x=&quot;3&quot; y=&quot;5&quot; width=&quot;18&quot; height=&quot;14&quot; rx=&quot;2&quot;/><circle cx=&quot;9&quot; cy=&quot;10&quot; r=&quot;1.8&quot;/><path d=&quot;M21 16l-5.5-5.5a2 2 0 0 0-2.8 0L5 18&quot;/></svg><span>add your picture here</span>')"></div>`
          : `<div class="tl-photo tl-photo-placeholder"><svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5.5-5.5a2 2 0 0 0-2.8 0L5 18"/></svg><span>add your picture here</span></div>`)
      : `<div class="tl-photo" style="background:linear-gradient(135deg, hsl(${i * 48 + 20},72%,88%), hsl(${i * 48 + 70},72%,80%))"><span>${m.emoji}</span></div>`;
    return `
    <div class="timeline-card" data-index="${i}" tabindex="0" role="button" aria-label="Reveal memory: ${m.title}">
      <div class="tl-shell">
        <div class="tl-closed">
          <span class="tl-emoji">${m.emoji}</span>
          <span class="tl-spark">✦</span><span class="tl-spark">✦</span><span class="tl-spark">✦</span>
          <span class="tl-tap-hint">tap to unlock</span>
        </div>
        <div class="tl-content">
          ${photoInner}
          <div class="tl-body">
            <h3>${m.title}</h3>
            ${paragraphs}
            <span class="tl-date">${m.date}</span>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

  revealOnScroll('.timeline-card');

  const cards = track.querySelectorAll('.timeline-card');
  cards.forEach(card => {
    // gentle 3D mouse-parallax tilt
    const shell = card.querySelector('.tl-shell');
    card.addEventListener('pointermove', (e) => {
      if (card.classList.contains('revealed')) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      shell.style.setProperty('--rx', `${px * 14}deg`);
      shell.style.setProperty('--ry', `${-py * 14}deg`);
    });
    card.addEventListener('pointerleave', () => {
      shell.style.setProperty('--rx', `0deg`);
      shell.style.setProperty('--ry', `0deg`);
    });

    const open = () => openTimelineCard(card);
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });

    const photoEl = card.querySelector('.tl-photo');
    if (photoEl) {
      photoEl.addEventListener('click', (e) => {
        if (!card.classList.contains('revealed')) return;
        e.stopPropagation();
        Lightbox.open(buildTimelineLightboxList(), +card.dataset.index);
      });
    }
  });
}
function buildTimelineLightboxList() {
  return CONFIG.timeline.map((m, i) => ({
    mode: m.isPhoto ? (m.photo ? 'image' : 'missing') : 'gradient',
    src: m.photo || null,
    gradient: `linear-gradient(135deg, hsl(${i * 48 + 20},72%,88%), hsl(${i * 48 + 70},72%,80%))`,
    emoji: m.emoji,
    title: m.title,
    desc: m.text.replace(/\n+/g, ' '),
    date: m.date,
  }));
}

function openTimelineCard(card) {
  if (card.classList.contains('revealed') || card.classList.contains('opening')) return;
  const emoji = card.querySelector('.tl-emoji').textContent;
  card.classList.add('opening');

  burstEmojiParticles(card, emoji);
  spawnHeartPops(card);

  setTimeout(() => {
    card.classList.remove('opening');
    card.classList.add('revealed');
  }, 650);
}

function burstEmojiParticles(card, emoji) {
  const shell = card.querySelector('.tl-shell');
  const burst = document.createElement('div');
  burst.className = 'tl-burst';
  const glyphs = [emoji, '✦', '✨', '💫'];
  burst.innerHTML = Array.from({ length: 14 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 90;
    const bx = Math.cos(angle) * dist, by = Math.sin(angle) * dist;
    const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
    return `<span style="--bx:${bx}px;--by:${by}px;--br:${Math.random() * 360}deg">${glyph}</span>`;
  }).join('');
  shell.appendChild(burst);
  setTimeout(() => burst.remove(), 950);
}

function spawnHeartPops(card) {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      const h = document.createElement('span');
      h.className = 'tl-heart-pop';
      h.textContent = Math.random() > 0.5 ? '💗' : '🦋';
      h.style.left = `${20 + Math.random() * 60}%`;
      h.style.bottom = '10%';
      card.querySelector('.tl-shell').appendChild(h);
      setTimeout(() => h.remove(), 1900);
    }, i * 120);
  }
}

/* ---------- Gallery: tap-to-reveal ---------- */
const revealedCards = new Set();
function galleryCardHTML(g, i) {
  return `
    <div class="gallery-card" data-index="${i}">
      <div class="gallery-photo-zoom" style="--zoom-dur:${13 + i * 1.5}s; --zoom-delay:${-i * 2}s;">
        <div class="gallery-photo" style="${g.photo ? `background-image:url('${g.photo}');background-size:cover;background-position:center;` : `background:linear-gradient(135deg, hsl(${i * 45},70%,88%), hsl(${i * 45 + 40},70%,80%))`}">${g.photo ? '' : g.emoji}</div>
      </div>
      <div class="cap">${g.cap}</div>
      <div class="frame-face">
        <span class="frame-heart">❤️</span>
        <span class="frame-label">Tap to Reveal ❤️</span>
      </div>
      <div class="frame-crack"></div>
      <div class="sparkle-burst">
        ${Array.from({ length: 8 }).map((_, s) => {
          const angle = (s / 8) * Math.PI * 2;
          const sx = Math.round(Math.cos(angle) * 60), sy = Math.round(Math.sin(angle) * 60);
          return `<span style="--sx:${sx}px;--sy:${sy}px">✦</span>`;
        }).join('')}
      </div>
    </div>`;
}
function initGallery() {
  const grid = document.getElementById('gallery-grid');
  renderGalleryGrid();
  autoDetectGalleryPhotos();

  function renderGalleryGrid() {
    grid.innerHTML = CONFIG.gallery.map((g, i) => galleryCardHTML(g, i)).join('');
    grid.querySelectorAll('.gallery-card').forEach(bindGalleryCard);
  }
  function bindGalleryCard(card) {
    card.addEventListener('click', () => {
      const i = +card.dataset.index;
      if (!revealedCards.has(i)) {
        revealCard(card, i);
      } else {
        Lightbox.open(buildGalleryLightboxList(), i);
      }
    });
  }

  // Auto-load real photos named gallery1.jpg, gallery2.jpg, ... from
  // assets/ — checks jpg/jpeg/png/webp, and keeps looking past the
  // 4 built-in cards (gallery5, gallery6, ...) in case more are dropped in,
  // adding extra cards for any it finds without touching the design.
  function autoDetectGalleryPhotos() {
    const exts = ['jpg', 'jpeg', 'png', 'webp'];
    const MAX_SLOTS = 12;
    for (let n = 1; n <= MAX_SLOTS; n++) tryLoad(n, 0);

    function tryLoad(n, extIndex) {
      if (extIndex >= exts.length) return;
      const src = `assets/gallery${n}.${exts[extIndex]}`;
      const img = new Image();
      img.onload = () => applyPhoto(n, src);
      img.onerror = () => tryLoad(n, extIndex + 1);
      img.src = src;
    }
    function applyPhoto(n, src) {
      const i = n - 1;
      if (!CONFIG.gallery[i]) {
        CONFIG.gallery[i] = { emoji: '📷', cap: `Memory #${n}` };
        renderGalleryGrid(); // a brand-new slot beyond the original 4 — rebuild once
      }
      CONFIG.gallery[i].photo = src;
      const photoEl = grid.querySelector(`.gallery-card[data-index="${i}"] .gallery-photo`);
      if (photoEl) {
        photoEl.style.backgroundImage = `url('${src}')`;
        photoEl.style.backgroundSize = 'cover';
        photoEl.style.backgroundPosition = 'center';
        photoEl.textContent = '';
      }
    }
  }
}
function revealCard(card, i) {
  revealedCards.add(i);
  card.classList.add('revealing');
  setTimeout(() => {
    card.classList.remove('revealing');
    card.classList.add('revealed');
  }, 550);
}
function buildGalleryLightboxList() {
  return CONFIG.gallery.map((g, i) => ({
    mode: g.photo ? 'image' : 'gradient',
    src: g.photo || null,
    gradient: `linear-gradient(135deg, hsl(${i * 45},70%,88%), hsl(${i * 45 + 40},70%,80%))`,
    emoji: g.emoji,
    title: g.cap,
    desc: '',
    date: '',
  }));
}


/* ---------- Wishes ---------- */
function initWishes() {
  const grid = document.getElementById('wishes-grid');
  grid.innerHTML = CONFIG.wishes.map(w => `<div class="wish-card">${w}</div>`).join('');
  revealOnScroll('.wish-card');
}

/* ---------- Little Things I Love About You ---------- */
function initLittleThings() {
  const grid = document.getElementById('lt-grid');
  if (!grid) return;
  grid.innerHTML = CONFIG.littleThings.map(t => `<div class="lt-card">${t}</div>`).join('');
  revealOnScroll('.lt-card');
}

/* ---------- Things I Never Knew How To Say ---------- */
function initUnspokenWords() {
  const paper = document.getElementById('unspoken-paper');
  if (!paper) return;
  paper.innerHTML = CONFIG.unspokenLetter.map(p => {
    const withHighlights = p.replace(/\*\*(.+?)\*\*/g, '<mark class="unspoken-highlight">$1</mark>');
    return `<p class="unspoken-para reveal">${withHighlights}</p>`;
  }).join('');
  revealOnScroll('.unspoken-para');
}

/* ---------- The Things My Heart Still Says ---------- */
function initHeartStillSays() {
  const grid = document.getElementById('hss-grid');
  if (!grid) return;
  grid.innerHTML = CONFIG.heartStillSays.map(item => `
    <div class="hss-card">
      <span class="hss-icon">${item.icon}</span>
      <p class="hss-text">${item.text}</p>
    </div>`).join('');
  revealOnScroll('.hss-card');
}

/* ---------- pic11 — one dedicated big photo page ---------- */
function initSu7Page() {
  revealOnScroll('.fb-photo-wrap');
  revealOnScroll('.fb-quote');
}

/* ---------- Reasons ---------- */
function initReasons() {
  const list = CONFIG.reasons.map((r, i) => `<span class="reason-chip">#${i + 1} ${r}</span>`);
  const doubled = list.concat(list).join('');
  document.getElementById('reasons-scroll-1').innerHTML = doubled;
  const half = Math.ceil(CONFIG.reasons.length / 2);
  const second = CONFIG.reasons.slice(half).concat(CONFIG.reasons.slice(0, half))
    .map((r, i) => `<span class="reason-chip">💗 ${r}</span>`);
  document.getElementById('reasons-scroll-2').innerHTML = second.concat(second).join('');
}

/* ---------- Quiz ---------- */
function initQuiz() {
  const box = document.getElementById('quiz-box');
  let index = 0, score = 0;
  render();

  function render() {
    if (index >= CONFIG.quiz.length) return renderResult();
    const q = CONFIG.quiz[index];
    box.innerHTML = `
      <p class="quiz-progress">Question ${index + 1} of ${CONFIG.quiz.length}</p>
      <p class="quiz-question">${q.q}</p>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `<button class="quiz-opt" data-i="${i}">${opt}</button>`).join('')}
      </div>`;
    box.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = +btn.dataset.i;
        box.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
        if (chosen === q.correct) { btn.classList.add('correct'); score++; }
        else {
          btn.classList.add('wrong');
          box.querySelector(`[data-i="${q.correct}"]`).classList.add('correct');
        }
        setTimeout(() => { index++; render(); }, 900);
      });
    });
  }
  function renderResult() {
    const good = score >= Math.ceil(CONFIG.quiz.length * 0.7);
    box.innerHTML = `
      <div class="quiz-result">
        <h3>${good ? 'You Know Me Perfectly ❤️' : 'You Need More Dates 😄'}</h3>
        <p>You scored ${score} out of ${CONFIG.quiz.length}.</p>
        <button class="ghost-btn" id="quiz-retry">Try Again</button>
      </div>`;
    document.getElementById('quiz-retry').addEventListener('click', () => { index = 0; score = 0; render(); });
  }
}

/* ---------- Secret letter ---------- */
function initLetter() {
  const section = document.getElementById('letter');
  const envelope = document.getElementById('envelope');
  const paper = document.getElementById('letter-paper');
  const textEl = document.getElementById('letter-text');
  const hint = document.getElementById('envelope-hint');
  let opened = false, typing = false;

  // The opened letter card is positioned absolutely over the envelope so it
  // can float/glow freely — but that means it never grows the section's own
  // height on its own. Rather than trust a single fixed min-height for every
  // device/font-size, actively measure the letter card while it's open and
  // grow the section to fit it, so the next chapter can never start early.
  let growRaf = null;
  function fitSectionToLetter() {
    if (growRaf) cancelAnimationFrame(growRaf);
    growRaf = requestAnimationFrame(() => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const paperBottom = paper.getBoundingClientRect().bottom + window.scrollY;
      const needed = Math.ceil(paperBottom - sectionTop) + 56; // breathing room below the card
      const base = 560; // sane no-JS/CSS fallback floor, see .letter-section
      section.style.minHeight = `${Math.max(base, needed)}px`;
    });
  }
  if ('ResizeObserver' in window) {
    new ResizeObserver(fitSectionToLetter).observe(paper);
  }
  window.addEventListener('resize', fitSectionToLetter);

  envelope.addEventListener('click', () => {
    if (opened) return;
    opened = true;
    envelope.classList.add('open');
    hint.textContent = '';
    fadeMusic();
    fitSectionToLetter();
    setTimeout(typeLetter, 500);
  });

  function typeLetter() {
    if (typing) return;
    typing = true;
    const paragraphs = CONFIG.letter.split('\n\n');
    textEl.innerHTML = '';
    let pIndex = 0;

    function nextParagraph() {
      if (pIndex >= paragraphs.length) { typing = false; return; }
      const p = document.createElement('p');
      p.className = 'letter-para';
      textEl.appendChild(p);
      requestAnimationFrame(() => requestAnimationFrame(() => p.classList.add('show')));

      const full = paragraphs[pIndex];
      let i = 0;
      const speed = full.length > 80 ? 14 : 26;
      const id = setInterval(() => {
        p.textContent += full[i];
        i++;
        // keep the newest text in view without ever hiding earlier lines
        paper.scrollTop = paper.scrollHeight;
        if (i >= full.length) {
          clearInterval(id);
          pIndex++;
          setTimeout(nextParagraph, 260);
        }
      }, speed);
    }
    nextParagraph();
  }
}

/* ---------- Proposal: chase button + celebration ---------- */
function initProposal() {
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  const msgEl = document.getElementById('no-btn-msg');
  let attempts = 0;
  const MAX_ATTEMPTS = 9;
  let transformed = false;
  let busy = false;

  const messages = [
    "Really? 😅", "Think again ❤️", "You know the answer 😘", "No escaping this love 💖",
    "Try the YES button 😄", "I'll keep running 😝", "Suu ❤️... I already know your answer 😉",
    "Nice try 😂", "The YES button is waiting 😉",
  ];

  function showMessage(x, y, text) {
    msgEl.textContent = text || messages[Math.floor(Math.random() * messages.length)];
    const vw = window.innerWidth, vh = window.innerHeight;
    const mx = Math.min(Math.max(x, 90), vw - 90);
    const my = Math.min(Math.max(y - 50, 20), vh - 40);
    msgEl.style.setProperty('--mx', `${mx}px`);
    msgEl.style.setProperty('--my', `${my}px`);
    msgEl.classList.remove('show');
    void msgEl.offsetWidth;
    msgEl.classList.add('show');
  }

  function spawnTrail(x, y) {
    for (let i = 0; i < 6; i++) {
      const dot = document.createElement('span');
      dot.className = 'no-trail-dot';
      const isHeart = Math.random() > 0.5;
      const size = isHeart ? 8 : 4 + Math.random() * 3;
      dot.style.left = `${x + (Math.random() - 0.5) * 20}px`;
      dot.style.top = `${y + (Math.random() - 0.5) * 20}px`;
      dot.style.width = `${size}px`; dot.style.height = `${size}px`;
      dot.style.background = isHeart ? 'radial-gradient(circle, #ff9fc4, #ff6fa5)' : 'radial-gradient(circle, #fff6dd, #ffcf6e)';
      dot.style.boxShadow = isHeart ? '0 0 10px rgba(255,111,165,.8)' : '0 0 8px rgba(255,207,110,.8)';
      dot.style.animationDelay = `${i * 0.03}s`;
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 850);
    }
  }

  function rectsOverlap(x, y, w, h, rect, pad) {
    return !(x + w < rect.left - pad || x > rect.right + pad || y + h < rect.top - pad || y > rect.bottom + pad);
  }
  function randomPositionFor(el, avoidRect) {
    const btnW = el.offsetWidth || 90, btnH = el.offsetHeight || 44;
    const margin = 16;
    const vw = window.innerWidth, vh = window.innerHeight;
    let x, y, tries = 0;
    do {
      x = margin + Math.random() * (vw - btnW - margin * 2);
      y = margin + Math.random() * (vh - btnH - margin * 2);
      tries++;
    } while (tries < 12 && avoidRect && rectsOverlap(x, y, btnW, btnH, avoidRect, 40));
    return { x, y };
  }
  function randomPosition() { return randomPositionFor(noBtn, yesBtn.getBoundingClientRect()); }

  function activateRoamingEl(el) {
    if (el.classList.contains('roaming')) return;
    const r = el.getBoundingClientRect();
    el.style.left = `${r.left}px`;
    el.style.top = `${r.top}px`;
    el.style.margin = '0';
    el.classList.add('roaming');
  }
  function activateRoaming() { activateRoamingEl(noBtn); }

  function evade(clientX, clientY) {
    if (busy || transformed) return;
    busy = true;
    activateRoaming();
    const startRect = noBtn.getBoundingClientRect();
    spawnTrail(startRect.left + startRect.width / 2, startRect.top + startRect.height / 2);
    attempts++;

    const target = randomPosition();
    const midX = (startRect.left + target.x) / 2 + (Math.random() - 0.5) * 160;
    const midY = (startRect.top + target.y) / 2 + (Math.random() - 0.5) * 160;
    const rot = (Math.random() - 0.5) * 50;
    const isTired = attempts >= MAX_ATTEMPTS - 3;
    const dur1 = isTired ? 0.5 : 0.28;
    const dur2 = isTired ? 0.7 : 0.4;
    if (isTired) noBtn.classList.add('tired');

    if (window.gsap) {
      gsap.killTweensOf(noBtn);
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(noBtn, { y: '+=6', duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' });
          busy = false;
        }
      });
      tl.to(noBtn, { left: midX, top: midY, rotation: rot, duration: dur1, ease: 'power2.out' })
        .to(noBtn, { left: target.x, top: target.y, rotation: 0, duration: dur2, ease: 'back.out(1.6)' });
    } else {
      noBtn.style.transition = `left ${dur1 + dur2}s ease, top ${dur1 + dur2}s ease`;
      noBtn.style.left = `${target.x}px`;
      noBtn.style.top = `${target.y}px`;
      busy = false;
    }

    showMessage(target.x + (noBtn.offsetWidth || 90) / 2, target.y);

    if (attempts >= MAX_ATTEMPTS) setTimeout(finalTransform, isTired ? 750 : 500);
  }

  function finalTransform() {
    if (transformed) return;
    transformed = true;
    noBtn.classList.add('shaking');
    setTimeout(() => {
      noBtn.classList.remove('shaking', 'tired', 'roaming');
      noBtn.style.position = '';
      noBtn.style.left = '';
      noBtn.style.top = '';
      noBtn.style.transform = '';
      noBtn.classList.add('became-yes');
      noBtn.textContent = 'YES 💖';
      showMessage(window.innerWidth / 2, window.innerHeight / 2 - 30, "I knew you'd choose YES ❤️");
      noBtn.addEventListener('click', () => yesBtn.click());
    }, 550);
  }

  // Desktop — evade the moment the cursor gets close
  let lastCheck = 0;
  document.addEventListener('pointermove', (e) => {
    if (transformed || busy) return;
    const now = performance.now();
    if (now - lastCheck < 60) return;
    lastCheck = now;
    const r = noBtn.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    if (Math.hypot(e.clientX - cx, e.clientY - cy) < 100) evade(e.clientX, e.clientY);
  });
  // Mobile — evade the instant a tap begins near it
  noBtn.addEventListener('touchstart', (e) => {
    if (transformed) return;
    e.preventDefault();
    const t = e.touches[0];
    evade(t.clientX, t.clientY);
  }, { passive: false });
  noBtn.addEventListener('click', (e) => {
    if (transformed) return;
    e.preventDefault();
    evade(e.clientX, e.clientY);
  });

  function confirmYes() {
    document.querySelector('.proposal-section').classList.add('brighten');
    document.getElementById('celebration').hidden = false;
    document.body.classList.add('post-yes');
    launchConfetti();
    launchCelebrationBurst();
    initForeverBeginsFinale();
  }

  // YES stays fixed in place — a single tap/click confirms right away,
  // smoothly transitioning into the celebration/finale.
  function handleYesInteraction(e) {
    if (e && e.preventDefault) e.preventDefault();
    yesBtn.removeEventListener('click', handleYesInteraction);
    confirmYes();
  }
  yesBtn.addEventListener('click', handleYesInteraction);
}

/* ---------- Tap to reveal (important portraits only) ---------- */
function initTapReveal() {
  document.querySelectorAll('.tap-reveal').forEach((el) => {
    el.addEventListener('click', () => el.classList.add('is-revealed'));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.classList.add('is-revealed');
      }
    });
  });
}

function celebrate() { /* visual growth handled inline above */ }

function launchConfetti() {
  const canvas = document.getElementById('proposal-canvas');
  canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
  const ctx = canvas.getContext('2d');
  const colors = ['#ff6fa5', '#ffd27a', '#c9a7ff', '#ffe3d0', '#9fd8ff'];
  const pieces = Array.from({ length: 160 }, () => ({
    x: Math.random() * canvas.width, y: -20 - Math.random() * canvas.height,
    size: 5 + Math.random() * 6, speed: 2 + Math.random() * 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * 360, spin: (Math.random() - 0.5) * 10,
    isHeart: Math.random() > 0.7,
  }));
  let frames = 0;
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      if (p.isHeart) { ctx.font = `${p.size * 2}px sans-serif`; ctx.fillText('💖', 0, 0); }
      else { ctx.fillStyle = p.color; ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size); }
      ctx.restore();
      p.y += p.speed; p.rot += p.spin;
    });
    frames++;
    if (frames < 260) requestAnimationFrame(loop);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  loop();
}

/* ---------- Celebration: fireworks + heart explosion + butterflies + gold sparkles + rose rain ---------- */
function launchCelebrationBurst() {
  const canvas = document.getElementById('celebration-canvas');
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize(); addEventListener('resize', resize);

  const colors = ['#ff6fa5', '#ffd77a', '#c9a7ff', '#fff2b0', '#ff9fc7'];
  let fireworks = [];
  let roses = Array.from({ length: 30 }, () => ({
    x: Math.random() * canvas.width, y: -20 - Math.random() * 200,
    size: 12 + Math.random() * 10, speed: 1 + Math.random() * 1.6, sway: Math.random() * 2, rot: Math.random() * 360,
  }));

  function spawnFirework() {
    const x = Math.random() * canvas.width, y = canvas.height * (0.2 + Math.random() * 0.4);
    const isHeartBurst = Math.random() > 0.5;
    const count = 40;
    const particles = Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const speed = 2 + Math.random() * 3;
      return { x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, color: colors[Math.floor(Math.random() * colors.length)], isHeartBurst };
    });
    fireworks.push(...particles);
  }
  const fireworkTimer = setInterval(spawnFirework, 350);
  setTimeout(() => clearInterval(fireworkTimer), 3200);

  let frames = 0;
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach(p => {
      ctx.globalAlpha = Math.max(p.life, 0);
      if (p.isHeartBurst) { ctx.font = '10px sans-serif'; ctx.fillText('💛', p.x, p.y); }
      else { ctx.fillStyle = p.color; ctx.shadowColor = p.color; ctx.shadowBlur = 8; ctx.beginPath(); ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0; }
      p.x += p.vx; p.y += p.vy; p.vy += 0.03; p.life -= 0.014;
    });
    fireworks = fireworks.filter(p => p.life > 0);

    ctx.globalAlpha = 0.9;
    roses.forEach(r => {
      ctx.save();
      ctx.translate(r.x, r.y);
      ctx.rotate((r.rot * Math.PI) / 180);
      ctx.font = `${r.size}px sans-serif`;
      ctx.fillText('🌹', -r.size / 2, 0);
      ctx.restore();
      r.y += r.speed; r.x += Math.sin(r.y / 50) * r.sway; r.rot += 1;
      if (r.y > canvas.height + 20) { r.y = -20; r.x = Math.random() * canvas.width; }
    });

    ctx.globalAlpha = 1;
    frames++;
    if (frames < 420) requestAnimationFrame(loop);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  loop();
}

/* ---------- Finale: "Forever Begins" redesigned page ---------- */
let foreverFinaleReady = false;
function initForeverBeginsFinale() {
  if (foreverFinaleReady) return;
  foreverFinaleReady = true;

  // Fade out the "Will You Be Mine" prompt so the new finale reads as its own page
  const proposalSection = document.querySelector('.proposal-section');
  if (proposalSection) {
    ['.ring-wrap', '.proposal-text', '.proposal-question', '.proposal-buttons', '#no-btn-msg'].forEach((sel) => {
      const el = proposalSection.querySelector(sel);
      if (!el) return;
      el.style.transition = 'opacity .6s ease';
      el.style.opacity = '0';
      setTimeout(() => { el.style.display = 'none'; }, 650);
    });
  }

  const root = document.getElementById('celebration');
  const message = document.getElementById('fin-message');
  if (message) {
    message.innerHTML = CONFIG.finaleMessage.replace(/\n/g, '<br>') + ' <span class="fin-mark">❤️‍🩹</span>';
  }

  // Staggered fade-in for the eyebrow / title / subtitle / message
  const reveals = root ? root.querySelectorAll('.reveal') : [];
  reveals.forEach((el, i) => {
    setTimeout(() => el.classList.add('in'), 350 + i * 450);
  });

  // Gentle floating particles drifting up through the scene
  const field = document.getElementById('fin-particles');
  if (field) {
    const count = window.innerWidth < 560 ? 14 : 24;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      p.className = 'fin-particle';
      const size = 2 + Math.random() * 4;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.setProperty('--drift', `${(Math.random() - 0.5) * 60}px`);
      p.style.animationDuration = `${10 + Math.random() * 10}s`;
      p.style.animationDelay = `${Math.random() * 10}s`;
      field.appendChild(p);
    }
  }

  // Hidden heart surprise — subtle tap/click reveal
  const secret = document.getElementById('fin-secret');
  const secretText = document.getElementById('fin-secret-text');
  if (secret && secretText) {
    let opened = false;
    secret.addEventListener('click', () => {
      opened = !opened;
      secretText.innerHTML = opened ? CONFIG.finaleSecret.replace(/\n/g, '<br>') : '';
      secretText.classList.toggle('open', opened);
    });
  }

  // Hide the side dot-navigation only while this finale page is on screen
  const dotNav = document.getElementById('dot-nav');
  if (root && dotNav && 'IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        dotNav.classList.toggle('dot-nav-hidden', entry.isIntersecting);
      });
    }, { threshold: 0.35 });
    navObserver.observe(root);
  }
}

/* ---------- Surprise gift ---------- */
function initGift() {
  const box = document.getElementById('gift-box');
  const msg = document.getElementById('gift-msg');
  box.addEventListener('click', () => {
    if (box.classList.contains('opened')) return;
    box.classList.add('opened');
    box.textContent = '💥';
    setTimeout(() => { box.textContent = '💝'; msg.hidden = false; }, 350);
  });
}

/* ---------- Dot nav active state ---------- */
function initDotNav() {
  const links = document.querySelectorAll('#dot-nav a');
  const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const link = document.querySelector(`#dot-nav a[href="#${e.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => s && io.observe(s));
}

/* ---------- Music player ---------- */
let currentTrack = 0;
let musicPlayerReady = false;
function ensureMusicPlayer() {
  if (musicPlayerReady) return Promise.resolve();
  musicPlayerReady = true;
  return tracksReadyPromise.then(initMusicPlayer);
}
function initMusicPlayer() {
  const player = document.getElementById('music-player');
  const audio = document.getElementById('bg-audio');
  const playBtn = document.getElementById('play-pause');
  const title = document.getElementById('track-title');
  const volume = document.getElementById('volume');
  const seek = document.getElementById('seek');
  const timeCurrent = document.getElementById('time-current');
  const timeTotal = document.getElementById('time-total');
  const loopBtn = document.getElementById('loop-track');
  const shuffleBtn = document.getElementById('shuffle-track');
  const playlistToggle = document.getElementById('playlist-toggle');
  const playlistEl = document.getElementById('playlist');
  const playerToggle = document.getElementById('player-toggle');
  const playerClose = document.getElementById('player-close');
  let shuffleOn = false;

  function nextIndex() {
    if (shuffleOn && CONFIG.tracks.length > 1) {
      let i;
      do { i = Math.floor(Math.random() * CONFIG.tracks.length); } while (i === currentTrack);
      return i;
    }
    return (currentTrack + 1) % CONFIG.tracks.length;
  }
  shuffleBtn.addEventListener('click', () => {
    shuffleOn = !shuffleOn;
    shuffleBtn.classList.toggle('active', shuffleOn);
  });

  playlistEl.innerHTML = CONFIG.tracks.map((t, i) => `<li data-i="${i}">${t.title}</li>`).join('');
  playlistEl.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => { loadTrack(+li.dataset.i); tryPlayMusic(); });
  });

  loadTrack(0);
  audio.volume = 0.5;
  audio.loop = false;

  // Expand from the small floating pill, or collapse back to it with the
  // × button. Both keep the player in the same fixed corner — it's always
  // the same element, just narrower/wider, so it can never get "stuck"
  // somewhere else on the page.
  playerToggle.addEventListener('click', () => player.classList.remove('collapsed'));
  if (playerClose) {
    playerClose.addEventListener('click', (e) => {
      e.stopPropagation();
      player.classList.add('collapsed');
    });
  }

  let userPaused = false;
  playBtn.addEventListener('click', () => {
    if (audio.paused) { userPaused = false; tryPlayMusic(); }
    else { userPaused = true; audio.pause(); }
  });
  audio.addEventListener('play', () => { playBtn.textContent = '⏸'; player.classList.add('playing'); });
  audio.addEventListener('pause', () => { playBtn.textContent = '▶'; player.classList.remove('playing'); });
  audio.addEventListener('error', () => {
    title.textContent = CONFIG.tracks[currentTrack].title + ' — check songs/ folder ⚠️';
  });

  // Autoplay safety net: if the very first play attempt was blocked by the
  // browser's autoplay policy, resume on the next tap/click anywhere,
  // but only once and only if the user hasn't deliberately paused it.
  const resumeOnFirstInteraction = () => {
    if (audio.paused && audio.src && !userPaused) audio.play().catch(() => {});
  };
  document.addEventListener('click', resumeOnFirstInteraction, { once: true, passive: true });
  document.addEventListener('touchstart', resumeOnFirstInteraction, { once: true, passive: true });
  document.getElementById('next-track').addEventListener('click', () => { loadTrack(nextIndex()); tryPlayMusic(); });
  document.getElementById('prev-track').addEventListener('click', () => { loadTrack((currentTrack - 1 + CONFIG.tracks.length) % CONFIG.tracks.length); tryPlayMusic(); });
  volume.addEventListener('input', () => audio.volume = +volume.value);

  loopBtn.addEventListener('click', () => {
    audio.loop = !audio.loop;
    loopBtn.classList.toggle('active', audio.loop);
  });
  playlistToggle.addEventListener('click', () => { playlistEl.hidden = !playlistEl.hidden; });

  audio.addEventListener('loadedmetadata', () => { timeTotal.textContent = formatTime(audio.duration); });
  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      seek.value = (audio.currentTime / audio.duration) * 100;
      timeCurrent.textContent = formatTime(audio.currentTime);
    }
  });
  audio.addEventListener('ended', () => {
    if (!audio.loop) { loadTrack(nextIndex()); tryPlayMusic(); }
  });
  seek.addEventListener('input', () => {
    if (audio.duration) audio.currentTime = (seek.value / 100) * audio.duration;
  });

  function formatTime(s) {
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s / 60), sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  }

  function loadTrack(i) {
    currentTrack = i;
    audio.src = CONFIG.tracks[i].src;
    title.textContent = CONFIG.tracks[i].title;
    playlistEl.querySelectorAll('li').forEach((li, li_i) => li.classList.toggle('active', li_i === i));
    seek.value = 0; timeCurrent.textContent = '0:00';
  }
}
function tryPlayMusic() {
  const audio = document.getElementById('bg-audio');
  if (!audio || !audio.src) return; // player not initialized/loaded yet — nothing to play
  audio.play().catch(() => {
    // Most likely the browser's autoplay policy blocked it, not a missing
    // file (that case is handled by the 'error' listener in initMusicPlayer).
    // It'll auto-resume on the next tap/click via the first-interaction listener.
  });
}
function fadeMusic() {
  const audio = document.getElementById('bg-audio');
  const start = audio.volume;
  let v = start;
  const id = setInterval(() => {
    v -= 0.03;
    if (v <= start * 0.3 || v <= 0) { clearInterval(id); return; }
    audio.volume = v;
  }, 80);
}

/* =========================================================
   SURPRISE MOMENTS — compliments, cursor butterfly
   (shooting stars + aurora + rainbow-toned skies are now handled
   by the cinematic SceneEngine, see scene-engine.js)
   ========================================================= */
function initSurpriseMoments() {
  const compliments = [
    "You make ordinary days feel magical", "Still my favorite person", "Every day with you is a good one",
    "You are so loved", "That smile of yours ❤️", "Lucky to have you", "You make my heart smile",
  ];

  // Floating compliments — fade in occasionally near random spots
  const complimentLayer = document.getElementById('compliment-layer');
  function spawnCompliment() {
    const el = document.createElement('div');
    el.className = 'floating-compliment';
    el.textContent = compliments[Math.floor(Math.random() * compliments.length)];
    el.style.left = `${10 + Math.random() * 70}%`;
    el.style.top = `${20 + Math.random() * 60}%`;
    complimentLayer.appendChild(el);
    setTimeout(() => el.remove(), 4600);
    scheduleCompliment();
  }
  function scheduleCompliment() { setTimeout(spawnCompliment, 12000 + Math.random() * 10000); }
  scheduleCompliment();

  // A butterfly briefly follows the cursor after moments of stillness
  const follower = document.getElementById('cursor-follower');
  let moveTimer = null;
  const followerIcons = {
    butterfly: '<svg class="icon" viewBox="0 0 100 100"><use href="#i-butterfly"/></svg>',
    heart: '<svg class="icon" viewBox="0 0 100 90"><use href="#i-heart"/></svg>',
  };
  document.addEventListener('pointermove', (e) => {
    if (matchMedia('(hover: none), (pointer: coarse)').matches) return;
    clearTimeout(moveTimer);
    moveTimer = setTimeout(() => {
      follower.style.left = `${e.clientX}px`;
      follower.style.top = `${e.clientY}px`;
      follower.innerHTML = Math.random() > 0.5 ? followerIcons.butterfly : followerIcons.heart;
      follower.classList.remove('show');
      void follower.offsetWidth; // restart animation
      follower.classList.add('show');
    }, 900);
  });

  // Hidden hearts blooming near flowers on scroll into the scene
  revealOnScroll('.wish-card');
}

/* =========================================================
   LOGIN GATE
   ✏️ Set your own name and password here. Leave blank and the
   gate will not accept any answer until you fill these in.
   ========================================================= */
const WEBSITE_NAME = "Suu";
const WEBSITE_PASSWORD = "Suu@29042007";

(function initLoginGate() {
  const gate = document.getElementById('login-gate');
  if (!gate) return;

  const canvas = document.getElementById('gate-canvas');
  const content = document.getElementById('gate-content');
  const form = document.getElementById('gate-form');
  const nameInput = document.getElementById('gate-input-name');
  const passInput = document.getElementById('gate-input-pass');
  const nameField = document.getElementById('gate-name-field');
  const passField = document.getElementById('gate-pass-field');
  const msgEl = document.getElementById('gate-message');
  const submitBtn = document.getElementById('gate-submit');

  runGateAtmosphere(canvas);

  // magnetic hover for the unlock button — runs standalone since this gate
  // is dismissed long before the main site's magnetic-button system inits
  if (!matchMedia('(hover: none), (pointer: coarse)').matches) {
    submitBtn.addEventListener('pointermove', (e) => {
      const r = submitBtn.getBoundingClientRect();
      const mx = (e.clientX - (r.left + r.width / 2)) * 0.3;
      const my = (e.clientY - (r.top + r.height / 2)) * 0.3;
      submitBtn.style.transform = `translate(${mx}px, ${my}px)`;
    });
    submitBtn.addEventListener('pointerleave', () => { submitBtn.style.transform = ''; });
  }

  function dismissGate() {
    gate.classList.add('gate-hide');
    setTimeout(() => gate.remove(), 1300);
  }

  // NOTE: the login is intentionally NOT remembered. No localStorage,
  // sessionStorage, or cookies are read or written here — the gate must
  // appear on every single page load, every refresh, every restart.

  // staged welcome text, then reveal the form
  requestAnimationFrame(() => document.getElementById('gate-line1').classList.add('show'));
  setTimeout(() => document.getElementById('gate-name').classList.add('show'), 2200);
  setTimeout(() => document.getElementById('gate-line2').classList.add('show'), 4300);
  setTimeout(() => form.classList.add('show'), 5400);

  const wrongMessages = [
    "Oops... Only the special person can unlock this little world ❤️",
    "This little world is waiting for the right key ❤️",
    "Almost there... Try again ❤️",
  ];

  // If the site owner hasn't set WEBSITE_NAME / WEBSITE_PASSWORD yet, the
  // form can never succeed — make that obvious instead of letting it look
  // like a broken login when every attempt "fails".
  const credentialsUnset = WEBSITE_NAME === '' || WEBSITE_PASSWORD === '';
  if (credentialsUnset) {
    msgEl.textContent = 'Set WEBSITE_NAME and WEBSITE_PASSWORD near the top of script.js to enable the login ✏️';
    msgEl.classList.add('show', 'gate-setup-notice');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (credentialsUnset) { wrongDetails(true); return; }
    const enteredName = nameInput.value.trim();
    const enteredPass = passInput.value;
    const ok = enteredName === WEBSITE_NAME && enteredPass === WEBSITE_PASSWORD;
    if (ok) unlock(); else wrongDetails();
  });

  function wrongDetails(isSetupReminder) {
    [nameField, passField].forEach(f => {
      f.classList.remove('shake');
      void f.offsetWidth;
      f.classList.add('shake', 'error');
    });
    if (!isSetupReminder) {
      msgEl.classList.remove('gate-setup-notice');
      msgEl.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
      msgEl.classList.remove('show');
      void msgEl.offsetWidth;
      msgEl.classList.add('show');
    }
    setTimeout(() => { nameField.classList.remove('shake'); passField.classList.remove('shake'); }, 500);
  }

  function unlock() {
    // intentionally not persisted anywhere — the gate must reappear next load
    submitBtn.classList.add('unlocked');
    burstGateParticles();
    content.classList.add('celebrating');
    gate.classList.add('gate-unlocking');
    // Wait for the player to actually load a track before trying to play it —
    // calling tryPlayMusic() before the <audio> has a src silently fails.
    ensureMusicPlayer().then(tryPlayMusic);
    setTimeout(dismissGate, 1300);
  }

  function burstGateParticles() {
    const layer = document.createElement('div');
    layer.className = 'gate-burst-layer';
    const glyphs = ['✦', '✨', '💫'];
    layer.innerHTML = Array.from({ length: 40 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const dist = 90 + Math.random() * 220;
      const bx = Math.cos(angle) * dist, by = Math.sin(angle) * dist;
      return `<span class="gate-burst-particle" style="--bx:${bx}px;--by:${by}px;left:50%;top:42%"></span>`;
    }).join('');
    gate.appendChild(layer);
    setTimeout(() => layer.remove(), 1500);
  }
})();

/* Lightweight ambient canvas just for the login gate: stars, aurora
   glow, floating hearts and fireflies — independent of the main
   ambient/scene engines so the gate can render before anything
   else on the page has initialized. */
function runGateAtmosphere(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, dpr;
  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
  }
  size();
  window.addEventListener('resize', size);

  const stars = Array.from({ length: 90 }, () => ({
    x: Math.random(), y: Math.random() * 0.7, r: 0.6 + Math.random() * 1.4, phase: Math.random() * Math.PI * 2,
  }));
  const fireflies = Array.from({ length: 14 }, () => ({
    x: Math.random(), y: 0.4 + Math.random() * 0.55, phase: Math.random() * Math.PI * 2, speed: 0.2 + Math.random() * 0.3,
  }));
  const hearts = Array.from({ length: 10 }, () => ({
    x: Math.random(), y: 1 + Math.random(), speed: 0.05 + Math.random() * 0.05, size: 5 + Math.random() * 6, sway: Math.random() * Math.PI * 2,
  }));

  let auroraShift = 0;
  function frame(t) {
    ctx.clearRect(0, 0, w, h);
    // aurora glow bands
    auroraShift = t * 0.00006;
    for (let i = 0; i < 3; i++) {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      const hue = 260 + i * 40 + Math.sin(auroraShift + i) * 20;
      grad.addColorStop(0, `hsla(${hue},80%,65%,0)`);
      grad.addColorStop(0.5, `hsla(${hue},80%,65%,.07)`);
      grad.addColorStop(1, `hsla(${hue},80%,65%,0)`);
      ctx.fillStyle = grad;
      ctx.save();
      ctx.translate(w * 0.5, h * (0.15 + i * 0.1));
      ctx.rotate(Math.sin(auroraShift + i) * 0.15);
      ctx.fillRect(-w, -h * 0.25, w * 2, h * 0.5);
      ctx.restore();
    }
    // twinkling stars
    stars.forEach(s => {
      const twinkle = 0.4 + 0.6 * Math.abs(Math.sin(t * 0.001 + s.phase));
      ctx.globalAlpha = twinkle;
      ctx.fillStyle = '#fff8e0';
      ctx.beginPath();
      ctx.arc(s.x * w, s.y * h, s.r * dpr, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    // fireflies
    fireflies.forEach(f => {
      const fx = (f.x + Math.sin(t * 0.0003 * f.speed + f.phase) * 0.03) * w;
      const fy = (f.y + Math.cos(t * 0.0002 * f.speed + f.phase) * 0.03) * h;
      const glow = 0.5 + 0.5 * Math.sin(t * 0.002 + f.phase);
      ctx.globalAlpha = glow * 0.85;
      ctx.fillStyle = '#ffe9a8';
      ctx.shadowColor = '#ffe9a8'; ctx.shadowBlur = 8 * dpr;
      ctx.beginPath();
      ctx.arc(fx, fy, 1.8 * dpr, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });
    ctx.globalAlpha = 1;
    // floating hearts drifting upward
    hearts.forEach(hrt => {
      hrt.y -= hrt.speed * 0.0016;
      if (hrt.y < -0.05) { hrt.y = 1 + Math.random() * 0.3; hrt.x = Math.random(); }
      const hx = (hrt.x + Math.sin(t * 0.0006 + hrt.sway) * 0.02) * w;
      const hy = hrt.y * h;
      ctx.globalAlpha = 0.5;
      drawVectorHeart(ctx, hx, hy, hrt.size * dpr, '#ff9fc4');
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* =========================================================
   LOADING SCREEN
   ========================================================= */
(function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  const bar = document.getElementById('load-ring-bar');
  const pct = document.getElementById('load-percent');
  const heartsLayer = document.getElementById('load-hearts');
  const CIRC = 2 * Math.PI * 52; // matches r=52 in the SVG

  for (let i = 0; i < 10; i++) {
    const h = document.createElement('span');
    h.textContent = ['❤️', '💗', '✨'][i % 3];
    h.style.left = `${5 + Math.random() * 90}%`;
    h.style.animationDelay = `${Math.random() * 3.2}s`;
    h.style.fontSize = `${0.7 + Math.random() * 0.8}rem`;
    heartsLayer.appendChild(h);
  }

  let progress = 0;
  const tick = () => {
    progress = Math.min(100, progress + (100 - progress) * 0.09 + 1.2);
    bar.style.strokeDashoffset = String(CIRC * (1 - progress / 100));
    pct.textContent = `${Math.floor(progress)}%`;
    if (progress < 100) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => screen.classList.add('hide'), 250);
      setTimeout(() => screen.remove(), 1200);
    }
  };
  bar.style.strokeDasharray = String(CIRC);
  bar.style.strokeDashoffset = String(CIRC);
  requestAnimationFrame(tick);
})();

/* =========================================================
   LENIS SMOOTH SCROLL
   ========================================================= */
function initSmoothScroll() {
  if (typeof Lenis === 'undefined') return; // offline fallback: native scroll still works
  const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3), smoothWheel: true });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  if (typeof gsap !== 'undefined' && gsap.ticker) {
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  window.__lenis = lenis;
}

/* =========================================================
   CINEMATIC SCROLL REVEALS (GSAP, progressive enhancement)
   ========================================================= */
function initCinematicReveals() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll('.section').forEach((section) => {
    const eyebrow = section.querySelector('.section-eyebrow');
    const title = section.querySelector('.section-title, .proposal-question, .ending-text');
    const sub = section.querySelector('.section-sub');
    const targets = [eyebrow, title, sub].filter(Boolean);
    if (!targets.length) return;
    gsap.set(targets, { opacity: 0, y: 28 });
    ScrollTrigger.create({
      trigger: section,
      start: 'top 78%',
      once: true,
      onEnter: () => gsap.to(targets, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' }),
    });
  });
}

/* =========================================================
   MAGNETIC BUTTONS
   ========================================================= */
function initMagneticButtons() {
  const targets = document.querySelectorAll('.yes-btn, .no-btn, .ghost-btn, #gift-box, .player-toggle');
  targets.forEach((el) => {
    el.classList.add('magnetic');
    const strength = 0.35;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const mx = (e.clientX - (r.left + r.width / 2)) * strength;
      const my = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${mx}px, ${my}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* =========================================================
   RIPPLE ON CLICK (anywhere)
   ========================================================= */
function initClickRipples() {
  const layer = document.getElementById('click-ripple-layer');
  document.addEventListener('pointerdown', (e) => {
    const dot = document.createElement('div');
    dot.className = 'click-ripple';
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    layer.appendChild(dot);
    setTimeout(() => dot.remove(), 750);
  });
}

/* =========================================================
   MY FAVORITE PERSON — golden particle photo reveal
   A heart is tapped -> it bursts into golden particles ->
   thousands of tiny particles sample the real photo and fly
   into place to "paint" it -> the sharp photo crossfades in
   inside a luxury glass frame -> her name handwrites in ->
   four lines reveal one by one.
   ========================================================= */
function initFavoritePerson() {
  const stage = document.getElementById('fp-stage');
  const trigger = document.getElementById('fp-trigger');
  const canvas = document.getElementById('fp-canvas');
  const frame = document.getElementById('fp-frame');
  const caption = document.getElementById('fp-caption');
  if (!stage || !trigger || !canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let rafId = null;
  let started = false;

  function sizeCanvas() {
    const rect = stage.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, rect.width * dpr);
    canvas.height = Math.max(1, rect.height * dpr);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return rect;
  }

  function buildParticles(img, rect) {
    // draw the photo at a modest size on an offscreen canvas to sample pixels cheaply
    const maxW = Math.min(rect.width * 0.72, 320);
    const scale = maxW / img.width;
    const drawW = Math.round(img.width * scale);
    const drawH = Math.round(img.height * scale);
    const offX = (rect.width - drawW) / 2;
    const offY = (rect.height - drawH) / 2;

    const off = document.createElement('canvas');
    off.width = drawW; off.height = drawH;
    const octx = off.getContext('2d');
    octx.drawImage(img, 0, 0, drawW, drawH);
    let data;
    try { data = octx.getImageData(0, 0, drawW, drawH).data; }
    catch (err) { return false; } // e.g. file:// CORS restriction — caller falls back gracefully

    const stride = 3;
    const cx = rect.width / 2, cy = rect.height / 2;
    particles = [];
    for (let y = 0; y < drawH; y += stride) {
      for (let x = 0; x < drawW; x += stride) {
        const idx = (y * drawW + x) * 4;
        const r = data[idx], g = data[idx + 1], bl = data[idx + 2], a = data[idx + 3];
        if (a < 40) continue;
        const angle = Math.random() * Math.PI * 2;
        const dist = 140 + Math.random() * 260;
        particles.push({
          x: cx + Math.cos(angle) * dist,
          y: cy + Math.sin(angle) * dist,
          tx: offX + x, ty: offY + y,
          color: `rgb(${r},${g},${bl})`,
          size: 1 + Math.random() * 1.2,
          delay: Math.random() * 0.5,
        });
      }
    }
    return true;
  }

  function animateFormation(startTime) {
    const rect = stage.getBoundingClientRect();
    const now = performance.now();
    const elapsed = (now - startTime) / 1000;
    ctx.clearRect(0, 0, rect.width, rect.height);
    let allDone = true;
    for (const p of particles) {
      const t = Math.max(0, Math.min(1, (elapsed - p.delay) / 1.7));
      if (t < 1) allDone = false;
      const eased = 1 - Math.pow(1 - t, 3);
      const cx = p.x + (p.tx - p.x) * eased;
      const cy = p.y + (p.ty - p.y) * eased;
      ctx.globalAlpha = 0.35 + eased * 0.65;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(cx, cy, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!allDone) {
      rafId = requestAnimationFrame(() => animateFormation(startTime));
    } else {
      onFormationComplete();
    }
  }

  function onFormationComplete() {
    frame.classList.add('show');
    setTimeout(() => { canvas.style.opacity = '0'; }, 550);
    setTimeout(() => { caption.classList.add('show'); }, 500);
  }

  function revealWithoutCanvas() {
    // graceful fallback if pixel sampling isn't available (e.g. strict local file CORS)
    frame.classList.add('show');
    setTimeout(() => { caption.classList.add('show'); }, 400);
  }

  function burstGoldenParticles() {
    const layer = document.createElement('div');
    layer.className = 'fp-burst-layer';
    for (let i = 0; i < 26; i++) {
      const s = document.createElement('span');
      s.className = 'fp-burst-particle';
      const angle = Math.random() * Math.PI * 2;
      const dist = 70 + Math.random() * 170;
      s.style.setProperty('--bx', `${Math.cos(angle) * dist}px`);
      s.style.setProperty('--by', `${Math.sin(angle) * dist}px`);
      s.style.animationDelay = `${Math.random() * 0.15}s`;
      layer.appendChild(s);
    }
    stage.appendChild(layer);
    setTimeout(() => layer.remove(), 1500);
  }

  trigger.addEventListener('click', () => {
    if (started) return;
    started = true;
    burstGoldenParticles();
    trigger.classList.add('hide');

    setTimeout(() => {
      const rect = sizeCanvas();
      const img = new Image();
      img.onload = () => {
        const ok = buildParticles(img, rect);
        if (ok && particles.length) {
          canvas.style.opacity = '1';
          animateFormation(performance.now());
        } else {
          revealWithoutCanvas();
        }
      };
      img.onerror = revealWithoutCanvas;
      img.src = document.getElementById('fp-image').getAttribute('src');
    }, 500);
  });

  window.addEventListener('resize', () => { if (canvas.style.opacity !== '0') sizeCanvas(); });

  const frameInner = stage.querySelector('.fp-frame-inner');
  if (frameInner) {
    frameInner.addEventListener('click', () => {
      if (!frame.classList.contains('show')) return;
      Lightbox.open([{
        mode: 'image', src: document.getElementById('fp-image').getAttribute('src'),
        title: 'Suu ❤️', desc: 'My Favorite Laugh · My Greatest Comfort · My Safe Place · My Love', date: '',
      }], 0);
    });
  }
}

/* =========================================================
   A GIFT I'LL TREASURE FOREVER — box opens, particles paint
   the photo, then the message types itself in
   ========================================================= */
function typewriterLines(lines, speed = 32, lineGap = 450) {
  return new Promise((resolve) => {
    let li = 0;
    function typeLine() {
      if (li >= lines.length) { resolve(); return; }
      const el = lines[li];
      const text = el.dataset.text || '';
      el.classList.add('typing');
      let ci = 0;
      const iv = setInterval(() => {
        el.textContent = text.slice(0, ci + 1);
        ci++;
        if (ci >= text.length) {
          clearInterval(iv);
          el.classList.remove('typing');
          li++;
          setTimeout(typeLine, lineGap);
        }
      }, speed);
    }
    typeLine();
  });
}

function initGiftFrameChapter() {
  const stage = document.getElementById('gf-stage');
  const trigger = document.getElementById('gf-trigger');
  const canvas = document.getElementById('gf-canvas');
  const frame = document.getElementById('gf-frame');
  const frameInner = document.getElementById('gf-frame-inner');
  const caption = document.getElementById('gf-caption');
  if (!stage || !trigger || !canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let started = false;

  function sizeCanvas() {
    const rect = stage.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, rect.width * dpr);
    canvas.height = Math.max(1, rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return rect;
  }

  function buildParticles(img, rect) {
    const maxW = Math.min(rect.width * 0.76, 320);
    const scale = maxW / img.width;
    const drawW = Math.round(img.width * scale);
    const drawH = Math.round(img.height * scale);
    const offX = (rect.width - drawW) / 2;
    const offY = (rect.height - drawH) / 2;
    const off = document.createElement('canvas');
    off.width = drawW; off.height = drawH;
    const octx = off.getContext('2d');
    octx.drawImage(img, 0, 0, drawW, drawH);
    let data;
    try { data = octx.getImageData(0, 0, drawW, drawH).data; }
    catch (err) { return false; }
    const stride = 3;
    const cx = rect.width / 2, cy = rect.height / 2;
    particles = [];
    for (let y = 0; y < drawH; y += stride) {
      for (let x = 0; x < drawW; x += stride) {
        const idx = (y * drawW + x) * 4;
        const r = data[idx], g = data[idx + 1], bl = data[idx + 2], a = data[idx + 3];
        if (a < 40) continue;
        const angle = Math.random() * Math.PI * 2;
        const dist = 140 + Math.random() * 260;
        particles.push({
          x: cx + Math.cos(angle) * dist, y: cy + Math.sin(angle) * dist,
          tx: offX + x, ty: offY + y, color: `rgb(${r},${g},${bl})`,
          size: 1 + Math.random() * 1.2, delay: Math.random() * 0.5,
        });
      }
    }
    return true;
  }

  function animateFormation(startTime) {
    const rect = stage.getBoundingClientRect();
    const now = performance.now();
    const elapsed = (now - startTime) / 1000;
    ctx.clearRect(0, 0, rect.width, rect.height);
    let allDone = true;
    for (const p of particles) {
      const t = Math.max(0, Math.min(1, (elapsed - p.delay) / 1.7));
      if (t < 1) allDone = false;
      const eased = 1 - Math.pow(1 - t, 3);
      const cx = p.x + (p.tx - p.x) * eased, cy = p.y + (p.ty - p.y) * eased;
      ctx.globalAlpha = 0.35 + eased * 0.65;
      ctx.fillStyle = p.color;
      ctx.beginPath(); ctx.arc(cx, cy, p.size, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!allDone) requestAnimationFrame(() => animateFormation(startTime));
    else onFormationComplete();
  }

  function onFormationComplete() {
    frame.classList.add('show');
    setTimeout(() => { canvas.style.opacity = '0'; }, 550);
    setTimeout(startCaption, 500);
  }
  function revealWithoutCanvas() {
    // the photo loaded fine, we just couldn't sample its pixels for the
    // particle effect (e.g. a tainted canvas when opened via file://) —
    // show the real photo plainly rather than a "missing" message.
    frame.classList.add('show');
    setTimeout(startCaption, 400);
  }
  function showMissingPlaceholder() {
    // the photo genuinely failed to load
    frameInner.classList.add('gf-missing');
    frame.classList.add('show');
    setTimeout(startCaption, 400);
  }
  function startCaption() {
    caption.classList.add('show');
    typewriterLines(Array.from(caption.querySelectorAll('.gf-msg-line')));
  }

  function burstGold() {
    const layer = document.createElement('div');
    layer.className = 'gf-burst-layer';
    const flare = document.createElement('div');
    flare.className = 'gf-light-flare';
    layer.appendChild(flare);
    for (let i = 0; i < 30; i++) {
      const s = document.createElement('span');
      s.className = 'gf-burst-particle';
      const angle = Math.random() * Math.PI * 2;
      const dist = 80 + Math.random() * 190;
      s.style.left = '50%'; s.style.top = '50%';
      s.style.setProperty('--bx', `${Math.cos(angle) * dist}px`);
      s.style.setProperty('--by', `${Math.sin(angle) * dist}px`);
      s.style.animationDelay = `${Math.random() * 0.2}s`;
      layer.appendChild(s);
    }
    stage.appendChild(layer);
    setTimeout(() => layer.remove(), 1600);
  }

  trigger.addEventListener('click', () => {
    if (started) return;
    started = true;
    trigger.classList.add('opening');
    setTimeout(burstGold, 280);
    setTimeout(() => {
      trigger.classList.add('hide');
      const rect = sizeCanvas();
      const img = new Image();
      img.onload = () => {
        const ok = buildParticles(img, rect);
        if (ok && particles.length) {
          canvas.style.opacity = '1';
          animateFormation(performance.now());
        } else revealWithoutCanvas();
      };
      img.onerror = showMissingPlaceholder;
      img.src = document.getElementById('gf-image').getAttribute('src');
    }, 650);
  });

  window.addEventListener('resize', () => { if (canvas.style.opacity !== '0') sizeCanvas(); });

  frameInner.addEventListener('click', () => {
    if (!frame.classList.contains('show') || frameInner.classList.contains('gf-missing')) return;
    Lightbox.open([{
      mode: 'image', src: document.getElementById('gf-image').getAttribute('src'),
      title: "A Gift I'll Treasure Forever ❤️", desc: 'The wooden frame you gave me.', date: '',
    }], 0);
  });
}

/* =========================================================
   PREMIUM FULLSCREEN LIGHTBOX
   Shared by Gallery, Our Journey memories, Suu's portrait,
   and the treasured gift image. Supports zoom (buttons, wheel,
   pinch, double-tap), rotate, fullscreen, drag-to-pan with
   momentum, swipe navigation, and arrow-key controls.
   ========================================================= */
const Lightbox = (function () {
  let list = [], index = 0;
  let scale = 1, rotate = 0, panX = 0, panY = 0;
  let startDist = 0, startScale = 1;
  let dragging = false, dragStartX = 0, dragStartY = 0, dragOriginX = 0, dragOriginY = 0;
  let lastMoveTime = 0, velX = 0, velY = 0, momentumRAF = null;
  let lastTapTime = 0;
  let el, wrap, imgEl, titleEl, descEl, dateEl, counterEl, frameEl, prevBtn, nextBtn;
  const pointers = new Map();

  function init() {
    el = document.getElementById('lightbox');
    if (!el) return;
    wrap = document.getElementById('lb-image-wrap');
    imgEl = document.getElementById('lb-image');
    titleEl = document.getElementById('lb-title');
    descEl = document.getElementById('lb-desc');
    dateEl = document.getElementById('lb-date');
    counterEl = document.getElementById('lb-counter');
    frameEl = document.getElementById('lb-frame');
    prevBtn = document.getElementById('lb-prev');
    nextBtn = document.getElementById('lb-next');

    document.getElementById('lb-close').addEventListener('click', close);
    prevBtn.addEventListener('click', () => go(-1));
    nextBtn.addEventListener('click', () => go(1));
    document.getElementById('lb-zoom-in').addEventListener('click', () => setScale(scale + 0.5, true));
    document.getElementById('lb-zoom-out').addEventListener('click', () => setScale(scale - 0.5, true));
    document.getElementById('lb-rotate').addEventListener('click', () => { rotate += 90; apply(true); });
    document.getElementById('lb-fullscreen').addEventListener('click', toggleFullscreen);

    document.addEventListener('keydown', (e) => {
      if (el.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === '+' || e.key === '=') setScale(scale + 0.3, true);
      else if (e.key === '-' || e.key === '_') setScale(scale - 0.3, true);
    });

    frameEl.addEventListener('wheel', (e) => {
      e.preventDefault();
      setScale(scale - e.deltaY * 0.0016, false);
    }, { passive: false });

    frameEl.addEventListener('dblclick', () => toggleZoom());

    frameEl.addEventListener('pointerdown', (e) => {
      try { frameEl.setPointerCapture(e.pointerId); } catch (err) {}
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) {
        dragging = true;
        dragStartX = e.clientX; dragStartY = e.clientY;
        dragOriginX = panX; dragOriginY = panY;
        velX = 0; velY = 0; lastMoveTime = performance.now();
        cancelMomentum();
      }
    });
    frameEl.addEventListener('pointermove', (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        const pts = Array.from(pointers.values());
        const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        if (!startDist) { startDist = dist; startScale = scale; }
        setScale(startScale * (dist / startDist), false);
      } else if (pointers.size === 1 && dragging) {
        const now = performance.now();
        const dt = Math.max(1, now - lastMoveTime);
        const nx = dragOriginX + (e.clientX - dragStartX);
        const ny = dragOriginY + (e.clientY - dragStartY);
        velX = (nx - panX) / dt; velY = (ny - panY) / dt;
        panX = nx; panY = ny;
        lastMoveTime = now;
        apply(false);
      }
    });
    function endPointer(e) {
      pointers.delete(e.pointerId);
      if (pointers.size < 2) startDist = 0;
      if (pointers.size === 0 && dragging) {
        dragging = false;
        const swipeDX = panX - dragOriginX;
        if (scale <= 1.05 && Math.abs(swipeDX) > 70) {
          panX = 0; panY = 0; apply(true);
          go(swipeDX < 0 ? 1 : -1);
        } else {
          applyMomentum();
        }
      }
    }
    frameEl.addEventListener('pointerup', endPointer);
    frameEl.addEventListener('pointercancel', endPointer);

    // double-tap fallback for touch devices
    frameEl.addEventListener('touchend', (e) => {
      const now = Date.now();
      if (now - lastTapTime < 300 && e.changedTouches.length === 1) toggleZoom();
      lastTapTime = now;
    });
  }

  function toggleZoom() {
    if (scale > 1.05) { scale = 1; panX = 0; panY = 0; apply(true); }
    else { setScale(2.4, true); }
  }
  function applyMomentum() {
    function step() {
      velX *= 0.92; velY *= 0.92;
      panX += velX * 16; panY += velY * 16;
      clampPan();
      apply(false);
      if (Math.abs(velX) > 0.02 || Math.abs(velY) > 0.02) momentumRAF = requestAnimationFrame(step);
    }
    momentumRAF = requestAnimationFrame(step);
  }
  function cancelMomentum() { if (momentumRAF) cancelAnimationFrame(momentumRAF); momentumRAF = null; }
  function clampPan() {
    const maxPan = 90 * scale;
    panX = Math.max(-maxPan, Math.min(maxPan, panX));
    panY = Math.max(-maxPan, Math.min(maxPan, panY));
  }
  function setScale(v, snap) {
    scale = Math.max(1, Math.min(4, v));
    if (scale <= 1.001) { panX = 0; panY = 0; }
    clampPan();
    apply(snap);
  }
  function apply(snap) {
    wrap.classList.toggle('snap', !!snap);
    wrap.style.transform = `translate(${panX}px, ${panY}px) scale(${scale}) rotate(${rotate}deg)`;
  }

  function render() {
    const item = list[index];
    scale = 1; rotate = 0; panX = 0; panY = 0;
    apply(true);
    if (item.mode === 'image') {
      imgEl.style.background = 'none';
      imgEl.innerHTML = `<img src="${item.src}" alt="${item.title || ''}" draggable="false">`;
    } else if (item.mode === 'missing') {
      imgEl.style.background = 'linear-gradient(135deg,#e9e2f5,#f7dfe8)';
      imgEl.innerHTML = `<span style="font-size:.85rem;opacity:.65;font-family:var(--font-cute);padding:0 1.5rem;text-align:center;">add your photo here</span>`;
    } else {
      imgEl.style.background = item.gradient || '#eee';
      imgEl.innerHTML = `<span>${item.emoji || ''}</span>`;
    }
    titleEl.textContent = item.title || '';
    descEl.textContent = item.desc || '';
    dateEl.textContent = item.date || '';
    const multi = list.length > 1;
    counterEl.textContent = multi ? `${index + 1} / ${list.length}` : '';
    prevBtn.style.display = multi ? '' : 'none';
    nextBtn.style.display = multi ? '' : 'none';
  }
  function go(dir) {
    if (!list.length) return;
    index = (index + dir + list.length) % list.length;
    render();
  }
  function open(newList, startIndex) {
    list = newList || [];
    index = startIndex || 0;
    if (!list.length) return;
    el.hidden = false;
    document.body.style.overflow = 'hidden';
    render();
  }
  function close() {
    el.hidden = true;
    document.body.style.overflow = '';
    cancelMomentum();
    if (document.fullscreenElement) { try { document.exitFullscreen(); } catch (e) {} }
  }
  function toggleFullscreen() {
    if (!document.fullscreenElement) { try { el.requestFullscreen(); } catch (e) {} }
    else { try { document.exitFullscreen(); } catch (e) {} }
  }

  return { init, open, close };
})();

function initLightbox() { Lightbox.init(); }

/* =========================================================
   FINAL CHAPTER — stars form "Suu ❤️", a message fades in,
   a handwritten signature, then a glowing heart that unleashes
   one last celebration before the site fades to black.
   ========================================================= */
function initEndingFinale() {
  const section = document.getElementById('ending');
  const scene = section?.querySelector('.moon-scene');
  const starCanvas = document.getElementById('ending-star-canvas');
  const message = document.getElementById('ending-message');
  const signature = document.getElementById('ending-signature');
  const heartBtn = document.getElementById('ending-heart-btn');
  const finaleCanvas = document.getElementById('ending-finale-canvas');
  const overlay = document.getElementById('ending-finale-overlay');
  if (!section || !scene || !starCanvas) return;

  signature.textContent = `${signature.dataset.line1}\n${signature.dataset.line2}`;

  let started = false;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio > 0.4 && !started) {
        started = true;
        runStarText();
      }
    });
  }, { threshold: 0.4 });
  io.observe(section);

  function runStarText() {
    const rect = scene.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    starCanvas.width = rect.width * dpr;
    starCanvas.height = rect.height * dpr;
    const ctx = starCanvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // render target text to an offscreen canvas to sample star positions from
    const off = document.createElement('canvas');
    off.width = rect.width; off.height = rect.height;
    const octx = off.getContext('2d');
    octx.fillStyle = '#fff';
    const fontSize = Math.max(22, Math.min(46, rect.width * 0.09));
    octx.font = `700 ${fontSize}px 'Playfair Display', serif`;
    octx.textAlign = 'center';
    octx.textBaseline = 'middle';
    octx.fillText('Suu ❤️', rect.width / 2, rect.height / 2);
    const data = octx.getImageData(0, 0, rect.width, rect.height).data;

    const targets = [];
    const stride = 3;
    for (let y = 0; y < rect.height; y += stride) {
      for (let x = 0; x < rect.width; x += stride) {
        if (data[(y * rect.width + x) * 4 + 3] > 120) targets.push({ x, y });
      }
    }
    // shuffle so the formation doesn't paint left-to-right in an obvious grid sweep
    for (let i = targets.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [targets[i], targets[j]] = [targets[j], targets[i]];
    }

    const stars = targets.map(t => ({
      x: Math.random() * rect.width, y: Math.random() * rect.height,
      tx: t.x, ty: t.y, delay: Math.random() * 0.6, size: 0.8 + Math.random() * 1.4,
      twinkle: Math.random() * Math.PI * 2,
    }));

    const start = performance.now();
    function frame(now) {
      const elapsed = (now - start) / 1000;
      ctx.clearRect(0, 0, rect.width, rect.height);
      let allDone = true;
      for (const s of stars) {
        const t = Math.max(0, Math.min(1, (elapsed - s.delay) / 1.6));
        if (t < 1) allDone = false;
        const eased = 1 - Math.pow(1 - t, 3);
        const cx = s.x + (s.tx - s.x) * eased;
        const cy = s.y + (s.ty - s.y) * eased;
        const twinkle = 0.7 + 0.3 * Math.sin(elapsed * 3 + s.twinkle);
        ctx.globalAlpha = (0.3 + eased * 0.7) * twinkle;
        ctx.fillStyle = '#fff8e0';
        ctx.shadowColor = '#ffe9b0'; ctx.shadowBlur = 4;
        ctx.beginPath(); ctx.arc(cx, cy, s.size, 0, Math.PI * 2); ctx.fill();
      }
      ctx.shadowBlur = 0; ctx.globalAlpha = 1;
      if (!allDone) requestAnimationFrame(frame);
      else onStarsFormed();
    }
    requestAnimationFrame(frame);
  }

  function onStarsFormed() {
    setTimeout(() => message.classList.add('show'), 500);
    setTimeout(() => heartBtn.classList.add('show'), 4200);
  }

  heartBtn.addEventListener('click', () => {
    heartBtn.classList.add('hide');
    finaleCanvas.classList.add('show');
    runFinaleCelebration();
    setTimeout(() => overlay.classList.add('show'), 2600);
  });

  function runFinaleCelebration() {
    finaleCanvas.width = window.innerWidth;
    finaleCanvas.height = window.innerHeight;
    const ctx = finaleCanvas.getContext('2d');
    const colors = ['#ffd77a', '#ff9fc7', '#c9a7ff', '#fff2b0', '#ff6fa5'];
    let particles = [];

    function spawnBurst() {
      const x = Math.random() * finaleCanvas.width;
      const y = finaleCanvas.height * (0.15 + Math.random() * 0.4);
      const isHeart = Math.random() > 0.55;
      const count = 46;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const speed = 2 + Math.random() * 3.4;
        particles.push({
          x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1,
          color: colors[Math.floor(Math.random() * colors.length)], isHeart,
        });
      }
    }
    const spawnTimer = setInterval(spawnBurst, 320);
    setTimeout(() => clearInterval(spawnTimer), 3000);

    // a few floating lanterns drifting upward through the whole finale
    const lanterns = Array.from({ length: 6 }, () => ({
      x: Math.random() * finaleCanvas.width, y: finaleCanvas.height + Math.random() * 200,
      speed: 0.4 + Math.random() * 0.5, sway: Math.random() * 2,
    }));

    let frames = 0;
    function loop() {
      ctx.clearRect(0, 0, finaleCanvas.width, finaleCanvas.height);
      particles.forEach(p => {
        ctx.globalAlpha = Math.max(p.life, 0);
        if (p.isHeart) drawVectorHeart(ctx, p.x, p.y, 6, p.color);
        else { ctx.fillStyle = p.color; ctx.shadowColor = p.color; ctx.shadowBlur = 10; ctx.beginPath(); ctx.arc(p.x, p.y, 2.6, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0; }
        p.x += p.vx; p.y += p.vy; p.vy += 0.035; p.life -= 0.012;
      });
      particles = particles.filter(p => p.life > 0);

      ctx.globalAlpha = 0.9;
      lanterns.forEach(l => {
        ctx.save();
        ctx.translate(l.x, l.y);
        const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, 14);
        grad.addColorStop(0, 'rgba(255,225,150,.95)'); grad.addColorStop(1, 'rgba(255,150,80,0)');
        ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(0, 0, 14, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#ffedb0'; ctx.fillRect(-5, -6, 10, 12);
        ctx.restore();
        l.y -= l.speed; l.x += Math.sin(l.y / 60) * l.sway;
        if (l.y < -30) { l.y = finaleCanvas.height + 30; l.x = Math.random() * finaleCanvas.width; }
      });

      ctx.globalAlpha = 1;
      frames++;
      if (frames < 460) requestAnimationFrame(loop);
    }
    loop();
  }
}

/* ---------- Love Quotes ---------- */
function initLoveQuotes() {
  const grid = document.getElementById('lq-grid');
  if (!grid) return;
  grid.innerHTML = CONFIG.loveQuotes.map(q => `
    <div class="lq-quote-card reveal">
      <span class="lq-quote-mark" aria-hidden="true">&ldquo;</span>
      <p class="lq-quote-text">${q}</p>
    </div>`).join('');
  revealOnScroll('.lq-quote-card');
}

/* =========================================================
   MY ENTIRE WORLD — underwater cinematic portrait chapter
   Full-bleed portrait + Canvas2D underwater light rays, bubbles,
   caustics and drifting dust, a slow scroll-scrubbed zoom, a
   paced text reveal (handwritten name + typed poem), and a
   white-flash hand-off into the proposal.
   ========================================================= */
function initEntireWorld() {
  const section = document.getElementById('entire-world');
  if (!section) return;
  const wrap = document.getElementById('ew-portrait-wrap');
  const img = document.getElementById('ew-portrait');
  const canvas = document.getElementById('ew-canvas');
  const line1 = document.getElementById('ew-line1');
  const nameEl = document.getElementById('ew-name');
  const poemLines = Array.from(section.querySelectorAll('.ew-poem-line'));
  const closing = document.getElementById('ew-closing');
  const whiteFade = document.getElementById('ew-white-fade');

  function markMissing() { wrap.classList.add('ew-missing'); }
  let revealed = false;
  function revealPortrait() {
    if (revealed) return;
    revealed = true;
    img.classList.add('reveal');
    wrap.classList.add('ew-revealed');
  }
  if (img.complete && img.naturalWidth === 0) markMissing();
  else img.addEventListener('error', markMissing);

  // gentle mouse parallax — a few pixels of drift, applied as CSS custom
  // properties consumed by the wrap's floating-motion keyframe (see CSS),
  // so it never fights with the Ken Burns zoom or the float animation.
  if (!matchMedia('(hover: none), (pointer: coarse)').matches) {
    section.addEventListener('pointermove', (e) => {
      const r = section.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      wrap.style.setProperty('--par-x', `${px * -14}px`);
      wrap.style.setProperty('--par-y', `${py * -10}px`);
    });
  }

  /* ---------- underwater Canvas2D atmosphere ---------- */
  const ctx = canvas.getContext('2d');
  let running = false, rafId = null;
  let rays = [], bubbles = [], dust = [];

  function sizeCanvas() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = section.clientWidth * dpr;
    canvas.height = section.clientHeight * dpr;
    canvas.style.width = section.clientWidth + 'px';
    canvas.style.height = section.clientHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function seedParticles() {
    const w = section.clientWidth, h = section.clientHeight;
    const dense = !(matchMedia('(pointer: coarse)').matches && (navigator.hardwareConcurrency || 8) <= 4);
    rays = Array.from({ length: dense ? 5 : 3 }, (_, i) => ({
      x: (w / 6) * (i + 1) + (Math.random() - 0.5) * 60,
      width: 60 + Math.random() * 70, sway: Math.random() * 2, phase: Math.random() * Math.PI * 2,
    }));
    bubbles = Array.from({ length: dense ? 34 : 18 }, () => ({
      x: Math.random() * w, y: h + Math.random() * h,
      r: 1.5 + Math.random() * 4, speed: 0.3 + Math.random() * 0.7, wob: Math.random() * Math.PI * 2,
    }));
    dust = Array.from({ length: dense ? 46 : 24 }, () => ({
      x: Math.random() * w, y: Math.random() * h, r: 0.6 + Math.random() * 1.2,
      vx: (Math.random() - 0.5) * 0.12, vy: (Math.random() - 0.5) * 0.1, tw: Math.random() * Math.PI * 2,
    }));
  }

  function frame(t) {
    const w = section.clientWidth, h = section.clientHeight;
    ctx.clearRect(0, 0, w, h);

    // light rays swaying gently
    rays.forEach(r => {
      const sway = Math.sin(t * 0.00012 + r.phase) * 22 * r.sway;
      const grad = ctx.createLinearGradient(r.x + sway, 0, r.x + sway + r.width * 0.3, h);
      grad.addColorStop(0, 'rgba(180,225,255,.22)');
      grad.addColorStop(0.6, 'rgba(140,200,240,.08)');
      grad.addColorStop(1, 'rgba(140,200,240,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(r.x + sway - r.width / 2, 0);
      ctx.lineTo(r.x + sway + r.width / 2, 0);
      ctx.lineTo(r.x + sway + r.width * 1.4, h);
      ctx.lineTo(r.x + sway - r.width * 0.6, h);
      ctx.closePath(); ctx.fill();
    });

    // caustic shimmer (soft moving light patches)
    ctx.globalAlpha = 0.5;
    for (let i = 0; i < 4; i++) {
      const cx = (w * (0.2 + i * 0.22)) + Math.sin(t * 0.00015 + i) * 40;
      const cy = (h * 0.3) + Math.cos(t * 0.0002 + i * 2) * 60;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 90);
      g.addColorStop(0, 'rgba(200,235,255,.16)'); g.addColorStop(1, 'rgba(200,235,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(cx, cy, 90, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;

    // rising bubbles
    bubbles.forEach(b => {
      b.y -= b.speed;
      b.wob += 0.02;
      const bx = b.x + Math.sin(b.wob) * 6;
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(220,245,255,.5)';
      ctx.lineWidth = 0.8;
      ctx.arc(bx, b.y, b.r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,.08)';
      ctx.fill();
      if (b.y < -10) { b.y = h + 10; b.x = Math.random() * w; }
    });

    // drifting glow dust
    dust.forEach(d => {
      d.x += d.vx; d.y += d.vy; d.tw += 0.03;
      const alpha = 0.25 + 0.25 * Math.sin(d.tw);
      ctx.fillStyle = `rgba(255,244,220,${alpha})`;
      ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill();
      if (d.x < 0) d.x = w; if (d.x > w) d.x = 0;
      if (d.y < 0) d.y = h; if (d.y > h) d.y = 0;
    });

    if (running) rafId = requestAnimationFrame(frame);
  }

  function start() {
    if (running) return;
    running = true;
    sizeCanvas();
    seedParticles();
    rafId = requestAnimationFrame(frame);
  }
  function stop() { running = false; if (rafId) cancelAnimationFrame(rafId); }

  const visIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { start(); revealPortrait(); }
      else { stop(); }
    });
  }, { threshold: 0.05 });
  visIO.observe(section);
  window.addEventListener('resize', () => { if (running) sizeCanvas(); });

  /* ---------- paced text reveal ---------- */
  let sequenceStarted = false;
  const textIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio > 0.45 && !sequenceStarted) {
        sequenceStarted = true;
        runTextSequence();
      }
    });
  }, { threshold: 0.45 });
  textIO.observe(section);

  function runTextSequence() {
    line1.classList.add('show');
    setTimeout(() => {
      nameEl.classList.add('show');
      setTimeout(() => {
        typewriterLines(poemLines, 34, 480).then(() => {
          setTimeout(() => closing.classList.add('show'), 700);
        });
      }, 2200);
    }, 2000);
  }

  /* ---------- slow scroll-scrubbed dive toward her face ---------- */
  if (window.gsap && window.ScrollTrigger) {
    gsap.timeline({ scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: 0.6 } })
      .to(wrap, { scale: 1.22, ease: 'none' }, 0);
  }

  /* ---------- white-flash hand-off into the proposal ---------- */
  const proposalSection = document.getElementById('proposal');
  if (proposalSection) {
    let fired = false;
    const flashIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !fired) {
          fired = true;
          whiteFade.classList.add('show');
          setTimeout(() => whiteFade.classList.remove('show'), 1500);
        }
      });
    }, { threshold: 0.02 });
    flashIO.observe(proposalSection);
  }
}

/* =========================================================
   RELATIONSHIP TIMELINE — key real-life milestone dates,
   plus the dedicated pic10 special photo space right after it.
   ========================================================= */
function initMilestones() {
  const section = document.getElementById('milestones');
  if (!section) return;
  revealOnScroll('.rt-item');
  revealOnScroll('.sp-wrap');

  // tiny hidden hearts on each milestone card — tap to reveal a private line
  section.querySelectorAll('.rt-secret').forEach(btn => {
    const text = btn.nextElementSibling;
    btn.addEventListener('click', () => {
      const opening = !text.classList.contains('open');
      text.textContent = opening ? btn.dataset.msg : text.textContent;
      text.classList.toggle('open', opening);
    });
  });

  // the pic10 photo gets its own two-line cinematic reveal
  const spSecret = document.getElementById('sp-secret');
  const spPanel = document.getElementById('sp-secret-panel');
  if (spSecret && spPanel) {
    const lines = Array.from(spPanel.querySelectorAll('.sp-secret-line'));
    let opened = false;
    spSecret.addEventListener('click', () => {
      if (opened) {
        opened = false;
        spPanel.classList.remove('open');
        lines.forEach(l => (l.textContent = ''));
        return;
      }
      opened = true;
      spPanel.classList.add('open');
      typewriterLines(lines, 26, 400);
    });
  }
}
