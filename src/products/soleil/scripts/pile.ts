/**
 * The Why Soleil chip pile.
 *
 * The chips are real, readable DOM elements laid out in normal flow. If
 * this file never runs — no JS, reduced motion, a slow connection — they
 * stay exactly as the server rendered them and the scene is complete.
 *
 * When it does run, each chip gets a matching physics body and drops in:
 * a few immediately, the rest cascading over ~1.5s, colliding and
 * settling into a loose pile on the floor of the stage.
 *
 * The simulation is deliberately temporary. Matter's sleeping is enabled,
 * and once every body is asleep the loop stops for good and the chips are
 * left parked at their final transforms. Hover lift is plain CSS on an
 * inner span, so it composes with the parked transform without the
 * simulation needing to stay alive to service it.
 *
 * Chips always come to rest reading the right way up. A pill is
 * symmetrical under a half turn, so any chip that settles past vertical
 * can be rotated by 180 degrees without moving a pixel of the pile — the
 * footprint is identical and only the text changes orientation.
 */
import type { Engine, Body } from 'matter-js';

/** Chip metrics, measured once from the flow layout before we go absolute. */
interface Chip {
  el: HTMLElement;
  w: number;
  h: number;
  body: Body;
}

const SETTLE_TIMEOUT = 9000;

export async function initPile() {
  const stage = document.querySelector<HTMLElement>('[data-pile]');
  if (!stage) return;
  if (stage.dataset.pilePending || stage.dataset.pileActive) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const els = [...stage.querySelectorAll<HTMLElement>('[data-badge]')];
  if (els.length === 0) return;

  stage.dataset.pilePending = 'true';

  // Only bother once the scene is close: this is the one place on the
  // site that runs a continuous loop, so it should not run offscreen.
  await new Promise<void>((resolve) => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.disconnect();
          resolve();
        }
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.15 },
    );
    io.observe(stage);
  });

  const Matter = await import('matter-js');
  // matter-js is CJS; depending on interop the namespace may hang off
  // `default`. Normalise before destructuring so a bundler change cannot
  // silently hand us undefined constructors.
  const M = ((Matter as unknown as { default?: typeof Matter }).default ??
    Matter) as typeof Matter;
  const { Engine, Bodies, Composite, Body, Runner, Events } = M;
  if (!Runner || !Engine || !Bodies) return;

  const rect = stage.getBoundingClientRect();
  const width = rect.width;
  // The stage keeps the height its flow layout already needed, so
  // switching to absolute positioning does not move the page.
  const height = rect.height;

  const engine: Engine = Engine.create({
    enableSleeping: true,
    gravity: { x: 0, y: 1.05, scale: 0.001 },
  });

  const WALL = 200;
  const walls = [
    // Floor, then left and right. No ceiling: chips fall in from above it.
    Bodies.rectangle(width / 2, height + WALL / 2, width * 3, WALL, { isStatic: true }),
    Bodies.rectangle(-WALL / 2, height / 2, WALL, height * 3, { isStatic: true }),
    Bodies.rectangle(width + WALL / 2, height / 2, WALL, height * 3, { isStatic: true }),
  ];
  Composite.add(engine.world, walls);

  const chips: Chip[] = els.map((el) => {
    const box = el.getBoundingClientRect();
    const w = box.width;
    const h = box.height;

    // Start above the stage, spread across it, with a little spin.
    const x = w / 2 + Math.random() * Math.max(1, width - w);
    const y = -h - Math.random() * height * 0.8;

    const body = Bodies.rectangle(x, y, w, h, {
      // A pill collides like a pill, not like a brick.
      chamfer: { radius: h / 2 },
      restitution: 0.42,
      friction: 0.32,
      frictionAir: 0.012,
      density: 0.0012,
      sleepThreshold: 40,
    });
    Body.setAngle(body, (Math.random() - 0.5) * 0.36);
    Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.06);

    return { el, w, h, body };
  });

  // Freeze the stage at its measured height, then take the chips out of
  // flow. Done in one pass so the page never reflows mid-drop.
  stage.style.height = `${height}px`;
  for (const chip of chips) {
    chip.el.style.width = `${chip.w}px`;
    chip.el.style.height = `${chip.h}px`;
  }

  // Park each chip at its start position above the stage, then reveal.
  // Without this the chips would flash stacked at the origin for a frame.
  const place = (el: HTMLElement, x: number, y: number, angle: number) => {
    el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${angle}rad)`;
  };

  const draw = () => {
    for (const { el, body, w, h } of chips) {
      place(el, body.position.x - w / 2, body.position.y - h / 2, body.angle);
    }
  };

  /** The same pose, turned to whichever half-turn reads upright. */
  const drawUpright = () => {
    for (const { el, body, w, h } of chips) {
      let angle = body.angle % (Math.PI * 2);
      if (angle > Math.PI / 2) angle -= Math.PI;
      if (angle < -Math.PI / 2) angle += Math.PI;
      if (angle > Math.PI / 2) angle -= Math.PI;
      if (angle < -Math.PI / 2) angle += Math.PI;
      place(el, body.position.x - w / 2, body.position.y - h / 2, angle);
    }
  };

  draw();
  stage.dataset.pileActive = 'true';

  /* Cascade ---------------------------------------------------------- */

  // Three land straight away so the scene has weight immediately; the
  // rest arrive over the next 1.5s.
  const IMMEDIATE = 3;
  const CASCADE_MS = 1500;

  chips.slice(0, IMMEDIATE).forEach((chip) => Composite.add(engine.world, chip.body));

  const rest = chips.slice(IMMEDIATE);
  rest.forEach((chip, i) => {
    const at = ((i + 1) / rest.length) * CASCADE_MS;
    window.setTimeout(() => Composite.add(engine.world, chip.body), at);
  });

  /* Run -------------------------------------------------------------- */

  const runner = Runner.create();
  Events.on(engine, 'afterUpdate', draw);
  Runner.run(runner, engine);

  /* Stop once it has come to rest ------------------------------------ */

  const stop = () => {
    Runner.stop(runner);
    Events.off(engine, 'afterUpdate', draw);
    // Mark settled first so the transition is in place, then write the
    // upright pose — the few chips that need it turn over gently.
    stage.dataset.pileSettled = 'true';
    requestAnimationFrame(drawUpright);
    Engine.clear(engine);
  };

  const started = performance.now();
  const check = () => {
    const all = chips.every(
      (chip) => chip.body.isSleeping || !Composite.get(engine.world, chip.body.id, 'body'),
    );
    const landed = Composite.allBodies(engine.world).length === chips.length + walls.length;
    if (landed && all) {
      stop();
      return;
    }
    // A backstop, so a chip wedged in a corner cannot keep the loop alive.
    if (performance.now() - started > SETTLE_TIMEOUT) {
      stop();
      return;
    }
    window.setTimeout(check, 250);
  };
  window.setTimeout(check, CASCADE_MS + 500);
}
