import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[999] bg-white shadow-3xl">
      <nav className="flexBetween max-container padding-container relative z-30 py-1 max-w-full">
        <Link href="/">
          <Image src="/acj-logo.png" alt="logo" width={140} height={1} />{" "}
          {/* className="border-2 rounded-lg border-yellow-700/100 shadow-2xl" */}
        </Link>

        <ul className="hidden h-full gap-16 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-grey-50 flexCenter cursor-pointer border-y-2 border-transparent hover:border-b-yellow-600/70 transition-all duration-300 ease-in-out"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </nav>
    </div>
  );
};

export default Navbar;
