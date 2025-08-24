// app/layout.tsx
import "./globals.css";               // ← must exist and be first (before other CSS)
import "katex/dist/katex.min.css";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "UsefulFormula",
  description: "1400+ formulas across 14 categories",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
