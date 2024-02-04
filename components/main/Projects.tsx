"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./scroll.css"
import ProjectCard from "../sub/ProjectCard";
const Project = () => {
  return (
    <div className="" id="projects">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  // const y = useTransform(scrollYProgress, [0, 1], ["10%", "-100%"]);
  return (
    <section ref={targetRef} className="relative h-[600vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 mt-10">
          <section className=" red   h-[80vh] w-[100vw] overflow-hidden ">
            {/* <Project 
            src=""
            /> */}
          </section>
          <section className=" orange   h-[80vh] w-[100vw] overflow-hidden" >
            TWO
          </section>
          <section className="purple   h-[80vh] w-[100vw] overflow-hidden" >
            THREE
          </section>
          <section className="green   h-[80vh] w-[100vw] overflow-hidden" >
            FOUR
          </section>
          <section className="gray   h-[80vh] w-[100vw] overflow-hidden" >
            FIVE
          </section>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;