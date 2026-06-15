import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

const publicRoutes = [
  "",
  "/trade",
  "/food-and-garden",
  "/handmade-goods",
  "/repairs-and-tools",
  "/skills-and-lessons",
  "/how-it-works",
  "/what-you-can-trade",
  "/will-work-for-food",
  "/safety",
  "/local-partners",
  "/faq",
  "/contact",
  "/early-access",
  "/pilot-area",
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
