# Portfolio Redesign — Design Spec

**Date:** 2026-04-02  
**Author:** Pranav Hole  
**Approach:** Full rebuild (Option B) — tear out all `components/main/` and `components/sub/`, replace with new components generated via 21st.dev Magic MCP.

---

## Overview

A full rebuild of `www.pranavhole.space` as a **story-driven, single-page portfolio** with a black + red neon aesthetic. The page reads like a film — five chapters that scroll continuously, each section transitioning into the next through Framer Motion animations. No hard cuts.

**Design keywords:** Dark, neon-bordered, interactive, cinematic, smooth.

---

## Visual Design System

### Colors
| Token | Value | Use |
|---|---|---|
| `bg` | `#000000` | Page background |
| `surface` | `rgba(255,255,255,0.01)` | Card/panel backgrounds |
| `border` | `rgba(255,26,26,0.15)` | Default borders |
| `border-hot` | `rgba(255,26,26,0.5)` | Hover / active borders |
| `red` | `#ff1a1a` | Primary accent, glows, CTAs |
| `red-dim` | `rgba(255,26,26,0.1)` | Button backgrounds, chip fills |
| `text-primary` | `#ffffff` | Headlines |
| `text-mid` | `#555555` | Body copy |
| `text-dim` | `#333333` | Captions, labels |

### Global decorations (fixed, always visible)
- **Grid overlay:** 60×60px red-tinted grid lines at 3% opacity
- **Corner brackets:** 4 corner brackets (top-left, top-right, bottom-left, bottom-right) in `rgba(255,26,26,0.4)` — 30×30px
- **Custom cursor:** 10px filled red dot + 32px lagging ring. Ring expands on hover over interactive elements.
- **Scanline:** 2px horizontal red glow sweeping top → bottom on a 3s loop.

### Typography
- Font: `Inter` (system fallback)
- Headings: `font-weight: 900`, `letter-spacing: -2px to -4px`
- Chapter tags: `0.6rem`, `letter-spacing: 4px`, `text-transform: uppercase`
- Body: `0.85–0.9rem`, `line-height: 1.9`, `color: #444`
- Code/stack labels: `font-family: monospace`, `0.65–0.7rem`

---

## Component Architecture

All components are **new files**. Nothing from the old `components/main/` or `components/sub/` is reused except data.

### Data preserved from `constants/index.ts`
`constants/index.ts` is rewritten with expanded real data (see Data section below). All new components import from here.

### New file structure
```
components/
  layout/
    Navbar.tsx          # Fixed top nav, glass blur, red underline on hover
    FloatingChat.tsx    # Keep existing (no change needed)
  sections/
    Hero.tsx            # Chapter 1
    About.tsx           # Chapter 2
    Skills.tsx          # Chapter 3
    Projects.tsx        # Chapter 4
    Contact.tsx         # Chapter 5
  ui/
    Cursor.tsx          # Custom red cursor + lagging ring
    ChapterTag.tsx      # Reusable "Chapter 0X · Title" tag
    NeonButton.tsx      # Red neon bordered button
    SkillChip.tsx       # Hover-glow skill badge
    ProjectCard.tsx     # Full project card with stack badges
    TimelineItem.tsx    # Experience timeline row
    StatItem.tsx        # Counting stat (number + label)
```

### Pretext integration
Install `pretext` from `https://github.com/chenglou/pretext`. Use in:
- **Hero:** Morphs role words: `Developer → Engineer → Builder → Creator → Architect` on a 2.5s interval
- **About:** Reveals body copy word-by-word as viewport enters

### 21st.dev Magic MCP usage
Use Magic to generate:
- `NeonButton` — animated neon border button
- `ProjectCard` — glassmorphism dark card with badge row
- `SkillChip` — hover-lift chip with glow
- `TimelineItem` — vertical timeline with animated connector line

---

## Chapter Breakdown

### Chapter 1 — Hero ("The Arrival")

**Layout:** Full viewport, centered content, fixed nav.

**Content:**
- Name: `Pranav Hole` (white, 6–7rem, 900 weight, subtle red glitch effect on load)
- Subtitle: `Full-Stack Engineer · BlockChain · AI · JavaScript`
- Description: `Building fast, scalable, and intelligent digital products. Mumbai, India — Open to Remote.`
- CTAs: `View Projects` (red neon filled), `Download Resume` (ghost), `Contact Me` (ghost)
- Stats row: `2+ Years`, `10+ Projects`, `53 GitHub Repos`, `5+ DApps`
- Pretext role morph below name

