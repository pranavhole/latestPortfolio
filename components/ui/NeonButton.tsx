"use client";
import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

type Variant = "red" | "ghost";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

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
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const scaleSpring = useSpring(1, { stiffness: 400, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
    scaleSpring.set(1);
  };

  const handleMouseEnter = () => {
    scaleSpring.set(1.04);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((r) => [...r, { id, x, y }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
    scaleSpring.set(0.94);
    setTimeout(() => scaleSpring.set(1.04), 100);
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
    cursor: "none",
    position: "relative",
    overflow: "hidden",
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
    <motion.a
      ref={ref}
      href={href}
      download={download}
      target={download ? undefined : "_blank"}
      rel="noopener noreferrer"
      style={{
        ...(variant === "red" ? redStyle : ghostStyle),
        scale: scaleSpring,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      data-magnetic="true"
    >
      {children}

      {/* Ripple effects */}
      {ripples.map((rp) => (
        <span
          key={rp.id}
          style={{
            position: "absolute",
            left: rp.x,
            top: rp.y,
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: variant === "red" ? "rgba(255,255,255,0.5)" : "rgba(255,26,26,0.4)",
            transform: "translate(-50%, -50%) scale(0)",
            animation: "ripple-expand 0.6s ease-out forwards",
            pointerEvents: "none",
          }}
        />
      ))}

      <style>{`
        @keyframes ripple-expand {
          to { transform: translate(-50%, -50%) scale(40); opacity: 0; }
        }
      `}</style>
    </motion.a>
  );
}
