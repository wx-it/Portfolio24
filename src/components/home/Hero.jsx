import React from "react";

const Hero = () => {
  return (
    <div className="p-4 md:px-12 lg:px-[90px] md:h-screen">
      <span className="text-xl">{`I'm a`}</span>
      <h1 className="font-bold text-5xl md:text-7xl lg:text-[150px] w-full max-w-[80%] ">
        Frontend Web Developer
      </h1>
      <div className="flex items-center justify-start space-x-1 md:space-x-3 mt-2 lg:mt-5">
        <span className="bg-[#1D1D1D] w-6 h-6 rounded-full lg:w-8 lg:h-8"></span>
        <p className="text-xl font-medium lg:text-3xl md:tracking-wider">
          I specialize in optimizing generic
        </p>
      </div>
      <p className="text-xl font-medium lg:text-3xl md:tracking-wider">
        landing pages for maximum impact.
      </p>
      <button className="group relative overflow-hidden  border border-black rounded-full px-4 py-3 font-medium text-base mt-4 lg:text-2xl lg:py-4 lg:px-6">
        Book your free consultation
        <span className="absolute bottom-0 left-0 bg-black text-white w-full h-full px-4 py-3 font-medium text-base lg:text-2xl lg:px-6 lg:p-4 rounded-full translate-y-full transition-transform ease-in duration-[.5s] group-hover:translate-y-0">
          Contact
        </span>
      </button>
    </div>
  );
};

export default Hero;
