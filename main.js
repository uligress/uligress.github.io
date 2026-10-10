import * as THREE from 'three';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = window.matchMedia('(max-width: 860px)').matches;

/* ---------- Small UI bits ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
const clock = document.getElementById('clock');
const tick = () => {
  clock.textContent = new Intl.DateTimeFormat('es-MX', {
    hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Monterrey',
  }).format(new Date());
};
tick();
setInterval(tick, 20000);

/* ---------- Smooth scroll + reveal animations ---------- */
const { gsap, ScrollTrigger, Lenis } = window;
let lenis = null;

if (gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  window.__revealReady = true;
  document.fonts && document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh());

  if (Lenis && !reduceMotion) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -10, duration: 1.4 });
      else target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  if (reduceMotion) {
    gsap.set('.reveal', { opacity: 1, filter: 'none', y: 0 });
  } else {
    gsap.from('.hero-title .line > span', {
      yPercent: 110, duration: 1.5, stagger: 0.09, ease: 'expo.out', delay: 0.2,
    });
    ScrollTrigger.batch('.reveal', {
      start: 'top 90%',
      onEnter: (els) => gsap.to(els, {
        opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.2, stagger: 0.08, ease: 'power3.out',
      }),
    });
  }
}

/* ---------- WebGL: the amniotic sac ---------- */
const canvas = document.getElementById('gl');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
} catch (err) {
  canvas.style.display = 'none';
}

