import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
export const metadata: Metadata = { title: "FAQ | Local Trade Garden" };
export default function Page() {
  return (<SiteShell><section className="mx-auto max-w-3xl px-4 py-10"><h1 className="font-display text-4xl font-bold">FAQ</h1><p className="mt-4 leading-7">This is a local board for selling, trading or giving away garden goods. There is no checkout. Empty pages mean nobody has posted yet.</p></section></SiteShell>);
}
