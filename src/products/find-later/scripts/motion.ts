/**
 * Find Later landing-page motion. No framework. ~2kb gzipped.
 *
 * Handles:
 *  - .reveal                    fade + lift when entering viewport
 *  - .reveal-lines              Dropset-style mask + slide-up per line
 *  - .reveal-eyebrow            small uppercase text fade-in
 *  - .reveal-image              blur + scale-in for hero imagery
 *  - [data-counter]             animated number count-up (e.g. 0 -> 50)
 *  - [data-scrolly]             pinned-device scrollytelling with sticky labels
 *  - [data-pinned-statement]    sticky-pinned anchor moment with staged reveal
 *  - [data-hero-icon]           cursor-driven fan out for the stacked-card icon
 *
 * Respects prefers-reduced-motion.
 */

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function runCounter(el: HTMLElement) {
  const target = Number(el.dataset.counter ?? el.dataset.target ?? '0');
  const duration = Number(el.dataset.duration ?? '1400');
  const suffix = el.dataset.suffix ?? '';
  const start = performance.now();
  const initial = 0;

  function frame(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutExpo(progress);
    const value = Math.round(initial + (target - initial) * eased);
    el.textContent = `${value}${suffix}`;
    if (progress < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function init() {
  document.documentElement.classList.add('js-ready');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animatedSelectors = [
    '.reveal',
    '.reveal-lines',
    '.reveal-eyebrow',
    '.reveal-image',
    '.reveal-line-draw',
  ];

  const animated = document.querySelectorAll<HTMLElement>(animatedSelectors.join(','));

  if (reduced) {
    animated.forEach((el) => el.classList.add('is-visible'));
    document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
      const target = el.dataset.counter ?? el.dataset.target ?? '0';
      const suffix = el.dataset.suffix ?? '';
      el.textContent = `${target}${suffix}`;
    });
  } else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -4% 0px' },
    );
    animated.forEach((el) => io.observe(el));

    // Fallback: any element still hidden after 1.5s gets revealed.
    // Guards against IntersectionObserver edge cases in some renderers.
    window.setTimeout(() => {
      animated.forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          el.classList.add('is-visible');
        }
      });
    }, 1500);

    const counterIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            runCounter(entry.target as HTMLElement);
            counterIO.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.6 },
    );
    document
      .querySelectorAll<HTMLElement>('[data-counter]')
      .forEach((el) => counterIO.observe(el));
  } else {
    animated.forEach((el) => el.classList.add('is-visible'));
  }

  const scrolly = document.querySelector<HTMLElement>('[data-scrolly]');
  if (scrolly) {
    const labels = Array.from(scrolly.querySelectorAll<HTMLElement>('[data-scrolly-label]'));
    const screens = Array.from(scrolly.querySelectorAll<HTMLElement>('[data-scrolly-screen]'));
    const total = Math.max(labels.length, screens.length);

    function update() {
      const rect = scrolly!.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const totalScrollable = scrolly!.offsetHeight - viewportH;
      const progressed = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const ratio = totalScrollable > 0 ? progressed / totalScrollable : 0;

      const active = Math.min(Math.floor(ratio * total), total - 1);

      labels.forEach((label, i) => {
        label.classList.toggle('is-active', i === active);
      });
      screens.forEach((screen, i) => {
        screen.classList.toggle('is-active', i === active);
      });
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  const heroIcon = document.querySelector<HTMLElement>('[data-hero-icon]');
  if (heroIcon && !reduced) {
    heroIcon.addEventListener('mouseenter', () => heroIcon.classList.add('is-fanned'));
    heroIcon.addEventListener('mouseleave', () => heroIcon.classList.remove('is-fanned'));
  }

  // Pointer-tracked 3D tilt + specular glare for glass-card stacks
  // ([data-tilt]). The cursor drives two things per card:
  //   --tilt-x/--tilt-y  3D rotation, lerped each frame for weight
  //   --gx/--gy          glare hotspot, so the reflection tracks the eye
  // Desktop-only: touch devices keep the is-fanned + float treatment.
  const tiltStacks = document.querySelectorAll<HTMLElement>('[data-tilt]');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (tiltStacks.length && !reduced && finePointer) {
    tiltStacks.forEach((stack) => {
      const cards = Array.from(stack.querySelectorAll<HTMLElement>('.pouch-card-tilt'));
      if (!cards.length) return;

      const MAX_TILT_X = 5; // deg
      const MAX_TILT_Y = 7; // deg
      const LERP = 0.12;

      let targetX = 0;
      let targetY = 0;
      let currentX = 0;
      let currentY = 0;
      let rafId = 0;

      const frame = () => {
        currentX += (targetX - currentX) * LERP;
        currentY += (targetY - currentY) * LERP;

        cards.forEach((card) => {
          const depth = Number(card.dataset.tiltDepth ?? '1');
          card.style.setProperty('--tilt-x', `${(-currentY * MAX_TILT_X * depth).toFixed(3)}deg`);
          card.style.setProperty('--tilt-y', `${(currentX * MAX_TILT_Y * depth).toFixed(3)}deg`);
        });

        const settled =
          Math.abs(targetX - currentX) < 0.001 && Math.abs(targetY - currentY) < 0.001;
        rafId = settled ? 0 : requestAnimationFrame(frame);
      };

      const wake = () => {
        if (!rafId) rafId = requestAnimationFrame(frame);
      };

      stack.addEventListener('pointermove', (e) => {
        const rect = stack.getBoundingClientRect();
        targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        targetY = ((e.clientY - rect.top) / rect.height) * 2 - 1;

        cards.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const gx = ((e.clientX - cardRect.left) / cardRect.width) * 100;
          const gy = ((e.clientY - cardRect.top) / cardRect.height) * 100;
          card.style.setProperty('--gx', `${gx.toFixed(1)}%`);
          card.style.setProperty('--gy', `${gy.toFixed(1)}%`);
        });

        wake();
      });

      stack.addEventListener('pointerleave', () => {
        targetX = 0;
        targetY = 0;
        wake();
      });
    });
  }

  const mobileCardStacks = document.querySelectorAll<HTMLElement>(
    '.pouch-cards-stack-wrapper, .collection-cards-stack-wrapper',
  );
  if (mobileCardStacks.length && !reduced && 'IntersectionObserver' in window) {
    const stackIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle('is-fanned', entry.isIntersecting);
        }
      },
      { threshold: 0.55 },
    );
    mobileCardStacks.forEach((stack) => stackIO.observe(stack));
  }

  // Converge headline observer.
  //
  // One-shot, intersection-triggered. When a `.converge-statement`
  // section is ~30% on screen with the headline visibly inside the
  // viewport, we add `is-visible` and the CSS handles the rest (left
  // word slides in from -100vw, right word from +100vw, body
  // materialises a beat later). Separate observer from the global
  // reveal IO because we want a stricter threshold — firing too
  // early would play the dramatic moment before the user can see it.
  const converges = document.querySelectorAll<HTMLElement>('.converge-statement');
  if (converges.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      converges.forEach((el) => el.classList.add('is-visible'));
    } else {
      const convergeIO = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              convergeIO.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.3, rootMargin: '0px 0px -10% 0px' },
      );
      converges.forEach((el) => convergeIO.observe(el));

      // Safety net: any converge section still hidden after 2.5s of
      // being painted gets revealed, mirroring the global reveal IO
      // fallback.
      window.setTimeout(() => {
        converges.forEach((el) => {
          if (!el.classList.contains('is-visible')) {
            el.classList.add('is-visible');
          }
        });
      }, 2500);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export {};
