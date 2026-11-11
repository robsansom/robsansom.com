# Studio prototype QA

final result: passed for the revised local journeys below; publication gaps remain

Scope: local catalogue prototype and the tested transitions into reused app pages. This is not publication approval, a legal review, or a claim that every existing app page was audited.


## Current correction: curated product pages, 29 October 2026

The earlier import pass did not satisfy the requested editorial consolidation. `CONTENT-MAP.md` records the corrected content decisions. Historical screenshots and earlier link counts below describe that import, not the revised product pages.

- All four products now use common studio/product navigation, sibling-app switching and a common support/legal footer. Find Later and Soleil retain selected source Astro components; MythCraft and Your Jobs render curated source sections through an Astro layout rather than serving complete standalone HTML sites.
- Find Later adds the original library screenshot beside its retained headline, a single feature grid, system integrations, selected practical FAQs and a closing download action. Soleil removes repeated UV/lifestyle/process scenes while retaining its toolkit, privacy explanation, Real Sun and guide access. Your Jobs retains its core apply/track/pricing/FAQ story. MythCraft retains its original artwork and playable demo while removing roadmap and Codex-marquee sections.
- Browser flow tested: catalogue → Your Jobs → Terms → common app switcher → MythCraft → Chaos + Earth → Gaia unlock → clear table → sibling Find Later → French → Privacy → sibling Soleil → Morning tab → shared legal directory → Your Jobs Support → Overview.
- Titles/content and route destinations were checked in the browser. Terms render their full source text and original date. French product navigation preserves the locale into Privacy. The legal directory identifies the absent MythCraft terms without a broken link.
- Desktop evidence: `/tmp/studio-your-jobs-revised.png` and `/tmp/studio-find-later-revised-desktop.png` at 1280 × 720. Phone evidence: `/tmp/studio-soleil-revised-mobile.png` and `/tmp/studio-legal-revised-mobile.png` at 390 × 844. Desktop hero, shared navigation, mobile hero, and legal directory were visually inspected; Find Later and Your Jobs phone document/viewport widths both measured 390. Soleil and MythCraft also measured 390. No relevant console errors or warnings appeared during the tested journeys.
- Fixed low contrast on Find Later’s language selector after moving it into the shared light header. The final library visual uses the original screenshot in a CSS frame; the earlier presentation image included too much baked-in background at small size.
- Production build: 63 Astro routes. Root link check: 1,948 references across 70 HTML/CSS files. Subdirectory check: 1,928 references across 70 HTML/CSS files at `/studio-check/`; passed. Root build restored for the preview.
- Not verified: live App Store availability/prices, every locale visually, every retained scene, physical devices, screen-reader behaviour, or production deployment.
- Publication gaps: placeholder source support contacts for Your Jobs/MythCraft, absent MythCraft terms, final identity/domain and policy review. Local QA does not certify those details.

## Historical source and comparison evidence

- Source visual truth: `design/selected-homepage.png` (second displayed option), 1122 × 1402 pixels.
- Desktop implementation: `design/qa/home-desktop.png`, 1122 × 1449 pixels, captured at a 1122 × 1402 CSS viewport as a full-page screenshot. One image pixel per CSS pixel. Compared at equal width without stretching the longer page.
- Mobile implementation: `design/qa/home-mobile.png`, 390 × 1910 pixels, captured at a 390 × 844 CSS viewport. DOM measurements confirmed both viewport and document scroll width are 390.
- State: homepage, normal light appearance, loaded images, no open menu or focused control.
- The source and final desktop screenshot were opened together in the same comparison input, alongside the final mobile screenshot. Text and controls were readable at full source width, so separate focused crops were unnecessary. Inspected the header/hero, each app's text/image boundary, card crops, links and footer individually within those images.

## Fidelity surfaces

- Typography: local Instrument Sans provides the compact sans-serif character and two-line hero hierarchy. Names, descriptions and link labels remain readable. The font is a close interpretation, not an assertion of the generated reference's exact typeface. The real wordmark is slightly tighter.
- Layout: matching 64 px desktop outside margins, wide horizontal app rows, approximately 29% text column, aligned image edges and thin separators. Final page is 47 px taller than the concept because rows are regularised. Mobile stacks the image below each app summary; no horizontal overflow remains.
- Colours: near-white studio surface, black headings, muted grey descriptions, violet actions. Actual product scenes retain the originals' black, yellow and blue palettes.
- Assets: real app icons, screenshots and MythCraft artwork replace the generated concept's approximations, in line with the user's explicit reuse requirement. This intentionally changes icon details, screenshot content, phone framing and the artwork composition. The existing Your Jobs hero card is reused. Feather supplies the arrow. No mock image is presented as a real app screenshot.
- Copy: the selected headline, supporting line, app names, summaries and Explore app actions are retained. New About/Support/Privacy routes support the agreed catalogue structure. Existing product page text is preserved and requires a publishing review as documented in README.

