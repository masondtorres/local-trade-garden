import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, PageHero } from "@/components/PageBlocks";
import { InfoCard, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { siteUrl, steps } from "@/content/site";

export const metadata: Metadata = {
  title: "How Local Trade Garden Works",
  description:
    "See how Local Trade Garden helps people post useful local trades, offer goods or labor and connect without a checkout or payment layer.",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How Local Trade Garden Works",
    description:
      "See how Local Trade Garden helps people post useful local trades, offer goods or labor and connect without a checkout or payment layer.",
    url: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How Local Trade Garden Works",
    url: `${siteUrl}/how-it-works`,
    description: metadata.description,
  };

  return (
    <SiteShell>
      <JsonLd data={webPageSchema} />
      <PageHero
        eyebrow="How it works"
        title="A plain way to trade local value."
        intro="Post what came from your hands. Find what someone nearby can offer. Agree on the details and meet safely."
      />
      <Section
        title="The trade process"
        intro="The first version stays simple because the point is the exchange between real people, not a complicated marketplace."
        className="bg-white/70"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-2xl border border-borderwarm bg-card p-5 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-full bg-softyellow font-black text-deep">
                    {index + 1}
                  </span>
                  <Icon aria-hidden="true" className="text-garden" size={22} />
                </div>
                <h2 className="font-display mt-5 text-xl font-bold text-charcoal">{step.title}</h2>
                <p className="mt-2 leading-7 text-muted">{step.body}</p>
              </article>
            );
          })}
        </div>
      </Section>
      <Section title="Keep it honest" intro="A good trade is clear before anyone shows up. Say what you have, what you want and what condition it is in.">
        <div className="grid gap-5 md:grid-cols-3">
          <InfoCard title="Be specific" body="Use plain details, useful photos and honest quantities." />
          <InfoCard title="Agree first" body="Make sure both sides understand the trade before meeting." />
          <InfoCard title="Respect the rules" body="Regulated goods and services must follow the laws that apply." />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="focus-ring rounded-full border border-soil/20 bg-card px-4 py-3 font-bold text-deep shadow-card" href="/what-you-can-trade">
            What You Can Trade
          </Link>
          <Link className="focus-ring rounded-full border border-soil/20 bg-card px-4 py-3 font-bold text-deep shadow-card" href="/safety">
            Safety and Rules
          </Link>
          <Link className="focus-ring rounded-full border border-soil/20 bg-card px-4 py-3 font-bold text-deep shadow-card" href="/early-access">
            Join Early Access
          </Link>
        </div>
      </Section>
    </SiteShell>
  );
}
