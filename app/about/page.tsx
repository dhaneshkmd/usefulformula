export const metadata = { title: "About — UsefulFormula" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 prose">
      <h1>About UsefulFormula</h1>
      <p><strong>UsefulFormula</strong> is a modern, searchable library of practical formulas across finance, health, education, business, engineering, lifestyle, and more.</p>
      <p>Goals:</p>
      <ul>
        <li>Be fast, accurate, and simple to use.</li>
        <li>Offer clear definitions and worked examples.</li>
        <li>Provide optional calculators for instant results.</li>
      </ul>
      <p>If you spot an error or want to suggest a formula, please reach us via the <a href="/contact">contact page</a>.</p>
    </main>
  );
}