## Comparison history and fixes

1. Desktop v1 (`design/qa/home-desktop-v1.png`): Find Later's screen top and MythCraft's face were cropped too heavily. Moved the focal positions upward. Your Jobs lacked the visual card accent; reused its existing pink hero card. Replaced the temporary text arrow with a licensed Feather asset.
2. Mobile review: image aspect ratio plus minimum height expanded grid tracks beyond 390 px. Changed the single-column track to `minmax(0,1fr)` and constrained the image panel width and height. Final mobile evidence shows equal left/right margins, complete rounded panels, and no horizontal overflow.
3. MythCraft navigation: the inherited body colour made All apps too dark against its blue header. Applied a white foreground specifically to the header's return link.
4. Asset validation: restored the existing Your Jobs favicon and Apple touch icon omitted in the initial copy. Bundled the studio font through Astro instead of referencing the public directory from source CSS.
5. Final source/implementation comparison: no remaining P0/P1/P2 findings within the local prototype scope. Original-asset differences are intentional under the user's reuse requirement.

## Behaviour and build checks

- Homepage to Find Later and All apps return journey tested.
- Find Later switched from English to French through its actual selector; the route and page text changed correctly.
- Homepage to MythCraft tested. Chaos plus Earth unlocked the Gaia button. Clear the table reset the selection.
- Homepage to Your Jobs tested; its mobile Menu exposed the original navigation and download action.
- Studio Support and Privacy directories opened and displayed their app-specific destinations.
- Browser console error logs were checked during those journeys and returned no errors.
- Production static build passed (55 Astro routes plus 7 copied HTML pages).
- 2,471 local references checked across 68 HTML/CSS files at root, and 2,415 under the subdirectory base with no failures, both at `/` and with a `/studio-check/` base. Covers links, anchors, src/srcset and CSS asset references.

## Remaining follow-up

- P3: refine the four catalogue compositions further if desired; their real source imagery is simpler than the generated concept. The slight desktop height and type differences are non-blocking for this selected direction.
- Soleil is now local, including five languages and ten English guides. Its migration checks are recorded below.
- Publication blockers are listed in README: provisional identity, unfinished contact details in two inherited sites, release-state and policy review, production metadata, media footprint and hosting configuration.
- Not tested: exhaustive app-page interactions, every locale visually, external destinations, screen-reader/device testing, or production hosting. CSS includes reduced-motion and focus treatments, but this is not a complete accessibility audit.

## Implementation checklist

- [x] Preserve the selected wide-row composition with original assets.
- [x] Reuse all four local app experiences and return navigation.
- [x] Fix observed responsive/crop/contrast issues.
- [x] Validate built paths at root and project-subdirectory hosting.
- [x] Record publication limitations separately from local prototype QA.

## Soleil migration follow-up — 29 October 2026

- Compared `reference-captures/soleil.png` and `design/qa/soleil-desktop.png` in the same visual input at 1280 × 720. The original hero typography, colour, imagery and composition are retained. The added All apps pill shifts the brand and navigation along the header. The migrated capture has the browser’s visible scrollbar; slight width/position differences follow from that viewport content width. No material visual defect was observed.
- `design/qa/soleil-mobile.png` records the hero at 390 × 844. Phone layout and header are readable; document width and viewport width both measure 390. Menu opened correctly, exposing navigation, download and five language choices.
- Tested catalogue → Soleil, mobile menu → guides index → sunscreen guide → French homepage. The guide’s language selector correctly falls back to the French home because guides are English-only.
- Found missing trailing slashes in imported page URLs during browser testing. Normalised Soleil page routes, embedded guide links and translated paths while preserving asset paths, queries and fragments; the guide journey then succeeded.
- Browser error logs returned no errors during the completed Soleil journeys. The inherited animations/scripts compile with GSAP and Matter.js; this is not exhaustive interaction testing of every scene.
- GitHub workflow YAML parsed locally and its default publish gate was verified false. GitHub execution and actual hosting remain untested until a destination repository is selected.
