import Image from "next/image";
import React from "react";

const CompanyMission = () => {
  return (
    <section className="bg-[#F3F4F6]">
      <div className="max-container p-10 flex flex-col items-center justify-center">
        <div className="flex flex-row w-full items-center">
          <div className="bg-blue-500 w-[40%] p-10">
            <h1 className="font-bold text-3xl">
              20+
              <br />
              <span className="text-slate-700 text-xl">
                years in real estate experience
              </span>
              <br />
              <br />
              771,800+
              <br />
              <span className="text-slate-700 text-xl">
                sq ft in real estate transactions
              </span>
            </h1>
          </div>
          <h2 className="bg-green-50 w-[70%] p-7 text-2xl text-black">
            Our commitment to understanding and prioritizing our clients' unique
            needs has earned us their trust, establishing ACJ International
            Realty as a top brokerage firm for both commercial and residential
            properties
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CompanyMission;
