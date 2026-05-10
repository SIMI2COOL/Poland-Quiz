"use client";

import { useEffect, useMemo, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import type { FeatureCollection } from "geojson";
import { NAZWA_TO_TERYT } from "@/lib/nazwa-to-teryt";

const MAP_W = 420;
const MAP_H = 400;

type Props = {
  /** TERYT voivodeship id (02, 04, …) or null for no highlight */
  highlightTerytId: string | null;
  /** Pulsing yellow border on highlighted region */
  pulse?: boolean;
};

export function PolandMap({ highlightTerytId, pulse = true }: Props) {
  const [fc, setFc] = useState<FeatureCollection | null>(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/wojewodztwa-min.geojson")
      .then((r) => {
        if (!r.ok) throw new Error("map");
        return r.json();
      })
      .then((data: FeatureCollection) => {
        if (!cancelled) setFc(data);
      })
      .catch(() => {
        if (!cancelled) setErr(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const paths = useMemo(() => {
    if (!fc) return [];
    const projection = geoMercator().fitSize([MAP_W, MAP_H], fc as never);
    const path = geoPath(projection);
    return fc.features.map((f) => {
      const nazwa = (f.properties as { nazwa: string }).nazwa;
      const teryt = NAZWA_TO_TERYT[nazwa];
      const d = path(f as never);
      return { d: d ?? "", teryt };
    });
  }, [fc]);

  if (err) {
    return (
      <div className="poland-map poland-map--error" role="img" aria-label="">
        <p className="m-0 text-center text-xs font-bold">Map unavailable</p>
      </div>
    );
  }

  if (!fc) {
    return <div className="poland-map poland-map--loading" aria-busy="true" />;
  }

  return (
    <svg
      className="poland-map-svg"
      viewBox={`0 0 ${MAP_W} ${MAP_H}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Map of Poland by voivodeship"
    >
      {paths.map(({ d, teryt }) => {
        const isHl = highlightTerytId !== null && teryt === highlightTerytId;
        let cls = "poland-region";
        if (isHl) cls += " poland-region--highlight";
        if (isHl && pulse) cls += " poland-region--pulse";
        return <path key={teryt} d={d} className={cls} />;
      })}
    </svg>
  );
}
