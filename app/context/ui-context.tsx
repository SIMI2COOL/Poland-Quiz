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
    subtitle: "Choose a quiz mode",
    woj: "Województwa Only",
    gminy: "Gminy Only",
    mixed: "Mixed (Randomized)",
    study: "Study Mode",
    lang: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    quizStub:
      "This screen confirms the quiz mode opened correctly. Map and question rounds can plug in here later — for now, every menu button on the home page should bring you to its own room like this one.",
    quizHintMap: "Home has four tiles — each one links to a different practice mode.",
    quizHintBack: "Use the button below whenever you want to return to the main menu.",
    backHome: "Back to main menu"
  },
  pl: {
    appTitle: "Quiz o Polsce",
    subtitle: "Wybierz tryb quizu",
    woj: "Tylko Województwa",
    gminy: "Tylko Gminy",
    mixed: "Mieszany (Losowo)",
    study: "Tryb Nauki",
    lang: "Język",
    theme: "Motyw",
    light: "Jasny",
    dark: "Ciemny",
    quizStub:
      "Ten ekran potwierdza, że tryb quizu się otworzył. Mapa i pytania można tu później podłączyć — na razie każdy przycisk na stronie głównej powinien prowadzić do osobnego pomieszczenia tak jak ten.",
    quizHintMap: "Na stronie głównej są cztery kafelki — każdy prowadzi do innego trybu nauki.",
    quizHintBack: "Przycisk poniżej wraca do menu głównego.",
    backHome: "Powrót do menu głównego"
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
