// scripts/ingest-docx.ts
import fs from "fs";
import path from "path";
import * as mammoth from "mammoth";

type Item = {
  id: string;
  category: string;
  subcategory: string;
  title: string;
  formula_raw: string;
};

const ROOT = process.cwd();
const srcCandidates = [
  path.join(ROOT, "data", "formula project.docx"),
  path.join(ROOT, "data", "formula-project.docx"),
];
const srcDocx = srcCandidates.find(fs.existsSync);

if (!srcDocx) {
  console.error("❌ Could not find DOCX. Put it at data/formula project.docx");
  process.exit(1);
}
const srcDocxPath: string = srcDocx; // ensure non-null

const mdOut     = path.join(ROOT, "data", "formula-project.md");
const jsonOut   = path.join(ROOT, "data", "from_doc.json");
const mergedOut = path.join(ROOT, "data", "usefulformula.json");

const CATS = [
  "Personal Finance & Money Management", "Health & Fitness", "Education & Learning",
  "Business & Entrepreneurship", "Work & Productivity", "Science & Technology",
  "Construction & Engineering", "Travel & Transportation", "Household & Lifestyle",
  "Real Estate & Property", "Agriculture & Farming", "Environment & Climate",
  "Sports & Recreation", "Human Relationships & Social Life",
];

// Treat these as “formula-ish” lines
const FORMULA_HINT = /[=]|÷|×|≥|≤|→|≈|%/;

function abbrev(cat: string) {
  return cat.split(/\W+/).map(s => s[0] ?? "").join("").toUpperCase().slice(0, 4);
}

(async () => {
  // 1) DOCX → Markdown (cast mammoth to any because TS types don’t include convertToMarkdown)
  let md = "";
  try {
    const res = await (mammoth as any).convertToMarkdown({ path: srcDocxPath });
    md = String(res?.value ?? "");
  } catch (e) {
    console.error("❌ Failed converting DOCX to Markdown:", e);
    process.exit(1);
  }

  fs.writeFileSync(mdOut, md, "utf8");
  console.log("✓ Wrote", mdOut);

  // 2) Markdown lines → formula items
  const lines = md.split(/\r?\n/);
  const items: Item[] = [];
  let currentCat = CATS[0];
  let currentSub = "";
  const counters = new Map<string, number>();

  function nextId(cat: string) {
    const a = abbrev(cat);
    const n = (counters.get(cat) ?? 0) + 1;
    counters.set(cat, n);
    return `${a}${String(n).padStart(3, "0")}`;
  }

  for (const raw of lines) {
    const line = raw
      .replace(/^[#*\-•]+\s+/, "")       // strip bullets/heading markers
      .replace(/\u2022/g, "")            // •
      .trim();
    if (!line) continue;

    // Detect category headings by name presence
    const maybeCat = CATS.find(c => line.toLowerCase().includes(c.toLowerCase()));
    if (maybeCat) { currentCat = maybeCat; currentSub = ""; continue; }

    // Simple subcategory heuristic (lines ending with ":" become a subheading)
    if (/^[A-Za-z].{0,60}:$/.test(line)) {
      currentSub = line.replace(/:$/, "").trim();
      continue;
    }

    // Capture “formula-like” rows
    if (FORMULA_HINT.test(line)) {
      // Prefer text before "=" as title; otherwise before " - " or ":"; fallback to whole line
      const eqIdx = line.indexOf("=");
      let title = (eqIdx > 0 ? line.slice(0, eqIdx) : line.split(" - ")[0]).trim();
      title = title.split(":")[0].trim().replace(/^(\d+\.|\s)+/, "");
      const formula = (eqIdx > 0 ? line.slice(eqIdx + 1) : line).trim();

      items.push({
        id: nextId(currentCat),
        category: currentCat,
        subcategory: currentSub,
        title,
        formula_raw: formula,
      });
    }
  }

  fs.writeFileSync(jsonOut, JSON.stringify(items, null, 2), "utf8");
  console.log(`✓ Extracted ${items.length} formulas → ${jsonOut}`);

  // 3) Merge with existing data/usefulformula.json (de-dupe on category+title)
  let base: Item[] = [];
  if (fs.existsSync(mergedOut)) {
    try { base = JSON.parse(fs.readFileSync(mergedOut, "utf8")); } catch { /* ignore */ }
  }

  const seen = new Set(base.map(b => `${b.category}::${b.title}`));
  for (const it of items) {
    const key = `${it.category}::${it.title}`;
    if (!seen.has(key)) base.push(it);
  }

  fs.writeFileSync(mergedOut, JSON.stringify(base, null, 2), "utf8");
  console.log(`✓ Merged dataset → ${mergedOut} (total ${base.length})`);
})();
