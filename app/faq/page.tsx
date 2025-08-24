// app/faq/page.tsx
import { ReactNode } from "react";

export const metadata = { title: "FAQ — UsefulFormula" };

function Q({ q, a }: { q: string; a: ReactNode }) {
  return (
    <details
      style={{
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        background: "var(--panel)",
      }}
    >
      <summary style={{ fontWeight: 600, cursor: "pointer" }}>{q}</summary>
      <div style={{ marginTop: 8, color: "var(--muted)" }}>{a}</div>
    </details>
  );
}

export default function FAQPage() {
  return (
    <main className="container">
      <h1 className="hero-title" style={{ fontSize: 36, marginBottom: 12 }}>
        Frequently Asked Questions
      </h1>
      <Q
        q="How accurate are the formulas?"
        a="We curate from reputable sources and test, but always double-check for critical work."
      />
      <Q
        q="Can I request a new formula?"
        a={
          <span>
            Yes—use the <a className="underline" href="/contact">contact form</a>.
          </span>
        }
      />
      <Q
        q="Will there be calculators?"
        a="Many formulas include calculators; more are added over time."
      />
      <Q
        q="Can I use data offline?"
        a="We plan to offer downloadable PDFs per category."
      />
    </main>
  );
}
