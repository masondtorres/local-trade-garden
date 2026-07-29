import type { Metadata } from "next";
import { EarlyAccessForm } from "@/components/Forms";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilitySection } from "@/components/UtilityPage";

export const metadata: Metadata = {
  title: "Join Early Access | Local Trade Garden",
  description: "Join the first Local Trade Garden pilot list.",
  alternates: { canonical: "/early-access" },
};

export default function EarlyAccessPage() {
  return (
    <HomeSiteShell>
      <div className="category-early">
        <UtilityHero
          eyebrow="Early access"
          title="Join the first local trade list."
          intro="Share where you are and what you may trade or offer."
        />
        <UtilitySection title="Early access form" intro="The form is used only to plan the first local pilot.">
          <EarlyAccessForm />
        </UtilitySection>
      </div>
    </HomeSiteShell>
  );
}
