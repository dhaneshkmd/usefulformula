// app/sitemap.ts
import { MetadataRoute } from "next";
import { formulas } from "./lib/data"; // ✅ correct export

const BASE = "https://www.usefulformula.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
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

  // Formula detail pages
  const list = (formulas as any[]) ?? [];
  const formulaEntries: MetadataRoute.Sitemap = list.map((f) => {
    const id = encodeURIComponent(String(f.id));
    // Try to pick a meaningful last modified date if present
    const last =
      (f.updatedAt as string) ||
      (f.updated_at as string) ||
      (f.lastModified as string) ||
      new Date().toISOString();

    return {
      url: `${BASE}/formula/${id}`,
      lastModified: new Date(last),
    };
  });

  return [...staticEntries, ...formulaEntries];
}
