import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Pricing | Local Trade Garden",
  description: "Local Trade Garden is free for ordinary browsing and posting.",
  alternates: { canonical: "/pricing" },
};

export default function Page() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="font-display text-4xl font-bold">Pricing</h1>
        <p className="mt-4 text-xl font-bold">Free to browse. Free to post.</p>
        <p className="mt-3 leading-7">Local Trade Garden does not run checkout and does not take a transaction fee. Buyers, sellers and traders make their own arrangements directly.</p>
        <p className="mt-5"><Link className="font-bold underline" href="/browse">Browse listings</Link> or <Link className="font-bold underline" href="/sell">post something</Link>.</p>
      </section>
    </SiteShell>
  );
}
