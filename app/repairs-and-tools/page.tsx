import type { Metadata } from "next";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilityList, UtilityNote, UtilitySection } from "@/components/UtilityPage";

export const metadata: Metadata = {
  title: "Repairs & Tools | Local Trade Garden",
  description: "Repair help, tool use and practical fix-it skills for local trades.",
  alternates: { canonical: "/repairs-and-tools" },
};

export default function RepairsAndToolsPage() {
  return (
    <HomeSiteShell>
      <div className="category-repairs">
        <UtilityHero title="Tools & Repairs" intro="Trade tools, sharpening, fix-it help and equipment." />
        <UtilitySection title="What fits here">
          <UtilityList items={["Tool sharpening", "Small repairs", "Equipment use", "Garden tool help", "Mower or small engine help", "Fix-it skills"]} />
        </UtilitySection>
        <UtilitySection title="Keep it safe" muted>
          <UtilityNote>Do not trade unsafe, stolen or restricted items. Users handle their own safe, lawful trades. Local Trade Garden does not inspect, approve, broker, sell, ship, store, guarantee or participate.</UtilityNote>
        </UtilitySection>
      </div>
    </HomeSiteShell>
  );
}
