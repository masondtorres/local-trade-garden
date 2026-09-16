import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { CATEGORIES } from "@/lib/catalog";
const routes = ["", "/browse", "/how-it-works", "/guidelines", "/safety", "/faq", "/contact", "/pricing", "/terms", "/privacy"];
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: route === "" ? 1 : 0.7 })),
    ...CATEGORIES.map((c) => ({ url: `${siteUrl}/c/${c.slug}`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.6 })),
  ];
}
