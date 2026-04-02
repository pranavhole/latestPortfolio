"use client";
import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

const TRAIL_COUNT = 12;
const BASE_LERP = 0.08;
const LERP_STEP = 0.015;
const MAGNETIC_RADIUS = 100;
const MAGNETIC_PULL = 0.25;

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Positions for dot and each trail ghost
  const positions = useRef<{ x: number; y: number }[]>(
    Array.from({ length: TRAIL_COUNT + 1 }, () => ({ x: 0, y: 0 }))
  );

  const mouse = useMousePosition();
  const mouseRef = useRef(mouse);
  mouseRef.current = mouse;

  useEffect(() => {
    let raf: number;

    const loop = () => {
      const m = mouseRef.current;

      // Index 0 = dot (snaps instantly to mouse)
      positions.current[0] = { x: m.x, y: m.y };

      // Each subsequent ghost lerps toward the previous
      for (let i = 1; i <= TRAIL_COUNT; i++) {
        const lerp = BASE_LERP + i * LERP_STEP;
        const prev = positions.current[i - 1];
        const cur = positions.current[i];
        positions.current[i] = {
          x: cur.x + (prev.x - cur.x) * lerp,
          y: cur.y + (prev.y - cur.y) * lerp,
        };
      }

      // Apply dot position
      if (dotRef.current) {
        dotRef.current.style.left = `${positions.current[0].x}px`;
        dotRef.current.style.top = `${positions.current[0].y}px`;
      }

      // Apply ring position (lags at TRAIL_COUNT/2)
      const ringPos = positions.current[Math.floor(TRAIL_COUNT / 2)];
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.x}px`;
        ringRef.current.style.top = `${ringPos.y}px`;

        // Velocity blur on ring
        const blur = Math.min(m.speed * 2, 6);
        ringRef.current.style.filter = blur > 1 ? `blur(${blur}px)` : "none";
      }

      // Apply trail ghost positions
      trailRefs.current.forEach((el, i) => {
        if (!el) return;
        const pos = positions.current[i + 1];
        el.style.left = `${pos.x}px`;
        el.style.top = `${pos.y}px`;
        // Fade out toward tail
        const progress = (i + 1) / TRAIL_COUNT;
        el.style.opacity = String((1 - progress) * 0.35);
        const size = Math.max(2, 10 * (1 - progress * 0.7));
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
      });

      // Magnetic field: find nearby [data-magnetic] elements and attract them
      const magnetics = document.querySelectorAll<HTMLElement>("[data-magnetic]");
      magnetics.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = m.x - cx;
        const dy = m.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAGNETIC_RADIUS) {
          const pull = (1 - dist / MAGNETIC_RADIUS) * MAGNETIC_PULL;
          el.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
        } else {
          el.style.transform = "translate(0,0)";
        }
      });

      // Grid distortion: shift grid lines slightly toward cursor
      const gridEl = document.querySelector<HTMLElement>(".grid-overlay");
      if (gridEl) {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const offsetX = (m.x - cx) * 0.008;
        const offsetY = (m.y - cy) * 0.008;
        gridEl.style.setProperty("--grid-offset-x", `${offsetX}px`);
        gridEl.style.setProperty("--grid-offset-y", `${offsetY}px`);
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      // Reset all magnetic elements on unmount
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        el.style.transform = "translate(0,0)";
      });
    };
  }, []);

  return (
    <>
      {/* Main dot — snaps instantly */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: 10,
          height: 10,
          background: "#ff1a1a",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 12px #ff1a1a",
        }}
      />

      {/* Ring — lags behind dot */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: 32,
          height: 32,
          border: "1px solid rgba(255,26,26,0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
        }}
      />

      {/* Trail ghosts */}
      {Array.from({ length: TRAIL_COUNT }, (_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          style={{
            position: "fixed",
            width: 10,
            height: 10,
            background: "#ff1a1a",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 9997,
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 6px rgba(255,26,26,0.4)",
          }}
        />
      ))}
    </>
  );
}
