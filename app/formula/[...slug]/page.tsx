// app/formula/[...slug]/page.tsx
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import {
  findBySlugParts,
  findById,
  buildFormulaPath,
} from "../../lib/data"; // note the ../../ path

type Params = { slug: string[] };

export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const parts = (params.slug || []).map(decodeURIComponent);

  // Try to resolve SEO slug first.
  let item = findBySlugParts(parts);

  // If it's a legacy ID like /formula/PFM001, build metadata from the legacy match.
  if (!item && parts.length === 1) {
    const legacy = findById(parts[0]);
    if (legacy) {
      const url = "https://www.usefulformula.com" + buildFormulaPath(legacy);
      const section = legacy.subcategory || legacy.category;
      return {
        title: `${legacy.title} – ${section} | UsefulFormula`,
        description: `${legacy.title} formula in ${section}.`,
        alternates: { canonical: url },
      };
    }
  }

  if (!item) return { title: "Formula not found | UsefulFormula" };

  const url = "https://www.usefulformula.com" + buildFormulaPath(item);
  const section = item.subcategory || item.category;

  return {
    title: `${item.title} – ${section} | UsefulFormula`,
    description: `${item.title} formula in ${section}.`,
    alternates: { canonical: url },
  };
}

export default function FormulaSlugPage({ params }: { params: Params }) {
  const parts = (params.slug || []).map(decodeURIComponent);

  // 1) SEO slug resolution
  let item = findBySlugParts(parts);

  // 2) Legacy ID redirect: /formula/PFM001 -> /formula/real-estate-property/gross-rent-multiplier
  if (!item && parts.length === 1) {
    const legacy = findById(parts[0]);
    if (legacy) {
      permanentRedirect(buildFormulaPath(legacy)); // 308
    }
  }

  if (!item) notFound();

  return (
    <main className="container" style={{ maxWidth: 820 }}>
      <div style={{ fontSize: 12, opacity: 0.7 }}>
        {item.category}
        {item.subcategory ? ` • ${item.subcategory}` : ""}
      </div>

      <h1 className="hero-title" style={{ fontSize: 28, marginTop: 8 }}>
        {item.title}
      </h1>

      {/* High-contrast box (white bg + dark ink even in dark mode) */}
      <pre className="formula-box formula-box--light" style={{ marginTop: 16 }}>
        {item.formula_raw}
      </pre>
    </main>
  );
}
