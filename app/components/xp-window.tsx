import type { ReactNode } from "react";

type XPWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function XPWindow({ title, children, className }: XPWindowProps) {
  return (
    <section className={`xp-window overflow-hidden rounded-sm ${className ?? ""}`}>
      <div className="xp-titlebar flex items-center justify-between px-2 py-1 text-sm font-bold">
        <span>{title}</span>
        <div className="flex gap-1 text-black">
          <button className="xp-btn h-5 w-5 text-xs">_</button>
          <button className="xp-btn h-5 w-5 text-xs">□</button>
          <button className="xp-btn h-5 w-5 text-xs">✕</button>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </section>
  );
}
