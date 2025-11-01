"use client";
import { motion } from "framer-motion";
import { JSX } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiAmazonaws,
  SiMicrosoftazure,
  SiSolidity,
  SiWeb3Dotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiFramer,
  SiReacthookform,
  SiOpenai,
} from "react-icons/si";

const FaClaude = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-claude" viewBox="0 0 16 16">
        <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z" />
      </svg>
    </div>
  )
}

const FaChatgpt = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-gpt" viewBox="0 0 16 16">
        <path d="M2.08 13.08a2 2 0 0 0 2.658 2.658l.404-.404a2 2 0 0 1 2.652 2.652l-.404.404A3.98 3.98 0 0 1 2.08 13.08zM5.23 2.97a3 3 0 0 1 5.54 0l.5.5a3 3 0 0 1 5.54 0l.5-.5a3 3 0 0 1 5.54 0l.5.5a3 3 0 0 1 0 5.54l-.5.5a3 3 0 0 1 0 5.54l.5.5a3 3 0 0 1 0 5.54l-.5.5a3 3 0 0 1-5.54 0l-.5-.5a3 3 0 0 1-5.54 0l-.5.5a3 3 0 0 1-5.54 0l-.5-.5a3 3 0 0 1 0-5.54l.5-.5a3 3 0 0 1 0-5.54l-.5-.5a3 3 0 0 1 0-5.54z"/>
      </svg>
    </div>
  )
}

const FaGrok = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grok" viewBox="0 0 16 16">
        <path d="M1.678 3.713a.5.5 0 0 1 .487.02l.97.568 1.771 1.942c.729.802 1.49 1.51 3.026 1.51s2.297-.708 3.026-1.51l1.771-1.942.97-.568a.5.5 0 0 1 .866.497l-.97 1.68a1 1 0 0 1-.866.593h-1.254a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .5-.5H12a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 1-2.5 2.5H5.707a2.5 2.5 0 0 1-1.768-4.275L1.678 3.713z"/>
      </svg>
    </div>
  )
}
const leftColumn = [
  {
    title: "AI",
    items: [
      { name: "OpenAI", icon: <SiOpenai /> },
      { name: "ChatGPT", icon: <FaChatgpt /> },
      { name: "Claude", icon: <FaClaude /> },
      { name: "Grok", icon: <FaGrok /> },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
];

const rightColumn = [
  
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "GraphQL", icon: <SiReacthookform /> },
      { name: "Prisma", icon: <SiReacthookform /> },
    ],
  },
  {
    title: "Cloud & Database",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Postgres", icon: <SiPostgresql /> },
      { name: "AWS", icon: <SiAmazonaws /> },
      { name: "Azure", icon: <SiMicrosoftazure /> },
    ],
  },
];

export default  function  Skills() {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-screen py-20 px-6 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <video
          className="w-full h-full object-cover opacity-25"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0014]/90 via-[#130025]/70 to-[#0a0014]/90" />
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[200px] animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-center text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Skills
        </motion.h2>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full justify-center items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-14 flex flex-col items-center">
            {leftColumn.map((group, i) => (
              <SkillGroup key={i} title={group.title} items={group.items} />
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-14 flex flex-col items-center">
            {rightColumn.map((group, i) => (
              <SkillGroup key={i} title={group.title} items={group.items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Skill Group Component with Floating Animation */
/* -------------------------------------------------------------------------- */
function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: { name: string; icon: JSX.Element }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full max-w-md"
    >
      <h3 className="text-xl font-semibold text-purple-400 mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        {items.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow:
                '0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(59,130,246,0.4)',
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 10,
            }}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-[#141432]/70 rounded-xl border border-[#2d2d7a] backdrop-blur-md hover:bg-[#1f1f4d]/80 transition-all duration-100"
          >
            <motion.span
              className="text-lg text-blue-300"
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {skill.icon}
            </motion.span>
            <span className="text-sm md:text-base">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
