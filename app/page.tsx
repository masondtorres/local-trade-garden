import Link from "next/link";
import Image from "next/image";
import {
  AlertTriangle,
  CheckCircle2,
  CircleDollarSign,
  Flower2,
  Leaf,
  Menu,
  MessageSquare,
  MoveRight,
  ShoppingBasket,
  Sprout,
  Sun,
} from "lucide-react";
import { ButtonLink } from "@/components/Buttons";
import { EarlyAccessForm, PartnerForm, ContactForm } from "@/components/Forms";
import { InfoCard, Section } from "@/components/Section";
import {
  appScreens,
  email,
  faq,
  navLinks,
  partnerCards,
  problemCards,
  restrictedItems,
  safetyCards,
  steps,
  tradeItems,
  trustItems,
} from "@/content/site";

const imageCredits = [
  {
    src: "https://images.unsplash.com/photo-1765480953875-a7338f896e91?auto=format&fit=crop&q=80&w=1200",
    alt: "Wooden baskets of tomatoes and eggplants at an outdoor farmers market",
    label: "Saturday table",
    caption: "A basket goes farther when neighbors know it is there",
  },
  {
    src: "https://images.unsplash.com/photo-1720105447193-583011440aaa?auto=format&fit=crop&q=80&w=1200",
    alt: "Young tomato seedlings growing in small nursery pots",
    label: "Extra starts",
    caption: "The tray you overplanted might be someone else's first garden",
  },
  {
    src: "https://images.unsplash.com/photo-1760905066161-ed10663cee32?auto=format&fit=crop&q=80&w=1200",
    alt: "A basket filled with ripe red tomatoes at a farmers market",
    label: "Peak week",
    caption: "When the tomatoes come in, they do not wait politely",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-soil/15 bg-linen/95 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex min-h-11 items-center gap-2 rounded-full">
          <span className="flex size-10 items-center justify-center rounded-full bg-sunflower text-deep shadow-card">
            <Flower2 aria-hidden="true" size={22} />
          </span>
          <span className="font-display text-base font-bold text-deep sm:text-lg">Local Trade Garden</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-charcoal lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring rounded-full hover:text-deep">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="#early-access">Join Early Access</ButtonLink>
        </div>
        <details className="relative lg:hidden">
          <summary className="focus-ring flex min-h-11 list-none items-center gap-2 rounded-full border border-soil/15 bg-card px-4 text-sm font-bold text-deep shadow-card">
            <Menu aria-hidden="true" size={18} />
            Menu
          </summary>
          <nav className="absolute right-0 mt-3 grid w-[min(18rem,calc(100vw-2rem))] gap-2 rounded-2xl border border-borderwarm bg-card p-3 shadow-soft" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="focus-ring min-h-11 rounded-xl px-3 py-3 font-bold hover:bg-cream">
                {link.label}
              </Link>
            ))}
            <Link href="#early-access" className="focus-ring min-h-11 rounded-xl bg-garden px-3 py-3 text-center font-black text-white">
              Join Early Access
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

