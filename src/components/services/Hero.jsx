"use client";
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="p-4 md:px-12 lg:px-[90px] md:h-full space-y-5">
      <div className="overflow-hidden">
        <motion.h1
          initial={{ opacity: 0.5, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            restDelta: 0.001,
          }}
          className="font-bold text-4xl md:text-7xl lg:text-[125px] w-full lg:max-w-[90%] uppercase "
        >
          Landing Page
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h1
          initial={{ opacity: 0.5, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            restDelta: 0.001,
            delay: 0.3,
          }}
          className="font-bold text-4xl md:text-7xl lg:text-[125px] w-full lg:max-w-[90%] uppercase"
        >
          Creation & Design
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          restDelta: 0.001,
          duration: 350,
        }}
        className="text-xl font-medium lg:text-3xl md:tracking-wide w-full md:max-w-[50%]"
      >
        Get to know more about my approach, process, services and way of
        working.
      </motion.p>
    </div>
  );
};

export default Hero;
