"use client";
import { useState } from "react";

export function ListingActions({ listingId, slug, title, sellerId }: { listingId: string; slug: string; title: string; sellerId: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reason, setReason] = useState("spam");
  const [reportDetails, setReportDetails] = useState("");
  const [notice, setNotice] = useState("");

  async function contact(e: React.FormEvent) {
    e.preventDefault();
    setNotice("");
    const res = await fetch("/api/contact-seller", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ listingId, fromName: name, fromEmail: email, body: message }) });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) { setNotice(data.error || "Could not send your message. Try again."); return; }
    setMessage("");
    setNotice(data.notice || "Message sent to the seller's inbox.");
  }

  async function save() {
    setNotice("");
    const res = await fetch("/api/favorites", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ listingId }) });
    setNotice(res.ok ? "Saved to your account." : "Sign in to save listings.");
  }

  async function share() {
    const url = `${window.location.origin}/l/${slug}`;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        setNotice("Share opened.");
      } else {
        await navigator.clipboard.writeText(url);
        setNotice("Listing link copied.");
      }
      fetch("/api/events", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: "listing_share", meta: listingId }) }).catch(() => undefined);
    } catch {
      setNotice("Share canceled or unavailable.");
    }
  }

  async function report(e: React.FormEvent) {
    e.preventDefault();
    setNotice("");
    const res = await fetch("/api/report", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ listingId, userId: sellerId, reason, details: reportDetails }) });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) { setNotice(data.error || "Could not submit the report. Try again."); return; }
    setReportDetails("");
    setNotice("Report received.");
  }

  return (
    <div className="mt-8 grid gap-6">
      {notice ? <p role="status" aria-live="polite" className="rounded-xl bg-linen px-4 py-3 text-sm font-bold">{notice}</p> : null}
      <div className="flex flex-wrap gap-2"><button className="focus-ring min-h-11 rounded-xl border px-4 font-bold" onClick={save} type="button">Save</button><button className="focus-ring min-h-11 rounded-xl border px-4 font-bold" onClick={share} type="button">Share</button></div>
      <form onSubmit={contact} className="grid gap-3 rounded-2xl border border-borderwarm bg-card p-4">
        <h2 className="font-bold">Contact seller</h2>
        <p className="text-sm text-muted">Your message is saved in the seller's Local Trade Garden inbox. Meet in public and do not send money to strangers.</p>
        <label className="grid gap-1 text-sm font-bold">Your name<input className="min-h-12 rounded-xl border px-3 font-normal" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required /></label>
        <label className="grid gap-1 text-sm font-bold">Your email<input className="min-h-12 rounded-xl border px-3 font-normal" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required /></label>
        <label className="grid gap-1 text-sm font-bold">Message<textarea className="min-h-28 rounded-xl border px-3 py-2 font-normal" placeholder="When can you pick this up?" value={message} onChange={(e) => setMessage(e.target.value)} required /></label>
        <button className="focus-ring min-h-12 rounded-xl bg-garden font-bold text-white" type="submit">Send message</button>
      </form>
      <form onSubmit={report} className="grid gap-3 rounded-2xl border border-borderwarm p-4 text-sm">
        <h2 className="font-bold">Report listing</h2>
        <label className="grid gap-1 font-bold">Reason<select className="min-h-11 rounded-xl border px-3 font-normal" value={reason} onChange={(e) => setReason(e.target.value)}><option value="spam">Spam or scam</option><option value="prohibited">Prohibited item</option><option value="unsafe">Unsafe or misleading</option></select></label>
        <label className="grid gap-1 font-bold">Details <span className="font-normal text-muted">(optional)</span><textarea className="min-h-24 rounded-xl border px-3 py-2 font-normal" value={reportDetails} onChange={(e) => setReportDetails(e.target.value)} placeholder="What should we know?" /></label>
        <button className="focus-ring min-h-11 rounded-xl border px-4 font-bold" type="submit">Submit report</button>
      </form>
    </div>
  );
}
