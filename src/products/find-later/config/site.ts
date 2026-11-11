/**
 * Single source of truth for site-wide constants.
 *
 * Update these here and every CTA, badge, mailto and credit line on
 * the site updates with them. Keeping marketing-sensitive values in
 * one file avoids hunting through templates when the App Store URL
 * goes live, the support address changes, or pricing moves.
 */

export const site = {
  /**
   * Apple App Store product URL.
   *
   * Every CTA on the site (Hero, Footer, App Store badge, Header
   * download pill) points here.
   */
  appStoreUrl: 'https://apps.apple.com/us/app/find-later/id6753710808',

  /** Address shown on legal pages and support contact CTAs. */
  supportEmail: 'support@getfindlater.com',

  /** Marketing display name used in headers, page titles and meta tags. */
  appName: 'Find Later',
} as const;

export type SiteConfig = typeof site;
