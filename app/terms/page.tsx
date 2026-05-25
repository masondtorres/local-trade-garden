import Link from "next/link";
import { email } from "@/content/site";

const sections = [
  {
    title: "Platform purpose",
    body: "Local Trade Garden is intended to help nearby gardeners, small growers and homesteaders connect for local garden and homestead trades.",
  },
  {
    title: "No cash transactions",
    body: "The platform is designed for cash-free barter and trade only. It does not provide checkout, payment processing, crypto payments or ecommerce tools.",
  },
  {
    title: "No regulated goods",
    body: "Users may not list alcohol, beer, homebrew, raw milk, meat, poultry, wild game, live animals, livestock, weapons, medicine, supplements, CBD, THC, marijuana or regulated goods.",
  },
  {
    title: "User responsibility",
    body: "Users are responsible for the accuracy of their listings, their communications, their meetup choices and their compliance with applicable rules.",
  },
  {
    title: "Food safety and local law",
    body: "Users are responsible for knowing and following local food safety, cottage food, egg, honey and garden trade laws before listing or trading any item.",
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
    body: "Local Trade Garden does not guarantee that any listing will receive offers, that any trade will be completed or that any item will meet expectations.",
  },
  {
    title: "Contact",
    body: `Questions can be sent to ${email}.`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[24px] border border-borderwarm bg-card p-6 shadow-soft sm:p-10">
        <Link href="/" className="focus-ring rounded-full text-sm font-bold text-deep">
          Back to homepage
        </Link>
        <h1 className="mt-6 text-4xl font-black text-charcoal">Terms of Service</h1>
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
