"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export function AuthForm({ mode, next }: { mode: "login" | "signup"; next: string }) {
  const router = useRouter(); const [error, setError] = useState("");
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = new FormData(event.currentTarget);
    const res = await fetch("/api/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: mode, email: form.get("email"), password: form.get("password"), displayName: form.get("displayName"), city: form.get("city"), region: form.get("region"), postalCode: form.get("postalCode") }) });
    const data = await res.json(); if (!res.ok) { setError(data.error || "Could not continue."); return; } router.push(next || "/account"); router.refresh();
  }
  return (<form onSubmit={onSubmit} className="mt-6 grid gap-3">{error ? <p className="rounded-xl bg-linen px-3 py-2 text-sm font-bold">{error}</p> : null}{mode === "signup" ? <input name="displayName" required className="min-h-12 rounded-xl border px-3" placeholder="Display name" /> : null}<input name="email" type="email" required className="min-h-12 rounded-xl border px-3" placeholder="Email" /><input name="password" type="password" required minLength={8} className="min-h-12 rounded-xl border px-3" placeholder="Password, 8+ characters" />{mode === "signup" ? (<><input name="city" className="min-h-12 rounded-xl border px-3" placeholder="City" /><input name="region" defaultValue="TN" className="min-h-12 rounded-xl border px-3" placeholder="State" /><input name="postalCode" className="min-h-12 rounded-xl border px-3" placeholder="ZIP" /></>) : null}<button className="focus-ring min-h-12 rounded-xl bg-garden font-bold text-white" type="submit">{mode === "signup" ? "Create account" : "Sign in"}</button>{mode === "signup" ? <p className="text-sm">Already have an account? <Link className="underline" href="/login">Sign in</Link></p> : <p className="text-sm">New here? <Link className="underline" href="/login?mode=signup">Create an account</Link></p>}</form>);
}
