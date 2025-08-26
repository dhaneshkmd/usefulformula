// app/terms/page.tsx
export const metadata = { title: "Terms of Service — UsefulFormula" };

export default function TermsPage() {
  const lastUpdated = new Date().toISOString().slice(0, 10);

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>Terms of Service</h1>
      <p style={{ fontStyle: "italic", marginBottom: 16 }}>Last updated: {lastUpdated}</p>

      <section className="prose">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using UsefulFormula (“the Service”), you agree to these Terms. If you do not agree, do not
          use the Service.
        </p>

        <h2>2. Use of the Service</h2>
        <p>
          The Service is provided “as is” for informational and educational purposes. Do not rely on it for
          professional, medical, legal, engineering, financial, or other decisions without consulting a qualified
          professional. You agree not to misuse the Service, attempt to disrupt it, or use it in violation of
          applicable law.
        </p>

        <h2>3. Accounts &amp; User Content</h2>
        <p>
          If account features or saved data are offered, you are responsible for all activity under your account.
          You must ensure any content you submit is lawful and does not infringe third-party rights. We may remove
          content that violates these Terms.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          Content on UsefulFormula is owned by us or our contributors and is protected by applicable intellectual
          property laws. You may reference content with attribution; copying, redistribution, or automated scraping
          at scale requires prior written permission.
        </p>

        <h2>5. Ads &amp; Analytics</h2>
        <p>
          The Service may display advertising and use analytics tools to understand usage and improve the Service.
          For details about cookies, identifiers, and your choices, see our{" "}
          <a className="underline" href="/privacy">
            Privacy Policy
          </a>.
        </p>

        <h2>6. Cookies &amp; Consent</h2>
        <p>
          We use cookies and similar technologies. Depending on your region, you may be asked to manage your cookie
          preferences. You can review or change your preferences at any time via the controls described in our{" "}
          <a className="underline" href="/privacy">
            Privacy Policy
          </a>.
        </p>

        <h2>7. Third-Party Links</h2>
        <p>
          The Service may contain links to third-party sites or resources. We are not responsible for their content,
          policies, or practices. Access them at your own risk.
        </p>

        <h2>8. Disclaimer &amp; Limitation of Liability</h2>
        <p>
          We do not warrant the accuracy, completeness, or availability of the Service. To the maximum extent
          permitted by law, we disclaim all warranties and will not be liable for any indirect, incidental,
          consequential, special, or punitive damages arising from your use of the Service.
        </p>

        <h2>9. Termination</h2>
        <p>
          We may suspend or terminate access to the Service at any time, with or without notice, for any reason,
          including a suspected breach of these Terms.
        </p>

        <h2>10. Changes to the Service &amp; Terms</h2>
        <p>
          We may modify the Service or these Terms from time to time. Continued use after changes take effect
          constitutes acceptance of the updated Terms. The “Last updated” date above reflects the most recent
          change.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms are governed by applicable laws of your place of residence or, where required, the laws of the
          jurisdiction in which the Service is provided. Local consumer protection laws may grant you additional
          rights.
        </p>

        <h2>12. Contact</h2>
        <p>
          Questions about these Terms? Email{" "}
          <a className="underline" href="mailto:dhaneshkmd82@gmail.com">
            dhaneshkmd82@gmail.com
          </a>.
        </p>
      </section>
    </main>
  );
}
