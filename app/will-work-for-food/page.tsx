import type { Metadata } from "next";
import { Hammer, HeartHandshake, Wheat } from "lucide-react";
import { ButtonLink } from "@/components/Buttons";
import { AnswerBlock, ComplianceNote, JsonLd, PageHero } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Will Work for Food | Local Trade Garden",
  description:
    "Trade honest manual labor for food, goods or useful local items. Clear brush, stack firewood, fix fences, plant rows and help neighbors where legal.",
  alternates: {
    canonical: "/will-work-for-food",
  },
  openGraph: {
    title: "Will Work for Food | Local Trade Garden",
    description:
      "Trade honest manual labor for food, goods or useful local items. Clear brush, stack firewood, fix fences, plant rows and help neighbors where legal.",
    url: "/will-work-for-food",
  },
};

export default function WillWorkForFoodPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Will Work for Food | Local Trade Garden",
    url: `${siteUrl}/will-work-for-food`,
    description: metadata.description,
  };

  return (
    <SiteShell>
      <JsonLd data={webPageSchema} />
      <PageHero
        eyebrow="Major feature"
        title="Will Work for Food"
        intro="Need help clearing brush, stacking firewood, hauling feed, planting rows, fixing a fence, loading a truck or cleaning up a property? Post the work. Offer food, goods or a fair local trade. This area is for honest work, useful help and neighbor-to-neighbor exchange."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/early-access">Join Early Access</ButtonLink>
          <ButtonLink href="/safety" variant="secondary">Read Safety Rules</ButtonLink>
        </div>
      </PageHero>
      <AnswerBlock
        question="What is Will Work for Food?"
        answer="Will Work for Food is a trade area where people can exchange honest manual labor for food, goods or useful local items."
      />
      <Section
        title="The kind of work that fits"
        intro="This page is for practical help with real local value on both sides."
        className="bg-white/70"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <InfoCard title="Property help" body="Brush clearing, cleanup, stacking, moving, hauling, planting and seasonal work." icon={Hammer} />
          <InfoCard title="Food and goods" body="Trade labor for produce, farm goods, handmade items, tools or useful supplies." icon={Wheat} />
          <InfoCard title="Neighbor exchange" body="A clear agreement between people nearby, not a staffing agency or delivery platform." icon={HeartHandshake} />
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "clearing brush",
            "stacking firewood",
            "hauling feed",
            "planting rows",
            "fixing a fence",
            "loading a truck",
            "cleaning up a property",
            "helping in a garden",
            "moving supplies",
            "basic repair help",
            "cleanup work",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-borderwarm bg-card p-4 font-bold text-deep shadow-card">
              {item}
            </div>
          ))}
        </div>
      </Section>
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ComplianceNote short />
        </div>
      </section>
    </SiteShell>
  );
}
