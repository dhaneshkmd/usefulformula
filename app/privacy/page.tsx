// app/privacy/page.tsx
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
          We may use reputable analytics, email, or hosting providers. We do not sell personal data.
        </p>

        <h2>Your Choices</h2>
        <p>
          You can request deletion of messages you’ve sent to us. For cookies/analytics, adjust your browser settings.
        </p>

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
