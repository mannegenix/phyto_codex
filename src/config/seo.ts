export function getSeoConfig(env: Record<string, string | undefined> = process.env) {
  const origin = new URL(env.SITE_URL || "https://phytoelements.in");
  if (!['https:', 'http:'].includes(origin.protocol)) throw new Error('Invalid SITE_URL');
  return { origin: origin.origin, indexable: env.DEPLOYMENT_ENV === "production" && env.SEO_INDEXABLE === "true",
    name: "Phyto Elements", description: "Selected and tested botanical extracts for professional buyers. Explore Garcinia Cambogia and our full portfolio, quality approach, specifications and samples.",
    verification: env.GOOGLE_SITE_VERIFICATION || undefined };
}
export const seo = getSeoConfig();
