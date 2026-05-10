import type { UILang } from "./quiz-engine";
import { getCityFact } from "./city-facts";
import { getVoivFactRotation } from "./voiv-facts";

function mixKey(round: number, seed: number, voivId: string, salt: number) {
  const base = round * 7919 + seed + salt + voivId.split("").reduce((s, ch) => s + ch.charCodeAt(0), 0);
  return Math.abs(base) >>> 0;
}

/**
 * After a question, show a rotating fact: region questions often use the city when available.
 */
export function getQuizFunFact(opts: {
  lang: UILang;
  round: number;
  seed: number;
  kind: "capital" | "region";
  voivId: string;
  cityNamePl?: string;
}): string {
  const { lang, round, seed, kind, voivId, cityNamePl } = opts;
  const k = mixKey(round, seed, voivId, kind === "region" ? 17 : 3);
  if (kind === "region" && cityNamePl) {
    const cityLine = getCityFact(cityNamePl, lang, k);
    if (cityLine) return cityLine;
  }
  return getVoivFactRotation(voivId, lang, k);
}

/** Study panel: rotate facts when selection changes. */
export function getStudyVoivFact(voivId: string, lang: UILang, tick: number) {
  return getVoivFactRotation(voivId, lang, mixKey(tick, 0, voivId, 101));
}
