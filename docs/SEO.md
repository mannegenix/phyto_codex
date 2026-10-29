# SEO implementation and release plan

SEO is a product requirement. Technical correctness supports indexing and ranking; no stack guarantees first position.

## Implemented foundation
- Server-rendered homepage/catalogue and six clean /products/<slug> URLs, replacing hash-only product navigation.
- Unique page titles/descriptions, canonical paths, Open Graph and Twitter metadata.
- Organization and breadcrumb JSON-LD using only present facts, safely serialized.
- robots.txt and sitemap.xml metadata routes; real 404 for unknown products.
- Preview defaults to noindex/nofollow. Robots permits crawling so crawlers can read noindex. Preview sitemap is empty; production includes only real pages.
- Indexing requires BOTH DEPLOYMENT_ENV=production and SEO_INDEXABLE=true at build time. SITE_URL must be the final canonical origin. Rebuild when changing these settings. Do not promote preview output without rebuilding production metadata.

## Content and search strategy
Map buyer intent to one canonical page per extract: bulk supply, specifications, botanical source, applications and sampling. Research demand/competitors before final titles. Write original, quality-reviewed product descriptions. Publish only verified assay ranges, certifications, manufacturing claims and botanical names. Add supporting manufacturing/quality/process resources and meaningful internal links; avoid location doorway pages and duplicate keyword variants. Human-readable content must remain available without animation, canvas or chatbot.

## Remaining implementation
- Complete real page copy and metadata for About, Manufacturing, Quality, Resources, Contact and legal pages.
- Branded OG images, icon set, approved logo assets and descriptive alt text.
- Product JSON-LD only after sufficient verified fields exist; no fabricated offers, prices, reviews or stock. Rich-result eligibility is separate from valid schema.
- Redirect inventory when replacing existing public URLs; hash fragment migration requires client-side handling because fragments never reach the server.
- Media image dimensions, responsive sizes, poster prioritization, video encoding and asset budgets.
- Sitemap lastModified only from actual editorial updates, not every build.
- Search Console domain verification, sitemap submission and indexing inspection after launch.
- Analytics consent decisions and enquiry conversion events.

## Performance and verification
Targets at mobile field p75: LCP <=2.5s, INP <=200ms, CLS <=0.1. These are targets, not current measured results. Treat Lighthouse as lab evidence, not a ranking guarantee. Test every route without JavaScript, metadata in raw responses, canonical host consistency, mobile usability, keyboard access and structured data. Video/3D must not block meaningful HTML or load all media at startup.

Before release: inspect production HTML for absent noindex, check redirects/404, validate robots/sitemap, use Google's Rich Results Test and Search Console URL Inspection. Monitor indexing, Core Web Vitals and lead conversions after launch. Preview hosts should also be protected with Cloudflare Access where appropriate.

References:
- https://developers.google.com/search/docs/essentials
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
- https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
