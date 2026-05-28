import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { complianceStatement, photoSet, safetyStatement } from "@/content/site";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div>
          {eyebrow ? (
            <p className="inline-flex rounded-full border border-borderwarm bg-card px-4 py-2 text-sm font-black text-deep shadow-card">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display mt-6 text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">{intro}</p>
          {children ? <div className="mt-7">{children}</div> : null}
        </div>
        <div className="overflow-hidden rounded-[28px] border border-soil/15 bg-card shadow-soft">
          <div className="relative min-h-[280px]">
            <Image
              src={photoSet[0].src}
              alt={photoSet[0].alt}
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soil/65 via-soil/10 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 rounded-2xl bg-linen/92 p-4 font-display text-xl font-bold leading-snug text-deep shadow-card">
              From your hands. For someone nearby.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ComplianceNote({ short = false }: { short?: boolean }) {
  return (
    <div className="rounded-2xl border border-garden/25 bg-linen p-5 shadow-card">
      <div className="flex gap-3">
        <ShieldCheck aria-hidden="true" className="mt-1 shrink-0 text-garden" />
        <div>
          <h2 className="font-display text-xl font-bold text-deep">Simple trade rule</h2>
          <p className="mt-2 leading-7 text-charcoal">
            {short ? safetyStatement : complianceStatement}
          </p>
        </div>
      </div>
    </div>
  );
}
