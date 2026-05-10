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
    woj: "Voivodeships only",
    gminy: "Cities → region",
    mixed: "Mixed (random)",
    study: "Study cards",
    lang: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    footerCredit: "Poland Quiz — for learning",
    settingsAria: "Language and appearance",
    windowHome: "Poland Quiz — Home",
    windowWoj: "Poland Quiz — Voivodeships",
    windowGminy: "Poland Quiz — Cities",
    windowMixed: "Poland Quiz — Mixed",
    windowStudy: "Poland Quiz — Study",
    tagline:
      "Practice the sixteen voivodeships of Poland: capitals, city-to-region matching, and quick study cards.",
    versionLabel: "Version",
    questionCapitalLead: "What is the capital of this voivodeship?",
    questionRegionLead: "Which voivodeship is this city in?",
    choicesAria: "Answer choices",
    feedbackCorrect: "Correct!",
    feedbackWrong: "Not quite.",
    feedbackReveal: "The right answer was:",
    scoreLabel: "Correct answers",
    scoreOf: "out of",
    nextQuestion: "Next question",
    studyLead: "Read the pair, then tap Next card to continue.",
    studyVoivLabel: "Voivodeship",
    studyCapitalLabel: "Capital",
    studyCounter: "Card {n} of {total}",
    studyNext: "Next card",
    backHome: "Back to main menu",
    unknownMode: "Unknown quiz mode.",
    homeLink: "Home",
    notFoundBody: "This address is not part of Poland Quiz."
  },
  pl: {
    appTitle: "Quiz o Polsce",
    subtitle: "Wybierz tryb quizu",
    woj: "Tylko województwa",
    gminy: "Miasta → region",
    mixed: "Mieszany (losowo)",
    study: "Fiszki",
    lang: "Język",
    theme: "Motyw",
    light: "Jasny",
    dark: "Ciemny",
    footerCredit: "Quiz o Polsce — do nauki",
    settingsAria: "Język i wygląd",
    windowHome: "Quiz o Polsce — Start",
    windowWoj: "Quiz o Polsce — Województwa",
    windowGminy: "Quiz o Polsce — Miasta",
    windowMixed: "Quiz o Polsce — Mieszany",
    windowStudy: "Quiz o Polsce — Nauka",
    tagline:
      "Ćwicz szesnaście województw Polski: stolice, dopasowanie miasta do regionu i szybkie fiszki.",
    versionLabel: "Wersja",
    questionCapitalLead: "Jaka jest stolica tego województwa?",
    questionRegionLead: "W którym województwie leży to miasto?",
    choicesAria: "Odpowiedzi",
    feedbackCorrect: "Dobrze!",
    feedbackWrong: "Nie tym razem.",
    feedbackReveal: "Poprawna odpowiedź:",
    scoreLabel: "Poprawne odpowiedzi",
    scoreOf: "z",
    nextQuestion: "Następne pytanie",
    studyLead: "Przeczytaj parę, potem przejdź dalej.",
    studyVoivLabel: "Województwo",
    studyCapitalLabel: "Stolica",
    studyCounter: "Karta {n} z {total}",
    studyNext: "Następna karta",
    backHome: "Powrót do menu",
    unknownMode: "Nieznany tryb quizu.",
    homeLink: "Start",
    notFoundBody: "Ten adres nie należy do Quizu o Polsce."
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
