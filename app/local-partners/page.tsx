import type { Metadata } from "next";
import { PartnerForm } from "@/components/Forms";
import { JsonLd, PageHero } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { farmersMarketContacts, partnerCards, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Local Partners | Local Trade Garden",
  description:
    "Local partner information for nurseries, feed stores, markets, garden centers, churches, garden clubs and homesteading groups.",
  alternates: {
    canonical: "/local-partners",
  },
  openGraph: {
    title: "Local Partners | Local Trade Garden",
    description:
      "Local partner information for nurseries, feed stores, markets, garden centers, churches, garden clubs and homesteading groups.",
    url: "/local-partners",
  },
};

export default function LocalPartnersPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Local Partners | Local Trade Garden",
    url: `${siteUrl}/local-partners`,
    description: metadata.description,
  };

  return (
    <SiteShell>
      <div className="category-partners">
        <JsonLd data={webPageSchema} />
        <PageHero
          eyebrow="Local partners"
          title="Good local partners are already part of the trade."
          intro="The best partners are already part of local life: nurseries, feed stores, farmers markets, garden centers, seed companies, churches, garden clubs, local food groups, homestead groups and people who help neighbors trade useful things safely."
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
          intro="Use this form if your local business, church, club, nonprofit, beekeeping group or homesteading group wants to help with the first launch where appropriate and legal."
        >
          <PartnerForm />
        </Section>
        <Section
          title="Verified market contacts"
          intro="These contacts are useful for local feedback. They do not imply partnership."
          className="bg-white/70"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {farmersMarketContacts.map((contact) => (
              <InfoCard
                key={contact.market}
                title={contact.market}
                body={`${contact.status}. ${contact.phone}. ${contact.email}.`}
              />
            ))}
          </div>
        </Section>
      </div>
    </SiteShell>
  );
}
