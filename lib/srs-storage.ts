const KEY = "poland-quiz-srs-v1";

export type SrsWeights = {
  voiv: Record<string, number>;
  city: Record<string, number>;
};

const empty = (): SrsWeights => ({ voiv: {}, city: {} });

export function loadSrs(): SrsWeights {
  if (typeof window === "undefined") return empty();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    const p = JSON.parse(raw) as SrsWeights;
    return {
      voiv: typeof p.voiv === "object" && p.voiv ? p.voiv : {},
      city: typeof p.city === "object" && p.city ? p.city : {}
    };
  } catch {
    return empty();
  }
}

export function saveSrs(s: SrsWeights) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* ignore quota */
  }
}

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

/** Boost items that need review after a wrong or timeout. */
export function srsAfterWrong(s: SrsWeights, voivId: string, cityNamePl?: string): SrsWeights {
  const voiv = { ...s.voiv };
  const city = { ...s.city };
  voiv[voivId] = clamp((voiv[voivId] ?? 0) + 2.5, 0, 40);
  if (cityNamePl) city[cityNamePl] = clamp((city[cityNamePl] ?? 0) + 3, 0, 50);
  return { voiv, city };
}

/** Gentle decay after a correct answer. */
export function srsAfterCorrect(s: SrsWeights, voivId: string, cityNamePl?: string): SrsWeights {
  const voiv = { ...s.voiv };
  const city = { ...s.city };
  voiv[voivId] = clamp((voiv[voivId] ?? 0) - 1, 0, 40);
  if (cityNamePl) city[cityNamePl] = clamp((city[cityNamePl] ?? 0) - 1.2, 0, 50);
  return { voiv, city };
}

export function voivPickWeight(id: string, s: SrsWeights): number {
  return 1 + (s.voiv[id] ?? 0);
}

export function cityPickWeight(voivId: string, namePl: string, s: SrsWeights): number {
  return 1 + (s.city[namePl] ?? 0) + 0.35 * (s.voiv[voivId] ?? 0);
}
