export const design = {
  // Asset selection policy; reviewed during migration, not an automatic image conversion.
  imagery: {
    style: "photorealistic",
    mood: "natural-vibrant",
    icons: "miniature-photographic-images",
    allowCartoons: false,
    allowIllustrations: false,
    allowAbstractGeometry: false,
    threeStyle: "realistic-natural-materials",
  },
  maxContentWidthPx: 1180,
  spacing: { sectionMinPx: 56, sectionMaxPx: 96 },
  typography: { bodyPx: 18, headingWeight: 700 },
} as const;
