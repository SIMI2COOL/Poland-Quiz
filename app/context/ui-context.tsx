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
    menubarLang: "Lang.",
    menubarLevel: "Lvl.",
    menubarTimer: "Time",
    menubarTheme: "Theme",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    footerCredit: "Made by Teo Simon Untroib",
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
    notFoundBody: "This address is not part of Poland Quiz.",
    funFactLabel: "Did you know?",
    studyTreeTitle: "Voivodeships",
    studyCitiesHeading: "Cities in this set",
    timerLabel: "Timer",
    timerOff: "Off",
    timerSec: "{n}s",
    timerRemaining: "Time",
    feedbackTimeout: "Time’s up.",
    streakLabel: "Streak",
    bestScoreLabel: "Best score",
    bestStreakLabel: "Best streak",
    newBestScore: "New best score for this mode!",
    newBestStreak: "New best streak for this mode!",
    difficultyLabel: "Level",
    difficultyEasy: "Easy",
    difficultyMedium: "Medium",
    difficultyHard: "Hard",
    difficultyHintEasy: "Up to 1–3 cities per voivodeship (seats first) — learn the core map.",
    difficultyHintMedium: "5–6 cities per voivodeship — regional drill before the full deck.",
    difficultyHintHard: "Every city in the deck — maximum geography drill."
  },
  pl: {
    appTitle: "Quiz o Polsce",
    subtitle: "Wybierz tryb quizu",
    woj: "Tylko województwa",
    gminy: "Miasta → region",
    mixed: "Mieszany (losowo)",
    study: "Fiszki",
    lang: "Język",
    menubarLang: "Jęz.",
    menubarLevel: "Poz.",
    menubarTimer: "Czas",
    menubarTheme: "Mot.",
    theme: "Motyw",
    light: "Jasny",
    dark: "Ciemny",
    footerCredit: "Made by Teo Simon Untroib",
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
    notFoundBody: "Ten adres nie należy do Quizu o Polsce.",
    funFactLabel: "Czy wiesz, że…",
    studyTreeTitle: "Województwa",
    studyCitiesHeading: "Miasta w tym zestawie",
    timerLabel: "Czas",
    timerOff: "Wył.",
    timerSec: "{n} s",
    timerRemaining: "Czas",
    feedbackTimeout: "Czas minął.",
    streakLabel: "Seria",
    bestScoreLabel: "Rekord punktów",
    bestStreakLabel: "Rekord serii",
    newBestScore: "Nowy rekord punktów w tym trybie!",
    newBestStreak: "Nowy rekord serii w tym trybie!",
    difficultyLabel: "Poziom",
    difficultyEasy: "Łatwy",
    difficultyMedium: "Średni",
    difficultyHard: "Trudny",
    difficultyHintEasy: "Do 1–3 miast na województwo (najpierw stolice) — rdzeń mapy.",
    difficultyHintMedium: "5–6 miast na województwo — trening przed pełną talią.",
    difficultyHintHard: "Wszystkie miasta z talii — maksymalny trening geografii."
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
