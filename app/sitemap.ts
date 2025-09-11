import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/projects`, lastModified: now },
    { url: `${base}/experience`, lastModified: now },
    { url: `${base}/contact`, lastModified: now },
    { url: `${base}/resume`, lastModified: now },
  ];
}


