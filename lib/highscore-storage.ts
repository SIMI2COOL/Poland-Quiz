const KEY = "poland-quiz-scores-v1";

export type ModeKey = "woj" | "gminy" | "mixed";

export type ModeStats = {
  bestScore: number;
  bestStreak: number;
};

type Store = Record<string, ModeStats>;

function defaults(): ModeStats {
  return { bestScore: 0, bestStreak: 0 };
}

export function loadStats(mode: ModeKey): ModeStats {
  if (typeof window === "undefined") return defaults();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaults();
    const p = JSON.parse(raw) as Store;
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
  let store: Store = {};
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) store = JSON.parse(raw) as Store;
  } catch {
    store = {};
  }
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
