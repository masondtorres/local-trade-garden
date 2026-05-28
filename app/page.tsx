import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle2, Flower2, Leaf, Sprout } from "lucide-react";
import { ButtonLink } from "@/components/Buttons";
import { ComplianceNote } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { homeCategoryPreview, photoSet } from "@/content/site";

export const metadata: Metadata = {
  title: "Local Trade Garden | If You Made It, You Can Trade It",
  description:
    "A local trade site for handmade, homegrown, locally raised, repaired, taught and honestly earned goods or services.",
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
            {["Trade only", "Local value", "Early access", "User responsibility"].map((item) => (
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
  return (
    <SiteShell>
      <Hero />
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
