"use client";

import { useState } from "react";
import Link from "next/link";
import img from "../../../assets/webcodesky.png";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" text-white xl:px-[72px] md:px-10 sm:px-2 px-4">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <Image src={img} alt="logo" width={300} height={200} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium justify-center items-center">
          <Link href="/" className="text-[#23272E] hover:text-blue-600">
            Home
          </Link>
          <Link
            href="/services"
            className="text-[#23272E] font-medium hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-[#23272E] font-medium hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/works"
            className="text-[#23272E] font-medium hover:text-blue-600"
          >
            Our Works
          </Link>
          <Link
            href="/blog"
            className="text-[#23272E] font-medium hover:text-blue-600"
          >
            Blog
          </Link>
          <div className="flex gap-2">
            <button className="btn-rounded flex">
              <Link href="/contact" className="text-[#23272E] hover:text-white">
                Contact Us
              </Link>
            </button>
            <button className="btn-rounded flex">
              <Link
                href="/getquote"
                className="text-[#23272E] hover:text-white"
              >
                Get a Quote
              </Link>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#23272E] hover:text-blue-600 focus:outline-none focus:text-blue-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link
            href="/"
            className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/works"
            className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Our Works
          </Link>
          <Link
            href="/blog"
            className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <div className="flex flex-col gap-2 w-[50%]">
            <button className="border-[1px] rounded-3xl px-5 py-1 hover:bg-[#FF6600] flex">
              <Link
                href="/contact"
                className="block px-2 py-2 text-[#23272E]"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </button>
            <button className="border-[1px] rounded-3xl px-5 py-1 hover:bg-[#FF6600] flex">
              <Link
                href="/contact"
                className="block px-2 py-2 text-[#23272E]"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
