import type { MetadataRoute } from "next"

const BASE_URL = "https://senyops.com"
const LOCALES = ["es", "en", "fr", "it", "pt"]
const PAGES = ["", "/servicios", "/casos", "/contacto"]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of LOCALES) {
    for (const page of PAGES) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
      })
    }
  }

  return entries
}
