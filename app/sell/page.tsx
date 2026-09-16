import type { Metadata } from "next";
import Link from "next/link";
import { ListingForm } from "@/components/ListingForm";
import { SiteShell } from "@/components/SiteShell";
import { currentUser, toPublicUser } from "@/lib/auth";
export const metadata: Metadata = { title: "Post a listing | Local Trade Garden", robots: { index: false }, alternates: { canonical: "/sell" } };
export default async function SellPage() {
  const user = await currentUser();
  return (<SiteShell><section className="mx-auto max-w-xl px-4 py-8 sm:px-6"><h1 className="font-display text-3xl font-bold">Post a listing</h1><p className="mt-2 text-muted">Keep exact addresses off the listing.</p>{user ? <ListingForm user={toPublicUser(user)} /> : <p className="mt-6"><Link className="font-bold underline" href="/login?next=/sell">Sign in</Link> or <Link className="font-bold underline" href="/login?mode=signup&next=/sell">create an account</Link> to post.</p>}</section></SiteShell>);
}
