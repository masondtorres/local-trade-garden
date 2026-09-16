"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CATEGORIES, OFFER_TYPES } from "@/lib/catalog";
import type { PublicUser } from "@/lib/types";

export function ListingForm({ user }: { user: PublicUser }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [offerType, setOfferType] = useState("sell");
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const form = new FormData(event.currentTarget);
    fetch("/api/events", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: "listing_create_start" }) }).catch(() => undefined);
    const res = await fetch("/api/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: form.get("title"),
        description: form.get("description"),
        category: form.get("category"),
        offerType: form.get("offerType"),
        price: form.get("price"),
        quantity: form.get("quantity"),
        city: form.get("city"),
        region: form.get("region"),
        postalCode: form.get("postalCode"),
        pickupArea: form.get("pickupArea"),
        photos: String(form.get("photo") || "").trim() ? [String(form.get("photo")).trim()] : [],
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(data.error || "Could not post.");
      setBusy(false);
      return;
    }
    router.push(`/l/${data.listing.slug}`);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-5">
      {error ? <p role="alert" className="rounded-xl bg-linen px-3 py-2 text-sm font-bold">{error}</p> : null}
      <label className="grid gap-1 text-sm font-bold">What are you posting?<input name="title" required minLength={3} className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" placeholder="Roma tomatoes" /></label>
      <label className="grid gap-1 text-sm font-bold">Description<textarea name="description" required minLength={8} className="min-h-28 rounded-xl border border-borderwarm px-3 py-2 font-normal" placeholder="What it is, condition, harvest date, or anything a neighbor should know." /></label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-bold">Category<select name="category" className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" defaultValue="produce">{CATEGORIES.map((c) => <option key={c.slug} value={c.slug}>{c.label}</option>)}</select></label>
        <label className="grid gap-1 text-sm font-bold">Listing type<select name="offerType" className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" value={offerType} onChange={(e) => setOfferType(e.target.value)}>{OFFER_TYPES.map((o) => <option key={o.slug} value={o.slug}>{o.label}</option>)}</select></label>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {offerType === "sell" ? <label className="grid gap-1 text-sm font-bold">Price<input name="price" type="number" min="0" step="0.01" required className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" placeholder="5.00" /></label> : null}
        <label className="grid gap-1 text-sm font-bold">Quantity <span className="font-normal text-muted">(optional)</span><input name="quantity" className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" placeholder="6 plants, 2 dozen, 1 bag" /></label>
      </div>
      <fieldset className="grid gap-3 rounded-2xl border border-borderwarm p-4">
        <legend className="px-1 text-sm font-bold">Pickup area</legend>
        <p className="text-sm text-muted">Use a general area only. Do not post your street address.</p>
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="grid gap-1 text-sm font-bold sm:col-span-1">City<input name="city" required defaultValue={user.city} autoComplete="address-level2" className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" /></label>
          <label className="grid gap-1 text-sm font-bold">State / region<input name="region" required defaultValue={user.region} autoComplete="address-level1" className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" /></label>
          <label className="grid gap-1 text-sm font-bold">ZIP <span className="font-normal text-muted">(optional)</span><input name="postalCode" defaultValue={user.postalCode} autoComplete="postal-code" inputMode="numeric" className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" /></label>
        </div>
        <label className="grid gap-1 text-sm font-bold">Pickup note <span className="font-normal text-muted">(optional)</span><input name="pickupArea" className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" placeholder="Near downtown, west side, public meetup preferred" /></label>
      </fieldset>
      <details className="rounded-2xl border border-borderwarm p-4">
        <summary className="focus-ring cursor-pointer rounded-lg font-bold">Already have a hosted photo link?</summary>
        <label className="mt-3 grid gap-1 text-sm font-bold">Photo URL <span className="font-normal text-muted">(optional)</span><input name="photo" type="url" inputMode="url" className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" placeholder="https://…" /><span className="text-xs font-normal text-muted">Use a direct HTTPS image link. Normal photo uploads require durable image storage and are not enabled yet.</span></label>
      </details>
      <button className="focus-ring min-h-12 rounded-xl bg-garden font-bold text-white disabled:opacity-60" type="submit" disabled={busy}>{busy ? "Publishing…" : "Publish listing"}</button>
    </form>
  );
}
