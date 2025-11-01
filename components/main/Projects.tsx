"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./scroll.css";
import ProjectCard from "../sub/ProjectCard";


const projects = [
  {
    id: 1,
    title: "Crypto Dashboard",
    description: "A real-time crypto tracker built with Next.js, Tailwind, and Chart.js.",
    image: "/abcd.png",
    tech: ["Next.js", "Tailwind", "Chart.js"],
    demo: "https://yourdemo.com",
    github: "https://github.com/yourrepo"
  },
  {
    id: 2,
    title: "AI Portfolio Builder",
    description: "Generate your portfolio using AI-powered templates.",
    image: "/images/ai-portfolio.png",
    tech: ["React", "OpenAI API", "Framer Motion"],
    demo: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Blockchain Voting App",
    description: "A decentralized voting system built on Ethereum.",
    image: "/images/vote.png",
    tech: ["Solidity", "React", "Web3.js"],
    demo: "#",
    github: "#"
  },
  {
    id: 4,
    title: "3D Portfolio Experience",
    description: "Interactive 3D developer portfolio with Three.js.",
    image: "/images/3d.png",
    tech: ["Three.js", "Next.js", "GSAP"],
    demo: "#",
    github: "#"
  }
];

const Project = () => {
  return (
    <div id="projects">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["-2%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[550vh] ">
      <div className="flex flex-col items-center justify-center ">
        <motion.h2
          className="text-5xl md:text-6xl font-bold  bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Projects
        </motion.h2>
      </div>
      <div className="sticky top-8 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 pl-[10vw]">
          {projects.map((p) => (
            <ProjectSlide key={p.id} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectSlide = ({ project }: any) => {
  return (
    <section className="relative h-[80vh] w-[100vw] flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl">
      {/* Background layer */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${project.image})`,
        }}
        initial={{ scale: 1.1, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Overlay layer */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content layer */}
      <motion.div
        className="relative z-10 max-w-xl text-center px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-4xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-5">{project.description}</p>
        <div className="flex justify-center gap-3 flex-wrap text-sm text-indigo-300 mb-6">
          {project.tech.map((tech: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-indigo-600/20 rounded-full border border-indigo-400/30">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <a
            href={project.demo}
            target="_blank"
            className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-xl text-white transition"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            className="border text-white  bg-transparent border-white hover:bg-white hover:text-black px-5 py-2 rounded-xl transition"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
