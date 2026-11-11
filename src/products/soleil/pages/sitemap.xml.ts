import type { APIRoute } from 'astro';
import { guides } from '../data/guides';
import { site } from '../config/site';

// Locale homepages + legal pages exist for every locale; guides are
// English-only. New pages must be added here or they will not be
// discoverable.
const locales = ['', 'fr', 'es', 'de', 'ja'];
const localePages = ['', 'support', 'privacy', 'terms'];

export const GET: APIRoute = () => {
  const urls: string[] = [];

  for (const page of localePages) {
    for (const locale of locales) {
      const path = [locale, page].filter(Boolean).join('/');
      urls.push(`${site.domain}/${path}${path ? '/' : ''}`);
    }
  }

  urls.push(`${site.domain}/guides/`);
  for (const guide of guides) urls.push(`${site.domain}/guides/${guide.slug}`);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...new Set(urls)]
  .map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>`)
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