function ListingCard({ title, wants, place }: { title: string; wants: string; place: string }) {
  return (
    <div className="rounded-2xl border border-soil/15 bg-white p-4 shadow-card">
      <div className="flex items-start gap-3">
        <span className="mt-1 size-3 shrink-0 rounded-full bg-tomato" />
        <div>
          <p className="text-sm font-black text-charcoal">{title}</p>
          <p className="mt-1 text-xs font-bold text-deep">Wants: {wants}</p>
          <p className="mt-2 text-xs text-muted">{place}</p>
        </div>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg" aria-label="Garden harvest photo with trade listing cards">
      <div className="absolute -left-3 top-8 hidden rotate-[-10deg] rounded-full bg-softyellow p-3 text-deep shadow-card sm:block">
        <Sun aria-hidden="true" size={30} />
      </div>
      <div className="overflow-hidden rounded-[30px] border border-soil/20 bg-card shadow-soft">
        <div className="relative min-h-[440px]">
          <Image
            src="https://images.unsplash.com/photo-1760905066161-ed10663cee32?auto=format&fit=crop&q=80&w=1200"
            alt="A basket filled with ripe red tomatoes at a farmers market"
            fill
            priority
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-charcoal/20 to-transparent" />
          <div className="absolute left-4 right-4 top-4 flex items-center justify-between rounded-2xl border border-white/25 bg-linen/92 px-4 py-3 backdrop-blur">
            <div>
              <p className="font-display text-sm font-bold text-deep">Nearby trade board</p>
              <p className="text-xs text-muted">Early access preview</p>
            </div>
            <div className="flex gap-1" aria-hidden="true">
              <span className="size-3 rounded-full bg-sunflower" />
              <span className="size-3 rounded-full bg-garden" />
              <span className="size-3 rounded-full bg-warning" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 grid gap-3">
            <ListingCard title="Heirloom Tomatoes" wants="Eggs or basil starts" place="East Nashville" />
            <div className="grid gap-3 sm:grid-cols-2">
              <ListingCard title="Basil Starts" wants="Compost or garden tools" place="Madison" />
              <ListingCard title="Fresh Eggs" wants="Tomatoes or herbs" place="Where local rules allow" />
            </div>
          </div>
        </div>
        <div className="grid gap-3 bg-card p-4 sm:grid-cols-[1fr_auto]">
          <div className="rounded-2xl bg-soil p-4 text-white">
            <div className="flex items-center gap-3">
              <ShoppingBasket aria-hidden="true" />
              <div>
                <p className="font-black">Garden basket, not shopping cart</p>
                <p className="text-sm text-white/78">The signup list is open. The trading app is still in early access.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-borderwarm bg-white px-4 py-3 text-deep">
            <CircleDollarSign aria-hidden="true" size={24} />
            <span className="sr-only">Cash-free</span>
          </div>
        </div>
      </div>
      <div className="absolute -right-2 -top-4 rotate-6 rounded-2xl border border-borderwarm bg-white p-3 shadow-card">
        <Flower2 aria-hidden="true" className="text-sunflower" size={30} />
      </div>
      <div className="absolute -bottom-5 left-4 flex max-w-[calc(100%-2rem)] gap-2 rounded-full border border-soil/15 bg-linen px-4 py-3 text-sm font-black text-deep shadow-card sm:left-8">
        <Leaf aria-hidden="true" size={18} />
        Tomatoes, herbs, eggs, compost
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-borderwarm bg-card px-4 py-2 text-sm font-black text-deep shadow-card">
            <Sprout aria-hidden="true" size={17} />
            Cash-free local garden trading
          </p>
          <h1 className="font-display mt-6 text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            Trade what you grow. Get what you need.
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">
            Got more tomatoes than you can eat? Too many basil starts? A shed
            full of tools you would rather trade than sell? Local Trade Garden
            is for those small, practical swaps with people nearby.
          </p>
          <p className="mt-4 rounded-2xl border border-tomato/20 bg-tomato/10 p-4 font-black text-deep">
            Join the list for the first local launch. No cash sales, no checkout, no crypto.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#early-access">Join Early Access</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              See How It Works
            </ButtonLink>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-bold text-charcoal">
                <CheckCircle2 aria-hidden="true" className="shrink-0 text-garden" size={18} />
                {item}
              </div>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function ProduceStrip() {
  const items = [
    ["bg-warning", "too many tomatoes"],
    ["bg-garden", "basil starts"],
    ["bg-sunflower", "seed packets"],
    ["bg-deep", "compost bags"],
  ];

  return (
    <div className="mx-auto -mt-6 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="market-line rounded-[26px] p-2">
        <div className="grid gap-3 rounded-[22px] border border-soil/15 bg-card p-3 shadow-card sm:grid-cols-4">
          {items.map(([color, label]) => (
            <div key={label} className="flex min-h-16 items-center gap-3 rounded-2xl bg-white px-4">
              <span className={`size-8 rounded-full ${color}`} aria-hidden="true" />
              <span className="text-sm font-black text-charcoal">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhotoBand() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8" aria-label="Garden trade photo examples">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        {imageCredits.map((image, index) => (
          <figure
            key={image.src}
            className={`group overflow-hidden rounded-[24px] border border-soil/15 bg-card shadow-soft ${index === 0 ? "lg:row-span-2" : ""}`}
          >
            <div className={index === 0 ? "relative min-h-[360px]" : "relative min-h-[220px]"}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={index === 0 ? "(min-width: 1024px) 520px, 100vw" : "(min-width: 1024px) 320px, 100vw"}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/12 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="inline-flex rounded-full bg-sunflower px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-deep">
                  {image.label}
                </p>
                <p className="font-display mt-3 text-xl font-bold leading-tight">{image.caption}</p>
              </figcaption>
            </div>
          </figure>
        ))}
        <div className="rounded-[24px] border border-garden/20 bg-soil p-6 text-white shadow-soft">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-softyellow">What might show up</p>
          <h2 className="font-display mt-3 text-3xl font-bold leading-tight">A table full of small, useful trades.</h2>
          <p className="mt-4 leading-7 text-white/82">
            Tomatoes for basil. Compost for seedlings. A borrowed broadfork.
            A dozen eggs, where local rules allow. Nothing fancy, just the kind
            of practical swap gardeners already make over a fence.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <Section
      title="The garden always has a week when everything shows up at once."
      className="bg-white/70"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[24px] border border-soil/15 bg-linen p-6 shadow-card">
          <p className="mb-3 inline-flex rounded-full bg-tomato px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
            Anyone with a garden knows this week
          </p>
          <p className="text-lg font-black leading-8 text-charcoal">
            Tomatoes ripen all at once. Zucchini gets ambitious. Seedlings
            outgrow their trays. Eggs stack up before the weekend.
          </p>
          <p className="mt-4 leading-7 text-muted">
            Most gardeners already share. The hard part is timing. You have
            basil today, somebody else has compost tomorrow, and nobody wants
            to make a whole sales listing for four extra pepper plants.
          </p>
          <div className="mt-5 rounded-2xl bg-soil p-4 text-white">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-softyellow">The launch idea</p>
            <p className="mt-2 leading-7">
              A cash-free local exchange for garden surplus, seedlings,
              compost, tools and approved homestead goods. No payment layer.
            </p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {problemCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function AppPreview() {
  return (
    <Section
      id="app-preview"
      eyebrow="Mock app preview"
      title="A simple app for neighbor-to-neighbor swaps"
      intro="These are mockups, not live app screenshots. They show the kind of plain, useful flow we are building for early access."
      className="bg-white/70"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {appScreens.map((screen) => (
          <article key={screen.title} className="rounded-[24px] border border-borderwarm bg-charcoal p-3 shadow-soft">
            <div className="rounded-[18px] bg-card p-4">
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-borderwarm" />
              <p className="text-xs font-black uppercase tracking-[0.12em] text-garden">{screen.title}</p>
              <p className="mt-2 min-h-16 text-sm leading-6 text-muted">{screen.body}</p>
              <div className="mt-4 grid gap-2">
                {screen.rows.map((row) => (
                  <div key={row} className="rounded-xl border border-borderwarm bg-white px-3 py-2 text-xs font-bold text-charcoal">
                    {row}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function EarlyAccessCallout() {
  return (
    <div className="mb-8 grid gap-4 lg:grid-cols-3">
      {[
        ["First community first", "The launch starts in one local area before expanding."],
        ["Trade-first by design", "No ecommerce, checkout, crypto or payment flow is being built for v1."],
        ["Real rules matter", "Food, egg, honey and cottage-food laws vary by place."],
      ].map(([title, body]) => (
        <div key={title} className="rounded-2xl border border-garden/20 bg-white p-5 shadow-card">
          <h3 className="flex items-center gap-2 font-black text-deep">
            <MoveRight aria-hidden="true" size={18} />
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
        </div>
      ))}
    </div>
  );
}

function PartnerIntroCard() {
  return (
    <div className="mb-8 grid gap-6 rounded-[24px] border border-borderwarm bg-cream p-5 shadow-card lg:grid-cols-[1fr_0.78fr] lg:p-7">
      <div>
        <p className="text-lg leading-8 text-muted">
          Instead of generic banner ads, Local Trade Garden will prioritize
          useful local sponsorships and launch partnerships. Sponsors can reach
          people who already care about seeds, soil, tools, compost, plant
          starts and local food.
        </p>
      </div>
      <div className="rounded-2xl bg-card p-5">
        <MessageSquare aria-hidden="true" className="text-garden" />
        <p className="mt-3 font-black text-charcoal">Good partner fit</p>
        <p className="mt-2 text-sm leading-6 text-muted">
          Practical, local, garden-adjacent organizations that can help a first
          community trust and use the early app.
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProduceStrip />
        <PhotoBand />
        <ProblemSection />

        <Section
          id="how-it-works"
          eyebrow="Five simple steps"
          title="How it works"
          intro="No bidding, no cart, no shipping label. Just a few steps from extra garden goods to a real local swap."
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="rounded-2xl border border-borderwarm bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-full bg-softyellow font-black text-deep">
                      {index + 1}
                    </span>
                    <Icon aria-hidden="true" className="text-garden" size={22} />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold text-charcoal">{step.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{step.body}</p>
                </article>
              );
            })}
          </div>
        </Section>

        <Section
          id="what-you-can-trade"
          eyebrow="Garden goods only"
          title="What you can trade"
          intro="Keep it garden-adjacent, local and practical. If it belongs at a backyard grower's table or in a shed, it may fit."
          className="bg-white/70"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tradeItems.map((item) => (
              <InfoCard key={item.title} title={item.title} icon={item.icon} />
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-warning/35 bg-warning/10 p-5">
            <div className="flex gap-3">
              <AlertTriangle aria-hidden="true" className="mt-1 shrink-0 text-warning" />
              <div>
                <h3 className="font-black text-warning">Not allowed</h3>
                <p className="mt-2 leading-7 text-charcoal">{restrictedItems}</p>
                <p className="mt-3 text-sm font-bold leading-6 text-muted">
                  Users are responsible for knowing and following local food,
                  cottage food, egg, honey and garden trade laws.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <AppPreview />

        <Section
          id="safety"
          eyebrow="Safety and trust"
          title="Local trades need common sense baked in."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {safetyCards.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </Section>

        <Section
          id="early-access"
          eyebrow="Early access"
          title="Help launch the first Local Trade Garden community."
          intro="We are starting in one local area first. Join if you would actually post a few listings, test the rough edges or help the first trades feel alive."
          className="bg-softyellow/30"
        >
          <EarlyAccessCallout />
          <EarlyAccessForm />
        </Section>

        <Section
          id="sponsors"
          eyebrow="Local partners"
          title="The best launch partners are already part of garden life."
          intro="Nurseries, feed stores, markets, garden clubs, churches and local food groups can help a first community feel real from day one."
          className="bg-white/70"
        >
          <PartnerIntroCard />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerCards.map((card) => (
              <InfoCard key={card.title} title={card.title} icon={card.icon} />
            ))}
          </div>
          <div className="mt-8">
            <PartnerForm />
          </div>
        </Section>

        <Section id="faq" eyebrow="Questions" title="FAQ">
          <div className="grid gap-4">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-borderwarm bg-card p-5 shadow-card">
                <summary className="focus-ring cursor-pointer list-none rounded-xl text-lg font-black text-charcoal">
                  {item.q}
                </summary>
                <p className="mt-3 leading-7 text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Want to ask before you join?"
          intro={`Reach Local Trade Garden at ${email} or send a quick message.`}
          className="bg-white/70"
        >
          <ContactForm />
        </Section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-deep shadow-soft">
            <div className="relative min-h-[360px] p-8 text-white sm:p-12">
              <Image
                src="https://images.unsplash.com/photo-1765480953875-a7338f896e91?auto=format&fit=crop&q=80&w=1600"
                alt="Outdoor market table with baskets of fresh vegetables"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-soil via-soil/86 to-deep/24" />
              <div className="absolute right-6 top-6 text-softyellow/80">
                <Flower2 aria-hidden="true" size={72} />
              </div>
              <div className="relative max-w-3xl">
                <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                  The extra basket on your counter might be someone else&apos;s dinner.
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/82">
                  Join early access and help build a better way to trade local garden goods.
                </p>
                <div className="mt-7">
                  <ButtonLink href="#early-access" variant="light">
                    Join Early Access
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Footer() {
  const links = [
    ["How It Works", "#how-it-works"],
    ["What You Can Trade", "#what-you-can-trade"],
    ["Safety", "#safety"],
    ["FAQ", "#faq"],
    ["Early Access", "#early-access"],
    ["Sponsors", "#sponsors"],
    ["Contact", "#contact"],
    ["Terms of Service", "/terms"],
    ["Privacy Policy", "/privacy"],
  ];

  return (
    <footer className="border-t border-borderwarm bg-card px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="font-display flex items-center gap-2 text-xl font-bold text-deep">
            <Flower2 aria-hidden="true" className="text-sunflower" />
            Local Trade Garden
          </div>
          <p className="mt-3 font-bold text-charcoal">Trade what you grow. Get what you need.</p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            Local Trade Garden is a connection platform for local trades. It is
            not a food vendor, legal advisor or guarantor of any trade.
          </p>
          <p className="mt-4 text-sm text-muted">&copy; 2026 Local Trade Garden. All rights reserved.</p>
        </div>
        <nav className="grid gap-2 sm:grid-cols-2" aria-label="Footer navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="focus-ring min-h-11 rounded-xl px-2 py-2 text-sm font-bold text-charcoal hover:bg-cream">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
