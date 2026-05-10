"use client";

import { useTheme } from "next-themes";
import { FlagGB, FlagPL } from "./flag-icons";
import type { Difficulty } from "@/lib/cities";
import { useQuizPrefs, type TimerOption } from "../context/quiz-prefs-context";
import { useUI } from "../context/ui-context";

const TIMER_OPTIONS: TimerOption[] = [0, 15, 30, 45];
const DIFFICULTY_OPTIONS: Difficulty[] = ["easy", "medium", "hard"];

const DIFFICULTY_LABEL_KEY = {
  easy: "difficultyEasy",
  medium: "difficultyMedium",
  hard: "difficultyHard"
} as const;

const DIFFICULTY_HINT_KEY = {
  easy: "difficultyHintEasy",
  medium: "difficultyHintMedium",
  hard: "difficultyHintHard"
} as const;

export function SettingsBar() {
  const { setTheme } = useTheme();
  const { language, setLanguage, t } = useUI();
  const { timerSeconds, setTimerSeconds, difficulty, setDifficulty } = useQuizPrefs();

  return (
    <nav className="retro-menubar citatio-settings" aria-label={t("settingsAria")}>
      <div className="retro-menubar-cluster">
        <span className="retro-menubar-label">{t("lang")}</span>
        <div className="retro-pill-group">
              <button
                type="button"
                className={`retro-chip ${language === "en" ? "retro-chip--on" : ""}`}
                onClick={() => setLanguage("en")}
              >
                <FlagGB className="lang-flag-svg" /> EN
              </button>
              <button
                type="button"
                className={`retro-chip ${language === "pl" ? "retro-chip--on" : ""}`}
                onClick={() => setLanguage("pl")}
              >
                <FlagPL className="lang-flag-svg" /> PL
              </button>
        </div>
        <span className="retro-menubar-divider" aria-hidden="true" />
        <span className="retro-menubar-label">{t("difficultyLabel")}</span>
        <div className="retro-pill-group">
          {DIFFICULTY_OPTIONS.map((d) => (
            <button
              key={d}
              type="button"
              className={`retro-chip ${difficulty === d ? "retro-chip--on" : ""}`}
              onClick={() => setDifficulty(d)}
              title={t(DIFFICULTY_HINT_KEY[d])}
            >
              {t(DIFFICULTY_LABEL_KEY[d])}
            </button>
          ))}
        </div>
        <span className="retro-menubar-divider" aria-hidden="true" />
        <span className="retro-menubar-label">{t("timerLabel")}</span>
        <div className="retro-pill-group">
          {TIMER_OPTIONS.map((sec) => (
            <button
              key={sec}
              type="button"
              className={`retro-chip ${timerSeconds === sec ? "retro-chip--on" : ""}`}
              onClick={() => setTimerSeconds(sec)}
            >
              {sec === 0 ? t("timerOff") : t("timerSec").replace("{n}", String(sec))}
            </button>
          ))}
        </div>
        <span className="retro-menubar-divider" aria-hidden="true" />
        <span className="retro-menubar-label">{t("theme")}</span>
        <div className="retro-pill-group">
          <button type="button" className="retro-chip" onClick={() => setTheme("light")}>
            ☀ {t("light")}
          </button>
          <button type="button" className="retro-chip" onClick={() => setTheme("dark")}>
            🌙 {t("dark")}
          </button>
        </div>
      </div>
    </nav>
  );
}
