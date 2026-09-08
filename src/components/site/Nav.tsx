import { useState } from "react";

const links = [
  { href: "#produkt", label: "Produkt" },
  { href: "#saadan-virker-det", label: "Sådan virker det" },
  { href: "#demo", label: "Demo" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:flex md:justify-between">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="size-2.5 shrink-0 rotate-45 bg-accent" />
          <span className="truncate font-display text-lg font-semibold tracking-tight">Pioneer</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#demo"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Book en demo
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
          className="shrink-0 rounded-lg border border-border px-3 py-2 text-sm md:hidden"
        >
          {open ? "Luk" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-accent px-4 py-2 text-center text-sm font-medium text-accent-foreground"
            >
              Book en demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
