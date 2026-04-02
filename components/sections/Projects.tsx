"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import ChapterTag from "@/components/ui/ChapterTag";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="chapter">
      <div className="chapter-inner">
        <ChapterTag number="04" label="The Battles" />

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
          Things I&apos;ve <span style={{ color: "#ff1a1a" }}>Built</span>
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.name}
              name={p.name}
              description={p.description}
              stack={p.stack}
              github={p.github}
              live={p.live}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
