import type { Metadata } from "next";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilityList, UtilityNote, UtilitySection } from "@/components/UtilityPage";

export const metadata: Metadata = {
  title: "Skills & Lessons | Local Trade Garden",
  description: "Practical skills, lessons and local help that people can trade.",
  alternates: { canonical: "/skills-and-lessons" },
};

export default function SkillsAndLessonsPage() {
  return (
    <HomeSiteShell>
      <div className="category-skills">
        <UtilityHero title="Skills & Lessons" intro="Trade useful knowledge, lessons and practical help." />
        <UtilitySection title="What fits here">
          <UtilityList items={["Tutoring", "Music lessons", "Canning lessons", "Gardening help", "Sewing help", "Homestead skills", "Practical training"]} />
        </UtilitySection>
        <UtilitySection title="Your responsibility" muted>
          <UtilityNote>Agree on the skill, time, place and trade before starting. Users handle their own safe, lawful trades. Local Trade Garden does not inspect, approve, broker, sell, ship, store, guarantee or participate.</UtilityNote>
        </UtilitySection>
      </div>
    </HomeSiteShell>
  );
}
