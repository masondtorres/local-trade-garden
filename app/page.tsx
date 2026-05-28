import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Flower2, Hammer, Leaf, Sprout } from "lucide-react";
import { ButtonLink } from "@/components/Buttons";
import { AnswerBlock, ComplianceNote, JsonLd } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { homeCategoryPreview, photoSet, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Local Trade Garden | Trade What You Made, Grew, Raised or Repaired",
  description:
    "A local early-access trade platform for handmade goods, homegrown food, meat, eggs, honey, tools, repairs, skills, labor and useful neighbor-to-neighbor exchange where legal.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Local Trade Garden | Trade What You Made, Grew, Raised or Repaired",
    description:
      "A local early-access trade platform for handmade goods, homegrown food, meat, eggs, honey, tools, repairs, skills, labor and useful neighbor-to-neighbor exchange where legal.",
    url: "/",
  },
};

function Hero() {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-borderwarm bg-card px-4 py-2 text-sm font-black text-deep shadow-card">
            <Sprout aria-hidden="true" size={17} />
            From your hands
          </p>
          <h1 className="font-display mt-6 text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            If You Made It, You Can Trade It.
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">
            A local trade site for things made by hand, grown from the ground,
            raised with care, repaired with skill or earned through honest work.
          </p>
          <p className="mt-5 text-lg leading-8 text-charcoal">
            Trade goods and services that build people up. Food. Honey. Meat.
            Produce. Handmade goods. Useful skills. Labor. Repairs. Lessons.
            Tools. Local work. Local value. This site is for trades that
            strengthen the soul, sharpen the mind, build the body, help families
            and better the earth.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/early-access">Join Early Access</ButtonLink>
            <ButtonLink href="/what-you-can-trade" variant="secondary">
              See What You Can Trade
            </ButtonLink>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Private early access",
              "Local trades only",
              "No checkout or payment layer",
              "Users follow the law",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-bold text-charcoal">
                <CheckCircle2 aria-hidden="true" className="shrink-0 text-garden" size={18} />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="overflow-hidden rounded-[30px] border border-soil/20 bg-card shadow-soft">
            <div className="relative min-h-[440px]">
              <Image
                src={photoSet[2].src}
                alt={photoSet[2].alt}
                fill
                priority
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/25 bg-linen/92 p-5 shadow-card backdrop-blur">
                <p className="font-display text-2xl font-bold text-deep">A trade board for useful local work.</p>
                <p className="mt-2 leading-7 text-muted">
                  Made, grown, raised, repaired, taught or earned. Not random resale.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -right-2 -top-4 rotate-6 rounded-2xl border border-borderwarm bg-white p-3 shadow-card">
            <Flower2 aria-hidden="true" className="text-sunflower" size={30} />
          </div>
          <div className="absolute -bottom-5 left-4 flex max-w-[calc(100%-2rem)] gap-2 rounded-full border border-soil/15 bg-linen px-4 py-3 text-sm font-black text-deep shadow-card sm:left-8">
            <Leaf aria-hidden="true" size={18} />
            Food, skills, labor, tools
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Local Trade Garden",
    url: siteUrl,
    description:
      "A local early-access trade platform for handmade goods, homegrown food, meat, eggs, honey, tools, repairs, skills, labor and useful neighbor-to-neighbor exchange where legal.",
    isPartOf: {
      "@type": "WebSite",
      name: "Local Trade Garden",
      url: siteUrl,
    },
  };

  return (
    <SiteShell>
      <JsonLd data={webPageSchema} />
      <Hero />
      <AnswerBlock
        question="What is Local Trade Garden?"
        answer="Local Trade Garden is an early-access local trade platform for things people made, grew, raised, repaired, taught or earned through honest work. It is built for cash-free local trades, not random resale listings."
      />
      <Section
        eyebrow="What belongs here"
        title="Trades with real work behind them."
        intro="Local Trade Garden is for things that came from somebody's hands, land, kitchen, tools, skill or time."
        className="bg-white/70"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeCategoryPreview.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Major feature"
        title="Will Work for Food"
        intro="Trade honest work for food, goods or useful local items. Clear brush. Stack firewood. Haul feed. Plant rows. Fix a fence. Load a truck. Clean up a property. Useful work still has value."
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="rounded-[24px] border border-soil/15 bg-soil p-6 text-white shadow-card">
            <Hammer aria-hidden="true" className="text-softyellow" size={34} />
            <h2 className="font-display mt-4 text-3xl font-bold">A jar of honey, a stack of firewood, a repaired tool, a morning of honest work.</h2>
            <p className="mt-4 leading-7 text-white/82">
              Some trades do not need a checkout button. They need clear words,
              useful work and two people who follow the rules.
            </p>
            <div className="mt-6">
              <ButtonLink href="/will-work-for-food" variant="light">
                See Will Work for Food
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["clearing brush", "stacking firewood", "hauling feed", "fixing a fence"].map((item) => (
              <div key={item} className="rounded-2xl border border-borderwarm bg-card p-5 font-black text-deep shadow-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[24px] border border-soil/15 bg-card shadow-soft">
            <div className="relative min-h-72">
              <Image
                src={photoSet[1].src}
                alt={photoSet[1].alt}
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <ComplianceNote short />
        </div>
      </section>
      <Section
        eyebrow="Not random resale"
        title="How is Local Trade Garden different from Facebook Marketplace?"
        intro="Local Trade Garden is not built for random resale listings or cash-first selling. It is focused on cash-free local trades for things made, grown, raised, repaired, taught or earned through honest work."
        className="bg-white/70"
      >
        <div className="flex flex-wrap gap-3">
          <Link className="focus-ring rounded-full border border-soil/20 bg-card px-4 py-3 font-bold text-deep shadow-card" href="/what-you-can-trade">
            What You Can Trade
          </Link>
          <Link className="focus-ring rounded-full border border-soil/20 bg-card px-4 py-3 font-bold text-deep shadow-card" href="/safety">
            Safety and Rules
          </Link>
          <Link className="focus-ring rounded-full border border-soil/20 bg-card px-4 py-3 font-bold text-deep shadow-card" href="/early-access">
            Join Early Access
          </Link>
        </div>
      </Section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-deep shadow-soft">
          <div className="relative p-8 text-white sm:p-12">
            <Flower2 aria-hidden="true" className="absolute right-6 top-6 text-softyellow/70" size={72} />
            <div className="relative max-w-3xl">
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                The first local test group starts small on purpose.
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/82">
                Join early access if you want to help shape a trade site rooted
                in food, work, skill and local value.
              </p>
              <div className="mt-7">
                <ButtonLink href="/early-access" variant="light">
                  Join Early Access
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
