import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/PageBlocks";
import { EmptyListings, ListingCard } from "@/components/ListingCard";
import { SearchPanel } from "@/components/SearchPanel";
import { SiteShell } from "@/components/SiteShell";
import { CATEGORIES } from "@/lib/catalog";
import { isPublicListing } from "@/lib/listings";
import { loadStore } from "@/lib/store";
import { promiseLine, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Local Trade Garden | Grow Local. Trade Local. Eat Local.",
  description: "Find, sell, trade, or give away garden goods near you.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const store = await loadStore();
  const recent = store.listings.filter(isPublicListing).sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 6);
  return (
    <SiteShell>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: "Local Trade Garden", url: siteUrl, potentialAction: { "@type": "SearchAction", target: siteUrl + "/browse?q={search_term_string}", "query-input": "required name=search_term_string" } }} />
      <section className="home-hero border-b border-borderwarm px-4 py-12 sm:px-6 sm:py-16">
        <div className="home-hero-panel mx-auto max-w-5xl rounded-2xl p-6 text-center sm:p-10">
          <p className="text-sm font-bold uppercase tracking-wide text-deep">{promiseLine}</p>
          <h1 className="font-display mt-3 text-4xl font-bold leading-tight sm:text-5xl">Find garden goods near you.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted">Sell, buy, trade, or give away produce, plants, seeds, eggs, honey, flowers, herbs, tools and supplies. Local pickup. No checkout.</p>
          <div className="mt-8 text-left"><SearchPanel /></div>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/browse" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-garden px-5 font-bold">Browse nearby</Link>
            <Link href="/sell" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-xl bg-garden px-5 font-bold text-white">Post something</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="font-display text-2xl font-bold">Browse by category</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => <Link key={c.slug} href={`/c/${c.slug}`} className="category-card category-food focus-ring rounded-2xl p-5"><h3 className="text-lg font-bold">{c.label}</h3></Link>)}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <h2 className="font-display text-2xl font-bold">Recently posted</h2>
        <div className="mt-4">{recent.length ? <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{recent.map((listing) => <ListingCard key={listing.id} listing={listing} />)}</div> : <EmptyListings />}</div>
      </section>
    </SiteShell>
  );
}
