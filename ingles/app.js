// Curso de inglés médico · ung. Contenido en course/m*.js (window.COURSE);
// cuentas y progreso en la API de Cloudflare (ung-ingles-api).
(function () {
  'use strict';

  const LOCAL = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  const API = LOCAL ? 'http://127.0.0.1:8788/api' : 'https://ung-ingles-api.bloque-ingenieria.workers.dev/api';
  // Cada idioma (inglés, alemán, francés) carga su config.js; la cuenta es la misma.
  const CFG = Object.assign({
    prefix: '', lang: 'en-US', langName: 'inglés', heroA: 'Medical', heroB: 'English',
    lead: 'Inglés médico rápido y útil: hablar con pacientes, presentar en el pase de visita y leer artículos. Clases de 15 minutos, con tu progreso guardado.',
  }, window.COURSE_CONFIG || {});
  const KEY_SESSION = 'ung-ingles-session';
  const KEY_GUEST = 'ung-ingles-guest' + (CFG.prefix ? '-' + CFG.prefix : '');
  const pid = (id) => (CFG.prefix ? CFG.prefix + '-' + id : id);
  // Del progreso de la cuenta solo se toma el de este curso, sin prefijo.
  function ownProgress(all) {
    const out = {};
    for (const [k, v] of Object.entries(all || {})) {
      const m = k.match(/^(?:([a-z]{2})-)?(m\d+l\d+)$/);
      if (m && (m[1] || '') === CFG.prefix) out[m[2]] = v;
    }
    return out;
  }
  const DAY = 86400000;
  const BOX_DAYS = [0, 1, 3, 7, 16, 35];

  const app = document.getElementById('app');
  const navUser = document.getElementById('nav-user');

  // ---------- contenido ----------
  const MODULES = (window.COURSE || []).slice().sort((a, b) => a.n - b.n);
  const LESSONS = [];
  MODULES.forEach((m) => m.lessons.forEach((l, i) => LESSONS.push(Object.assign(l, { module: m, idx: i }))));
  const lessonById = (id) => LESSONS.find((l) => l.id === id);

  function cardsOf(lesson) {
    const v = (lesson.vocab || []).map((x, i) => ({ id: 'v' + i, front: x.en, say: x.en, back: x.es, sub: x.ipa, ex: x.ex }));
    const p = (lesson.phrases || []).map((x, i) => ({ id: 'p' + i, front: x.es, say: x.en, back: x.en, sub: x.use, prod: true }));
    return v.concat(p);
  }

  // ---------- estado y almacenamiento ----------
  const state = { token: null, user: null, guest: false, progress: {} };
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* sin almacenamiento */ } },
    del(k) { try { localStorage.removeItem(k); } catch { /* sin almacenamiento */ } },
  };

  async function api(path, opts = {}) {
    const headers = { 'Content-Type': 'application/json' };
    if (state.token) headers.Authorization = 'Bearer ' + state.token;
    let res;
    try {
      res = await fetch(API + path, { method: opts.method || 'GET', headers, body: opts.body ? JSON.stringify(opts.body) : undefined });
    } catch {
      throw new Error('Sin conexión con el servidor. Revisa tu internet.');
    }
    const data = await res.json().catch(() => ({}));
    if (res.status === 401 && state.token && !opts.auth) { endSession(); throw new Error(data.error || 'Inicia sesión.'); }
    if (!res.ok) throw new Error(data.error || 'Algo salió mal.');
    return data;
  }

  function startSession(token, user) {
    state.token = token; state.user = user; state.guest = false;
    store.set(KEY_SESSION, { token, user });
  }

  function endSession() {
    state.token = null; state.user = null; state.guest = false; state.progress = {};
    store.del(KEY_SESSION);
    location.hash = '#/';
    render();
  }

  function lp(id) {
    return state.progress[id] || (state.progress[id] = { done: false, best: 0, last: 0, tries: 0, at: 0, cards: {} });
  }

  async function save(id) {
    const data = lp(id);
    data.at = Date.now();
    if (state.guest) { store.set(KEY_GUEST, state.progress); return; }
    try { await api('/progress/' + pid(id), { method: 'PUT', body: data }); }
    catch (e) { toast('No se guardó: ' + e.message); }
  }

  // ---------- utilidades ----------
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const two = (n) => String(n).padStart(2, '0');
  // La última palabra del nombre en inglés va en caligrafía.
  const scriptLast = (s) => { const w = esc(s).split(' '); const last = w.pop(); return (w.length ? w.join(' ') + ' ' : '') + '<span class="script">' + last + '</span>'; };
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const norm = (s) => String(s || '').toLowerCase().replace(/[’']/g, "'").replace(/[.,!?;:]+$/g, '').replace(/\s+/g, ' ').trim();

  let toastTimer;
  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('on');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('on'), 3200);
  }

  function modal(html, onMount) {
    const bg = document.createElement('div');
    bg.className = 'modal-bg';
    bg.innerHTML = '<div class="card modal" role="dialog" aria-modal="true">' + html + '</div>';
    document.body.appendChild(bg);
    const close = () => bg.remove();
    onMount(bg.querySelector('.modal'), close);
    const first = bg.querySelector('input, button');
    if (first) first.focus();
    return close;
  }

  // ---------- voz ----------
  let voices = [];
  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    const all = speechSynthesis.getVoices().filter((v) => v.lang.replace('_', '-').toLowerCase().startsWith(CFG.lang.toLowerCase()));
    const rank = (v) => (/samantha|google us|aria|jenny|ava|allison/i.test(v.name) ? 0 : v.localService ? 1 : 2);
    voices = all.sort((a, b) => rank(a) - rank(b));
  }
  if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }

  // Audio grabado con ElevenLabs (audio/index.js); si falta, voz del dispositivo.
  const AUDIO = window.COURSE_AUDIO || {};
  let current = null;
  function stopAll() {
    if (current) { current.pause(); current.onended = current.onerror = null; current = null; }
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  }

  function speak(text, opts = {}) {
    const file = AUDIO[text];
    if (file) {
      return new Promise((resolve) => {
        const a = new Audio('audio/' + file);
        current = a;
        a.onended = () => { if (current === a) current = null; resolve(); };
        a.onerror = () => { if (current === a) current = null; speakDevice(text, opts).then(resolve); };
        a.play().catch(() => a.onerror());
      });
    }
    return speakDevice(text, opts);
  }

  function speakDevice(text, opts = {}) {
    if (!('speechSynthesis' in window)) { toast('Tu navegador no tiene voz en ' + CFG.langName + '.'); return Promise.resolve(); }
    return new Promise((resolve) => {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = CFG.lang; u.rate = opts.rate || 0.92;
      const v = voices[opts.voice || 0] || voices[0];
      if (v) u.voice = v;
      u.onend = u.onerror = () => resolve();
      speechSynthesis.speak(u);
    });
  }
  const sayBtn = (text, label) => '<button class="say" type="button" data-say="' + esc(text) + '" aria-label="Escuchar: ' + esc(label || text) + '">▶</button>';

  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-say]');
    if (!b) return;
    stopAll();
    b.classList.add('on');
    speak(b.dataset.say).then(() => b.classList.remove('on'));
  });

  // ---------- tarjetas (repetición espaciada) ----------
  function seedCards(lesson) {
    const p = lp(lesson.id);
    cardsOf(lesson).forEach((c) => { if (!p.cards[c.id]) p.cards[c.id] = { box: 0, due: Date.now() }; });
  }

  function dueCards() {
    const now = Date.now(), out = [];
    LESSONS.forEach((l) => {
      const p = state.progress[l.id];
      if (!p || !p.cards) return;
      cardsOf(l).forEach((c) => { const s = p.cards[c.id]; if (s && s.due <= now) out.push({ lesson: l, card: c, s }); });
    });
    return out.sort((a, b) => a.s.due - b.s.due);
  }

  function rateCard(item, grade) {
    const s = item.s;
    if (grade === 0) { s.box = 0; s.due = Date.now() + 10 * 60000; }
    else { s.box = Math.min(5, s.box + grade); s.due = Date.now() + BOX_DAYS[s.box] * DAY; }
    save(item.lesson.id);
  }

  // ---------- encabezado ----------
  function renderNav() {
    if (state.user) {
      navUser.innerHTML = '<span class="who">' + esc(state.user.name || state.user.username) + '</span><a class="btn-2" href="#/cuenta">Cuenta</a>';
    } else if (state.guest) {
      navUser.innerHTML = '<span class="who">Invitado</span><a class="btn-2" href="#/cuenta">Crear cuenta</a>';
    } else {
      navUser.innerHTML = '';
    }
  }

  // ---------- vistas ----------
  function render() {
    renderNav();
    stopAll();
    const h = location.hash.replace(/^#\/?/, '');
    const signed = state.user || state.guest;
    if (!signed) return viewAuth(h === 'recuperar' ? 'recover' : 'login');
    const [r, arg] = h.split('/');
    if (r === 'l' && lessonById(arg)) return viewLesson(lessonById(arg));
    if (r === 'repaso') return viewReview();
    if (r === 'cuenta') return viewAccount();
    return viewHome();
  }

  function mount(html) {
    app.innerHTML = html;
    window.scrollTo(0, 0);
  }

  function viewAuth(tab) {
    mount(
      '<section class="grid-2 in">' +
        '<div>' +
          '<p class="label">Curso para estudiantes de Medicina</p>' +
          '<h1 class="hero-title">' + esc(CFG.heroA) + ' <span class="script">' + esc(CFG.heroB) + '</span></h1>' +
          '<p class="lead">' + esc(CFG.lead) + '</p>' +
          '<ul class="features">' +
            '<li><span class="num">(01)</span><span><b>6 módulos, ' + LESSONS.length + ' clases.</b> De la base funcional a la lectura crítica de artículos.</span></li>' +
            '<li><span class="num">(02)</span><span><b>Vocabulario con audio.</b> Pronunciación con IPA y voces naturales en ' + esc(CFG.langName) + '.</span></li>' +
            '<li><span class="num">(03)</span><span><b>Ejercicios y tarjetas.</b> Repaso espaciado de lo que vas aprendiendo.</span></li>' +
          '</ul>' +
        '</div>' +
        '<div class="card" id="auth">' +
          '<div class="tabs" role="tablist">' +
            '<button role="tab" data-tab="login">Entrar</button>' +
            '<button role="tab" data-tab="register">Crear cuenta</button>' +
            '<button role="tab" data-tab="recover">Recuperar</button>' +
          '</div>' +
          '<form id="auth-form" novalidate></form>' +
          '<p class="hint" style="margin:18px 0 0">¿Solo quieres ver cómo es? <button class="link" id="guest" type="button">Probar sin cuenta</button> (el progreso queda solo en este dispositivo).</p>' +
        '</div>' +
      '</section>'
    );
    const form = app.querySelector('#auth-form');
    const tabs = app.querySelectorAll('[data-tab]');
    const user = (ac) => '<label class="field"><span>Usuario</span><input name="username" autocomplete="' + ac + '" autocapitalize="none" spellcheck="false" maxlength="24" required></label>';
    const pass = (label, ac) => '<label class="field"><span>' + label + '</span><input name="password" type="password" autocomplete="' + ac + '" minlength="8" maxlength="128" required></label>';
    const forms = {
      login: user('username') + pass('Contraseña', 'current-password') + '<p class="err" id="err"></p><button class="btn" type="submit">Entrar <span class="arrow">→</span></button>',
      register:
        '<label class="field"><span>Nombre (opcional, se ve solo para ti)</span><input name="name" maxlength="40" autocomplete="given-name"></label>' +
        user('username') + '<p class="hint">3 a 24 caracteres: letras, números, punto o guion. No pedimos correo.</p>' +
        pass('Contraseña (mínimo 8)', 'new-password') +
        '<p class="err" id="err"></p><button class="btn" type="submit">Crear cuenta <span class="arrow">→</span></button>',
      recover:
        '<p class="hint" style="margin:0 0 14px">Usa el código de recuperación que te dimos al crear la cuenta.</p>' +
        user('username') +
        '<label class="field"><span>Código de recuperación</span><input name="code" autocapitalize="characters" spellcheck="false" placeholder="XXXX-XXXX-XXXX-XXXX" required></label>' +
        pass('Contraseña nueva', 'new-password') +
        '<p class="err" id="err"></p><button class="btn" type="submit">Cambiar contraseña <span class="arrow">→</span></button>',
    };
    function show(t) {
      tab = t;
      tabs.forEach((b) => b.setAttribute('aria-selected', String(b.dataset.tab === t)));
      form.innerHTML = forms[t];
    }
    tabs.forEach((b) => b.addEventListener('click', () => show(b.dataset.tab)));
    show(tab);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const f = Object.fromEntries(new FormData(form));
      const err = form.querySelector('#err');
      const btn = form.querySelector('button[type=submit]');
      err.textContent = ''; btn.disabled = true;
      try {
        const path = { login: '/login', register: '/register', recover: '/recover' }[tab];
        const data = await api(path, { method: 'POST', body: f, auth: true });
        startSession(data.token, data.user);
        await afterLogin();
        if (data.recoveryCode) showRecovery(data.recoveryCode, tab === 'recover');
      } catch (ex) {
        err.textContent = ex.message; btn.disabled = false;
      }
    });

    app.querySelector('#guest').addEventListener('click', () => {
      state.guest = true;
      state.progress = store.get(KEY_GUEST) || {};
      location.hash = '#/';
      render();
    });
  }

  function showRecovery(code, renewed) {
    modal(
      '<p class="label">' + (renewed ? 'Contraseña cambiada' : 'Cuenta creada') + '</p>' +
      '<h2 class="h-sub">Guarda tu código de recuperación</h2>' +
      '<p class="muted">Es la única forma de recuperar tu cuenta si olvidas la contraseña. Tómale captura o guárdalo en tus notas.' + (renewed ? ' El código anterior ya no sirve.' : '') + '</p>' +
      '<div class="code-box">' + esc(code) + '</div>' +
      '<div class="btn-row"><button class="btn" data-ok>Ya lo guardé <span class="arrow">→</span></button><button class="btn-2" data-copy>Copiar</button></div>',
      (el, close) => {
        el.querySelector('[data-ok]').addEventListener('click', close);
        el.querySelector('[data-copy]').addEventListener('click', () => {
          navigator.clipboard && navigator.clipboard.writeText(code).then(() => toast('Código copiado.'), () => toast('No se pudo copiar.'));
        });
      }
    );
  }

  async function afterLogin() {
    const guest = store.get(KEY_GUEST);
    const data = await api('/progress');
    state.progress = ownProgress(data.progress);
    // Si venía de probar sin cuenta, sube lo que hizo como invitado.
    if (guest && Object.keys(guest).length) {
      for (const [id, p] of Object.entries(guest)) {
        if (!lessonById(id)) continue;
        const mine = state.progress[id];
        if (!mine || (p.best || 0) > (mine.best || 0) || (p.done && !mine.done)) {
          state.progress[id] = Object.assign({}, mine || {}, p, { cards: Object.assign({}, p.cards, mine && mine.cards) });
          await save(id);
        }
      }
      store.del(KEY_GUEST);
      toast('Tu progreso de invitado se guardó en tu cuenta.');
    }
    location.hash = '#/';
    render();
  }

  function viewHome() {
    const done = LESSONS.filter((l) => state.progress[l.id] && state.progress[l.id].done);
    const pct = LESSONS.length ? Math.round((done.length / LESSONS.length) * 100) : 0;
    const scored = done.map((l) => state.progress[l.id].best);
    const avg = scored.length ? Math.round(scored.reduce((a, b) => a + b, 0) / scored.length) : 0;
    const due = dueCards().length;
    const next = LESSONS.find((l) => !(state.progress[l.id] && state.progress[l.id].done));
    const name = state.user ? (state.user.name || state.user.username) : '';
    let html =
      '<section class="in">' +
        '<p class="label">' + (name ? 'Hola, ' + esc(name) : 'Modo invitado') + '</p>' +
        '<h1 class="h-sec">Tu <span class="script">progreso</span></h1>' +
        '<div class="btn-row">' +
          (next ? '<a class="btn" href="#/l/' + next.id + '">' + (done.length ? 'Seguir: ' : 'Empezar: ') + esc(next.title) + ' <span class="arrow">→</span></a>' : '<span class="btn-2">Terminaste el curso ✦</span>') +
          '<a class="btn-2" href="#/repaso">Repasar tarjetas · ' + due + '</a>' +
        '</div>' +
        '<div class="stats">' +
          '<div class="card stat"><b>' + pct + '%</b><small>' + done.length + ' de ' + LESSONS.length + ' clases completadas</small><div class="bar"><i style="width:' + pct + '%"></i></div></div>' +
          '<div class="card stat"><b>' + (scored.length ? avg + '%' : '—') + '</b><small>promedio en ejercicios</small></div>' +
          '<div class="card stat"><b>' + due + '</b><small>tarjetas por repasar hoy</small></div>' +
        '</div>' +
      '</section>';
    MODULES.forEach((m) => {
      const mDone = m.lessons.filter((l) => state.progress[l.id] && state.progress[l.id].done).length;
      html +=
        '<section class="module in">' +
          '<div class="module-head"><span class="num">(' + two(m.n) + ')</span><h2>' + esc(m.title) + ' · ' + scriptLast(m.en) + '</h2><span class="mono">' + mDone + '/' + m.lessons.length + '</span></div>' +
          '<p class="module-sum">' + esc(m.summary) + '</p>' +
          '<ul class="lessons">' +
          m.lessons.map((l, i) => {
            const p = state.progress[l.id];
            const isDone = p && p.done;
            return '<li><a class="lesson-row' + (isDone ? ' done' : '') + '" href="#/l/' + l.id + '">' +
              '<span class="dot">' + (isDone ? '✓' : i + 1) + '</span>' +
              '<span class="t">' + esc(l.title) + '</span>' +
              '<span class="s">' + (isDone ? p.best + '%' : (l.minutes || 15) + ' min') + '</span></a></li>';
          }).join('') +
          '</ul>' +
        '</section>';
    });
    if (!MODULES.length) html += '<p class="muted">El contenido del curso no cargó. Recarga la página.</p>';
    mount(html);
  }

  function viewLesson(l) {
    const m = l.module;
    const pos = LESSONS.indexOf(l);
    const prev = LESSONS[pos - 1], next = LESSONS[pos + 1];
    const p = lp(l.id);
    let n = 0;
    const sec = (title) => '<h2 class="sec-title"><span class="num">(' + two(++n) + ')</span>' + title + '</h2>';
    const t = l.text || {};
    let textHtml = '';
    if (t.type === 'dialogue') {
      textHtml =
        '<div class="btn-row" style="margin-bottom:14px"><button class="btn-2" type="button" id="play-all">▶ Escuchar todo</button></div>' +
        '<div class="dialogue">' + (t.lines || []).map((x) => '<div class="line"><span class="who">' + esc(x.who) + '</span><span>' + esc(x.en) + '</span>' + sayBtn(x.en) + '</div>').join('') + '</div>';
    } else if (t.type === 'reading') {
      textHtml =
        (t.listen === false ? '' : '<div class="btn-row" style="margin-bottom:14px"><button class="btn-2" type="button" id="play-all">▶ Escuchar todo</button></div>') +
        '<div class="reading">' + (t.paragraphs || []).map((x) => '<p>' + esc(x) + '</p>').join('') + '</div>';
    }
    mount(
      '<article class="in">' +
        '<nav class="crumbs"><a href="#/">Curso</a><span>/</span><span>(' + two(m.n) + ') ' + esc(m.title) + '</span><span>/</span><span>Clase ' + (l.idx + 1) + '</span></nav>' +
        '<header class="lesson-head">' +
          '<h1 class="h-sec">' + esc(l.title) + '</h1>' +
          '<span class="goal">✦ ' + esc(l.goal) + '</span>' +
        '</header>' +
        '<section class="sec">' + sec('Idea clave') + '<div class="prose"><p>' + esc(l.intro) + '</p></div></section>' +
        '<section class="sec">' + sec('Vocabulario') +
          '<div class="vocab">' + (l.vocab || []).map((v) =>
            '<div class="card v"><div class="v-top"><div><div class="v-en">' + esc(v.en) + '</div><div class="v-ipa">' + esc(v.ipa) + '</div></div>' + sayBtn(v.en) + '</div>' +
            '<div class="v-es">' + esc(v.es) + '</div>' + (v.ex ? '<div class="v-ex">“' + esc(v.ex) + '”</div>' : '') + '</div>').join('') +
          '</div></section>' +
        '<section class="sec">' + sec('Frases útiles') +
          '<ul class="phrases">' + (l.phrases || []).map((x) =>
            '<li><span class="en">' + esc(x.en) + '</span>' + sayBtn(x.en) + '<span class="es">' + esc(x.es) + '</span>' + (x.use ? '<span class="use">' + esc(x.use) + '</span>' : '') + '</li>').join('') +
          '</ul></section>' +
        (textHtml ? '<section class="sec">' + sec(esc(t.title || (t.type === 'dialogue' ? 'Diálogo' : 'Lectura'))) + (t.context ? '<p class="context">' + esc(t.context) + '</p>' : '') + textHtml + '</section>' : '') +
        ((l.grammar || []).length ? '<section class="sec">' + sec('Puntos clave') + '<ul class="grammar">' + l.grammar.map((g) => '<li>' + esc(g) + '</li>').join('') + '</ul></section>' : '') +
        (l.tip ? '<section class="sec">' + sec('Consejo') + '<p class="tip">' + esc(l.tip) + '</p></section>' : '') +
        '<section class="sec" id="ejercicios">' + sec('Ejercicios') +
          '<p class="muted" style="margin-top:-6px">' + (p.tries ? 'Mejor resultado: ' + p.best + '% · intentos: ' + p.tries : 'Cada respuesta se revisa al momento.') + '</p>' +
          '<div id="ex-list"></div><div id="ex-result"></div>' +
        '</section>' +
        '<nav class="next-nav">' +
          (prev ? '<a class="btn-2" href="#/l/' + prev.id + '">← ' + esc(prev.title) + '</a>' : '<a class="btn-2" href="#/">← Curso</a>') +
          (next ? '<a class="btn" href="#/l/' + next.id + '">' + esc(next.title) + ' <span class="arrow">→</span></a>' : '<a class="btn" href="#/">Volver al curso <span class="arrow">→</span></a>') +
        '</nav>' +
      '</article>'
    );

    const playAll = app.querySelector('#play-all');
    if (playAll) {
      let playing = false;
      playAll.addEventListener('click', async () => {
        if (playing) { stopAll(); playing = false; playAll.textContent = '▶ Escuchar todo'; return; }
        playing = true; playAll.textContent = '■ Detener';
        const items = t.type === 'dialogue' ? t.lines.map((x) => ({ text: x.en, who: x.who })) : t.paragraphs.map((x) => ({ text: x }));
        const speakers = [...new Set(items.map((x) => x.who))];
        for (const it of items) {
          if (!playing) break;
          await speak(it.text, { voice: speakers.indexOf(it.who) % Math.max(1, Math.min(2, voices.length)) });
        }
        playing = false; playAll.textContent = '▶ Escuchar todo';
      });
    }
    runExercises(l);
  }

  function runExercises(l) {
    const list = app.querySelector('#ex-list');
    const result = app.querySelector('#ex-result');
    const exs = l.exercises || [];
    const marks = new Array(exs.length).fill(null);

    function mark(i, ok, box, ex) {
      if (marks[i] !== null) return;
      marks[i] = ok;
      const fb = document.createElement('p');
      fb.className = 'feedback';
      const right = ex.type === 'mc' ? ex.options[ex.answer] : ex.type === 'fill' ? ex.answer[0] : ex.answer;
      fb.innerHTML = (ok ? '<b class="ok">Correcto.</b> ' : '<b class="no">Respuesta: ' + esc(right) + '.</b> ') + esc(ex.explain || '');
      box.appendChild(fb);
      if (marks.every((x) => x !== null)) finish();
    }

    function finish() {
      const score = Math.round((marks.filter(Boolean).length / exs.length) * 100);
      const p = lp(l.id);
      const first = !p.done;
      p.done = true; p.last = score; p.best = Math.max(p.best, score); p.tries += 1;
      seedCards(l);
      save(l.id);
      result.innerHTML =
        '<div class="card result in"><div><small class="muted">Resultado</small><br><b>' + score + '%</b></div>' +
        '<div><p class="muted" style="margin:0 0 10px;max-width:360px">' +
          (score >= 80 ? 'Muy bien. ' : score >= 50 ? 'Vas bien; repite los que fallaste. ' : 'Vuelve a leer el vocabulario y repite. ') +
          (first ? 'Se añadieron ' + cardsOf(l).length + ' tarjetas a tu repaso.' : 'Tu mejor resultado es ' + p.best + '%.') +
        '</p><div class="btn-row"><button class="btn-2" id="retry">Repetir ejercicios</button><a class="btn-2" href="#/repaso">Repasar tarjetas</a></div></div></div>';
      result.querySelector('#retry').addEventListener('click', () => { result.innerHTML = ''; list.innerHTML = ''; runExercises(l); list.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    }

    exs.forEach((ex, i) => {
      const box = document.createElement('div');
      box.className = 'card ex';
      box.innerHTML = '<p class="ex-q"><span class="n">' + two(i + 1) + '</span><span>' + esc(ex.q) + '</span></p>';
      list.appendChild(box);

      if (ex.type === 'mc') {
        const opts = document.createElement('div');
        opts.className = 'opts';
        // Las opciones se barajan en cada intento para que la posición no dé pistas.
        shuffle(ex.options.map((o, j) => j)).forEach((j) => {
          const b = document.createElement('button');
          b.type = 'button'; b.className = 'opt'; b.textContent = ex.options[j];
          if (j === ex.answer) b.dataset.right = '1';
          b.addEventListener('click', () => {
            opts.querySelectorAll('.opt').forEach((x) => { x.disabled = true; if (x.dataset.right) x.classList.add('right'); });
            if (j !== ex.answer) b.classList.add('wrong');
            mark(i, j === ex.answer, box, ex);
          });
          opts.appendChild(b);
        });
        box.appendChild(opts);
      } else if (ex.type === 'fill') {
        const wrap = document.createElement('form');
        wrap.className = 'fill btn-row';
        wrap.innerHTML = '<input autocapitalize="none" spellcheck="false" aria-label="Tu respuesta"><button class="btn-2" type="submit">Revisar</button>';
        wrap.addEventListener('submit', (e) => {
          e.preventDefault();
          const inp = wrap.querySelector('input');
          if (!inp.value.trim() || marks[i] !== null) return;
          const ok = ex.answer.map(norm).includes(norm(inp.value));
          inp.classList.add(ok ? 'right' : 'wrong'); inp.disabled = true; wrap.querySelector('button').disabled = true;
          mark(i, ok, box, ex);
        });
        box.appendChild(wrap);
      } else if (ex.type === 'order') {
        const built = document.createElement('div');
        built.className = 'built chips';
        const pool = document.createElement('div');
        pool.className = 'chips';
        const check = document.createElement('button');
        check.type = 'button'; check.className = 'btn-2'; check.textContent = 'Revisar'; check.style.marginTop = '10px'; check.disabled = true;
        const picked = [];
        const words = shuffle(ex.words.slice());
        const draw = () => {
          built.innerHTML = ''; pool.innerHTML = '';
          picked.forEach((w, k) => built.appendChild(chip(w, () => { picked.splice(k, 1); draw(); })));
          const left = words.slice();
          picked.forEach((w) => left.splice(left.indexOf(w), 1));
          left.forEach((w) => pool.appendChild(chip(w, () => { picked.push(w); draw(); })));
          check.disabled = left.length > 0;
        };
        const chip = (w, fn) => { const c = document.createElement('button'); c.type = 'button'; c.className = 'chip'; c.textContent = w; c.addEventListener('click', () => { if (marks[i] === null) fn(); }); return c; };
        check.addEventListener('click', () => {
          const ok = norm(picked.join(' ')) === norm(ex.answer);
          built.classList.add(ok ? 'right' : 'wrong'); check.disabled = true;
          mark(i, ok, box, ex);
        });
        draw();
        box.append(built, pool, check);
      }
    });
  }

  function viewReview() {
    const queue = dueCards();
    let i = 0, flipped = false;
    mount(
      '<section class="in">' +
        '<nav class="crumbs"><a href="#/">Curso</a><span>/</span><span>Repaso</span></nav>' +
        '<h1 class="h-sec">Repaso de <span class="script">tarjetas</span></h1>' +
        '<p class="lead">Toca la tarjeta para voltearla y di qué tan bien la sabías. Las difíciles vuelven pronto; las fáciles, en días.</p>' +
        '<div class="flash-wrap" id="flash"></div>' +
      '</section>'
    );
    const box = app.querySelector('#flash');
    function draw() {
      if (i >= queue.length) {
        const nextDue = Math.min.apply(null, LESSONS.flatMap((l) => Object.values((state.progress[l.id] || {}).cards || {}).map((c) => c.due)).concat([Infinity]));
        box.innerHTML = '<div class="card flash"><span class="front">' + (queue.length ? 'Listo por hoy ✦' : 'No tienes tarjetas pendientes') + '</span>' +
          '<span class="back">' + (queue.length ? 'Repasaste ' + queue.length + ' tarjetas.' : 'Completa los ejercicios de una clase para sumar tarjetas.') +
          (isFinite(nextDue) ? ' Próximo repaso: ' + new Date(nextDue).toLocaleDateString('es-MX', { day: 'numeric', month: 'short' }) + '.' : '') + '</span></div>' +
          '<div class="btn-row" style="margin-top:14px"><a class="btn" href="#/">Volver al curso <span class="arrow">→</span></a></div>';
        return;
      }
      const { card, lesson } = queue[i];
      box.innerHTML =
        '<div class="card flash" id="fc" role="button" tabindex="0" aria-label="Voltear tarjeta">' +
          '<span class="count">' + two(i + 1) + ' / ' + two(queue.length) + '</span>' +
          '<span class="front">' + esc(card.front) + '</span>' +
          (card.prod ? '<span class="muted" style="font-size:13px">¿Cómo lo dices en inglés?</span>' : '') +
          (flipped ? '<span class="back"><b>' + esc(card.back) + '</b>' + esc(card.sub || '') + (card.ex ? '<br><i>“' + esc(card.ex) + '”</i>' : '') + '</span>' : '<span class="muted" style="font-size:13px">Toca para ver la respuesta</span>') +
        '</div>' +
        (flipped
          ? '<div class="rate"><button data-g="0">Otra vez<small>10 min</small></button><button data-g="1">Bien<small>' + BOX_DAYS[Math.min(5, queue[i].s.box + 1)] + ' d</small></button><button data-g="2">Fácil<small>' + BOX_DAYS[Math.min(5, queue[i].s.box + 2)] + ' d</small></button></div>'
          : '') +
        '<p class="muted" style="font-size:13px;margin-top:12px">' + esc(lesson.module.title) + ' · ' + esc(lesson.title) + ' ' + sayBtn(card.say) + '</p>';
      const fc = box.querySelector('#fc');
      const flip = () => { if (!flipped) { flipped = true; draw(); speak(card.say); } };
      fc.addEventListener('click', flip);
      fc.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
      box.querySelectorAll('[data-g]').forEach((b) => b.addEventListener('click', () => {
        rateCard(queue[i], Number(b.dataset.g));
        i += 1; flipped = false; draw();
      }));
    }
    draw();
  }

  function viewAccount() {
    if (state.guest) {
      mount(
        '<section class="grid-2 in"><div>' +
          '<p class="label">Modo invitado</p><h1 class="h-sec">Guarda tu <span class="script">avance</span></h1>' +
          '<p class="lead">Ahora tu progreso vive solo en este navegador. Crea una cuenta y lo subimos para que lo veas en cualquier dispositivo.</p>' +
          '<div class="btn-row"><button class="btn" id="go-reg">Crear cuenta <span class="arrow">→</span></button><button class="btn-2" id="go-in">Ya tengo cuenta</button></div>' +
        '</div></section>'
      );
      const leave = (tab) => { state.guest = false; renderNav(); viewAuth(tab); };
      app.querySelector('#go-reg').addEventListener('click', () => leave('register'));
      app.querySelector('#go-in').addEventListener('click', () => leave('login'));
      return;
    }
    mount(
      '<section class="in">' +
        '<nav class="crumbs"><a href="#/">Curso</a><span>/</span><span>Cuenta</span></nav>' +
        '<h1 class="h-sec">Tu <span class="script">cuenta</span></h1>' +
        '<div class="card" style="max-width:560px">' +
          '<p class="muted" style="margin-top:0">Usuario</p><p class="h-sub">' + esc(state.user.username) + '</p>' +
          '<p class="muted">Si olvidas tu contraseña, usa “Recuperar” con tu código de recuperación.</p>' +
          '<div class="btn-row"><button class="btn" id="out">Cerrar sesión <span class="arrow">→</span></button><button class="link" id="del">Borrar mi cuenta</button></div>' +
        '</div>' +
      '</section>'
    );
    app.querySelector('#out').addEventListener('click', async () => {
      try { await api('/logout', { method: 'POST' }); } catch { /* la sesión se cierra igual */ }
      endSession();
    });
    app.querySelector('#del').addEventListener('click', () => {
      modal(
        '<h2 class="h-sub">Borrar tu cuenta</h2><p class="muted">Se borran tu cuenta y todo tu progreso. No se puede deshacer.</p>' +
        '<form id="df"><label class="field"><span>Escribe tu contraseña para confirmar</span><input type="password" name="password" autocomplete="current-password" required></label>' +
        '<p class="err" id="derr"></p><div class="btn-row"><button class="btn" type="submit">Borrar definitivamente <span class="arrow">→</span></button><button class="btn-2" type="button" data-x>Cancelar</button></div></form>',
        (el, close) => {
          el.querySelector('[data-x]').addEventListener('click', close);
          el.querySelector('#df').addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
              await api('/account', { method: 'DELETE', body: { password: e.target.password.value }, auth: true });
              close(); endSession(); toast('Cuenta borrada.');
            } catch (ex) { el.querySelector('#derr').textContent = ex.message; }
          });
        }
      );
    });
  }

  // ---------- arranque ----------
  window.addEventListener('hashchange', render);
  (async function boot() {
    const s = store.get(KEY_SESSION);
    if (s && s.token) {
      state.token = s.token; state.user = s.user;
      try {
        const data = await api('/progress');
        state.progress = ownProgress(data.progress);
      } catch (e) {
        if (state.token) toast(e.message);
      }
    }
    render();
  })();
})();
