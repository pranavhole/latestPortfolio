"use client";
import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/constants";
import ChapterTag from "@/components/ui/ChapterTag";
import SkillChip from "@/components/ui/SkillChip";

export default function Skills() {
  return (
    <section id="skills" className="chapter">
      <div className="chapter-inner">
        <ChapterTag number="03" label="The Arsenal" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            letterSpacing: "-2px",
            marginBottom: "2.5rem",
          }}
        >
          Technologies I <span style={{ color: "#ff1a1a" }}>Wield</span>
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {SKILL_GROUPS.map((group, gi) => (
            <div key={group.label}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: gi * 0.05 }}
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: "0.6rem",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "#ff1a1a",
                  marginBottom: "0.75rem",
                }}
              >
                {group.label}
                <div style={{ flex: 1, height: 1, background: "rgba(255,26,26,0.1)" }} />
              </motion.div>

              <motion.div
                style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.skills.map((skill) => (
                  <SkillChip
                    key={skill}
                    label={skill}
                    hot={group.hot.includes(skill)}
                  />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
