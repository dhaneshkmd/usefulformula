// app/formula/[...slug]/page.tsx
import { notFound, permanentRedirect } from "next/navigation";
import { findBySlugParts, findById } from "../../lib/data";
import { buildFormulaPath } from "../../lib/slug";

type Params = { slug: string[] };

export default function FormulaSlugPage({ params }: { params: Params }) {
  const parts = (params.slug || []).map(decodeURIComponent);

  // Try SEO slugs first
  let item = findBySlugParts(parts);

  // Legacy ID redirect: /formula/PFM001 -> /formula/<cat>/<...>/<title>
  if (!item && parts.length === 1) {
    const legacy = findById(parts[0]);
    if (legacy) {
      permanentRedirect(buildFormulaPath(legacy));
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
      <pre className="formula-box formula-box--light" style={{ marginTop: 16 }}>
        {item.formula_raw}
      </pre>
    </main>
  );
}
