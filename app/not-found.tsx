import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
export default function NotFound() {
  return (<SiteShell><section className="mx-auto max-w-lg px-4 py-16 text-center"><h1 className="font-display text-4xl font-bold">Page not found</h1><p className="mt-3 text-muted">That page is gone or never existed.</p><Link href="/" className="focus-ring mt-6 inline-flex min-h-12 items-center rounded-xl bg-garden px-5 font-bold text-white">Go home</Link></section></SiteShell>);
}
