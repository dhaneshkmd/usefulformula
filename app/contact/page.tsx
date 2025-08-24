// app/contact/page.tsx
import ContactForm from "./ContactForm";

export const metadata = { title: "Contact — UsefulFormula" };

export default function ContactPage() {
  return (
    <main className="container">
      <h1 className="hero-title" style={{ fontSize: 36, marginBottom: 8 }}>Contact</h1>
      <p className="subtle" style={{ marginBottom: 16 }}>
        Prefer email? Write to{" "}
        <a href="mailto:dhaneshkmd82@gmail.com" className="underline">
          dhaneshkmd82@gmail.com
        </a>.
      </p>
      <ContactForm />
    </main>
  );
}
