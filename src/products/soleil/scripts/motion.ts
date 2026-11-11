/**
 * Entrance motion and the one scroll-driven sequence.
 *
 * Rules this file keeps to:
 *  - Nothing is hidden unless JS is running and motion is welcome
 *    (`html.motion-on`, set inline in the <head>).
 *  - Observers disconnect once an element has played.
 *  - GSAP is only fetched for the pinned sequence, only on wide screens.
 */

const motionOn = document.documentElement.classList.contains('motion-on');

/* Word-by-word headline entrance ------------------------------------- */

function splitWords(root: ParentNode) {
  for (const target of root.querySelectorAll<HTMLElement>('[data-split]')) {
    const lines = target.children.length
      ? [...target.children]
      : [target];

    let index = 0;
    for (const line of lines) {
      const words = (line.textContent ?? '').split(/\s+/).filter(Boolean);
      line.textContent = '';
      for (const word of words) {
        const outer = document.createElement('span');
        outer.className = 'word';
        const inner = document.createElement('span');
        inner.className = 'word__i';
        inner.textContent = word;
        inner.style.setProperty('--delay', `${index * 45}ms`);
        outer.append(inner);
        line.append(outer, document.createTextNode(' '));
        index += 1;
      }
    }
    target.dataset.splitReady = 'true';
  }
}

/* Staggered pop inside the app surfaces -------------------------------- */

/**
 * Marks every part of a recreated app surface so it can arrive in
 * sequence. Done here rather than in the markup so the running order is
 * true document order across nested groups (rows inside a list, tiles
 * inside a grid) without hand-numbering seven components.
 *
 * Safe to run before the reveal fires: the surface itself is already
 * hidden by `[data-reveal]`, so nothing flashes.
 */
function markAppSurfaces() {
  // A card's own ground stays put and what is printed on it arrives: its
  // stickers, figures and rows, then anything standing on the paper
  // between cards (a section sticker).
  const PARTS = [
    '.ui-card > *:not(:has(li))',
    '.ui-card li',
    '.ui-screen > :not(.ui-card):not(:has(.ui-card))',
  ].join(', ');

  for (const surface of document.querySelectorAll<HTMLElement>('.app-ui')) {
    const parts = surface.querySelectorAll<HTMLElement>(PARTS);
    parts.forEach((part, index) => {
      part.dataset.pop = '';
      part.style.setProperty('--pop', String(90 + index * 70));
    });
  }
}

/* Reveal on scroll ---------------------------------------------------- */

function initReveals() {
  const targets = [
    ...document.querySelectorAll<HTMLElement>('[data-reveal]'),
    ...document.querySelectorAll<HTMLElement>('[data-split]'),
  ];
  if (targets.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        // Siblings in the same group land one after another.
        const group = el.parentElement?.querySelectorAll('[data-reveal]');
        if (group && group.length > 1) {
          const index = [...group].indexOf(el);
          el.style.setProperty('--delay', `${Math.max(index, 0) * 70}ms`);
        }
        el.classList.add('is-in');
        observer.unobserve(el);
      }
    },
    // The horizontal margin covers cards peeking in from the edge of a
    // rail, so a half-visible card is never a blank panel.
    { rootMargin: '0px 30% -8% 30%', threshold: 0.12 },
  );

  targets.forEach((target) => observer.observe(target));
}

/* The UV now sequence ------------------------------------------------- */

async function initSequence() {
  const section = document.querySelector<HTMLElement>('[data-sequence]');
  if (!section) return;
  if (!window.matchMedia('(min-width: 1000px)').matches) return;

  const steps = [...section.querySelectorAll<HTMLElement>('[data-step]')];
  const dots = [...section.querySelectorAll<HTMLElement>('[data-dot]')];
  const surfaces = [...section.querySelectorAll<HTMLElement>('[data-obj]')];
  const object = section.querySelector<HTMLElement>('[data-sequence-object]');
  if (steps.length === 0 || !object) return;

  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);

  steps[0].classList.add('is-on');
  surfaces[0]?.classList.add('is-on');

  const show = (index: number) => {
    steps.forEach((step, i) => step.classList.toggle('is-on', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('is-on', i === index));
    // The app surface changes with the state, so the object is never a
    // static picture being pushed around.
    surfaces.forEach((surface, i) => surface.classList.toggle('is-on', i === index));
  };

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      onUpdate: (self) => {
        const index = Math.min(
          steps.length - 1,
          Math.floor(self.progress * steps.length),
        );
        show(index);
      },
    },
  });

  // The object starts large and tilted and settles smaller and square as
  // the states advance, so the scene resolves rather than just moving.
  timeline
    .fromTo(
      object,
      { scale: 1.22, rotate: -5, yPercent: 6 },
      { scale: 1.1, rotate: -3, yPercent: 2, ease: 'none' },
    )
    .to(object, { scale: 1, rotate: 1.5, yPercent: 0, ease: 'none' })
    .to(object, { scale: 0.94, rotate: 0, ease: 'none' });
}

/* Boot ---------------------------------------------------------------- */

if (motionOn) {
  splitWords(document);
  markAppSurfaces();
  initReveals();
  void initSequence();
}
