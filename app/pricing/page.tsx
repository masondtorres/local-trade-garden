import type { Metadata } from "next";
import Link from "next/link";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilityNote, UtilitySection } from "@/components/UtilityPage";
import { pricingPlans } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing | Local Trade Garden",
  description: "Simple early-access pricing for Local Trade Garden neighbor listings and local reach.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <HomeSiteShell>
      <UtilityHero
        eyebrow="Pricing"
        title="Start free. Upgrade when you need more reach."
        intro="Local Trade Garden is early access. These simple plans keep the board useful without turning it into a noisy marketplace."
      >
        <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-xl bg-garden px-6 py-3 font-bold text-white hover:bg-deep" href="/early-access">
          Join Early Access
        </Link>
      </UtilityHero>
      <UtilitySection title="Neighbor plans" intro="Final billing may change before public launch. The pilot starts with simple limits people can understand.">
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article key={plan.name} className="utility-link-card rounded-2xl border border-borderwarm bg-card p-6 shadow-card">
              <p className="font-display text-2xl font-bold text-charcoal">{plan.name}</p>
              <p className="mt-3 text-3xl font-black text-deep">{plan.price}</p>
              <p className="mt-3 leading-7 text-muted">{plan.body}</p>
              <ul className="mt-5 grid gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="rounded-xl bg-white/60 px-4 py-3 font-bold text-charcoal">
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </UtilitySection>
      <UtilitySection title="Simple rule" muted>
        <UtilityNote>
          Paid reach does not approve, inspect, guarantee or manage any trade. Users still handle their own deal and follow the law that applies where they live.
        </UtilityNote>
      </UtilitySection>
    </HomeSiteShell>
  );
}
