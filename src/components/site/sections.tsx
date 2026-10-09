import { Link } from "@tanstack/react-router";
import { PioneerOverlay } from "./Overlay";
import type { LatestRelease } from "@/lib/github-release";
import { company } from "@/lib/company";

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

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border px-5">
      <div aria-hidden className="grid-faint pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-6xl py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rise inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1">
            <span className="live-dot size-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              AI sales coaching
            </span>
          </div>
          <h1 className="rise mt-7 text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl" style={{ animationDelay: "80ms" }}>
            Real-time AI coaching for better sales conversations.
          </h1>
          <p className="rise mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg" style={{ animationDelay: "160ms" }}>
            Pioneer gives sales reps short, concrete hints during the call — based on your own sales
            methodology — so they can act while the conversation is still happening.
          </p>
          <div className="rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
            <a href="#contact" className="w-full rounded-lg bg-accent px-6 py-3 text-center text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto">
              Book a demo
            </a>
            <a href="#features" className="w-full rounded-lg border border-border-strong px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-secondary sm:w-auto">
              See how it works
            </a>
          </div>
        </div>
        <div className="rise mt-16" style={{ animationDelay: "320ms" }}>
          <PioneerOverlay />
          <p className="mt-4 text-center font-mono text-[11px] text-muted-foreground">
            The Pioneer overlay during a live call. Example data is illustrative.
          </p>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    n: "01",
    title: "Real-time Coaching",
    body: "Pioneer listens and transcribes the call live. Roughly every 20 seconds it analyses the latest part of the conversation and shows up to three short, actionable hints in an overlay.",
  },
  {
    n: "02",
    title: "Sales Frameworks",
    body: "Coaching follows the methodology you actually use — SPIN, Challenger, MEDDIC or your own internal playbook. You define and maintain the framework; Pioneer applies it.",
  },
  {
    n: "03",
    title: "Post-call Analysis",
    body: "After the call, the conversation is analysed against your framework: what was covered, what went well and what could be improved — in the Pioneer web portal.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <Eyebrow>Product</Eyebrow>
      <h2 className="mt-4 max-w-2xl text-3xl font-semibold md:text-4xl">
        Feedback while it can still change the outcome.
      </h2>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.n} className="rounded-2xl border border-border bg-surface/40 p-6 md:p-8">
            <p className="font-mono text-xs text-accent">{f.n}</p>
            <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
        Pioneer analyses conversation content and sales behaviour against your methodology. It does
        not analyse emotions, stress, personality or tone of voice.
      </p>
    </Section>
  );
}

export function Download({ release }: { release: LatestRelease }) {
  return (
    <Section id="download">
      <div className="rounded-2xl border border-border bg-surface/40 p-8 md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Ready to try Pioneer?</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              The Pioneer desktop app runs on the rep's computer during the call.
            </p>
            <p className="mt-2 font-mono text-[11px] text-muted-foreground">Latest version: {release.version}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={release.macUrl} className="rounded-lg border border-border-strong px-5 py-3 text-center text-sm font-medium transition-colors hover:bg-secondary">
              Download for macOS
            </a>
            <a href={release.winUrl} className="rounded-lg border border-border-strong px-5 py-3 text-center text-sm font-medium transition-colors hover:bg-secondary">
              Download for Windows
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
        ["Legal name", company.legalName],
        ["CVR", company.cvr],
        ["Address", `${company.street}, ${company.postalCity}`],
        ["Country", company.country],
        ["Email", company.email],
        ["Domain", company.domain],
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
  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Book a demo.</h2>
          <p className="mt-6 text-muted-foreground">
            Write to us and we'll show you how Pioneer coaches against your own sales methodology.
          </p>
          <a
            href={`mailto:${company.email}?subject=Pioneer%20demo`}
            className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            {company.email}
          </a>
        </div>
        <div className="rounded-2xl border border-border bg-surface/50 p-6 md:p-8">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Company information</p>
          <CompanyDetails />
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="px-5 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center gap-2">
            <span className="size-2.5 rotate-45 bg-accent" />
            <span className="font-display text-lg font-semibold">Pioneer</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">AI-powered real-time sales coaching.</p>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            {company.legalName} · CVR {company.cvr}
            <br />
            {company.street}, {company.postalCity}, {company.country}
            <br />
            <a href={`mailto:${company.email}`} className="hover:text-foreground">{company.email}</a>
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
          <Link to="/dpa" className="hover:text-foreground">Data Processing Agreement</Link>
        </nav>
      </div>
    </footer>
  );
}
