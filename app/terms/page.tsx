import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
export const metadata: Metadata = { title: "Terms | Local Trade Garden" };
export default function Page() {
  return (<SiteShell><section className="mx-auto max-w-3xl px-4 py-10"><h1 className="font-display text-4xl font-bold">Terms</h1><p className="mt-4 leading-7">Users are responsible for listings, meetings and the law. Local Trade Garden does not inspect, approve, broker, sell, ship, store, guarantee or participate in transactions. We may remove listings that appear to break the rules.</p></section></SiteShell>);
}
