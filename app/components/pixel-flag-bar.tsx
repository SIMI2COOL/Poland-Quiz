"use client";

const COLS = 20;
const ROWS = 10;
const CELL = 12;

/** Chunky 8-bit style Polish flag with per-column wave animation. */
export function PixelFlagBar() {
  const cols = Array.from({ length: COLS }, (_, c) => c);
  const rows = Array.from({ length: ROWS }, (_, r) => r);

  return (
    <div className="pixel-flag-outer" aria-hidden>
      <div
        className="pixel-flag-wave"
        style={{
          gridTemplateColumns: `repeat(${COLS}, ${CELL}px)`
        }}
      >
        {cols.map((c) => (
          <div
            key={c}
            className="pixel-flag-col"
            style={{
              animationDelay: `${c * 55}ms`,
              width: CELL
            }}
          >
            {rows.map((r) => (
              <div
                key={r}
                className={r < ROWS / 2 ? "pixel-flag-cell pixel-flag-cell--white" : "pixel-flag-cell pixel-flag-cell--red"}
                style={{ height: CELL, width: CELL }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
