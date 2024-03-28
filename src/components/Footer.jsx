"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="p-4 lg:px-[100px] space-y-8 lg:space-y-[15rem]"
    >
      <div className=" space-y-4 md:flex md:items-center justify-center lg:items-start lg:space-x-16">
        <motion.h2
          initial={{ y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            restDelta: 0.001,
          }}
          className="font-bold text-2xl lg:text-5xl lg:max-w-[60%]"
        >
          Seeking a web developer who crafts impactful landing pages and user
          experiences?
        </motion.h2>
        <div className="space-y-4 p-0 ">
          <motion.p
            initial={{ y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              restDelta: 0.001,
            }}
            className="font-semibold text-base lg:text-2xl"
          >
            {`Let's chat about your next project! I'm always happy to connect and
            discuss how I can help you achieve your web development goals.`}
          </motion.p>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              restDelta: 0.001,
            }}
            className="flex items-center justify-start space-x-1 group"
          >
            <a
              href="mailto:bendjafer.zineb70@gmail.com"
              className="font-medium lg:text-xl cursor-pointer"
            >
              - Get In Touch With Me
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-all ease-in duration-[.5s]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:w-full md:justify-between ">
        <div className="flex space-x-4">
          <Link
            target="blank"
            className="font-medium"
            href="https://github.com/wx-it"
          >
            GitHub
          </Link>
          <Link
            target="blank"
            className="font-medium"
            href="https://twitter.com/obv_12"
          >
            Twitter
          </Link>
          <Link
            target="blank"
            className="font-medium"
            href="https://www.linkedin.com/in/zineb-bendjafer/"
          >
            LinkedIn
          </Link>
        </div>
        <div
          onClick={handleScrollToTop}
          className="flex items-center justify-center space-x-1"
        >
          <span className="font-medium cursor-pointer">Back to top</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 12" />
            <path d="M18 11l-6 -6" />
            <path d="M6 11l6 -6" />
          </svg>
        </div>

        <span className="text-sm">Copyright©ZinebBendjafer</span>
      </div>
    </footer>
  );
};

export default Footer;
