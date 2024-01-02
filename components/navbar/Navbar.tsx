"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Navlink from "./Navlink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        closeMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="sticky top-0 z-50">
      <div
        id="navHeader"
        className={`sticky top-0 z-40 bg-white ${
          isMenuOpen ? "shadow-md" : "shadow-3xl"
        } transition-all duration-[900ms]`}
      >
        <nav className="flexBetween h-[--header-height] max-container padding-container py-1 max-w-full">
          <Link href="/">
            <Image
              src="/compressed_images/acj-logo.webp"
              alt="logo"
              width={140}
              height={1}
            />
          </Link>
          <ul className="hidden gap-16 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Navlink
                  href={link.href}
                  className={`text-base font-semibold text-grey-50 flexCenter cursor-pointer border-y-2 border-transparent hover:border-b-yellow-600/60 transition-all duration-300 ease-in-out`}
                  activeClasses="border-b-yellow-600/70"
                  label={link.label}
                />
              </li>
            ))}
          </ul>
          <div
            id="menu-button"
            onClick={toggleMenu}
            className="lg:hidden cursor-pointer"
          >
            <span
              className={`bar 
              ${isMenuOpen ? "rotate-45 translate-y-[8px]" : ""} 
              ease-in-out duration-300 transition-all`}
            ></span>
            <span
              className={`bar 
              ${isMenuOpen ? "opacity-0 bg-white" : ""} 
              ease-in-out duration-50 transition-all`}
            ></span>
            <span
              className={`bar 
              ${isMenuOpen ? "rotate-[-45deg] translate-y-[-8px]" : ""} 
                ease-in-out duration-300 transition-all`}
            ></span>
          </div>
        </nav>
      </div>

      <div id="navMenu" className="lg:hidden z-30">
        <div
          className={`fixed z-30 w-full border-t-2d flex flex-col shadow-3xl 
          ${isMenuOpen ? "top-[--header-height]" : "-top-[100%]"} 
          transition-all duration-[400ms] ease-linear`}
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`${link.href === "/contact" ? "" : "border-b-2"} 
                  bg-white py-4 text-xl text-grey-50 flexCenter cursor-pointer font-[500] tracking-tight hover:text-yellow-700 transition-all duration-100 ease-in-out active:text-yellow-600/70`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`lg:hidden absolute h-screen z-10 inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-[350ms] ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </div>
  );
};

export default Navbar;
