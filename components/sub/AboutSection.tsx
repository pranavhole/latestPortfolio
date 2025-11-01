"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";

const About = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center px-20 w-[100vw] z-[20] justify-items-start max-sm:mt-20 max-sm:px-2"
        >


            <motion.div
                variants={slideInFromLeft(0.5)}
                className="text-6xl font-bold contents justify-items-center w-[100%] max-sm:text-2xl "
            >
                <span>
                    <span className="text-transparent flex bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 justify-items-center">
                        About{" "}
                    </span>
                </span>
            </motion.div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-[100%] h-full flex flex-col justify-items-start pl-5 items-center mt-7 max-sm:pl-1"
            >
                <motion.p className="text-white text-xl !max-w-[90%] text-justify mb-3 max-sm:text-sm max-sm:text-center">
                Hey, I’m Pranav Hole — a Full Stack & Blockchain Developer who loves turning complex ideas into scalable, production-ready systems.
                I build experiences that merge performance, reliability, and creativity — from real-time apps and automation platforms to decentralized systems powered by smart contracts.
                </motion.p>
                <motion.p className="text-white text-xl !max-w-[90%] text-justify mb-3 max-sm:text-sm max-sm:text-center">
                I believe great engineering is about more than just code — it’s about crafting solutions that scale elegantly and feel effortless to use. My approach blends deep backend logic with clean, modern UI design, bringing both structure and emotion to software.
                  </motion.p>
                <motion.p className="text-white text-xl !max-w-[90%] text-justify mb-3 max-sm:text-sm max-sm:text-center">
                Currently, I work as a System Engineer at Tata Consultancy Services, engineering high-performance backend systems for financial platforms, and expanding my expertise into cloud infrastructure and web3 technologies.
                </motion.p>
                <motion.p className="text-white text-xl !max-w-[90%] text-justify mb-3 max-sm:text-sm max-sm:text-center">
                Outside of work, I’m obsessed with learning emerging tech — AI, decentralized networks, and developer tooling — anything that pushes the limits of what’s possible on the web.
                 </motion.p>
                 <motion.p className="text-white text-xl !max-w-[90%] text-justify mb-3 max-sm:text-sm max-sm:text-center">
                 When I’m not coding, you’ll find me exploring product design ideas, automating my workflow, or sharing knowledge in dev communities.
                 </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default About;
