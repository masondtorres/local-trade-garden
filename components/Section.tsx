type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-garden">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-lg leading-8 text-muted">{intro}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function InfoCard({
  title,
  body,
  icon: Icon,
}: {
  title: string;
  body?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <article className="rounded-2xl border border-borderwarm bg-card p-5 shadow-card">
      {Icon ? (
        <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-softyellow/45 text-deep">
          <Icon aria-hidden="true" size={22} />
        </div>
      ) : null}
      <h3 className="font-display text-lg font-bold text-charcoal">{title}</h3>
      {body ? <p className="mt-2 leading-7 text-muted">{body}</p> : null}
    </article>
  );
}
