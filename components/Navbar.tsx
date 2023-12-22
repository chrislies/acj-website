"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

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
    <div className="sticky top-0 z-40">
      <div
        className={`sticky top-0 z-40 bg-white ${
          isMenuOpen ? "shadow-md" : "shadow-3xl"
        } transition-all duration-[900ms]`}
      >
        <nav className="flexBetween max-container padding-container relative z-30 py-1 max-w-full">
          <Link href="/">
            <Image
              src="/compressed_images/acj-logo.webp"
              alt="logo"
              width={140}
              height={1}
            />
          </Link>
          <ul className="hidden h-full gap-16 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="text-base font-semibold text-grey-50 flexCenter cursor-pointer border-y-2 border-transparent hover:border-b-yellow-600/70 transition-all duration-300 ease-in-out"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            id="menu-button"
            onClick={toggleMenu}
            className="lg:hidden cursor-pointer"
          >
            <span
              className={`bar ${
                isMenuOpen ? "rotate-45 translate-y-[8px]" : ""
              } ease-in-out duration-300 transition-all`}
            ></span>
            <span
              className={`bar ${
                isMenuOpen ? "opacity-0 bg-white" : ""
              } ease-in-out duration-50 transition-all`}
            ></span>
            <span
              className={`bar ${
                isMenuOpen ? "rotate-[-45deg] translate-y-[-8px]" : ""
              } ease-in-out duration-300 transition-all`}
            ></span>
          </div>
        </nav>
      </div>

      <div className="lg:hidden relative z-20">
        <div
          className={`absolute w-full border-t-2d flex flex-col shadow-3xl ${
            isMenuOpen
              ? "top-full"
              : "2xl:-top-[25vh] max-2xl:-top-[25vh] max-md:-top-[40vh]"
          } transition-all duration-[500ms] ease-in-out`}
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

        <div
          className={`z-[-1] w-full absolute bg-black/40 backdrop-blur-[2px] transition-opacity duration-[350ms] ${
            isMenuOpen ? "h-screen opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default Navbar;
