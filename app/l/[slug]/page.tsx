import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ListingActions } from "@/components/ListingActions";
import { ListingCard } from "@/components/ListingCard";
import { SiteShell } from "@/components/SiteShell";
import { categoryLabel, offerLabel } from "@/lib/catalog";
import { locationLabel } from "@/lib/geo";
import { isPublicListing, publicListingStatus } from "@/lib/listings";
import { loadStore } from "@/lib/store";
import { formatDate, formatPrice } from "@/lib/utils";
import { siteUrl } from "@/content/site";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const store = await loadStore();
  const listing = store.listings.find((item) => item.slug === slug || item.id === slug);
  if (!listing) return { title: "Listing not found" };
  return { title: `${listing.title} | Local Trade Garden`, description: listing.description.slice(0, 150), alternates: { canonical: `/l/${listing.slug}` }, robots: publicListingStatus(listing) === "active" ? { index: true } : { index: false } };
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const store = await loadStore();
  const listing = store.listings.find((item) => item.slug === slug || item.id === slug);
  if (!listing) notFound();
  const seller = store.users.find((u) => u.id === listing.sellerId);
  const others = store.listings.filter((item) => item.sellerId === listing.sellerId && item.id !== listing.id && isPublicListing(item)).slice(0, 4);
  const status = publicListingStatus(listing);
  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <nav className="text-sm"><Link className="underline" href="/browse">Browse</Link> / <Link className="underline" href={`/c/${listing.category}`}>{categoryLabel(listing.category)}</Link></nav>
        <p className="mt-4 text-sm font-bold uppercase text-deep">{offerLabel(listing.offerType)} · {status}</p>
        <h1 className="font-display mt-2 text-4xl font-bold">{listing.title}</h1>
        <p className="mt-3 text-xl font-bold">{formatPrice(listing.offerType, listing.price)}</p>
        {listing.photos?.length ? <div className="mt-6 grid gap-3 sm:grid-cols-2">{listing.photos.slice(0, 4).map((photo, index) => <img key={photo} src={photo} alt={index === 0 ? listing.title : `${listing.title} photo ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} decoding="async" referrerPolicy="no-referrer" className="aspect-[4/3] w-full rounded-2xl border border-borderwarm object-cover" />)}</div> : null}
        <p className="mt-4 text-muted">{locationLabel(listing)}</p>
        <p className="mt-1 text-sm text-muted">Pickup area: {listing.pickupArea || locationLabel(listing)}</p>
        <p className="mt-1 text-sm text-muted">Posted {formatDate(listing.createdAt)}{listing.quantity ? ` · ${listing.quantity}` : ""}</p>
        <p className="mt-6 whitespace-pre-line leading-7">{listing.description}</p>
        <p className="mt-6 text-sm">Seller: {seller ? <Link className="font-bold underline" href={`/u/${seller.id}`}>{seller.displayName}</Link> : "Local gardener"}</p>
        <ListingActions listingId={listing.id} slug={listing.slug} title={listing.title} sellerId={listing.sellerId} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Offer", url: `${siteUrl}/l/${listing.slug}`, name: listing.title, description: listing.description }) }} />
        {others.length ? <section className="mt-10"><h2 className="font-display text-2xl font-bold">More from this seller</h2><div className="mt-4 grid gap-3">{others.map((item) => <ListingCard key={item.id} listing={item} />)}</div></section> : null}
      </article>
    </SiteShell>
  );
}
