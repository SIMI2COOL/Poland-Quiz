"use client";

import { useTheme } from "next-themes";
import { FlagGB, FlagPL } from "./flag-icons";
import { useUI } from "../context/ui-context";

export function SettingsBar() {
  const { setTheme } = useTheme();
  const { language, setLanguage, t } = useUI();

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
