import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  Flower2,
  Mail,
  Menu,
  Sprout,
} from "lucide-react";
import { ButtonLink } from "@/components/Buttons";
import { EarlyAccessForm } from "@/components/Forms";
import {
  builtSafety,
  email,
  faq,
  navLinks,
  partnerCards,
  plannedSafety,
  restrictedItems,
  steps,
  tradeItems,
} from "@/content/site";

const sampleListings = [
  {
    have: "Heirloom tomatoes",
    wants: "Eggs or basil starts",
    area: "East Nashville",
    handoff: "Public meetup",
    status: "Sample listing",
  },
  {
    have: "Basil starts",
    wants: "Compost",
    area: "Madison",
    handoff: "Porch pickup, general area only",
    status: "Early access example",
  },
  {
    have: "Seed packets",
    wants: "Garden tools",
    area: "Nashville",
    handoff: "Public meetup",
    status: "Pilot example",
  },
  {
    have: "Compost bags",
    wants: "Tomatoes or herbs",
    area: "Madison",
    handoff: "Meetup arranged by users",
    status: "Sample listing",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-soil/20 bg-linen/95 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex min-h-11 items-center gap-2 rounded-full">
          <span className="flex size-10 items-center justify-center rounded-full bg-sunflower text-deep">
            <Flower2 aria-hidden="true" size={22} />
          </span>
          <span className="font-display text-lg font-bold text-deep">Local Trade Garden</span>
        </Link>
        <nav className="hidden items-center gap-6 text-base font-bold text-charcoal lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring rounded-full hover:text-deep">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="#early-access">Join the First Local List</ButtonLink>
        </div>
        <details className="relative lg:hidden">
          <summary className="focus-ring flex min-h-11 list-none items-center gap-2 rounded-full border border-soil/20 bg-card px-4 text-sm font-bold text-deep">
            <Menu aria-hidden="true" size={18} />
            Menu
          </summary>
          <nav className="absolute right-0 mt-3 grid w-[min(18rem,calc(100vw-2rem))] gap-2 rounded-2xl border border-soil/20 bg-card p-3 shadow-card" aria-label="Mobile navigation">
            <Link href="#early-access" className="focus-ring min-h-11 rounded-xl bg-garden px-3 py-3 text-center font-black text-white">
              Join the First Local List
            </Link>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="focus-ring min-h-11 rounded-xl px-3 py-3 font-bold hover:bg-linen">
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

function ListingPin({
  listing,
  compact = false,
}: {
  listing: (typeof sampleListings)[number];
  compact?: boolean;
}) {
  return (
    <article className={`paper-panel relative border-2 border-soil/20 p-4 shadow-[4px_4px_0_rgba(110,76,47,0.12)] ${compact ? "rounded-sm" : "rounded-sm"}`}>
      <span className="absolute -top-2 left-5 h-4 w-10 rotate-[-2deg] bg-sunflower/70" aria-hidden="true" />
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.12em] text-tomato">Have</p>
          <h3 className="font-display mt-1 text-xl font-bold leading-tight text-charcoal">{listing.have}</h3>
        </div>
        <span className="shrink-0 border border-soil/20 bg-linen px-2 py-1 text-xs font-black text-deep">
          {listing.status}
        </span>
      </div>
      <dl className="mt-4 grid gap-2 text-base leading-6">
        <div>
          <dt className="inline font-black text-deep">Wants: </dt>
          <dd className="inline text-charcoal">{listing.wants}</dd>
        </div>
        <div>
          <dt className="inline font-black text-deep">Area: </dt>
          <dd className="inline text-charcoal">{listing.area}</dd>
        </div>
        <div>
          <dt className="inline font-black text-deep">Handoff: </dt>
          <dd className="inline text-charcoal">{listing.handoff}</dd>
        </div>
      </dl>
    </article>
  );
}

function HeroBoard() {
  return (
    <aside className="market-line rounded-[28px] p-2" aria-label="Sample local trade board">
      <div className="board-panel rounded-[22px] border border-soil/25 p-4">
        <div className="flex items-start justify-between gap-4 border-b border-soil/20 pb-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-tomato">Example board</p>
            <h2 className="font-display mt-1 text-3xl font-bold text-deep">Today near Nashville</h2>
          </div>
          <ClipboardList aria-hidden="true" className="mt-1 text-soil" />
        </div>
        <div className="mt-4 grid gap-3">
          {sampleListings.slice(0, 2).map((listing) => (
            <ListingPin key={listing.have} listing={listing} compact />
          ))}
        </div>
        <p className="mt-4 rounded-xl bg-white p-3 text-sm font-bold leading-6 text-muted">
          These are examples for early access. They are not live trades.
        </p>
      </div>
    </aside>
  );
}

function Hero() {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-6xl rounded-[32px] border-4 border-soil/20 bg-soil/10 p-3">
      <div className="paper-panel grid items-center gap-10 rounded-[24px] border border-soil/20 p-5 sm:p-8 lg:grid-cols-[0.94fr_1.06fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-soil/20 bg-card px-4 py-2 text-sm font-black text-deep">
            <Sprout aria-hidden="true" size={17} />
            Cash-free local garden trading
          </p>
          <h1 className="font-display mt-6 text-5xl font-bold leading-[1.04] text-charcoal sm:text-6xl">
            Trade what you grow. Get what you need.
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-charcoal">
            A simple early-access list for gardeners who would rather swap
            extra tomatoes, basil starts, compost, eggs or tools than turn every
            little thing into a sale.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#early-access">Join the First Local List</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              See How It Works
            </ButtonLink>
          </div>
          <p className="mt-5 max-w-xl rounded-2xl border border-tomato/20 bg-tomato/10 p-4 font-bold leading-7 text-deep">
            Private early access. No checkout, no crypto, no cash sales.
          </p>
        </div>
        <HeroBoard />
      </div>
      </div>
    </section>
  );
}

