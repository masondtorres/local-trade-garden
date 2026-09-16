import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
export const metadata: Metadata = { title: "Safety | Local Trade Garden" };
export default function Page() {
  return (<SiteShell><section className="mx-auto max-w-3xl px-4 py-10"><h1 className="font-display text-4xl font-bold">Safety</h1><p className="mt-4 leading-7">Meet in public. Inspect goods. Do not wire money or use gift cards. Do not publish a home address. Local Trade Garden does not verify people or food safety.</p></section></SiteShell>);
}
