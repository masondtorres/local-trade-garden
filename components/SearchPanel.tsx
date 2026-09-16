"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { CATEGORIES, OFFER_TYPES } from "@/lib/catalog";

export function SearchPanel({ initialQ = "", initialLocation = "", initialCategory = "", initialOffer = "", initialRadius = "" }: { initialQ?: string; initialLocation?: string; initialCategory?: string; initialOffer?: string; initialRadius?: string }) {
  const router = useRouter();
  const [q, setQ] = useState(initialQ);
  const [location, setLocation] = useState(initialLocation);
  const [category, setCategory] = useState(initialCategory);
  const [offerType, setOfferType] = useState(initialOffer);
  const [radius, setRadius] = useState(initialRadius);
  const [busy, setBusy] = useState(false);

  function go(event?: FormEvent) {
    event?.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (location) params.set("location", location);
    if (category) params.set("category", category);
    if (offerType) params.set("offerType", offerType);
    if (radius) params.set("radius", radius);
    fetch("/api/events", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: location ? "location_search" : "search", meta: q || location }) }).catch(() => undefined);
    router.push(`/browse?${params.toString()}`);
  }

  function useLocation() {
    if (!navigator.geolocation) return;
    setBusy(true);
    navigator.geolocation.getCurrentPosition(() => { if (!location) setLocation("near me"); setBusy(false); }, () => setBusy(false), { timeout: 8000 });
  }

  return (
    <form onSubmit={go} className="grid gap-3 rounded-2xl border border-borderwarm bg-card p-4 shadow-card sm:grid-cols-2 lg:grid-cols-6">
      <label className="grid gap-1 text-sm font-bold lg:col-span-2">Search<input className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tomatoes, seeds, honey" /></label>
      <label className="grid gap-1 text-sm font-bold lg:col-span-2">Location<input className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City or ZIP" /></label>
      <label className="grid gap-1 text-sm font-bold">Category<select className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" value={category} onChange={(e) => setCategory(e.target.value)}><option value="">All</option>{CATEGORIES.map((c) => <option key={c.slug} value={c.slug}>{c.label}</option>)}</select></label>
      <label className="grid gap-1 text-sm font-bold">Type<select className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" value={offerType} onChange={(e) => setOfferType(e.target.value)}><option value="">All</option>{OFFER_TYPES.map((o) => <option key={o.slug} value={o.slug}>{o.label}</option>)}</select></label>
      <label className="grid gap-1 text-sm font-bold">Radius<select className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" value={radius} onChange={(e) => setRadius(e.target.value)}><option value="">Any</option><option value="10">10 miles</option><option value="25">25 miles</option><option value="50">50 miles</option></select></label>
      <div className="flex flex-wrap items-end gap-2 lg:col-span-5">
        <button className="focus-ring min-h-12 rounded-xl bg-garden px-5 font-bold text-white" type="submit">Find nearby</button>
        <button className="focus-ring min-h-12 rounded-xl border border-borderwarm px-4 font-bold" type="button" onClick={useLocation} disabled={busy}>{busy ? "Locating…" : "Use my location"}</button>
      </div>
    </form>
  );
}
