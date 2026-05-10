"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  cityLabel,
  makeQuestion,
  voivLabel,
  type QuizMode,
  type QuizQuestion,
  type UILang
} from "@/lib/quiz-engine";
import { getQuizFunFact } from "@/lib/quiz-facts";
import { useUI } from "../context/ui-context";
import { PolandMap } from "./poland-map";
import { StudyExplorer } from "./study-explorer";

type Props = { mode: QuizMode };

export function QuizRunner({ mode }: Props) {
  const { language, t } = useUI();
  const lang = language as UILang;
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e9));
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<"pick" | "revealed">("pick");
  const [picked, setPicked] = useState<number | null>(null);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1e9));
    setRound(0);
    setScore(0);
    setPhase("pick");
    setPicked(null);
  }, [lang, mode]);

  const question: QuizQuestion | null = useMemo(() => {
    if (mode === "study") return null;
    return makeQuestion(mode, seed + round * 7919, lang);
  }, [mode, seed, round, lang]);

  if (mode === "study") {
    return <StudyExplorer />;
  }

  if (!question) return null;

  const correctIndex = question.answerIndex;

  const mapHighlight: string | null =
    question.kind === "capital"
      ? question.voiv.id
      : phase === "revealed"
        ? question.options[correctIndex]!.id
        : null;

  function onPick(i: number) {
    if (phase !== "pick") return;
    setPicked(i);
    setPhase("revealed");
    if (i === correctIndex) setScore((s) => s + 1);
  }

  function onNext() {
    setRound((r) => r + 1);
    setPhase("pick");
    setPicked(null);
  }

  const answeredCount = round + (phase === "revealed" ? 1 : 0);
  const isCorrect = picked === correctIndex;

  const prompt =
    question.kind === "capital" ? (
      <>
        <p className="citatio-prompt m-0">{t("questionCapitalLead")}</p>
        <p className="citatio-prompt-highlight m-0">{voivLabel(question.voiv, lang)}</p>
      </>
    ) : (
      <>
        <p className="citatio-prompt m-0">{t("questionRegionLead")}</p>
        <p className="citatio-prompt-highlight m-0">{cityLabel(question.city, lang)}</p>
      </>
    );

  const correctAnswerText =
    question.kind === "capital"
      ? question.options[correctIndex]!
      : voivLabel(question.options[correctIndex]!, lang);

  const factVoivId =
    question.kind === "capital" ? question.voiv.id : question.options[correctIndex]!.id;
  const funFact =
    phase === "revealed"
      ? getQuizFunFact({
          lang,
          round,
          seed,
          kind: question.kind,
          voivId: factVoivId,
          cityNamePl: question.kind === "region" ? question.city.namePl : undefined
        })
      : "";

  return (
    <div className="citatio-quiz-shell">
      <div className="citatio-quiz-toprow">
        <span className="citatio-quiz-spacer" />
        <div className="citatio-score-gadget retro-panel-sunken">
          <span className="citatio-score-gadget-label">{t("scoreLabel")}</span>
          <span className="citatio-score-gadget-val">
            <strong>{score}</strong>
            <span className="citatio-score-slash">/</span>
            <strong>{answeredCount}</strong>
          </span>
        </div>
      </div>

      <div className="citatio-quiz-body">
        <div className="citatio-quiz-map">
          <PolandMap highlightTerytId={mapHighlight} pulse />
        </div>
        <div className="citatio-quiz-panel">
          {prompt}
          <div className="citatio-options-grid" role="group" aria-label={t("choicesAria")}>
            {question.kind === "capital"
              ? question.options.map((label, i) => {
                  const letter = String.fromCharCode(65 + i);
                  let extra = "";
                  if (phase === "revealed") {
                    if (i === correctIndex) extra = " citatio-option--correct";
                    else if (i === picked) extra = " citatio-option--wrong";
                  }
                  return (
                    <button
                      key={i}
                      type="button"
                      className={`retro-btn citatio-option citatio-option-abcd${extra}`}
                      onClick={() => onPick(i)}
                      disabled={phase === "revealed"}
                    >
                      <span className="citatio-abcd">{letter}</span> {label}
                    </button>
                  );
                })
              : question.options.map((vo, i) => {
                  const letter = String.fromCharCode(65 + i);
                  let extra = "";
                  if (phase === "revealed") {
                    if (i === correctIndex) extra = " citatio-option--correct";
                    else if (i === picked) extra = " citatio-option--wrong";
                  }
                  return (
                    <button
                      key={vo.id}
                      type="button"
                      className={`retro-btn citatio-option citatio-option-abcd${extra}`}
                      onClick={() => onPick(i)}
                      disabled={phase === "revealed"}
                    >
                      <span className="citatio-abcd">{letter}</span> {voivLabel(vo, lang)}
                    </button>
                  );
                })}
          </div>
          {phase === "revealed" && (
            <>
              <p
                className={`citatio-feedback m-0 ${isCorrect ? "citatio-feedback--ok" : "citatio-feedback--bad"}`}
              >
                {isCorrect ? t("feedbackCorrect") : t("feedbackWrong")}
                {!isCorrect && (
                  <>
                    {" "}
                    {t("feedbackReveal")} <strong>{correctAnswerText}</strong>.
                  </>
                )}
              </p>
              {funFact && (
                <div className="citatio-funfact retro-panel-sunken">
                  <span className="citatio-funfact-label">{t("funFactLabel")}</span> {funFact}
                </div>
              )}
            </>
          )}
          <div className="citatio-quiz-actions">
            {phase === "revealed" && (
              <button type="button" className="retro-btn citatio-option" onClick={onNext}>
                {t("nextQuestion")}
              </button>
            )}
            <Link href="/" className="retro-btn citatio-option no-underline text-center">
              {t("backHome")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
