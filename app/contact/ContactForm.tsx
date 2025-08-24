"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent("");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    });
    const data = await res.json();
    setSent(data.ok ? "Thanks! We received your message." : (data.error || "Something went wrong."));
    if (data.ok) setState({ name: "", email: "", message: "" });
  }

  const field = {
    border: "1px solid var(--border)",
    borderRadius: 10,
    padding: "12px",
    fontSize: 16,
    background: "var(--panel)",
    color: "var(--fg)",
  } as const;

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "grid", gap: 12, maxWidth: 720 }}
      aria-label="Contact form"
    >
      <label style={{ display: "grid", gap: 6 }}>
        <span style={{ fontSize: 14, color: "var(--muted)" }}>Name</span>
        <input
          style={field}
          value={state.name}
          onChange={(e) => setState(s => ({ ...s, name: e.target.value }))}
          required
        />
      </label>

      <label style={{ display: "grid", gap: 6 }}>
        <span style={{ fontSize: 14, color: "var(--muted)" }}>Email</span>
        <input
          type="email"
          style={field}
          value={state.email}
          onChange={(e) => setState(s => ({ ...s, email: e.target.value }))}
          required
        />
      </label>

      <label style={{ display: "grid", gap: 6 }}>
        <span style={{ fontSize: 14, color: "var(--muted)" }}>Message</span>
        <textarea
          rows={6}
          style={{ ...field, resize: "vertical" }}
          value={state.message}
          onChange={(e) => setState(s => ({ ...s, message: e.target.value }))}
          required
        />
      </label>

      <button
        type="submit"
        style={{
          background: "#3b82f6",
          color: "#fff",
          border: "none",
          borderRadius: 10,
          padding: "10px 16px",
          width: "fit-content",
          cursor: "pointer",
        }}
      >
        Send
      </button>

      {sent && <p style={{ fontSize: 14 }}>{sent}</p>}
    </form>
  );
}
