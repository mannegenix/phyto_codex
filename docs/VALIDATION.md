# Foundation validation — 28 October 2026

## Passed
- Dependency installation and lockfile created; direct versions pinned.
- Node 22.23.4 installed project-locally; npm scripts resolve this runtime. System Node was 25.9.0; .nvmrc and CI specify Node 22.
- TypeScript strict check passed.
- Three Vitest checks passed for production indexing guards and product-path integrity.
- Next.js 16.4.3 / React 19.3.1 / OpenNext 1.20.13 / Wrangler 4.154.0 build passed.
- Local workerd preview launched successfully at http://localhost:8787.
- Ten Playwright HTTP checks passed against the actual Worker: eight content routes, unknown-product 404, robots and empty preview sitemap.
- npm audit after patches reported zero vulnerabilities. Vitest updated to 4.1.12; @node-minify/core glob overridden to patched 10.5.x. Recheck this override on adapter upgrades.
- Original index.html preserved.

## Not yet verified or implemented
- No Cloudflare account deployment or live D1/R2/Vectorize/Queues resources.
- No visual/browser interaction screenshots or measured Lighthouse/Core Web Vitals results. HTTP tests are not rendered-browser visual tests.
- No complete prototype design/content migration; this is an intentionally simple foundation UI.
- No video/3D source assets, chatbot provider configuration, production form persistence or outbound delivery.
- Production-mode sitemap and indexability still need prelaunch response checks after setting the production build environment.
- CI workflow written but not run on a remote repository.
- Reserved animation/media/service configuration is not a claim that those features are working.

## Commands
npm run check
npm run build:cloudflare
npm run preview:cloudflare
npm run test:worker
npm run progress

The local sandbox required permission to bind and access localhost; these were environment restrictions, not application failures. Preview remains local; no public deployment was performed.

## HTML design migration — 28 October 2026

- Cloudflare/OpenNext production build passes with 15 pre-rendered content pages.
- TypeScript and three existing unit tests pass. Worker response suite expanded to 17 checks: all passed against localhost:8788.
- Playwright browser inspection: 1440px desktop homepage and 390px product page reviewed visually. All 15 pages checked at 390px: no horizontal overflow, exactly one H1, no external resources.
- Mobile menu opens, navigates to products and closes. Colour switching and reload persistence exercised. Product sample CTA selects Sample, preserves product, and generates a draft with samples@ copied. No email sent during testing.
- Fonts are self-hosted WOFF2 with licenses in public/fonts. Source font package versions are locked.
- No final photography/video assets or performance measurements yet. Delivery, CRM, 3D, scroll-video and chatbot remain upcoming work.
