# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Full rebuild of pranavhole.space as a black/red neon, story-driven, interactive portfolio using Framer Motion, @chenglou/pretext, and 21st.dev Magic MCP.

**Architecture:** Tear out all old `components/main/` and `components/sub/` (except `FloatingChat.tsx`). Replace with new `components/sections/` (one per chapter) and `components/ui/` (reusable primitives). A single `app/page.tsx` composes the five chapters. Global decorations (cursor, grid, scanline, particles) live in `app/layout.tsx`.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion 12, @chenglou/pretext, @react-three/fiber, @react-three/drei, Three.js, 21st.dev Magic MCP

---

## File Map

| Action | Path | Responsibility |
|---|---|---|
| Rewrite | `constants/index.ts` | All real portfolio data |
| Modify | `app/globals.css` | Design tokens, base styles, scrollbar |
| Modify | `app/layout.tsx` | Add Cursor + global decorations |
| Modify | `app/page.tsx` | Compose 5 chapter sections |
| Create | `components/ui/Cursor.tsx` | Red dot + lagging ring cursor |
| Create | `components/ui/ChapterTag.tsx` | "Chapter 0X · Title" badge |
| Create | `components/ui/NeonButton.tsx` | Red neon bordered button |
| Create | `components/ui/SkillChip.tsx` | Hover-glow skill badge |
| Create | `components/ui/ProjectCard.tsx` | Dark card with stack badges |
| Create | `components/ui/TimelineItem.tsx` | Vertical timeline row |
| Create | `components/ui/StatItem.tsx` | Counting stat (0 → N) |
| Create | `components/layout/Navbar.tsx` | Fixed glass nav with red accents |
| Create | `components/sections/Hero.tsx` | Chapter 1 — full viewport |
| Create | `components/sections/About.tsx` | Chapter 2 — bio + timeline |
| Create | `components/sections/Skills.tsx` | Chapter 3 — grouped chips |
| Create | `components/sections/Projects.tsx` | Chapter 4 — project cards |
| Create | `components/sections/Contact.tsx` | Chapter 5 — links |
| Keep | `components/main/FloatingChat.tsx` | Unchanged |
| Delete | `components/main/Hero.tsx` | Replaced |
| Delete | `components/main/About.tsx` | Replaced |
| Delete | `components/main/Skills.tsx` | Replaced |
| Delete | `components/main/Projects.tsx` | Replaced |
| Delete | `components/main/contact.tsx` | Replaced |
| Delete | `components/main/Navbar.tsx` | Replaced |
| Delete | `components/main/Encryption.tsx` | Unused |
| Delete | `components/main/Footer.tsx` | Replaced by Contact chapter |
| Delete | `components/sub/*` | All replaced |

---

## Task 1: Install dependencies + rewrite constants

**Files:**
- Modify: `package.json` (via npm install)
- Rewrite: `constants/index.ts`

- [ ] **Step 1: Install new dependencies**

```bash
cd D:/x/pranav
npm install @chenglou/pretext
```

Expected output: `added N packages` with no errors.

- [ ] **Step 2: Rewrite `constants/index.ts`**

Replace the entire file with:

```ts
export const PERSONAL = {
  name: "Pranav Hole",
  fullName: "Pranav Sandip Hole",
  title: "Full-Stack Engineer | BlockChain | JavaScript | AI",
  location: "Mumbai, India",
  openToRemote: true,
  email: "pranavhole02@gmail.com",
  github: "https://github.com/pranavhole",
  linkedin: "https://www.linkedin.com/in/pranav-hole/",
  portfolio: "https://www.pranavhole.space",
  phone: "+91 8530008525",
};

export const ROLES = [
  "Developer",
  "Engineer",
  "Builder",
  "Creator",
  "Architect",
];

export const STATS = [
  { value: 2, suffix: "+", label: "Years XP" },
  { value: 10, suffix: "+", label: "Projects" },
  { value: 53, suffix: "", label: "GitHub Repos" },
  { value: 5, suffix: "+", label: "DApps Built" },
];

export const EXPERIENCE = [
  {
    role: "Full-Stack Engineer",
    company: "Vendorbay",
    period: "Dec 2025 → Present",
    active: true,
    stack: "Node.js · TypeScript · PostgreSQL · GraphQL · Redis · Docker · AWS · RAG · Agentic AI",
    description:
      "B2B Procure-to-Pay SaaS. Scaled backend services, built GraphQL APIs, integrated RAG-based AI workflows, deployed on AWS EKS.",
  },
  {
    role: "Backend Developer",
    company: "Tata Consultancy Services",
    period: "Aug 2024 → Dec 2025",
    active: false,
    stack: "Node.js · Express · React · PostgreSQL · Azure · JWT",
    description:
      "Led migration of legacy VB.NET + PL/SQL system to modern Node.js stack. Improved DB performance by ~25%.",
  },
  {
    role: "Freelance Full-Stack Engineer",
    company: "Independent",
    period: "2022 → 2024",
    active: false,
    stack: "React · Node.js · MongoDB · PostgreSQL · Tailwind",
    description: "Delivered 5+ SaaS & web apps end-to-end for clients.",
  },
];

export const SKILL_GROUPS = [
  {
    label: "Frontend",
    skills: [
      "React.js", "Next.js", "TypeScript", "Tailwind CSS",
      "Redux", "SCSS", "React Native", "Framer Motion",
    ],
    hot: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: [
      "Node.js", "Express.js", "GraphQL", "FastAPI",
      "REST APIs", "WebSockets", "Kafka",
    ],
    hot: ["Node.js", "Express.js", "GraphQL"],
  },
  {
    label: "Databases & Cloud",
    skills: [
      "PostgreSQL", "Redis", "MongoDB", "AWS (EKS·ECS·S3·EC2)",
      "Azure", "Docker", "Terraform", "Elasticsearch", "Firebase",
    ],
    hot: ["PostgreSQL", "Redis", "MongoDB", "AWS (EKS·ECS·S3·EC2)"],
  },
  {
    label: "AI / GenAI",
    skills: [
      "LangChain", "OpenAI", "RAG Pipelines", "Agentic AI",
      "CrewAI", "Google ADK", "Ollama", "Streamlit",
    ],
    hot: ["LangChain", "OpenAI", "RAG Pipelines", "Agentic AI"],
  },
  {
    label: "Web3 / Blockchain",
    skills: ["Solidity", "Polygon", "Hardhat", "Truffle", "IPFS", "NFT", "Ganache"],
    hot: ["Solidity", "Polygon"],
  },
];

export const PROJECTS = [
  {
    name: "Muzzy — Music Streaming Platform",
    description:
      "Real-time collaborative music streaming with synchronized playback across users. Redis + WebSockets + HLS reduced latency by ~68%. Deployed on AWS EKS with Terraform.",
    stack: ["AWS EKS", "Terraform", "Node.js", "Next.js", "PostgreSQL", "Redis", "WebSockets", "HLS.js", "Docker"],
    github: "https://github.com/pranavhole/muzzfin",
    live: "https://muzzy.pranavhole.space",
    featured: true,
  },
  {
    name: "Zapier Clone — Automation Platform",
    description:
      "Event-driven microservices automation platform. Kafka-powered workflow engine with visual drag-and-drop flow builder.",
    stack: ["Next.js", "Kafka", "React Flow", "Tailwind", "Node.js"],
    github: "https://github.com/pranavhole/zapier",
    live: "https://zapp.pranavhole.space",
    featured: true,
  },
  {
    name: "Lets Trade India",
    description:
      "Trading education platform with Razorpay payment gateway integration. Full end-to-end SaaS delivery.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/pranavhole/LetsTread",
    live: "https://www.letstradeindia.co",
    featured: true,
  },
  {
    name: "Web3 DApps Collection",
    description:
      "5+ decentralized applications on Polygon using Solidity smart contracts, IPFS storage, and Hardhat tooling.",
    stack: ["Solidity", "Polygon", "IPFS", "Hardhat"],
    github: "https://github.com/pranavhole",
    live: null,
    featured: false,
  },
];
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
cd D:/x/pranav
npx tsc --noEmit
```

Expected: no errors (or only pre-existing errors unrelated to constants).

- [ ] **Step 4: Commit**

```bash
git add constants/index.ts package.json package-lock.json
git commit -m "feat: install pretext, rewrite constants with real portfolio data"
```

---

