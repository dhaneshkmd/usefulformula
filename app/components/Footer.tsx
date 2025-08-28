export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-gray-200 mt-16"
      style={{ borderTop: "1px solid var(--border)", marginTop: 32 }}
    >
      <div
        className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600 grid gap-8 sm:grid-cols-3"
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
          <p style={{ fontSize: 14, color: "var(--muted)" }}>
            1400+ formulas for math, physics, chemistry, engineering, finance,
            health, and everyday life — free and easy to use.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4
            className="font-semibold text-gray-800 mb-2"
            style={{ fontWeight: 600, fontSize: 14, textTransform: "uppercase" }}
          >
            Categories
          </h4>
          <nav className="flex flex-col gap-1">
            <a href="/math" className="hover:underline">Math Formulas</a>
            <a href="/physics" className="hover:underline">Physics Formulas</a>
            <a href="/chemistry" className="hover:underline">Chemistry Formulas</a>
            <a href="/engineering" className="hover:underline">Engineering Formulas</a>
            <a href="/finance" className="hover:underline">Finance Formulas</a>
            <a href="/health" className="hover:underline">Health Formulas</a>
          </nav>
        </div>

        {/* Help */}
        <div>
          <h4
            className="font-semibold text-gray-800 mb-2"
            style={{ fontWeight: 600, fontSize: 14, textTransform: "uppercase" }}
          >
            Help
          </h4>
          <nav className="flex flex-col gap-1">
            <a href="/faq" className="hover:underline">
              FAQ — Useful formulas & calculators
            </a>
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/terms" className="hover:underline">Terms</a>
            <a href="/privacy" className="hover:underline">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
