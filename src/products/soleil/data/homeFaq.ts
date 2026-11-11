/**
 * Homepage FAQ (English only — each sun question links to its full
 * SEO guide). Also serialised into FAQPage JSON-LD on the home page.
 * Product answers must track app.md: protection-first, no time-as-
 * permission, no vitamin D estimates, weekly/yearly/lifetime pricing.
 */

export interface HomeFaq {
  q: string;
  a: string;
  /** Slug of the guide behind the "Learn more" link, if any. */
  guide?: string;
}

export const homeFaqs: HomeFaq[] = [
  {
    q: 'How long can I stay in the sun without burning?',
    a: 'It depends on the live UV index and your Fitzpatrick skin type: roughly 15 minutes for very fair skin at UV 6, over an hour for deeper tones. Soleil shows the live UV and turns it into a timely protection check rather than a countdown.',
    guide: 'how-long-can-you-stay-in-the-sun',
  },
  {
    q: 'What UV index is safe?',
    a: 'Below UV 3 is low risk for most people. From UV 3 upwards, the WHO recommends protection: shade, clothing and sunscreen. Soleil tells you plainly when your local UV crosses that line.',
    guide: 'what-uv-index-is-safe',
  },
  {
    q: 'What’s the best UV index for tanning?',
    a: 'Colour develops from about UV 3, and a moderate index of 3–5 lets skin respond gradually with lower burn risk. No UV tan is risk-free; pacing and never burning are what matter.',
    guide: 'best-uv-index-for-tanning',
  },
  {
    q: 'How often should I reapply sunscreen?',
    a: 'At least every two hours, and immediately after swimming, heavy sweating or towel-drying. Soleil schedules reapply reminders per person, sooner when you log water or towelling. Reapplying never resets your time outside.',
    guide: 'how-often-reapply-sunscreen',
  },
  {
    q: 'How much sun do I need for vitamin D?',
    a: 'In summer, about 10–30 minutes of midday sun on forearms a few times a week for lighter skin; longer for deeper tones. Soleil deliberately doesn’t turn sunlight into vitamin D numbers; it records your real time outside instead.',
    guide: 'how-much-sun-for-vitamin-d',
  },
  {
    q: 'Can I tan or burn through clouds?',
    a: 'Yes. Up to 90% of UV passes through light cloud, and broken cloud can even amplify it. Check the live index, not the sky; Soleil shows both side by side.',
    guide: 'can-you-tan-through-clouds',
  },
  {
    q: 'What’s my Fitzpatrick skin type?',
    a: 'One of six types describing how your skin burns and tans, from Type I (always burns) to VI (deeply pigmented). Soleil sets yours with a short survey, or the optional AI scan.',
    guide: 'fitzpatrick-skin-type',
  },
  {
    q: 'What UV index is safe for kids?',
    a: 'Protect children from UV 3 upwards, and keep babies under 6 months out of direct sun entirely. Soleil gives each family profile its own skin type and reapply reminders.',
    guide: 'uv-index-for-kids',
  },
  {
    q: 'What does SPF actually mean?',
    a: 'A lab-measured multiplier of how long skin takes to redden under UVB. SPF 30 filters about 96.7% of UVB, at a full application thickness almost nobody achieves. Soleil treats SPF conservatively.',
    guide: 'what-does-spf-mean',
  },
  {
    q: 'What is Apple Watch Time in Daylight?',
    a: 'A watchOS feature that estimates your daily minutes in bright outdoor light. Soleil’s Real Sun reads it (with your permission) and draws it against the day’s UV curve, so you can see the sun day you actually had.',
    guide: 'apple-watch-time-in-daylight',
  },
  {
    q: 'Is Soleil free?',
    a: 'Free covers today: live UV and today’s conditions, the Sun timer, your skin profile (including an AI skin scan) and recent history. Soleil Pro adds Daily Glow setup, full family history and widgets, full trends and AI skin re-scans: $2.49/week, $29.99/year, or $79.99 once.',
  },
  {
    q: 'Does Soleil track me or need an account?',
    a: 'No account, no analytics, no third-party SDKs. Your skin profile, sessions, family profiles and history stay on your devices, synced only through your own private iCloud if you use it. Location is used only to fetch local UV from Apple WeatherKit.',
  },
];
