import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "How it works | Local Trade Garden",
  description: "How to browse, post and arrange local garden-goods exchanges on Local Trade Garden.",
  alternates: { canonical: "/how-it-works" },
};

export default function Page() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="font-display text-4xl font-bold">How it works</h1>
        <div className="mt-6 grid gap-5 leading-7">
          <section><h2 className="font-display text-2xl font-bold">1. Find something local</h2><p className="mt-2">Search by item, city or ZIP, then narrow by category or listing type. Empty results mean no neighbor has posted a matching item yet.</p></section>
          <section><h2 className="font-display text-2xl font-bold">2. Contact the seller</h2><p className="mt-2">Open a listing and send a message. The message goes to the seller&apos;s Local Trade Garden inbox. The site does not expose a home address or handle payment.</p></section>
          <section><h2 className="font-display text-2xl font-bold">3. Make the exchange directly</h2><p className="mt-2">Agree on the details with the other person, inspect the goods, and meet in a sensible public place when practical. Local Trade Garden does not broker, guarantee or become part of the deal.</p></section>
          <section><h2 className="font-display text-2xl font-bold">Posting is free</h2><p className="mt-2">Ordinary browsing and posting are free. There is no checkout and no transaction fee.</p></section>
        </div>
      </section>
    </SiteShell>
  );
}
