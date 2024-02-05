import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import AboutSection from "../sub/AboutSection";
const About = () => {
  return (
    <div
      className="w-[100vw] h-full"
    >
      <AboutSection/>
    </div>
  );
};

export default About;
