"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { QuizRunner } from "../../components/quiz-runner";
import { RetroWindow } from "../../components/retro-window";
import { SettingsBar } from "../../components/settings-bar";
import { useUI } from "../../context/ui-context";
import type { QuizMode } from "@/lib/quiz-engine";

const MODES = ["woj", "gminy", "mixed", "study"] as const;

function isMode(s: string): s is QuizMode {
  return (MODES as readonly string[]).includes(s);
}

const TITLE_KEY: Record<QuizMode, "windowWoj" | "windowGminy" | "windowMixed" | "windowStudy"> = {
  woj: "windowWoj",
  gminy: "windowGminy",
  mixed: "windowMixed",
  study: "windowStudy"
};

export default function QuizModePage() {
  const params = useParams();
  const raw = params.mode;
  const slug = typeof raw === "string" ? raw : Array.isArray(raw) ? raw[0] : "";
  const { t } = useUI();

  if (!isMode(slug)) {
    return (
      <div className="citatio-stack citatio-stack--center">
        <SettingsBar />
        <RetroWindow title="?" className="w-full">
          <p className="m-0 text-center font-bold">{t("unknownMode")}</p>
          <Link href="/" className="retro-btn citatio-option mt-4 block text-center font-bold no-underline">
            ← {t("homeLink")}
          </Link>
        </RetroWindow>
      </div>
    );
  }

  return (
    <div className="citatio-stack">
      <SettingsBar />
      <RetroWindow title={t(TITLE_KEY[slug])} className="w-full">
        <QuizRunner mode={slug} />
      </RetroWindow>
    </div>
  );
}
