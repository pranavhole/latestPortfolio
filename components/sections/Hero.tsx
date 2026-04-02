"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PERSONAL, ROLES, STATS } from "@/constants";
import ChapterTag from "@/components/ui/ChapterTag";
import NeonButton from "@/components/ui/NeonButton";
import StatItem from "@/components/ui/StatItem";
import { useMousePosition } from "@/hooks/useMousePosition";

function Particles({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 200;

  // Store both current and original positions
  const originalPositions = useRef(
    Float32Array.from({ length: count * 3 }, (_, i) => {
      const axis = i % 3;
      if (axis === 0) return (Math.random() - 0.5) * 20;
      if (axis === 1) return (Math.random() - 0.5) * 20;
      return (Math.random() - 0.5) * 10 - 5;
    })
  );

  const currentPositions = useRef(new Float32Array(originalPositions.current));

  useFrame(({ clock, viewport }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;

    // Convert screen mouse to normalized device coords → world units
    const mx = (mouseX / window.innerWidth) * 2 - 1;
    const my = -((mouseY / window.innerHeight) * 2 - 1);
    const worldX = mx * (viewport.width / 2);
    const worldY = my * (viewport.height / 2);

    const pos = currentPositions.current;
    const orig = originalPositions.current;
    const REPEL_RADIUS = 2.5;
    const REPEL_STRENGTH = 0.08;
    const RETURN_SPEED = 0.05;

    for (let i = 0; i < count; i++) {
      const xi = i * 3;
      const dx = pos[xi] - worldX;
      const dy = pos[xi + 1] - worldY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < REPEL_RADIUS) {
        const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
        pos[xi] += (dx / dist) * force;
        pos[xi + 1] += (dy / dist) * force;
      }

      // Spring back to original position
      pos[xi] += (orig[xi] - pos[xi]) * RETURN_SPEED;
      pos[xi + 1] += (orig[xi + 1] - pos[xi + 1]) * RETURN_SPEED;
    }

    // Tell Three.js the buffer changed
    const geo = pointsRef.current.geometry;
    (geo.attributes.position as THREE.BufferAttribute).array = pos;
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[currentPositions.current, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ff1a1a"
        size={0.04}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const mouse = useMousePosition();

  useEffect(() => {
    const id = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setRoleVisible(true);
      }, 350);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        overflow: "hidden",
      }}
    >
      {/* Three.js particle background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Particles mouseX={mouse.x} mouseY={mouse.y} />
        </Canvas>
      </div>

      {/* Red ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(ellipse 50% 40% at 20% 50%, rgba(255,26,26,0.08) 0%, transparent 70%), " +
            "radial-gradient(ellipse 40% 50% at 80% 40%, rgba(200,0,0,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: 640 }}>
        <motion.div {...fadeUp(0.1)}>
          <ChapterTag number="01" label="The Arrival" />
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontSize: "clamp(3rem, 9vw, 6.5rem)",
            fontWeight: 900,
            letterSpacing: "-4px",
            lineHeight: 1,
            marginBottom: "0.75rem",
            position: "relative",
          }}
        >
          Pranav{" "}
          <span
            style={{
              color: "#ff1a1a",
              textShadow: "0 0 30px rgba(255,26,26,0.5)",
            }}
          >
            Hole
          </span>
        </motion.h1>

        {/* Role morphing */}
        <motion.div {...fadeUp(0.35)} style={{ marginBottom: "1.25rem" }}>
          <span
            style={{
              fontSize: "0.85rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#444",
            }}
          >
            Full Stack{" "}
          </span>
          <span
            style={{
              fontSize: "0.85rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#ff1a1a",
              opacity: roleVisible ? 1 : 0,
              transform: roleVisible ? "translateY(0)" : "translateY(-6px)",
              display: "inline-block",
              transition: "opacity 0.35s, transform 0.35s",
              textShadow: "0 0 10px rgba(255,26,26,0.5)",
            }}
          >
            {ROLES[roleIndex]}
          </span>
          <span
            style={{
              fontSize: "0.85rem",
              color: "#ff1a1a",
              animation: "blink-cursor 1s step-end infinite",
            }}
          >
            _
          </span>
        </motion.div>

        <motion.p
          {...fadeUp(0.5)}
          style={{
            color: "#333",
            fontSize: "0.9rem",
            lineHeight: 1.9,
            marginBottom: "2rem",
          }}
        >
          Building <span style={{ color: "#666" }}>fast, scalable</span>, and{" "}
          <span style={{ color: "#666" }}>intelligent</span> digital products.
          <br />
          {PERSONAL.location} — Open to Remote.
        </motion.p>

        <motion.div
          {...fadeUp(0.65)}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}
        >
          <NeonButton href="#projects" variant="red">
            View Projects
          </NeonButton>
          <NeonButton href="/resume.pdf" variant="ghost" download>
            Download Resume
          </NeonButton>
          <NeonButton href="#contact" variant="ghost">
            Contact Me
          </NeonButton>
        </motion.div>

        <motion.div
          {...fadeUp(0.8)}
          style={{ display: "flex", gap: "3rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          {STATS.map((s) => (
            <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: "0.6rem", letterSpacing: "4px", color: "#222", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, #ff1a1a, transparent)",
            boxShadow: "0 0 6px rgba(255,26,26,0.4)",
            animation: "scroll-bar 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes blink-cursor { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scroll-bar { 0%,100%{opacity:0.3;transform:scaleY(0.8)} 50%{opacity:1;transform:scaleY(1)} }
      `}</style>
    </section>
  );
}
