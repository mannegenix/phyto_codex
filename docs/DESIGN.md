# Phyto Elements design specification

The approved HTML at /index.html is the visual/content reference. The 15 HTML views have been migrated into the Next.js app. Preserve the reference until client acceptance. The migration retains shared section markup through trusted server-side React rendering, with dedicated interactive components.

## Direction
The viewport scene system now applies across the site; route structure, shared configuration and accessibility fallbacks are documented in `docs/WEBSITE-SCENES.md`.

The latest homepage refinement is in `docs/HOMEPAGE-SCENES.md`: one equal product showcase, a three-slit quality/extract/nature hero, retained leaf background, and progressively enhanced fullscreen scene transitions with a scroll-linked six-product sequence.

The latest direction is specified in `docs/EDITORIAL-EXPERIENCE.md`: green dominance, selective blue highlights, luminous specimen imagery and overlapping editorial carousels. This supersedes the outdoor-sunlight and dark-background explorations.

Build an expressive botanical ingredient manufacturer site: legible technical information, restrained typography, deliberate video and 3D storytelling, clear enquiry paths. Eight colour routes remain available during review, with route 8 selected as the default. Final brand selection is a launch decision.

The current approved narrative is **Selected. Tested. Trusted.** Quality-led selection, testing and approval take precedence over manufacturing. Garcinia is the flagship; all six products receive equal care. Preloader, hero footage, section transitions and product-page backgrounds are specified in `docs/VISUAL-DIRECTION.md`.

## Configuration ownership
- src/config/color-routes.json: numbered palettes and default route. src/config/themes.ts: theme rendering and selector data.
- src/config/design.ts: layout and typography settings.
- src/config/motion.ts: durations, delays, stagger, easing, scroll distances, scrubbing and 3D quality.
- src/config/media.ts: approved video/model/poster sources.
- src/config/features.ts: feature release switches.
- src/config/services.ts: form/chat/delivery limits.
- src/config/seo.ts: origin, indexing and verification.

Values are build-time code configuration: hot reload in development; rebuild and deploy for production changes. A future authenticated settings store is needed for changes without deployment. Do not expose secrets in a design-control UI. Timing and media settings are reserved contracts until their tracked components are implemented.

## Animation ownership
GSAP owns scroll-linked timelines and split-video panels. Lenis has one shared instance, driven by the GSAP ticker; do not enable a second autoRAF loop. Motion owns menus, dialogs and other component transitions. Never animate the same element/property with both libraries. R3F owns the canvas render loop, with paused offscreen rendering. Clean up timelines, event listeners and render loops on navigation.

VideoSplitHero requires approved source video, poster and mobile composition. Keep the headline and product links as HTML outside canvas/video. Split panels share a single synchronized video source. Preload only necessary media; reserve dimensions to prevent shifts. Provide static reduced-motion and low-power fallbacks. Do not conceal content until animations run.

## Components and acceptance
Header: fixed and transparent across all routes, with subtle backdrop blur, reserved scene space and keyboard-operable mobile navigation.
Footer: visible logo, legible links and legal details in every theme.
Product pages: crawlable URLs, readable specifications, enquiry preselection.
Theme picker: eight numbered routes, no layout shifts, persistent preference in final implementation.
VideoSplitHero: smooth forward/reverse scrubbing, no stuck pin, accessible static state.
ThreeScene: poster/error fallback, capped DPR, lazy loading and offscreen pause.
ChatPanel: focus management, streaming status, sources, cancellation, reduced motion.

Use desktop/mobile screenshots and keyboard checks for every completed component. Do not treat a PNG logo recreation as a final vector brand asset; source vector and exact font identification remain pending.

## Imagery rule — realistic, natural and vibrant

All site imagery must look real and close to nature. Use photographic detail, believable natural light, authentic textures and vibrant, credible colour. Show the actual plant, ingredient, material, process or object being described. Avoid cartoons, illustrative depictions, stylized renders and abstract geometric imagery. Do not use artificial oversaturation to create vibrancy.

Icons must be miniature photographic images or realistic cutouts of the subject they represent, rather than line icons, emoji, pictograms or geometric symbols. Choose simple crops and recognisable silhouettes that remain clear at small sizes. Pair action controls with clear text/accessibility labels; decorative images have empty alt text. Informative images receive accurate descriptive alt text.

The same direction applies to hero images, product cards, backgrounds, video, 3D scenes, thumbnails and loading/reduced-motion posters. 3D must depict believable botanical subjects or real materials with natural textures and lighting. Motion does not justify abstract or cartoon styling. Keep the approved brand logo as the existing brand identity.

Review every asset at its actual desktop and mobile display size. Asset acceptance requires subject accuracy, natural appearance, vibrant but believable colour, suitable resolution, appropriate usage rights and optimized delivery with explicit dimensions. Photos presented as the client's facilities or products must actually represent them; conceptual imagery must not imply documentary evidence. Existing prototype illustrations and icons require replacement during migration; this rule does not mean those assets have already been replaced.

Route 8 is the default palette. It retains route 7's pale green, white and dark-text foundations, then applies the selected `#0B7CF2 → #20B8D8 → #8FD14F` gradient to actions, headline highlights, card accents and feature surfaces. Supporting copy uses weight 500; small labels are at least 13px at weight 600. Dense content remains on solid surfaces for clarity.
