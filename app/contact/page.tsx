import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { PageHero } from "@/components/PageBlocks";
import { Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { email } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact | Local Trade Garden",
  description: "Contact Local Trade Garden about early access, local trade questions or partner interest.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Ask a simple question."
        intro={`Reach Local Trade Garden at ${email} or send a short message through the form.`}
      />
      <Section title="Contact form" className="bg-white/70">
        <ContactForm />
      </Section>
    </SiteShell>
  );
}
