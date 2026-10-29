# Current direction — Selected. Tested. Trusted.

The client clarification on 29 October 2026 supersedes the manufacturing-led narrative below. Lead with acquiring extracts, evaluation against company standards, approval and supply. Do not imply all extracts are made in-house. Garcinia remains the flagship, with equally considered presentation for all other products. Bionutriz is a quality-content reference, not evidence that Phyto holds its certifications or uses its named methods.

Implemented first pass: photoreal botanical hero, desktop split-scroll image reveal, quality approval stages, shared botanical product backdrop, reduced-motion-aware section animation and a first-visit image-loading indicator. Hero video, product-specific photo sets and actual laboratory documentary imagery remain asset-dependent. The botanical hero is AI-generated conceptual imagery, not a client facility or batch photograph.

Final film narrative: extracts arriving for evaluation → real sample testing → approved ingredient. Confirm testing methods, instruments and internal/external lab status before showing specific processes.

---

# Visual direction: From botanical source to defined extract

## Reference review

The client references point to one coherent direction rather than four separate styles:

- **Indena:** lead with the plant and a memorable botanical story; use large editorial imagery to connect nature and science.
- **Synthite:** make the B2B proposition direct, show real laboratories and ingredient forms, and make capabilities easy to understand.
- **Akay:** organise products clearly and show the natural source beside the processed ingredient.
- **BARformula:** use an assured technical tone, strong typography, real operational photography and restrained data overlays.

Phyto Elements should combine those ideas as **nature made precise**: vivid plants and raw materials become controlled, documented extracts. Do not copy layouts, wording, imagery or effects from the reference sites.

## Preloader

Use a short **Extraction Drop** loader only on the first visit and only while critical hero media is genuinely loading.

1. The solid Phyto Elements leaf mark appears in deep green.
2. A copper-coloured liquid fill rises through the leaf for 450–700 ms.
3. The mark resolves into the header logo while the page fades in over 250 ms.

The loader must never hold an already-ready page. Show it only after a 150 ms delay so fast loads do not flash it. Cap the full experience at 1.2 seconds and then reveal the poster/fallback even if video is not ready. Do not show a fake percentage. On repeat navigation, use a 150–250 ms page veil instead of replaying the logo sequence. Reduced-motion mode shows the static logo and dissolves immediately.

## Homepage hero

### Selected concept: Source to Extract

Use a real, cinematic 10–14 second muted loop with three connected macro shots:

1. Morning light moving across a living botanical surface with water droplets.
2. A clean macro shot of plant material entering a controlled extraction process: liquid moving through glass, filtration, or a real stainless-steel sight glass.
3. Fine botanical extract powder settling into a glass dish or approved bulk-product sample.

The opening frame leaves quiet negative space on the left for the server-rendered headline. The footage remains behind the text with a deep green colour grade and a subtle contrast scrim. Do not place text inside the video.

After the hero introduction, the same video becomes the planned split-scroll sequence: the source footage moves left and the finished extract moves right, revealing a central specification panel. The narrative is **plant → process → defined extract**. The split is used once on the homepage; other sections use lighter transitions.

Fallbacks:

- Desktop poster: 3840 × 2160 master, delivered responsively as AVIF/WebP.
- Mobile poster/video: separate 9:16 crop with the subject kept away from the text area.
- Reduced motion, Save-Data and low-power fallback: static poster with no pinned scroll.
- Keep the headline, CTA, product links and supporting copy as HTML for accessibility and SEO.

## Photography plan

All assets must be real photographs or verified photorealistic production assets, naturally vibrant, accurately labelled and licensed for commercial use. Photographs of the client's facility, staff, equipment or batches must come from the client. Stock or commissioned conceptual photography must never be presented as documentary evidence of the client's operation.

### Homepage and company imagery

| Placement | Subject | Composition |
| --- | --- | --- |
| Hero | plant surface → extraction liquid → finished powder | cinematic macro sequence with left-side copy space |
| Who we are | diverse fresh botanical materials on a clean work surface | natural window light, rich but credible colour |
| Flagship | whole and cut Garcinia fruit/rind beside the finished powder | overhead or low-angle editorial still life |
| Process | five real photographic close-ups | raw material, extraction vessel/sight glass, powder standardisation, lab test, sealed drum/dispatch |
| Quality | technician handling a real sample, instrument or COA | hands and process detail; facility identity only if verified |
| Contact/sample | labelled sample jars or sealed sample pouches | clean B2B setting, no consumer supplement packaging |

### Product image sets

Each product needs the same five-image system so all product pages remain consistent:

