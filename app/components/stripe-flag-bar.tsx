"use client";

/**
 * Full-width Polish flag: contiguous white / red horizontal stripes with a layer of
 * diagonal squares drifting left → right and fading (Citatio-style motion accent).
 */
export function StripeFlagBar() {
  const n = 20;
  return (
    <div className="pl-flag-bar" aria-hidden>
      <div className="pl-flag-stripes" />
      <div className="pl-flag-shimmer">
        {Array.from({ length: n }, (_, i) => (
          <span
            key={i}
            className="pl-flag-shimmer-cell"
            style={{
              top: `${10 + (i % 4) * 22}%`,
              animationDuration: `${3.2 + (i % 6) * 0.35}s`,
              animationDelay: `${i * 0.22}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
