// app/sitemap.ts
import { MetadataRoute } from "next";
import { allFormulas } from "./lib/data"; // adjust to your data export

const base = "https://www.usefulformula.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/faq`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/docs`, lastModified: new Date() },
    { url: `${base}/terms`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    // categories
    "math",
    "physics",
    "chemistry",
    "engineering",
    "finance",
    "health",
    "life",
  ].map((c) =>
    typeof c === "string"
      ? { url: `${base}/${c}`, lastModified: new Date() }
      : c
  );
}
