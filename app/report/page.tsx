import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { JsonLd, PageHero } from "@/components/PageBlocks";
import { Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Report a concern | Local Trade Garden",
  description: "Report a listing, account, safety or marketplace concern to Local Trade Garden.",
  alternates: { canonical: "/report" },
  openGraph: {
    title: "Report a concern | Local Trade Garden",
    description: "Report a listing, account, safety or marketplace concern to Local Trade Garden.",
    url: "/report",
  },
};

export default function ReportPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Report a concern | Local Trade Garden",
    url: `${siteUrl}/report`,
    description: metadata.description,
  };

  return (
    <SiteShell>
      <JsonLd data={webPageSchema} />
      <PageHero
        eyebrow="Report a concern"
        title="Tell us what needs attention."
        intro="Report a listing, account, safety issue or other marketplace concern. Include the listing URL or enough detail to identify the problem when possible."
      />
      <Section
        title="Report form"
        intro="Use the existing contact form below. Reports are reviewed through the same public contact path already used by Local Trade Garden."
        className="bg-white/70"
      >
        <ContactForm />
      </Section>
    </SiteShell>
  );
}
