import { site as enSite } from './translations/en/site';
import { legal as enLegal } from './translations/en/legal';
import { appUi as enAppUi } from './translations/en/appUi';

/**
 * Chrome and legal copy were ported wholesale from the previous Soleil
 * site, so English is the shape of record: the other locales are typed
 * against it and will fail the build if a key drifts.
 */
export type SiteCopy = typeof enSite;
export type LegalCopy = typeof enLegal;

/** Strings rendered inside the hand-built app-UI recreations. */
export type AppUiCopy = typeof enAppUi;

export interface NavCopy {
  features: string;
  how: string;
  realSun: string;
  faq: string;
  guides: string;
  support: string;
  menu: string;
  close: string;
  /** Accessible name for the mobile menu dialog. */
  menuLabel: string;
  /** Accessible name for the primary <nav>. */
  primaryLabel: string;
}

export interface HomeCopy {
  hero: {
    /** Art-directed line breaks. Each entry is one rendered line. */
    titleLines: string[];
    body: string;
    /** Handwritten annotation. One per scene, never body copy. */
    note: string;
    imageAlt: string;
    scrollCue: string;
  };
  toolkit: {
    eyebrow: string;
    headline: string;
    prev: string;
    next: string;
    railLabel: string;
    cards: { tag: string; title: string; body: string }[];
  };
  moves: {
    eyebrow: string;
    headline: string;
    steps: { title: string; body: string }[];
  };
  uvNow: {
    eyebrow: string;
    headline: string;
    steps: { label: string; title: string; body: string }[];
    imageAlt: string;
  };
  moments: {
    eyebrow: string;
    headline: string;
    items: string[];
    closer: string;
  };
  why: {
    eyebrow: string;
    headline: string;
    body: string;
    badges: string[];
    note: string;
  };
  realSun: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    /** Five readouts as the sun crosses the day arc. */
    notes: string[];
    tabsLabel: string;
    tabs: { label: string; title: string; body: string }[];
    note: string;
    imageAlt: string;
  };
  faq: {
    eyebrow: string;
    headline: string;
    more: string;
  };
  closing: {
    headline: string;
    body: string;
    note: string;
    privacy: string;
    imageAlt: string;
  };
}

export type Translation = SiteCopy &
  LegalCopy & {
    nav: NavCopy;
    home: HomeCopy;
    appUi: AppUiCopy;
    /** Visible-on-focus skip link at the top of every page. */
    skipLabel: string;
  };