| Product | Living source | Plant part | Extract form | Application context | Product-page backdrop |
| --- | --- | --- | --- | --- | --- |
| Garcinia | fruit on tree | cut fruit and rind | pale/tan extract powder | formulation/sample jar | backlit rind texture with green foliage |
| Curcumin | turmeric plant | fresh rhizomes | vivid golden curcumin powder | clean formulation dish | macro rhizome fibres and golden powder edge |
| Ashwagandha | plant in field | cleaned roots | warm beige extract powder | sample jar/capsule formulation ingredients | root fibres in soft natural light |
| Boswellia | Boswellia tree | resin tears | cream/tan extract powder | technical sample vial | translucent resin with warm sunlight |
| Bakuchiol | Babchi plant | seeds | approved extract form | cosmetic laboratory sample, not retail cosmetics | seed texture with restrained violet-brown notes |
| Bacopa | Bacopa in wet natural habitat | aerial/whole herb as approved | green-brown extract powder | formulation sample | wet leaves with soft water highlights |

Do not use unrelated “generic leaves” when the product species or plant part is being identified. Botanical identification and captions require client/technical review.

## Photographic icons

Use 40–56 px circular or softly rounded photographic crops with a plain accessible text label. The crop must remain recognisable at its rendered size.

- Plant part: macro photograph of rind, rhizome, root, resin, seed or herb.
- Marker/assay: real extract powder or laboratory sample image, paired with text.
- Specification: close photograph of an approved specification/COA detail with sensitive data removed.
- Sample: labelled sample jar or pouch.
- Packing: actual approved drum, liner or carton.
- Process stages: one photo each for raw material, extraction, standardisation, testing and dispatch.

Use familiar interface symbols only for universal controls such as close, menu, play/pause and search. Those controls need clear labels and must not be replaced by ambiguous photos.

## Section transitions and extraction effects

The effects should suggest real physical transformations:

- **Liquid reveal:** a soft vertical mask moves like liquid passing through a sight glass to reveal the next photographic section.
- **Filtration:** two overlapping photographs separate slowly; the raw botanical remains above while the clean extract appears below.
- **Powder settle:** small photographic powder particles or a real filmed powder plume settles behind a heading. Use once, keep particles subtle, and disable for reduced motion.
- **Concentration:** a macro crop tightens slowly while a specification value comes into focus.
- **Batch progression:** process photos advance in a pinned horizontal rail while the stage number and copy change in normal HTML.
- **Colour extraction:** a plant photograph begins slightly restrained and reaches its natural full colour as the section enters. Avoid neon oversaturation.

Default reveals remain short and quiet: 16–24 px travel, 600–750 ms duration, and 80–120 ms stagger. Avoid rotating cards, bouncing elements, decorative molecular graphics and constant parallax.

## Common product-page background

Use a **Botanical Filmstrip** shared by all six product pages:

- A fixed-width vertical photographic band sits behind the specification column on desktop.
- It contains three softly blended product-specific macro photographs: living plant, plant part and extract powder.
- The band moves only 6–10% slower than the page, creating a restrained continuous-scroll effect.
- A deep-green-to-transparent scrim keeps text readable; fine copper batch ticks can mark specification sections.
- Each product changes only the three image sources and crop positions through configuration.
- On mobile, the filmstrip becomes a static 28–36 vh banner below the page heading. No fixed background or continuous parallax.

The background is decorative and empty-alt; the same subjects appear as properly captioned content images elsewhere on the page. This prevents the visual layer from carrying essential information.

## Product layout revision

Keep the current specification-first layout but strengthen it with:

1. Product hero: plant-part photograph, botanical name, marker and three enquiry actions.
2. Sticky desktop specification summary next to the scrolling photographic filmstrip.
3. Product story: source, plant part and extract form shown as three large photographs.
4. Applications and documents: compact cards with photographic mini-icons and precise text.
5. Related products: real ingredient thumbnails with product names.
6. Enquiry form: product and request type preselected.

This preserves the useful product clarity seen in the industrial references while giving Phyto Elements a more premium visual identity.

## Asset and performance acceptance

- Shoot or source 4K masters for hero/full-bleed use, then generate responsive AVIF/WebP/JPEG derivatives. A browser must never download a 4K image for a small card.
- Hero video master can be 4K, but web delivery should include efficient desktop and mobile encodes with an optimized poster. Start muted, plays inline, and never autoplay audio.
- Give every content image explicit width/height and meaningful alt text. Decorative background layers use empty alt text.
- Prioritise only the hero poster. Lazy-load below-the-fold images and videos.
- Final-media targets: hero poster ideally under 350 KB desktop and 180 KB mobile; initial hero video segment under roughly 2.5 MB where visual quality permits. Validate by measurement after encoding.
- The preloader is not permission to hide slow media. The page and primary text must become usable immediately.

## Recommended implementation order

1. Create a photographic art-direction board and approve crops for the six product sets.
2. Build the loader shell and static hero poster state.
3. Implement the product filmstrip with temporary approved test images and mobile fallback.
4. Add the hero video and split-scroll timeline after footage is final.
5. Add process transitions one at a time and measure performance after each.
6. Complete accessibility, Core Web Vitals and reduced-motion review with final assets.
