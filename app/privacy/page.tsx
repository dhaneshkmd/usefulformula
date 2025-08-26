// app/privacy/page.tsx
import Script from "next/script";

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
        <p>
          We may use reputable analytics, advertising, and hosting providers. We do not sell personal data.
        </p>

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

        {/* Cookiebot Declaration Script */}
        <Script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/0b1b1580-5f2d-476b-99a6-94adb7c80063/cd.js"
          strategy="afterInteractive"
          type="text/javascript"
          async
        />

        {/* Fallback container (Cookiebot replaces this with the cookie table) */}
        <div id="CookieDeclaration"></div>

        <button
          style={{
            marginTop: "1.5rem",
            padding: "0.5rem 1rem",
            border: "1px solid #ccc",
            borderRadius: 6,
            background: "#f9f9f9",
            cursor: "pointer",
          }}
          onClick={() => {
            // @ts-ignore
            window?.Cookiebot?.renew();
          }}
        >
          Change your cookie settings
        </button>

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
