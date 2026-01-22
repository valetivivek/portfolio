import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://vishnuvivek.dev";
  const now = new Date();
  return [
    { 
      url: `${base}/`, 
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    { 
      url: `${base}/projects`, 
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { 
      url: `${base}/experience`, 
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { 
      url: `${base}/contact`, 
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { 
      url: `${base}/resume`, 
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { 
      url: `${base}/privacy`, 
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}


