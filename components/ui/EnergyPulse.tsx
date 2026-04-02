"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function EnergyPulse() {
  const controls = useAnimationControls();
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    const runPulse = async () => {
      while (mounted.current) {
        // Wait 8s between pulses
        await new Promise((r) => setTimeout(r, 8000));
        if (!mounted.current) break;

        // Animate: line sweeps top → bottom then fades
        await controls.start({
          top: ["0vh", "100vh"],
          opacity: [0, 1, 1, 0],
          transition: { duration: 1.8, ease: "easeInOut", times: [0, 0.1, 0.85, 1] },
        });

        await controls.set({ top: "0vh", opacity: 0 });
      }
    };

    runPulse();
    return () => { mounted.current = false; };
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      initial={{ top: "0vh", opacity: 0 }}
      style={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        width: "2px",
        height: "80px",
        background: "linear-gradient(to bottom, transparent, #ff1a1a, rgba(255,26,26,0.3), transparent)",
        boxShadow: "0 0 12px #ff1a1a, 0 0 30px rgba(255,26,26,0.4)",
        zIndex: 20,
        pointerEvents: "none",
        borderRadius: "1px",
      }}
    />
  );
}
