import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
export const metadata: Metadata = { title: "Guidelines | Local Trade Garden" };
export default function Page() {
  return (<SiteShell><section className="mx-auto max-w-3xl px-4 py-10"><h1 className="font-display text-4xl font-bold">Guidelines</h1><p className="mt-4 leading-7">Post produce, plants, seeds, eggs, honey, flowers, herbs, supplies, tools, compost and other garden goods. Firearms, alcohol, raw milk and illegal items stay off the board. Posting something does not make it legal to sell. Keep street addresses off public listings.</p></section></SiteShell>);
}
