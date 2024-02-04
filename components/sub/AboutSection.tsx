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
            className="flex flex-col items-center justify-center px-20 w-[100vw] z-[20] justify-items-start max-sm:mt-20 max-sm:px-5"
        >


            <motion.div
                variants={slideInFromLeft(0.5)}
                className="text-6xl font-bold justify-items-start w-[100%] "
            >
                <span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 justify-items-start">
                        About{" "}
                    </span>
                </span>
            </motion.div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-[100%] h-full flex flex-col justify-items-start pl-5 items-center mt-7"
            >
                <motion.p className="text-white text-xl !max-w-[90%] text-justify mb-3">
                    Greetings! I am a driven Electrical Engineering student, deeply immersed in the world of programming. My expertise spans C++, web technologies, and blockchain development, showcasing a diverse skill set. Proficient in frameworks such as ReactJS and NodeJS, I bring a creative touch to projects, often utilizing tools like Canva to enhance the user experience.
                </motion.p>
                <motion.p className="text-white text-xl !max-w-[90%] text-justify mb-3">
                    Beyond the academic realm, my proactive involvement in coordinating tech events is a testament to my organizational skills. As a Co-Coordinator of Prajwalan23 and a member of the GCOEA Core-Team, I&apos;ve orchestrated successful events aimed at promoting education and student development.
                </motion.p>
                <motion.p className="text-white text-xl !max-w-[90%] text-justify mb-3">
                    My competitive programming achievements speak to my commitment to continuous improvement. Being recognized as a 2-Star CodeChef programmer and holding a 5-Star rating in CPP at HackerRank underscores my dedication to honing my programming prowess.
                </motion.p>
                <motion.p className="text-white text-xl !max-w-[90%] text-justify mb-3">
                    In the ever-evolving landscape of technology, I am passionate about making a meaningful impact. With a fusion of technical expertise, creative flair, and a strong academic foundation, I am ready to contribute innovative solutions to the challenges of the digital world. Let&apos;s embark on a journey of innovation and collaboration!
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default About;
