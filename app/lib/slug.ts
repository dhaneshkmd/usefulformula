export type Sluggable = { category: string; subcategory?: string; title: string };

export function toSlug(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function buildFormulaPath(f: Sluggable) {
  const parts = [toSlug(f.category)];
  if (f.subcategory) parts.push(toSlug(f.subcategory));
  parts.push(toSlug(f.title));
  return `/formula/${parts.join("/")}`;
}
