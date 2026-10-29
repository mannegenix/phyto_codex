# Light botanical editorial experience — 29 October 2026

Green leads; blue highlights actions and navigation. Rich colour means luminous botanical detail, not outdoor sunlight or equal quantities of blue and green. Surfaces stay warm white and pale mint.

## Implemented presentation

- Large realistic leaf, gentle motion and scroll depth around the existing Global Markets headline.
- Six-product editorial carousel: specimen images, offset white panels, visible neighbouring slide, numbered navigation and previous/next controls.
- Original Who We Are and value proposition, followed by a photographic flagship composition with Garcinia specification details.
- Five-stage quality carousel: sourcing, sample evaluation, testing, approval and dispatch. Botanical images illustrate the story; they do not depict client laboratories or specific testing methods.
- Operating functions, quality summary, enquiry form and contact desks retain the fuller homepage information.
- Product pages show their own specimen images against a shared light botanical background. The footer is light.
- Carousels support touch scrolling, mouse dragging, keyboard arrows, numbered selection and reduced-motion navigation. They do not auto-advance.

## Configuration

- `src/config/color-routes.json`: route 5 semantic colours and editorial surface/detail tokens. Other palettes remain in source; the picker is disabled for this focused design.
- `src/config/experience.ts`: carousel peek width and scroll behaviour; hero float timing and scroll travel.
- `src/config/media.ts`: hero and product image paths.
- `src/components/editorial-carousel.tsx`: shared gallery interaction.
- `src/components/home-showcases.tsx`: product, flagship and quality presentation.
- `src/app/rich-experience.css`: editorial and responsive layout.

## Asset provenance

Seven `rich-*.webp` assets are AI-generated conceptual botanical images. Original PNGs are retained in `assets/rich-*-master.png`. These are not client facility, sample-batch, testing or documentary photographs. Botanical accuracy and suitability need client review before production. WebP assets are approximately 134–232 KB each.

## Verification

TypeScript and unit checks pass. Desktop hero, overlapping carousel and mobile gallery were visually inspected. All 15 routes were checked at 390px: one H1 and no viewport overflow. Product arrows, numbered selection and keyboard navigation work. Quality carousel last-slide navigation and reduced motion were checked. Footer background is light, with no background image. No broken images were found.
