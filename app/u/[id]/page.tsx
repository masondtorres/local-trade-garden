import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EmptyListings, ListingCard } from "@/components/ListingCard";
import { SiteShell } from "@/components/SiteShell";
import { locationLabel } from "@/lib/geo";
import { isPublicListing } from "@/lib/listings";
import { loadStore } from "@/lib/store";
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params; const store = await loadStore(); const seller = store.users.find((u) => u.id === id);
  return { title: seller ? `${seller.displayName} | Local Trade Garden` : "Seller" };
}
export default async function SellerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const store = await loadStore(); const seller = store.users.find((u) => u.id === id);
  if (!seller) notFound();
  const listings = store.listings.filter((l) => l.sellerId === seller.id && isPublicListing(l));
  return (<SiteShell><section className="mx-auto max-w-3xl px-4 py-8 sm:px-6"><h1 className="font-display text-3xl font-bold">{seller.displayName}</h1><p className="mt-2 text-muted">{locationLabel(seller)}</p>{seller.bio ? <p className="mt-4">{seller.bio}</p> : null}<h2 className="mt-8 font-display text-2xl font-bold">Listings</h2><div className="mt-4">{listings.length ? <div className="grid gap-3">{listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}</div> : <EmptyListings actionHref="/browse" actionLabel="Browse other listings" />}</div></section></SiteShell>);
}
