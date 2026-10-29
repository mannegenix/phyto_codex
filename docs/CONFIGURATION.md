# Configuration guide

Use semantic tokens instead of editing many components. Use seconds for motion durations and named Px/Vh/Vw suffixes for geometry. Keep scrolling progress in 0..1. Validate start < end, positive durations, and quality limits. Build-time configuration changes trigger hot reload locally and require redeployment in production.

| File | Purpose | Current consumption |
| --- | --- | --- |
| color-routes.json | Numbered palettes and defaultRouteNumber | Route 8 controls the selected blue/cyan/lime gradient design; picker hidden; themes:sync updates standalone palette tokens |
| design.ts | Width, section spacing, typography | Foundation layout |
| motion.ts | Reveal/stagger intervals, video phases, scroll smoothing, DPR | Reveal, scrolling and loader active; video/3D reserved |
| experience.ts | Header height and blur, editorial carousel, slit depth and fullscreen scene settings | Active site-wide; scenes controls viewport thresholds, scroll distance per step, transition extent and snapping on all content routes |
| media.ts | Hero, six product images, videos, models and posters | Generated botanical image assets active; documentary/video/model slots remain pending |
| features.ts | Release switches | Theme picker disabled for the focused design; online delivery, chatbot and 3D pending |
| services.ts | Enquiry and chatbot limits | Reserved for P4/P5 |
| seo.ts | Canonical origin, indexing, verification | Live metadata, robots and sitemap |
| wrangler.jsonc | Worker build target and compatibility | Build/deployment configuration |

Environment values are documented in .env.example and .dev.vars.example. Secrets never belong in browser configuration. Set production indexing in the BUILD environment, not only the deployed Worker's runtime variables. Keep staging and production resource IDs and secrets separate. Add D1/R2/Vectorize/Queues bindings only after the real resources are provisioned; no dummy production IDs.

## Colour route configuration

Edit `src/config/color-routes.json`. `defaultRouteNumber: 8` selects Gradient. Each route contains an editable number, label, colour scheme and named colour tokens. Next.js reads this file directly; no duplicate CSS palette needs editing.

1. Green light
2. Green dark
3. Blue light
4. Blue vivid
5. Blue + green
6. Blue dark
7. Lime + green + blue
8. Gradient (default)

Run `npm run themes:sync` after changing the configuration to embed the palettes, numbered labels and default into the standalone `index.html`; it still needs no external config file when uploaded. Prototype-specific decorative gradients remain in its existing CSS until design migration. Next.js changes hot reload during development and require a rebuild for deployment.

The `imagery` policy in `src/config/design.ts` records the required photorealistic, natural, vibrant direction, including photographic mini-image icons. This is an asset acceptance rule, not an automatic image conversion setting. See `docs/DESIGN.md`.

`src/config/media.ts` now reserves the Source-to-Extract hero, desktop/mobile posters, five process photographs and three product-filmstrip images per product. Empty paths intentionally render the current fallback until an asset is approved. `src/config/motion.ts` controls the first-visit preloader, transition timing, split video and product-filmstrip parallax. See `docs/VISUAL-DIRECTION.md` before changing those values.

Routes 5, 7 and 8 share the visual hierarchy in `src/config/theme-refinements.css`: stronger headings, readable body and label sizes, high-contrast buttons and restrained card depth. Route 8 applies the selected gradient through the `brand-gradient` tokens and context-specific rules in `src/app/readability.css`. `themes:sync` embeds the shared rules in the standalone HTML too.
