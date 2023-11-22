import Image from "next/image";
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
      <div className="bg-red-400d max-container p-10 flex flex-col items-center justify-center">
        <div className="bg-red-500d flex flex-row w-full items-center ">
          <div className="bg-blue-500d w-[40%] p-10">
            {MILESTONES.map((item, index) => (
              <div key={index}>
                <h1 className="text-green-50 font-bold text-[70px]">
                  {item.number}
                </h1>
                <p className="text-slate-900 font-bold text-[25px] pl-[6px] mb-[50px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-green-50d mx-20 w-[60%] py-8">
            <h2 className="pb-8 text-3xl text-black">
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
                  title="Our History"
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
