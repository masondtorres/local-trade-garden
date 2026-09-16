import Link from "next/link";
import { Flower2, Menu } from "lucide-react";
import { email, footerLinks, navLinks, promiseLine } from "@/content/site";

export function Header() {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-borderwarm px-4 py-3 backdrop-blur sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <Link href="/" className="focus-ring flex min-h-11 items-center gap-2 rounded-full">
          <span className="flex size-10 items-center justify-center rounded-full bg-garden text-white">
            <Flower2 aria-hidden="true" size={20} />
          </span>
          <span className="font-display text-base font-bold text-garden sm:text-lg">Local Trade Garden</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-bold md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring rounded-full py-2 hover:text-garden">{link.label}</Link>
          ))}
          <Link href="/account" className="focus-ring rounded-full py-2 hover:text-garden">Account</Link>
          <Link href="/sell" className="focus-ring rounded-full bg-garden px-4 py-2 text-white">Post</Link>
        </nav>
        <details className="relative md:hidden">
          <summary className="focus-ring flex min-h-11 list-none items-center gap-2 rounded-full border border-borderwarm bg-card px-4 text-sm font-bold">
            <Menu size={18} aria-hidden="true" />Menu
          </summary>
          <nav className="absolute right-0 mt-3 grid w-56 gap-1 rounded-2xl border border-borderwarm bg-card p-3 shadow-soft">
            {[...navLinks, { href: "/account", label: "Account" }, { href: "/login", label: "Sign in" }].map((link) => (
              <Link key={link.href} href={link.href} className="focus-ring min-h-11 rounded-xl px-3 py-3 font-bold">{link.label}</Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-borderwarm bg-card px-4 py-10 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="font-display text-xl font-bold text-deep">Local Trade Garden</p>
          <p className="mt-2 font-bold">{promiseLine}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">A simple local board for garden goods. No checkout. No guarantee.</p>
          <p className="mt-3 text-sm"><a className="underline" href={`mailto:${email}`}>{email}</a></p>
          <p className="mt-4 text-sm text-muted">© 2026 Local Trade Garden</p>
        </div>
        <nav className="grid gap-2 sm:grid-cols-2">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring min-h-11 rounded-xl px-2 py-2 text-sm font-bold">{link.label}</Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (<><Header /><main>{children}</main><Footer /></>);
}

export const HomeSiteShell = SiteShell;
