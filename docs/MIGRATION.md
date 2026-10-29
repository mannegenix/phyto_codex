# HTML design migration

Use the Next.js preview (npm run dev or the Cloudflare Worker preview), rather than opening index.html, to review the migrated application. The HTML file is the preserved design reference.

## Editing ownership

- src/content/site-views.ts: typed source copy and shared server-rendered sections (product cards, batch cards, process, enquiry sections and all views).
- src/components/site-content.tsx: converts trusted local markup to React, rewrites navigation to crawlable URLs, and mounts interactive forms/copy controls. Do not pass user-generated markup here.
- src/components/site-header.tsx and site-footer.tsx: shared site navigation and footer.
- src/components/enquiry-form.tsx: preview validation and explicit email-draft handoff.
- src/components/theme-picker.tsx: six numbered themes and browser preference.
- src/app/prototype.css: migrated layout and route-specific decoration.
- src/config/color-routes.json and theme-refinements.css: palettes and contrast refinements.
- public/fonts: locally served prototype typefaces plus licenses.

## Route mapping

Home is /. Company views use /about, /operations, /manufacturing, /resources, /sample, /contact and /privacy. Products use /products and /products/[product-slug]. Old internal hash navigation has been replaced by real links.

## Intentional changes

Header now stays fixed and transparent across all routes, following the latest navigation direction. Review controls sit below the footer so they do not cover mobile content. The original canvas illustration and generic product swatches are omitted pending realistic photography; the flagship section uses its specification card meanwhile. No simulated submission success remains. The unverified city placeholder is removed. Production factual and privacy approval is still pending.

Next: approve the migrated visual layout and content, supply/select realistic botanical photography and hero footage, then implement the GSAP/Lenis split-video component with mobile and reduced-motion fallbacks.
