import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const DATA = window.UNG || { site: {}, projects: [] };
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = window.matchMedia('(max-width: 860px)').matches;
const pad3 = (n) => String(n).padStart(3, '0');
const rich = (s) => esc(s).replace(/\*(.+?)\*/g, '<em class="serif">$1</em>');
const plain = (s) => String(s ?? '').replace(/\*/g, '');
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- Texts from data.js ---------- */
document.querySelectorAll('[data-text]').forEach((el) => {
  const value = el.dataset.text.split('.').reduce((o, k) => (o ? o[k] : ''), DATA);
  el.textContent = value || '';
});
document.querySelectorAll('[data-rich]').forEach((el) => {
  const value = el.dataset.rich.split('.').reduce((o, k) => (o ? o[k] : ''), DATA);
  el.innerHTML = value ? rich(value) : '';
});
document.getElementById('year').textContent = new Date().getFullYear();
const clock = document.getElementById('clock');
const tick = () => {
  clock.textContent = new Intl.DateTimeFormat('es-MX', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Monterrey' }).format(new Date());
};
tick();
setInterval(tick, 20000);

/* ---------- Marquee ---------- */
const words = ['Proceso', ...DATA.projects.map((p) => plain(p.name)).filter(Boolean), 'Teasers', 'Próximamente'];
document.getElementById('marquee').innerHTML = [...words, ...words].map((w) => `<span>${esc(w)}</span><span>✦</span>`).join('');

/* ---------- Project carousels ---------- */
const flat = []; // every polaroid, for the lightbox
let pieceNo = 0;
const root = document.getElementById('proyectos');
root.innerHTML = DATA.projects.map((p, pi) => {
  const total = p.items.length;
  const cards = p.items.map((it, i) => {
    pieceNo += 1;
    flat.push({ ...it, project: p, n: pieceNo, i, total });
    const rot = ((i * 37) % 7) - 3; // a little hand-placed tilt
    const hue = (pi * 60 + i * 47) % 360;
    const img = it.img
      ? `<img src="${esc(it.img)}" alt="${esc(it.caption || `${plain(p.name)} — proceso ${i + 1}`)}" loading="lazy">`
      : '';
    const stamp = p.teaser ? `<span class="stamp">${it.img ? 'Teaser' : 'Pronto'}</span>` : '';
    return `
      <button class="pol" type="button" style="--r:${rot}deg" data-idx="${flat.length - 1}">
        <div class="pol-img${it.img ? '' : ' empty'}" style="--h:${hue}">${img}${stamp}</div>
        <p class="pol-caption">${esc(it.caption)}</p>
        <span class="pol-meta mono small"><span>N.º ${pad3(pieceNo)}</span><span>${esc(it.date)}</span></span>
      </button>`;
  }).join('');
  return `
    <section class="project-sec${p.teaser ? ' teaser' : ''}" id="project-${p.number}">
      <div class="project-head">
        <div class="project-title">
          <p class="label mono project-num reveal">Project #${p.number}${p.kicker ? ` <span class="muted">/ ${esc(p.kicker)}</span>` : ''}</p>
          <h2 class="project-name reveal">${rich(p.name)}</h2>
        </div>
        <div class="project-side reveal">
          <span class="chip mono small"><span class="dot"></span>${esc(p.status)}</span>
          ${p.description ? `<p class="project-desc">${rich(p.description)}</p>` : ''}
          ${p.note ? `<p class="project-note">${rich(p.note)}</p>` : ''}
        </div>
        <div class="project-info reveal">
          ${(p.facts || []).length ? `<dl class="facts">${p.facts.map(([k, v]) => `<div><dt class="mono small">${esc(k)}</dt><dd>${rich(v)}</dd></div>`).join('')}</dl>` : ''}
          ${(p.tags || []).length ? `<div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>` : ''}
          <span class="counter mono small">${String(total).padStart(2, '0')} piezas · desliza →</span>
        </div>
      </div>
      <div class="viewport"><div class="track">${cards}
        <div class="pol end" style="--r:2deg"><span class="mono small muted">Continuará →</span></div>
      </div></div>
    </section>`;
}).join('');

/* ---------- Smooth scroll, reveals, horizontal carousels ---------- */
const { gsap, ScrollTrigger, Lenis } = window;
let lenis = null;
if (gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  window.__revealReady = true;

  if (Lenis && !reduceMotion) {
    lenis = new Lenis({ lerp: 0.09 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { duration: 1.4 }); else target.scrollIntoView({ behavior: 'smooth' });
  }));

  if (reduceMotion) {
    gsap.set('.reveal', { opacity: 1, filter: 'none', y: 0 });
  } else {
    gsap.from('.hero-logo .big', { yPercent: 30, opacity: 0, filter: 'blur(24px)', duration: 1.8, ease: 'expo.out', delay: 0.15 });
    ScrollTrigger.batch('.reveal', {
      start: 'top 90%',
      onEnter: (els) => gsap.to(els, { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.2, stagger: 0.08, ease: 'power3.out' }),
    });

    // Desktop: vertical scroll moves each carousel sideways while the section is pinned
    if (!isMobile) {
      document.body.classList.add('pinned');
      document.querySelectorAll('.project-sec').forEach((sec) => {
        const track = sec.querySelector('.track');
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: { trigger: sec, start: 'top top', end: () => '+=' + distance(), pin: true, scrub: 1, invalidateOnRefresh: true },
        });
        gsap.from(sec.querySelectorAll('.pol'), {
          y: 80, opacity: 0, rotate: (i) => (i % 2 ? 8 : -8), stagger: 0.07, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sec, start: 'top 70%' },
        });
      });
    }
    document.fonts && document.fonts.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener('load', () => ScrollTrigger.refresh());
  }
}

