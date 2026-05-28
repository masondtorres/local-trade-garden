import type { Metadata } from "next";
import { Hammer, HeartHandshake, Wheat } from "lucide-react";
import { ButtonLink } from "@/components/Buttons";
import { ComplianceNote, PageHero } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Will Work for Food | Local Trade Garden",
  description:
    "A dedicated Local Trade Garden page for trading honest local labor for food, goods or useful local items.",
};

export default function WillWorkForFoodPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Major feature"
        title="Will Work for Food"
        intro="Need help clearing brush, stacking firewood, hauling feed, planting rows, fixing a fence, loading a truck or cleaning up a property? Post the work. Offer food, goods or a fair local trade. This area is for honest work, useful help and neighbor-to-neighbor exchange."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/early-access">Join Early Access</ButtonLink>
          <ButtonLink href="/safety" variant="secondary">Read Safety Rules</ButtonLink>
        </div>
      </PageHero>
      <Section
        title="The kind of work that fits"
        intro="This page is for practical help with real local value on both sides."
        className="bg-white/70"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <InfoCard title="Property help" body="Brush clearing, cleanup, stacking, moving, hauling, planting and seasonal work." icon={Hammer} />
          <InfoCard title="Food and goods" body="Trade labor for produce, farm goods, handmade items, tools or useful supplies." icon={Wheat} />
          <InfoCard title="Neighbor exchange" body="A clear agreement between people nearby, not a staffing agency or delivery platform." icon={HeartHandshake} />
        </div>
      </Section>
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ComplianceNote short />
        </div>
      </section>
    </SiteShell>
  );
}
