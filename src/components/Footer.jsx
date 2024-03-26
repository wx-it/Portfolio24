import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 lg:px-[100px] space-y-8 lg:space-y-[15rem]">
      <div className=" space-y-4 md:flex md:items-center justify-center lg:items-start lg:space-x-16">
        <h2 className="font-bold text-2xl lg:text-5xl lg:max-w-[50%]">
          Struggling to generate leads and convert website visitors into paying
          customers?
        </h2>
        <div className="space-y-4 p-0 ">
          <p className="font-semibold text-base lg:text-2xl">
            Schedule a free consultation today to discuss your landing page
            needs and see how I can help you achieve your goals.
          </p>
          <div className="flex items-center justify-start space-x-1 group">
            <p className="font-medium lg:text-xl cursor-pointer">
              - Book your free consultation
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="group-hover:translate-x-1 transition-all ease-in duration-[.5s]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:w-full md:justify-between ">
        <div className="flex space-x-4">
          <Link className="font-medium" href="/">
            GitHub
          </Link>
          <Link className="font-medium" href="/">
            Twitter
          </Link>
          <Link className="font-medium" href="/">
            LinkedIn
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <span className="font-medium cursor-pointer">Back to top</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up"
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
