// Durations and delays are seconds; distances are CSS pixels unless named otherwise.
export const motionConfig = {
  enabled: true, respectReducedMotion: true,
  preloader: {
    enabled: true,
    firstVisitOnly: true,
    showAfterMs: 150,
    minimumVisibleMs: 450,
    maximumVisibleMs: 1200,
    exitDuration: 0.25,
  },
  reveal: { duration: 0.7, delay: 0, stagger: 0.12, distancePx: 24, ease: "power2.out" },
  navigation: { duration: 0.25 },
  scroll: { smooth: true, lerp: 0.1, wheelMultiplier: 1, touchMultiplier: 1 },
  videoSplit: { scrollDistanceVh: 240, scrubSeconds: 0.6, splitStart: 0.45, splitEnd: 0.85, panelGapVw: 110 },
  productFilmstrip: { enabled: true, desktopParallaxPercent: 8, mobileStatic: true },
  transitions: {
    liquidReveal: { duration: 0.8, distancePx: 24 },
    colourExtraction: { duration: 0.9, startSaturation: 0.72 },
    powderSettle: { enabled: false, maximumParticles: 24 },
  },
  three: { preloadMarginPx: 600, maxDpr: 1.5, pauseOffscreen: true },
} as const;