function LocalBoard() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="local-board-title">
      <div className="board-panel mx-auto max-w-6xl rounded-[28px] border-4 border-soil/20 p-5 sm:p-7">
        <div className="mb-6 flex flex-col justify-between gap-3 border-b border-soil/20 pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-tomato">Sample pilot board</p>
            <h2 id="local-board-title" className="font-display text-4xl font-bold leading-tight text-charcoal">
              Today&apos;s Local Board
            </h2>
          </div>
          <p className="max-w-md text-base font-bold leading-6 text-muted">
            This is the whole idea in one glance: have, wants, area, handoff.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {sampleListings.map((listing) => (
            <ListingPin key={listing.have} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="how-title">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-black uppercase tracking-[0.12em] text-garden">How it works</p>
        <h2 id="how-title" className="font-display mt-2 text-4xl font-bold leading-tight text-charcoal">
          Five plain steps. No shopping cart.
        </h2>
        <div className="seed-border mt-8 grid gap-0 overflow-hidden rounded-sm border-4 bg-card md:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.title} className="paper-panel border-b border-soil/20 p-5 md:border-b-0 md:border-r last:border-b-0 md:last:border-r-0">
              <span className="flex size-9 items-center justify-center rounded-full bg-deep text-sm font-black text-white">
                {index + 1}
              </span>
              <h3 className="font-display mt-5 text-xl font-bold leading-tight text-charcoal">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TradeTags() {
  return (
    <section id="what-you-can-trade" className="px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="trade-title">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-tomato">Trade list</p>
            <h2 id="trade-title" className="font-display mt-2 text-4xl font-bold leading-tight text-charcoal">
              Keep it garden-adjacent.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
              If it belongs on a backyard grower&apos;s table, seed shelf or shed
              wall, it may fit the first version.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-3">
              {tradeItems.map((item) => (
                <span key={item} className="rounded-sm border-2 border-soil/20 bg-linen px-4 py-2 text-base font-black text-deep shadow-[3px_3px_0_rgba(110,76,47,0.12)]">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-7 rounded-2xl border border-tomato/25 bg-tomato/10 p-5">
              <div className="flex gap-3">
                <AlertTriangle aria-hidden="true" className="mt-1 shrink-0 text-tomato" />
                <p className="text-base font-bold leading-7 text-charcoal">
                  Some items may be legal in one place and restricted in another.
                  The first version keeps the rules tighter to protect the community.
                </p>
              </div>
              <p className="mt-4 text-sm font-bold leading-6 text-muted">
                Not allowed: {restrictedItems}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SafetyRules() {
  return (
    <section id="safety" className="px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="safety-title">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-black uppercase tracking-[0.12em] text-garden">Safety rules</p>
        <h2 id="safety-title" className="font-display mt-2 text-4xl font-bold leading-tight text-charcoal">
          Local trades need common sense baked in.
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <SafetyList title="Built for the first version" items={builtSafety} />
          <SafetyList title="Planned for app launch" items={plannedSafety} planned />
        </div>
        <p className="mt-6 max-w-3xl text-base font-bold leading-7 text-muted">
          Users are responsible for knowing and following local food, cottage
          food, egg, honey and garden trade laws. Local Trade Garden is a
          connection platform, not a food vendor or legal advisor.
        </p>
      </div>
    </section>
  );
}

function SafetyList({
  title,
  items,
  planned = false,
}: {
  title: string;
  items: string[];
  planned?: boolean;
}) {
  return (
    <article className="paper-panel rounded-2xl border border-soil/20 p-5">
      <h3 className="font-display text-2xl font-bold text-deep">{title}</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-base font-bold leading-6 text-charcoal">
            <CheckCircle2 aria-hidden="true" className={planned ? "mt-0.5 shrink-0 text-soil" : "mt-0.5 shrink-0 text-garden"} size={18} />
            <span>
              {item}
              {planned ? <span className="text-muted"> · planned</span> : null}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function EarlyAccess() {
  const afterJoin = [
    "We review the first local signups.",
    "We invite a small test group.",
    "Testers post sample listings.",
    "The first trades happen in one local area.",
    "Feedback shapes the app before public launch.",
  ];

  return (
    <section id="early-access" className="px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="early-title">
      <div className="board-panel mx-auto grid max-w-6xl gap-8 rounded-[28px] border-4 border-soil/20 p-5 sm:p-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.12em] text-tomato">Early access</p>
          <h2 id="early-title" className="font-display mt-2 text-4xl font-bold leading-tight text-charcoal">
            Put your name on the first local signup sheet.
          </h2>
          <div className="paper-panel mt-6 rounded-2xl border border-soil/20 p-5">
            <h3 className="font-display text-2xl font-bold text-deep">After you join</h3>
            <ol className="mt-4 grid gap-3">
              {afterJoin.map((item, index) => (
                <li key={item} className="flex gap-3 text-base font-bold leading-6 text-charcoal">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-deep text-sm text-white">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <EarlyAccessForm />
      </div>
    </section>
  );
}

function PartnerStrip() {
  return (
    <section id="sponsors" className="px-4 py-8 sm:px-6 lg:px-8" aria-label="Local partner interest">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-sm border-4 border-soil bg-soil p-6 text-white md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.12em] text-softyellow">Local partners</p>
          <h2 className="font-display mt-2 text-3xl font-bold leading-tight">
            Own a nursery, feed store, market, church group or garden club?
          </h2>
          <p className="mt-2 max-w-3xl text-base leading-7 text-white/84">
            Help launch the first local trade community. Useful partners are:
            {" "}{partnerCards.join(", ")}.
          </p>
        </div>
        <a
          href={`mailto:${email}?subject=${encodeURIComponent("Local Trade Garden Partner Interest")}`}
          className="focus-ring inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-softyellow px-6 py-3 text-sm font-black text-deep hover:bg-white"
        >
          Partner With Us
        </a>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.12em] text-garden">FAQ</p>
        <h2 id="faq-title" className="font-display mt-2 text-4xl font-bold text-charcoal">
          Hard questions first.
        </h2>
        <div className="mt-7 grid gap-3">
          {faq.map((item) => (
            <details key={item.q} className="paper-panel rounded-xl border border-soil/20 p-5">
              <summary className="focus-ring cursor-pointer list-none rounded-lg font-display text-xl font-bold text-charcoal">
                {item.q}
              </summary>
              <p className="mt-3 text-base leading-7 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    ["Terms", "/terms"],
    ["Privacy", "/privacy"],
    ["Safety", "#safety"],
    ["Prohibited Items", "#what-you-can-trade"],
    ["Pilot Area", "#early-access"],
  ];

  return (
    <footer className="border-t border-soil/20 bg-linen/90 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="font-display flex items-center gap-2 text-2xl font-bold text-deep">
            <Flower2 aria-hidden="true" className="text-sunflower" />
            Local Trade Garden
          </div>
          <p className="mt-3 text-base font-bold text-charcoal">Trade what you grow. Get what you need.</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
            Local Trade Garden is a connection platform for local trades. It is
            not a food vendor, legal advisor or guarantor of any trade.
          </p>
        </div>
        <div className="lg:text-right">
          <p className="inline-flex items-center gap-2 rounded-full bg-linen px-3 py-2 text-sm font-black text-deep">
            <Mail aria-hidden="true" size={16} />
            Status: Private early access
          </p>
          <p className="mt-4 text-base font-bold text-charcoal">
            Contact: <a className="underline decoration-soil/30 underline-offset-4" href={`mailto:${email}`}>{email}</a>
          </p>
          <nav className="mt-4 flex flex-wrap gap-3 lg:justify-end" aria-label="Footer navigation">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="focus-ring rounded-full px-2 py-1 text-sm font-bold text-charcoal hover:bg-linen">
                {label}
              </Link>
            ))}
          </nav>
          <p className="mt-5 text-sm text-muted">&copy; 2026 Local Trade Garden. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LocalBoard />
        <HowItWorks />
        <TradeTags />
        <SafetyRules />
        <EarlyAccess />
        <PartnerStrip />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
