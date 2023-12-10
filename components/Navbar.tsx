"use client";
import { useState, useEffect, useRef } from "react";
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
      const menuButton = document.getElementById("menu-button");

      if (
        isMenuOpen &&
        !event.target.closest(".menu-container") &&
        event.target !== menuButton
      ) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="sticky top-0 z-[999] bg-white shadow-3xl">
      <nav className="flexBetween max-container padding-container relative z-30 py-1 max-w-full">
        <Link href="/">
          <Image src="/acj-logo.png" alt="logo" width={140} height={1} />
        </Link>

        <ul className="hidden h-full gap-16 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              onClick={closeMenu}
              className="text-base font-medium text-grey-50 flexCenter cursor-pointer border-y-2 border-transparent hover:border-b-yellow-600/70 transition-all duration-300 ease-in-out"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          id="menu-button"
          className="inline-block cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden menu-container absolute top-full left-0 w-full bg-white border-t-2 py-4 flex flex-col gap-6 shadow-3xl">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              onClick={closeMenu}
              className="text-xl text-grey-50 flexCenter cursor-pointer active:text-yellow-600/70"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
