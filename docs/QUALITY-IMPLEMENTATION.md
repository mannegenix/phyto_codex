# Quality experience — 29 October 2026

## Client visual correction

The client requested brighter blue + green imagery and restoration of the earlier homepage content. The homepage now reuses the original Who We Are, values, flagship, six-product portfolio, five-stage process, operating functions, quality band, enquiry form and contact sections. The original Global Markets headline and sample/product actions are restored. Copy changes are limited to correcting the business model from general manufacturing to selection, testing, approval and supply. The hero uses a new sunlit generated Garcinia botanical composition (`garcinia-daylight.webp`) and a light readability gradient. The previous dark photographic assets are retained as source history but no longer used in the current hero or product backdrop.

Client positioning: acquire extracts, test against company standards, approve only material meeting those requirements, then supply under the Phyto Elements name. Garcinia is the flagship, with equal care across the portfolio. Manufacturing is not the main sales story.

Implemented: native quality-led homepage, revised About/Operations/Quality pages, revised navigation/footer/metadata, configurable GSAP/Lenis scroll motion, desktop split-scroll photographic hero, section entry motion, approval-stage progress, first-session image-loading indicator and common decorative product backdrop. Mobile uses natural scrolling; reduced motion skips the animation setup. Scroll effects clean up on navigation.

Asset provenance: botanical-hero-master.png and garcinia-hero-master.png are AI-generated conceptual botanical images created for this project, optimized to WebP. They are not evidence of client products, testing facilities, staff, equipment or results. The Garcinia visual is the current hero; the wider ingredient still life supplies a shared decorative product background. Individual verified botanical/product photo sets are still pending.

Video is pending genuine approved footage. The split-scroll sequence currently animates a still image. Product-specific photo filmstrips, documentary testing imagery and photographic mini-icons remain pending approved assets. No test methods, numerical pass rates, certifications, instrument ownership or blanket superiority claims have been inferred from Bionutriz.

Verification: TypeScript, three existing unit tests and the Cloudflare/OpenNext build pass. Seventeen Worker response checks pass on port 8789. Desktop split scroll was exercised in Playwright; console reported no errors. Mobile overflow and reduced-motion checks recorded during implementation.

Inputs for the next asset/content pass: authentic testing photographs/video, permission to publish them, which tests may be named, whether tests occur internally or at partner labs, and approved sample specifications/COAs with sensitive details removed.
