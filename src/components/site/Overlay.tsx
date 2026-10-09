const transcript = [
  { who: "Prospect", text: "Onboarding new reps has been a real challenge for us." },
  { who: "Rep", text: "How long does it usually take before a new rep is fully ramped?" },
  { who: "Prospect", text: "Four to five months. It's costly, but we haven't prioritised it yet." },
];

const hints = [
  { text: "You still haven't uncovered who makes the final decision.", tag: "Decision makers" },
  { text: "Quantify the four to five months of ramp time — make the cost concrete.", tag: "Pain points" },
  { text: "Ask what happens if they wait another six months to solve it.", tag: "Urgency" },
];

/** The Pioneer overlay during a live call. Illustrative data. */
export function PioneerOverlay() {
  return (
    <div className="rounded-2xl border border-border-strong bg-surface/80 p-2 shadow-2xl backdrop-blur-xl">
      <div className="rounded-xl border border-border bg-background/70">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border px-4 py-3 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-secondary font-mono text-xs">
              DC
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Discovery call · Example Co.</p>
              <p className="font-mono text-[11px] text-muted-foreground">Illustrative data</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-1">
            <span className="live-dot size-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[11px] tracking-wide text-muted-foreground">LIVE 14:22</span>
          </div>
        </div>

        <div className="grid gap-4 p-4 lg:grid-cols-[1.05fr_1fr]">
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Live transcript
            </p>
            {transcript.map((line, i) => (
              <div key={i} className="rise" style={{ animationDelay: `${i * 140}ms` }}>
                <p className="font-mono text-[11px] text-muted-foreground">{line.who}</p>
                <p className="text-sm leading-relaxed text-foreground/90">{line.text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Coaching hints</p>
              <p className="font-mono text-[11px] text-muted-foreground">Your framework</p>
            </div>
            {hints.map((hint, i) => (
              <div
                key={i}
                className="hint-enter rounded-lg border border-accent/25 bg-accent-soft p-3"
                style={{ animationDelay: `${300 + i * 220}ms` }}
              >
                <p className="text-sm leading-snug">
                  <span aria-hidden className="mr-1.5">💡</span>
                  {hint.text}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-accent/80">{hint.tag}</p>
              </div>
            ))}
            <p className="font-mono text-[11px] text-muted-foreground">New analysis roughly every 20 seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}
