"use client";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav>
      <Image src="/logo.jpg" width={24} height={44} alt="logo" />
      <Hamburger toggled={isOpen} toggle={setOpen} hideOutline={false} />
    </nav>
  );
};

export default Navbar;
