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
  // Build JSON-LD schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is UsefulFormula?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UsefulFormula.com is a free online library of 1400+ useful formulas covering mathematics, physics, chemistry, engineering, finance, health, and everyday life applications."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate are the formulas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All formulas are validated against textbooks, engineering references, and scientific sources. They are accurate for math, physics, chemistry, finance, and health calculations."
        }
      },
      {
        "@type": "Question",
        "name": "What categories of formulas are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We include formulas for mathematics, physics, chemistry, engineering, finance, health, and everyday life. Each category includes step-by-step examples and practical applications."
        }
      },
      {
        "@type": "Question",
        "name": "Are the formulas free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — all formulas are free for students, teachers, professionals, and everyday users. No sign-up required."
        }
      },
      {
        "@type": "Question",
        "name": "Can I request a new formula?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — you can use the contact form to request new formulas or calculators. We update regularly with user requests."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide online calculators?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many formulas such as EMI, Compound Interest, ROI, CAGR, and BMI include calculators, with more being added over time."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide worked examples?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most formulas include step-by-step worked examples showing how to apply them to real-life problems."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download formulas for offline use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are preparing downloadable PDF formula sheets and an upcoming mobile app for offline use."
        }
      },
      {
        "@type": "Question",
        "name": "What finance formulas are included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We include EMI, Compound Interest, ROI, CAGR, Net Present Value (NPV), Internal Rate of Return (IRR), and more — useful for personal finance, business, and investments."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have formulas for exams and projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. UsefulFormula is ideal for exam preparation, homework, engineering projects, and professional assignments."
        }
      },
      {
        "@type": "Question",
        "name": "How often do you add new content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We regularly add new formulas, calculators, and life hacks based on search trends and user feedback."
        }
      },
      {
        "@type": "Question",
        "name": "What makes UsefulFormula different from other formula sites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UsefulFormula provides 1400+ verified formulas, easy navigation, step-by-step examples, and covers not only academics but also finance, health, and everyday life formulas."
        }
      }
    ]
  };

  return (
    <main className="container">
      <h1 className="hero-title" style={{ fontSize: 36, marginBottom: 12 }}>
        Frequently Asked Questions
      </h1>

      <Q q="What is UsefulFormula?" a="UsefulFormula.com is a free online library of 1400+ useful formulas covering mathematics, physics, chemistry, engineering, finance, health, and everyday life applications." />

      <Q q="How accurate are the formulas?" a="All formulas are validated against textbooks, engineering references, and scientific sources. They are accurate for math, physics, chemistry, finance, and health calculations." />

      <Q
        q="What categories of formulas are available?"
        a={
          <span>
            We include formulas for{" "}
            <a href="/math" className="underline">mathematics</a>,{" "}
            <a href="/physics" className="underline">physics</a>,{" "}
            <a href="/chemistry" className="underline">chemistry</a>,{" "}
            <a href="/engineering" className="underline">engineering</a>,{" "}
            <a href="/finance" className="underline">finance</a>,{" "}
            <a href="/health" className="underline">health</a>, and{" "}
            <a href="/life" className="underline">everyday life</a>. Each category includes examples and practical applications.
          </span>
        }
      />

      <Q q="Are the formulas free to use?" a="Yes — all formulas are 100% free for students, teachers, professionals, and everyday users. No sign-up required." />

      <Q q="Can I request a new formula?" a={<span>Yes — use the <a className="underline" href="/contact">contact form</a> to suggest a formula or calculator. We frequently update with user requests.</span>} />

      <Q q="Do you provide online calculators?" a="Yes. Many popular formulas such as EMI, Compound Interest, ROI, CAGR, and BMI include calculators, with more added regularly." />

      <Q q="Do you provide worked examples?" a="Yes. Most formulas include step-by-step examples so you can see how to apply them in real problems — from school math and physics to personal finance and health tracking." />

      <Q q="Can I download formulas for offline use?" a="We are preparing downloadable PDF formula sheets per category and an upcoming mobile app for offline access." />

      <Q q="What finance formulas are included?" a="We include EMI, Compound Interest, ROI, CAGR, Net Present Value (NPV), Internal Rate of Return (IRR), and more — useful for personal finance, business, and investment planning." />

      <Q q="Do you have formulas for exams and projects?" a="Yes. UsefulFormula is ideal for exam preparation, homework, research projects, engineering assignments, and real-world problem-solving." />

      <Q q="How often do you add new content?" a="We regularly add new formulas, calculators, and life hack shortcuts based on search trends and user feedback." />

      <Q q="What makes UsefulFormula different from other formula sites?" a="Our collection is larger (1400+ verified formulas), easier to search, includes step-by-step examples, and covers not just academics but also finance, health, and everyday life formulas." />

      {/* Inject FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
