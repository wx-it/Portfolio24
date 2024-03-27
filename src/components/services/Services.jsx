"use client";
import React from "react";
import data from "../../../public/data.json";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <div className="px-4 md:px-12 lg:px-[90px] h-screen md:h-full my-16 md:py-[20rem]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          restDelta: 0.001,
          duration: 350,
        }}
        className="font-bold lg:text-7xl border-b py-4 border-b-[#7d7d7d] md:py-8"
      >
        SERVICES
      </motion.h2>
      {data.map((service) => (
        <div
          key={service.id}
          className="border-b py-4 lg:py-16 border-b-[#7d7d7d] space-y-2 md:flex items-center justify-between"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              restDelta: 0.001,
              duration: 350,
            }}
            className="font-bold lg:text-4xl md:w-full md:max-w-[40%]"
          >
            {service.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              restDelta: 0.001,
              duration: 350,
            }}
            className="text-sm text-[#1d1d1d] md:text-base lg:text-3xl md:w-full md:max-w-[50%] md:font-medium md:px-4"
          >
            {service.description}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

export default Services;
