"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="p-4 md:px-12 lg:px-[90px] h-screen flex items-center justify-center flex-col">
      <div>
        <h2 className="text-base font-bold lg:hidden">About me</h2>
        <span className="hidden lg:inline text-xl font-medium mr-[6rem]">
          About me
        </span>
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{
            type: "spring",
            stiffness: 100,
            restDelta: 0.001,
          }}
          className="inline font-medium text-base leading-6 tracking-wide md:text-xl lg:text-5xl lg:leading-[136%]"
        >
          As a passionate frontend web developer, I specialize in helping
          businesses transform their landing pages and websites into high
          performing assets that drive results.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