**Background:**
- Three.js particle nebula (R3F already installed) — sparse red/white particles
- Red radial ambient glow at 10% opacity
- Grid overlay + scanline

**Framer Motion animations:**
- Name: `y: 30 → 0`, `opacity: 0 → 1`, delay 0.2s
- Subtitle: same, delay 0.4s
- Description: delay 0.6s
- CTAs: stagger 0.1s each, delay 0.8s
- Stats: stagger 0.1s, delay 1s, numbers count up via `useEffect`

### Chapter 2 — About ("The Origin Story")

**Layout:** 2-column grid. Left: bio paragraphs. Right: vertical timeline.

**Content — bio:**
> Full-Stack Engineer at Vendorbay, building B2B Procure-to-Pay SaaS. Previously Backend Developer at TCS where I led a full stack migration from legacy VB.NET to modern Node.js/React.
>
> Graduate of Government College of Engineering Amravati (2020–2024). Community leader — Co-Lead GDSC GCOEA, Convener of Prajwalan 2023 with 10,000+ attendees.
>
> Freelanced end-to-end on 5+ SaaS products. Built 5+ DApps on Polygon with Solidity. Deep in AI agents, RAG pipelines, and LLM tooling.

**Content — timeline:**
1. **Vendorbay** · Full-Stack Engineer · Dec 2025 → Present  
   Stack: Node.js · TypeScript · PostgreSQL · GraphQL · Redis · Docker · AWS · RAG · Agentic AI
2. **Tata Consultancy Services** · Backend Developer · Aug 2024 → Dec 2025  
   Stack: Node.js · Express · React · PostgreSQL · Azure · JWT
3. **Freelance** · Full-Stack Engineer · 2022 → 2024  
   5+ SaaS & web apps delivered end-to-end

**Framer Motion animations:**
- Bio paragraphs: Pretext word-by-word reveal on `useInView`
- Timeline items: slide in from left, stagger 0.15s, draw connector line via `pathLength: 0 → 1`

### Chapter 3 — Skills ("The Arsenal")

**Layout:** Full width, skill groups stacked vertically.

**Groups:**
1. **Frontend** — React.js, Next.js, TypeScript, Tailwind CSS, Redux, SCSS, React Native, Framer Motion
2. **Backend** — Node.js, Express.js, GraphQL, FastAPI, REST APIs, WebSockets, Kafka
3. **Databases & Cloud** — PostgreSQL, Redis, MongoDB, AWS (EKS·ECS·S3·EC2), Azure, Docker, Terraform, Elasticsearch, Firebase
4. **AI / GenAI** — LangChain, OpenAI, RAG Pipelines, Agentic AI, CrewAI, Google ADK, Ollama, Streamlit
5. **Web3 / Blockchain** — Solidity, Polygon, Hardhat, Truffle, IPFS, NFT, Ganache

**Framer Motion animations:**
- Group labels: fade in + underline draws right on `useInView`
- Chips: cascade in with `staggerChildren: 0.04s`, `y: 10 → 0`, `opacity: 0 → 1`
- Each chip: red glow + `y: -2px` on hover

### Chapter 4 — Projects ("The Battles")

**Layout:** Vertical stack of full-width project cards. Replaces the old horizontal scroll carousel.

