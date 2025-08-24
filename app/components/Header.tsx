"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  const wrap: React.CSSProperties = {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    flexWrap: "wrap",
  };

  const linkBase: React.CSSProperties = {
    color: "rgba(255,255,255,.92)",
    textDecoration: "none",
    fontWeight: 600,
    padding: "8px 12px",
    borderRadius: 999,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background:
          "linear-gradient(90deg,#4338CA 0%, #3B82F6 45%, #06B6D4 100%)",
        color: "#fff",
        borderBottom: "1px solid rgba(255,255,255,.12)",
        boxShadow: "0 6px 18px rgba(2,8,23,.18)",
        backdropFilter: "saturate(140%) blur(6px)",
      }}
    >
      <div style={wrap}>
        {/* Brand + subtitle (clicking brand always goes home) */}
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <Link
            href="/"
            aria-label="UsefulFormula — Home"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 900,
              fontSize: 22,
              letterSpacing: "-0.02em",
            }}
          >
            Useful<span style={{ opacity: 0.9 }}>Formula</span>
          </Link>
          <span
            style={{
              color: "rgba(255,255,255,.88)",
              fontSize: 12.5,
              fontWeight: 600,
              letterSpacing: ".2px",
              marginTop: 4,
            }}
          >
            1400+ Useful Formulas for Everyday Life
          </span>
        </div>

        {/* Nav */}
        <nav aria-label="Main navigation" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {NAV.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  ...linkBase,
                  background: active ? "rgba(255,255,255,.18)" : "transparent",
                  boxShadow: active ? "inset 0 0 0 1px rgba(255,255,255,.35)" : "none",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
