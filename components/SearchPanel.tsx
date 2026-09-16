"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { CATEGORIES, OFFER_TYPES } from "@/lib/catalog";

type SearchPanelProps = {
  initialQ?: string;
  initialLocation?: string;
  initialCategory?: string;
  initialOffer?: string;
  initialRadius?: string;
  compact?: boolean;
};

export function SearchPanel({ initialQ = "", initialLocation = "", initialCategory = "", initialOffer = "", compact = false }: SearchPanelProps) {
  const router = useRouter();
  const [q, setQ] = useState(initialQ);
  const [location, setLocation] = useState(initialLocation);
  const [category, setCategory] = useState(initialCategory);
  const [offerType, setOfferType] = useState(initialOffer);

  function go(event?: FormEvent) {
    event?.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (location.trim()) params.set("location", location.trim());
    if (!compact && category) params.set("category", category);
    if (!compact && offerType) params.set("offerType", offerType);
    fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: location ? "location_search" : "search", meta: q || location }),
    }).catch(() => undefined);
    router.push(`/browse${params.size ? `?${params.toString()}` : ""}`);
  }

  return (
    <form onSubmit={go} className={`grid gap-3 rounded-2xl border border-borderwarm bg-card p-4 shadow-card ${compact ? "lg:grid-cols-[minmax(0,2fr)_minmax(0,1.25fr)_auto]" : "sm:grid-cols-2 lg:grid-cols-6"}`}>
      <label className={`grid gap-1 text-sm font-bold ${compact ? "" : "lg:col-span-2"}`}>
        Search
        <input className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tomatoes, seeds, honey" autoComplete="off" />
      </label>
      <label className={`grid gap-1 text-sm font-bold ${compact ? "" : "lg:col-span-2"}`}>
        City or ZIP
        <input className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Sevierville or 37862" autoComplete="postal-code" />
      </label>
      {!compact ? (
        <>
          <label className="grid gap-1 text-sm font-bold">Category<select className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" value={category} onChange={(e) => setCategory(e.target.value)}><option value="">All</option>{CATEGORIES.map((c) => <option key={c.slug} value={c.slug}>{c.label}</option>)}</select></label>
          <label className="grid gap-1 text-sm font-bold">Type<select className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" value={offerType} onChange={(e) => setOfferType(e.target.value)}><option value="">All</option>{OFFER_TYPES.map((o) => <option key={o.slug} value={o.slug}>{o.label}</option>)}</select></label>
        </>
      ) : null}
      <div className={`flex items-end ${compact ? "" : "sm:col-span-2 lg:col-span-6"}`}>
        <button className="focus-ring min-h-12 w-full rounded-xl bg-garden px-5 font-bold text-white sm:w-auto" type="submit">Search listings</button>
      </div>
    </form>
  );
}
