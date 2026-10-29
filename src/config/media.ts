export const media = {
  hero: {
    concept: "selected-tested-trusted",
    desktopVideo: "",
    mobileVideo: "",
    desktopPoster: "/images/rich-hero.webp",
    mobilePoster: "/images/rich-hero.webp",
    textSafeArea: "left",
    slits: {
      quality: '/images/quality-sample.webp',
      extract: '/images/rich-curcumin.webp',
      nature: '/images/rich-bacopa.webp',
    },
  },
  videoSplit: { src: "", poster: "", mobileSrc: "", sequenceManifest: "" },
  productFilmstrip: {
    garcinia: { livingSource: "", plantPart: "", extract: "", desktopPosition: "center", mobilePosition: "center" },
    curcumin: { livingSource: "", plantPart: "", extract: "", desktopPosition: "center", mobilePosition: "center" },
    ashwagandha: { livingSource: "", plantPart: "", extract: "", desktopPosition: "center", mobilePosition: "center" },
    boswellia: { livingSource: "", plantPart: "", extract: "", desktopPosition: "center", mobilePosition: "center" },
    bakuchiol: { livingSource: "", plantPart: "", extract: "", desktopPosition: "center", mobilePosition: "center" },
    bacopa: { livingSource: "", plantPart: "", extract: "", desktopPosition: "center", mobilePosition: "center" },
  },
  process: {
    rawMaterial: "",
    extraction: "",
    standardisation: "",
    testing: "",
    dispatch: "",
  },
  three: { model: "", environment: "", poster: "" },
  // Supply real approved assets; empty values render no media.
} as const;

// Conceptual botanical images; replace here when client-approved photography is available.
export const productImages: Record<string,string> = {
  garcinia: '/images/rich-garcinia.webp',
  curcumin: '/images/rich-curcumin.webp',
  ashwagandha: '/images/rich-ashwagandha.webp',
  boswellia: '/images/rich-boswellia.webp',
  bakuchiol: '/images/rich-bakuchiol.webp',
  bacopa: '/images/rich-bacopa.webp',
};
