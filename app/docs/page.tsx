// app/docs/page.tsx
import fs from "fs";
import path from "path";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const metadata = { title: "UsefulFormula — Docs" };

// helpers
function toText(children: React.ReactNode): string {
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(toText).join("");
  if (React.isValidElement(children)) return toText((children as any).props?.children);
  return "";
}
function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 80);
}
type TocItem = { depth: number; text: string; id: string };
function extractToc(md: string): TocItem[] {
  return md
    .split(/\r?\n/)
    .map((l) => {
      const m = l.match(/^(#{1,4})\s+(.*)$/);
      if (!m) return null;
      const depth = m[1].length;
      const text = m[2].trim();
      return { depth, text, id: slugify(text) };
    })
    .filter(Boolean) as TocItem[];
}

export default function DocsPage() {
  const mdPath = path.join(process.cwd(), "data", "formula-project.md");
  const md = fs.existsSync(mdPath)
    ? fs.readFileSync(mdPath, "utf8")
    : "# Run `npm run ingest:docx` to generate docs from your Word file.";

  const toc = extractToc(md);

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "grid", gap: 24, gridTemplateColumns: "240px 1fr" }}>
        {/* TOC */}
        <aside style={{ position: "sticky", top: 86, height: "max-content" }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, color: "var(--muted)" }}>
            On this page
          </div>
          <nav>
            {toc.map((i) => (
              <a
                key={i.id}
                href={`#${i.id}`}
                style={{
                  display: "block",
                  padding: "4px 0",
                  paddingLeft: (i.depth - 1) * 12,
                  color: "#4b5563",
                  textDecoration: "none",
                }}
              >
                {i.text}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <article>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 12px" }}>
            Formula Project (Docs)
          </h1>

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: (props: any) => {
                const id = slugify(toText(props.children));
                return <h1 id={id} style={{ fontSize: 28, fontWeight: 800, margin: "2rem 0 .75rem" }} {...props} />;
              },
              h2: (props: any) => {
                const id = slugify(toText(props.children));
                return <h2 id={id} style={{ fontSize: 22, fontWeight: 700, margin: "1.25rem 0 .5rem" }} {...props} />;
              },
              h3: (props: any) => {
                const id = slugify(toText(props.children));
                return <h3 id={id} style={{ fontSize: 18, fontWeight: 600, margin: "1rem 0 .5rem" }} {...props} />;
              },
              p: (props: any) => <p style={{ margin: ".75rem 0", lineHeight: 1.7 }} {...props} />,
              ul: (props: any) => <ul style={{ margin: ".5rem 0 .75rem 1.25rem" }} {...props} />,
              ol: (props: any) => <ol style={{ margin: ".5rem 0 .75rem 1.25rem" }} {...props} />,
              a: (props: any) => (
                <a style={{ color: "#2563eb", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer" {...props} />
              ),
              table: (props: any) => (
                <div style={{ overflowX: "auto", margin: "1rem 0" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }} {...props} />
                </div>
              ),
              th: (props: any) => (
                <th
                  style={{ border: "1px solid var(--border)", padding: ".5rem .6rem", background: "#f9fafb", textAlign: "left" }}
                  {...props}
                />
              ),
              td: (props: any) => (
                <td style={{ border: "1px solid var(--border)", padding: ".5rem .6rem" }} {...props} />
              ),
              code: ({ inline, className, children, ...rest }: any) =>
                inline ? (
                  <code
                    style={{
                      background: "#f3f4f6",
                      borderRadius: 4,
                      padding: "2px 6px",
                      fontFamily:
                        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
                      fontSize: ".9em",
                    }}
                    {...rest}
                  >
                    {children}
                  </code>
                ) : (
                  <pre
                    style={{
                      background: "#f3f4f6",
                      borderRadius: 8,
                      padding: 12,
                      overflow: "auto",
                      margin: "1rem 0",
                    }}
                  >
                    <code className={className} {...rest}>
                      {children}
                    </code>
                  </pre>
                ),
            }}
          >
            {md}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
