"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  cityLabel,
  makeQuestion,
  voivLabel,
  type QuizMode,
  type QuizQuestion,
  type UILang
} from "@/lib/quiz-engine";
import { getQuizFunFact } from "@/lib/quiz-facts";
import type { ModeKey } from "@/lib/highscore-storage";
import { loadStats, maybeUpdateStats } from "@/lib/highscore-storage";
import { loadSrs, saveSrs, srsAfterCorrect, srsAfterWrong, type SrsWeights } from "@/lib/srs-storage";
import { useQuizPrefs } from "../context/quiz-prefs-context";
import { useUI } from "../context/ui-context";
import { PolandMap } from "./poland-map";
import { StudyExplorer } from "./study-explorer";

type Props = { mode: QuizMode };

function applySrsUpdate(prev: SrsWeights, correct: boolean, q: QuizQuestion): SrsWeights {
  if (q.kind === "capital") {
    return correct ? srsAfterCorrect(prev, q.voiv.id) : srsAfterWrong(prev, q.voiv.id);
  }
  const vid = q.city.voivId;
  const c = q.city.namePl;
  return correct ? srsAfterCorrect(prev, vid, c) : srsAfterWrong(prev, vid, c);
}

export function QuizRunner({ mode }: Props) {
  const { language, t } = useUI();
  const { timerSeconds } = useQuizPrefs();
  const lang = language as UILang;
  const modeKey = mode as ModeKey;

  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e9));
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [phase, setPhase] = useState<"pick" | "revealed">("pick");
  const [picked, setPicked] = useState<number | null>(null);
  const [srs, setSrs] = useState<SrsWeights>({ voiv: {}, city: {} });
  const [srsHydrated, setSrsHydrated] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(timerSeconds);
  const [bests, setBests] = useState({ bestScore: 0, bestStreak: 0 });
  const [recordNote, setRecordNote] = useState<{ score: boolean; streak: boolean } | null>(null);

  const srsRef = useRef<SrsWeights>({ voiv: {}, city: {} });
  const scoreRef = useRef(score);
  const questionRef = useRef<QuizQuestion | null>(null);
  scoreRef.current = score;

  useEffect(() => {
    const loaded = loadSrs();
    srsRef.current = loaded;
    setSrs(loaded);
    setSrsHydrated(true);
  }, []);

  useEffect(() => {
    if (mode === "study") return;
    setBests(loadStats(modeKey));
  }, [mode, modeKey]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1e9));
    setRound(0);
    setScore(0);
    setStreak(0);
    setPhase("pick");
    setPicked(null);
    setRecordNote(null);
  }, [lang, mode]);

  const question: QuizQuestion | null = useMemo(() => {
    if (mode === "study") return null;
    return makeQuestion(mode, seed + round * 7919, lang, srsRef.current);
  }, [mode, seed, round, lang, srsHydrated]);

  questionRef.current = question;

  useEffect(() => {
    if (mode === "study" || !question) return;
    if (phase !== "pick" || timerSeconds === 0) {
      setTimeLeft(0);
      return;
    }
    setTimeLeft(timerSeconds);
    let left = timerSeconds;
    const id = window.setInterval(() => {
      left -= 1;
      setTimeLeft(Math.max(0, left));
      if (left <= 0) {
        window.clearInterval(id);
        const q = questionRef.current;
        if (!q) return;
        setPicked(null);
        setPhase("revealed");
    setSrs((prev) => {
      const next = applySrsUpdate(prev, false, q);
      srsRef.current = next;
      saveSrs(next);
      return next;
    });
        setStreak(0);
        const badges = maybeUpdateStats(modeKey, scoreRef.current, 0);
        setBests(loadStats(modeKey));
        setRecordNote(
          badges.newBestScore || badges.newBestStreak
            ? { score: badges.newBestScore, streak: badges.newBestStreak }
            : null
        );
      }
    }, 1000);
    return () => window.clearInterval(id);
  }, [mode, modeKey, phase, round, seed, timerSeconds, question]);

  if (mode === "study") {
    return <StudyExplorer />;
  }

  if (!srsHydrated) {
    return (
      <div className="citatio-quiz-shell" aria-busy="true">
        <span className="sr-only">…</span>
      </div>
    );
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
    if (phase !== "pick" || !question) return;
    setPicked(i);
    setPhase("revealed");
    const correct = i === correctIndex;
    const q = question;
    setSrs((prev) => {
      const next = applySrsUpdate(prev, correct, q);
      srsRef.current = next;
      saveSrs(next);
      return next;
    });
    if (correct) {
      const ns = score + 1;
      const nst = streak + 1;
      setScore(ns);
      setStreak(nst);
      const badges = maybeUpdateStats(modeKey, ns, nst);
      setBests(loadStats(modeKey));
      setRecordNote(
        badges.newBestScore || badges.newBestStreak
          ? { score: badges.newBestScore, streak: badges.newBestStreak }
          : null
      );
    } else {
      setStreak(0);
      const badges = maybeUpdateStats(modeKey, score, 0);
      setBests(loadStats(modeKey));
      setRecordNote(
        badges.newBestScore || badges.newBestStreak
          ? { score: badges.newBestScore, streak: badges.newBestStreak }
          : null
      );
    }
  }

  function onNext() {
    setRound((r) => r + 1);
    setPhase("pick");
    setPicked(null);
    setRecordNote(null);
  }

  const answeredCount = round + (phase === "revealed" ? 1 : 0);
  const isTimeout = phase === "revealed" && picked === null && timerSeconds > 0;
  const isCorrect = picked !== null && picked === correctIndex;

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
        <div className="citatio-quiz-stats-cluster">
          {timerSeconds > 0 && phase === "pick" && (
            <div className="citatio-score-gadget retro-panel-sunken citatio-timer-gadget" aria-live="polite">
              <span className="citatio-score-gadget-label">{t("timerRemaining")}</span>
              <span className="citatio-score-gadget-val citatio-timer-val">{timeLeft}</span>
            </div>
          )}
          <div className="citatio-score-gadget retro-panel-sunken">
            <span className="citatio-score-gadget-label">{t("streakLabel")}</span>
            <span className="citatio-score-gadget-val">
              <strong>{streak}</strong>
            </span>
          </div>
          <div className="citatio-score-gadget retro-panel-sunken">
            <span className="citatio-score-gadget-label">{t("bestScoreLabel")}</span>
            <span className="citatio-score-gadget-val">
              <strong>{bests.bestScore}</strong>
            </span>
          </div>
          <div className="citatio-score-gadget retro-panel-sunken">
            <span className="citatio-score-gadget-label">{t("bestStreakLabel")}</span>
            <span className="citatio-score-gadget-val">
              <strong>{bests.bestStreak}</strong>
            </span>
          </div>
          <div className="citatio-score-gadget retro-panel-sunken">
            <span className="citatio-score-gadget-label">{t("scoreLabel")}</span>
            <span className="citatio-score-gadget-val">
              <strong>{score}</strong>
              <span className="citatio-score-slash">/</span>
              <strong>{answeredCount}</strong>
            </span>
          </div>
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
                    else if (picked !== null && i === picked) extra = " citatio-option--wrong";
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
                    else if (picked !== null && i === picked) extra = " citatio-option--wrong";
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
                {isTimeout ? t("feedbackTimeout") : isCorrect ? t("feedbackCorrect") : t("feedbackWrong")}
                {!isCorrect && (
                  <>
                    {" "}
                    {t("feedbackReveal")} <strong>{correctAnswerText}</strong>.
                  </>
                )}
              </p>
              {recordNote && (recordNote.score || recordNote.streak) && (
                <div className="citatio-record-note">
                  {recordNote.score && <p className="m-0">{t("newBestScore")}</p>}
                  {recordNote.streak && <p className="m-0">{t("newBestStreak")}</p>}
                </div>
              )}
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
