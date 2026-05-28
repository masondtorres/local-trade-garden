import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { JsonLd, PageHero } from "@/components/PageBlocks";
import { Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { email, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact | Local Trade Garden",
  description: "Contact Local Trade Garden with questions, concerns or local partner interest.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Local Trade Garden",
    description: "Contact Local Trade Garden with questions, concerns or local partner interest.",
    url: "/contact",
  },
};

export default function ContactPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contact | Local Trade Garden",
    url: `${siteUrl}/contact`,
    description: metadata.description,
  };

  return (
    <SiteShell>
      <JsonLd data={webPageSchema} />
      <PageHero
        eyebrow="Contact"
        title="Ask a simple question."
        intro={`Reach Local Trade Garden at ${email} or send a short message through the form.`}
      />
      <Section
        title="Contact form"
        intro="Ask a simple question, report a concern or reach out about local partner interest."
        className="bg-white/70"
      >
        <ContactForm />
      </Section>
    </SiteShell>
  );
}
