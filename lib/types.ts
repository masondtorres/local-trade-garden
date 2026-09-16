import type { CategorySlug, ListingStatus, OfferType } from "@/lib/catalog";

export type User = {
  id: string;
  email: string;
  displayName: string;
  passwordHash: string;
  city: string;
  region: string;
  postalCode: string;
  neighborhood: string;
  bio: string;
  createdAt: string;
};

export type PublicUser = Omit<User, "email" | "passwordHash">;

export type Listing = {
  id: string;
  slug: string;
  sellerId: string;
  title: string;
  description: string;
  category: CategorySlug;
  offerType: OfferType;
  price: number | null;
  quantity: string;
  city: string;
  region: string;
  postalCode: string;
  neighborhood: string;
  pickupArea: string;
  photos: string[];
  status: ListingStatus;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  expiresAt: string;
};

export type Message = {
  id: string;
  listingId: string;
  fromUserId: string | null;
  fromName: string;
  fromEmail: string;
  body: string;
  createdAt: string;
};

export type Report = {
  id: string;
  listingId?: string;
  userId?: string;
  reason: string;
  details: string;
  createdAt: string;
};

export type MarketStore = {
  users: User[];
  listings: Listing[];
  favorites: Record<string, string[]>;
  messages: Message[];
  reports: Report[];
  events: { name: string; at: string; meta?: string }[];
};
