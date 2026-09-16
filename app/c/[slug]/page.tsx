import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EmptyListings, ListingCard } from "@/components/ListingCard";
import { SiteShell } from "@/components/SiteShell";
import { CATEGORIES } from "@/lib/catalog";
import { isPublicListing } from "@/lib/listings";
import { loadStore } from "@/lib/store";
export function generateStaticParams() { return CATEGORIES.map((c) => ({ slug: c.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return { title: "Category" };
  return { title: `${cat.label} near you | Local Trade Garden`, alternates: { canonical: `/c/${slug}` } };
}
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const cat = CATEGORIES.find((c) => c.slug === slug); if (!cat) notFound();
  const store = await loadStore(); const listings = store.listings.filter((l) => l.category === slug && isPublicListing(l));
  return (<SiteShell><section className="mx-auto max-w-6xl px-4 py-8 sm:px-6"><h1 className="font-display text-3xl font-bold">{cat.label}</h1><p className="mt-2 text-muted">Listings appear when someone posts one.</p><div className="mt-6">{listings.length ? <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}</div> : <EmptyListings />}</div></section></SiteShell>);
}
