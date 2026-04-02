"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { springGentle } from "@/utils/spring";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const highlight = highlightRef.current;
    if (!card || !highlight) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // 0 → rect.width
    const y = e.clientY - rect.top;  // 0 → rect.height
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    // Tilt: max ±12 degrees
    const rotateY = ((x - cx) / cx) * 12;
    const rotateX = -((y - cy) / cy) * 12;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

    // Light: radial gradient follows cursor
    highlight.style.background = `radial-gradient(circle 160px at ${x}px ${y}px, rgba(255,26,26,0.12), transparent 70%)`;
    highlight.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const highlight = highlightRef.current;
    if (card) card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    if (highlight) highlight.style.opacity = "0";
  };

  const linkStyle: React.CSSProperties = {
    fontSize: "0.65rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#333",
    textDecoration: "none",
    border: "1px solid #111",
    padding: "4px 10px",
    borderRadius: 2,
    transition: "color 0.2s, border-color 0.2s",
    cursor: "none",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ...springGentle, delay: index * 0.12 }}
      viewport={{ once: true }}
      data-magnetic="true"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        border: "1px solid #111",
        borderRadius: 4,
        padding: "1.5rem",
        background: "rgba(255,255,255,0.01)",
        position: "relative",
        overflow: "hidden",
        cursor: "none",
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.15s ease-out",
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,26,26,0.35)";
        el.style.boxShadow = "0 20px 60px rgba(255,26,26,0.12), 0 4px 20px rgba(0,0,0,0.5)";
      }}
    >
      {/* Light simulation layer */}
      <div
        ref={highlightRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.2s",
          borderRadius: 4,
          zIndex: 0,
        }}
      />

      {/* Content — lifted above light layer */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.75rem" }}>
          <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>{name}</div>
          <div style={{ display: "flex", gap: "0.75rem", flexShrink: 0 }}>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
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
                style={linkStyle}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#ff1a1a"; el.style.borderColor = "rgba(255,26,26,0.4)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#333"; el.style.borderColor = "#111"; }}
              >
                Live ↗
              </a>
            )}
          </div>
        </div>

        <p style={{ color: "#333", fontSize: "0.8rem", lineHeight: 1.7, marginBottom: "1rem" }}>{description}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {stack.map((tech) => (
            <span
              key={tech}
              style={{ fontSize: "0.6rem", letterSpacing: "1px", padding: "3px 10px", borderRadius: 2, background: "rgba(255,26,26,0.05)", border: "1px solid rgba(255,26,26,0.12)", color: "#ff4444", fontFamily: "monospace" }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
