"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div
        style={{
          fontSize: "2.2rem",
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1,
          textShadow: "0 0 20px rgba(255,26,26,0.4)",
        }}
      >
        {count}
        <sup style={{ color: "#ff1a1a", fontSize: "1rem" }}>{suffix}</sup>
      </div>
      <div
        style={{
          fontSize: "0.6rem",
          letterSpacing: "3px",
          color: "#333",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}
