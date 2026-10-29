# Homepage scene experience — 29 October 2026

## Presentation

The homepage has one product showcase. The separate Garcinia feature and special homepage badge are removed; all six extracts receive the same presentation. The header no longer has a separate flagship link.

The hero has three layered vertical photographic slits: quality/sample inspection, extract, and nature. Offsets, perspective, shadows and slow image movement provide depth. The earlier leaf image is retained as a subtle background in Who We Are and the shared product backdrop.

## Desktop scroll model

`HomeCinema` progressively enhances eight server-rendered scenes. One viewport is pinned while scrolling advances the narrative. Scenes change through expanding circular masks without moving their content vertically across the screen. The product scene consumes six scroll stops before the next scene appears. Arrow, numbered and keyboard controls seek the same underlying scroll positions. Reverse scrolling reverses the sequence.

Scenes: introduction, extracts, Who We Are, quality, operations, standards, enquiries, contact. The long enquiry form scrolls within its scene so all fields remain reachable. Explicit section navigation allows direct access to enquiry/contact. Normal scrolling releases to the footer at the end.

All text is present in initial HTML. Inactive enhanced scenes are inert and hidden from assistive technology; the current scene and navigation remain operable. Without JavaScript, under the configured viewport threshold, or with reduced motion, pinning is absent and every scene remains in ordinary document flow.

## Configuration

- `src/config/experience.ts` → `scenes`: enable/disable, minimum width/height, scroll distance per step, transition extent and snapping.
- `experience.hero`: slit movement, perspective angle and ambient movement duration.
- `src/config/media.ts` → `hero.slits`: quality, extract and nature sources.
- `src/components/home-cinema.tsx`: scene controller and explicit navigation.
- `src/app/home-cinema.css`: slit composition, stage sizing and compact desktop presentation.

## Assets

`quality-sample.webp` is a generated conceptual sample-inspection image; its master is in `assets/quality-sample-master.png`. It does not depict the client's actual testing staff, laboratory or a named method. Extract/nature images are the existing conceptual botanical assets. Genuine testing footage and product accuracy approval remain pre-launch asset tasks.

## Browser evidence

- Eight scenes, three hero slits, one pin and no standalone flagship section.
- Wheel scrolling advances an extract with the product scene held at viewport top and no internal vertical motion.
- All six extract controls were traversed; the scene remained pinned, then released into Who We Are.
- At 1366 × 768, all scenes fit the viewport; only the long enquiry form requires internal scrolling.
- Form fields were editable while pinned.
- Mobile fallback: no pins, no hidden scenes, no horizontal overflow.
- Reduced motion: no pins, no hidden scenes, no ambient image animation.
- Product page navigation leaves no homepage pin behind.
