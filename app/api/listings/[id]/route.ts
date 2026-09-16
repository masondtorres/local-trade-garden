import { NextResponse } from "next/server";
import { currentUser } from "@/lib/auth";
import { publicListingStatus, validateListingInput } from "@/lib/listings";
import { mutateStore } from "@/lib/store";
import { cleanText, nowIso } from "@/lib/utils";
import type { CategorySlug, ListingStatus, OfferType } from "@/lib/catalog";
export async function GET(_: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const listing = await mutateStore((store) => store.listings.find((item) => item.id === id || item.slug === id));
  if (!listing) return NextResponse.json({ error: "Listing not found." }, { status: 404 });
  return NextResponse.json({ listing: { ...listing, status: publicListingStatus(listing) } });
}
export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Sign in first." }, { status: 401 });
  const { id } = await ctx.params;
  const body = await req.json().catch(() => ({}));
  const result = await mutateStore((store) => {
    const listing = store.listings.find((item) => item.id === id || item.slug === id);
    if (!listing) return { error: "Listing not found.", status: 404 as number };
    if (listing.sellerId !== user.id) return { error: "You can only edit your own listings.", status: 403 };
    if (body.status) {
      const status = cleanText(body.status, 20) as ListingStatus;
      if (!["active", "sold", "expired", "unavailable"].includes(status)) return { error: "Invalid status.", status: 400 };
      listing.status = status; listing.updatedAt = nowIso(); return { listing };
    }
    const title = cleanText(body.title ?? listing.title, 80);
    const description = cleanText(body.description ?? listing.description, 2000);
    const category = cleanText(body.category ?? listing.category, 40) as CategorySlug;
    const offerType = cleanText(body.offerType ?? listing.offerType, 12) as OfferType;
    const price = offerType === "sell" ? Number(body.price ?? listing.price) : null;
    const errors = validateListingInput({ title, description, category, offerType, price });
    if (errors.length) return { error: errors[0], status: 400 };
    listing.title = title; listing.description = description; listing.category = category; listing.offerType = offerType; listing.price = price;
    listing.quantity = cleanText(body.quantity ?? listing.quantity, 40);
    listing.city = cleanText(body.city ?? listing.city, 80);
    listing.region = cleanText(body.region ?? listing.region, 40);
    listing.postalCode = cleanText(body.postalCode ?? listing.postalCode, 12);
    listing.neighborhood = cleanText(body.neighborhood ?? listing.neighborhood, 80);
    listing.pickupArea = cleanText(body.pickupArea ?? listing.pickupArea, 120);
    listing.updatedAt = nowIso();
    return { listing };
  });
  if ("error" in result && result.error) return NextResponse.json({ error: result.error }, { status: result.status ?? 400 });
  return NextResponse.json(result);
}
export async function DELETE(_: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Sign in first." }, { status: 401 });
  const { id } = await ctx.params;
  const result = await mutateStore((store) => {
    const listing = store.listings.find((item) => item.id === id || item.slug === id);
    if (!listing) return { error: "Listing not found.", status: 404 as number };
    if (listing.sellerId !== user.id) return { error: "You can only delete your own listings.", status: 403 };
    store.listings = store.listings.filter((item) => item.id !== listing.id);
    return { ok: true };
  });
  if ("error" in result) return NextResponse.json({ error: result.error }, { status: result.status });
  return NextResponse.json(result);
}
