import type { Metadata } from "next";
import { ComplianceNote, PageHero } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { safetyGuidelines, safetyStatement } from "@/content/site";

export const metadata: Metadata = {
  title: "Safety and Rules | Local Trade Garden",
  description:
    "Simple safety and compliance guidance for Local Trade Garden trades, regulated goods, address privacy and user responsibility.",
};

export default function SafetyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Safety and rules"
        title="Trade with common sense and clear responsibility."
        intro={safetyStatement}
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
