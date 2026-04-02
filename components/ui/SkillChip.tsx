"use client";
import { motion } from "framer-motion";
import { springSnappy } from "@/utils/spring";

export default function SkillChip({ label, hot }: { label: string; hot: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      viewport={{ once: true }}
      transition={springSnappy}
      style={{
        padding: "5px 14px",
        borderRadius: 2,
        fontSize: "0.7rem",
        letterSpacing: "1px",
        border: `1px solid ${hot ? "rgba(255,26,26,0.2)" : "#111"}`,
        color: hot ? "#666" : "#333",
        background: hot ? "rgba(255,26,26,0.03)" : "rgba(255,255,255,0.01)",
        cursor: "none",
        userSelect: "none",
        transition: "box-shadow 0.25s, border-color 0.25s, color 0.25s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 0 12px rgba(255,26,26,0.2)";
        el.style.borderColor = "rgba(255,26,26,0.5)";
        el.style.color = "#ff1a1a";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.borderColor = hot ? "rgba(255,26,26,0.2)" : "#111";
        el.style.color = hot ? "#666" : "#333";
      }}
    >
      {label}
    </motion.div>
  );
}
