import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock, ComplianceNote, JsonLd, PageHero } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { siteUrl, tradeCategories } from "@/content/site";

export const metadata: Metadata = {
  title: "What You Can Trade | Local Trade Garden",
  description:
    "Explore handmade goods, homegrown food, meat, eggs, honey, tools, repairs, skills, local labor, Will Work for Food and earth-friendly trades where legal.",
  alternates: {
    canonical: "/what-you-can-trade",
  },
  openGraph: {
    title: "What You Can Trade | Local Trade Garden",
    description:
      "Explore handmade goods, homegrown food, meat, eggs, honey, tools, repairs, skills, local labor, Will Work for Food and earth-friendly trades where legal.",
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
        title="If it came from your hands, it belongs in the conversation."
        intro="This is not a place for random resale piles. It is for made, grown, raised, cooked, built, repaired, taught, created and honestly earned value."
      />
      <AnswerBlock
        question="What can you trade on Local Trade Garden?"
        answer="You can trade handmade goods, homegrown food, meat, eggs, honey, tools, repairs, skills, lessons, local labor and earth-friendly goods where legal and properly handled."
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
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="focus-ring rounded-full border border-soil/20 bg-card px-4 py-3 font-bold text-deep shadow-card" href="/will-work-for-food">
            Will Work for Food
          </Link>
          <Link className="focus-ring rounded-full border border-soil/20 bg-card px-4 py-3 font-bold text-deep shadow-card" href="/safety">
            Safety and Rules
          </Link>
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
