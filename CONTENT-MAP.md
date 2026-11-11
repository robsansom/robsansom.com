# Product-page content and route decisions

This replaces the earlier wholesale website import. The studio catalogue leads to one edited overview per app. Product overviews retain each source’s visual identity and selected original components. A common studio header, product navigation and footer connect every overview, support page, policy and guide.

Revised 5 November 2026: the earlier edit cut too much (Your Jobs 12 → 5 sections, MythCraft lost its Books and Codex, Soleil and Find Later lost their signature scenes). Each overview now carries its original site's full story; only website-specific chrome (headers, footers) is replaced by the shared studio navigation and footer.

| App | Overview contains (in original order) | Adapted for the studio | Supporting pages |
| --- | --- | --- | --- |
| Find Later | Hero; Quick Save, Library and Collections showcases; iPad showcase with the scroll-driven dark → light theme change; privacy headline; feature bento; Siri/Spotlight/Shortcuts | Adds three practical FAQs from the support page and the original footer's “Save it. Close the tab.” closing, both theme-aware. | Support, privacy, terms in five languages. |
| Soleil | Hero; toolkit; four moves; pinned “UV answer in one look” story; every kind of sunny day; “Useful, and yours” with the physics badge pile; Real Sun; FAQ; closing | Nothing removed. | Support, privacy, terms in five languages; ten English guides. |
| Your Jobs | Hero; straight from the source (employer logo marquee); fresh roles; Assist; saved answers and writing help; tracker; alerts; after hours; privacy; Free/Pro; FAQ; closing | Store badges replaced by an “In development” sticker, as the app is not yet released. Entrance animations restored. | Support, privacy, terms. |
| MythCraft | Hero; how it plays; Oracle’s Table demo; Four Books; the Codex; promises; Olympus awaits | Language picker moved into the shared nav. Books grid fixed to 4 / 2 / 1 columns to avoid an orphaned card. | Support and privacy. No terms document was found. |

## Routes and navigation

- `/`: catalogue of all apps.
- `/apps/<slug>/`: edited, scrolling product overview.
- `/apps/<slug>/support/`: operational help, restore/cancel/refund questions and app contact details.
- `/apps/<slug>/privacy/`: the complete existing app-specific privacy policy.
- `/apps/<slug>/terms/`: the complete existing terms document, where supplied.
- `/legal/`: shared directory linking each app’s policies and support. `/privacy/` remains an equivalent entry for existing links.
- `/apps/soleil/guides/`: optional reading; every article uses the same studio/product navigation. Switching language from an English-only guide returns to that language’s product overview.
- The common app switcher and footer link directly between apps. External links are reserved for App Store downloads, email and references.

## Policies: consolidation without changing their substance

The policy directory centralises discovery. Full legal text stays per app because the sources describe materially different data and permissions. No new umbrella contract has been substituted. The shared navigation keeps privacy, terms and support available from every product page. Marketing repetition can be shortened; policy clauses and existing dates have been retained.

Find Later and Soleil have source contacts. Your Jobs still contains `support@example.com`; MythCraft contains `EMAIL-TBC@example.invalid` and an unverified old marketing address. These are outstanding author details, not working support channels. MythCraft terms remain visibly marked as not yet supplied in the directory; no fabricated contract or empty Terms link is presented.

## Publication review still needed

- Confirm the working studio identity, final host/domain, policy controller/contact identity and the two missing support addresses.
- Supply/approve MythCraft terms, or make an explicit distribution-licence choice.
- Check inherited product capabilities, Free/Pro boundaries, prices and availability against release state; this edit is grounded in supplied source content, not a current release audit.
- Review inherited Soleil guides separately from this content/layout edit. Existing claims were preserved, not medically verified.
- Apply production metadata/indexing and host-specific website disclosures when the actual hosting configuration is selected.

## Source preservation

Original sibling repositories are unchanged. Full static source documents are retained in `src/products/your-jobs/original` and `src/products/mythcraft/original`. Curated content is in adjacent HTML fragments rendered through `ImportedProduct.astro`; the public folders now supply assets and scripts, rather than separate complete websites. Find Later and Soleil use their original Astro components within the common site navigation.
