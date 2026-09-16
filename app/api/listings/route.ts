import { NextResponse } from "next/server";
import { currentUser, toPublicUser } from "@/lib/auth";
import { CATEGORIES } from "@/lib/catalog";
import { lookupPoint } from "@/lib/geo";
import { listingMatchesQuery, validateListingInput } from "@/lib/listings";
import { loadStore, mutateStore } from "@/lib/store";
import { cleanText, daysFromNow, id, nowIso, slugify } from "@/lib/utils";
import type { CategorySlug, OfferType } from "@/lib/catalog";
export async function GET(req: Request) {
  const url = new URL(req.url); const store = await loadStore();
  const listings = store.listings.filter((listing) => listingMatchesQuery(listing, { q: url.searchParams.get("q") ?? "", category: url.searchParams.get("category") ?? "", offerType: url.searchParams.get("offerType") ?? "", location: url.searchParams.get("location") ?? "", radius: Number(url.searchParams.get("radius") ?? "0"), origin: lookupPoint(url.searchParams.get("postal") ?? "", url.searchParams.get("location") ?? "") })).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return NextResponse.json({ listings, users: Object.fromEntries(store.users.map((u) => [u.id, toPublicUser(u)])), categories: CATEGORIES });
}
export async function POST(req: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Sign in to post a listing." }, { status: 401 });
  const body = await req.json().catch(() => ({}));
  const title = cleanText(body.title, 80); const description = cleanText(body.description, 2000);
  const category = cleanText(body.category, 40) as CategorySlug; const offerType = cleanText(body.offerType, 12) as OfferType;
  const price = offerType === "sell" ? Number(body.price) : null;
  const errors = validateListingInput({ title, description, category, offerType, price });
  if (errors.length) return NextResponse.json({ error: errors[0] }, { status: 400 });
  const photos = Array.isArray(body.photos) ? body.photos.filter((p: unknown) => typeof p === "string" && String(p).startsWith("https://")).slice(0, 4) : [];
  const listing = await mutateStore((store) => {
    const created = { id: id("l"), slug: `${slugify(title)}-${id("s").slice(-6)}`, sellerId: user.id, title, description, category, offerType, price: offerType === "sell" ? price : null, quantity: cleanText(body.quantity, 40), city: cleanText(body.city, 80) || user.city, region: cleanText(body.region, 40) || user.region || "TN", postalCode: cleanText(body.postalCode, 12) || user.postalCode, neighborhood: cleanText(body.neighborhood, 80) || user.neighborhood, pickupArea: cleanText(body.pickupArea, 120) || user.city, photos, status: "active" as const, featured: false, createdAt: nowIso(), updatedAt: nowIso(), expiresAt: daysFromNow(30) };
    store.listings.push(created); store.events.push({ name: "listing_create", at: nowIso(), meta: created.id }); return created;
  });
  return NextResponse.json({ listing });
}
