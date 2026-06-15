import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, PageHero } from "@/components/PageBlocks";
import { Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { faq, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQ | Local Trade Garden",
  description:
    "Answers about local trades, food, useful goods, legal responsibility, early access and how Local Trade Garden works.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Local Trade Garden",
    description:
      "Answers about local trades, food, useful goods, legal responsibility, early access and how Local Trade Garden works.",
    url: "/faq",
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FAQ | Local Trade Garden",
    url: `${siteUrl}/faq`,
    description: metadata.description,
  };

  return (
    <SiteShell>
      <JsonLd data={[webPageSchema, faqSchema]} />
      <PageHero
        eyebrow="FAQ"
        title="Plain answers before you join."
        intro="Local Trade Garden is still in early access. These answers explain the intent and the limits."
      />
      <Section title="Questions" className="bg-white/70">
        <div className="grid gap-4">
          {faq.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-borderwarm bg-card p-5 shadow-card">
              <summary className="focus-ring cursor-pointer list-none rounded-xl text-lg font-black text-charcoal">
                {item.q}
              </summary>
              <p className="mt-3 leading-7 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="focus-ring rounded-full border border-soil/20 bg-card px-4 py-3 font-bold text-deep shadow-card" href="/safety">
            Safety and Rules
          </Link>
          <Link className="focus-ring rounded-full border border-soil/20 bg-card px-4 py-3 font-bold text-deep shadow-card" href="/contact">
            Contact
          </Link>
        </div>
      </Section>
    </SiteShell>
  );
}
