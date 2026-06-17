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
      <div className="category-food">
        <UtilityHero title="Garden & Plants" intro="Trade plants, seeds, produce and garden starts with people nearby." />
        <UtilitySection title="What fits here">
          <UtilityList items={["Plants and seedlings", "Seeds", "Produce", "Garden starts", "Eggs", "Honey", "Garden supplies", "Baked goods only where allowed by local rules"]} />
        </UtilitySection>
        <UtilitySection title="Know your local rules" muted>
          <UtilityNote>Food, farm, plant and seed rules can vary. Users are responsible for local, Tennessee and federal law. Raw milk, alcohol, firearms, ammunition and illegal items are not allowed in public listings.</UtilityNote>
        </UtilitySection>
      </div>
    </HomeSiteShell>
  );
}
