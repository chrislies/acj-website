import Button from "@/components/Button";
import { SERVICES } from "@/constants";
import Link from "next/link";

const services = () => {
  return (
    <section className="py-10 lg:px-20 xl:px-49 flex flex-col items-center bg-[#F5F5F5] min-h-screen">
      {/* h-[calc(100vh-6rem)] */}
      {/* md:h-[calc(100vh-9rem)] */}
      <div className="flex flex-col items-center text-center">
        <h4 className="uppercase pb-5 text-4xl max-sm:text-3xl font-bold">
          Our
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-yellow-700/70">
            {" "}
            Services
          </span>
        </h4>
        <p className="2xl:w-[38vw] max-2xl:w-[42vw] max-lg:w-[57vw] max-md:w-[65vw] max-sm:w-[85vw] text-lg max-lg:text-base max-sm:text-sm tracking-tighter">
          At <span className="font-bold">ACJ International Realty LLC</span>, we
          pride ourselves on being your one-stop destination for all things real
          estate. Whether you're embarking on a new investment, seeking the
          perfect rental, or selling your property, we're here to turn your real
          estate goals into reality.
        </p>
        <div className="mt-5 flex items-center gap-2 ">
          <div className="border-b-2 w-[120px] border-yellow-700/70" />
          <div className="border-b-2 w-6  border-yellow-700/70 bg-[#FEFEFE]" />
          <div className="border-b-2 w-[120px] border-yellow-700/70" />
        </div>
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
        <button className="bg-green-600 hover:bg-green-500 rounded px-6 py-2 text-white text-lg">
          Get In Touch
        </button>
      </Link>
    </section>
  );
};

export default services;
