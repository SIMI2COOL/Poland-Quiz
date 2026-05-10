"use client";

import { useEffect, useState } from "react";
import { useUI } from "../context/ui-context";

export function ClientChrome({ children }: { children: React.ReactNode }) {
  const { t } = useUI();
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString(undefined, {
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
  }, []);

  return (
    <div className="citatio-root">
      <div className="citatio-rainbow" aria-hidden />
      <main className="citatio-main">{children}</main>
      <footer className="citatio-taskbar">
        <span className="citatio-taskbar-credit">{t("footerCredit")}</span>
        <div className="citatio-clock" role="status" aria-live="polite" suppressHydrationWarning>
          {time || "—"}
        </div>
      </footer>
    </div>
  );
}
