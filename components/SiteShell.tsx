import Link from "next/link";
import { Flower2, Menu } from "lucide-react";
import { ButtonLink } from "@/components/Buttons";
import { appStatus, email, footerLinks, navLinks } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-soil/15 bg-linen/95 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex min-h-11 items-center gap-2 rounded-full">
          <span className="flex size-10 items-center justify-center rounded-full bg-sunflower text-deep shadow-card">
            <Flower2 aria-hidden="true" size={22} />
          </span>
          <span className="font-display text-base font-bold text-deep sm:text-lg">
            Local Trade Garden
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-bold text-charcoal xl:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring rounded-full hover:text-deep">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden xl:block">
          <ButtonLink href="/early-access">Join Early Access</ButtonLink>
        </div>
        <details className="relative xl:hidden">
          <summary className="focus-ring flex min-h-11 list-none items-center gap-2 rounded-full border border-soil/15 bg-card px-4 text-sm font-bold text-deep shadow-card">
            <Menu aria-hidden="true" size={18} />
            Menu
          </summary>
          <nav className="absolute right-0 mt-3 grid w-[min(20rem,calc(100vw-2rem))] gap-2 rounded-2xl border border-borderwarm bg-card p-3 shadow-soft" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="focus-ring min-h-11 rounded-xl px-3 py-3 font-bold hover:bg-cream">
                {link.label}
              </Link>
            ))}
            <Link href="/early-access" className="focus-ring min-h-11 rounded-xl bg-garden px-3 py-3 text-center font-black text-white">
              Join Early Access
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-borderwarm bg-card px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="font-display flex items-center gap-2 text-xl font-bold text-deep">
            <Flower2 aria-hidden="true" className="text-sunflower" />
            Local Trade Garden
          </div>
          <p className="mt-3 font-bold text-charcoal">If you made it, you can trade it.</p>
          <p className="mt-3 text-sm font-black text-deep">Status: {appStatus}</p>
          <p className="mt-2 text-sm font-bold text-charcoal">
            Contact:{" "}
            <a className="focus-ring rounded-md text-deep underline decoration-soil/30 underline-offset-4" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            Local Trade Garden is a connection platform for local trades. It is not
            a seller, food vendor, inspector, legal advisor or guarantor of any trade.
          </p>
          <p className="mt-4 text-sm text-muted">&copy; 2026 Local Trade Garden. All rights reserved.</p>
        </div>
        <nav className="grid gap-2 sm:grid-cols-2" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring min-h-11 rounded-xl px-2 py-2 text-sm font-bold text-charcoal hover:bg-cream">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
