import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-gray-200 mt-16"
      style={{ borderTop: "1px solid var(--border)", marginTop: 32 }}
    >
      <div
        className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "32px 24px",
        }}
      >
        <div
          className="grid gap-8 sm:grid-cols-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 24,
          }}
        >
          {/* Brand / About */}
          <div>
            <div
              className="font-semibold text-gray-800 mb-2"
              style={{ fontWeight: 600, color: "var(--fg)" }}
            >
              © {year} UsefulFormula
            </div>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: "1.6" }}>
              1400+ formulas across math, physics, chemistry, engineering,
              finance, health, and everyday life — free and easy to use.
            </p>
            <div className="mt-3">
              <a href="#top" className="hover:underline text-xs block">
                ↑ Back to top
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4
              className="font-semibold text-gray-800 mb-3"
              style={{
                fontWeight: 600,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Categories
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/math" className="block hover:underline">
                Math Formulas
              </Link>
              <Link href="/physics" className="block hover:underline">
                Physics Formulas
              </Link>
              <Link href="/chemistry" className="block hover:underline">
                Chemistry Formulas
              </Link>
              <Link href="/engineering" className="block hover:underline">
                Engineering Formulas
              </Link>
              <Link href="/finance" className="block hover:underline">
                Finance Formulas
              </Link>
              <Link href="/health" className="block hover:underline">
                Health Formulas
              </Link>
              <Link href="/life" className="block hover:underline">
                Everyday Life Formulas
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="font-semibold text-gray-800 mb-3"
              style={{
                fontWeight: 600,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Resources
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/docs" className="block hover:underline">
                Docs
              </Link>
              <Link href="/formula" className="block hover:underline">
                All Formulas
              </Link>
            </nav>
          </div>

          {/* Help */}
          <div>
            <h4
              className="font-semibold text-gray-800 mb-3"
              style={{
                fontWeight: 600,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Help
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/faq" className="block hover:underline">
                FAQ — Useful formulas & calculators
              </Link>
              <Link href="/about" className="block hover:underline">
                About Us
              </Link>
              <Link href="/contact" className="block hover:underline">
                Contact
              </Link>
              <Link href="/terms" className="block hover:underline">
                Terms
              </Link>
              <Link href="/privacy" className="block hover:underline">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
