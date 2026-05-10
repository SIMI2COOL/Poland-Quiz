import "./globals.css";
import { ClientChrome } from "./components/client-chrome";
import { ThemeProvider } from "./components/theme-provider";
import { UIProvider } from "./context/ui-context";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <UIProvider>
            <ClientChrome>{children}</ClientChrome>
          </UIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
