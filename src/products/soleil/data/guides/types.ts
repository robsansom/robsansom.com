/**
 * Structured guide content. Guides are data, not markdown, so every page
 * renders through one template with consistent SEO treatment (Article +
 * FAQPage JSON-LD, breadcrumbs, related links, app integration section).
 */

export type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; html: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'callout'; html: string };

export interface GuideFaq {
  q: string;
  a: string; // plain text (also used in JSON-LD)
}

export interface Guide {
  slug: string;
  /** H1, phrased as the searched question. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Card label on listings. */
  category: string;
  /** Direct answer paragraph(s) rendered first — featured-snippet bait. */
  intro: string[];
  blocks: Block[];
  /** "How Soleil helps" — rendered with screenshot + CTA. */
  soleil: {
    heading: string;
    paragraphs: string[];
    screenshot: { src: string; alt: string };
  };
  faqs: GuideFaq[];
  related: string[];
}