**Projects:**
1. **Muzzy — Music Streaming Platform**  
   Desc: Real-time collaborative music streaming with synchronized playback across users. Redis + WebSockets + HLS reduced latency by ~68%. Deployed on AWS EKS with Terraform.  
   Stack: AWS EKS, Terraform, Node.js, Next.js, PostgreSQL, Redis, WebSockets, HLS.js, Docker  
   Links: [GitHub](https://github.com/pranavhole/muzzfin) · [Live](https://muzzy.pranavhole.space)

2. **Zapier Clone — Automation Platform**  
   Desc: Event-driven microservices automation platform. Kafka-powered workflow engine with visual drag-and-drop flow builder.  
   Stack: Next.js, Kafka, React Flow, Tailwind, Node.js  
   Links: [GitHub](https://github.com/pranavhole/zapier) · [Live](https://zapp.pranavhole.space)

3. **Lets Trade India**  
   Desc: Trading education platform with Razorpay payment gateway integration. Full end-to-end SaaS delivery.  
   Stack: React, Node.js, Express, MongoDB, Tailwind  
   Links: [GitHub](https://github.com/pranavhole/LetsTread) · [Live](https://www.letstradeindia.co)

4. **Web3 DApps Collection** (dimmed/secondary card)  
   Desc: 5+ decentralized applications on Polygon using Solidity smart contracts, IPFS storage, Hardhat tooling.  
   Stack: Solidity, Polygon, IPFS, Hardhat

**Framer Motion animations:**
- Cards: slide up from `y: 40`, stagger 0.12s on `useInView`
- Card hover: `border-color` transitions to red, red glow shadow appears, `::before` gradient overlay fades in
- Stack badges: stagger in after card enters

### Chapter 5 — Contact ("The Signal")

**Layout:** 2-column. Left: call-to-action text. Right: contact links.

**Content — text:**
> I'm currently at Vendorbay but open to exciting freelance work, startup collaborations, and interesting problems. Whether it's a SaaS idea, an AI product, a Web3 project — reach out.

**Content — links:**
- Email: `pranavhole02@gmail.com`
- GitHub: `github.com/pranavhole` — 53 repos
- LinkedIn: `linkedin.com/in/pranav-hole`

**Framer Motion animations:**
- Pretext: `"Let's Build Something"` headline reveals letter by letter on enter
- Contact items: slide in from right, stagger 0.1s
- Contact item hover: red border glow, cursor ring expands

---

## Data (`constants/index.ts` rewrite)

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

export const STATS = [
  { value: 2, suffix: "+", label: "Years XP" },
  { value: 10, suffix: "+", label: "Projects" },
  { value: 53, suffix: "", label: "GitHub Repos" },
  { value: 5, suffix: "+", label: "DApps" },
];

export const ROLES = ["Developer", "Engineer", "Builder", "Creator", "Architect"];

export const EXPERIENCE = [ /* Vendorbay, TCS, Freelance — as above */ ];

export const SKILL_GROUPS = [ /* 5 groups as above */ ];

export const PROJECTS = [ /* 4 projects as above */ ];
```

---

## Navigation

Fixed top navbar:
- Logo: `PH.` — white with red dot, `font-weight: 900`
- Links: About · Skills · Projects · Contact — `0.75rem`, `letter-spacing: 3px`, red underline draws on hover
- Right side: pulsing red dot + `"Available for work"` text
- Background: `rgba(0,0,0,0.6)` with `backdrop-filter: blur(12px)`
- Border bottom: `rgba(255,26,26,0.1)`

Smooth scroll: `scroll-behavior: smooth` on `html` + Framer Motion `scrollIntoView` for nav link clicks.

---

## Interaction Details

| Interaction | Behavior |
|---|---|
| Cursor | 10px red dot tracks instantly. 32px ring lags 12% per frame. Ring expands on card/button hover. |
| Magnetic buttons | On `mousemove`, button translates 25% of cursor offset toward cursor. Resets on `mouseleave`. |
| Glitch on name | CSS `::before`/`::after` clip-path glitch fires every ~4s, lasts ~200ms. |
| Scanline | 2px red line sweeps full height on 3s infinite loop. |
| Floating particles | 30 small red dots rise from bottom, random speed 8–20s, random horizontal drift. |
| Skill chip hover | `translateY(-2px)`, red border glow, ring shrinks to 20px. |
| Project card hover | Red border glow, red gradient overlay fades in, cursor ring expands to 48px. |
| Stats count-up | On hero enter, numbers animate from 0 to final value over 1.5s with easing. |

---

## Preserved / Unchanged

- `app/layout.tsx` — structure kept, but Navbar and FloatingChat components replaced
- `FloatingChat.tsx` — unchanged (still connects to Vercel backend)
- `app/chat/page.tsx` — unchanged
- `public/` — all assets kept
- `tailwind.config.ts`, `postcss.config.js` — unchanged
- `.github/workflows/` — unchanged

---

## Out of Scope

- Dark/light mode toggle
- Blog or writing section
- CMS for projects
- i18n / localization
- Any backend changes
