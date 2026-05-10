import type { ReactNode } from "react";

type RetroWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function RetroWindow({ title, children, className }: RetroWindowProps) {
  return (
    <section className={`retro-window ${className ?? ""}`.trim()}>
      <header className="retro-titlebar">
        <div className="retro-titlebar-inner">
          <h2 className="retro-title-text">{title}</h2>
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
