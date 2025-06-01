"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Overlay Background for Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"></div>
      )}

      {/* Main Navbar */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] bg-white/10 backdrop-blur-md shadow-lg rounded-xl z-50 px-6 py-4 border border-white/20 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-white text-2xl font-bold">
          Portfolio
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6 text-white font-medium">
          <Link href="/about" className="relative group cursor-pointer">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/skills" className="relative group cursor-pointer">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="relative group cursor-pointer">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <HiMenuAlt3
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </header>

      {/* Mobile Menu with animation */}
      <div
        className={`fixed top-0 left-0 w-full h-[60%] bg-[#121212] text-white flex-col items-center justify-center gap-8 z-50 md:hidden transition-all duration-300 ease-in-out
        ${isMenuOpen ? "flex opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
      >
        {/* Close Button */}
        <HiX
          className="absolute top-6 right-6 text-3xl cursor-pointer"
          onClick={toggleMenu}
        />

        {/* Links */}
        <Link
          href="/about"
          onClick={closeMenu}
          className="text-xl font-medium"
        >
          About
        </Link>
        <Link
          href="/skills"
          onClick={closeMenu}
          className="text-xl font-medium"
        >
          Skills
        </Link>
        <Link
          href="/contact"
          onClick={closeMenu}
          className="text-xl font-medium"
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Header;
