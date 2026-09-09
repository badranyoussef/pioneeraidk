import { PioneerOverlay } from "./Overlay";
import type { LatestRelease } from "@/lib/github-release";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{children}</p>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-b border-border px-5 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border px-5">
      <div aria-hidden className="grid-faint pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[38rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rise inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1">
            <span className="live-dot size-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Real-time salgscoaching
            </span>
          </div>
          <h1
            className="rise mt-7 text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Coach dine sælgere, mens samtalen stadig kan ændres.
          </h1>
          <p
            className="rise mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Pioneer giver sælgere konkrete coaching-hints i realtid — baseret på jeres egen
            salgsmetodologi.
          </p>
          <div
            className="rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#demo"
              className="w-full rounded-lg bg-accent px-6 py-3 text-center text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              Book en demo
            </a>
            <a
              href="#saadan-virker-det"
              className="w-full rounded-lg border border-border-strong px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-secondary sm:w-auto"
            >
              Se hvordan det virker
            </a>
          </div>
        </div>

        <div className="rise mt-16" style={{ animationDelay: "320ms" }}>
          <PioneerOverlay />
          <p className="mt-4 text-center font-mono text-[11px] text-muted-foreground">
            Pioneer-overlayet vist under et igangværende opkald. Eksempeldata er illustrative.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Timing() {
  return (
    <Section id="produkt">
      <div className="max-w-2xl">
        <Eyebrow>Timing</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Feedback er mest værdifuld, når sælgeren stadig kan bruge den.
        </h2>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface/40 p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Først bagefter
          </p>
          <ol className="mt-6 space-y-3">
            {["Salgssamtale", "Analyse", "Feedback"].map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <span className="flex-1 rounded-lg border border-border bg-background/40 px-4 py-3 text-sm text-muted-foreground">
                  {step}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted-foreground">
            Feedback kommer, når samtalen allerede er slut.
          </p>
        </div>

        <div className="rounded-2xl border border-accent/25 bg-accent-soft p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            Med Pioneer
          </p>
          <ol className="mt-6 space-y-3">
            {["Salgssamtale", "Real-time coaching", "Handling", "Bedre samtale"].map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <span className="flex-1 rounded-lg border border-accent/25 bg-background/40 px-4 py-3 text-sm">
                  {step}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-foreground/80">
            Sælgeren handler på feedbacken, mens samtalen stadig foregår.
          </p>
        </div>
      </div>
    </Section>
  );
}

const frameworks = ["SPIN", "Challenger", "MEDDIC", "Jeres egen playbook"];

export function Method() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Eyebrow>Jeres metode</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Ikke en generisk salgscoach. Pioneer coacher mod den salgsmetode, I faktisk bruger.
          </h2>
          <p className="mt-6 text-muted-foreground">
            I definerer og vedligeholder frameworket. Pioneer bruger derefter jeres framework til
            både real-time coaching under samtalen og analyse efter opkaldet.
          </p>
          <p className="mt-4 text-muted-foreground">
            Frameworket er ikke en statisk skabelon — det er jeres versionerede salgsmetodologi, som
            kan udvikle sig, i takt med at teamet gør det.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface/40 p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Kan arbejde med frameworks som
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {frameworks.map((f) => (
              <span
                key={f}
                className="rounded-lg border border-border bg-background/50 px-3 py-2 text-sm"
              >
                {f}
              </span>
            ))}
          </div>
          <div className="mt-8 space-y-3 border-t border-border pt-6">
            {[
              ["Realtid", "Coaching-hints under selve samtalen"],
              ["Efter opkald", "Analyse mod samme framework"],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                  {k}
                </span>
                <span className="text-sm text-muted-foreground">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const steps = [
  {
    n: "01",
    title: "Samtalen starter",
    body: "Pioneer lytter til salgssamtalen og transskriberer den live.",
  },
  {
    n: "02",
    title: "AI analyserer samtalen",
    body: "Omtrent hvert 20. sekund analyserer AI'en den seneste del af samtalen i kontekst.",
  },
  {
    n: "03",
    title: "Sælgeren får et konkret hint",
    body: "Op til 3 korte coaching-hints vises direkte i Pioneer-overlayet.",
  },
  {
    n: "04",
    title: "Samtalen analyseres bagefter",
    body: "Efter opkaldet kan sælger og salgschef se, hvordan samtalen performede mod virksomhedens framework.",
  },
];

export function HowItWorks() {
  return (
    <Section id="saadan-virker-det">
      <div className="max-w-2xl">
        <Eyebrow>Sådan virker det</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Fire trin — fra live samtale til analyse.
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="flex flex-col rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-border-strong"
          >
            <span className="font-mono text-xs text-accent">{s.n}</span>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-surface/30 p-4 md:p-6">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Eksempel på hint i overlayet
        </p>
        <div className="max-w-xl rounded-lg border border-accent/25 bg-accent-soft p-4">
          <p className="text-sm">
            <span aria-hidden className="mr-1.5">
              💡
            </span>
            Du mangler stadig at afdække, hvem der træffer den endelige beslutning.
          </p>
        </div>
      </div>
    </Section>
  );
}

const dimensions = [
  ["Afdækning", "Discovery"],
  ["Smertepunkter", "Pain points"],
  ["Hastegrad", "Urgency"],
  ["Beslutningstagere", "Stakeholders"],
  ["Indvendinger", "Objections"],
  ["Lukning", "Closing"],
];

export function Dimensions() {
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>Seks dimensioner</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Pioneer følger samtalen på tværs af seks centrale salgsdimensioner.
        </h2>
        <p className="mt-6 text-muted-foreground">
          Pioneer hjælper sælgeren med at opdage, hvad der mangler — mens der stadig er tid til at
          gøre noget ved det.
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {dimensions.map(([da, en], i) => (
          <div key={da} className="bg-surface/60 p-6">
            <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
            <h3 className="mt-4 text-lg font-semibold">{da}</h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent/80">{en}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function PostCall() {
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>Efter opkaldet</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Real-time coaching under samtalen. Dyb analyse bagefter.
        </h2>
        <p className="mt-6 text-muted-foreground">
          Samme framework, samme produkt. Sælger og salgschef ser, hvordan samtalen performede — og
          hvad næste samtale bør indeholde.
        </p>
      </div>

      {/* Mockup: web-portal med illustrative eksempeldata */}
      <div className="mt-12 rounded-2xl border border-border-strong bg-surface/70 p-2 shadow-2xl">
        <div className="rounded-xl border border-border bg-background/70">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border px-5 py-4 sm:flex sm:justify-between">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                Samtaleanalyse · Discovery-møde · Nordic Build A/S
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                32 min · Illustrative data
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground">
              Jeres framework v4
            </span>
          </div>

          <div className="grid gap-6 p-5 md:p-6 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Framework coverage
              </p>
              <div className="mt-5 space-y-4">
                {[
                  ["Afdækning", 82],
                  ["Smertepunkter", 68],
                  ["Hastegrad", 45],
                  ["Beslutningstagere", 30],
                  ["Indvendinger", 61],
                  ["Lukning", 24],
                ].map(([label, value]) => (
                  <div key={label as string}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-sm">{label}</span>
                      <span className="font-mono text-xs text-muted-foreground">{value}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-accent/80"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                  Hvad gik godt
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Gode åbne spørgsmål om nuværende onboarding-proces.</li>
                  <li>Smertepunkt om lang oplæringstid blev italesat konkret.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Hvad kunne forbedres
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Beslutningsproces og godkendere blev ikke afdækket.</li>
                  <li>Ingen aftale om næste skridt inden afslutning.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Coaching-hints
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-start justify-between gap-3">
                    <span className="text-muted-foreground">Sæt tal på oplæringstiden</span>
                    <span className="shrink-0 font-mono text-[11px] text-accent">Fulgt</span>
                  </li>
                  <li className="flex items-start justify-between gap-3">
                    <span className="text-muted-foreground">Afdæk endelig beslutningstager</span>
                    <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                      Ikke fulgt
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function FeedbackLoop() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Feedback loop</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Pioneer bliver skarpere over tid.</h2>
          <p className="mt-6 text-muted-foreground">
            Ved at se sammenhængen mellem coaching-hints og udviklingen i samtalen kan Pioneer
            løbende blive bedre til at identificere, hvilke råd der skaber fremdrift.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-surface/40 p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Analyseprincip
          </p>
          <p className="mt-5 text-sm text-foreground/90">
            Pioneer analyserer indhold og salgsadfærd mod virksomhedens metodologi.
          </p>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Pioneer analyserer ikke
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {["Følelser", "Stress", "Personlighed", "Tonefald som psykologisk indikator"].map(
              (x) => (
                <li key={x} className="rounded-lg border border-border bg-background/40 px-3 py-2">
                  {x}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* SOCIAL PROOF — PLACEHOLDER STRUKTUR.
   Erstat placeholder-logoerne nedenfor med rigtige kundelogoer, når de foreligger. */
export function SocialProof() {
  return (
    <Section>
      <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by modern sales teams
      </p>
      <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex h-20 items-center justify-center bg-surface/50 font-mono text-[11px] text-muted-foreground"
          >
            {/* PLACEHOLDER LOGO */}
            Logo {i}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center font-mono text-[11px] text-muted-foreground">
        Placeholder — rigtige logoer indsættes senere.
      </p>
    </Section>
  );
}

export function DemoCta() {
  return (
    <Section id="demo">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Gør jeres salgsmetode anvendelig i hver eneste samtale.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Se hvordan Pioneer kan hjælpe jeres team med real-time coaching baseret på jeres egen
            salgsmetodologi.
          </p>
        </div>

        <form
          className="rounded-2xl border border-border bg-surface/50 p-6 md:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4">
            {[
              { id: "navn", label: "Navn", type: "text" },
              { id: "email", label: "Arbejdsmail", type: "email" },
              { id: "virksomhed", label: "Virksomhed", type: "text" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required
                  className="mt-2 w-full rounded-lg border border-input bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent/60"
                />
              </div>
            ))}
            <div>
              <label htmlFor="besked" className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Besked
              </label>
              <textarea
                id="besked"
                name="besked"
                rows={4}
                className="mt-2 w-full resize-none rounded-lg border border-input bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent/60"
              />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Book en demo
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

export function Download({ release }: { release: LatestRelease }) {
  return (
    <Section>
      <div className="rounded-2xl border border-border bg-surface/40 p-8 md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Klar til at prøve Pioneer?</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Pioneer-appen kører på sælgerens maskine under opkaldet.
            </p>
            <p className="mt-2 font-mono text-[11px] text-muted-foreground">
              Seneste version: {release.version}
              {release.fallback && " (fallback)"}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={release.macUrl}
              className="rounded-lg border border-border-strong px-5 py-3 text-center text-sm font-medium transition-colors hover:bg-secondary"
            >
              Download til macOS
            </a>
            <a
              href={release.winUrl}
              className="rounded-lg border border-border-strong px-5 py-3 text-center text-sm font-medium transition-colors hover:bg-secondary"
            >
              Download til Windows
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="px-5 py-12">
      <div className="mx-auto grid max-w-6xl gap-6 sm:flex sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="size-2.5 rotate-45 bg-accent" />
            <span className="font-display text-lg font-semibold">Pioneer</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            AI-powered real-time sales coaching.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          {/* PLACEHOLDER kontakt */}
          <a href="mailto:hello@pioneerai.dk" className="transition-colors hover:text-foreground">
            hello@pioneerai.dk
          </a>
          <p className="mt-2 font-mono text-[11px]">pioneerai.dk</p>
        </div>
      </div>
    </footer>
  );
}
