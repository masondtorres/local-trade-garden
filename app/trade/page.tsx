import type { Metadata } from "next";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilityLinks, UtilitySection } from "@/components/UtilityPage";

export const metadata: Metadata = {
  title: "What Can You Trade? | Local Trade Garden",
  description: "Browse useful local trade categories for goods, skills, repairs and work.",
  alternates: { canonical: "/trade" },
};

const categories = [
  { href: "/food-and-garden", title: "Garden & Plants", body: "Plants, seeds, produce and garden starts.", accentClass: "category-food" },
  { href: "/food-and-garden", title: "Eggs & Honey", body: "Fresh eggs and local honey.", accentClass: "category-handmade" },
  { href: "/repairs-and-tools", title: "Tools & Repairs", body: "Tools, sharpening, fix-it help and equipment.", accentClass: "category-repairs" },
  { href: "/skills-and-lessons", title: "Handmade & Skills", body: "Crafts, baked goods, sewing, canning and practical skills.", accentClass: "category-skills" },
  { href: "/what-you-can-trade", title: "Lawful Farm Goods", body: "Livestock and farm items where fully legal - users handle rules.", accentClass: "category-work" },
];

export default function TradePage() {
  return (
    <HomeSiteShell>
      <UtilityHero
        eyebrow="Trade"
        title="What can you trade?"
        intro="Local Trade Garden is for useful things people grow, make, fix or can do."
      />
      <UtilitySection title="Choose a category">
        <UtilityLinks links={categories} />
      </UtilitySection>
    </HomeSiteShell>
  );
}
