import React from "react";

const page = () => {
  return (
    <section>
      <div
        className="flex justify-center bg-cover bg-no-repeat bg-center h-[30vh]"
        style={{ backgroundImage: 'url("nyc.jpeg")' }}
      >
        <div className="bg-slate-700/40 backdrop-blur-sm w-full h-full flex flex-col justify-center items-center">
          <h1 className="font-bold text-[50px] px-10 text-white">About Us</h1>
          <div className="border-b-4 border-white w-[8%]" />
        </div>
      </div>
      <div className="bg-slate-200 px-80 py-10">
        {/* flex flex-col items-center */}
        <p className="">
          ACJ International Realty is a certified New York State and City
          Minority Women Business Enterprise (MWBE) real estate consulting firm
          specializing real estate services. Established in 2018 by Julie Huang,{" "}
        </p>
      </div>
    </section>
  );
};

export default page;
