import Link from "next/link";
import { email } from "@/content/site";

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
    body: "The product concept is designed around general city or neighborhood information. Exact addresses should not be displayed publicly.",
  },
  {
    title: "Public profile information",
    body: "When the full app exists, public profiles may include display name, general location, grower type, listings, trade history and ratings.",
  },
  {
    title: "Form submissions",
    body: "This website currently uses a mailto fallback for form submissions. A production form backend may be added before public launch.",
  },
  {
    title: "Data sharing",
    body: "Local Trade Garden should not sell personal information. Limited sharing may be required for service providers, legal compliance, safety and moderation.",
  },
  {
    title: "Contact",
    body: `Privacy questions can be sent to ${email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[24px] border border-borderwarm bg-card p-6 shadow-soft sm:p-10">
        <Link href="/" className="focus-ring rounded-full text-sm font-bold text-deep">
          Back to homepage
        </Link>
        <h1 className="mt-6 text-4xl font-black text-charcoal">Privacy Policy</h1>
        <p className="mt-4 rounded-2xl border border-warning/30 bg-warning/10 p-4 font-bold leading-7 text-warning">
          This is a working placeholder and must be reviewed by a qualified
          attorney before public launch.
        </p>
        <div className="mt-8 grid gap-6">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-black text-deep">{section.title}</h2>
              <p className="mt-2 leading-7 text-muted">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
