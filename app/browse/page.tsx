import type { Metadata } from "next";
import { EmptyListings, ListingCard } from "@/components/ListingCard";
import { SearchPanel } from "@/components/SearchPanel";
import { SiteShell } from "@/components/SiteShell";
import { lookupPoint } from "@/lib/geo";
import { listingMatchesQuery } from "@/lib/listings";
import { loadStore } from "@/lib/store";
export const metadata: Metadata = { title: "Browse listings | Local Trade Garden", alternates: { canonical: "/browse" } };
export default async function BrowsePage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const q = String(sp.q ?? ""); const location = String(sp.location ?? ""); const category = String(sp.category ?? ""); const offerType = String(sp.offerType ?? ""); const radius = String(sp.radius ?? "");
  const store = await loadStore();
  const listings = store.listings.filter((listing) => listingMatchesQuery(listing, { q, category, offerType, location: location === "near me" ? "" : location, radius: Number(radius) || 0, origin: lookupPoint(String(sp.postal ?? ""), location === "near me" ? "" : location) })).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return (<SiteShell><section className="mx-auto max-w-6xl px-4 py-8 sm:px-6"><h1 className="font-display text-3xl font-bold">Browse nearby listings</h1><div className="mt-5"><SearchPanel initialQ={q} initialLocation={location} initialCategory={category} initialOffer={offerType} initialRadius={radius} /></div><p className="mt-5 text-sm text-muted">{listings.length} listing{listings.length === 1 ? "" : "s"}</p><div className="mt-4">{listings.length ? <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}</div> : <EmptyListings />}</div></section></SiteShell>);
}
