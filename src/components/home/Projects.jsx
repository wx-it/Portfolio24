"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div
      id="projects"
      className="h-full flex flex-col items-center justify-center p-6 md:pb-[20rem] space-y-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          restDelta: 0.001,
        }}
        className="group relative h-[90vh] w-[90vw] p-3 md:p-8"
      >
        <Link
          target="_blank"
          href="https://shop-in-wx-it.vercel.app/"
          className="hidden absolute right-[30%] top-[25%] cursor-pointer bg-white rounded-full w-[150px] h-[150px] opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-[.5s]  md:flex items-center justify-center p-12 text-center text-xl font-medium"
        >
          View Project
        </Link>
        <Image
          className="md:hidden absolute top-0 left-0 rounded-t-2xl -z-10 w-full h-full object-cover brightness-75"
          src="/shopinmobile.webp"
          alt="project"
          width={0}
          height={0}
          sizes="100vw"
        />
        <Image
          className="hidden md:block absolute top-0 left-0 rounded-2xl -z-10 w-full h-full object-cover brightness-75"
          src="/shopin.webp"
          alt="project"
          width={0}
          height={0}
          sizes="100vw"
        />
        <div className="flex flex-col items-start justify-end space-y-2 md:items-end md:justify-between md:flex-row w-full h-full text-white">
          <h2 className="text-2xl font-semibold md:text-5xl">ShopIn</h2>
          <p className="text-sm font-light md:text-base md:font-regular w-full md:max-w-[50%]">
            {` ShopIn is a visually captivating landing page designed to immerse
            users in the brand's latest collections and streamline the shopping
            experience.`}
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          restDelta: 0.001,
        }}
        className="group relative h-[90vh] w-[90vw] p-3 md:p-8"
      >
        <Link
          target="_blank"
          href="https://booking-wx-it.vercel.app/"
          className="hidden absolute right-[30%] top-[25%] cursor-pointer bg-white rounded-full w-[150px] h-[150px] opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-[.5s]  md:flex items-center justify-center p-12 text-center text-xl font-medium"
        >
          View Project
        </Link>
        <Image
          className="md:hidden absolute top-0 left-0 rounded-t-2xl -z-10 w-full h-full object-cover brightness-75"
          src="/bookingmobile.webp"
          alt="project"
          width={0}
          height={0}
          sizes="100vw"
        />
        <Image
          className="hidden md:block absolute top-0 left-0 rounded-2xl -z-10 w-full h-full object-cover brightness-75"
          src="/booking.webp"
          alt="project"
          width={0}
          height={0}
          sizes="100vw"
        />
        <div className="flex flex-col items-start justify-end space-y-2 md:items-end md:justify-between md:flex-row w-full h-full text-white">
          <h2 className="text-2xl font-semibold md:text-5xl">BOOKING</h2>
          <p className="text-sm font-light md:text-base md:font-regular w-full md:max-w-[50%]">
            Booking is a hotel landing page designed to maximize reservations
            for a luxury hotel chain. Captivating visuals and a streamlined UX
            drive conversions.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
