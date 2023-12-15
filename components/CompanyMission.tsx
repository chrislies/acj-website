import React from "react";
import Button from "./Button";
import Link from "next/link";

const MILESTONES = [
  {
    number: "20+",
    title: "years in real estate experience",
  },
  {
    number: "771,800+",
    title: "sq ft in real estate transactions",
  },
];

const CompanyMission = () => {
  return (
    <section className="bg-[#F3F4F6]">
      <div className="bg-green-400d max-container p-10">
        <div className="bg-red-500d flex flex-row max-lg:flex-col w-full justify-center items-center">
          <div className="bg-blue-500d w-[40%] p-10 max-lg:py-5 max-lg:px-[20px] max-lg:flex max-lg:flex-row max-lg:justify-around max-lg:w-full max-lg:text-center max-sm:flex-col max-sm:items-center max-sm:gap-10">
            {MILESTONES.map((item, index) => (
              <div
                key={index}
                className="max-lg:flex max-lg:flex-col max-lg:w-[30%] max-sm:w-full"
              >
                <h1 className="text-green-50 font-bold text-[70px] leading-[65px] max-sm:leading-[45px] max-lg:text-[50px] max-sm:text-[40px]">
                  {item.number}
                </h1>
                <p className="text-slate-900 font-bold text-[25px] max-lg:text-[20px] max-sm:text-[17px] pl-[5px] mb-[50px] max-lg:pl-0 max-lg:mb-0 leading-8 max-lg:leading-[22px] max-sm:leading-[18px] tracking-wide">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-green-50d mx-20 max-lg:mx-0 w-[60%] max-lg:w-[70%] max-sm:w-full py-8 max-sm:pt-6 max-lg:flex max-lg:flex-col max-lg:items-center">
            <h2 className="pb-8 text-3xl tracking-tight max-sm:tracking-tighter max-lg:text-2xl max-sm:text-lg text-black">
              Our commitment to understanding and prioritizing our clients'
              unique needs has earned us their trust, establishing ACJ
              International Realty as a top brokerage firm for both commercial
              and residential properties.
            </h2>
            <div className="bg-red-500d w-fit flex flex-col gap-5">
              <Link href="/services">
                <Button
                  type="button"
                  title="What We Do"
                  icon=""
                  variant="btn_dark_green" // from globals.css
                ></Button>
              </Link>
              <Link href="/about">
                <Button
                  type="button"
                  title="Who We Are"
                  icon=""
                  variant="btn_dark_green" // from globals.css
                ></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyMission;
