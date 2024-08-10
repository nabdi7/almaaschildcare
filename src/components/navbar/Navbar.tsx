"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "../menu/Menu";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white">
      <div className="container flex items-center justify-center p-4 mx-auto text-gray-600 capitalize">
        <Link
          href="/"
          className={`hover:text-blue-800 transition-colors duration-300 transform mx-1.5 sm:mx-5 font-medium hidden sm:inline-block ${
            pathname === "/"
              ? "border-b-2 border-blue-500"
              : "border-b-2 border-transparent"
          }`}
        >
          Home
        </Link>

        <Link
          href="/about"
          className={`hover:text-blue-800 transition-colors duration-300 transform mx-1.5 sm:mx-5 font-medium hidden sm:inline-block ${
            pathname === "/about"
              ? "border-b-2 border-blue-500"
              : "border-b-2 border-transparent"
          }`}
        >
          About
        </Link>

        <Link
          href="/"
          className="border-b-2 border-transparent hover:text-blue-800 transition-colors duration-300 transform mx-1.5 sm:mx-5"
        >
          <Image
            src="https://res.cloudinary.com/dqwh1u64w/image/upload/v1723317249/almaas_mbuths.png"
            alt="Logo"
            width={500}
            height={500}
            className="h-40 w-auto"
          />
        </Link>

        <Link
          href="/programs"
          className={`hover:text-blue-800 transition-colors duration-300 transform mx-1.5 sm:mx-5 font-medium hidden sm:inline-block ${
            pathname === "/programs"
              ? "border-b-2 border-blue-500"
              : "border-b-2 border-transparent"
          }`}
        >
          Programs
        </Link>

        <Link
          href="/contact"
          className={`hover:text-blue-800 transition-colors duration-300 transform mx-1.5 sm:mx-5 font-medium hidden sm:inline-block ${
            pathname === "/contact"
              ? "border-b-2 border-blue-500"
              : "border-b-2 border-transparent"
          }`}
        >
          Contact
        </Link>
        <div className="lg:hidden sm:hidden "> {/* ml-auto */}
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
