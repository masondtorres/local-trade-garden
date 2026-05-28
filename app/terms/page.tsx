import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/PageBlocks";
import { SiteShell } from "@/components/SiteShell";
import { complianceStatement, email, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service | Local Trade Garden",
  description:
    "Draft Local Trade Garden terms for early access review, including trade-only purpose, user responsibility and compliance requirements.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    title: "Platform purpose",
    body: "Local Trade Garden is an early access connection platform for local trades involving things people made, grew, raised, cooked, built, repaired, taught, created or earned through honest labor. The live trading app is not open yet.",
  },
  {
    title: "Trade only",
    body: "The platform is for local trades and neighbor-to-neighbor exchange. It does not provide checkout, payment processing, crypto payments, delivery routing or ecommerce tools.",
  },
  {
    title: "User responsibility",
    body: complianceStatement,
  },
  {
    title: "Food safety and local law",
    body: "Local Trade Garden does not inspect goods, verify food safety, verify licensing or guarantee any trade. Users are responsible for following local laws and using common sense before meeting or trading. This is not legal advice.",
  },
  {
    title: "Account suspension",
    body: "Local Trade Garden may suspend or remove accounts that violate platform rules, create safety concerns or misuse the service.",
  },
  {
    title: "Reports and moderation",
    body: "The platform may review reported users, reported listings and flagged content, and may remove content that appears to violate rules.",
  },
  {
    title: "No guarantee of trades",
    body: "Local Trade Garden does not guarantee that any listing will receive offers, that any trade will be completed or that any item or service will meet expectations.",
  },
  {
    title: "Contact",
    body: `Questions can be sent to ${email}.`,
  },
];

export default function TermsPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service | Local Trade Garden",
    url: `${siteUrl}/terms`,
    description: metadata.description,
  };

  return (
    <SiteShell>
      <JsonLd data={webPageSchema} />
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[24px] border border-borderwarm bg-card p-6 shadow-soft sm:p-10">
          <Link href="/" className="focus-ring rounded-full text-sm font-bold text-deep">
            Back to homepage
          </Link>
          <h1 className="font-display mt-6 text-4xl font-bold text-charcoal">Terms of Service</h1>
          <p className="mt-4 rounded-2xl border border-warning/30 bg-warning/10 p-4 font-bold leading-7 text-warning">
            Draft notice: This page is a working draft for early access review. It
            must be reviewed by a qualified attorney before public launch.
          </p>
          <div className="mt-8 grid gap-6">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-xl font-bold text-deep">{section.title}</h2>
                <p className="mt-2 leading-7 text-muted">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
