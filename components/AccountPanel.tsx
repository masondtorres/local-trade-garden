"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatPrice } from "@/lib/utils";
import type { Listing, Message } from "@/lib/types";

export function AccountPanel({ user, listings, saved, inbox }: { user: { id: string; displayName: string; city: string; region: string; postalCode: string }; listings: Listing[]; saved: Listing[]; inbox: Message[] }) {
  const router = useRouter();
  const [notice, setNotice] = useState("");

  async function setStatus(id: string, status: string) {
    setNotice("");
    const res = await fetch(`/api/listings/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }) });
    if (!res.ok) { setNotice("Could not update that listing. Try again."); return; }
    router.refresh();
  }

  async function remove(id: string, title: string) {
    if (!window.confirm(`Delete “${title}”? This cannot be undone.`)) return;
    setNotice("");
    const res = await fetch(`/api/listings/${id}`, { method: "DELETE" });
    if (!res.ok) { setNotice("Could not delete that listing. Try again."); return; }
    router.refresh();
  }

  async function logout() {
    await fetch("/api/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "logout" }) });
    router.push("/");
    router.refresh();
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="flex items-start justify-between gap-3">
        <div><h1 className="font-display text-3xl font-bold">{user.displayName}</h1><p className="text-sm text-muted">{user.city} {user.region} {user.postalCode}</p></div>
        <button className="focus-ring min-h-11 rounded-xl border px-4 font-bold" onClick={logout} type="button">Sign out</button>
      </div>
      {notice ? <p role="status" className="mt-4 rounded-xl bg-linen px-3 py-2 text-sm font-bold">{notice}</p> : null}
      <p className="mt-4"><Link className="font-bold underline" href="/sell">Post a listing</Link></p>
      <h2 className="mt-8 font-display text-2xl font-bold">Your listings</h2>
      {listings.length ? <ul className="mt-3 grid gap-3">{listings.map((listing) => <li key={listing.id} className="rounded-2xl border border-borderwarm bg-card p-4"><Link className="font-bold" href={`/l/${listing.slug}`}>{listing.title}</Link><p className="text-sm">{formatPrice(listing.offerType, listing.price)} · {listing.status}</p><div className="mt-2 flex flex-wrap gap-2"><button className="rounded-lg border px-3 py-2 text-sm" onClick={() => setStatus(listing.id, "sold")} type="button">Sold</button><button className="rounded-lg border px-3 py-2 text-sm" onClick={() => setStatus(listing.id, "unavailable")} type="button">Unavailable</button><button className="rounded-lg border px-3 py-2 text-sm" onClick={() => setStatus(listing.id, "active")} type="button">Reopen</button><button className="rounded-lg border px-3 py-2 text-sm" onClick={() => remove(listing.id, listing.title)} type="button">Delete</button></div></li>)}</ul> : <p className="mt-2 text-muted">You have not posted anything yet.</p>}
      <h2 className="mt-8 font-display text-2xl font-bold">Saved</h2>
      {saved.length ? <ul className="mt-3 grid gap-2">{saved.map((listing) => <li key={listing.id}><Link className="underline" href={`/l/${listing.slug}`}>{listing.title}</Link></li>)}</ul> : <p className="mt-2 text-muted">No saved listings.</p>}
      <h2 className="mt-8 font-display text-2xl font-bold">Messages</h2>
      {inbox.length ? <ul className="mt-3 grid gap-3">{inbox.map((m) => <li key={m.id} className="rounded-xl border p-3 text-sm"><p className="font-bold">{m.fromName} · {m.fromEmail}</p><p className="mt-1">{m.body}</p></li>)}</ul> : <p className="mt-2 text-muted">No messages yet.</p>}
    </section>
  );
}
