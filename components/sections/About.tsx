"use client";
import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants";
import ChapterTag from "@/components/ui/ChapterTag";
import TimelineItem from "@/components/ui/TimelineItem";

const bioLines = [
  <>
    Full-Stack Engineer at{" "}
    <strong style={{ color: "#888" }}>Vendorbay</strong>, building B2B
    Procure-to-Pay SaaS. Previously Backend Developer at{" "}
    <strong style={{ color: "#888" }}>TCS</strong> where I led a full-stack
    migration from legacy VB.NET to modern Node.js/React.
  </>,
  <>
    Graduate of{" "}
    <strong style={{ color: "#888" }}>
      Government College of Engineering Amravati
    </strong>{" "}
    (2020–2024). Co-Lead GDSC GCOEA, Convener of{" "}
    <strong style={{ color: "#888" }}>Prajwalan 2023</strong> with 10,000+
    attendees.
  </>,
  <>
    Freelanced end-to-end on{" "}
    <strong style={{ color: "#888" }}>5+ SaaS products</strong>. Built{" "}
    <strong style={{ color: "#888" }}>5+ DApps</strong> on Polygon with
    Solidity. Deep in AI agents, RAG pipelines, and LLM tooling.
  </>,
];

export default function About() {
  return (
    <section id="about" className="chapter">
      <div className="chapter-inner">
        <ChapterTag number="02" label="The Origin Story" />

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
          Where I&apos;ve{" "}
          <span style={{ color: "#ff1a1a" }}>Shipped</span>
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          <div>
            {bioLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                style={{
                  color: "#444",
                  fontSize: "0.9rem",
                  lineHeight: 1.9,
                  marginBottom: "1rem",
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <div>
            {EXPERIENCE.map((exp, i) => (
              <TimelineItem
                key={exp.company}
                role={exp.role}
                company={exp.company}
                period={exp.period}
                stack={exp.stack}
                active={exp.active}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
