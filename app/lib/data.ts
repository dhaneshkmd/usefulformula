// app/lib/data.ts
import "server-only";
import fs from "fs";
import path from "path";
import { cache } from "react";
import { toSlug } from "./slug";

export type Formula = {
  id: string;
  category: string;
  subcategory: string; // may be empty string in your data
  title: string;
  formula_raw: string;
};

const FILE = path.join(process.cwd(), "data", "usefulformula.json");

/** Read and parse once per request (cached). Also strips BOM. */
const load = cache((): Formula[] => {
  try {
    const raw = fs.readFileSync(FILE, "utf8").replace(/^\uFEFF/, "");
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? (arr as Formula[]) : [];
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[data] Failed to read", FILE, e);
    }
    return [];
  }
});

export function formulas(): Formula[] {
  return load();
}

export function categories(): string[] {
  return Array.from(new Set(load().map((f) => f.category))).sort();
}

export function byCategory(cat: string): Formula[] {
  const c = cat.toLowerCase();
  return load().filter((f) => f.category.toLowerCase() === c);
}

export function findById(id: string): Formula | undefined {
  const i = id.toLowerCase();
  return load().find((f) => f.id.toLowerCase() === i);
}

export function countByCategory(): Record<string, number> {
  return load().reduce((acc, f) => {
    acc[f.category] = (acc[f.category] ?? 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

/* ------------------- SEO slug lookup ------------------- */
/**
 * Matches:
 *  /formula/<cat>/<title>
 *  /formula/<cat>/<sub>/<title>
 * (all slugified)
 */
export function findBySlugParts(parts: string[]): Formula | undefined {
  if (!parts?.length) return undefined;

  const all = load();
  const [p0, p1, ...rest] = parts;
  const maybeTitle = rest.length ? rest.join("-") : p1; // tolerate extra dashes

  return all.find((f) => {
    const cat = toSlug(f.category);
    const sub = f.subcategory?.trim() ? toSlug(f.subcategory) : undefined;
    const title = toSlug(f.title);

    // with subcategory
    if (rest.length || (p1 && sub)) {
      return cat === p0 && sub === p1 && title === maybeTitle;
    }
    // without subcategory
    return cat === p0 && title === maybeTitle;
  });
}
