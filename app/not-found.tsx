import Link from "next/link";
import { RetroWindow } from "./components/retro-window";

export default function NotFound() {
  return (
    <div className="retro-desktop min-h-screen grid place-items-center p-6 sm:p-8">
      <RetroWindow title="404 — Page not found" className="max-w-md w-full">
        <div className="text-center">
          <p className="m-0 text-base font-semibold">This page does not exist.</p>
          <p className="mt-2 text-sm opacity-90">Poland Quiz is here — this URL is not.</p>
          <Link
            href="/"
            className="retro-btn mt-5 inline-block px-5 py-2.5 text-sm font-bold no-underline"
          >
            ← Back to Poland Quiz
          </Link>
        </div>
      </RetroWindow>
    </div>
  );
}
