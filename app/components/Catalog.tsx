"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";

type Formula = {
  id: string;
  category: string;
  subcategory: string;
  title: string;
  formula_raw: string;
};

const EMOJI: Record<string, string> = {
  "Personal Finance & Money Management": "💰",
  "Health & Fitness": "💪",
  "Education & Learning": "📘",
  "Business & Entrepreneurship": "📈",
  "Work & Productivity": "🧠",
  "Science & Technology": "🔬",
  "Construction & Engineering": "🏗️",
  "Travel & Transportation": "✈️",
  "Household & Lifestyle": "🏠",
  "Real Estate & Property": "🏡",
  "Agriculture & Farming": "🌾",
  "Environment & Climate": "🌍",
  "Sports & Recreation": "⚽",
  "Human Relationships & Social Life": "💬",
};

export default function Catalog({ formulas }: { formulas: Formula[] }) {
  const allCats = useMemo(
    () => Array.from(new Set(formulas.map((f) => f.category))),
    [formulas]
  );

  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);

  const fuse = useMemo(
    () =>
      new Fuse(formulas, {
        keys: ["title", "category", "subcategory", "formula_raw"],
        threshold: 0.34,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    [formulas]
  );

  const filtered = useMemo(() => {
    const trimmed = q.trim();
    let items = cat ? formulas.filter((f) => f.category === cat) : formulas;
    if (trimmed) {
      const results = fuse.search(trimmed, { limit: 300 });
      items = results.map((r) => r.item).filter((i) => !cat || i.category === cat);
    }
    return items;
  }, [formulas, cat, q, fuse]);

  const list = filtered.slice(0, 60);

  return (
    <div className="container">
      {/* hero */}
      <h1 className="hero-title" style={{ fontSize: 42, marginBottom: 8 }}>
        Find the right formula in seconds
      </h1>
      <p className="subtle" style={{ marginBottom: 18 }}>
        Finance, Health, Education, Engineering, Travel, Lifestyle, and more.
      </p>

      {/* search */}
      <div className="search" role="search">
        <span aria-hidden>🔎</span>
        <input
          placeholder="Search formulas…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search formulas"
        />
        {q && (
          <button
            type="button"
            className="btn"
            onClick={() => setQ("")}
            aria-label="Clear search"
            style={{ padding: "6px 10px", marginLeft: 6 }}
          >
            ✕
          </button>
        )}
      </div>

      {/* chips (categories) */}
      <div className="chips">
        <button
          className={`chip ${!cat ? "active" : ""}`}
          onClick={() => setCat(null)}
          aria-pressed={!cat}
        >
          ⭐ All
        </button>
        {allCats.map((c) => (
          <button
            key={c}
            className={`chip ${cat === c ? "active" : ""}`}
            onClick={() => setCat(c === cat ? null : c)}
            aria-pressed={cat === c}
            title={c}
          >
            <span aria-hidden>{EMOJI[c] ?? "📌"}</span>
            {c.split("&")[0].trim()}
          </button>
        ))}
      </div>

      {/* result meta */}
      <div className="subtle" style={{ marginTop: 10 }}>
        Showing <strong>{list.length}</strong> of <strong>{filtered.length}</strong>{" "}
        {cat ? `in “${cat}”` : "results"}
        {q ? ` for “${q}”` : ""}
      </div>

      {/* cards */}
      {list.length > 0 ? (
        <div className="grid">
          {list.map((f) => (
            <Link key={f.id} href={`/formula/${f.id}`} className="card">
              <div className="kicker">{f.subcategory || f.category}</div>
              <h3>
                {(EMOJI[f.category] ?? "🧮") + " "}
                {f.title}
              </h3>

              {/* 14px preview chip */}
              <div className="formula-box" style={{ marginTop: 8 }}>
                {f.formula_raw}
              </div>

              <div className="meta">
                <span className="badge">{f.category.split("&")[0]}</span>
                {f.subcategory && (
                  <span
                    className="badge"
                    style={{ background: "#e8f5e9", color: "#1b5e20" }}
                  >
                    {f.subcategory}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="subtle" style={{ marginTop: 14 }}>
          No matches found. Try a different keyword or choose another category.
        </p>
      )}
    </div>
  );
}
