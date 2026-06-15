import type { Metadata } from "next";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilityList, UtilityNote, UtilitySection } from "@/components/UtilityPage";

export const metadata: Metadata = {
  title: "Safety Rules | Local Trade Garden",
  description: "Simple safety rules for using Local Trade Garden.",
  alternates: { canonical: "/safety" },
};

export default function SafetyPage() {
  return (
    <HomeSiteShell>
      <div className="category-safety">
        <UtilityHero title="Safety rules" intro="Keep trades clear, local and sensible." />
        <UtilitySection title="Before you trade">
          <UtilityList items={["Meet safely", "Keep personal information private", "Follow food laws", "Agree clearly before trading", "Use common sense", "The platform does not guarantee trades"]} />
        </UtilitySection>
        <UtilitySection title="Not allowed in the MVP" muted>
          <UtilityList items={["Drugs, CBD, hemp or nicotine", "Weapons", "Stolen items", "Unsafe items", "Medical claims", "Adult items", "Anything illegal in the user's area", "Live animal sales", "Raw milk", "Meat unless legally processed and documented"]} />
        </UtilitySection>
        <UtilitySection title="Your responsibility">
          <UtilityNote>Know the rules that apply where you live and agree on the trade before meeting or starting work.</UtilityNote>
        </UtilitySection>
      </div>
    </HomeSiteShell>
  );
}
