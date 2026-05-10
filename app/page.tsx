"use client";

import { useTheme } from "next-themes";
import { XPWindow } from "./components/xp-window";
import { useUI } from "./context/ui-context";

export default function Page() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useUI();

  return (
    <main className="min-h-screen p-4 md:p-8">
      <header className="xp-window mb-5 overflow-hidden rounded-sm">
        <div className="xp-titlebar flex items-center justify-between gap-3 px-3 py-2">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span>🇵🇱</span>
            <span>{t("appTitle")}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
            <span className="font-bold">{t("lang")}:</span>
            <button className="xp-btn px-3 py-1" onClick={() => setLanguage("en")}>🇺🇸 EN</button>
            <button className="xp-btn px-3 py-1" onClick={() => setLanguage("pl")}>🇵🇱 PL</button>
            <span className="ml-2 font-bold">{t("theme")}:</span>
            <button className="xp-btn px-3 py-1" onClick={() => setTheme("light")}>☀ {t("light")}</button>
            <button className="xp-btn px-3 py-1" onClick={() => setTheme("dark")}>🌙 {t("dark")}</button>
          </div>
        </div>
      </header>

      <XPWindow title={t("subtitle")} className="mx-auto w-full max-w-4xl">
        <div className="grid gap-3 md:grid-cols-2">
          <button className="xp-btn p-6 text-left text-lg font-bold">1. {t("woj")}</button>
          <button className="xp-btn p-6 text-left text-lg font-bold">2. {t("gminy")}</button>
          <button className="xp-btn p-6 text-left text-lg font-bold">3. {t("mixed")}</button>
          <button className="xp-btn p-6 text-left text-lg font-bold">★ {t("study")}</button>
        </div>
      </XPWindow>
    </main>
  );
}
