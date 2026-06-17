import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Carrot,
  Hammer,
  Handshake,
  Package,
  Wheat,
} from "lucide-react";
import { JsonLd } from "@/components/PageBlocks";
import { HomeSiteShell } from "@/components/SiteShell";
import { siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Local Trade Garden | Trade What You Grow, Make, Fix or Can Do",
  description:
    "A peer-to-peer barter board for Sevier County, Knox County and nearby East Tennessee neighbors.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Local Trade Garden | Trade What You Grow, Make, Fix or Can Do",
    description:
      "A peer-to-peer barter board for Sevier County, Knox County and nearby East Tennessee neighbors.",
    url: "/",
  },
};

const utilities = [
  {
    title: "Garden & Plants",
    body: "Trade produce, seeds, starts, plants and garden extras.",
    href: "/food-and-garden",
    icon: Carrot,
    accentClass: "category-food",
  },
  {
    title: "Fresh Eggs & Honey",
    body: "Connect over lawful local food and farm goods where rules allow.",
    href: "/what-you-can-trade",
    icon: Wheat,
    accentClass: "category-food",
  },
  {
    title: "Tools & Repairs",
    body: "Trade tool help, sharpening, repairs, equipment use or fix-it skills.",
    href: "/repairs-and-tools",
    icon: Hammer,
    accentClass: "category-repairs",
  },
  {
    title: "Skills & Labor",
    body: "Trade lessons, local help, yard work, tutoring or practical know-how.",
    href: "/skills-and-lessons",
    icon: BookOpen,
    accentClass: "category-skills",
  },
  {
    title: "Handmade Goods",
    body: "Trade soaps, crafts, sewn goods, baked goods and useful handmade items.",
    href: "/handmade-goods",
    icon: Package,
    accentClass: "category-handmade",
  },
  {
    title: "Lawful Farm Goods",
    body: "Post farm and homestead goods only where lawful and properly handled.",
    href: "/what-you-can-trade",
    icon: Handshake,
    accentClass: "category-partners",
  },
];

export default function HomePage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Local Trade Garden",
    url: siteUrl,
    description:
      "A peer-to-peer barter board for Sevier County, Knox County and nearby East Tennessee neighbors.",
    isPartOf: {
      "@type": "WebSite",
      name: "Local Trade Garden",
      url: siteUrl,
    },
  };

  return (
    <HomeSiteShell>
      <JsonLd data={webPageSchema} />

      <section className="home-hero border-b border-borderwarm px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="home-hero-panel mx-auto max-w-5xl rounded-2xl p-6 text-center sm:p-10">
          <h1 className="font-display text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            Trade what you grow, make, fix or can do.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Local Trade Garden is a peer-to-peer barter board for Sevier County, Knox County and nearby East Tennessee. Post a trade, find neighbors nearby and handle your own deal.
          </p>
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <Link
              href="/early-access"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-xl bg-garden px-6 py-3 font-bold text-white transition hover:bg-deep"
            >
              Join Early Access
            </Link>
            <Link
              href="/what-you-can-trade"
              className="secondary-copper focus-ring inline-flex min-h-12 items-center justify-center rounded-xl border-2 bg-card px-6 py-3 font-bold transition"
            >
              See What You Can Trade
            </Link>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-bold leading-6 text-charcoal">
            No checkout. No middleman. No guarantee. Users are responsible for lawful, safe trades.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-label="Trade options">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {utilities.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`category-card focus-ring group min-h-48 rounded-2xl border border-borderwarm bg-card p-6 shadow-card transition hover:border-garden hover:bg-white hover:shadow-soft ${item.accentClass}`}
              >
                <span className="category-chip" aria-hidden="true" />
                <span className="category-icon flex size-11 items-center justify-center rounded-xl bg-linen text-deep transition group-hover:bg-garden group-hover:text-white">
                  <Icon aria-hidden="true" size={23} />
                </span>
                <h2 className="mt-5 text-xl font-bold text-charcoal">{item.title}</h2>
                <p className="mt-2 leading-7 text-muted">{item.body}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-borderwarm px-4 py-10 sm:px-6 lg:px-8">
        <div className="before-trade-panel mx-auto max-w-6xl rounded-2xl p-5 sm:p-7">
          <h2 className="font-display text-2xl font-bold text-charcoal">Before you trade</h2>
          <nav className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap" aria-label="Before you trade">
            <Link className="before-trade-link before-trade-safety focus-ring min-h-11 rounded-xl border px-4 py-3 font-bold" href="/safety">
              Safety rules
            </Link>
            <Link className="before-trade-link before-trade-trade focus-ring min-h-11 rounded-xl border px-4 py-3 font-bold" href="/what-you-can-trade">
              What you can trade
            </Link>
            <Link className="before-trade-link before-trade-pilot focus-ring min-h-11 rounded-xl border px-4 py-3 font-bold" href="/pricing">
              Pricing
            </Link>
          </nav>
        </div>
      </section>
    </HomeSiteShell>
  );
}
