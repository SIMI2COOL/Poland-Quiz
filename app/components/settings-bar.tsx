"use client";

import { useTheme } from "next-themes";
import { FlagGB, FlagPL } from "./flag-icons";
import { useQuizPrefs, type TimerOption } from "../context/quiz-prefs-context";
import { useUI } from "../context/ui-context";

const TIMER_OPTIONS: TimerOption[] = [0, 15, 30, 45];

export function SettingsBar() {
  const { setTheme } = useTheme();
  const { language, setLanguage, t } = useUI();
  const { timerSeconds, setTimerSeconds } = useQuizPrefs();

  return (
    <nav className="retro-menubar citatio-settings" aria-label={t("settingsAria")}>
      <div className="retro-menubar-app">
        <FlagPL className="retro-menubar-flag" />
        <span>{t("appTitle")}</span>
      </div>
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
