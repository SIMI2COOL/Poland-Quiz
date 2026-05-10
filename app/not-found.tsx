"use client";

import Link from "next/link";
import { RetroWindow } from "./components/retro-window";
import { SettingsBar } from "./components/settings-bar";
import { useUI } from "./context/ui-context";

export default function NotFound() {
  const { t } = useUI();

  return (
    <div className="citatio-stack citatio-stack--center">
      <SettingsBar />
      <RetroWindow title="404 — Page not found" className="max-w-md w-full">
        <div className="text-center">
          <p className="m-0 font-bold">404</p>
          <p className="mt-2 text-sm opacity-90">{t("notFoundBody")}</p>
          <Link href="/" className="retro-btn citatio-option mt-5 inline-block px-5 py-2 font-bold no-underline">
            ← {t("backHome")}
          </Link>
        </div>
      </RetroWindow>
    </div>
  );
}
