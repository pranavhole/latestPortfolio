"use client";
import { motion } from "framer-motion";

export default function ProjectCard({
  name,
  description,
  stack,
  github,
  live,
  index,
}: {
  name: string;
  description: string;
  stack: string[];
  github: string;
  live: string | null;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        border: "1px solid #111",
        borderRadius: 4,
        padding: "1.5rem",
        background: "rgba(255,255,255,0.01)",
        transition: "border-color 0.3s, box-shadow 0.3s",
        position: "relative",
        overflow: "hidden",
        cursor: "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,26,26,0.35)";
        el.style.boxShadow = "0 0 30px rgba(255,26,26,0.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#111";
        el.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1rem",
          marginBottom: "0.75rem",
        }}
      >
        <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>
          {name}
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexShrink: 0 }}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.65rem", letterSpacing: "2px", textTransform: "uppercase", color: "#333", textDecoration: "none", border: "1px solid #111", padding: "4px 10px", borderRadius: 2, transition: "color 0.2s, border-color 0.2s", cursor: "none" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#ff1a1a"; el.style.borderColor = "rgba(255,26,26,0.4)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#333"; el.style.borderColor = "#111"; }}
          >
            GitHub
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.65rem", letterSpacing: "2px", textTransform: "uppercase", color: "#333", textDecoration: "none", border: "1px solid #111", padding: "4px 10px", borderRadius: 2, transition: "color 0.2s, border-color 0.2s", cursor: "none" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#ff1a1a"; el.style.borderColor = "rgba(255,26,26,0.4)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#333"; el.style.borderColor = "#111"; }}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <p style={{ color: "#333", fontSize: "0.8rem", lineHeight: 1.7, marginBottom: "1rem" }}>
        {description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: "0.6rem",
              letterSpacing: "1px",
              padding: "3px 10px",
              borderRadius: 2,
              background: "rgba(255,26,26,0.05)",
              border: "1px solid rgba(255,26,26,0.12)",
              color: "#ff4444",
              fontFamily: "monospace",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
