import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

const DATA = window.UNG || { site: {}, projects: [] };
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = window.matchMedia('(max-width: 860px)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches; // mouse/trackpad, not touch
const rich = (s) => esc(s).replace(/\*(.+?)\*/g, '<em class="script">$1</em>');
const plain = (s) => String(s ?? '').replace(/\*/g, '');
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

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
document.getElementById('hero-list').innerHTML = DATA.projects.map((p) => `<li><a href="#project-${p.number}"><span class="script">(${String(p.number).padStart(2, '0')})</span> ${esc(plain(p.name))}</a></li>`).join('');
document.getElementById('marquee').innerHTML = [...words, ...words].map((w) => `<span>${esc(w)}</span><span>✦</span>`).join('');

/* ---------- Todo lo disponible ---------- */
const cat = DATA.catalog;
const catRoot = document.getElementById('disponible');
if (cat && catRoot) {
  let n = 0;
  catRoot.innerHTML = `
    <div class="cat-head">
      <p class="label reveal"><span class="spark" aria-hidden="true">✦</span> Disponible hoy</p>
      <h2 class="cat-title reveal">${rich(cat.title)}</h2>
      ${cat.intro ? `<p class="cat-intro reveal">${esc(cat.intro)}</p>` : ''}
    </div>
    ${cat.groups.map((g) => `
      <div class="cat-group">
        <p class="cat-label mono reveal">${esc(g.label)} <span class="muted">· ${g.items.length}</span></p>
        <div class="cat-grid${g.items.some((it) => it.img) ? '' : ' text-only'}">
          ${g.items.map((it) => `
            <a class="cat-card reveal" href="${esc(it.link)}">
              ${it.img ? `<span class="cat-img"><img src="${esc(it.img)}" alt="" loading="lazy"></span>` : ''}
              <span class="cat-body">
                <span class="cat-top"><span class="script cat-no">(${String(++n).padStart(2, '0')})</span><span class="cat-status mono">${esc(it.status)}</span></span>
                <span class="cat-name">${rich(it.name)}</span>
                <span class="cat-area mono">${esc(it.area)}</span>
                <span class="cat-text">${esc(it.text)}</span>
                <span class="cat-open">Abrir <span class="arrow" aria-hidden="true">→</span></span>
              </span>
            </a>`).join('')}
        </div>
      </div>`).join('')}`;
}

/* ---------- Project carousels ---------- */
const flat = []; // every polaroid, for the lightbox
let pieceNo = 0;
const root = document.getElementById('proyectos');
root.innerHTML = DATA.projects.map((p, pi) => {
  const total = p.items.length;
  pieceNo = 0; // every project starts its own count: N.º 001, 002…
  const cards = p.items.map((it, i) => {
    pieceNo += 1;
    flat.push({ ...it, project: p, n: pieceNo, i, total });
    const hue = (pi * 60 + i * 47) % 360;
    const img = it.img
      ? `<img src="${esc(it.img)}" alt="${esc(it.caption || `${plain(p.name)} — proceso ${i + 1}`)}" loading="lazy">`
      : '';
    const stamp = p.teaser ? `<span class="stamp">${it.img ? 'Teaser' : 'Pronto'}</span>` : '';
    return `
      <button class="pol" type="button" data-idx="${flat.length - 1}">
        <div class="pol-img${it.img ? '' : ' empty'}" style="--h:${hue}">${img}${stamp}</div>
        <p class="pol-caption">${esc(it.caption)}</p>
        <span class="pol-meta"><span class="script">(${String(pieceNo).padStart(2, '0')})</span><span class="mono small">${esc(it.date)}</span></span>
      </button>`;
  }).join('');
  return `
    <section class="project-sec${p.teaser ? ' teaser' : ''}" id="project-${p.number}">
      <div class="project-head">
        <div class="project-title">
          <p class="label project-num reveal"><span class="script">(${String(p.number).padStart(2, '0')})</span>${p.kicker ? ` <span class="muted">${esc(p.kicker)}</span>` : ''}</p>
          <h2 class="project-name reveal">${rich(p.name)}</h2>
        </div>
        <div class="project-side reveal">
          <span class="chip"><span class="dot"></span>${esc(p.status)}</span>
          ${p.description ? `<p class="project-desc">${rich(p.description)}</p>` : ''}
          ${p.note ? `<p class="project-note">${rich(p.note)}</p>` : ''}
          ${p.attribution ? `<p class="project-note"><a href="${esc(p.attribution.href)}">${esc(p.attribution.text)}</a></p>` : ''}
          ${p.link ? `<a class="sim-btn" href="${esc(p.link)}" target="_blank" rel="noopener">Probar ${plain(p.name)} <span class="arrow" aria-hidden="true">→</span></a>` : ''}
        </div>
        <div class="project-info reveal">
          ${(p.facts || []).length ? `<dl class="facts">${p.facts.map(([k, v]) => `<div><dt class="mono small">${esc(k)}</dt><dd>${rich(v)}</dd></div>`).join('')}</dl>` : ''}
          ${(p.tags || []).length ? `<div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>` : ''}
          <span class="counter mono small">${String(total).padStart(2, '0')} piezas · desliza →</span>
        </div>
      </div>
      <div class="viewport"><div class="track">${cards}
        ${p.link ? `<a class="pol end go" href="${esc(p.link)}" target="_blank" rel="noopener"><span class="go-k mono small">Simulador</span><span class="go-t">Probar <em class="script">${plain(p.name)}</em></span><span class="go-a" aria-hidden="true">→</span></a>` : ''}
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

    // Desktop with a mouse: vertical scroll moves each carousel sideways while the section is pinned.
    // Touch screens (phones, iPad) keep both separate: scroll down normally, swipe the carousel sideways.
    if (!isMobile && finePointer) {
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
          y: 80, opacity: 0, stagger: 0.07, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sec, start: 'top 70%' },
        });
      });
    }
    document.fonts && document.fonts.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener('load', () => { if (!location.hash) { window.scrollTo(0, 0); lenis && lenis.scrollTo(0, { immediate: true }); } ScrollTrigger.refresh(); });
  }
}

/* ---------- Mouse without pinning (reduced motion, narrow window): arrows + drag ---------- */
// Touch keeps native swipe; the vertical wheel keeps scrolling the page.
if (finePointer && !document.body.classList.contains('pinned')) {
  document.querySelectorAll('.project-sec').forEach((sec) => {
    const vp = sec.querySelector('.viewport');
    const info = sec.querySelector('.project-info');
    const nav = document.createElement('div');
    nav.className = 'car-nav';
    nav.innerHTML = '<button class="car-btn" type="button" aria-label="Anterior"><span aria-hidden="true">←</span></button>'
      + '<button class="car-btn" type="button" aria-label="Siguiente"><span aria-hidden="true">→</span></button>';
    info.appendChild(nav);
    info.classList.add('has-nav');
    const [prev, next] = nav.children;

    const update = () => {
      const max = vp.scrollWidth - vp.clientWidth;
      nav.hidden = max <= 1;
      prev.setAttribute('aria-disabled', String(vp.scrollLeft <= 1));
      next.setAttribute('aria-disabled', String(vp.scrollLeft >= max - 1));
    };
    // One viewport width minus one card, so the last visible card stays as context
    const step = () => {
      const pol = vp.querySelector('.pol');
      return Math.max(vp.clientWidth - (pol ? pol.offsetWidth : 0), 120);
    };
    const go = (dir) => {
      const max = vp.scrollWidth - vp.clientWidth;
      if (dir < 0 ? vp.scrollLeft <= 1 : vp.scrollLeft >= max - 1) return; // already at the edge
      vp.scrollBy({ left: dir * step(), behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    prev.addEventListener('click', () => go(-1));
    next.addEventListener('click', () => go(1));
    vp.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    window.addEventListener('load', update);
    update();

    // Drag with the mouse; a drag over 5px swallows the click that ends it
    vp.classList.add('can-drag');
    let startX = 0, startLeft = 0, down = false, dragging = false, swallow = false;
    vp.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      down = true; dragging = false; startX = e.clientX; startLeft = vp.scrollLeft;
    });
    vp.addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!dragging && Math.abs(dx) > 5) {
        dragging = true;
        vp.setPointerCapture(e.pointerId);
        vp.classList.add('grabbing'); // also turns off snap while dragging
        window.getSelection()?.removeAllRanges();
      }
      if (dragging) vp.scrollLeft = startLeft - dx;
    });
    const end = (e) => {
      if (!down) return;
      down = false;
      if (!dragging) return;
      dragging = false;
      swallow = true;
      setTimeout(() => { swallow = false; }, 0); // if no click follows, forget it
      if (vp.hasPointerCapture(e.pointerId)) vp.releasePointerCapture(e.pointerId);
      vp.classList.remove('grabbing');
    };
    vp.addEventListener('pointerup', end);
    vp.addEventListener('pointercancel', end);
    vp.addEventListener('click', (e) => {
      if (!swallow) return;
      e.preventDefault(); e.stopPropagation(); swallow = false;
    }, true);
    vp.addEventListener('dragstart', (e) => e.preventDefault()); // no native image/link drag
  });
}

/* ---------- Touch screens: reveal a teaser photo when it is centered ---------- */
if (window.matchMedia('(hover: none)').matches) {
  document.querySelector('.lb-hint').textContent = 'Toca la foto para voltearla';
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => en.target.classList.toggle('in-view', en.intersectionRatio > 0.75));
  }, { threshold: [0, 0.75, 1] });
  document.querySelectorAll('.pol[data-idx]').forEach((el) => io.observe(el));
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
  document.getElementById('lb-num').textContent = `${plain(it.project.name)} · ${String(it.i + 1).padStart(2, '0')} / ${String(it.total).padStart(2, '0')}`;
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

/* ---------- Buzón de ideas → Google Form ---------- */
const bForm = document.getElementById('buzon-form');
if (bForm) {
  const msg = document.getElementById('buzon-msg');
  const cfg = DATA.buzon || {};
  const say = (text, kind) => { msg.textContent = text; msg.className = 'buzon-msg ' + (kind || ''); };
  const openedAt = Date.now();
  const lastKey = 'ung-buzon-last';
  const getLast = () => { try { return +localStorage.getItem(lastKey) || 0; } catch { return 0; } };
  const setLast = () => { try { localStorage.setItem(lastKey, String(Date.now())); } catch {} };
  bForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // validación propia (mensajes en español, primer campo con error enfocado)
    let first = null;
    bForm.querySelectorAll('[required]').forEach((el) => {
      const bad = el.type === 'radio' ? !bForm.querySelector(`[name="${el.name}"]:checked`) : el.type === 'checkbox' ? !el.checked : !el.value.trim() || !el.checkValidity();
      el.setAttribute('aria-invalid', bad ? 'true' : 'false');
      if (bad && !first) first = el;
    });
    if (first) { first.focus(); say('Revisa los campos marcados con * (y que el correo sea válido).', 'err'); return; }
    if (!cfg.endpoint && !cfg.action) { say('El buzón aún se está conectando. Intenta de nuevo más tarde.', 'err'); return; }
    // antispam: campo trampa lleno o envío demasiado rápido → se descarta en silencio
    const bot = document.getElementById('b-sitio').value.trim() !== '' || Date.now() - openedAt < 4000;
    if (Date.now() - getLast() < 60000) { say('Ya recibimos una idea desde este navegador hace un momento. Espera un minuto para mandar otra.', 'err'); return; }
    const fd = new FormData(bForm);
    if (bot) { bForm.reset(); say('Enviado.', 'ok'); return; }
    const btn = bForm.querySelector('.send');
    btn.disabled = true; say('Enviando…');
    const done = (text) => {
      setLast();
      bForm.reset();
      bForm.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
      say(text, 'ok');
    };
    // respaldo: Google Forms directo. No devuelve CORS (respuesta opaca), así que no se promete más de lo que se sabe
    const viaForm = async () => {
      const body = new URLSearchParams();
      for (const [k, v] of fd.entries()) { const id = cfg.entries[k]; if (id && String(v).trim()) body.append(id, String(v).trim()); }
      await fetch(cfg.action, { method: 'POST', mode: 'no-cors', body });
      done('Enviado. Si en unos días no tienes respuesta, escríbeme por Instagram (@uligress) para confirmar que llegó.');
    };
    try {
      if (cfg.endpoint) {
        // servicio propio: valida, guarda en la Bandeja, avisa por correo y confirma de verdad.
        // text/plain evita la petición previa de CORS; el script lee el JSON del cuerpo
        const data = { abiertoMs: Date.now() - openedAt, publico: fd.getAll('publico') };
        for (const [k, v] of fd.entries()) if (k !== 'publico') data[k] = String(v).trim();
        let r = null;
        try {
          const res = await fetch(cfg.endpoint, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(data) });
          r = await res.json();
        } catch { r = null; }
        if (r && r.ok) { done('¡Listo, tu idea llegó! Te escribiré al correo que dejaste.'); return; }
        if (r && r.mensaje) { say(r.mensaje, 'err'); return; }
        if (!cfg.action) throw new Error('sin respaldo');
      }
      await viaForm();
    } catch {
      say('No se pudo enviar. Revisa tu conexión e inténtalo otra vez.', 'err');
    } finally { btn.disabled = false; }
  });
}

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
  renderer.toneMappingExposure = 1.15;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(32, w / h, 0.1, 100);
  camera.position.z = 10;

  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(4, 6, 6);
  scene.add(key, new THREE.AmbientLight(0xffffff, 0.25));

  // Materials (estilo Ignitex): obsidian, chrome and clear glass — monochrome, no color accent
  const ceramic = new THREE.MeshPhysicalMaterial({ color: 0x2a2e35, roughness: 0.22, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08 });
  const graphite = new THREE.MeshPhysicalMaterial({ color: 0x0b0e12, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.1 });
  const accent = new THREE.MeshPhysicalMaterial({ color: 0xe9ebef, metalness: 1, roughness: 0.1 });
  const glass = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.04, transmission: 1, thickness: 0.9, ior: 1.5, clearcoat: 1 });

  const metal = new THREE.MeshPhysicalMaterial({ color: 0xd9dce1, metalness: 1, roughness: 0.14 });
  const brainMat = new THREE.MeshPhysicalMaterial({ color: 0xdfe3ea, roughness: 0.22, transmission: 0.9, thickness: 1.2, ior: 1.45, clearcoat: 1 });
  const seg = isMobile ? 48 : 96;

  /* AmnioSim: spinal needle with its hub */
  const needle = () => {
    const g = new THREE.Group();
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 3.0, 16), metal);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.12, 16), metal);
    tip.position.y = -1.56;
    tip.rotation.x = Math.PI;
    const hub = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.32, 12, 24), ceramic);
    hub.position.y = 1.62;
    const wing = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.05, 32), graphite);
    wing.position.y = 1.4;
    g.add(shaft, tip, hub, wing);
    return g;
  };

  /* AmnioSim: convex ultrasound probe */
  const probe = () => {
    const g = new THREE.Group();
    const shape = new THREE.Shape();
    shape.moveTo(-0.22, 0.9);
    shape.lineTo(0.22, 0.9);
    shape.lineTo(0.36, 0.05);
    shape.absarc(0, 0.05, 0.36, 0, Math.PI, true); // convex footprint
    shape.lineTo(-0.22, 0.9);
    const body = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, {
      depth: 0.22, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 6, curveSegments: 32,
    }), ceramic);
    body.position.z = -0.11;
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.37, 0.37, 0.26, 48, 1, false, Math.PI / 2, Math.PI), graphite);
    lens.rotation.x = Math.PI / 2;
    lens.position.y = 0.05;
    const cable = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.95, 0), new THREE.Vector3(0.05, 1.4, 0.1), new THREE.Vector3(-0.25, 1.8, 0.05), new THREE.Vector3(-0.1, 2.3, -0.2),
    ]), 48, 0.045, 12), graphite);
    g.add(body, lens, cable);
    return g;
  };

  /* Neurosurgery: stylized brain (two hemispheres with gyri) */
  const brain = () => {
    const g = new THREE.Group();
    const geo = mergeVertices(new THREE.IcosahedronGeometry(0.62, isMobile ? 5 : 6)); // shared vertices → smooth shading
    const p = geo.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i).normalize();
      const folds = Math.sin(v.x * 11 + Math.sin(v.y * 7) * 2.2) * Math.cos(v.z * 9 + v.y * 4);
      const r = 0.62 * (1 + folds * 0.045);
      p.setXYZ(i, v.x * r * 0.82, v.y * r * 0.9, v.z * r * 1.15);
    }
    geo.computeVertexNormals();
    const left = new THREE.Mesh(geo, brainMat);
    left.position.x = -0.27;
    const right = left.clone();
    right.position.x = 0.27;
    right.scale.x = -1;
    const stem = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.3, 8, 16), brainMat);
    stem.position.set(0, -0.62, -0.2);
    stem.rotation.x = 0.4;
    g.add(left, right, stem);
    return g;
  };

  /* Neurosurgery: Yasargil-style aneurysm clip */
  const clip = () => {
    const g = new THREE.Group();
    const blade = new THREE.CapsuleGeometry(0.05, 1.0, 8, 16);
    const b1 = new THREE.Mesh(blade, metal); b1.position.x = -0.07;
    const b2 = new THREE.Mesh(blade, metal); b2.position.x = 0.07;
    b1.scale.z = b2.scale.z = 0.45;
    const pts = [];
    for (let i = 0; i <= 120; i++) {
      const a = (i / 120) * Math.PI * 2 * 2.5;
      pts.push(new THREE.Vector3(Math.cos(a) * 0.17, 0.62 + (i / 120) * 0.22, Math.sin(a) * 0.17));
    }
    const coil = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 160, 0.03, 10), metal);
    const arm1 = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.32, 6, 12), metal);
    arm1.position.set(-0.12, 0.98, 0); arm1.rotation.z = 0.35;
    const arm2 = arm1.clone(); arm2.position.x = 0.12; arm2.rotation.z = -0.35;
    g.add(b1, b2, coil, arm1, arm2);
    return g;
  };

  /* Neurosurgery: artery bifurcation with an aneurysm dome, the red accent */
  const aneurysm = () => {
    const g = new THREE.Group();
    const vessel = (pts, r) => new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 64, r, 20), accent);
    g.add(vessel([new THREE.Vector3(0, -1.0, 0), new THREE.Vector3(0.05, -0.4, 0.1), new THREE.Vector3(0, 0, 0)], 0.1));
    g.add(vessel([new THREE.Vector3(0, 0, 0), new THREE.Vector3(-0.35, 0.3, 0), new THREE.Vector3(-0.8, 0.45, -0.1)], 0.075));
    g.add(vessel([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.4, 0.25, 0.05), new THREE.Vector3(0.85, 0.55, 0)], 0.075));
    const joint = new THREE.Mesh(new THREE.SphereGeometry(0.1, 24, 16), accent);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.2, 48, 32), accent);
    dome.position.set(0.04, 0.24, 0.06);
    const caps = [[-0.8, 0.45, -0.1, 0.075], [0.85, 0.55, 0, 0.075], [0, -1.0, 0, 0.1]].map(([x, y, z, r]) => {
      const c = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 12), accent); c.position.set(x, y, z); return c;
    });
    g.add(joint, dome, ...caps);
    return g;
  };

  /* Medicine: DNA double helix */
  const dna = () => {
    const g = new THREE.Group();
    const turns = 2.2, h = 2.4, r = 0.32, n = 140;
    const strand = (off, mat) => {
      const pts = [];
      for (let i = 0; i <= n; i++) {
        const t = i / n, a = t * Math.PI * 2 * turns + off;
        pts.push(new THREE.Vector3(Math.cos(a) * r, t * h - h / 2, Math.sin(a) * r));
      }
      return new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 200, 0.045, 12), mat);
    };
    g.add(strand(0, ceramic), strand(Math.PI, graphite));
    const rung = new THREE.CylinderGeometry(0.018, 0.018, r * 2, 8);
    for (let i = 1; i < 18; i++) {
      const t = i / 18, a = t * Math.PI * 2 * turns;
      const m = new THREE.Mesh(rung, i % 3 ? ceramic : accent);
      m.position.y = t * h - h / 2;
      m.rotation.z = Math.PI / 2;
      m.rotation.y = -a;
      g.add(m);
    }
    return g;
  };

  const sac = new THREE.Mesh(new THREE.SphereGeometry(0.58, 64, 32), glass); // amniotic sac, pearl

  const spec = [
    // [name, object, x, y, z, rotX, rotY, rotZ]
    ['brain',    brain(),     4.3,  1.7, -1.2, 0.2, -0.6, 0.1],
    ['clip',     clip(),      2.8,  1.0,  0.4, 0.3, 0.4, -0.5],
    ['aneurysm', aneurysm(),  4.6, -1.6, -0.6, 0.2, 0.3, 0.2],
    ['needle',   needle(),    1.3, -0.5,  0.6, 0.2, 0.2, 0.85],
    ['probe',    probe(),    -0.6,  2.6, -1.8, 0.3, 0.5, 2.6],
    ['sac',      sac,         1.6,  0.6,  1.0, 0, 0, 0],
    ['dna',      dna(),       3.1, -1.8, -2.4, 0.4, 0, 1.1],
  ];
  // Phones: a compact cluster in the top half, sized to the narrow view; text sits below
  const mobileLayout = {
    brain:    [-0.6, 1.7, -0.6, 0.5],
    clip:     [0.85, 1.95, 0.2, 0.4],
    sac:      [0.35, 1.2, 0.6, 0.5],
    needle:   [-0.1, 0.8, 0.4, 0.4],
    aneurysm: [0.85, 0.4, -0.4, 0.42],
    probe:    [-0.9, 0.25, -0.9, 0.42],
  };
  const layout = spec
    .filter(([name]) => !isMobile || mobileLayout[name])
    .map(([name, obj, x, y, z, rx, ry, rz]) => {
      if (!isMobile) return [obj, x, y, z, rx, ry, rz, 1];
      const [mx, my, mz, ms] = mobileLayout[name];
      return [obj, mx, my, mz, rx, ry, rz, ms];
    });

  const shapes = layout.map(([obj, x, y, z, rx, ry, rz, sc], i) => {
    obj.position.set(x, y, z);
    obj.rotation.set(rx, ry, rz);
    obj.scale.setScalar(sc);
    obj.userData = { base: obj.position.clone(), rot: obj.rotation.clone(), phase: i * 1.37, amp: 0.12 + (i % 3) * 0.05, sc, spin: 0, spinAngle: 0, lift: 0 };
    obj.userData.radius = new THREE.Box3().setFromObject(obj).getBoundingSphere(new THREE.Sphere()).radius;
    scene.add(obj);
    return obj;
  });

  /* ---------- Easter egg: grab any shape and move it (mouse only), kept inside the hero ---------- */
  const drag = { obj: null, plane: new THREE.Plane(), offset: new THREE.Vector3(), hit: new THREE.Vector3(), lastX: 0, vx: 0 };
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const pointAt = (e) => {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
  };
  const shapeAt = (e) => {
    pointAt(e);
    const hit = ray.intersectObjects(shapes, true)[0];
    let o = hit?.object;
    while (o && !shapes.includes(o)) o = o.parent;
    return o || null;
  };
  // Keep the shape's resting point inside the visible frustum at its depth, with room for its size,
  // the float and the parallax, so it can never be dragged off the page.
  const keepInside = (o) => {
    const u = o.userData;
    const d = camera.position.z - u.base.z;
    const hh = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * d;
    const hw = hh * camera.aspect;
    const m = u.radius * 0.85 + 0.8;
    u.base.x = clamp(u.base.x, -hw + m, hw - m);
    u.base.y = clamp(u.base.y, -hh + m, hh - m);
  };
  if (finePointer) {
    let hoverQueued = false;
    hero.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 || e.target.closest('a, button, input, textarea')) return;
      const o = shapeAt(e);
      if (!o) return;
      e.preventDefault();
      drag.obj = o;
      o.userData.moved = true;
      drag.plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(new THREE.Vector3()).negate(), o.position);
      ray.ray.intersectPlane(drag.plane, drag.hit);
      drag.offset.copy(o.userData.base).sub(drag.hit);
      drag.lastX = e.clientX; drag.vx = 0;
      hero.classList.add('grabbing');
      hero.setPointerCapture?.(e.pointerId);
    });
    hero.addEventListener('pointermove', (e) => {
      if (drag.obj) {
        pointAt(e);
        if (ray.ray.intersectPlane(drag.plane, drag.hit)) {
          const u = drag.obj.userData;
          u.base.x = drag.hit.x + drag.offset.x;
          u.base.y = drag.hit.y + drag.offset.y;
          keepInside(drag.obj);
        }
        drag.vx = e.clientX - drag.lastX; drag.lastX = e.clientX;
        return;
      }
      if (hoverQueued) return;
      hoverQueued = true;
      requestAnimationFrame(() => { hoverQueued = false; hero.classList.toggle('grab-hover', Boolean(shapeAt(e)) && !e.target.closest('a, button')); });
    });
    const release = () => {
      if (!drag.obj) return;
      drag.obj.userData.spin += clamp(drag.vx * 0.25, -6, 6) || 2.5; // a little toss on release
      drag.obj = null;
      hero.classList.remove('grabbing');
    };
    hero.addEventListener('pointerup', release);
    hero.addEventListener('pointercancel', release);
    hero.addEventListener('pointerleave', () => hero.classList.remove('grab-hover'));
  }

  const mouse = new THREE.Vector2();
  const eased = new THREE.Vector2();
  window.addEventListener('pointermove', (e) => {
    // clamped: with pointer capture (dragging a shape) the pointer can report positions outside the window
    mouse.set(Math.max(-1, Math.min(1, (e.clientX / window.innerWidth) * 2 - 1)), Math.max(-1, Math.min(1, -(e.clientY / window.innerHeight) * 2 + 1)));
  }, { passive: true });

  const clockT = new THREE.Clock();
  let visible = true;
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(hero);
  const calm = reduceMotion ? 0.35 : 1; // slower, smaller motion when the OS asks for less

  let lastT = 0;
  const render = () => {
    requestAnimationFrame(render);
    if (!visible) return;
    const t = clockT.getElapsedTime() * calm;
    const dt = Math.min(0.05, t - lastT); lastT = t;
    const sp = Math.min(window.scrollY / Math.max(h, 1), 1.2);
    eased.lerp(mouse, 0.04);
    shapes.forEach((o, i) => {
      const u = o.userData;
      const depth = 1 + (o.position.z + 3) * 0.12; // nearer shapes move more (parallax)
      o.position.x = u.base.x + eased.x * 0.35 * depth;
      o.position.y = u.base.y + Math.sin(t * 0.5 + u.phase) * u.amp + eased.y * 0.25 * depth + sp * (1.5 + (i % 3) * 0.7);
      o.rotation.x = u.rot.x + Math.sin(t * 0.3 + u.phase) * 0.25 + sp * 0.6;
      u.spinAngle += u.spin * dt; u.spin *= Math.pow(0.15, dt); // tossed shapes spin and settle
      o.rotation.y = u.rot.y + t * 0.12 * (i % 2 ? 1 : -1) + u.spinAngle;
      o.rotation.z = u.rot.z + Math.cos(t * 0.25 + u.phase) * 0.15;
      u.lift += ((drag.obj === o ? 1 : 0) - u.lift) * 0.15; // grabbed shape grows a touch
      o.scale.setScalar(u.sc * (1 + u.lift * 0.08));
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
    shapes.forEach((o) => { if (o.userData.moved) keepInside(o); });
  });
}
