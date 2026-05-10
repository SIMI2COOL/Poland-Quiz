"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { RetroWindow } from "./components/retro-window";
import { useUI } from "./context/ui-context";

export default function Page() {
  const { setTheme } = useTheme();
  const { language, setLanguage, t } = useUI();

  return (
    <div className="retro-desktop min-h-screen p-3 sm:p-5 md:p-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 md:gap-5">
        <nav className="retro-menubar" aria-label="Application menu">
          <div className="retro-menubar-app">
            <span aria-hidden="true">🇵🇱</span>
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
                EN
              </button>
              <button
                type="button"
                className={`retro-chip ${language === "pl" ? "retro-chip--on" : ""}`}
                onClick={() => setLanguage("pl")}
              >
                PL
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

        <RetroWindow title={t("subtitle")} className="w-full">
          <div className="retro-launch-grid">
            <Link href="/quiz/woj" className="retro-btn retro-launch-tile no-underline">
              <span className="retro-tile-num">1</span>
              <span className="retro-tile-label">{t("woj")}</span>
            </Link>
            <Link href="/quiz/gminy" className="retro-btn retro-launch-tile no-underline">
              <span className="retro-tile-num">2</span>
              <span className="retro-tile-label">{t("gminy")}</span>
            </Link>
            <Link href="/quiz/mixed" className="retro-btn retro-launch-tile no-underline">
              <span className="retro-tile-num">3</span>
              <span className="retro-tile-label">{t("mixed")}</span>
            </Link>
            <Link href="/quiz/study" className="retro-btn retro-launch-tile no-underline">
              <span className="retro-tile-num">★</span>
              <span className="retro-tile-label">{t("study")}</span>
            </Link>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
}
