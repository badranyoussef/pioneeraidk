import { Nav } from "./Nav";
import { Footer, CompanyDetails } from "./sections";

export type LegalSection = { heading: string; body: React.ReactNode };

export function LegalPage({
  title,
  updated,
  draft,
  sections,
}: {
  title: string;
  updated: string;
  draft?: boolean;
  sections: LegalSection[];
}) {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="px-5 py-16 md:py-24">
        <article className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Legal</p>
            <button
              onClick={() => window.print()}
              className="rounded-lg border border-border-strong px-4 py-2 text-sm transition-colors hover:bg-secondary print:hidden"
            >
              Download PDF
            </button>
          </div>
          <h1 className="mt-4 text-3xl font-semibold md:text-5xl">{title}</h1>
          <p className="mt-3 font-mono text-[11px] text-muted-foreground">Last updated: {updated}</p>
          {draft && (
            <p className="mt-6 rounded-lg border border-accent/30 bg-accent-soft p-4 text-sm">
              DRAFT — pending legal review. This document is a structural placeholder and is not yet
              a binding agreement.
            </p>
          )}
          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <section key={s.heading}>
                <h2 className="text-lg font-semibold">
                  {i + 1}. {s.heading}
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{s.body}</div>
              </section>
            ))}
            <section className="rounded-2xl border border-border bg-surface/50 p-6">
              <h2 className="mb-5 text-lg font-semibold">Company</h2>
              <CompanyDetails />
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
