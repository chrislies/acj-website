import { CERTIFICATES, SERVICES } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section>
      <div
        className="flex justify-center bg-cover bg-no-repeat bg-center h-[30vh]"
        style={{ backgroundImage: 'url("/compressed_images/nyc.webp")' }}
      >
        <div className="bg-slate-700/40 backdrop-blur-sm w-full h-full flex flex-col justify-center items-center">
          <h1 className="font-bold lg:text-6xl max-lg:text-5xl max-sm:text-4xl text-white tracking-tight leading-[70px]">
            About Us
          </h1>
        </div>
      </div>
      <div className="gray-50 bg-[#f5f5f7] 2xl:px-[500px] max-2xl:px-[350px] max-xl:px-[250px] max-lg:px-[150px] max-md:px-[60px] max-sm:p-[20px] py-10">
        <div className="bg-[#ffffff] leading-[1.47059] 2xl:px-8 2xl:py-6 max-2xl:px-8 max-2xl:py-6 max-md:px-5 max-md:py-3 rounded-3xl max-sm:rounded-xl text-xl tracking-tight flex flex-col justify-center items-center gap-8">
          <div>
            <p>
              <strong>ACJ International Realty LLC </strong>
              is a certified New York State and City Minority Women Business
              Enterprise (MWBE) real estate consulting firm with over 20 years
              of experience. Our specialization in property management, leasing,
              acquisitions, and strategic development follows a client-centric
              approach tailoring services to individual needs.{" "}
            </p>
          </div>
          <div>
            <p>
              Established in 2016, Julie Huang embarked on a mission to assist
              foreign-based companies in expanding their presence in New York
              and New Jersey. As we continue to grow, our commitment remains on
              delivering exceptional real estate services and solutions,
              creating lasting partnerships, and contributing positively to the
              growth and success of our clients in the ever-changing real estate
              landscape.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="border-b-2 border-slate-300 w-[90vw] mx-auto block" /> */}
      <div className="bg-[#ffffff] min-h-screen">
        <h4 className="max-container px-10 py-6 text-4xl max-sm:text-3xl underlined font-bold justify-self-start">
          Company Certifications
        </h4>
        <div className="gray-50 leading-[1.47059] 2xl:px-[500px] max-2xl:px-[350px] max-xl:px-[250px] max-lg:px-[150px] max-md:px-[60px] max-sm:px-[40px] pb-0 text-xl tracking-tight flex flex-col justify-center items-center">
          <p className="">
            Through our diverse certifications, including minority and
            women-owned business status and small business recognition, we
            actively demonstrate our commitment to excellence and strategic
            innovation. These credentials not only reflect our dedication to
            delivering unique value to the real estate industry, but also
            showcase our strong ties to and support for the local community.{" "}
          </p>
        </div>
        <div className="2xl:px-[200px] py-10 grid 2xl:grid-cols-3 place-items-center max-2xl:grid-cols-3 max-md:grid-cols-2 max-sm:flex max-sm:flex-col grid-flow-row 2xl:gap-[2rem] max-2xl:gap-[25px] max-xl:gap-[22px] max-lg:gap-[20px] max-md:gap-[25px] max-sm:gap-[20px]">
          {CERTIFICATES.map((cert) => (
            <div className="container relative border border-black/10 rounded-lg shadow-xl 2xl:w-[320px] max-2xl:w-[310px] max-xl:w-[250px] max-lg:w-[220px] max-md:w-[260px]">
              <Image
                key={cert.id}
                src={cert.src}
                alt={cert.title}
                width={1000}
                height={1000}
                className="img p-5 duration-300 ease-in-out transition-all"
              />
              <div className="overlay flex flex-col gap-4 absolute opacity-0 bottom-0 rounded-b-lg p-1 text-white text-center bg-black/90 w-full duration-500 ease-in-out transition-all">
                <div>{cert.title}</div>
                {cert.href ? (
                  <div className="underline underline-offset-2 text-blue-500">
                    <Link
                      href={cert.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