if (renderer) {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 5;

  const noiseGLSL = /* glsl */`
    vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
    vec4 mod289(vec4 x){return x - floor(x*(1.0/289.0))*289.0;}
    vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314*r;}
    float snoise(vec3 v){
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
  `;

  const uniforms = {
    uTime: { value: 0 },
    uAmp: { value: 0.13 },
    uFreq: { value: 1.1 },
    uDark: { value: 0 },
    uOpacity: { value: 1 },
    uMouse: { value: new THREE.Vector2() },
  };

  // Outer membrane: displaced icosphere with fresnel + soft iridescence
  const sac = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.0, isMobile ? 48 : 96),
    new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      vertexShader: /* glsl */`
        uniform float uTime, uAmp, uFreq;
        uniform vec2 uMouse;
        varying vec3 vNormal, vView;
        varying float vNoise;
        ${noiseGLSL}
        float field(vec3 p){
          vec3 n = normalize(p);
          float a = snoise(n * uFreq + vec3(uTime * 0.18, uTime * 0.12, 0.0));
          float b = snoise(n * uFreq * 2.2 + vec3(0.0, uTime * 0.3, uTime * 0.2)) * 0.18;
          float m = dot(n, normalize(vec3(uMouse, 0.6))) * 0.06;
          return (a + b) * uAmp + m;
        }
        vec3 displace(vec3 p){ return normalize(p) * (length(position) + field(p)); }
        void main(){
          vec3 n = normalize(position);
          vec3 t = normalize(cross(n, abs(n.y) < 0.99 ? vec3(0.0,1.0,0.0) : vec3(1.0,0.0,0.0)));
          vec3 b = normalize(cross(n, t));
          float e = 0.012;
          vec3 p0 = displace(position);
          vec3 p1 = displace(position + t * e);
          vec3 p2 = displace(position + b * e);
          vec3 dn = normalize(cross(p1 - p0, p2 - p0));
          if (dot(dn, n) < 0.0) dn = -dn;
          vNoise = field(position);
          vec4 mv = modelViewMatrix * vec4(p0, 1.0);
          vNormal = normalize(normalMatrix * dn);
          vView = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */`
        uniform float uTime, uDark, uOpacity;
        varying vec3 vNormal, vView;
        varying float vNoise;
        void main(){
          vec3 N = normalize(vNormal);
          float fres = pow(1.0 - max(dot(N, vView), 0.0), 2.2);
          float diff = max(dot(N, normalize(vec3(0.6, 0.8, 0.9))), 0.0);
          vec3 ivory = vec3(0.96, 0.91, 0.88);
          vec3 rose  = vec3(0.91, 0.66, 0.64);
          vec3 base = mix(ivory, rose, smoothstep(-0.25, 0.3, vNoise));
          vec3 irid = 0.5 + 0.5 * cos(6.2831 * (fres * 0.55 + vec3(0.0, 0.33, 0.67)) + uTime * 0.15);
          vec3 light = base * (0.55 + 0.45 * diff) + irid * fres * 0.35 + vec3(1.0) * pow(fres, 3.0) * 0.5;
          vec3 darkCol = vec3(0.08, 0.05, 0.06) + irid * fres * 0.55 + vec3(0.9, 0.22, 0.23) * pow(fres, 1.6) * 0.9;
          vec3 col = mix(light, darkCol, uDark);
          float alpha = mix(0.5, 1.0, smoothstep(0.0, 0.7, fres)) * uOpacity;
          gl_FragColor = vec4(col, alpha);
        }
      `,
    }),
  );
  sac.renderOrder = 2;

  // Inner core: beats at 140 bpm, a fetal heart rate
  const coreUniforms = { uBeat: { value: 0 }, uOpacity: uniforms.uOpacity };
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.22, 12),
    new THREE.ShaderMaterial({
      uniforms: coreUniforms,
      transparent: true,
      vertexShader: /* glsl */`
        varying vec3 vN, vV;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vN = normalize(normalMatrix * normal);
          vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */`
        uniform float uBeat, uOpacity;
        varying vec3 vN, vV;
        void main(){
          float f = pow(1.0 - max(dot(normalize(vN), vV), 0.0), 1.5);
          vec3 col = mix(vec3(0.88, 0.16, 0.2), vec3(1.0, 0.62, 0.55), f) * (0.9 + uBeat * 0.7);
          gl_FragColor = vec4(col, (0.75 + f * 0.25) * uOpacity);
        }
      `,
    }),
  );
  core.renderOrder = 1;

  // Floating particles around the sac
  const COUNT = isMobile ? 160 : 360;
  const pos = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    const r = 1.7 + Math.random() * 1.8;
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
    pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
    pos[i * 3 + 2] = r * Math.cos(ph);
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pMat = new THREE.PointsMaterial({ color: 0x9a8f8a, size: 0.018, transparent: true, opacity: 0.6, depthWrite: false });
  const particles = new THREE.Points(pGeo, pMat);

  const group = new THREE.Group();
  group.add(core, sac, particles);
  scene.add(group);

  // Scroll-driven state: where the sac sits for each section
  const state = { x: isMobile ? 0 : 1.55, y: isMobile ? 0.55 : -0.05, s: isMobile ? 0.78 : 1, dark: 0, op: 1 };
  group.position.set(state.x, state.y, 0);

  const stops = {
    hero:      isMobile ? { x: 0, y: 0.55, s: 0.78, dark: 0, op: 1 }    : { x: 1.55, y: -0.05, s: 1, dark: 0, op: 1 },
    sobre:     isMobile ? { x: 0.9, y: 0.9, s: 0.5, dark: 0, op: 0.45 } : { x: -2.15, y: -0.45, s: 0.7, dark: 0, op: 0.95 },
    proyectos: isMobile ? { x: 0, y: 0.2, s: 0.95, dark: 1, op: 0.35 }  : { x: 2.95, y: -0.55, s: 1.3, dark: 1, op: 0.9 },
    formacion: isMobile ? { x: -0.9, y: 0.8, s: 0.5, dark: 0, op: 0.4 } : { x: -2.15, y: -0.55, s: 0.7, dark: 0, op: 0.95 },
    contacto:  isMobile ? { x: 0, y: 0.6, s: 0.7, dark: 0, op: 0.6 }    : { x: 2.0, y: 0.5, s: 0.8, dark: 0, op: 1 },
  };

  if (gsap && ScrollTrigger) {
    const go = (k) => gsap.to(state, { ...stops[k], duration: 1.6, ease: 'power3.out', overwrite: true });
    ScrollTrigger.create({ trigger: '.hero', start: 'top center', end: 'bottom center', onEnterBack: () => go('hero') });
    ['sobre', 'proyectos', 'formacion', 'contacto'].forEach((id) => {
      ScrollTrigger.create({
        trigger: '#' + id, start: 'top 60%', end: 'bottom 40%',
        onEnter: () => go(id), onEnterBack: () => go(id),
      });
    });
    // Dark page background while the projects section is on screen
    ScrollTrigger.create({
      trigger: '#proyectos', start: 'top 55%', end: 'bottom 45%',
      onToggle: (self) => document.body.classList.toggle('is-dark', self.isActive),
    });
  }

  // Mouse parallax
  const mouse = new THREE.Vector2();
  window.addEventListener('pointermove', (e) => {
    mouse.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
  }, { passive: true });

  let scrollVel = 0;
  let lastY = window.scrollY;

  const clockT = new THREE.Clock();
  const heartbeat = (t) => {
    const ph = (t * (140 / 60)) % 1; // 140 bpm
    return Math.exp(-ph * 14) + 0.55 * Math.exp(-Math.pow((ph - 0.28) * 16, 2)); // lub-dub
  };

  const render = () => {
    const t = clockT.getElapsedTime();
    const y = window.scrollY;
    scrollVel += ((y - lastY) - scrollVel) * 0.1;
    lastY = y;

    uniforms.uTime.value = reduceMotion ? 2.0 : t;
    uniforms.uAmp.value = 0.13 + Math.min(Math.abs(scrollVel) * 0.003, 0.09);
    uniforms.uDark.value = state.dark;
    uniforms.uOpacity.value = state.op;
    uniforms.uMouse.value.lerp(mouse, 0.05);

    const beat = reduceMotion ? 0 : heartbeat(t);
    coreUniforms.uBeat.value = beat;
    core.scale.setScalar(1 + beat * 0.12);

    group.position.x += (state.x - group.position.x) * 0.08;
    group.position.y += (state.y - group.position.y) * 0.08;
    const s = group.scale.x + (state.s - group.scale.x) * 0.08;
    group.scale.setScalar(s);

    if (!reduceMotion) {
      group.rotation.y = t * 0.12 + uniforms.uMouse.value.x * 0.35 + y * 0.0006;
      group.rotation.x = -uniforms.uMouse.value.y * 0.25 + y * 0.0003;
      particles.rotation.y = -t * 0.03;
    }
    pMat.color.set(state.dark > 0.5 ? 0x6b6266 : 0x9a8f8a);

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
