/**
 * The Real Sun day arc.
 *
 * Upgrades the three labelled blocks into a tab set, and flies the sun
 * along the day's UV arc — clock, note and daylight bars all following its
 * position. Without this file the blocks stack, the sun sits at the peak
 * and the scene still reads, which is why the tab strip ships hidden.
 */

/** Where each control sits along the arc: 0 = dawn, 1 = dusk. */
const STOPS = [0.2, 0.5, 0.82];

/** The illustrated day runs 06:00 to 20:00. */
const DAY_START = 6 * 60;
const DAY_MINUTES = 14 * 60;

/** Which note is showing, by position along the arc. */
const NOTE_AT = [0, 0.3, 0.45, 0.66, 0.86];

const ease = (p: number) => (p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2);

export function initDayArc() {
  const scene = document.querySelector<HTMLElement>('[data-realsun]');
  if (!scene) return;

  const curve = scene.querySelector<SVGPathElement>('[data-curve]');
  const sun = scene.querySelector<SVGGElement>('[data-sun]');
  const clock = scene.querySelector<HTMLElement>('[data-clock]');
  const note = scene.querySelector<HTMLElement>('[data-note]');
  const travelled = scene.querySelector<SVGRectElement>('[data-travelled]');
  const tablist = scene.querySelector<HTMLElement>('[data-tabs]');
  const tabs = [...scene.querySelectorAll<HTMLButtonElement>('[data-tab]')];
  const panels = [...scene.querySelectorAll<HTMLElement>('[data-panel]')];

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const notes: string[] = JSON.parse(
    document.getElementById('rs-notes')?.textContent ?? '[]',
  );

  let current = STOPS[1];
  let frame = 0;

  const place = (t: number) => {
    current = t;

    if (curve && sun) {
      const { x, y } = curve.getPointAtLength(curve.getTotalLength() * t);
      sun.setAttribute('transform', `translate(${x} ${y})`);
    }

    if (clock) {
      const minutes = DAY_START + t * DAY_MINUTES;
      const hh = String(Math.floor(minutes / 60)).padStart(2, '0');
      const mm = String(Math.floor(minutes % 60)).padStart(2, '0');
      clock.textContent = `${hh}:${mm}`;
    }

    if (note && notes.length) {
      let text = notes[0];
      NOTE_AT.forEach((at, i) => {
        if (t >= at && notes[i]) text = notes[i];
      });
      if (note.textContent !== text) note.textContent = text;
    }

    // Daylight is only shown as far as the sun has travelled. Purely
    // positional, so it reads the same going forwards or back. With
    // motion reduced the whole day stays visible instead.
    if (travelled && curve) {
      const { x } = curve.getPointAtLength(curve.getTotalLength() * t);
      travelled.setAttribute('width', reduced ? '1200' : String(x));
    }
  };

  const glideTo = (t: number, duration = 900) => {
    cancelAnimationFrame(frame);
    if (reduced) {
      place(t);
      return;
    }
    const from = current;
    const distance = t - from;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      place(from + distance * ease(p));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
  };

  /* Tabs ------------------------------------------------------------- */

  let selected = 1;

  const select = (index: number, focus = false, move = true) => {
    selected = index;
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
      if (panels[i]) panels[i].hidden = !on;
    });
    scene.dataset.zone = String(index);
    if (move) glideTo(STOPS[index] ?? 0.5);
    if (focus) tabs[index]?.focus();
  };

  if (tablist && tabs.length > 0 && tabs.length === panels.length) {
    tablist.hidden = false;
    panels.forEach((panel) => panel.setAttribute('role', 'tabpanel'));

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(i));
      tab.addEventListener('keydown', (event) => {
        const keys: Record<string, number> = {
          ArrowRight: i + 1,
          ArrowLeft: i - 1,
          Home: 0,
          End: tabs.length - 1,
        };
        const target = keys[event.key];
        if (target === undefined) return;
        event.preventDefault();
        select((target + tabs.length) % tabs.length, true);
      });
    });

    select(1, false, false);
  }

  /* The one-off sunrise ---------------------------------------------- */

  if (reduced) {
    place(STOPS[selected]);
    return;
  }

  place(0);

  let played = false;
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || played) continue;
        played = true;
        observer.disconnect();
        // Dawn up to the selected part of the day, unhurried.
        glideTo(STOPS[selected], 2600);
      }
    },
    { threshold: 0.3 },
  );
  observer.observe(scene);
}