/* ---------- Lightbox with flip ---------- */
const lb = document.getElementById('lightbox');
const card = document.getElementById('lb-card');
let current = 0;
const show = (idx) => {
  current = (idx + flat.length) % flat.length;
  const it = flat[current];
  const imgBox = document.getElementById('lb-img');
  imgBox.className = 'pol-img' + (it.img ? '' : ' empty');
  imgBox.style.setProperty('--h', (current * 47) % 360);
  imgBox.innerHTML = it.img ? `<img src="${esc(it.img)}" alt="${esc(it.caption)}">` : '';
  document.getElementById('lb-caption').textContent = it.caption || '';
  document.getElementById('lb-num').textContent = `N.º ${pad3(it.n)} · Project #${it.project.number} ${plain(it.project.name)} · ${it.i + 1}/${it.total}`;
  document.getElementById('lb-back').textContent = it.back || '';
  document.getElementById('lb-date').textContent = it.date || '';
  card.classList.remove('flipped');
};
const open = (idx) => {
  show(idx);
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  lenis && lenis.stop();
};
const close = () => {
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  lenis && lenis.start();
};
root.addEventListener('click', (e) => {
  const pol = e.target.closest('.pol[data-idx]');
  if (pol) open(Number(pol.dataset.idx));
});
card.addEventListener('click', () => card.classList.toggle('flipped'));
lb.querySelector('.lb-close').addEventListener('click', close);
lb.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
lb.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
window.addEventListener('keydown', (e) => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowRight') show(current + 1);
  if (e.key === 'ArrowLeft') show(current - 1);
  if (e.key === ' ') { e.preventDefault(); card.classList.toggle('flipped'); }
});

/* ---------- WebGL: sculptural shapes in the ung stroke language ---------- */
const canvas = document.getElementById('gl');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
} catch (err) {
  canvas.style.display = 'none';
}

