import { citiesForDifficulty, type CityEntry, type Difficulty } from "./cities";
import type { SrsWeights } from "./srs-storage";
import { cityPickWeight, voivPickWeight } from "./srs-storage";
import { VOIVODESHIPS, type Voivodeship, voivById } from "./voivodeships";

export type QuizMode = "woj" | "gminy" | "mixed" | "study";
export type UILang = "en" | "pl";

export type { Difficulty } from "./cities";

export type CapitalQuestion = {
  kind: "capital";
  voiv: Voivodeship;
  options: string[];
  answerIndex: number;
};

export type RegionQuestion = {
  kind: "region";
  city: CityEntry;
  options: Voivodeship[];
  answerIndex: number;
};

export type QuizQuestion = CapitalQuestion | RegionQuestion;

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(list: T[], rand: () => number): T {
  return list[Math.floor(rand() * list.length)]!;
}

function pickWeighted<T>(items: T[], weights: number[], rand: () => number): T {
  const sum = weights.reduce((a, b) => a + b, 0);
  let r = rand() * sum;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i]!;
    if (r <= 0) return items[i]!;
  }
  return items[items.length - 1]!;
}

function capitalLabel(v: Voivodeship, lang: UILang) {
  return lang === "pl" ? v.capitalPl : v.capitalEn;
}

export function makeCapitalQuestion(seed: number, lang: UILang, srs?: SrsWeights | null): CapitalQuestion {
  const rand = mulberry32(seed);
  const weights = VOIVODESHIPS.map((v) => voivPickWeight(v.id, srs ?? { voiv: {}, city: {} }));
  const voiv = pickWeighted(VOIVODESHIPS, weights, rand);
  const correct = capitalLabel(voiv, lang);
  const wrongCapitals = shuffle(
    VOIVODESHIPS.filter((v) => v.id !== voiv.id).map((v) => capitalLabel(v, lang)),
    rand
  ).slice(0, 3);
  const options = shuffle([correct, ...wrongCapitals], rand);
  return {
    kind: "capital",
    voiv,
    options,
    answerIndex: options.indexOf(correct)
  };
}

export function makeRegionQuestion(
  seed: number,
  srs: SrsWeights | null | undefined,
  difficulty: Difficulty
): RegionQuestion {
  const rand = mulberry32(seed);
  const pool = citiesForDifficulty(difficulty);
  const weights = pool.map((c) => cityPickWeight(c.voivId, c.namePl, srs ?? { voiv: {}, city: {} }));
  const city = pickWeighted(pool, weights, rand);
  const correct = voivById.get(city.voivId)!;
  const wrong = shuffle(
    VOIVODESHIPS.filter((v) => v.id !== correct.id),
    rand
  ).slice(0, 3);
  const options = shuffle([correct, ...wrong], rand);
  return {
    kind: "region",
    city,
    options,
    answerIndex: options.findIndex((v) => v.id === correct.id)
  };
}

export function makeQuestion(
  mode: Exclude<QuizMode, "study">,
  seed: number,
  lang: UILang,
  srs: SrsWeights | null | undefined,
  difficulty: Difficulty
): QuizQuestion {
  if (mode === "woj") return makeCapitalQuestion(seed, lang, srs);
  if (mode === "gminy") return makeRegionQuestion(seed, srs, difficulty);
  const branch = mulberry32(seed)() < 0.5;
  return branch
    ? makeCapitalQuestion(seed + 1, lang, srs)
    : makeRegionQuestion(seed + 9999, srs, difficulty);
}

export function studyDeckOrder(seed: number): Voivodeship[] {
  return shuffle(VOIVODESHIPS, mulberry32(seed));
}

export function voivLabel(v: Voivodeship, lang: UILang) {
  return lang === "pl" ? v.namePl : v.nameEn;
}

export function cityLabel(c: CityEntry, lang: UILang) {
  return lang === "pl" ? c.namePl : c.nameEn;
}
