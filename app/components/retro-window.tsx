import type { ReactNode } from "react";
import { FlagPL } from "./flag-icons";

type RetroWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  /** Shown before the title (default Polish flag). */
  icon?: ReactNode;
};

export function RetroWindow({ title, children, className, icon }: RetroWindowProps) {
  return (
    <section className={`retro-window ${className ?? ""}`.trim()}>
      <header className="retro-titlebar">
        <div className="retro-titlebar-inner">
          <div className="retro-titlebar-leading">
            <span className="retro-title-icon">{icon ?? <FlagPL className="retro-title-flag" />}</span>
            <h2 className="retro-title-text">{title}</h2>
          </div>
          <div className="retro-w98-controls" aria-hidden="true">
            <span className="retro-w98-cmd">_</span>
            <span className="retro-w98-cmd">□</span>
            <span className="retro-w98-cmd">×</span>
          </div>
        </div>
      </header>
      <div className="retro-window-content">{children}</div>
    </section>
  );
}
