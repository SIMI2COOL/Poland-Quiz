import type { Metadata } from "next";
import "./globals.css";
import { ClientChrome } from "./components/client-chrome";
import { ThemeProvider } from "./components/theme-provider";
import { QuizPrefsProvider } from "./context/quiz-prefs-context";
import { UIProvider } from "./context/ui-context";

/** Base URL for Open Graph / Twitter cards (WhatsApp, etc.). Set in production, e.g. `https://your-domain.com` */
function getMetadataBase(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    const normalized = raw.replace(/\/$/, "");
    return new URL(normalized);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

const OG_DESCRIPTION =
  "Interaktywny quiz geografii Polski: szesnaście województw, stolice, dopasowanie miast do regionu i fiszki. Poziomy trudności, opcjonalny timer, jasny lub ciemny motyw — wszystko w stylu retro.";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Quiz o Polsce",
    template: "%s | Quiz o Polsce"
  },
  description: OG_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Quiz o Polsce",
    title: "Quiz o Polsce",
    description: OG_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        alt: "Quiz o Polsce — ekran startowy z wyborem trybu quizu."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiz o Polsce",
    description: OG_DESCRIPTION,
    images: ["/og-image.png"]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <UIProvider>
            <QuizPrefsProvider>
              <ClientChrome>{children}</ClientChrome>
            </QuizPrefsProvider>
          </UIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
