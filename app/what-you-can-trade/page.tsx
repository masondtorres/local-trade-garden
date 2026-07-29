import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock, ComplianceNote, JsonLd, PageHero } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import {
  executiveVerdict,
  publicPositioning,
  regulatedCategoryRisks,
  siteUrl,
  tradeCategories,
} from "@/content/site";

export const metadata: Metadata = {
  title: "What You Can Trade | Local Trade Garden",
  description:
    "Plants, seeds, produce, eggs, honey, baked goods, handmade goods, tools, repairs, skills, local labor and lawful farm goods.",
  alternates: {
    canonical: "/what-you-can-trade",
  },
  openGraph: {
    title: "What You Can Trade | Local Trade Garden",
    description:
      "Plants, seeds, produce, eggs, honey, baked goods, handmade goods, tools, repairs, skills, local labor and lawful farm goods.",
    url: "/what-you-can-trade",
  },
};

export default function WhatYouCanTradePage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "What You Can Trade | Local Trade Garden",
    url: `${siteUrl}/what-you-can-trade`,
    description: metadata.description,
  };

  return (
    <SiteShell>
      <JsonLd data={webPageSchema} />
      <PageHero
        eyebrow="What you can trade"
        title="Useful local trades belong here."
        intro={publicPositioning}
      />
      <AnswerBlock
        question="What can you trade on Local Trade Garden?"
        answer="You can trade plants, seeds, produce, eggs, honey, baked goods, handmade goods, tools, repairs, skills, local labor and lawful farm goods. Firearms, ammunition, alcohol, wine, homebrew, raw milk and illegal items are not allowed in public listings. Users handle all legal rules."
      />
      <AnswerBlock question="Research verdict" answer={executiveVerdict} />
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
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="focus-ring rounded-full border border-soil/20 bg-card px-4 py-3 font-bold text-deep shadow-card" href="/will-work-for-food">
            Will Work for Food
          </Link>
          <Link className="focus-ring rounded-full border border-soil/20 bg-card px-4 py-3 font-bold text-deep shadow-card" href="/safety">
            Safety and Rules
          </Link>
        </div>
      </Section>
      <Section title="Regulated category risk" intro="These are the clear public rules for the MVP. Users still handle their own compliance.">
        <div className="grid gap-5 md:grid-cols-2">
          {regulatedCategoryRisks.map((item) => (
            <InfoCard key={item} title={item.split(":")[0]} body={item} />
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
