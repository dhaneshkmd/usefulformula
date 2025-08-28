// app/sitemap.ts
import { MetadataRoute } from "next";
import { formulas } from "./lib/data"; // ✅ correct named export

const BASE = "https://www.usefulformula.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes
  const staticPaths = [
    "/",
    "/faq",
    "/about",
    "/contact",
    "/docs",
    "/terms",
    "/privacy",
    // Category hubs
    "/math",
    "/physics",
    "/chemistry",
    "/engineering",
    "/finance",
    "/health",
    "/life",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date(),
  }));

  // Formula detail pages (works whether `formulas` is an array or Record)
  const list: any[] = Array.isArray(formulas)
    ? formulas
    : Object.values(formulas ?? {}) as any[];

  const formulaEntries: MetadataRoute.Sitemap = list.map((f) => {
    const id = encodeURIComponent(String(f.id ?? f.slug ?? ""));
    if (!id) return null as any;

    const last =
      (f.updatedAt as string) ||
      (f.updated_at as string) ||
      (f.lastModified as string) ||
      (f.last_modified as string) ||
      new Date().toISOString();

    return {
      url: `${BASE}/formula/${id}`,
      lastModified: new Date(last),
    };
  }).filter(Boolean);

  return [...staticEntries, ...formulaEntries];
}
