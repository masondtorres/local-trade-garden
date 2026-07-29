import type { Metadata } from "next";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilityList, UtilityNote, UtilitySection } from "@/components/UtilityPage";
import { platformRiskSummary, redFlags } from "@/content/site";

export const metadata: Metadata = {
  title: "Safety Rules | Local Trade Garden",
  description: "Simple safety rules for using Local Trade Garden.",
  alternates: { canonical: "/safety" },
};

export default function SafetyPage() {
  return (
    <HomeSiteShell>
      <div className="category-safety">
        <UtilityHero title="Safety rules" intro="Meet safe, inspect goods and handle your own trade." />
        <UtilitySection title="Before you trade">
          <UtilityList items={["Meet safely", "Keep personal information private", "Inspect goods before trading", "Agree clearly before trading", "Use common sense", "The platform does not guarantee trades"]} />
        </UtilitySection>
        <UtilitySection title="Not allowed in the MVP" muted>
          <UtilityList items={["Firearms or ammunition", "Alcohol, wine or homebrew", "Raw milk", "Drugs, CBD, hemp or nicotine", "Stolen items", "Unsafe items", "Medical claims", "Adult items", "Anything illegal in the user's area"]} />
        </UtilitySection>
        <UtilitySection title="Platform risks">
          <UtilityList items={platformRiskSummary} />
        </UtilitySection>
        <UtilitySection title="Red flags" muted>
          <UtilityList items={redFlags} />
        </UtilitySection>
        <UtilitySection title="Your responsibility">
          <UtilityNote>Know the rules that apply where you live. Local Trade Garden does not inspect, approve, broker, sell, ship, store, guarantee or participate in any trade.</UtilityNote>
        </UtilitySection>
      </div>
    </HomeSiteShell>
  );
}
