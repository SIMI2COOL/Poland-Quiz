/** SVG flags — reliable on Windows where flag emoji often fail. */

export function FlagPL({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 10"
      width={18}
      height={11}
      aria-hidden
      focusable="false"
    >
      <rect width="16" height="5" fill="#ffffff" stroke="#b0b0b0" strokeWidth="0.15" />
      <rect y="5" width="16" height="5" fill="#dc143c" stroke="#8b0000" strokeWidth="0.15" />
    </svg>
  );
}

/** Simplified Union Jack for “English” UI (recognisable at small size). */
export function FlagGB({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 30"
      width={20}
      height={10}
      aria-hidden
      focusable="false"
    >
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="4" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#c8102e" strokeWidth="2" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="8" />
      <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="5" />
    </svg>
  );
}
