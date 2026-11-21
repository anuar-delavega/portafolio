// Efectos de la experiencia "Aurora": se activan solo si el usuario no pide movimiento reducido.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const root = document.documentElement;

/* ---------- reveal on scroll + contadores ---------- */
function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / 2000);
    el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 4))));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

if (!reduce && 'IntersectionObserver' in window) {
  root.classList.add('js');
  const io = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );
  document.querySelectorAll('.rv').forEach((el) => io.observe(el));

  const counters = document.querySelectorAll<HTMLElement>('[data-count]');
  counters.forEach((el) => (el.textContent = '0'));
  const io2 = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        countUp(en.target as HTMLElement);
        io2.unobserve(en.target);
      }
    },
    { threshold: 0.3 },
  );
  counters.forEach((el) => io2.observe(el));
}

/* ---------- progreso de scroll + parallax del hero ---------- */
const onScroll = () => {
  const y = window.scrollY || 0;
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  root.style.setProperty('--sy', String(Math.min(y, 900)));
  root.style.setProperty('--sp', String(Math.min(1, y / max)));
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- cursor + partículas ---------- */
const mouse = { x: -9999, y: -9999 };
const canvas = document.querySelector<HTMLCanvasElement>('canvas.fx');

if (!reduce && finePointer) {
  const cur = document.querySelector<HTMLElement>('.cur');
  const dot = document.querySelector<HTMLElement>('.curd');
  let cx = 0, cy = 0, tx = 0, ty = 0;
  window.addEventListener('mousemove', (e) => {
    tx = e.clientX; ty = e.clientY;
    if (cur) cur.style.opacity = '1';
    if (dot) { dot.style.opacity = '1'; dot.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; }
    const hot = (e.target as Element | null)?.closest?.('a,button');
    cur?.classList.toggle('big', !!hot);
    if (canvas) { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; }
  });
  const loop = () => {
    cx += (tx - cx) * 0.16; cy += (ty - cy) * 0.16;
    if (cur) cur.style.transform = `translate(${cx}px,${cy}px)`;
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  /* botones magnéticos */
  document.querySelectorAll<HTMLElement>('[data-mag]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.3}px,${(e.clientY - (r.top + r.height / 2)) * 0.4}px)`;
    });
    el.addEventListener('mouseleave', () => (el.style.transform = ''));
  });

  /* tarjetas con tilt 3D */
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--rx', ((0.5 - y) * 10).toFixed(2) + 'deg');
      el.style.setProperty('--ry', ((x - 0.5) * 12).toFixed(2) + 'deg');
      el.style.setProperty('--gx', x * 100 + '%');
      el.style.setProperty('--gy', y * 100 + '%');
    });
    el.addEventListener('mouseleave', () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
  });

  /* degradado que sigue al cursor en el CTA */
  document.querySelectorAll<HTMLElement>('[data-hue]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--hx', ((e.clientX - r.left) / r.width) * 100 + '%');
      el.style.setProperty('--hy', ((e.clientY - r.top) / r.height) * 100 + '%');
    });
  });
}

if (!reduce && canvas) startParticles(canvas);

function startParticles(cv: HTMLCanvasElement) {
  const ctx = cv.getContext('2d');
  if (!ctx) return;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const css = getComputedStyle(root);
  const cols = ['--c1', '--c2', '--c3'].map((v) => css.getPropertyValue(v).trim());
  type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };
  let W = 0, H = 0, pts: P[] = [];
  const size = () => {
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(110, Math.round((W * H) / 13000));
    pts = Array.from({ length: n }, (_, i) => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.45, vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.8 + 0.6, c: cols[i % 3],
    }));
  };
  size();
  new ResizeObserver(size).observe(cv);

  let visible = true;
  new IntersectionObserver(([en]) => (visible = en.isIntersecting)).observe(cv);

  const LINK = 130, M = 170;
  const loop = () => {
    requestAnimationFrame(loop);
    if (!visible || document.hidden) return;
    ctx.clearRect(0, 0, W, H);
    const { x: mx, y: my } = mouse;
    for (const p of pts) {
      const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy);
      if (d < M && d > 0) { const f = ((M - d) / M) * 0.6; p.vx += (dx / d) * f * 0.12; p.vy += (dy / d) * f * 0.12; }
      p.vx *= 0.985; p.vy *= 0.985;
      if (Math.abs(p.vx) < 0.08) p.vx += (Math.random() - 0.5) * 0.05;
      if (Math.abs(p.vy) < 0.08) p.vy += (Math.random() - 0.5) * 0.05;
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
        if (d2 < LINK * LINK) {
          ctx.globalAlpha = (1 - Math.sqrt(d2) / LINK) * 0.35;
          ctx.strokeStyle = a.c; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const dm = Math.hypot(a.x - mx, a.y - my);
      if (dm < M + 40) {
        ctx.globalAlpha = (1 - dm / (M + 40)) * 0.7; ctx.strokeStyle = '#ffffff';
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mx, my); ctx.stroke();
      }
      ctx.globalAlpha = 0.9; ctx.fillStyle = a.c;
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
  };
  requestAnimationFrame(loop);
}

/* ---------- rol con efecto scramble ---------- */
const roleEl = document.querySelector<HTMLElement>('[data-roles]');
if (roleEl && !reduce) {
  const roles: string[] = JSON.parse(roleEl.dataset.roles || '[]');
  const glyphs = '!<>-_\\/[]{}=+*^?#ABCDEFXYZ01';
  let ri = 0;
  let scr: number | undefined;
  setInterval(() => {
    ri = (ri + 1) % roles.length;
    const target = roles[ri];
    let f = 0;
    const total = 18;
    clearInterval(scr);
    scr = window.setInterval(() => {
      f++;
      const reveal = Math.floor((target.length * f) / total);
      let s = '';
      for (let i = 0; i < target.length; i++) {
        s += i < reveal || target[i] === ' ' ? target[i] : glyphs[Math.floor(Math.random() * glyphs.length)];
      }
      roleEl.textContent = f >= total ? target : s;
      if (f >= total) clearInterval(scr);
    }, 40);
  }, 3200);
}
