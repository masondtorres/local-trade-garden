import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
export const metadata: Metadata = { title: "How it works | Local Trade Garden" };
export default function Page() {
  return (<SiteShell><section className="mx-auto max-w-3xl px-4 py-10"><h1 className="font-display text-4xl font-bold">How it works</h1><p className="mt-4 leading-7">Search near you, open a listing, contact the seller, and meet in a sensible public place. The site does not take payment or become part of the deal.</p></section></SiteShell>);
}
