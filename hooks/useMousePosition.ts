"use client";
import { useEffect, useRef, useState } from "react";

export interface MouseState {
  x: number;
  y: number;
  vx: number;   // pixels per ms, x
  vy: number;   // pixels per ms, y
  speed: number; // magnitude of velocity
}

const INITIAL: MouseState = { x: 0, y: 0, vx: 0, vy: 0, speed: 0 };

export function useMousePosition(): MouseState {
  const [state, setState] = useState<MouseState>(INITIAL);
  const prev = useRef<{ x: number; y: number; t: number }>({ x: 0, y: 0, t: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const dt = now - prev.current.t || 1;
      const vx = (e.clientX - prev.current.x) / dt;
      const vy = (e.clientY - prev.current.y) / dt;
      const speed = Math.sqrt(vx * vx + vy * vy);
      prev.current = { x: e.clientX, y: e.clientY, t: now };
      setState({ x: e.clientX, y: e.clientY, vx, vy, speed });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return state;
}
