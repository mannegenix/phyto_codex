# Phyto Elements

Interactive Next.js application foundation alongside the unchanged `index.html` prototype. This is the environment and SEO baseline, not a completed migration of the approved design.

## Local development
Use Node 22 (`nvm use`) and npm. Copy `.env.example` to `.env.local`; defaults keep indexing disabled. Run `npm ci`, then `npm run dev` and open http://localhost:3000. The standalone HTML preview remains available separately.

## Checks and Cloudflare
`npm run check` runs TypeScript and SEO tests. `npm run build` builds Next.js. `npm run build:cloudflare` builds the actual OpenNext Worker artifact; `npm run preview:cloudflare` runs it locally in the Worker environment at http://localhost:8787. In a second terminal, `npm run test:worker` checks HTTP/SEO responses. `npm run deploy:cloudflare` publishes and requires Cloudflare credentials. Do not deploy the root HTML as the framework app. Do not use the generic Cloudflare Next template without verifying the adapter: it may select vinext rather than the chosen OpenNext path.

Node 22 is the intended local/CI toolchain. Exact resolved dependency versions are recorded in package-lock.json after installation. Upgrade related React/Next/OpenNext versions together, then run the Worker build and smoke checks. No live Cloudflare resources are provisioned yet. A project-local Node 22 is also installed for npm scripts. See docs/VALIDATION.md for exact verified versions.

## Working documents
- docs/DESIGN.md: visual direction and component rules.
- docs/FUNCTIONAL.md: functional contracts and acceptance gates.
- docs/CONFIGURATION.md: control surface and setting ownership.
- docs/SEO.md: SEO implementation and launch checklist.
- docs/tracking.json: phase/component status and evidence. Run `npm run progress`.
- docs/VALIDATION.md: what was actually verified and remaining blockers.

The media, AI and delivery libraries are included from the start. Their feature implementations are tracked explicitly; empty asset URLs and disabled features must not be mistaken for completed functionality.

## Migrated design

All 15 prototype views are available in the Next.js app. See [migration ownership and remaining work](docs/MIGRATION.md). Run `npm run dev` for development, or `npm run build:cloudflare` followed by `npm run preview:cloudflare -- --port 8788` to inspect the Worker build at http://localhost:8788. Stop the Worker preview before rebuilding its output. The root index.html remains the standalone reference.
