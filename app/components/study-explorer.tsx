"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CITIES } from "@/lib/cities";
import { getStudyVoivFact } from "@/lib/quiz-facts";
import { VOIVODESHIPS, voivById } from "@/lib/voivodeships";
import { voivLabel, type UILang } from "@/lib/quiz-engine";
import { useUI } from "../context/ui-context";
import { PolandMap } from "./poland-map";

export function StudyExplorer() {
  const { language, t } = useUI();
  const lang = language as UILang;
  const [selectedId, setSelectedId] = useState("14");

  const sorted = useMemo(
    () => [...VOIVODESHIPS].sort((a, b) => voivLabel(a, lang).localeCompare(voivLabel(b, lang), lang === "pl" ? "pl" : "en")),
    [lang]
  );

  const citiesInVoiv = useMemo(
    () => CITIES.filter((c) => c.voivId === selectedId).sort((a, b) => citySort(a, b, lang)),
    [selectedId, lang]
  );

  const v = voivById.get(selectedId);
  const factTick = Number.parseInt(selectedId, 10) + citiesInVoiv.length * 7;
  const fact = v ? getStudyVoivFact(selectedId, lang, factTick) : "";

  return (
    <div className="study-shell">
      <aside className="study-tree retro-panel-sunken">
        <p className="study-tree-title m-0">{t("studyTreeTitle")}</p>
        <ul className="study-tree-list m-0 list-none p-0">
          {sorted.map((w) => (
            <li key={w.id}>
              <button
                type="button"
                className={`study-tree-item ${w.id === selectedId ? "study-tree-item--on" : ""}`}
                onClick={() => setSelectedId(w.id)}
              >
                {voivLabel(w, lang)}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <div className="study-map-cell">
        <PolandMap highlightTerytId={selectedId} pulse />
      </div>
      <aside className="study-pane retro-panel-sunken">
        <div className="study-pane-scroll">
          {v && (
            <>
              <h3 className="study-pane-name m-0">{voivLabel(v, lang)}</h3>
              <p className="study-pane-capital m-0">
                <span className="study-pane-k">{t("studyCapitalLabel")}:</span>{" "}
                <strong>{lang === "pl" ? v.capitalPl : v.capitalEn}</strong>
              </p>
              {fact && <p className="study-pane-fact m-0">{fact}</p>}
              <p className="study-pane-sub m-0 font-bold">{t("studyCitiesHeading")}</p>
              <ul className="study-pane-cities m-0 pl-4">
                {citiesInVoiv.map((c) => (
                  <li key={`${c.voivId}-${c.namePl}`}>{lang === "pl" ? c.namePl : c.nameEn}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="study-pane-footer">
          <Link href="/" className="retro-btn citatio-option no-underline text-center block w-full">
            {t("backHome")}
          </Link>
        </div>
      </aside>
    </div>
  );
}

function citySort(a: (typeof CITIES)[number], b: (typeof CITIES)[number], lang: UILang) {
  const an = lang === "pl" ? a.namePl : a.nameEn;
  const bn = lang === "pl" ? b.namePl : b.nameEn;
  return an.localeCompare(bn, lang === "pl" ? "pl" : "en");
}
