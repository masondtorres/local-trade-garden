import type { Metadata } from "next";
import { PartnerForm } from "@/components/Forms";
import { PageHero } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { partnerCards } from "@/content/site";

export const metadata: Metadata = {
  title: "Local Partners | Local Trade Garden",
  description:
    "Local partner information for nurseries, feed stores, markets, garden centers, churches, garden clubs and homesteading groups.",
};

export default function LocalPartnersPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Local partners"
        title="Good local partners are already part of the trade."
        intro="Nurseries, feed stores, markets, churches, garden clubs, local food groups and homesteading groups can help the first community feel grounded and useful."
      />
      <Section
        title="Partner fits"
        intro="Local Trade Garden works best when trusted local groups help people understand what belongs here."
        className="bg-white/70"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnerCards.map((card) => (
            <InfoCard key={card.title} title={card.title} icon={card.icon} />
          ))}
        </div>
      </Section>
      <Section
        title="Partner interest"
        intro="Use this form if your local business, church, club, nonprofit or homesteading group wants to help with the first launch."
      >
        <PartnerForm />
      </Section>
    </SiteShell>
  );
}
