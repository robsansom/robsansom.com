# Rob Sansom — local prototype

Rob Sansom's app catalogue, planned for robsansom.com. The homepage is an editorial introduction and a responsive grid of app cards (two columns on desktop, one on phones), leading to curated product one-pagers with a shared studio header, app navigation and footer. `CONTENT-MAP.md` records what each overview keeps, consolidates or moves to supporting pages. Nothing has been published or connected to a GitHub repository.

## Run

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4321
```

For the built static site:

```sh
npm run build
npm run check:links
npm run preview -- --host 127.0.0.1 --port 4321
```

## Content and reuse

- `src/data/apps.ts` supplies the homepage, support directory, policy directory, product switcher and product footers. Add an entry and its imagery here when adding an app: `status` (available / in-development / coming-soon) drives the card badge, `platforms` is optional, and `sceneKind` is `cover` for a full-bleed image or `phone` for a bare app screen shown in a CSS phone frame on a `tint` background.
- `src/layouts/Studio.astro` and `src/styles/studio.css` define the catalogue shell. `src/components/product/ProductNav.astro` and `ProductFooter.astro` connect all product, support, legal and guide pages. `/legal/` centralises app-specific privacy, terms and support links; `/privacy/` remains an equivalent entry.
- Find Later's existing Astro components, styles, translations and scripts are copied into `src/products/find-later`. Route wrappers in `src/pages/apps/find-later` expose English, French, Spanish, German and Japanese pages. Its original public files are in `public/apps/find-later`.
- MythCraft and Your Jobs are Astro routes using selected source sections from `src/products/<slug>/*.html`, rendered through `src/layouts/ImportedProduct.astro`. Their full source HTML snapshots remain in adjacent `original` folders. Public product folders contain the original styles, scripts and assets. The overview contains every section of the original page, including the Oracle’s Table demo, Four Books and the Codex. Your Jobs is presented as in development, consistent with the user’s release description.
- Soleil’s existing Astro experience is copied into `src/products/soleil`, with route wrappers in `src/pages/apps/soleil` and public assets in `public/apps/soleil`. English, French, Spanish, German and Japanese home/support/privacy/terms pages are retained, along with ten English guides and the original interactive sections. Language switches from English-only guides return to the selected language’s homepage. An All apps link returns to the catalogue.
- The homepage uses real source assets. Generated concept icons and invented screenshot details were deliberately not substituted for the real apps. The pink Your Jobs card is adapted from its existing hero component.
- Original sibling repositories were not changed. Copies are independent snapshots, not automatic synchronisation.
- `scripts/import-existing.py` records the one-time initial import. It refuses to overwrite an existing import; it is not part of normal development or builds.
- Feather's arrow and Instrument Sans are used with licence files in `public/studio`.

## GitHub Pages build

The output in `dist/` is static. `SITE_URL` sets the origin used for product metadata, and `BASE_PATH` sets the hosting subdirectory. For a project URL, set `BASE_PATH` to the actual repository slug surrounded by slashes; for a custom domain or root user site, use `/`.

Example build configuration (replace the examples when a real host is chosen):

```sh
SITE_URL=https://example.github.io BASE_PATH=/studio/ npm run build
BASE_PATH=/studio/ npm run check:links
```

Both `/` and `/studio-check/` build configurations were checked locally. `.github/workflows/pages.yml` provides a manually triggered build and optional deployment. It reads the origin and base path from the repository’s configured Pages address, installs from the lockfile, builds, checks local links, and packages `dist/`.

When a repository is selected:

1. Add these files to that repository and select **GitHub Actions** in its Pages settings.
2. Run **Build or publish GitHub Pages** with **Publish the built site** unchecked to validate and package an artifact.
3. After the publication checks below are resolved, run it with the publish option checked to deploy.

The workflow has been parsed locally but has not run on GitHub. No remote, domain, or live deployment has been created. There is no automatic publish on push.

## Before publishing

1. Confirm the studio name and destination repository/domain.
2. Replace existing placeholder support addresses in MythCraft (`EMAIL-TBC@example.invalid`) and Your Jobs (`support@example.com`). Verify MythCraft's existing `hello@mythcraft.game` address as well.
3. Review inherited product claims, availability, pricing and App Store destinations against the actual release state. Existing source text is not new verification of those claims.
4. Review each app's existing policies and contact identity. This implementation provides a directory, not newly authored umbrella legal terms. Website-level disclosures remain to be decided for the final hosting configuration.
5. Supply or approve MythCraft terms; no terms document or terms URL was found in the inspected website/native source.
6. Set production metadata and remove prototype `noindex, nofollow` directives only when ready. Review copied product sitemap/canonical metadata and external font loading for the final site.
7. Review the imported media footprint (about 455 MB of public source files, including original format variants) before committing and deploying. No source assets were removed.

## Verification

`design-qa.md` records visual and interaction checks. `npm run check:links` validates local HTML links, anchors, image sources/srcsets and CSS asset references in the built output. It does not certify external URLs, legal text, app functionality, or live App Store availability.
