export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-gray-200 mt-16"
      style={{ borderTop: "1px solid var(--border)", marginTop: 32 }}
    >
      <div
        className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600 grid gap-3 sm:flex sm:gap-6"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "24px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16, // fallback spacing
        }}
      >
        <div
          className="font-semibold text-gray-800"
          style={{ fontWeight: 600, color: "var(--fg)" }}
        >
          © {year} UsefulFormula
        </div>

        <nav
          aria-label="Footer"
          style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
        >
          <a href="/about" className="hover:underline">About</a>
          <a href="/faq" className="hover:underline">FAQ</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
