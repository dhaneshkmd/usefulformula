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
  // other: { "google-adsense-account": "ca-pub-8441641457342117" }, // optional: can live here too
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cspNonce: string | undefined = undefined; // wire this if you add a strict CSP

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* AdSense verification meta (crawler-friendly) */}
        <meta name="google-adsense-account" content="ca-pub-8441641457342117" />

        {/* Performance: preconnects for AdSense + GA */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://tpc.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />

        {/* AdSense loader (in raw <head> so crawlers see it) */}
        <Script
          id="adsbygoogle-loader"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8441641457342117"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
          // nonce={cspNonce}
        />

        {/* Google Analytics (GA4) */}
        <Script
          id="ga4-src"
          src="https://www.googletagmanager.com/gtag/js?id=G-4H77J1RSF4"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4H77J1RSF4');
          `}
        </Script>
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
