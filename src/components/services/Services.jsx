import React from "react";
import { promises as fs } from "fs";
const Services = async () => {
  const file = await fs.readFile(process.cwd() + "/public/data.json", "utf8");
  const data = JSON.parse(file);

  console.log(data.map((service) => service.id));

  return (
    <div className="px-4 md:px-12 lg:px-[90px] h-screen md:h-full my-16 md:py-[20rem]" >
      <h2 className="font-bold lg:text-7xl border-b py-4 border-b-[#7d7d7d] md:py-8" >SERVICES</h2>
      {data.map((service) => (
        <div key={service.id} className="border-b py-4 lg:py-16 border-b-[#7d7d7d] space-y-2 md:flex items-center justify-between">
          <h2 className="font-bold lg:text-4xl md:w-full md:max-w-[40%]">{service.title}</h2>
          <p className="text-sm text-[#1d1d1d] md:text-base lg:text-3xl md:w-full md:max-w-[50%] md:font-medium md:px-4">{service.description} </p>
        </div>
      ))}
    </div>
  );
};

export default Services;
