"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AuthForm({ mode, next }: { mode: "login" | "signup"; next: string }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/account";
  const encodedNext = encodeURIComponent(safeNext);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: mode, email: form.get("email"), password: form.get("password"), displayName: form.get("displayName"), city: form.get("city"), region: form.get("region"), postalCode: form.get("postalCode") }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(data.error || "Could not continue.");
      setBusy(false);
      return;
    }
    router.push(safeNext);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      {error ? <p role="alert" className="rounded-xl bg-linen px-3 py-2 text-sm font-bold">{error}</p> : null}
      {mode === "signup" ? <label className="grid gap-1 text-sm font-bold">Display name<input name="displayName" required autoComplete="name" className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" placeholder="Mason T." /></label> : null}
      <label className="grid gap-1 text-sm font-bold">Email<input name="email" type="email" required autoComplete="email" className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" placeholder="you@example.com" /></label>
      <label className="grid gap-1 text-sm font-bold">Password<input name="password" type="password" required minLength={8} autoComplete={mode === "signup" ? "new-password" : "current-password"} className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" placeholder="8+ characters" /></label>
      {mode === "signup" ? (
        <fieldset className="grid gap-3 rounded-2xl border border-borderwarm p-4">
          <legend className="px-1 text-sm font-bold">Your general area <span className="font-normal text-muted">(optional)</span></legend>
          <p className="text-sm text-muted">This helps prefill future listings. Never enter a street address.</p>
          <label className="grid gap-1 text-sm font-bold">City<input name="city" autoComplete="address-level2" className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" /></label>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="grid gap-1 text-sm font-bold">State / region<input name="region" autoComplete="address-level1" className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" /></label>
            <label className="grid gap-1 text-sm font-bold">ZIP<input name="postalCode" autoComplete="postal-code" inputMode="numeric" className="min-h-12 rounded-xl border border-borderwarm px-3 font-normal" /></label>
          </div>
        </fieldset>
      ) : null}
      <button className="focus-ring min-h-12 rounded-xl bg-garden font-bold text-white disabled:opacity-60" type="submit" disabled={busy}>{busy ? "Working…" : mode === "signup" ? "Create account" : "Sign in"}</button>
      {mode === "signup" ? <p className="text-sm">Already have an account? <Link className="underline" href={`/login?next=${encodedNext}`}>Sign in</Link></p> : <p className="text-sm">New here? <Link className="underline" href={`/login?mode=signup&next=${encodedNext}`}>Create an account</Link></p>}
    </form>
  );
}
