"use client";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useState } from "react";

function FloatingLetter({
  char,
  index,
  isHovered,
}: {
  char: string;
  index: number;
  isHovered: boolean;
}) {
  const phase = index * 0.4; // stagger per letter
  const y = useMotionValue(0);

  useAnimationFrame((t) => {
    if (isHovered) {
      // Wave: travels left to right
      const wave = Math.sin(t / 200 - index * 0.5) * 6;
      y.set(wave);
    } else {
      // Subtle idle float
      const idle = Math.sin(t / 1800 + phase) * 2;
      y.set(idle);
    }
  });

  return (
    <motion.span
      style={{
        display: "inline-block",
        y,
        color: "inherit",
        transition: "color 0.3s",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export default function AnimatedText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap", ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text.split("").map((char, i) => (
        <FloatingLetter
          key={i}
          char={char}
          index={i}
          isHovered={isHovered}
        />
      ))}
    </span>
  );
}
