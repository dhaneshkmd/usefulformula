// app/formula/[id]/page.tsx
import Link from "next/link";
import { findById } from "../../lib/data";

export default function FormulaPage({ params }: { params: { id: string } }) {
  const item = findById(params.id);
  if (!item) {
    return <main style={{ padding: 24 }}>Not found</main>;
  }

  return (
    <main className="container" style={{ maxWidth: 820 }}>
      <div style={{ fontSize: 12, opacity: 0.7 }}>
        {item.category}
        {item.subcategory ? ` • ${item.subcategory}` : ""}
      </div>

      <h1 className="hero-title" style={{ fontSize: 28, marginTop: 8 }}>
        {item.title}
      </h1>

      {/* High-contrast formula chip */}
      <pre className="formula-box formula-box--light" style={{ marginTop: 16 }}>
        {item.formula_raw}
      </pre>
    </main>
  );
}
