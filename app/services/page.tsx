import Button from "@/components/Button";
import { SERVICES } from "@/constants";
import Link from "next/link";

const services = () => {
  return (
    <section className="pb-24 lg:px-20 xl:px-49 flex flex-col items-center bg-[#F5F5F5]">
      {/* h-[calc(100vh-6rem)] */}
      {/* md:h-[calc(100vh-9rem)] */}
      <div className="mt-16 flex flex-col items-center text-center">
        <h4 className="uppercase pb-5 text-4xl font-bold">
          Our
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-yellow-700/70">
            {" "}
            Services
          </span>
        </h4>
        <p className="w-[38vw] text-lg tracking-tighter">
          At ACJ International Realty LLC, we pride ourselves on being your
          one-stop destination for all things real estate. Whether you're
          embarking on a new investment, seeking the perfect rental, or selling
          your property, we're here to turn your real estate goals into reality.
        </p>
        <div className="mt-5 flex items-center gap-2 ">
          <div className="border-b-2 w-[120px] border-yellow-700/70" />
          <div className="border-b-2 w-6  border-yellow-700/70 bg-[#FEFEFE]" />
          <div className="border-b-2 w-[120px] border-yellow-700/70" />
        </div>
      </div>
      <div className="max-container bg-red-500d p-10 grid grid-cols-3 grid-flow-row gap-[2rem] bg-red-500d">
        {SERVICES.map((service) => (
          <div className="bg-[#FEFEFE] border-d2 border-yellow-700/70 rounded-lg shadow-xl w-[320px] p-5">
            <h1 className="text-center text-xl font-bold">{service.title}</h1>
            <p className="bg-green-50d text-center tracking-tight px-4 pt-4">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
      <Link href="/contact">
        <button className="bg-green-600 hover:bg-green-700 rounded px-6 py-2 text-white text-lg">
          Get In Touch
        </button>
      </Link>
    </section>
  );
};

export default services;
