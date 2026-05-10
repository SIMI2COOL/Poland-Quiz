"use client";

/**
 * Full-width Polish flag: white / red stripes + two skewed “mesh” layers of tiny diagonal
 * square shimmer (Citatio rainbow strip style: lines of squares, drift + fade).
 */
export function StripeFlagBar() {
  return (
    <div className="pl-flag-bar" aria-hidden>
      <div className="pl-flag-stripes" />
      <div className="pl-flag-shimmer-stack">
        <div className="pl-flag-mesh pl-flag-mesh--a" />
        <div className="pl-flag-mesh pl-flag-mesh--b" />
      </div>
    </div>
  );
}
