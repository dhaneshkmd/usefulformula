// app/[category]/page.tsx
import Link from "next/link";
import { byCategory } from "../lib/data";
import type { Metadata } from "next";

type CategoryKey =
  | "math"
  | "physics"
  | "chemistry"
  | "engineering"
  | "finance"
  | "health"
  | "life";

const SITE_URL = "https://www.usefulformula.com";

// Friendly titles + descriptions per category (edit/extend anytime)
const CATEGORY_COPY: Record<
  string,
  { title: string; h1: string; description: string }
> = {
  math: {
    title: "Math Formulas & Examples",
    h1: "Math Formulas & Examples",
    description:
      "Algebra, geometry, trigonometry, calculus, probability and statistics with step-by-step examples and calculator support.",
  },
  physics: {
    title: "Physics Formulas & Equations",
    h1: "Physics Formulas & Equations",
    description:
      "Motion (SUVAT), energy, electricity, magnetism, waves, optics, fluids and thermodynamics explained with worked examples.",
  },
  chemistry: {
    title: "Chemistry Formulas & Conversions",
    h1: "Chemistry Formulas & Conversions",
    description:
      "Molarity and normality, pH/pOH, gas laws, yield, concentration conversions and common lab calculations.",
  },
  engineering: {
    title: "Engineering Formulas (Civil, Mechanical, Electrical)",
    h1: "Engineering Formulas",
    description:
      "Civil, mechanical and electrical basics: beams, fluids, thermodynamics, materials, Ohm’s law, power, circuits and unit conversions.",
  },
  finance: {
    title: "Finance Formulas & Calculators",
    h1: "Finance Formulas & Calculators",
    description:
      "EMI, simple & compound interest, ROI, CAGR, NPV, IRR, annuities, depreciation and savings targets with examples and calculators.",
  },
  health: {
    title: "Health & Fitness Formulas",
    h1: "Health & Fitness Formulas",
    description:
      "BMI, BMR, calorie burn estimates, heart-rate zones, body-fat estimations and practical health metrics.",
  },
  life: {
    title: "Everyday Life Formulas",
    h1: "Everyday Life Formulas",
    description:
      "Cooking conversions, travel cost estimators, productivity ratios and other practical day-to-day shortcuts.",
  },
};

// Utility: title-case a slug if it isn't in CATEGORY_COPY
const titleCase = (s: string) =>
  s
    .split(/[-\s_]+/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");

// ---- SEO: dynamic metadata per category ----
export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const raw = decodeURIComponent(params.category).toLowerCase();
  const copy = CATEGORY_COPY[raw] || {
    title: `${titleCase(raw)} Formulas`,
    h1: `${titleCase(raw)} Formulas`,
    description:
      "Browse verified formulas with step-by-step examples and practical applications.",
  };

  const url = `${SITE_URL}/${raw}`;

  return {
    title: `${copy.title} — UsefulFormula`,
    description: copy.description,
    alternates: { canonical: `/${raw}` },
    openGraph: {
      title: `${copy.title} — UsefulFormula`,
      description: copy.description,
      url,
      siteName: "UsefulFormula",
      type: "website",
    },
  };
}

