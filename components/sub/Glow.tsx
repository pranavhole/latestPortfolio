"use client";
import { motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./glow.scss";

interface ExplodeTextProps {
  text: string;
  color?: string;
  loop?: boolean;
}
interface LetterOffset {
  x: number;
  y: number;
  rotate: number;
}

const ExplodeText: React.FC<ExplodeTextProps> = ({
  text,
  color = "#818cf8",
  loop = true,
}) => {
  const letters = text.split("");
  const [offsets, setOffsets] = useState<LetterOffset[]>([]);
  const [mounted, setMounted] = useState(false);

  // 🧩 generate random offsets only once on client
  useEffect(() => {
    const newOffsets = letters.map(() => ({
      x: Math.random() * 400 - 200,
      y: Math.random() * 200 - 100,
      rotate: Math.random() * 720 - 360,
    }));
    setOffsets(newOffsets);
    setMounted(true);
  }, [text]);

  if (!mounted) {
    // Render nothing on the server & first hydration pass
    return (
      <section className="flex items-center justify-center h-[80vh] w-full bg-transparent" />
    );
  }

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.07,
        repeat: loop ? Infinity : 0,
        repeatType: "reverse",
        repeatDelay: 1.2,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 },
    show: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <section className="flex items-center justify-center h-[80vh] w-full overflow-hidden bg-transparent">
      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center font-bold tracking-wide text-[clamp(3rem,10vw,7rem)]"
        style={{
          color,
          textShadow: `0 0 10px ${color}, 0 0 25px ${color}, 0 0 45px ${color}`,
          transition: "all 0.3s ease",
        }}
      >
        {letters.map((char, i) => {
          const offset = offsets[i];
          return (
            <motion.span
              key={i}
              variants={letterVariants}
              initial={{
                opacity: 0,
                scale: 0,
                x: offset.x,
                y: offset.y,
                rotate: offset.rotate,
              }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                delay: i * 0.07,
              }}
              style={{
                display: "inline-block",
                margin: "0 2px",
                textShadow: `0 0 10px ${color}, 0 0 25px ${color}, 0 0 45px ${color}`,
                transition: "all 0.3s ease",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </motion.h1>
    </section>
  );
};

export default ExplodeText;
