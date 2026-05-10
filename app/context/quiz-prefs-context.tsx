"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const TIMER_KEY = "poland-quiz-timer-sec";

export type TimerOption = 0 | 15 | 30 | 45;

type QuizPrefsContextType = {
  timerSeconds: TimerOption;
  setTimerSeconds: (v: TimerOption) => void;
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

export function QuizPrefsProvider({ children }: { children: React.ReactNode }) {
  const [timerSeconds, setTimerState] = useState<TimerOption>(0);

  useEffect(() => {
    setTimerState(readTimer());
  }, []);

  const setTimerSeconds = (v: TimerOption) => {
    setTimerState(v);
    try {
      localStorage.setItem(TIMER_KEY, String(v));
    } catch {
      /* ignore */
    }
  };

  const value = useMemo(() => ({ timerSeconds, setTimerSeconds }), [timerSeconds]);

  return <QuizPrefsContext.Provider value={value}>{children}</QuizPrefsContext.Provider>;
}

export function useQuizPrefs() {
  const c = useContext(QuizPrefsContext);
  if (!c) throw new Error("useQuizPrefs must be used within QuizPrefsProvider");
  return c;
}
