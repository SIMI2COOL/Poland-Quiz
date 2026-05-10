import type { Difficulty } from "./cities";
import type { QuizMode } from "./quiz-engine";

const KEY = "poland-quiz-scores-v2";
const LEGACY_KEY = "poland-quiz-scores-v1";

export type ModeKey = `${"woj" | "gminy" | "mixed"}-${Difficulty}`;

export type ModeStats = {
  bestScore: number;
  bestStreak: number;
};

type Store = Record<string, ModeStats>;

function defaults(): ModeStats {
  return { bestScore: 0, bestStreak: 0 };
}

function readStore(): Store {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as Store;
  } catch {
    /* ignore */
  }
  try {
    const raw = localStorage.getItem(LEGACY_KEY);
    if (!raw) return {};
    const old = JSON.parse(raw) as Record<string, ModeStats>;
    const next: Store = { ...old };
    for (const m of ["woj", "gminy", "mixed"] as const) {
      if (old[m] && !next[`${m}-medium`]) {
        next[`${m}-medium`] = old[m]!;
      }
    }
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    return next;
  } catch {
    return {};
  }
}

export function statsKey(mode: Exclude<QuizMode, "study">, difficulty: Difficulty): ModeKey {
  return `${mode}-${difficulty}` as ModeKey;
}

export function loadStats(mode: ModeKey): ModeStats {
  if (typeof window === "undefined") return defaults();
  try {
    const p = readStore();
    return p[mode] ?? defaults();
  } catch {
    return defaults();
  }
}

export function maybeUpdateStats(
  mode: ModeKey,
  currentScore: number,
  currentStreak: number
): { newBestScore: boolean; newBestStreak: boolean } {
  if (typeof window === "undefined") return { newBestScore: false, newBestStreak: false };
  const store = readStore();
  const prev = store[mode] ?? defaults();
  const newBestScore = currentScore > prev.bestScore;
  const newBestStreak = currentStreak > prev.bestStreak;
  store[mode] = {
    bestScore: newBestScore ? currentScore : prev.bestScore,
    bestStreak: newBestStreak ? currentStreak : prev.bestStreak
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(store));
  } catch {
    /* ignore */
  }
  return { newBestScore, newBestStreak };
}
