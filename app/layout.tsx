import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { UIProvider } from "./context/ui-context";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <UIProvider>{children}</UIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
