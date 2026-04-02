"use client";
import { motion } from "framer-motion";
import { spring, springDelayed } from "@/utils/spring";
import { PERSONAL } from "@/constants";
import ChapterTag from "@/components/ui/ChapterTag";

const contacts = [
  { icon: "@", label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  { icon: "GH", label: "GitHub", value: "github.com/pranavhole · 53 repos", href: PERSONAL.github },
  { icon: "in", label: "LinkedIn", value: "linkedin.com/in/pranav-hole", href: PERSONAL.linkedin },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="chapter"
      style={{ borderBottom: "none", paddingBottom: "8rem" }}
    >
      <div className="chapter-inner">
        <ChapterTag number="05" label="The Signal" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={spring}
          viewport={{ once: true }}
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            letterSpacing: "-2px",
            marginBottom: "2.5rem",
          }}
        >
          Let&apos;s <span style={{ color: "#ff1a1a" }}>Build</span> Something
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ color: "#444", fontSize: "0.9rem", lineHeight: 1.9 }}
          >
            I&apos;m currently at{" "}
            <span style={{ color: "#ff1a1a" }}>Vendorbay</span> but open to
            exciting freelance work, startup collaborations, and interesting
            problems.
            <br />
            <br />
            Whether it&apos;s a SaaS idea, an AI product, a Web3 project —
            reach out.
          </motion.p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={springDelayed(i * 0.1)}
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.75rem 1rem",
                  border: "1px solid #111",
                  borderRadius: 2,
                  textDecoration: "none",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                  cursor: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,26,26,0.4)";
                  el.style.boxShadow = "0 0 16px rgba(255,26,26,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#111";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    border: "1px solid rgba(255,26,26,0.2)",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ff1a1a",
                    fontSize: "0.7rem",
                    fontWeight: 900,
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.65rem", letterSpacing: "2px", textTransform: "uppercase", color: "#333" }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#555", marginTop: 1 }}>{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
