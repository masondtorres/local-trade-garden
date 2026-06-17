import type { Metadata } from "next";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilityList, UtilityNote, UtilitySection } from "@/components/UtilityPage";

export const metadata: Metadata = {
  title: "Handmade Goods | Local Trade Garden",
  description: "Useful handmade and household goods that fit Local Trade Garden.",
  alternates: { canonical: "/handmade-goods" },
};

export default function HandmadeGoodsPage() {
  return (
    <HomeSiteShell>
      <div className="category-handmade">
        <UtilityHero title="Handmade & Skills" intro="Trade useful handmade goods and practical skills." />
        <UtilitySection title="What fits here">
          <UtilityList items={["Crafts", "Baked goods where allowed", "Sewing", "Canning", "Woodworking", "Simple household items", "Practical skills"]} />
        </UtilitySection>
        <UtilitySection title="Your responsibility" muted>
          <UtilityNote>Be clear about condition, quantity and rules. Users handle their own safe, lawful trades. Local Trade Garden does not inspect, approve, broker, sell, ship, store, guarantee or participate.</UtilityNote>
        </UtilitySection>
      </div>
    </HomeSiteShell>
  );
}
