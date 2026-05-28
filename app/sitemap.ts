import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

const publicRoutes = [
  "",
  "/how-it-works",
  "/what-you-can-trade",
  "/will-work-for-food",
  "/safety",
  "/local-partners",
  "/faq",
  "/contact",
  "/early-access",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
