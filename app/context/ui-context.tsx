"use client";

import { createContext, useContext, useMemo, useState } from "react";

type Language = "en" | "pl";

type UIContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof dictionary.en) => string;
};

const dictionary = {
  en: {
    appTitle: "Poland Quiz",
    subtitle: "Poland Quiz.exe",
    woj: "Województwa Only",
    gminy: "Gminy Only",
    mixed: "Mixed (Randomized)",
    study: "Study Mode",
    lang: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark"
  },
  pl: {
    appTitle: "Quiz o Polsce",
    subtitle: "Poland Quiz.exe",
    woj: "Tylko Województwa",
    gminy: "Tylko Gminy",
    mixed: "Mieszany (Losowo)",
    study: "Tryb Nauki",
    lang: "Język",
    theme: "Motyw",
    light: "Jasny",
    dark: "Ciemny"
  }
};

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const value = useMemo(
    () => ({ language, setLanguage, t: (key: keyof typeof dictionary.en) => dictionary[language][key] }),
    [language]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) throw new Error("useUI must be used within UIProvider");
  return context;
}
