import type { Metadata } from "next";
import { EarlyAccessForm } from "@/components/Forms";
import { ComplianceNote, PageHero } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Join Early Access | Local Trade Garden",
  description:
    "Join the Local Trade Garden early access list for local trades rooted in handmade goods, homegrown food, skills, labor and useful work.",
};

export default function EarlyAccessPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Early access"
        title="Join the first local trade list."
        intro="If you would trade something you made, grew, raised, cooked, repaired, taught or earned through honest work, this is the list to join."
      />
      <Section
        title="What happens after you join"
        intro="The full trading app is not open yet. Early signups help shape the first local test group."
        className="bg-white/70"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <InfoCard title="We review local interest" body="The first group starts small so the trade rules and expectations stay clear." />
          <InfoCard title="A test group gets invited" body="Testers help post early examples and find what feels useful." />
          <InfoCard title="Feedback shapes the launch" body="The site grows from real local trades, not guesses from far away." />
        </div>
      </Section>
      <Section title="Early access form" intro="Tell us what kind of value you would bring to a local trade board.">
        <EarlyAccessForm />
      </Section>
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ComplianceNote short />
        </div>
      </section>
    </SiteShell>
  );
}
