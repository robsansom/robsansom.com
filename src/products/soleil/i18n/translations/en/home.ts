import type { HomeCopy, NavCopy } from '../../types';

export const nav: NavCopy = {
  features: 'Features',
  how: 'How it works',
  realSun: 'Real Sun',
  faq: 'Questions',
  guides: 'Sun guides',
  support: 'Support',
  menu: 'Menu',
  close: 'Close',
  menuLabel: 'Site menu',
  primaryLabel: 'Primary',
};

export const skipLabel = 'Skip to content';

export const home: HomeCopy = {
  hero: {
    titleLines: ['The shape of', 'your day in the sun.'],
    body: 'Live UV where you are, a protection check tuned to your skin, and sunscreen reminders that keep up with the day.',
    note: 'For iPhone & Apple Watch',
    imageAlt:
      'A woman applying sunscreen on a bright beach, the sea behind her',
    scrollCue: 'Scroll',
  },

  toolkit: {
    eyebrow: 'The toolkit',
    headline: 'Six things Soleil does well',
    prev: 'Previous card',
    next: 'Next card',
    railLabel: 'Soleil features',
    cards: [
      {
        tag: 'Now',
        title: 'Live UV',
        body: 'The index where you are, its category and today’s peak — with the source and how fresh the reading is shown beside it.',
      },
      {
        tag: 'Personal',
        title: 'Protection check',
        body: 'Your skin type, SPF, clothing and the current conditions become one clear thing to do next.',
      },
      {
        tag: 'Reminders',
        title: 'Sunscreen timing',
        body: 'Two hours at most, and sooner after swimming, sweating or towel-drying. Reapplying never resets your time outside.',
      },
      {
        tag: 'Outside',
        title: 'Sun timer',
        body: 'Start an outing and Soleil keeps elapsed time, each person’s cover and their reminders together. Daily Glow adds an optional guided routine.',
      },
      {
        tag: 'Your people',
        title: 'Family',
        body: 'Profiles for everyone you look after, each with their own skin type and their own reapply reminders.',
      },
      {
        tag: 'Apple Watch',
        title: 'Real Sun',
        body: 'Time in Daylight from your Watch, drawn against the day’s UV curve.',
      },
    ],
  },

  moves: {
    eyebrow: 'How it works',
    headline: 'A sunnier day in four moves',
    steps: [
      {
        title: 'Check the sky',
        body: 'See the live UV index, its category and when today peaks.',
      },
      {
        title: 'Choose your cover',
        body: 'Set skin type, SPF, clothing and shade. The protection check adjusts.',
      },
      {
        title: 'Start the day',
        body: 'Start the Sun timer for whoever is outside and keep sunscreen timing organised.',
      },
      {
        title: 'See your Real Sun',
        body: 'Look back at when your daylight actually happened.',
      },
    ],
  },

  uvNow: {
    eyebrow: 'UV now',
    headline: 'The UV answer, in one look',
    steps: [
      {
        label: 'One card',
        title: 'Open Soleil and the sky answers first.',
        body: 'No dashboard to decode. Your Day opens on the live UV index for where you are.',
      },
      {
        label: 'The reading',
        title: 'The index, its category, and how fresh it is.',
        body: 'UV and conditions come from Apple WeatherKit, with the source and time of the reading shown.',
      },
      {
        label: 'The day’s shape',
        title: 'Today’s peak, cloud cover, humidity.',
        body: 'The hourly curve shows when the strong part of the day arrives — before you go out in it.',
      },
      {
        label: 'Your check',
        title: 'What to do now, not how long you may stay.',
        body: 'Your skin type and SPF turn the reading into a timely protection check. Soleil never presents time as permission.',
      },
    ],
    imageAlt: 'Soleil’s Your Day screen on iPhone: live UV, today’s peak and the conditions behind it',
  },

  moments: {
    eyebrow: 'Every kind of day',
    headline: 'Made for every kind of sunny day',
    items: [
      'School runs',
      'Beach days',
      'Garden afternoons',
      'City walks',
      'Sport outside',
      'Family holidays',
      'Sensitive skin',
      'Cloudy-but-bright days',
      'Golden hour',
    ],
    closer: 'and the everyday bits between',
  },

  why: {
    eyebrow: 'Why Soleil',
    headline: 'Useful, and yours',
    body: 'Everything Soleil learns about your sun stays yours: on your iPhone, and in your own private iCloud if you sync. No account to make, no analytics, no advertising, no cross-app tracking.',
    badges: [
      'Live local UV',
      'Private by default',
      'No account',
      'Family-ready',
      'Apple Watch',
      'Daily Glow routine',
      'Private iCloud sync',
      'Widgets',
      'Live Activity',
      'Peak UV alerts',
      'Sunscreen timing',
      'Cloud & humidity',
      'Skin type scan',
      'History & trends',
    ],
    note: 'Wellness guidance, not medical advice',
  },

  realSun: {
    eyebrow: 'Real Sun',
    headline: 'Forecasts tell you what might happen.',
    headlineAccent: 'Real Sun shows the daylight you actually had.',
    /** Read out as the sun crosses the arc, morning to golden hour. */
    notes: [
      'Gentle morning light.',
      'Climbing fast. UV rises towards midday.',
      'Peak sun. Protection is recommended.',
      'Softening through the afternoon.',
      'Golden hour. The sun is low and soft.',
    ],
    tabsLabel: 'Times of day',
    tabs: [
      {
        label: 'Morning',
        title: 'Gentle light, low index',
        body: 'Daylight early in the day lands while UV is still low.',
      },
      {
        label: 'Peak',
        title: 'The strongest hours',
        body: 'Around midday the index reaches today’s high. Soleil shows how much of your daylight happened here.',
      },
      {
        label: 'Evening',
        title: 'Softening again',
        body: 'Late daylight sits on the falling side of the curve.',
      },
    ],
    note: 'Real Sun reads Apple Watch Time in Daylight with your permission. Soleil never writes to Health, and daylight is never presented as an allowance.',
    imageAlt: 'The Soleil Real Sun chart: time in daylight drawn against the day’s UV curve',
  },

  faq: {
    eyebrow: 'Questions',
    headline: 'Common questions',
    more: 'Read all the sun guides',
  },

  closing: {
    headline: 'Take Soleil with you.',
    body: 'Live UV, a protection check for your skin, and reminders that keep up with the day.',
    note: 'iPhone & Apple Watch',
    privacy: 'No account. No tracking. Your history stays on your devices and in your own iCloud.',
    imageAlt: 'The Soleil app icon: a golden sun on a blue sky',
  },
};
