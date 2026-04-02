# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

No test suite is configured. There is no single-test command.

## Architecture

This is a **Next.js 15 personal portfolio** for Pranav Hole, using the App Router with TypeScript, Tailwind CSS, Framer Motion, and Three.js (`@react-three/fiber` + `@react-three/drei`).

### Key structure

- `app/` — App Router pages. `layout.tsx` wraps all pages with `Navbar`, `Footer`, and `FloatingChat`. The main page (`app/page.tsx`) renders sections in order: Hero → About → Skills → Projects → Contact.
- `app/chat/page.tsx` — Standalone chat page that connects to `http://localhost:8000/chat` (local dev backend).
- `components/main/` — Full-section components rendered on the main page. Each corresponds to a portfolio section.
- `components/sub/` — Smaller reusable pieces used inside main components (e.g., `HeroContent`, `ProjectCard`, `SkillDataProvider`, `AboutSection`, `Glow`).
- `components/utils/motion.js` / `utils/motion.ts` — Shared Framer Motion variant definitions.
- `constants/index.ts` — All data arrays: `Skill_data`, `Frontend_skill`, `Backend_skill`, `Full_stack`, `Other_skill`, `Socials`, and project list. **This is the primary place to update portfolio content.**

### Floating chat bot

`FloatingChat` (rendered globally in layout) streams responses from `https://chat-bot-dun-eta.vercel.app/chat`. The `app/chat/page.tsx` page is a separate standalone chat UI that hits `localhost:8000` — it appears to be a dev/testing artifact.

### Styling

- Global dark background: `bg-[#030014]` set on `<body>` in layout.
- Tailwind is the primary styling mechanism; some components use inline styles or CSS modules (`scroll.css`, `style.css`, `glow.scss`).
- `sass` is installed for `.scss` support.

### Deployment

CI/CD via GitHub Actions (`.github/workflows/main_abcdefghi.yml`) deploys to Azure App Service on pushes to `main`. The site also has Netlify config (`@netlify/plugin-nextjs` in devDependencies).
