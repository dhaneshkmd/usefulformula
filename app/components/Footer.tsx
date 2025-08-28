import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-gray-200 mt-16"
      style={{ borderTop: "1px solid var(--border)", marginTop: 32 }}
    >
      <div
        className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600 grid gap-8 sm:grid-cols-4"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "32px 24px",
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
            <Link href="/math" className="hover:underline block">
              Math Formulas
            </Link>
            <Link href="/physics" className="hover:underline block">
              Physics Formulas
            </Link>
            <Link href="/chemistry" className="hover:underline block">
              Chemistry Formulas
            </Link>
            <Link href="/engineering" className="hover:underline block">
              Engineering Formulas
            </Link>
            <Link href="/finance" className="hover:underline block">
              Finance Formulas
            </Link>
            <Link href="/health" className="hover:underline block">
              Health Formulas
            </Link>
            <Link href="/life" className="hover:underline block">
              Everyday Life Formulas
            </Link>
          </nav>
        </div>

        {/* Docs / Resources */}
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
            <Link href="/docs" className="hover:underline block">
              Docs
            </Link>
            <Link href="/formula" className="hover:underline block">
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
            <Link href="/faq" className="hover:underline block">
              FAQ — Useful formulas & calculators
            </Link>
            <Link href="/about" className="hover:underline block">
              About Us
            </Link>
            <Link href="/contact" className="hover:underline block">
              Contact
            </Link>
            <Link href="/terms" className="hover:underline block">
              Terms
            </Link>
            <Link href="/privacy" className="hover:underline block">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
