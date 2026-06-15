import type { Metadata } from "next";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilityList, UtilitySection } from "@/components/UtilityPage";

export const metadata: Metadata = {
  title: "Handmade Goods | Local Trade Garden",
  description: "Useful handmade and household goods that fit Local Trade Garden.",
  alternates: { canonical: "/handmade-goods" },
};

export default function HandmadeGoodsPage() {
  return (
    <HomeSiteShell>
      <div className="category-handmade">
        <UtilityHero title="Handmade Goods" intro="Trade useful goods made by hand for home and daily life." />
        <UtilitySection title="What fits here">
          <UtilityList items={["Soap", "Candles", "Sewn goods", "Crafts", "Baked goods where allowed", "Woodworking", "Simple household items"]} />
        </UtilitySection>
      </div>
    </HomeSiteShell>
  );
}
