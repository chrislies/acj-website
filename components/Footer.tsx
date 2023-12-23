import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "./svgs";

const Footer = () => {
  return (
    <footer className="absolute w-full lg:pt-16 max-lg:pt-5 pb-5 bg-[rgb(131,172,70)] text-black">
      <div className="bg-red-500d max-container max-lg:padding-container flex w-full flex-col">
        <div className="grid lg:grid-cols-3 max-lg:grid-cols-1 max-lg:gap-5 lg:justify-items-center max-lg:justify-items-start items-start lg:text-base max-lg:text-xs font-semibold">
          <Link href="/">
            <Image
              src="/compressed_images/acj-logo.webp"
              alt="logo"
              width={150}
              height={1}
            ></Image>
          </Link>
          <div className="flex lg:flex-row lg:gap-10 max-lg:flex-col max-lg:gap-4">
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
            <div className="flex flex-row gap-2 items-center">
              <Phone className="h-[20px] max-lg:h-3"></Phone>
              <Link className="hover:underline" href="tel:9297100869">
                929-710-0869
              </Link>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Mail className="h-[20px] max-lg:h-3"></Mail>
              <Link
                className="hover:underline"
                href="mailto:info@acjinternationalrealty.com"
              >
                info@acjinternationalrealty.com
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-20 mb-5" />
        <p className="regular-14 w-full max-lg:text-xs text-center tracking-tighter">
          © 2023 ACJ International Realty LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
