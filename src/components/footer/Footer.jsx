import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 lg:px-[100px] space-y-8">
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
          <p className="font-medium lg:text-xl cursor-pointer">
            - Book your free consultation
          </p>
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
        <span className="font-medium cursor-pointer">Back to top</span>
        <span className="text-sm">Copyright©ZinebBendjafer</span>
      </div>
    </footer>
  );
};

export default Footer;
