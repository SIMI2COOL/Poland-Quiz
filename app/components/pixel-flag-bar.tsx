"use client";

import { useEffect, useRef, useState } from "react";

const ROWS = 10;
const MIN_COLS = 36;
const MAX_COLS = 140;
/** Target pixel column width in CSS px (chunky 8-bit look). */
const COL_STEP = 7;

/**
 * Full-width Polish flag: white over red, pixel columns with rigid stepped “wave”.
 */
export function PixelFlagBar() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState(56);

  useEffect(() => {
    function measure() {
      const w = outerRef.current?.getBoundingClientRect().width ?? window.innerWidth;
      const next = Math.min(MAX_COLS, Math.max(MIN_COLS, Math.floor(w / COL_STEP)));
      setCols(next);
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (outerRef.current) ro.observe(outerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div ref={outerRef} className="pixel-flag-outer" aria-hidden>
      <div className="pixel-flag-wave">
        {Array.from({ length: cols }, (_, c) => (
          <div
            key={c}
            className="pixel-flag-col"
            style={{
              animationDelay: `${(c / Math.max(1, cols - 1)) * 480}ms`
            }}
          >
            {Array.from({ length: ROWS }, (_, r) => (
              <div
                key={r}
                className={
                  r < ROWS / 2 ? "pixel-flag-cell pixel-flag-cell--white" : "pixel-flag-cell pixel-flag-cell--red"
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
