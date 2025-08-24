// app/[category]/page.tsx
import Link from "next/link";
import { byCategory } from "../lib/data";

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = decodeURIComponent(params.category);
  const items = byCategory(category);

  return (
    <main className="container">
      <h1 className="hero-title" style={{ fontSize: 28, marginBottom: 8 }}>
        {category}
      </h1>

      {items.length === 0 ? (
        <p className="subtle">No formulas found in this category yet.</p>
      ) : (
        <div className="grid">
          {items.map((f) => (
            <Link key={f.id} href={`/formula/${f.id}`} className="card">
              <div className="kicker">{f.subcategory || "—"}</div>
              <h3>{f.title}</h3>

              {/* 14px preview chip for the formula */}
              <div className="formula-box" style={{ marginTop: 8 }}>
                {f.formula_raw}
              </div>

              <div className="meta">
                <span className="badge">{f.category}</span>
                {f.subcategory && <span className="badge">{f.subcategory}</span>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