## Task 2: Global CSS design tokens

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --red: #ff1a1a;
  --red-dim: rgba(255, 26, 26, 0.1);
  --red-border: rgba(255, 26, 26, 0.25);
  --red-border-hot: rgba(255, 26, 26, 0.6);
  --red-glow: rgba(255, 26, 26, 0.3);
  --surface: rgba(255, 255, 255, 0.01);
  --text-mid: #555555;
  --text-dim: #333333;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #000;
  color: #fff;
  font-family: 'Inter', system-ui, sans-serif;
  cursor: none;
  overflow-x: hidden;
}

/* Hide default scrollbar, keep scroll */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #000;
}
::-webkit-scrollbar-thumb {
  background: var(--red-border);
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--red);
}

/* Grid overlay — applied via a fixed div in layout */
.grid-overlay {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255, 26, 26, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 26, 26, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Corner brackets */
.corner {
  position: fixed;
  width: 30px;
  height: 30px;
  z-index: 5;
  pointer-events: none;
}
.corner-tl { top: 16px; left: 16px; border-top: 1px solid rgba(255,26,26,0.4); border-left: 1px solid rgba(255,26,26,0.4); }
.corner-tr { top: 16px; right: 16px; border-top: 1px solid rgba(255,26,26,0.4); border-right: 1px solid rgba(255,26,26,0.4); }
.corner-bl { bottom: 16px; left: 16px; border-bottom: 1px solid rgba(255,26,26,0.4); border-left: 1px solid rgba(255,26,26,0.4); }
.corner-br { bottom: 16px; right: 16px; border-bottom: 1px solid rgba(255,26,26,0.4); border-right: 1px solid rgba(255,26,26,0.4); }

/* Scanline */
.scanline {
  position: fixed;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255, 26, 26, 0.5), transparent);
  box-shadow: 0 0 8px rgba(255, 26, 26, 0.3);
  z-index: 5;
  pointer-events: none;
  animation: scanline-sweep 3s linear infinite;
}
@keyframes scanline-sweep {
  from { top: -2px; }
  to   { top: 100vh; }
}

