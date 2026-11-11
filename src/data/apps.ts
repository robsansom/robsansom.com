const base = import.meta.env.BASE_URL;

export type AppStatus = 'available' | 'in-development' | 'coming-soon';

export interface StudioApp {
  slug: string;
  name: string;
  tagline: string;
  /** One or two sentences for the catalogue card and directories. */
  summary: string;
  /** Leave out until confirmed. */
  platforms?: string;
  status: AppStatus;
  icon: string;
  scene: string;
  /** How the catalogue renders `scene`: a full-bleed image, or a bare screen inside a CSS phone frame. */
  sceneKind: 'cover' | 'phone';
  /** Background behind the card visual. */
  tint: string;
  alt: string;
  href: string;
  support: string;
  privacy: string;
  terms: string | null;
}

const page = (slug: string, path = '') => base + 'apps/' + slug + '/' + path;

export const statusLabel: Record<AppStatus, string> = {
  available: 'On the App Store',
  'in-development': 'In development',
  'coming-soon': 'Coming soon',
};

export const apps: StudioApp[] = [
  {
    slug: 'find-later',
    name: 'Find Later',
    tagline: 'Save anything. Find it again.',
    summary: 'A simple home for the articles, videos, recipes and ideas you want to come back to.',
    platforms: 'iPhone & iPad',
    status: 'available',
    icon: 'find-later-icon.png',
    scene: 'find-later-scene.webp',
    sceneKind: 'cover',
    tint: '#08080a',
    alt: 'Find Later’s bookmarks library, with saved places, links and ideas.',
    href: page('find-later'),
    support: page('find-later', 'support/'),
    privacy: page('find-later', 'privacy/'),
    terms: page('find-later', 'terms/'),
  },
  {
    slug: 'soleil',
    name: 'Soleil',
    tagline: 'Make more of your day in the sun.',
    summary: 'Live UV where you are, a protection check tuned to your skin, and sunscreen reminders.',
    platforms: 'iPhone & Apple Watch',
    status: 'available',
    icon: 'soleil-icon.png',
    scene: 'soleil-screen.webp',
    sceneKind: 'phone',
    tint: '#ffe27a',
    alt: 'Soleil’s daily sun and UV forecast.',
    href: page('soleil'),
    support: page('soleil', 'support/'),
    privacy: page('soleil', 'privacy/'),
    terms: page('soleil', 'terms/'),
  },
  {
    slug: 'your-jobs',
    name: 'Your Jobs',
    tagline: 'Find the job. Skip the admin.',
    summary: 'Fresh vacancies from employers’ own careers pages, with applications tracked in one place.',
    platforms: 'iPhone & iPad',
    status: 'in-development',
    icon: 'jobs-icon.png',
    scene: 'jobs-screen.webp',
    sceneKind: 'phone',
    tint: '#ffe36b',
    alt: 'The Your Jobs feed, with roles and filters in one place.',
    href: page('your-jobs'),
    support: page('your-jobs', 'support/'),
    privacy: page('your-jobs', 'privacy/'),
    terms: page('your-jobs', 'terms/'),
  },
  {
    slug: 'mythcraft',
    name: 'MythCraft',
    tagline: 'Craft Greek mythology, one discovery at a time.',
    summary: 'Begin with Chaos and end with a throne: combine elements to build the world of the Greek gods.',
    status: 'coming-soon',
    icon: 'mythcraft-icon.png',
    scene: 'mythcraft-scene.jpg',
    sceneKind: 'cover',
    tint: '#2f5fbf',
    alt: 'Zeus above the temples of Olympus, from MythCraft.',
    href: page('mythcraft'),
    support: page('mythcraft', 'support/'),
    privacy: page('mythcraft', 'privacy/'),
    terms: null,
  },
];
