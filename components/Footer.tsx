import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-16 pb-5 bg-[rgb(131,172,70)] text-black">
      <div className="bg-red-500d max-container flex w-full flex-col">
        <div className="grid grid-cols-3 justify-items-center items-start text-smd font-semibold">
          <Link href="/">
            <Image
              src="/acj-logo.png"
              alt="logo"
              width={150}
              height={1}
            ></Image>
          </Link>
          <div className="flex flex-row gap-10 justify-items-end">
            {/* <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link> */}
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="hover:opacity-60 transition-all duration-200 ease-in-out"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-row gap-2">
              <Image
                src="/phone.svg"
                alt="phone"
                width={23}
                height={23}
              ></Image>
              <Link className="hover:underline" href="tel:9172952102">
                {" "}
                917-295-2102
              </Link>
            </div>
            <div className="flex flex-row gap-2">
              <Image src="/mail.svg" alt="email" width={23} height={23}></Image>
              <Link
                className="hover:underline"
                href="mailto:info@acjinternationalrealty.com"
              >
                info@acjinternationalrealty.com
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t-2 mt-20 mb-5" />
        <p className="regular-14 w-full text-center tracking-tighter">
          © 2023 ACJ International Realty LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
