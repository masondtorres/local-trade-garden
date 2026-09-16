import type { Metadata } from "next";
import Link from "next/link";
import { AccountPanel } from "@/components/AccountPanel";
import { SiteShell } from "@/components/SiteShell";
import { currentUser } from "@/lib/auth";
import { loadStore } from "@/lib/store";
export const metadata: Metadata = { title: "Account | Local Trade Garden", robots: { index: false } };
export default async function AccountPage() {
  const user = await currentUser();
  if (!user) return (<SiteShell><section className="mx-auto max-w-lg px-4 py-12"><h1 className="font-display text-3xl font-bold">Account</h1><p className="mt-3"><Link className="font-bold underline" href="/login">Sign in</Link> to manage listings.</p></section></SiteShell>);
  const store = await loadStore();
  const listings = store.listings.filter((l) => l.sellerId === user.id);
  const savedIds = new Set(store.favorites[user.id] ?? []);
  const saved = store.listings.filter((l) => savedIds.has(l.id));
  const inbox = store.messages.filter((m) => listings.some((l) => l.id === m.listingId));
  return <SiteShell><AccountPanel user={{ id: user.id, displayName: user.displayName, city: user.city, region: user.region, postalCode: user.postalCode }} listings={listings} saved={saved} inbox={inbox} /></SiteShell>;
}
