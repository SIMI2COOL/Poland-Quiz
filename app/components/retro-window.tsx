import type { ReactNode } from "react";

type RetroWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function RetroWindow({ title, children, className }: RetroWindowProps) {
  return (
    <section className={`retro-window ${className ?? ""}`.trim()}>
      <div className="retro-titlebar flex items-center gap-2 px-2 py-1.5 sm:px-3">
        <div className="retro-mac9-close" aria-hidden="true" />
        <h2 className="retro-title-text m-0 flex-1 truncate text-center text-sm font-semibold sm:text-base">
          {title}
        </h2>
        <div className="retro-vista-controls flex shrink-0 items-center gap-0.5" aria-hidden="true">
          <span className="retro-vista-cap retro-vista-min" />
          <span className="retro-vista-cap retro-vista-max" />
          <span className="retro-vista-cap retro-vista-x" />
        </div>
      </div>
      <div className="retro-window-content">{children}</div>
    </section>
  );
}
