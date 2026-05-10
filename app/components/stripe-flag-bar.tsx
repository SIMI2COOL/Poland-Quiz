"use client";

/**
 * Polish flag stripes + rainbow-style overlay: vertical translucent bars per stripe,
 * bottom stripe offset so columns read diagonally; bars drift horizontally and fade.
 */
export function StripeFlagBar() {
  return (
    <div className="pl-flag-bar" aria-hidden>
      <div className="pl-flag-stripes" />
      <div className="pl-flag-float">
        <div className="pl-flag-float-row pl-flag-float-row--white">
          <div className="pl-flag-float-track" />
        </div>
        <div className="pl-flag-float-row pl-flag-float-row--red">
          <div className="pl-flag-float-track" />
        </div>
      </div>
    </div>
  );
}
