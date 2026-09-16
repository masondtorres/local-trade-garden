import { CATEGORIES, PROHIBITED_PATTERNS } from "@/lib/catalog";
import { lookupPoint } from "@/lib/geo";
import { haversineMiles, isExpired } from "@/lib/utils";
import type { Listing } from "@/lib/types";

function normalizeSearchText(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function publicListingStatus(listing: Listing) {
  if (listing.status !== "active") return listing.status;
  if (isExpired(listing.expiresAt)) return "expired";
  return "active";
}

export function isPublicListing(listing: Listing) {
  return publicListingStatus(listing) === "active";
}

export function listingMatchesQuery(listing: Listing, query: { q?: string; category?: string; offerType?: string; location?: string; radius?: number; origin?: { lat: number; lng: number } | null }) {
  if (!isPublicListing(listing)) return false;
  const q = normalizeSearchText(query.q?.trim() || "");
  if (q) {
    const hay = normalizeSearchText(`${listing.title} ${listing.description} ${listing.category} ${listing.city}`);
    if (!hay.includes(q)) return false;
  }
  if (query.category && listing.category !== query.category) return false;
  if (query.offerType && listing.offerType !== query.offerType) return false;
  const loc = normalizeSearchText(query.location?.trim() || "");
  if (loc) {
    const hay = normalizeSearchText(`${listing.city} ${listing.region} ${listing.postalCode} ${listing.neighborhood} ${listing.pickupArea}`);
    if (!hay.includes(loc)) return false;
  }
  if (query.origin && query.radius && query.radius > 0) {
    const point = lookupPoint(listing.postalCode, listing.city);
    if (!point) return false;
    if (haversineMiles(query.origin, point) > query.radius) return false;
  }
  return true;
}

export function validateListingInput(input: { title: string; description: string; category: string; offerType: string; price?: number | null }) {
  const errors: string[] = [];
  if (input.title.length < 3) errors.push("Add a short title.");
  if (input.description.length < 8) errors.push("Add a short description.");
  if (!CATEGORIES.some((c) => c.slug === input.category)) errors.push("Choose a category.");
  if (!["sell", "trade", "free"].includes(input.offerType)) errors.push("Choose Sell, Trade, or Free.");
  if (PROHIBITED_PATTERNS.some((p) => p.test(`${input.title} ${input.description}`))) errors.push("That listing appears to include a prohibited item.");
  if (input.offerType === "sell" && (input.price == null || Number.isNaN(input.price) || input.price < 0)) errors.push("Add a price for items you are selling.");
  return errors;
}
