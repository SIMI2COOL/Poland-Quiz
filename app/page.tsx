"use client";

import { useTheme } from "next-themes";
import { RetroWindow } from "./components/retro-window";
import { useUI } from "./context/ui-context";

export default function Page() {
  const { setTheme } = useTheme();
  const { language, setLanguage, t } = useUI();

  return (
    <div className="retro-desktop min-h-screen p-3 sm:p-5 md:p-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-4">
        <nav className="retro-menubar" aria-label="Application menu">
          <div className="retro-menubar-app">
            <span aria-hidden="true">🇵🇱</span>
            <span>{t("appTitle")}</span>
          </div>
          <div className="retro-menubar-cluster">
            <span className="retro-menubar-label">{t("lang")}:</span>
            <button type="button" className="retro-btn px-2.5 py-1" onClick={() => setLanguage("en")}>
              🇺🇸 EN
            </button>
            <button type="button" className="retro-btn px-2.5 py-1" onClick={() => setLanguage("pl")}>
              🇵🇱 PL
            </button>
            <span className="retro-menubar-label sm:ml-1">{t("theme")}:</span>
            <button type="button" className="retro-btn px-2.5 py-1" onClick={() => setTheme("light")}>
              ☀ {t("light")}
            </button>
            <button type="button" className="retro-btn px-2.5 py-1" onClick={() => setTheme("dark")}>
              🌙 {t("dark")}
            </button>
          </div>
        </nav>

        <RetroWindow title={t("subtitle")} className="w-full">
          <div className="retro-launch-grid">
            <button type="button" className="retro-btn retro-launch-tile">
              1. {t("woj")}
            </button>
            <button type="button" className="retro-btn retro-launch-tile">
              2. {t("gminy")}
            </button>
            <button type="button" className="retro-btn retro-launch-tile">
              3. {t("mixed")}
            </button>
            <button type="button" className="retro-btn retro-launch-tile">
              ★ {t("study")}
            </button>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
}
