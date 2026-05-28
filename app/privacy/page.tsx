import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/PageBlocks";
import { SiteShell } from "@/components/SiteShell";
import { email, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Local Trade Garden",
  description:
    "Draft Local Trade Garden privacy policy for early access review, form submissions, location privacy and data use.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "Information collected",
    body: "Local Trade Garden may collect information submitted through forms, including name, email address, city, state, grower type, organization information and messages.",
  },
  {
    title: "How information is used",
    body: "Information may be used to contact people about early access, launch updates, local partner interest, support questions and related Local Trade Garden communications.",
  },
  {
    title: "Location privacy",
    body: "The product is designed around general city or neighborhood information. Exact addresses should not be displayed publicly.",
  },
  {
    title: "Public profile information",
    body: "When the full app exists, public profiles may include display name, general location, grower type, listings, trade history and ratings.",
  },
  {
    title: "Form submissions",
    body: "This website currently shows a local form success state for early access review. A production form backend must be connected before public launch.",
  },
  {
    title: "Data sharing",
    body: "We do not sell personal information. Limited sharing may be required for service providers, legal compliance, safety and moderation. TODO: Confirm final data practices before public launch.",
  },
  {
    title: "Contact",
    body: `Privacy questions can be sent to ${email}.`,
  },
];

export default function PrivacyPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | Local Trade Garden",
    url: `${siteUrl}/privacy`,
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
          <h1 className="font-display mt-6 text-4xl font-bold text-charcoal">Privacy Policy</h1>
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