if (renderer) {
  const hero = document.querySelector('.hero');
  const size = () => ({ w: hero.clientWidth, h: hero.clientHeight });
  let { w, h } = size();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
  renderer.setSize(w, h, false);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(32, w / h, 0.1, 100);
  camera.position.z = 10;

  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(4, 6, 6);
  scene.add(key, new THREE.AmbientLight(0xffffff, 0.25));

  // Materials: matte ceramic, graphite, one red accent, frosted glass
  const ceramic = new THREE.MeshPhysicalMaterial({ color: 0xf1eee8, roughness: 0.42, clearcoat: 0.5, clearcoatRoughness: 0.3 });
  const graphite = new THREE.MeshPhysicalMaterial({ color: 0x1b1b1b, roughness: 0.32, clearcoat: 0.8, clearcoatRoughness: 0.2 });
  const accent = new THREE.MeshPhysicalMaterial({ color: 0xe5383b, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.15 });
  const glass = new THREE.MeshPhysicalMaterial({ color: 0xece8f1, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.08, iridescence: 1, iridescenceIOR: 1.4, iridescenceThicknessRange: [180, 520] }); // pearl

  const T = 0.17; // stroke thickness, like the logo
  const seg = isMobile ? 48 : 96;
  const arc = (r, a) => new THREE.TorusGeometry(r, T, 32, seg, a);
  const capsule = (len) => new THREE.CapsuleGeometry(T, len, 16, 32);

  // Rounded end caps so arcs read as one continuous stroke
  const strokeArc = (r, a, mat) => {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(arc(r, a), mat));
    const cap = new THREE.SphereGeometry(T, 32, 16);
    const c1 = new THREE.Mesh(cap, mat); c1.position.set(r, 0, 0);
    const c2 = new THREE.Mesh(cap, mat); c2.position.set(Math.cos(a) * r, Math.sin(a) * r, 0);
    g.add(c1, c2);
    return g;
  };

  const s = isMobile ? 0.55 : 1;
  const spec = [
    // [object, x, y, z, rotX, rotY, rotZ]
    [strokeArc(0.75, Math.PI, ceramic),        -4.6,  1.9, -1.0, 0.3, 0.4, 0.2],
    [strokeArc(0.6, Math.PI, graphite),         4.7, -1.8, -0.5, -0.4, 0.2, 3.3],
    [strokeArc(0.62, Math.PI * 1.5, ceramic),   4.3,  2.2, -2.2, 0.5, -0.5, 0.8],
    [new THREE.Mesh(capsule(1.5), ceramic),    -3.9, -2.1, -0.4, 0.2, 0.0, 1.1],
    [new THREE.Mesh(capsule(0.7), graphite),   -1.2,  2.9, -3.0, 0.0, 0.3, -0.6],
    [new THREE.Mesh(new THREE.SphereGeometry(0.34, 64, 32), accent), 2.4, -2.6, 0.6, 0, 0, 0],
    [new THREE.Mesh(new THREE.SphereGeometry(0.62, 64, 32), glass),   1.5,  0.4,  1.0, 0, 0, 0],
    [new THREE.Mesh(new THREE.SphereGeometry(0.14, 32, 16), ceramic), 1.2,  2.6, -1.4, 0, 0, 0],
    [new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 16), graphite), -0.6, -2.9, -0.8, 0, 0, 0],
  ];

  const shapes = spec.map(([obj, x, y, z, rx, ry, rz], i) => {
    obj.position.set(x * (isMobile ? 0.42 : 1), y * (isMobile ? 1.15 : 1), z);
    obj.rotation.set(rx, ry, rz);
    obj.scale.setScalar(s);
    obj.userData = { base: obj.position.clone(), rot: obj.rotation.clone(), phase: i * 1.37, amp: 0.12 + (i % 3) * 0.05 };
    scene.add(obj);
    return obj;
  });

  const mouse = new THREE.Vector2();
  const eased = new THREE.Vector2();
  window.addEventListener('pointermove', (e) => {
    mouse.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
  }, { passive: true });

  const clockT = new THREE.Clock();
  let visible = true;
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(hero);
  const calm = reduceMotion ? 0.35 : 1; // slower, smaller motion when the OS asks for less

  const render = () => {
    requestAnimationFrame(render);
    if (!visible) return;
    const t = clockT.getElapsedTime() * calm;
    const sp = Math.min(window.scrollY / Math.max(h, 1), 1.2);
    eased.lerp(mouse, 0.04);
    shapes.forEach((o, i) => {
      const u = o.userData;
      const depth = 1 + (o.position.z + 3) * 0.12; // nearer shapes move more (parallax)
      o.position.x = u.base.x + eased.x * 0.35 * depth;
      o.position.y = u.base.y + Math.sin(t * 0.5 + u.phase) * u.amp + eased.y * 0.25 * depth + sp * (1.5 + (i % 3) * 0.7);
      o.rotation.x = u.rot.x + Math.sin(t * 0.3 + u.phase) * 0.25 + sp * 0.6;
      o.rotation.y = u.rot.y + t * 0.12 * (i % 2 ? 1 : -1);
      o.rotation.z = u.rot.z + Math.cos(t * 0.25 + u.phase) * 0.15;
    });
    canvas.style.opacity = String(Math.max(0, 1 - sp * 0.8));
    renderer.render(scene, camera);
  };
  render();

  window.addEventListener('resize', () => {
    ({ w, h } = size());
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  });
}
