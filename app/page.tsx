"use client";

import Link from "next/link";
import { APP_VERSION } from "@/lib/app-version";
import { RetroWindow } from "./components/retro-window";
import { SettingsBar } from "./components/settings-bar";
import { useUI } from "./context/ui-context";

export default function Page() {
  const { t } = useUI();

  return (
    <div className="citatio-stack">
      <h1 className="citatio-hero-title">{t("appTitle")}</h1>
      <SettingsBar />
      <RetroWindow title={t("windowHome")}>
        <div className="citatio-window-brand" aria-hidden="true">
          🇵🇱
        </div>
        <p className="citatio-tagline m-0 text-center">{t("tagline")}</p>
        <p className="citatio-version m-0 text-center">
          {t("versionLabel")} <strong>v{APP_VERSION}</strong>
        </p>
        <div className="retro-launch-grid citatio-launch-pad">
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
  );
}
