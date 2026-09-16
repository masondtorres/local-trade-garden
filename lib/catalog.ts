export const CATEGORIES = [
  { slug: "produce", label: "Produce" },
  { slug: "plants", label: "Plants & seedlings" },
  { slug: "seeds", label: "Seeds" },
  { slug: "eggs", label: "Eggs" },
  { slug: "honey", label: "Honey" },
  { slug: "flowers", label: "Flowers" },
  { slug: "herbs", label: "Herbs" },
  { slug: "supplies", label: "Garden supplies" },
  { slug: "tools", label: "Tools" },
  { slug: "compost", label: "Compost & soil" },
  { slug: "other", label: "Other garden goods" },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];
export type OfferType = "sell" | "trade" | "free";
export type ListingStatus = "active" | "sold" | "expired" | "unavailable";

export const OFFER_TYPES: { slug: OfferType; label: string }[] = [
  { slug: "sell", label: "Sell" },
  { slug: "trade", label: "Trade" },
  { slug: "free", label: "Give away" },
];

export const PROHIBITED_PATTERNS = [
  /\braw milk\b/i,
  /\bfirearm|\bgun\b|\bammo|\bammunition/i,
  /\balcohol|\bwine\b|\bbeer\b|\bhomebrew|\bliquor/i,
  /\bcannabis|\bmarijuana|\bthc\b/i,
];

export function categoryLabel(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? "Garden goods";
}

export function offerLabel(slug: string) {
  return OFFER_TYPES.find((o) => o.slug === slug)?.label ?? slug;
}
