import type { Metadata } from "next";
import Link from "next/link";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilityList, UtilitySection } from "@/components/UtilityPage";

export const metadata: Metadata = {
  title: "Will Work for Food | Local Trade Garden",
  description: "Offer useful local work in exchange for food, supplies or goods.",
  alternates: { canonical: "/will-work-for-food" },
};

export default function WillWorkForFoodPage() {
  return (
    <HomeSiteShell>
      <UtilityHero
        title="Will Work for Food"
        intro="Offer useful local work in exchange for food, supplies or goods."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-xl bg-garden px-6 py-3 font-bold text-white hover:bg-deep" href="/early-access">
            Join Early Access
          </Link>
          <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-xl border border-borderwarm bg-card px-6 py-3 font-bold text-deep hover:border-garden hover:bg-white" href="/safety">
            Read Safety Rules
          </Link>
        </div>
      </UtilityHero>
      <UtilitySection title="Work you can offer">
        <UtilityList items={["Stack firewood", "Weed a garden", "Help with harvest", "Move mulch", "Clean a chicken coop", "Help set up a market booth", "Trade basic labor for eggs, produce, pantry goods or supplies"]} />
      </UtilitySection>
      <UtilitySection title="Safety rules" muted>
        <UtilityList items={["Meet in safe public places when possible", "Do not go alone to unfamiliar private property", "Agree on the work and trade before starting", "Do not accept unsafe work", "Users are responsible for their own agreements"]} />
      </UtilitySection>
    </HomeSiteShell>
  );
}
