import "./globals.css";
import { ClientChrome } from "./components/client-chrome";
import { ThemeProvider } from "./components/theme-provider";
import { QuizPrefsProvider } from "./context/quiz-prefs-context";
import { UIProvider } from "./context/ui-context";

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
