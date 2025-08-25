// app/layout.tsx
import "./globals.css";               // keep first
import "katex/dist/katex.min.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "UsefulFormula",
  description: "1400+ formulas across 14 categories",
  // If you prefer, you can also set:
  // other: { "google-adsense-account": "ca-pub-8441641457342117" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cspNonce: string | undefined = undefined; // wire this if you add a strict CSP

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* AdSense verification meta (simple + crawler-friendly) */}
        <meta name="google-adsense-account" content="ca-pub-8441641457342117" />

        {/* Performance: preconnect to ad origins */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://tpc.googlesyndication.com" crossOrigin="anonymous" />

        {/* AdSense loader (rendered in raw <head> so crawlers see it) */}
        <Script
          id="adsbygoogle-loader"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8441641457342117"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
          // nonce={cspNonce} // uncomment if you add a CSP nonce
        />
      </head>

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
