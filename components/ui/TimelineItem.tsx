import { motion } from "framer-motion";

export default function TimelineItem({
  role,
  company,
  period,
  stack,
  active,
  index,
}: {
  role: string;
  company: string;
  period: string;
  stack: string;
  active: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ display: "flex", gap: "1rem", paddingBottom: "1.5rem", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          left: 5,
          top: 20,
          bottom: 0,
          width: 1,
          background: "rgba(255,26,26,0.12)",
        }}
      />
      <div
        style={{
          width: 11,
          height: 11,
          borderRadius: "50%",
          border: `1px solid ${active ? "#ff1a1a" : "#333"}`,
          background: "#000",
          flexShrink: 0,
          marginTop: 4,
          boxShadow: active ? "0 0 8px rgba(255,26,26,0.4)" : "none",
          zIndex: 1,
        }}
      />
      <div>
        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff", marginBottom: 2 }}>{role}</div>
        <div style={{ fontSize: "0.7rem", color: active ? "#ff1a1a" : "#555", letterSpacing: 1, marginBottom: 2 }}>{company}</div>
        <div style={{ fontSize: "0.6rem", color: "#333", letterSpacing: "2px", textTransform: "uppercase" }}>{period}</div>
        <div style={{ fontSize: "0.65rem", color: "#222", marginTop: 4, fontFamily: "monospace", lineHeight: 1.6 }}>{stack}</div>
      </div>
    </motion.div>
  );
}