function MiniFAQ({ cat }: { cat: string }) {
  // small, keyword-rich FAQs per category
  const common = (
    <>
      <details className="mt-4" style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 12 }}>
        <summary style={{ fontWeight: 600, cursor: "pointer" }}>
          Are there calculators for these formulas?
        </summary>
        <div style={{ marginTop: 6, color: "var(--muted)" }}>
          Many popular formulas include calculators, and more are being added. If you need a specific one,{" "}
          <Link href="/contact" className="underline">request it here</Link>.
        </div>
      </details>
      <details className="mt-2" style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 12 }}>
        <summary style={{ fontWeight: 600, cursor: "pointer" }}>
          Where can I find more answers?
        </summary>
        <div style={{ marginTop: 6, color: "var(--muted)" }}>
          See the full{" "}
          <Link href="/faq" className="underline">
            FAQ — Useful formulas & calculators
          </Link>{" "}
          for accuracy, downloads, and tips.
        </div>
      </details>
    </>
  );

  if (cat === "finance") {
    return (
      <>
        <details className="mt-4" style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 12 }}>
          <summary style={{ fontWeight: 600, cursor: "pointer" }}>
            What finance formulas are included?
          </summary>
          <div style={{ marginTop: 6, color: "var(--muted)" }}>
            EMI, simple and compound interest, ROI, CAGR, NPV, IRR, annuities, depreciation and savings targets — with worked examples.
          </div>
        </details>
        {common}
      </>
    );
  }

  if (cat === "math") {
    return (
      <>
        <details className="mt-4" style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 12 }}>
          <summary style={{ fontWeight: 600, cursor: "pointer" }}>
            Which math areas do you cover?
          </summary>
          <div style={{ marginTop: 6, color: "var(--muted)" }}>
            Algebra, geometry (area, perimeter, volume), trigonometry, calculus (limits, derivatives, integrals), probability and statistics.
          </div>
        </details>
        {common}
      </>
    );
  }

  if (cat === "physics") {
    return (
      <>
        <details className="mt-4" style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 12 }}>
          <summary style={{ fontWeight: 600, cursor: "pointer" }}>
            Do you have physics equations for school and college?
          </summary>
          <div style={{ marginTop: 6, color: "var(--muted)" }}>
            Yes — motion (SUVAT), energy & power, electricity & magnetism, waves, optics, fluids and thermodynamics with examples.
          </div>
        </details>
        {common}
      </>
    );
  }

  // default mini-FAQ
  return common;
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const catSlug = decodeURIComponent(params.category).toLowerCase();
  const copy =
    CATEGORY_COPY[catSlug] || {
      title: `${titleCase(catSlug)} Formulas`,
      h1: `${titleCase(catSlug)} Formulas`,
      description:
        "Browse verified formulas with step-by-step examples and practical applications.",
    };

  const items = byCategory(catSlug);

  // Breadcrumb JSON-LD (rich results)
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: copy.h1,
        item: `${SITE_URL}/${catSlug}`,
      },
    ],
  };

  return (
    <main className="container">
      <h1 className="hero-title" style={{ fontSize: 32, marginBottom: 6 }}>
        {copy.h1}
      </h1>
      <p className="subtle" style={{ marginBottom: 16 }}>{copy.description}</p>

      {/* JSON-LD: Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {items.length === 0 ? (
        <>
          <p className="subtle">No formulas found in this category yet.</p>
          <p className="subtle" style={{ marginTop: 8 }}>
            Can’t find what you need?{" "}
            <Link href="/contact" className="underline">Request a formula</Link>.
          </p>
          <MiniFAQ cat={catSlug} />
        </>
      ) : (
        <>
          <h2 style={{ fontSize: 18, margin: "12px 0" }}>
            Top {copy.h1.toLowerCase()}
          </h2>
          <div className="grid">
            {items.map((f: any) => (
              <Link key={f.id} href={`/formula/${f.id}`} className="card">
                <div className="kicker">{f.subcategory || "—"}</div>
                <h3>{f.title}</h3>

                {/* 14px preview chip for the formula */}
                <div className="formula-box" style={{ marginTop: 8 }}>
                  {f.formula_raw}
                </div>

                <div className="meta">
                  <span className="badge">{f.category}</span>
                  {f.subcategory && (
                    <span className="badge">{f.subcategory}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Mini FAQ for long-tail queries */}
          <MiniFAQ cat={catSlug} />
        </>
      )}

      {/* Helpful links */}
      <div style={{ marginTop: 20, fontSize: 14 }}>
        <span>New here? </span>
        <Link href="/faq" className="underline">
          FAQ — Useful formulas & calculators
        </Link>
        <span> · </span>
        <Link href="/about" className="underline">
          About
        </Link>
        <span> · </span>
        <Link href="/contact" className="underline">
          Contact
        </Link>
      </div>
    </main>
  );
}
