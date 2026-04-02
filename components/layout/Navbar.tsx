"use client";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.25rem 2.5rem",
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,26,26,0.08)",
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <span style={{ fontSize: "1.1rem", fontWeight: 900, letterSpacing: "-0.5px", color: "#fff" }}>
          PH<span style={{ color: "#ff1a1a" }}>.</span>
        </span>
      </Link>

      <div style={{ display: "flex", gap: "2rem" }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{ color: "#555", fontSize: "0.75rem", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ff1a1a")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#555")}
          >
            {l.label}
          </a>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.65rem", letterSpacing: "2px", color: "#444", textTransform: "uppercase" }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff1a1a", boxShadow: "0 0 8px #ff1a1a", display: "inline-block", animation: "pulse-dot 2s ease-in-out infinite" }} />
        Available for work
        <style>{`@keyframes pulse-dot { 0%,100% { box-shadow: 0 0 4px #ff1a1a; } 50% { box-shadow: 0 0 14px #ff1a1a, 0 0 24px rgba(255,26,26,0.3); } }`}</style>
      </div>
    </nav>
  );
}
