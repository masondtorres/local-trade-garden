import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock, ComplianceNote, JsonLd, PageHero } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { siteUrl, tradeCategories } from "@/content/site";

export const metadata: Metadata = {
  title: "What You Can Trade | Local Trade Garden",
  description:
    "Explore garden plants, seeds, produce, eggs, honey, baked goods, handmade goods, tools, repairs, skills, local labor and lawful farm goods.",
  alternates: {
    canonical: "/what-you-can-trade",
  },
  openGraph: {
    title: "What You Can Trade | Local Trade Garden",
    description:
      "Explore garden plants, seeds, produce, eggs, honey, baked goods, handmade goods, tools, repairs, skills, local labor and lawful farm goods.",
    url: "/what-you-can-trade",
  },
};

const notPublic = [
  "Firearms or ammunition",
  "Alcohol, wine or homebrew",
  "Illegal goods or restricted trades",
  "Raw milk promotion or loophole claims",
  "Anything the user cannot lawfully trade where they live",
];

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
        title="Trade useful things from your hands, land, tools and skills."
        intro="Local Trade Garden is for neighbor-to-neighbor barter, not random resale piles. Keep it useful, local and lawful."
      />
      <AnswerBlock
        question="What can you trade on Local Trade Garden?"
        answer="You can trade garden plants, seeds, produce, eggs, honey, baked goods, handmade goods, tools, repairs, skills, local labor and lawful farm goods where legal and properly handled."
      />
      <Section
        title="Trade categories"
        intro="These categories help people understand what kind of local value belongs here. Users handle the details, the safety and the law."
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
      <Section title="Not for public listings" intro="Some trades create too much legal, safety or platform risk for public promotion here.">
        <div className="grid gap-3 md:grid-cols-2">
          {notPublic.map((item) => (
            <div key={item} className="rounded-xl border border-borderwarm bg-card p-4 font-bold text-charcoal shadow-card">
              {item}
            </div>
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
