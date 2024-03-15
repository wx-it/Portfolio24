import React from "react";

const About = () => {
  return (
    <div className="p-4 md:px-12 lg:px-[90px] h-screen flex items-center justify-center flex-col">
      <div>
        <h2 className="text-base font-bold lg:hidden">About me</h2>
        <span className="hidden lg:inline text-xl font-medium mr-[6rem]">
          About me
        </span>
        <p className="inline font-medium text-base leading-6 tracking-wide md:text-xl lg:text-5xl lg:leading-[136%]">
          As a passionate frontend web developer, I specialize in helping
          businesses transform their landing pages and websites into high
          performing assets that drive results.
        </p>
      </div>
    </div>
  );
};

export default About;
