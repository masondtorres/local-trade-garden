import type { Metadata } from "next";
import { EarlyAccessForm } from "@/components/Forms";
import { ComplianceNote, JsonLd, PageHero } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Join Early Access | Local Trade Garden",
  description:
    "Join the Local Trade Garden early access list for local trades rooted in handmade goods, homegrown food, skills, labor and useful work.",
  alternates: {
    canonical: "/early-access",
  },
  openGraph: {
    title: "Join Early Access | Local Trade Garden",
    description:
      "Join the Local Trade Garden early access list for local trades rooted in handmade goods, homegrown food, skills, labor and useful work.",
    url: "/early-access",
  },
};

export default function EarlyAccessPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Join Early Access | Local Trade Garden",
    url: `${siteUrl}/early-access`,
    description: metadata.description,
  };

  return (
    <SiteShell>
      <JsonLd data={webPageSchema} />
      <PageHero
        eyebrow="Early access"
        title="Join the first local trade list."
        intro="Join the first local test list. Help shape a trade site for things made, grown, raised, repaired or earned through honest work."
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
