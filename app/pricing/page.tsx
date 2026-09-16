import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
export const metadata: Metadata = { title: "Pricing | Local Trade Garden" };
export default function Page() {
  return (<SiteShell><section className="mx-auto max-w-3xl px-4 py-10"><h1 className="font-display text-4xl font-bold">Pricing</h1><p className="mt-4 leading-7">Ordinary posting and browsing is free. Featured listings and business profiles can be added later without blocking the board.</p></section></SiteShell>);
}
