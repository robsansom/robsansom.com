/**
 * Single source of truth for site-wide constants. Update these here and
 * every CTA, badge and mailto on the site follows.
 */

export const site = {
  /** Apple App Store product URL — every download CTA links here. */
  appStoreUrl: 'https://apps.apple.com/app/soleil-uv-sun-tracker/id6777120580',

  /** App Store ID, for the Safari Smart App Banner. */
  appStoreId: '6777120580',

  /** Address shown on legal pages and support contact CTAs. */
  supportEmail: 'support@getsoleilapp.com',

  /** Marketing display name used in headers, page titles and meta tags. */
  appName: 'Soleil',

  domain: 'https://getsoleilapp.com',
} as const;
