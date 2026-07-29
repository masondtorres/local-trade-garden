import Link from "next/link";

export function UtilityHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="utility-hero border-b border-borderwarm px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="utility-hero-panel mx-auto max-w-6xl rounded-2xl p-6 sm:p-8">
        {eyebrow ? (
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-garden">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted sm:text-xl">{intro}</p>
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}

export function UtilitySection({
  title,
  intro,
  children,
  muted = false,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section className={`px-4 py-10 sm:px-6 lg:px-8 ${muted ? "utility-section-muted" : ""}`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">{title}</h2>
        {intro ? <p className="mt-3 max-w-3xl leading-7 text-muted">{intro}</p> : null}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export function UtilityList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="utility-list-item rounded-xl border border-borderwarm bg-card p-4 font-bold text-charcoal shadow-card">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function UtilityNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="utility-note rounded-xl border border-garden/25 bg-linen p-5 leading-7 text-charcoal">
      {children}
    </div>
  );
}

export function UtilityLinks({
  links,
}: {
  links: Array<{ href: string; title: string; body: string; accentClass?: string }>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className={`utility-link-card focus-ring min-h-40 rounded-2xl border border-borderwarm bg-card p-5 shadow-card transition hover:border-garden hover:bg-white hover:shadow-soft ${link.accentClass ?? ""}`}
        >
          <h2 className="text-xl font-bold text-charcoal">{link.title}</h2>
          <p className="mt-2 leading-7 text-muted">{link.body}</p>
        </Link>
      ))}
    </div>
  );
}
