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
          <h1 className="font-bold text-6xl text-white leading-[70px]">
            About Us
          </h1>
          {/* <div className="border-b-4 border-white w-[12%]" /> */}
        </div>
      </div>
      <div className="gray-50 px-[550px] py-12 text-xl leading-8 tracking-tight">
        {/* flex flex-col items-center */}
        <p className="">
          <strong>ACJ International Realty LLC </strong>
          is a certified New York State and City MWBE (Minority Women Business
          Enterprise) real estate consulting firm with over 20 years of
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
    </section>
  );
};

export default page;
