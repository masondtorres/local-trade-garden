import type { Metadata } from "next";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilityList, UtilityNote, UtilitySection } from "@/components/UtilityPage";

export const metadata: Metadata = {
  title: "Safety Rules | Local Trade Garden",
  description: "Simple safety rules and user responsibility notes for using Local Trade Garden.",
  alternates: { canonical: "/safety" },
};

export default function SafetyPage() {
  return (
    <HomeSiteShell>
      <div className="category-safety">
        <UtilityHero
          title="Safety rules"
          intro="Local Trade Garden connects neighbors. You handle the deal, the judgment and the rules that apply."
        />
        <UtilitySection title="Before you trade">
          <UtilityList items={["Meet safely", "Keep exact addresses private", "Inspect goods yourself", "Agree clearly before trading", "Follow local, Tennessee and federal law", "Use common sense", "Walk away if something feels wrong", "The platform does not guarantee trades"]} />
        </UtilitySection>
        <UtilitySection title="Not for public listings" muted>
          <UtilityList items={["Firearms or ammunition", "Alcohol, wine or homebrew", "Illegal goods", "Stolen items", "Unsafe items", "Medical claims", "Adult items", "Raw milk promotion or loophole claims", "Anything restricted where the user lives"]} />
        </UtilitySection>
        <UtilitySection title="Food, farm goods and animals">
          <UtilityNote>
            Food, plants, farm goods, animals and livestock can carry rules for handling, labeling, permits, health papers, transfer and inspection. Users are fully responsible for knowing and following the rules before posting, offering or completing a trade.
          </UtilityNote>
        </UtilitySection>
        <UtilitySection title="Platform role" muted>
          <UtilityNote>
            Local Trade Garden is a connection board. It does not inspect, approve, broker, sell, ship, store, guarantee or participate in any trade. It is not a legal advisor.
          </UtilityNote>
        </UtilitySection>
      </div>
    </HomeSiteShell>
  );
}
