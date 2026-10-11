import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "da" | "en";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "da",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("da");

  useEffect(() => {
    const saved = window.localStorage.getItem("pioneer-lang");
    if (saved === "da" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("pioneer-lang", l);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Pick the string for the current language. */
export function useT() {
  const { lang } = useLang();
  return <T,>(v: { da: T; en: T }) => v[lang];
}
