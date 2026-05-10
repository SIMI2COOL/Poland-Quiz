"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { RetroWindow } from "../../components/retro-window";
import { useUI } from "../../context/ui-context";

const MODES = ["woj", "gminy", "mixed", "study"] as const;
type Mode = (typeof MODES)[number];

function isMode(s: string): s is Mode {
  return (MODES as readonly string[]).includes(s);
}

export default function QuizModePage() {
  const params = useParams();
  const raw = params.mode;
  const mode = typeof raw === "string" ? raw : Array.isArray(raw) ? raw[0] : "";
  const { t } = useUI();

  if (!isMode(mode)) {
    return (
      <div className="retro-desktop min-h-screen grid place-items-center p-6">
        <RetroWindow title="?" className="max-w-md w-full">
          <p className="m-0 text-center font-semibold">Unknown quiz mode.</p>
          <Link href="/" className="retro-btn mt-4 block text-center font-bold no-underline">
            ← Home
          </Link>
        </RetroWindow>
      </div>
    );
  }

  return (
    <div className="retro-desktop min-h-screen p-3 sm:p-5 md:p-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        <RetroWindow title={t(mode)} className="w-full">
          <p className="retro-lead m-0">{t("quizStub")}</p>
          <ul className="retro-hint-list mt-3 text-sm">
            <li>{t("quizHintMap")}</li>
            <li>{t("quizHintBack")}</li>
          </ul>
          <Link
            href="/"
            className="retro-btn retro-primary-cta mt-6 inline-block px-5 py-2.5 text-center text-sm font-bold no-underline"
          >
            ← {t("backHome")}
          </Link>
        </RetroWindow>
      </div>
    </div>
  );
}
