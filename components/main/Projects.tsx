"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./scroll.css";
import ProjectCard from "../sub/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Zapper Clone",
    description:
      "A Zapper clone built with Next.js, Tailwind CSS, Kafka, and React Flow.",
    image: "/Zapier.png",
    tech: ["Next.js", "Tailwind", "Kafka", "React Flow"],
    demo: "https://zapp.pranavhole.space",
    github: "https://github.com/pranavhole/zapier",
  },
  {
    id: 2,
    title: "Muzzy an Music Streaming Platform",
    description:
      " A music streaming platform with constume room creation with live music playback in sync with friends.",
    image: "/muzzy.png",
    tech: [
      "Next.js",
      "Framer Motion",
      "Node.js",
      "Express",
      "PostgreSQL",
      "YTDll",
      "Tailwind CSS",
      "HLS.js",
    ],
    demo: "https://muzzy.pranavhole.space",
    github: "https://github.com/pranavhole/muzzfin",
  },
  {
    id: 3,
    title: "Lets Trade India",
    description:
      "A Treading education platform with payment gateway integration.",
    image: "/letstrade.png",
    tech: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
    demo: "https://letstradeindia.in",
    github: "https://github.com/pranavhole/LetsTread",
  },
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
          transition={{ duration: 0.8, ease: "easeOut" }}
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
        initial={{ scale: 1.15, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1 }}
      />

      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      <motion.div
        className="
          relative z-10 max-w-xl w-[85%] text-center px-10 py-8 
          rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.7)]
          bg-white/10 backdrop-blur-xl border border-white/20
        "
        // initial={{ opacity: 0, scale: 0.85, y: 40 }}
        // whileInView={{ opacity: 1, scale: 1, y: 0 }}
        // whileHover={{
        //   scale: 1.02,
        //   boxShadow: "0 0 60px rgba(140, 110, 255, 0.4)",
        // }}
        // transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-4xl font-extrabold text-white drop-shadow-lg mb-4">
          {project.title}
        </h3>

        <p className="text-gray-200 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex justify-center gap-3 flex-wrap text-sm mb-7">
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-4 py-1.5 bg-indigo-500/20 text-indigo-200 border border-indigo-400/40 rounded-full shadow-inner"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-5">
          <a
            href={project.demo}
            target="_blank"
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 rounded-xl text-white font-semibold transition shadow-lg hover:shadow-indigo-500/40"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            className="border border-white/50 text-white hover:bg-white hover:text-black px-6 py-2.5 rounded-xl font-semibold transition shadow-lg hover:shadow-white/30"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
