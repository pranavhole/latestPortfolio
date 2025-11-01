"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-2 w-full z-[20] max-sm:flex-col-reverse max-sm:mt-20 max-sm:px-5"
    >
      {/* ------------------ IMAGE ------------------ */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/Pranav.jpeg"
          alt="work icons"
          height={650}
          width={650}
          priority
          className="
            drop-shadow-[1px_0_0_white]
            drop-shadow-[-1px_0_0_white]
            drop-shadow-[0_1px_0_white]
            drop-shadow-[0_-1px_0_white]
            drop-shadow-[1px_1px_0_white]
            drop-shadow-[-1px_-1px_0_white]
            drop-shadow-[1px_-1px_0_white]
            drop-shadow-[-1px_1px_0_white]
            max-sm:hidden
          "
        />
      </motion.div>

      {/* ------------------ TEXT SECTION ------------------ */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start max-sm:mt-6">
        {/* Tagline */}
        <div className="flex flex-col items-center justify-center max-sm:mt-6">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center gap-2 w-fit rounded-md max-sm:text-sm max-sm:text-center"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5 max-sm:h-4 max-sm:w-4" />
          <h1 className="Welcome-text text-[13px] md:text-[15px] max-sm:text-sm max-sm:text-center">
            Fullstack Developer Portfolio
          </h1>
        </motion.div> 
        </div>
        {/* Name */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-6 font-bold text-white max-w-[600px] w-auto h-auto max-sm:text-2xl max-sm:text-center"
        >
          <span
            className="
              text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500
              text-[clamp(2rem,6vw,4rem)] leading-tight
              sm:text-5xl md:text-6xl
            "
          >
            Pranav Hole
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="
            my-5 text-justify
            text-xl text-gray-400
            leading-relaxed
            max-w-[600px]
            max-sm:text-center
            max-sm:mt-2
            max-sm:text-lg
          "
        >
          I&apos;m a skilled Full Stack Web Developer who merges creativity with
          technical expertise to craft seamless, user-centric digital experiences
          — now also building in blockchain and AI.
        </motion.p>

        {/* CTA Button */}
        
        <motion.a
          variants={slideInFromLeft(1)}
          className="
            py-2 px-6 bg-gradient-to-r from-purple-500 to-cyan-500
            text-center text-white font-semibold rounded-lg
            max-w-[200px] shadow-lg hover:scale-105 hover:shadow-cyan-500/30
            transition-transform duration-300 ease-out
            text-[clamp(0.9rem,2vw,1rem)]
          "
        >
          Learn More!
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;
