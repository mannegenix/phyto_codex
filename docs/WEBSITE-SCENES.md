# Site-wide viewport scenes — 29 October 2026

The homepage's scene controller is now shared across every authored content route. Desktop scrolling advances pinned, viewport-sized scenes through the same circular liquid-style reveal. The header stays fixed and transparent across all scenes and routes; content reserves space beneath it. The footer follows the scene sequence.

## Route structure

| Page | Scenes |
| --- | --- |
| Homepage | Introduction, six-extract sequence, company, quality, operations, standards, enquiry, contact |
| Products | Introduction, comparison table, six-extract sequence, enquiry |
| Six product details | Introduction/specimen, specifications, applications, documents, enquiry, related extracts |
| About | Introduction, company information |
| Operations | Introduction, operating approach, customer interface |
| Quality & Testing | Introduction, approval journey, quality information |
| Resources | Introduction, product/company documents, safety/supply documents, document requests |
| Sample request | Introduction, enquiry |
| Contact | Introduction, contact desks, enquiry |
| Privacy | Introduction, notice |

The product catalogue uses the same scroll-linked six-extract sequence as the homepage. The controller derives the carousel's scene position instead of assuming the homepage's order. Forms remain scrollable inside their scene. Denser specifications and document lists are divided into separate scenes to fit laptop viewports.

## Implementation

- `PageScenes` splits trusted authored markup at top-level boundaries on the server. The original text, product information, forms and document requests remain in initial HTML.
- `HomeCinema` accepts page labels and identifies the linked carousel dynamically. It remains the shared viewport controller despite its original filename.
- Every page instance is keyed by route to reset state and clean up pins/listeners between routes.
- Product request actions dispatch a scene navigation request as well as updating request type. Hash links such as `?request=Specifications#enquire` seek the correct scene on entry.
- `experience.scenes` settings apply site-wide: enable/disable, viewport threshold, scroll distance, transition extent and directional snapping.
- Mobile, reduced motion and no-JavaScript views retain ordinary document flow with all content available.
- Metadata, canonical URLs and sitemap paths are unchanged. Only one H1 is rendered per page.

## Browser validation

Desktop checks confirmed one pin and one visible scene across company, catalogue, product, quality, resource, sample, contact and privacy routes. Product sample actions and direct specification-request links reach the enquiry scene with the right request type. Client navigation between routes leaves one current pin. The catalogue's six-extract sequence reaches its final slide and releases into enquiry.

At 1366 × 768, product specifications/applications/documents and resource groups fit their scenes. Only long enquiry forms need internal scrolling. All 15 routes passed the 390px mobile check: one H1, no horizontal overflow, no pins and no hidden scenes. Reduced-motion checks confirmed normal readable flow.

Final verification: TypeScript, three unit checks and the Cloudflare/OpenNext build passed. All 17 Worker response checks passed against port 8793. Browser checks against that built Worker confirmed exactly one visible scene and one active pin on each of the 15 content routes, with zero console errors.
