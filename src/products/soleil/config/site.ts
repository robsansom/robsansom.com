/**
 * Single source of truth for site-wide constants. Update these here and
 * every CTA, badge and mailto on the site follows.
 */

export const site = {
  /** Apple App Store product URL — every download CTA links here. */
  appStoreUrl: 'https://apps.apple.com/app/id6777120580',

  /** App Store ID, for the Safari Smart App Banner. */
  appStoreId: '6777120580',

  /** Address shown on legal pages and support contact CTAs. */
  supportEmail: 'hisunshine@robsansom.com',

  /** Marketing display name used in headers, page titles and meta tags. */
  appName: 'Hi Sunshine!',

  /** The name inside running text, where the "!" is dropped ("Open Hi Sunshine to sync"). */
  appNameInline: 'Hi Sunshine',

  /** Every mailto link: the subject tells the shared inbox which app the email is about. */
  supportMailto: 'mailto:hisunshine@robsansom.com?subject=Hi%20Sunshine%20support',

  domain: 'https://robsansom.com/apps/hi-sunshine',
} as const;
