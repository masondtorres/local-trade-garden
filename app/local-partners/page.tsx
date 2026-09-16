import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
export const metadata: Metadata = { title: "Local partners | Local Trade Garden" };
export default function Page() {
  return (<SiteShell><section className="mx-auto max-w-3xl px-4 py-10"><h1 className="font-display text-4xl font-bold">Local partners</h1><p className="mt-4 leading-7">Nurseries, farms and markets can later have public profiles. Email masondtorres@duck.com if you want in.</p></section></SiteShell>);
}
