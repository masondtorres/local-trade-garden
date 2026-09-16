import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "FAQ | Local Trade Garden",
  description: "Answers about posting, payments, pickup, safety and empty listings on Local Trade Garden.",
  alternates: { canonical: "/faq" },
};

export default function Page() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="font-display text-4xl font-bold">FAQ</h1>
        <div className="mt-6 grid gap-6 leading-7">
          <section><h2 className="font-display text-2xl font-bold">What is Local Trade Garden?</h2><p className="mt-2">A local board for selling, trading or giving away garden goods such as produce, plants, seeds, eggs, honey, flowers, herbs, tools and supplies.</p></section>
          <section><h2 className="font-display text-2xl font-bold">Is it free?</h2><p className="mt-2">Yes. Ordinary browsing and posting are free. Local Trade Garden does not take a transaction fee.</p></section>
          <section><h2 className="font-display text-2xl font-bold">Does the site take payment?</h2><p className="mt-2">No. There is no checkout. Buyers and sellers make their own arrangements directly.</p></section>
          <section><h2 className="font-display text-2xl font-bold">Why are some pages empty?</h2><p className="mt-2">An empty category or search means nobody has posted a matching active listing yet. The site does not create fake inventory.</p></section>
          <section><h2 className="font-display text-2xl font-bold">Should I post my home address?</h2><p className="mt-2">No. Use a general pickup area only. Read the <Link className="font-bold underline" href="/safety">safety guidance</Link> before meeting someone.</p></section>
          <section><h2 className="font-display text-2xl font-bold">What can I post?</h2><p className="mt-2">Use the <Link className="font-bold underline" href="/guidelines">posting guidelines</Link> for the current allowed and prohibited categories. Local law still controls whether an item may legally be sold or exchanged.</p></section>
        </div>
      </section>
    </SiteShell>
  );
}
