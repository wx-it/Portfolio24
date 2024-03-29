"use client";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleNav = (toggled) => {
    {
      if (toggled) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
  };

  return (
    <nav className="flex items-center justify-between w-full p-4 md:py-8 lg:px-[90px] md:px-12 ">
      <div className="z-20 flex justify-between w-full items-center">
        <Link href={"/"}>
          <Image src="/logo.png" width={24} height={44} alt="logo" />
        </Link>
        <span className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            onToggle={toggleNav}
            hideOutline={false}
          />
        </span>
        <div className=" hidden items-center justify-center space-x-8 md:flex">
          <Link className=" text-lg" href={"#projects"}>
            Projects
          </Link>
          <Link className=" text-lg" href={"/services"}>
            Services
          </Link>
          <Link className=" text-lg" href={"#contact"}>
            Contact
          </Link>
        </div>
      </div>
      <div
        className={
          isOpen
            ? "md:hidden fixed right-0 top-0 flex flex-col items-center justify-center h-full w-full bg-[#EBEBEB] z-10 space-y-6 translate-y-0 ease-linear duration-1000"
            : "md:hidden fixed right-0 top-0 flex flex-col items-center justify-center h-full w-full bg-[#EBEBEB] z-10 space-y-6 translate-y-full ease-linear duration-1000"
        }
      >
        <Link
          onClick={() => setOpen(!isOpen)}
          className="font-medium text-lg"
          href={"/#projects"}
        >
          Projects
        </Link>
        <Link
          onClick={() => setOpen(!isOpen)}
          className="font-medium text-lg"
          href={"/services"}
        >
          Services
        </Link>
        <Link
          onClick={() => setOpen(!isOpen)}
          className="font-medium text-lg"
          href={"/#contact"}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
