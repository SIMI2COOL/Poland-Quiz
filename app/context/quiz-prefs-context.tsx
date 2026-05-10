"use client";

import type { Difficulty } from "@/lib/cities";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const TIMER_KEY = "poland-quiz-timer-sec";
const DIFF_KEY = "poland-quiz-difficulty";

export type TimerOption = 0 | 15 | 30 | 45;

type QuizPrefsContextType = {
  timerSeconds: TimerOption;
  setTimerSeconds: (v: TimerOption) => void;
  difficulty: Difficulty;
  setDifficulty: (v: Difficulty) => void;
};

const QuizPrefsContext = createContext<QuizPrefsContextType | undefined>(undefined);

function readTimer(): TimerOption {
  if (typeof window === "undefined") return 0;
  try {
    const v = Number.parseInt(localStorage.getItem(TIMER_KEY) ?? "0", 10);
    if (v === 15 || v === 30 || v === 45) return v;
    return 0;
  } catch {
    return 0;
  }
}

function readDifficulty(): Difficulty {
  if (typeof window === "undefined") return "medium";
  try {
    const v = localStorage.getItem(DIFF_KEY);
    if (v === "easy" || v === "medium" || v === "hard") return v;
    return "medium";
  } catch {
    return "medium";
  }
}

export function QuizPrefsProvider({ children }: { children: React.ReactNode }) {
  const [timerSeconds, setTimerState] = useState<TimerOption>(0);
  const [difficulty, setDiffState] = useState<Difficulty>("medium");

  useEffect(() => {
    setTimerState(readTimer());
    setDiffState(readDifficulty());
  }, []);

  const setTimerSeconds = (v: TimerOption) => {
    setTimerState(v);
    try {
      localStorage.setItem(TIMER_KEY, String(v));
    } catch {
      /* ignore */
    }
  };

  const setDifficulty = (v: Difficulty) => {
    setDiffState(v);
    try {
      localStorage.setItem(DIFF_KEY, v);
    } catch {
      /* ignore */
    }
  };

  const value = useMemo(
    () => ({ timerSeconds, setTimerSeconds, difficulty, setDifficulty }),
    [timerSeconds, difficulty]
  );

  return <QuizPrefsContext.Provider value={value}>{children}</QuizPrefsContext.Provider>;
}

export function useQuizPrefs() {
  const c = useContext(QuizPrefsContext);
  if (!c) throw new Error("useQuizPrefs must be used within QuizPrefsProvider");
  return c;
}
