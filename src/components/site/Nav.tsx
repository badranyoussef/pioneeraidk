import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useLang, useT } from "@/lib/i18n";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const t = useT();
  const label = theme === "dark"
    ? t({ da: "Skift til lys visning", en: "Switch to light mode" })
    : t({ da: "Skift til mørk visning", en: "Switch to dark mode" });
  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={label} title={label} className="shrink-0 text-muted-foreground">
      {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  );
}

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center rounded-lg border border-border p-0.5 font-mono text-[11px]">
      {(["da", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-md px-2 py-1 uppercase transition-colors ${
            lang === l ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const t = useT();
  const links = [
    { href: "/#features", label: t({ da: "Produkt", en: "Product" }) },
    { href: "/#download", label: "Download" },
    { href: "/#contact", label: t({ da: "Kontakt", en: "Contact" }) },
  ];
  const cta = t({ da: "Book en demo", en: "Book a demo" });

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="size-2.5 shrink-0 rotate-45 bg-accent" />
          <span className="font-display text-lg font-semibold tracking-tight">Pioneer</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <LangSwitch />
          <ThemeSwitch />
          <a
            href="/#contact"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            {cta}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangSwitch />
          <ThemeSwitch />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
            className="rounded-lg border border-border px-3 py-2 text-sm"
          >
            {open ? t({ da: "Luk", en: "Close" }) : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-accent px-4 py-2 text-center text-sm font-medium text-accent-foreground"
            >
              {cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
