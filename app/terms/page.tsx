// app/terms/page.tsx
export const metadata = { title: "Terms of Service — UsefulFormula" };

export default function TermsPage() {
  const lastUpdated = new Date().toISOString().slice(0, 10);

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>Terms of Service</h1>
      <p style={{ fontStyle: "italic", marginBottom: 16 }}>Last updated: {lastUpdated}</p>

      <section className="prose">
        <h2>1. Acceptance</h2>
        <p>
          By accessing or using UsefulFormula (“the Service”), you agree to these Terms.
        </p>

        <h2>2. Use</h2>
        <p>
          The Service is provided “as is”. Do not rely on it for professional, medical, legal, engineering, or
          financial decisions without consulting a qualified professional.
        </p>

        <h2>3. Accounts &amp; Content</h2>
        <p>
          If accounts or saved data are offered, you are responsible for activity under your account.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          Content on UsefulFormula is owned by us or our contributors. You may reference it with attribution;
          copying at scale requires permission.
        </p>

        <h2>5. Liability</h2>
        <p>
          We do not guarantee accuracy or completeness. To the maximum extent permitted by law, we are not liable
          for any damages arising from use of the Service.
        </p>

        <h2>6. Changes</h2>
        <p>
          We may update these Terms. Continued use after changes means you accept the updated Terms.
        </p>

        <h2>7. Contact</h2>
        <p>
          Questions? Email <a href="mailto:dhaneshkmd82@gmail.com">dhaneshkmd82@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}