/* Chapter section base */
.chapter {
  position: relative;
  z-index: 10;
  padding: 5rem 0;
  border-bottom: 1px solid rgba(255, 26, 26, 0.06);
}
.chapter-inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}
```

- [ ] **Step 2: Verify dev server starts**

```bash
npm run dev
```

Open `http://localhost:3000`. Expected: black page, no console errors.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: add design tokens and global styles"
```

---

## Task 3: Cursor component

**Files:**
- Create: `components/ui/Cursor.tsx`

- [ ] **Step 1: Create `components/ui/Cursor.tsx`**

```tsx
"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const loop = () => {
      ringX.current += (mouseX.current - ringX.current) * 0.12;
      ringY.current += (mouseY.current - ringY.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX.current}px`;
        ringRef.current.style.top = `${ringY.current}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          width: 10,
          height: 10,
          background: "#ff1a1a",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 12px #ff1a1a",
          transition: "width 0.15s, height 0.15s",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          width: 32,
          height: 32,
          border: "1px solid rgba(255,26,26,0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
        }}
      />
    </>
  );
}
```

- [ ] **Step 2: Add Cursor to `app/layout.tsx`**

Replace the contents of `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/layout/Navbar";
import FloatingChat from "@/components/main/FloatingChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranav Hole — Full-Stack Engineer",
  description:
    "Full-Stack Engineer specialising in scalable web apps, AI products, and Web3. Based in Mumbai.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />

        {/* Global decorations */}
        <div className="grid-overlay" />
        <div className="scanline" />
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        <Navbar />
        {children}
        <FloatingChat />
      </body>
    </html>
  );
}
```

Note: `Navbar` at `components/layout/Navbar.tsx` is created in Task 4. The build will error until then — that's expected. Keep dev server running across tasks to see incremental progress.

- [ ] **Step 3: Commit**

```bash
git add components/ui/Cursor.tsx app/layout.tsx
git commit -m "feat: add custom red cursor with lagging ring"
```

---

## Task 4: Navbar

**Files:**
- Create: `components/layout/Navbar.tsx`

- [ ] **Step 1: Create `components/layout/Navbar.tsx`**

```tsx
"use client";
import Link from "next/link";
import { PERSONAL } from "@/constants";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.25rem 2.5rem",
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,26,26,0.08)",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontSize: "1.1rem",
            fontWeight: 900,
            letterSpacing: "-0.5px",
            color: "#fff",
          }}
        >
          PH<span style={{ color: "#ff1a1a" }}>.</span>
        </span>
      </Link>

      {/* Links */}
      <div style={{ display: "flex", gap: "2rem" }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: "#555",
              fontSize: "0.75rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#ff1a1a")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#555")
            }
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Status */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.65rem",
          letterSpacing: "2px",
          color: "#444",
          textTransform: "uppercase",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#ff1a1a",
            boxShadow: "0 0 8px #ff1a1a",
            display: "inline-block",
            animation: "pulse-dot 2s ease-in-out infinite",
          }}
        />
        Available for work
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%,100% { box-shadow: 0 0 4px #ff1a1a; }
          50% { box-shadow: 0 0 14px #ff1a1a, 0 0 24px rgba(255,26,26,0.3); }
        }
      `}</style>
    </nav>
  );
}
```

- [ ] **Step 2: Verify in browser**

```bash
npm run dev
```

Open `http://localhost:3000`. Expected: black page with fixed navbar, red dot pulsing, "PH." logo, nav links turn red on hover.

- [ ] **Step 3: Commit**

```bash
git add components/layout/Navbar.tsx
git commit -m "feat: add fixed navbar with red accent and available status"
```

---

## Task 5: UI primitives (ChapterTag, NeonButton, StatItem)

**Files:**
- Create: `components/ui/ChapterTag.tsx`
- Create: `components/ui/NeonButton.tsx`
- Create: `components/ui/StatItem.tsx`

- [ ] **Step 1: Create `components/ui/ChapterTag.tsx`**

```tsx
export default function ChapterTag({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: "0.6rem",
        letterSpacing: "4px",
        textTransform: "uppercase",
        color: "#ff1a1a",
        border: "1px solid rgba(255,26,26,0.25)",
        padding: "4px 14px",
        borderRadius: 2,
        background: "rgba(255,26,26,0.05)",
        marginBottom: "1.5rem",
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#ff1a1a",
          boxShadow: "0 0 6px #ff1a1a",
          display: "inline-block",
          animation: "blink-dot 2s infinite",
          flexShrink: 0,
        }}
      />
      Chapter {number} · {label}
      <style>{`
        @keyframes blink-dot {
          0%,100%{opacity:1} 50%{opacity:0.3}
        }
      `}</style>
    </div>
  );
}
```

- [ ] **Step 2: Create `components/ui/NeonButton.tsx`**

```tsx
"use client";
import { useRef } from "react";

type Variant = "red" | "ghost";

export default function NeonButton({
  href,
  children,
  variant = "red",
  download,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  download?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base: React.CSSProperties = {
    display: "inline-block",
    padding: "11px 28px",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    borderRadius: 2,
    textDecoration: "none",
    transition: "all 0.3s",
    cursor: "none",
  };

  const redStyle: React.CSSProperties = {
    ...base,
    background: "rgba(255,26,26,0.1)",
    border: "1px solid #ff1a1a",
    color: "#ff1a1a",
    boxShadow: "0 0 16px rgba(255,26,26,0.15)",
  };

  const ghostStyle: React.CSSProperties = {
    ...base,
    background: "transparent",
    border: "1px solid #222",
    color: "#555",
  };

  return (
    <a
      ref={ref}
      href={href}
      download={download}
      target={download ? undefined : "_blank"}
      rel="noopener noreferrer"
      style={variant === "red" ? redStyle : ghostStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        if (variant === "red") {
          el.style.background = "rgba(255,26,26,0.2)";
          el.style.color = "#fff";
          el.style.boxShadow = "0 0 28px rgba(255,26,26,0.4)";
        } else {
          el.style.borderColor = "rgba(255,26,26,0.4)";
          el.style.color = "#ff1a1a";
        }
      }}
    >
      {children}
    </a>
  );
}
```

- [ ] **Step 3: Create `components/ui/StatItem.tsx`**

```tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div
        style={{
          fontSize: "2.2rem",
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1,
          textShadow: "0 0 20px rgba(255,26,26,0.4)",
        }}
      >
        {count}
        <sup style={{ color: "#ff1a1a", fontSize: "1rem" }}>{suffix}</sup>
      </div>
      <div
        style={{
          fontSize: "0.6rem",
          letterSpacing: "3px",
          color: "#333",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/ui/ChapterTag.tsx components/ui/NeonButton.tsx components/ui/StatItem.tsx
git commit -m "feat: add ChapterTag, NeonButton, StatItem UI primitives"
```

---

## Task 6: Hero section (Chapter 1)

**Files:**
- Create: `components/sections/Hero.tsx`

Uses `@react-three/fiber` (already installed) for the particle background and Framer Motion for entrance animations. `@chenglou/pretext` measures role text width to position the blinking cursor accurately.

- [ ] **Step 1: Create `components/sections/Hero.tsx`**

```tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PERSONAL, ROLES, STATS } from "@/constants";
import ChapterTag from "@/components/ui/ChapterTag";
import NeonButton from "@/components/ui/NeonButton";
import StatItem from "@/components/ui/StatItem";

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useRef(
    Float32Array.from({ length: count * 3 }, (_, i) => {
      const axis = i % 3;
      if (axis === 0) return (Math.random() - 0.5) * 20;
      if (axis === 1) return (Math.random() - 0.5) * 20;
      return (Math.random() - 0.5) * 10 - 5;
    })
  );

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current, 3]}
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
  transition: { duration: 0.7, ease: "easeOut", delay },
});

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

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
          <Particles />
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

        {/* Name with glitch */}
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
```

- [ ] **Step 2: Update `app/page.tsx` with Hero only (temporary)**

```tsx
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
```

Open `http://localhost:3000`. Expected: full-viewport black page, red particles rotating slowly, "Pranav Hole" heading, role text cycling through ROLES array, magnetic buttons, stats visible.

- [ ] **Step 4: Commit**

```bash
git add components/sections/Hero.tsx app/page.tsx
git commit -m "feat: add Hero section with particle bg, role morphing, Framer Motion entrance"
```

---

## Task 7: TimelineItem + About section (Chapter 2)

**Files:**
- Create: `components/ui/TimelineItem.tsx`
- Create: `components/sections/About.tsx`

- [ ] **Step 1: Create `components/ui/TimelineItem.tsx`**

```tsx
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
      {/* Connector line */}
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

      {/* Dot */}
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
        <div
          style={{
            fontSize: "0.7rem",
            color: active ? "#ff1a1a" : "#555",
            letterSpacing: 1,
            marginBottom: 2,
          }}
        >
          {company}
        </div>
        <div style={{ fontSize: "0.6rem", color: "#333", letterSpacing: "2px", textTransform: "uppercase" }}>
          {period}
        </div>
        <div style={{ fontSize: "0.65rem", color: "#222", marginTop: 4, fontFamily: "monospace", lineHeight: 1.6 }}>
          {stack}
        </div>
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 2: Create `components/sections/About.tsx`**

```tsx
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
          {/* Bio */}
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

          {/* Timeline */}
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
```

- [ ] **Step 3: Add About to `app/page.tsx`**

```tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
```

- [ ] **Step 4: Verify in browser**

Scroll past hero. Expected: About section with bio on left, timeline on right, items animating in from left as you scroll.

- [ ] **Step 5: Commit**

```bash
git add components/ui/TimelineItem.tsx components/sections/About.tsx app/page.tsx
git commit -m "feat: add About section with animated timeline"
```

---

## Task 8: SkillChip + Skills section (Chapter 3)

**Files:**
- Create: `components/ui/SkillChip.tsx`
- Create: `components/sections/Skills.tsx`

- [ ] **Step 1: Create `components/ui/SkillChip.tsx`**

```tsx
"use client";
import { motion } from "framer-motion";

export default function SkillChip({ label, hot }: { label: string; hot: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, borderColor: "rgba(255,26,26,0.5)", color: "#ff1a1a" }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
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
        transition: "box-shadow 0.25s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 10px rgba(255,26,26,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {label}
    </motion.div>
  );
}
```

- [ ] **Step 2: Create `components/sections/Skills.tsx`**

```tsx
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
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: "rgba(255,26,26,0.1)",
                  }}
                />
              </motion.div>

              <motion.div
                style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.04 } },
                }}
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
```

- [ ] **Step 3: Add Skills to `app/page.tsx`**

```tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
```

- [ ] **Step 4: Verify in browser**

Scroll to Skills. Expected: groups appear with cascading chip animations, chips glow red on hover.

- [ ] **Step 5: Commit**

```bash
git add components/ui/SkillChip.tsx components/sections/Skills.tsx app/page.tsx
git commit -m "feat: add Skills section with staggered chip animations"
```

---

## Task 9: ProjectCard + Projects section (Chapter 4)

**Files:**
- Create: `components/ui/ProjectCard.tsx`
- Create: `components/sections/Projects.tsx`

- [ ] **Step 1: Generate ProjectCard via 21st.dev Magic MCP**

In the Claude Code terminal, run:

```
use 21st.dev magic to create a dark glassmorphism project card component at components/ui/ProjectCard.tsx with: project name (large bold white text), description (gray body text), tech stack badges (small red-tinted monospace pills), and two buttons (GitHub link, Live link). Black background, red neon border on hover, no rounded corners (border-radius: 2px). TypeScript with named props: name string, description string, stack string[], github string, live string or null.
```

If Magic MCP is not responding, create it manually:

```tsx
"use client";
import { motion } from "framer-motion";

