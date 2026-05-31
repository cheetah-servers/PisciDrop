import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://picsidrop.in";
  const changeFrequency = "weekly" as const;
  const pages = ["", "/about", "/contact", "/privacy", "/terms"];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency,
    priority: page === "" ? 1.0 : 0.8,
  }));
}
