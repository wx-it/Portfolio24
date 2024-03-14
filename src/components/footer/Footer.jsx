import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 md:px-[100px] space-y-8">
      <div className=" space-y-4 md:flex items-start justify-center md:space-x-16">
        <h2 className="font-bold text-2xl md:text-5xl md:max-w-[50%]">
          Struggling to generate leads and convert website visitors into paying
          customers?
        </h2>
        <div className="space-y-4">
          <p className="font-semibold text-base md:text-2xl">
            Schedule a free consultation today to discuss your landing page
            needs and see how I can help you achieve your goals.
          </p>
          <p className="font-medium text-xl cursor-pointer">- Book your free consultation</p>
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
        <span className="font-medium" >Back to top</span>
        <span className="text-sm">Copyright©ZinebBendjafer</span>
      </div>
    </footer>
  );
};

export default Footer;
