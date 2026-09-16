import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";
import { SiteShell } from "@/components/SiteShell";
export const metadata: Metadata = { title: "Sign in | Local Trade Garden", robots: { index: false } };
export default async function LoginPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams; const mode = String(sp.mode ?? "login"); const next = String(sp.next ?? "/account");
  return (<SiteShell><section className="mx-auto max-w-md px-4 py-10"><h1 className="font-display text-3xl font-bold">{mode === "signup" ? "Create an account" : "Sign in"}</h1><AuthForm mode={mode === "signup" ? "signup" : "login"} next={next} /></section></SiteShell>);
}
