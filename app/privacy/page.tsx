import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
export const metadata: Metadata = { title: "Privacy | Local Trade Garden" };
export default function Page() {
  return (<SiteShell><section className="mx-auto max-w-3xl px-4 py-10"><h1 className="font-display text-4xl font-bold">Privacy</h1><p className="mt-4 leading-7">We collect account details, listings, seller messages, reports and basic event logs. We do not sell that information. Email stays private unless you send it to a seller.</p></section></SiteShell>);
}
