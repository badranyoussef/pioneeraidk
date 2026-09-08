const transcript = [
  { who: "Kunde", text: "Vi har haft udfordringer med at få onboardet nye sælgere hurtigt nok." },
  { who: "Sælger", text: "Hvor lang tid tager det typisk, før en ny sælger er selvkørende hos jer?" },
  { who: "Kunde", text: "Nok fire-fem måneder. Det er dyrt, men vi har ikke prioriteret det endnu." },
];

const hints = [
  {
    text: "Du mangler stadig at afdække, hvem der træffer den endelige beslutning.",
    tag: "Beslutningstagere",
  },
  {
    text: "Sæt tal på de fire-fem måneders onboarding — gør omkostningen konkret.",
    tag: "Smertepunkter",
  },
  {
    text: "Spørg hvad der sker, hvis de venter et halvt år med at løse det.",
    tag: "Hastegrad",
  },
];

/** Pioneer-overlayet som det ser ud under et live opkald. Illustrative data. */
export function PioneerOverlay({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-2xl border border-border-strong bg-surface/80 p-2 shadow-2xl backdrop-blur-xl">
      <div className="rounded-xl border border-border bg-background/70">
        {/* Call bar */}
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border px-4 py-3 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-secondary font-mono text-xs">
              NB
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Discovery-møde · Nordic Build A/S</p>
              <p className="font-mono text-[11px] text-muted-foreground">Illustrative data</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-1">
            <span className="live-dot size-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
              LIVE 14:22
            </span>
          </div>
        </div>

        <div className={compact ? "p-4" : "grid gap-4 p-4 lg:grid-cols-[1.05fr_1fr]"}>
          {!compact && (
            <div className="space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Live transskription
              </p>
              {transcript.map((line, i) => (
                <div key={i} className="rise" style={{ animationDelay: `${i * 140}ms` }}>
                  <p className="font-mono text-[11px] text-muted-foreground">{line.who}</p>
                  <p className="text-sm leading-relaxed text-foreground/90">{line.text}</p>
                </div>
              ))}
              <div className="flex items-center gap-1.5 pt-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="live-dot size-1.5 rounded-full bg-muted-foreground"
                    style={{ animationDelay: `${i * 220}ms` }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Coaching-hints
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">Jeres framework</p>
            </div>
            {hints.map((hint, i) => (
              <div
                key={i}
                className="hint-enter rounded-lg border border-accent/25 bg-accent-soft p-3"
                style={{ animationDelay: `${300 + i * 220}ms` }}
              >
                <p className="text-sm leading-snug">
                  <span aria-hidden className="mr-1.5">
                    💡
                  </span>
                  {hint.text}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-accent/80">
                  {hint.tag}
                </p>
              </div>
            ))}
            <p className="font-mono text-[11px] text-muted-foreground">
              Ny analyse ca. hvert 20. sekund
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
