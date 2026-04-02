"use client";
import { useRef } from "react";

type Variant = "red" | "ghost";

export default function NeonButton({
  href,
  children,
  variant = "red",
  download,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  download?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base: React.CSSProperties = {
    display: "inline-block",
    padding: "11px 28px",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    borderRadius: 2,
    textDecoration: "none",
    transition: "all 0.3s",
    cursor: "none",
  };

  const redStyle: React.CSSProperties = {
    ...base,
    background: "rgba(255,26,26,0.1)",
    border: "1px solid #ff1a1a",
    color: "#ff1a1a",
    boxShadow: "0 0 16px rgba(255,26,26,0.15)",
  };

  const ghostStyle: React.CSSProperties = {
    ...base,
    background: "transparent",
    border: "1px solid #222",
    color: "#555",
  };

  return (
    <a
      ref={ref}
      href={href}
      download={download}
      target={download ? undefined : "_blank"}
      rel="noopener noreferrer"
      data-magnetic="true"
      style={variant === "red" ? redStyle : ghostStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        if (variant === "red") {
          el.style.background = "rgba(255,26,26,0.2)";
          el.style.color = "#fff";
          el.style.boxShadow = "0 0 28px rgba(255,26,26,0.4)";
        } else {
          el.style.borderColor = "rgba(255,26,26,0.4)";
          el.style.color = "#ff1a1a";
        }
      }}
    >
      {children}
    </a>
  );
}
