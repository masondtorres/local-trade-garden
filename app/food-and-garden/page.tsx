import type { Metadata } from "next";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilityList, UtilityNote, UtilitySection } from "@/components/UtilityPage";

export const metadata: Metadata = {
  title: "Food & Garden Trades | Local Trade Garden",
  description: "Simple examples and local-rule reminders for food and garden trades.",
  alternates: { canonical: "/food-and-garden" },
};

export default function FoodAndGardenPage() {
  return (
    <HomeSiteShell>
      <UtilityHero title="Food & Garden" intro="Trade useful food and garden goods with people nearby." />
      <UtilitySection title="What fits here">
        <UtilityList items={["Produce", "Plants and seedlings", "Eggs", "Honey", "Garden supplies", "Compost and mulch", "Canned or baked goods only where allowed by local rules"]} />
      </UtilitySection>
      <UtilitySection title="Know your local rules" muted>
        <UtilityNote>Food rules can vary by state and county. Users are responsible for knowing and following their local laws.</UtilityNote>
      </UtilitySection>
    </HomeSiteShell>
  );
}
