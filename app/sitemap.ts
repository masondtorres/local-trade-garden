import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { CATEGORIES } from "@/lib/catalog";
import { isPublicListing } from "@/lib/listings";
import { loadStore } from "@/lib/store";

const routes = ["", "/browse", "/how-it-works", "/guidelines", "/safety", "/faq", "/contact", "/pricing", "/terms", "/privacy"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const store = await loadStore();
  const listings = store.listings.filter(isPublicListing);
  const activeCategories = new Set(listings.map((listing) => listing.category));
  const sellerIds = [...new Set(listings.map((listing) => listing.sellerId))];

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...CATEGORIES.filter((category) => activeCategories.has(category.slug)).map((category) => ({
      url: `${siteUrl}/c/${category.slug}`,
      changeFrequency: "daily" as const,
      priority: 0.6,
    })),
    ...listings.map((listing) => ({
      url: `${siteUrl}/l/${listing.slug}`,
      lastModified: new Date(listing.updatedAt),
      changeFrequency: "daily" as const,
      priority: 0.7,
    })),
    ...sellerIds.map((sellerId) => ({
      url: `${siteUrl}/u/${sellerId}`,
      changeFrequency: "daily" as const,
      priority: 0.5,
    })),
  ];
}
