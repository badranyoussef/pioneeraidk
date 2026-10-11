import { Link } from "@tanstack/react-router";
import { PioneerOverlay } from "./Overlay";
import type { LatestRelease } from "@/lib/github-release";
import { company } from "@/lib/company";
import { useT } from "@/lib/i18n";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{children}</p>;
}

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-border px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

const trustItems = [
  { da: "Data opbevares i EU", en: "Data stored in the EU" },
  { da: "Ingen lyd gemmes", en: "No audio is stored" },
  { da: "Ingen analyse af følelser", en: "No emotion analysis" },
];

export function TrustBar() {
  const t = useT();
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
      {trustItems.map((i) => (
        <li key={i.en} className="flex items-center gap-2 text-sm text-muted-foreground">
          <svg viewBox="0 0 16 16" className="size-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t(i)}
        </li>
      ))}
    </ul>
  );
}

export function Hero() {
  const t = useT();
  return (
    <section className="relative overflow-hidden border-b border-border px-5">
      <div aria-hidden className="grid-faint pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-6xl py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rise inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1">
            <span className="live-dot size-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {t({ da: "AI-salgscoaching", en: "AI sales coaching" })}
            </span>
          </div>
          <h1 className="rise mt-7 text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl" style={{ animationDelay: "80ms" }}>
            {t({
              da: "Real-time AI-coaching til bedre salgssamtaler.",
              en: "Real-time AI coaching for better sales conversations.",
            })}
          </h1>
          <p className="rise mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg" style={{ animationDelay: "160ms" }}>
            {t({
              da: "Pioneer giver sælgere korte, konkrete hints under samtalen — baseret på jeres egen salgsmetode — så de kan handle, mens samtalen stadig foregår.",
              en: "Pioneer gives sales reps short, concrete hints during the call — based on your own sales methodology — so they can act while the conversation is still happening.",
            })}
          </p>
          <div className="rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
            <a href="#contact" className="w-full rounded-lg bg-accent px-6 py-3 text-center text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto">
              {t({ da: "Book en demo", en: "Book a demo" })}
            </a>
            <a href="#features" className="w-full rounded-lg border border-border-strong px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-secondary sm:w-auto">
              {t({ da: "Se hvordan det virker", en: "See how it works" })}
            </a>
          </div>
          <div className="rise mt-8" style={{ animationDelay: "280ms" }}>
            <TrustBar />
          </div>
        </div>
        <div className="rise mt-16" style={{ animationDelay: "320ms" }}>
          <PioneerOverlay />
          <p className="mt-4 text-center font-mono text-[11px] text-muted-foreground">
            {t({
              da: "Pioneer-overlayet under et live opkald. Eksempeldata er illustrative.",
              en: "The Pioneer overlay during a live call. Example data is illustrative.",
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Timing() {
  const t = useT();
  const after = [
    { da: "Gennemgang dage senere, hvis den sker", en: "Review days later, if it happens at all" },
    { da: "Øjeblikket er tabt, aftalen er afgjort", en: "The moment is gone, the deal is decided" },
    { da: "Afhænger af lederens tid", en: "Depends on the manager's time" },
  ];
  const during = [
    { da: "Et kort hint i samme sekund, det er relevant", en: "A short hint the moment it's relevant" },
    { da: "Næste spørgsmål stilles, ikke glemt", en: "The next question gets asked, not forgotten" },
    { da: "Coaching på hvert eneste opkald", en: "Coaching on every single call" },
  ];
  return (
    <Section>
      <h2 className="max-w-3xl text-3xl font-semibold md:text-5xl">
        {t({ da: "Feedback virker bedst, før kunden har lagt på.", en: "Feedback works best before the customer hangs up." })}
      </h2>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-secondary/50 p-8 md:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {t({ da: "Efter opkaldet", en: "After the call" })}
          </p>
          <h3 className="mt-5 text-2xl font-semibold text-muted-foreground md:text-3xl">
            {t({ da: "Du lærer, hvad der gik galt.", en: "You learn what went wrong." })}
          </h3>
          <ul className="mt-8 space-y-4">
            {after.map((i) => (
              <li key={i.en} className="flex gap-4 text-muted-foreground">
                <span aria-hidden>—</span>
                {t(i)}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-accent bg-surface p-8 shadow-[0_20px_60px_-30px_var(--color-accent)] md:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {t({ da: "Under opkaldet", en: "During the call" })}
          </p>
          <h3 className="mt-5 text-2xl font-semibold md:text-3xl">
            {t({ da: "Du retter kursen, mens det tæller.", en: "You correct course while it matters." })}
          </h3>
          <ul className="mt-8 space-y-4">
            {during.map((i) => (
              <li key={i.en} className="flex gap-4">
                <span aria-hidden className="text-accent">→</span>
                {t(i)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

const features = [
  {
    n: "01",
    title: { da: "Live hints", en: "Live hints" },
    body: {
      da: "Få ord, på det rigtige tidspunkt. Diskret i hjørnet af skærmen — kun du ser dem.",
      en: "A few words, at the right moment. Discreetly in the corner of your screen — only you see them.",
    },
  },
  {
    n: "02",
    title: { da: "Jeres egen salgsmetode", en: "Your own sales method" },
    body: {
      da: "Pioneer coacher efter jeres trin, spørgsmål og regler — ikke efter en standardbog.",
      en: "Pioneer coaches by your steps, questions and rules — not by a generic playbook.",
    },
  },
  {
    n: "03",
    title: { da: "Analyse bagefter", en: "Analysis afterwards" },
    body: {
      da: "Se hvilke trin der blev fulgt, og hvor teamet kan blive skarpere.",
      en: "See which steps were followed, and where the team can get sharper.",
    },
  },
];

export function Features() {
  const t = useT();
  return (
    <Section id="features">
      <Eyebrow>{t({ da: "Produkt", en: "Product" })}</Eyebrow>
      <h2 className="mt-4 max-w-2xl text-3xl font-semibold md:text-4xl">
        {t({ da: "Feedback, mens den stadig kan ændre udfaldet.", en: "Feedback while it can still change the outcome." })}
      </h2>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.n} className="rounded-2xl border border-border bg-surface/40 p-6 md:p-8">
            <p className="font-mono text-xs text-accent">{f.n}</p>
            <h3 className="mt-4 text-xl font-semibold">{t(f.title)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(f.body)}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-2xl border border-border p-6">
        <TrustBar />
      </div>
    </Section>
  );
}

export function Download({ release }: { release: LatestRelease }) {
  const t = useT();
  return (
    <Section id="download">
      <div className="rounded-2xl border border-border bg-surface/40 p-8 md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">{t({ da: "Download nu", en: "Download now" })}</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {t({
                da: "Pioneer-appen kører på sælgerens computer under samtalen.",
                en: "The Pioneer desktop app runs on the rep's computer during the call.",
              })}
            </p>
            <p className="mt-2 font-mono text-[11px] text-muted-foreground">
              {t({ da: "Seneste version", en: "Latest version" })}: {release.version}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={release.macUrl} className="rounded-lg border border-border-strong px-5 py-3 text-center text-sm font-medium transition-colors hover:bg-secondary">
              {t({ da: "Download til macOS", en: "Download for macOS" })}
            </a>
            <a href={release.winUrl} className="rounded-lg border border-border-strong px-5 py-3 text-center text-sm font-medium transition-colors hover:bg-secondary">
              {t({ da: "Download til Windows", en: "Download for Windows" })}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function CompanyDetails() {
  return (
    <dl className="grid gap-3 text-sm">
      {[
        ["Pioneer", company.domain],
        ["CVR", company.cvr],
        ["Email", company.email],
      ].map(([k, v]) => (
        <div key={k} className="grid grid-cols-[7rem_1fr] gap-3">
          <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Contact() {
  const t = useT();
  return (
    <Section id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>{t({ da: "Kontakt", en: "Contact" })}</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{t({ da: "Book en demo.", en: "Book a demo." })}</h2>
        <p className="mt-6 text-muted-foreground">
          {t({
            da: "Skriv til os, så viser vi, hvordan Pioneer coacher efter jeres egen salgsmetode.",
            en: "Write to us and we'll show you how Pioneer coaches against your own sales methodology.",
          })}
        </p>
        <a
          href={`mailto:${company.email}?subject=Pioneer%20demo`}
          className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          {t({ da: "Kontakt", en: "Contact" })}
        </a>
      </div>
    </Section>
  );
}

export function Footer() {
  const t = useT();
  return (
    <footer className="px-5 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center gap-2">
            <span className="size-2.5 rotate-45 bg-accent" />
            <span className="font-display text-lg font-semibold">Pioneer</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {t({ da: "AI-drevet real-time salgscoaching.", en: "AI-powered real-time sales coaching." })}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            CVR {company.cvr} · {company.domain} ·{" "}
            <a href={`mailto:${company.email}`} className="hover:text-foreground">{company.email}</a>
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground">{t({ da: "Privatlivspolitik", en: "Privacy Policy" })}</Link>
          <Link to="/terms" className="hover:text-foreground">{t({ da: "Vilkår", en: "Terms of Service" })}</Link>
          <Link to="/dpa" className="hover:text-foreground">{t({ da: "Databehandleraftale", en: "Data Processing Agreement" })}</Link>
        </nav>
      </div>
    </footer>
  );
}
