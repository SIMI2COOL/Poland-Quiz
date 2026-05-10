"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  cityLabel,
  makeQuestion,
  studyDeckOrder,
  voivLabel,
  type QuizMode,
  type QuizQuestion
} from "@/lib/quiz-engine";
import { useUI } from "../context/ui-context";

type Props = { mode: QuizMode };

export function QuizRunner({ mode }: Props) {
  const { language, t } = useUI();
  const lang = language;
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e9));
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<"pick" | "revealed">("pick");
  const [picked, setPicked] = useState<number | null>(null);
  const [studyIndex, setStudyIndex] = useState(0);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1e9));
    setRound(0);
    setScore(0);
    setPhase("pick");
    setPicked(null);
    setStudyIndex(0);
  }, [lang, mode]);

  const deck = useMemo(() => studyDeckOrder(seed + 42), [seed, mode]);

  const question: QuizQuestion | null = useMemo(() => {
    if (mode === "study") return null;
    return makeQuestion(mode, seed + round * 7919, lang);
  }, [mode, seed, round, lang]);

  if (mode === "study") {
    const v = deck[studyIndex % deck.length]!;
    return (
      <div className="citatio-quiz">
        <p className="citatio-study-lead m-0 text-center">{t("studyLead")}</p>
        <div className="citatio-study-card">
          <div className="citatio-study-row">
            <span className="citatio-study-k">{t("studyVoivLabel")}</span>
            <span className="citatio-study-v">{voivLabel(v, lang)}</span>
          </div>
          <div className="citatio-study-row">
            <span className="citatio-study-k">{t("studyCapitalLabel")}</span>
            <span className="citatio-study-v">{lang === "pl" ? v.capitalPl : v.capitalEn}</span>
          </div>
        </div>
        <p className="citatio-study-count m-0 text-center">
          {t("studyCounter")
            .replace("{n}", String(studyIndex + 1))
            .replace("{total}", String(deck.length))}
        </p>
        <div className="citatio-quiz-actions">
          <button
            type="button"
            className="retro-btn citatio-option"
            onClick={() => setStudyIndex((i) => (i + 1) % deck.length)}
          >
            {t("studyNext")}
          </button>
          <Link href="/" className="retro-btn citatio-option no-underline text-center">
            {t("backHome")}
          </Link>
        </div>
      </div>
    );
  }

  if (!question) return null;

  const correctIndex = question.answerIndex;

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

  return (
    <div className="citatio-quiz">
      {prompt}
      <div className="citatio-options" role="group" aria-label={t("choicesAria")}>
        {question.kind === "capital"
          ? question.options.map((label, i) => {
              let extra = "";
              if (phase === "revealed") {
                if (i === correctIndex) extra = " citatio-option--correct";
                else if (i === picked) extra = " citatio-option--wrong";
              }
              return (
                <button
                  key={i}
                  type="button"
                  className={`retro-btn citatio-option${extra}`}
                  onClick={() => onPick(i)}
                  disabled={phase === "revealed"}
                >
                  {label}
                </button>
              );
            })
          : question.options.map((vo, i) => {
              let extra = "";
              if (phase === "revealed") {
                if (i === correctIndex) extra = " citatio-option--correct";
                else if (i === picked) extra = " citatio-option--wrong";
              }
              return (
                <button
                  key={vo.id}
                  type="button"
                  className={`retro-btn citatio-option${extra}`}
                  onClick={() => onPick(i)}
                  disabled={phase === "revealed"}
                >
                  {voivLabel(vo, lang)}
                </button>
              );
            })}
      </div>
      {phase === "revealed" && (
        <p className={`citatio-feedback m-0 ${isCorrect ? "citatio-feedback--ok" : "citatio-feedback--bad"}`}>
          {isCorrect ? t("feedbackCorrect") : t("feedbackWrong")}
          {!isCorrect && (
            <>
              {" "}
              {t("feedbackReveal")} <strong>{correctAnswerText}</strong>.
            </>
          )}
        </p>
      )}
      <p className="citatio-score m-0">
        {t("scoreLabel")}: <strong>{score}</strong> {t("scoreOf")} <strong>{answeredCount}</strong>
      </p>
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
  );
}
