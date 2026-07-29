import type { Metadata } from "next";
import Link from "next/link";
import { HomeSiteShell } from "@/components/SiteShell";
import { UtilityHero, UtilityLinks, UtilitySection } from "@/components/UtilityPage";

export const metadata: Metadata = {
  title: "Pilot Area | Local Trade Garden",
  description: "How the first Local Trade Garden pilot area in Sevier County and nearby East Tennessee will work.",
  alternates: { canonical: "/pilot-area" },
};

const details = [
  { href: "/trade", title: "Why local matters", body: "Sevier County and nearby East TN trades are easier to understand, arrange and complete." },
  { href: "/safety", title: "Why the pilot starts small", body: "A smaller Sevier and Knox area pilot makes rules, safety and feedback easier to manage." },
  { href: "/early-access", title: "How to join early access", body: "Share your city, state and the kind of trade you may offer." },
  { href: "/local-partners", title: "How local partners can help", body: "Local groups can share practical feedback and help people find the pilot." },
];

export default function PilotAreaPage() {
  return (
    <HomeSiteShell>
      <UtilityHero
        eyebrow="East TN pilot area"
        title="Starting in Sevier County and nearby East Tennessee."
        intro="Local Trade Garden is focused first on Sevier County, nearby Knox County and the surrounding East TN area so trades stay practical, nearby and easier to moderate."
      >
        <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-xl bg-garden px-6 py-3 font-bold text-white hover:bg-deep" href="/early-access">
          Join Early Access
        </Link>
      </UtilityHero>
      <UtilitySection title="How the pilot will work">
        <UtilityLinks links={details} />
      </UtilitySection>
    </HomeSiteShell>
  );
}
