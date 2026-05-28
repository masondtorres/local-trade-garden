import type { Metadata } from "next";
import { AnswerBlock, ComplianceNote, JsonLd, PageHero } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { safetyGuidelines, safetyStatement, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Safety and Trade Rules | Local Trade Garden",
  description:
    "Simple safety and compliance rules for local trades. Users are responsible for following local, state and federal laws.",
  alternates: {
    canonical: "/safety",
  },
  openGraph: {
    title: "Safety and Trade Rules | Local Trade Garden",
    description:
      "Simple safety and compliance rules for local trades. Users are responsible for following local, state and federal laws.",
    url: "/safety",
  },
};

export default function SafetyPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Safety and Trade Rules | Local Trade Garden",
    url: `${siteUrl}/safety`,
    description: metadata.description,
  };

  return (
    <SiteShell>
      <JsonLd data={webPageSchema} />
      <PageHero
        eyebrow="Safety and rules"
        title="Trade with common sense and clear responsibility."
        intro={safetyStatement}
      />
      <AnswerBlock
        question="Who is responsible for legal compliance?"
        answer="Users are responsible for knowing and following local, state and federal laws. Local Trade Garden does not approve, inspect, guarantee, broker or become a party to any trade."
      />
      <Section
        title="Simple safety guide"
        intro="The rules should be easy to understand. Be careful, be honest and know what applies to your trade."
        className="bg-white/70"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {safetyGuidelines.map((item) => (
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
