import { SERVICES } from "@/constants";

const services = () => {
  return (
    <section className="mb-24 lg:px-20 xl:px-49 h-[calc(100vh)]   flex flex-col items-center bg-gray-500">
      {/* h-[calc(100vh-6rem)] */}
      {/* md:h-[calc(100vh-9rem)] */}
      <div className="flex flex-col text-center justify-center">
        <h4 className="mt-16 text-4xl font-bold">Our Services</h4>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          {SERVICES.map((service) => (
            <div className="bg-blue-500 m-10">
              {service.title}
              <div className="bg-green-50 p-10">{service.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default services;
