import Link from "next/link";
import { categoryLabel, offerLabel } from "@/lib/catalog";
import { locationLabel } from "@/lib/geo";
import { formatPrice } from "@/lib/utils";
import type { Listing } from "@/lib/types";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link href={`/l/${listing.slug}`} className="category-card focus-ring block rounded-2xl border border-borderwarm p-4">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-wide text-deep">{offerLabel(listing.offerType)}</p>
        <p className="text-sm font-bold">{formatPrice(listing.offerType, listing.price)}</p>
      </div>
      <h3 className="mt-2 text-lg font-bold leading-6">{listing.title}</h3>
      <p className="mt-2 text-sm text-muted">{categoryLabel(listing.category)}</p>
      <p className="mt-1 text-sm">{locationLabel(listing)}</p>
    </Link>
  );
}

export function EmptyListings({ actionHref = "/sell", actionLabel = "Post the first listing" }: { actionHref?: string; actionLabel?: string }) {
  return (
    <div className="before-trade-panel rounded-2xl p-6 text-center">
      <p className="font-bold">No listings here yet.</p>
      <p className="mt-2 text-sm text-muted">This board stays empty until a real neighbor posts something.</p>
      <Link href={actionHref} className="focus-ring mt-4 inline-flex min-h-11 items-center rounded-xl bg-garden px-4 py-2 font-bold text-white">{actionLabel}</Link>
    </div>
  );
}
