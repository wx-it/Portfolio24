"use client";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between w-full p-4 md:py-8 md:px-[90px] ">
      <div className="z-10 flex justify-between w-full items-center">
        <Image src="/logo.jpg" width={24} height={44} alt="logo" />
        <span className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            onToggle={(toggled) => {
              if (toggled) {
                setOpen(true);
              } else {
                setOpen(false);
              }
            }}
            hideOutline={false}
          />
        </span>
        <div className=" hidden items-center justify-center space-x-8 md:flex">
          <Link className=" text-lg" href={"/"}>
            Projects
          </Link>
          <Link className=" text-lg" href={"/"}>
            Services
          </Link>
          <Link className=" text-lg" href={"/"}>
            Contact
          </Link>
        </div>
      </div>
      <div
        className={
          isOpen
            ? "fixed right-0 top-0 flex flex-col items-center justify-center h-full w-full bg-[#EBEBEB] space-y-6 translate-y-0"
            : "fixed right-0 top-0 flex flex-col items-center justify-center h-full w-full bg-[#EBEBEB] space-y-6 translate-y-full"
        }
      >
        <Link className="font-medium text-lg" href={"/"}>
          Projects
        </Link>
        <Link className="font-medium text-lg" href={"/"}>
          Services
        </Link>
        <Link className="font-medium text-lg" href={"/"}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
