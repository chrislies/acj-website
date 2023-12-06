import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center bg-gray-900"
      style={{ backgroundImage: 'url("bridge.JPG")' }}
    >
      {/* bg-red-500/30 */}
      <section className="max-container flex items-center justify-center flex-col pt-[0px] pb-[100px] h-screen ">
        <div className="px-[40px] py-[25px] lg:mb-[70px] lg:mr-[550px] md:mr-[0px] rounded-3xl shadow-3xl flex justify-center flex-col text-white backdrop-blur-sm bg-slate-800/90">
          <h1 className="font-bold lg:text-5xl md:text-4xl sm:text-3xl sm:p-0 text-center">
            Global Vision,
            <br></br>
            Local Wisdom,
            <br></br>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-600">
              Your Perfect Real Estate Partner.
            </span>
          </h1>
          <br></br>
          <p className="px-4 pt-3 max-w-prose text-lg tracking-wider">
            ACJ International Realty LLC offers expert consulting services in
            the commercial real estate sector. We specialize in assisting
            international companies in expanding their business within New York
            and New Jersey.
            {/* With over 18 years of experience in the real estate industry, ACJ
            International Realty LLC offers expert consulting services in the
            commercial real estate sector. We specialize in assisting
            international companies in expanding their business within New York
            and New Jersey. Our commitment to understanding and prioritizing our
            clients' unique needs has earned us their trust, establishing ACJ
            International Realty as a top brokerage firm for both commercial and
            residential properties. */}
          </p>
          <br></br>
          <span className="flex justify-end">
            <Link href="/services">
              <Button
                type="button"
                title="Learn More"
                icon="https://www.svgrepo.com/show/533621/arrow-sm-right.svg"
                variant="btn_services" // from globals.css
              />
            </Link>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Hero;
