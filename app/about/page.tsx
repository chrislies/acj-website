import { SERVICES } from "@/constants";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section>
      <div
        className="flex justify-center bg-cover bg-no-repeat bg-center h-[30vh]"
        style={{ backgroundImage: 'url("nyc.jpeg")' }}
      >
        <div className="bg-slate-700/40 backdrop-blur-sm w-full h-full flex flex-col justify-center items-center">
          {/* <div className="border-b-4 border-white w-[11%]" /> */}
          <h1 className="font-bold lg:text-6xl max-lg:text-5xl max-sm:text-4xl text-white leading-[70px]">
            About Us
          </h1>
          {/* <div className="border-b-4 border-white w-[12%]" /> */}
        </div>
      </div>
      <div className="gray-50 2xl:px-[500px] max-2xl:px-[350px] max-xl:px-[250px] max-lg:px-[150px] max-md:px-[120px] max-sm:px-[40px] py-12 text-xl leading-8 tracking-tight flex flex-col justify-center items-center">
        {/* flex flex-col items-center */}
        <p className="">
          <strong>ACJ International Realty LLC </strong>
          is a certified New York State and City Minority Women Business
          Enterprise (MWBE) real estate consulting firm with over 20 years of
          experience. Our specialization in property management, leasing,
          acquisitions, and strategic development follows a client-centric
          approach tailoring services to individual needs.{" "}
        </p>
        <br />
        <p>
          Established in 2015, Julie Huang embarked on a mission to assist
          foreign-based companies in expanding their presence in New York and
          New Jersey. As we continue to grow, our commitment remains on
          delivering exceptional real estate services and solutions, creating
          lasting partnerships, and contributing positively to the growth and
          success of our clients in the ever-changing real estate landscape.
        </p>
      </div>
      <div className="border-b-2 border-slate-300 w-[90vw] mx-auto block" />
      <div className="companyCertificates mt-12 flex flex-col items-center text-center">
        <h4 className="pb-5 text-4xl max-sm:text-3xl font-bold">
          Company Certifications  
        </h4>
        <p className="2xl:w-[38vw] max-2xl:w-[42vw] max-lg:w-[57vw] max-md:w-[65vw] max-sm:w-[85vw] text-lg max-lg:text-base max-sm:text-sm tracking-tighter">
          At <span className="font-bold">ACJ International Realty LLC</span>, we
          pride ourselves on being your one-stop destination for all things real
          estate. Whether you're embarking on a new investment, seeking the
          perfect rental, or selling your property, we're here to turn your real
          estate goals into reality.
        </p>
      </div>
      <div className="bg-red-500d p-10 grid 2xl:grid-cols-3 max-2xl:grid-cols-3 max-md:grid-cols-2 max-sm:flex max-sm:flex-col grid-flow-row 2xl:gap-[2rem] max-2xl:gap-[25px] max-xl:gap-[22px] max-lg:gap-[20px] max-md:gap-[25px] max-sm:gap-[20px]">
        {SERVICES.map((service) => (
          <div className="bg-[#FEFEFE] border-d2 border-yellow-700/70 rounded-lg shadow-xl 2xl:w-[320px] max-2xl:w-[310px] max-xl:w-[250px] max-lg:w-[220px] max-md:w-[260px] p-5 ">
            <h1 className="text-center text-xl font-bold">{service.title}</h1>
            <p className="bg-green-50d text-center 2xl:tracking-tight max-2xl:tracking-tight max-xl:tracking-tighter max-lg:tracking-[-.05em] 2xl:px-4 max-2xl:px-[16px] max-xl:px-[8px] max-lg:px-[1px] max-md:px-[10px] pt-4">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
      <Link href="/contact">
        <button className="bg-green-600 hover:bg-green-700 rounded px-6 py-2 mb-12 text-white text-lg">
          Get In Touch
        </button>
      </Link>
    </section>
  );
};

export default page;
