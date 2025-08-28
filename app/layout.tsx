// app/layout.tsx
import "./globals.css";               // keep first
import "katex/dist/katex.min.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const SITE_URL = "https://www.usefulformula.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "UsefulFormula",
    template: "%s — UsefulFormula",
  },
  description: "1400+ formulas across 14 categories: math, physics, chemistry, engineering, finance, health, and everyday life.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UsefulFormula — 1400+ formulas & calculators",
    description:
      "Free formulas for math, physics, chemistry, engineering, finance, health and daily life — with examples and calculators.",
    url: SITE_URL,
    siteName: "UsefulFormula",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UsefulFormula — 1400+ formulas & calculators",
    description:
      "Free formulas for math, physics, chemistry, engineering, finance, health and daily life — with examples and calculators.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff",
  // other: { "google-adsense-account": "ca-pub-8441641457342117" }, // optional: can live here too
};

function SearchSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      // If you later add a strict CSP, pass a nonce via props
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UsefulFormula",
    url: SITE_URL,
    logo: `${SITE_URL}/android-chrome-512x512.png`,
    sameAs: [
      // Add official social profiles when available
      // "https://www.linkedin.com/company/usefulformula",
      // "https://twitter.com/usefulformula",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cspNonce: string | undefined = undefined; // wire this if you add a strict CSP

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* --- COOKIEBOT (must be FIRST in <head>) --- */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          strategy="beforeInteractive"
          data-cbid="0b1b1580-5f2d-476b-99a6-94adb7c80063"
          data-blockingmode="auto"
          type="text/javascript"
          // nonce={cspNonce}
        />

        {/* AdSense verification meta (crawler-friendly) */}
        <meta name="google-adsense-account" content="ca-pub-8441641457342117" />

        {/* Performance: preconnects for AdSense + GA */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://tpc.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />

        {/* AdSense loader (Cookiebot will manage consent/auto-block) */}
        <Script
          id="adsbygoogle-loader"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8441641457342117"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
          // nonce={cspNonce}
          // If you ever switch Cookiebot to manual mode, add:
          // data-cookieconsent="marketing" type="text/plain"
        />

        {/* Google Analytics (GA4) */}
        <Script
          id="ga4-src"
          src="https://www.googletagmanager.com/gtag/js?id=G-4H77J1RSF4"
          strategy="afterInteractive"
          // data-cookieconsent="statistics" type="text/plain" // for Cookiebot manual mode
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4H77J1RSF4');
          `}
        </Script>

        {/* JSON-LD: WebSite SearchAction + Organization */}
        <SearchSchema />
        <OrganizationSchema />
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