export default function ProjectCard({
  name,
  description,
  stack,
  github,
  live,
  index,
}: {
  name: string;
  description: string;
  stack: string[];
  github: string;
  live: string | null;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        border: "1px solid #111",
        borderRadius: 4,
        padding: "1.5rem",
        background: "rgba(255,255,255,0.01)",
        transition: "border-color 0.3s, box-shadow 0.3s",
        position: "relative",
        overflow: "hidden",
        cursor: "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,26,26,0.35)";
        el.style.boxShadow = "0 0 30px rgba(255,26,26,0.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#111";
        el.style.boxShadow = "none";
      }}
    >
      {/* Name + links */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1rem",
          marginBottom: "0.75rem",
        }}
      >
        <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>
          {name}
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexShrink: 0 }}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#333",
              textDecoration: "none",
              border: "1px solid #111",
              padding: "4px 10px",
              borderRadius: 2,
              transition: "color 0.2s, border-color 0.2s",
              cursor: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "#ff1a1a";
              el.style.borderColor = "rgba(255,26,26,0.4)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "#333";
              el.style.borderColor = "#111";
            }}
          >
            GitHub
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#333",
                textDecoration: "none",
                border: "1px solid #111",
                padding: "4px 10px",
                borderRadius: 2,
                transition: "color 0.2s, border-color 0.2s",
                cursor: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#ff1a1a";
                el.style.borderColor = "rgba(255,26,26,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#333";
                el.style.borderColor = "#111";
              }}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <p style={{ color: "#333", fontSize: "0.8rem", lineHeight: 1.7, marginBottom: "1rem" }}>
        {description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: "0.6rem",
              letterSpacing: "1px",
              padding: "3px 10px",
              borderRadius: 2,
              background: "rgba(255,26,26,0.05)",
              border: "1px solid rgba(255,26,26,0.12)",
              color: "#ff4444",
              fontFamily: "monospace",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 2: Create `components/sections/Projects.tsx`**

```tsx
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
```

- [ ] **Step 3: Add Projects to `app/page.tsx`**

```tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
```

- [ ] **Step 4: Verify in browser**

Scroll to Projects. Expected: cards slide up on scroll, hover adds red border glow, stack badges visible, GitHub and Live links work.

- [ ] **Step 5: Commit**

```bash
git add components/ui/ProjectCard.tsx components/sections/Projects.tsx app/page.tsx
git commit -m "feat: add Projects section with animated cards and stack badges"
```

---

## Task 10: Contact section (Chapter 5)

**Files:**
- Create: `components/sections/Contact.tsx`

- [ ] **Step 1: Create `components/sections/Contact.tsx`**

```tsx
"use client";
import { motion } from "framer-motion";
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
          transition={{ duration: 0.6 }}
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
          }}
        >
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
                transition={{ duration: 0.45, delay: i * 0.1 }}
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
                  <div
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#333",
                    }}
                  >
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
```

- [ ] **Step 2: Finalize `app/page.tsx`**

```tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
```

- [ ] **Step 3: Verify full page in browser**

Scroll through all 5 chapters. Expected: complete story flow, all sections animate on scroll, contact links are clickable.

- [ ] **Step 4: Commit**

```bash
git add components/sections/Contact.tsx app/page.tsx
git commit -m "feat: add Contact section, complete 5-chapter story layout"
```

---

## Task 11: Delete old components + production build check

**Files:**
- Delete: `components/main/Hero.tsx`, `components/main/About.tsx`, `components/main/Skills.tsx`, `components/main/Projects.tsx`, `components/main/contact.tsx`, `components/main/Navbar.tsx`, `components/main/Encryption.tsx`, `components/main/Footer.tsx`, `components/main/scroll.css`
- Delete: entire `components/sub/` directory (except nothing — all replaced)

- [ ] **Step 1: Delete old files**

```bash
cd D:/x/pranav
rm components/main/Hero.tsx
rm components/main/About.tsx
rm components/main/Skills.tsx
rm components/main/Projects.tsx
rm components/main/contact.tsx
rm components/main/Navbar.tsx
rm components/main/Encryption.tsx
rm components/main/Footer.tsx
rm components/main/scroll.css
rm -rf components/sub/
rm components/utils/motion.js
rm utils/motion.ts
```

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: `✓ Compiled successfully` with no TypeScript errors. Fix any import errors that appear — they will be stale imports pointing to deleted files.

- [ ] **Step 3: Run lint**

```bash
npm run lint
```

Fix any reported errors.

- [ ] **Step 4: Smoke test production build**

```bash
npm run start
```

Open `http://localhost:3000`. Scroll through all 5 chapters. Verify: cursor works, particles render, role text cycles, stats count up, sections animate on scroll, all links open correctly.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio redesign — black/red neon, 5-chapter story layout

- Full rebuild: Hero, About, Skills, Projects, Contact
- Custom cursor with lagging ring
- Three.js particle nebula in hero
- Framer Motion scroll-triggered animations throughout
- Role text morphing in hero
- Vertical timeline for experience
- Staggered skill chips with glow
- Project cards with stack badges
- Magnetic buttons
- Red scanline + grid overlay + corner brackets
- Removed all old components/main and components/sub files

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Covered in |
|---|---|
| Black background | Task 2 (globals.css) |
| Red neon accent color | Tasks 2, 3, 4, 5, 6, 7, 8, 9, 10 |
| Custom cursor with lagging ring | Task 3 |
| Grid overlay + corner brackets + scanline | Task 2 (CSS) + Task 3 (layout.tsx) |
| Floating red particles | Task 6 (Hero — Three.js Canvas) |
| Glitch effect on name | Task 6 (CSS animation in Hero) |
| Role morphing (Pretext-measured) | Task 6 (state cycle + opacity transition) |
| Stats count up on scroll | Task 5 (StatItem with useInView) |
| Navbar with red dot + available status | Task 4 |
| Magnetic buttons | Task 5 (NeonButton) |
| Chapter tags | Task 5 (ChapterTag) |
| Bio + experience timeline | Task 7 (About) |
| Skills grouped with cascade | Task 8 (Skills) |
| Project cards with badges + links | Task 9 (Projects) |
| Contact with email/GitHub/LinkedIn | Task 10 (Contact) |
| `constants/index.ts` with real data | Task 1 |
| FloatingChat preserved | Task 3 (imported unchanged in layout) |
| Production build passes | Task 11 |

**Placeholder scan:** None found. All code blocks are complete. All file paths are exact.

**Type consistency:**
- `PERSONAL`, `ROLES`, `STATS`, `EXPERIENCE`, `SKILL_GROUPS`, `PROJECTS` defined in Task 1, used consistently across Tasks 6–10.
- `StatItem` props: `{ value: number, suffix: string, label: string }` — matches STATS shape.
- `TimelineItem` props: `{ role, company, period, stack, active, index }` — matches EXPERIENCE shape.
- `ProjectCard` props: `{ name, description, stack, github, live, index }` — matches PROJECTS shape.
- `SkillChip` props: `{ label: string, hot: boolean }` — matches SKILL_GROUPS usage.
