// Everything here is optional: the page reads and works without it.
(() => {
  // Header: the wordmark takes a paper pill once the page has moved.
  const header = document.querySelector('.hdr');
  const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu is a native <details>; this only adds Escape, closing on
  // navigation and scroll-locking.
  const menu = document.getElementById('site-menu');
  if (menu) {
    const close = () => menu.removeAttribute('open');
    menu.addEventListener('toggle', () => {
      document.documentElement.style.overflow = menu.open ? 'hidden' : '';
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.open) {
        close();
        menu.querySelector('summary')?.focus();
      }
    });
    menu.addEventListener('click', (e) => {
      if (e.target instanceof HTMLAnchorElement) close();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 960 && menu.open) close();
    });
  }

  // Entrances. Only armed when <head> set html.motion-on.
  if (!document.documentElement.classList.contains('motion-on')) return;
  const items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
})();
