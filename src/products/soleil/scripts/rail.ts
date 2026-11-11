/**
 * Arrow controls + centre-distance drift for scroll-snap rails.
 *
 * The rail itself is native overflow scrolling, so drag, momentum,
 * keyboard and screen readers all work before this file loads. Nothing
 * here is load-bearing.
 */

const reduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initRail(root: ParentNode = document) {
  const rails = root.querySelectorAll<HTMLElement>('[data-rail]');

  rails.forEach((rail) => {
    // Every scene with a rail calls this, and each call sees every rail on
    // the page. Bind once, or one click moves two cards.
    if (rail.dataset.railReady === 'true') return;
    rail.dataset.railReady = 'true';

    const scene = rail.closest('section') ?? document;
    const prev = scene.querySelector<HTMLButtonElement>('[data-rail-prev]');
    const next = scene.querySelector<HTMLButtonElement>('[data-rail-next]');
    const items = [...rail.querySelectorAll<HTMLElement>('[data-rail-item]')];
    if (items.length === 0) return;

    const step = () => {
      const first = items[0];
      const second = items[1];
      return second
        ? second.getBoundingClientRect().left - first.getBoundingClientRect().left
        : first.getBoundingClientRect().width;
    };

    const go = (dir: 1 | -1) =>
      rail.scrollBy({
        left: dir * step(),
        behavior: reduced() ? 'auto' : 'smooth',
      });

    prev?.addEventListener('click', () => go(-1));
    next?.addEventListener('click', () => go(1));

    const syncButtons = () => {
      const max = rail.scrollWidth - rail.clientWidth - 2;
      if (prev) prev.disabled = rail.scrollLeft <= 2;
      if (next) next.disabled = rail.scrollLeft >= max;
    };

    // Cards lift slightly as they reach the middle of the viewport. One
    // rAF per scroll frame, and nothing runs while the rail is idle.
    const drift = () => {
      if (reduced()) return;
      const mid = rail.getBoundingClientRect().left + rail.clientWidth / 2;
      for (const item of items) {
        const box = item.getBoundingClientRect();
        const offset = (box.left + box.width / 2 - mid) / rail.clientWidth;
        item.style.setProperty(
          '--drift',
          `${Math.min(Math.abs(offset), 1) * 18}px`,
        );
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        syncButtons();
        drift();
        ticking = false;
      });
    };

    rail.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
  });
}
