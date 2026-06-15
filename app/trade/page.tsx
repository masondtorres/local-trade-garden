import type { Metadata } from "next";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilityLinks, UtilitySection } from "@/components/UtilityPage";

export const metadata: Metadata = {
  title: "What Can You Trade? | Local Trade Garden",
  description: "Browse useful local trade categories for goods, skills, repairs and work.",
  alternates: { canonical: "/trade" },
};

const categories = [
  { href: "/food-and-garden", title: "Food & Garden", body: "Produce, plants, eggs, honey and garden goods." },
  { href: "/handmade-goods", title: "Handmade Goods", body: "Useful goods made by hand for home and daily life." },
  { href: "/repairs-and-tools", title: "Repairs & Tools", body: "Repair help, sharpening, equipment use and practical fixes." },
  { href: "/skills-and-lessons", title: "Skills & Lessons", body: "Tutoring, lessons and practical skills shared locally." },
  { href: "/will-work-for-food", title: "Will Work for Food", body: "Useful local work exchanged for food, supplies or goods." },
  { href: "/local-partners", title: "Local Partners", body: "Information for stores, markets, churches and local groups." },
];

export default function TradePage() {
  return (
    <HomeSiteShell>
      <UtilityHero
        eyebrow="Trade"
        title="What can you trade?"
        intro="Local Trade Garden is for useful things people grow, make, repair, teach or earn through honest work."
      />
      <UtilitySection title="Choose a category">
        <UtilityLinks links={categories} />
      </UtilitySection>
    </HomeSiteShell>
  );
}
