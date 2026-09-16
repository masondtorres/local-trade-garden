export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero px-4 pb-10 pt-10 sm:px-6">
      <div className="page-hero-panel mx-auto max-w-4xl rounded-2xl p-6 sm:p-8">
        {eyebrow ? <p className="text-sm font-bold text-deep">{eyebrow}</p> : null}
        <h1 className="font-display mt-3 text-4xl font-bold leading-tight">{title}</h1>
        <p className="mt-4 text-lg leading-8 text-muted">{intro}</p>
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </section>
  );
}
