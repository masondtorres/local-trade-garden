import type { Metadata } from "next";
import { PageHero } from "@/components/PageBlocks";
import { Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { faq } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQ | Local Trade Garden",
  description:
    "Answers about trading, regulated goods, food safety, legal responsibility, address privacy and early access status.",
};

export default function FaqPage() {
  return (
    <SiteShell>
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
      </Section>
    </SiteShell>
  );
}
