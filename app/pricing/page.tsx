import type { Metadata } from "next";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilityList, UtilityNote, UtilitySection } from "@/components/UtilityPage";
import { nextActions, platformRiskSummary } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing | Local Trade Garden",
  description: "Plain Local Trade Garden pricing tiers for early access planning.",
  alternates: { canonical: "/pricing" },
};

const tiers = [
  "Free Neighbor: 1 active listing, 25-mile reach",
  "Active Neighbor: $5.99/month - up to 10 active listings, wider local reach",
  "Super Neighbor: $10.99/month - priority placement, up to 200-mile reach",
];

export default function PricingPage() {
  return (
    <HomeSiteShell>
      <UtilityHero
        eyebrow="Pricing"
        title="Simple neighbor pricing."
        intro="These are the planned tiers for Local Trade Garden."
      />
      <UtilitySection title="Tiers">
        <UtilityList items={tiers} />
      </UtilitySection>
      <UtilitySection title="MVP pricing guardrails">
        <UtilityList items={platformRiskSummary} />
      </UtilitySection>
      <UtilitySection title="Next actions" muted>
        <UtilityList items={nextActions} />
      </UtilitySection>
      <UtilitySection title="Plain note" muted>
        <UtilityNote>No checkout. No middleman. Users handle their own lawful, safe trades.</UtilityNote>
      </UtilitySection>
    </HomeSiteShell>
  );
}
