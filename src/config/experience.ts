export const experience = {
  header: { desktopHeightPx:76, mobileHeightPx:68, blurPx:14 },
  carousel: { scrollBehavior: 'smooth', peekPercent: 14, autoPlay: false },
  hero: { parallaxPx: 48, floatDurationSeconds: 9, slitTravelPx: 30, slitTiltDegrees: 5 },
  scenes: {
    enabled:true,
    minimumWidthPx:1100,
    minimumHeightPx:720,
    scrollPerUnitVh:110,
    transitionUnits:.55,
    snap:true,
    snapDirectional:false,
    snapDelaySeconds:.26,
    snapDurationMinSeconds:.3,
    snapDurationMaxSeconds:.72,
    maximumAnchorStep:1,
  },
  colourDirection: 'green-dominant-blue-highlights',
} as const;
