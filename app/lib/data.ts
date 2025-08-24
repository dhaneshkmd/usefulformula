// app/lib/data.ts
import "server-only";
import fs from "fs";
import path from "path";
import { cache } from "react";

export type Formula = {
  id: string;
  category: string;
  subcategory: string;
  title: string;
  formula_raw: string;
};

const FILE = path.join(process.cwd(), "data", "usefulformula.json");

/** Read and parse the dataset once per request (cached). Also strips BOM. */
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

/** Return all formulas. */
export function formulas(): Formula[] {
  return load();
}

/** Sorted list of categories. */
export function categories(): string[] {
  return Array.from(new Set(load().map((f) => f.category))).sort();
}

/** All formulas for a given category (case-insensitive). */
export function byCategory(cat: string): Formula[] {
  const c = cat.toLowerCase();
  return load().filter((f) => f.category.toLowerCase() === c);
}

/** Find a formula by ID (case-insensitive). */
export function findById(id: string): Formula | undefined {
  const i = id.toLowerCase();
  return load().find((f) => f.id.toLowerCase() === i);
}

/** Counts per category (optional). */
export function countByCategory(): Record<string, number> {
  return load().reduce((acc, f) => {
    acc[f.category] = (acc[f.category] ?? 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}
