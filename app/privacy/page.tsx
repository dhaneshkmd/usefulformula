// app/privacy/page.tsx
import Script from "next/script";
import CookieSettingsButton from "../components/CookieSettingsButton";

export const metadata = { title: "Privacy Policy — UsefulFormula" };

export default function PrivacyPage() {
  const lastUpdated = new Date().toISOString().slice(0, 10);

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>Privacy Policy</h1>
      <p style={{ fontStyle: "italic", marginBottom: 16 }}>Last updated: {lastUpdated}</p>

      <section className="prose">
        <h2>What We Collect</h2>
        <ul>
          <li>Basic analytics (page views, device info) to improve the Service.</li>
          <li>Data you submit explicitly (e.g., contact form messages).</li>
        </ul>

        <h2>How We Use Data</h2>
        <ul>
          <li>Operate, maintain, and improve the Service.</li>
          <li>Respond to your messages and support requests.</li>
        </ul>

        <h2>Storage &amp; Third Parties</h2>
        <p>We may use reputable analytics, advertising, and hosting providers. We do not sell personal data.</p>

        <h2>Your Choices</h2>
        <p>
          You can request deletion of messages you’ve sent to us. For cookies/analytics, adjust your browser
          settings or use the cookie consent controls below.
        </p>

        <h2>Cookie Declaration</h2>
        <p>
          Below is a live overview of the cookies used on this website. You can withdraw or change your consent at
          any time.
        </p>

        {/* Cookiebot Declaration Script (injects the table below) */}
        <Script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/0b1b1580-5f2d-476b-99a6-94adb7c80063/cd.js"
          strategy="afterInteractive"
          type="text/javascript"
          async
        />

        {/* Cookiebot injects the table here */}
        <div id="CookieDeclaration" aria-label="Cookie declaration table" />

        <p style={{ marginTop: 16 }}>
          To update your preferences later, reopen the consent banner:
        </p>

        {/* Client-side button to reopen banner (kept separate to avoid server event handlers) */}
        <CookieSettingsButton />

        <h2>Contact</h2>
        <p>
          Questions about privacy?{" "}
          <a className="underline" href="/contact">
            Contact us
          </a>.
        </p>
      </section>
    </main>
  );
}
