"use client";

import { useEffect, useState } from "react";
import { useUI } from "../context/ui-context";
import { CitatioFlagCanvas } from "./citatio-flag-canvas";

export function ClientChrome({ children }: { children: React.ReactNode }) {
  const { t, language } = useUI();
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString(language === "pl" ? "pl-PL" : "en-GB", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [language]);

  return (
    <div className="citatio-root">
      <div className="citatio-app-bevel-outer">
        <div className="citatio-app-bevel-mid">
          <div className="citatio-app-window">
            <CitatioFlagCanvas />
            <main className="citatio-main">{children}</main>
            <footer className="citatio-taskbar">
              <span className="citatio-taskbar-credit">{t("footerCredit")}</span>
              <div className="citatio-clock" role="status" aria-live="polite" suppressHydrationWarning>
                {time || "—"}
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
