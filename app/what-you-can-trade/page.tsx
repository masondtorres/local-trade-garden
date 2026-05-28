import type { Metadata } from "next";
import { ComplianceNote, PageHero } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { tradeCategories } from "@/content/site";

export const metadata: Metadata = {
  title: "What You Can Trade | Local Trade Garden",
  description:
    "Explore handmade goods, homegrown food, meat, eggs, honey, tools, repairs, lessons, labor and earth-friendly local trades.",
};

export default function WhatYouCanTradePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="What you can trade"
        title="If it came from your hands, it belongs in the conversation."
        intro="This is not a place for random resale piles. It is for made, grown, raised, cooked, built, repaired, taught, created and honestly earned value."
      />
      <Section
        title="Trade categories"
        intro="These categories help people understand what kind of local value belongs here."
        className="bg-white/70"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tradeCategories.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </Section>
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ComplianceNote />
        </div>
      </section>
    </SiteShell>
  );
}
