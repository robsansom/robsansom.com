/**
 * Touch devices have no hover, so the phrase nearest the middle of the
 * viewport becomes the active one as you scroll. Pointer devices keep
 * the pure-CSS hover and never run this.
 */
export function initMoments() {
  const list = document.querySelector<HTMLElement>('[data-moments]');
  if (!list) return;

  const hasHover = window.matchMedia('(hover: hover)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (hasHover || reduced) return;

  const items = [...list.querySelectorAll<HTMLElement>('[data-moment]')];
  if (items.length === 0) return;

  // A narrow band across the middle of the screen: whichever phrase is
  // inside it is the active one.
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle('is-active', entry.isIntersecting);
      }
    },
    { rootMargin: '-46% 0px -46% 0px' },
  );

  items.forEach((item) => observer.observe(item));
}
