import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="relative z-20 flex flex-1 flex-col items-center">
        <Image
          src="/bridge.JPG"
          alt="bridge"
          // fill={true}
          width={3830}
          height={2270}
          className="object-cover"
        />
        <div className="absolute p-10 rounded-xl left-20 top-1/4 w-fit text-white bg-slate-800/90">
          <h1 className="font-bold lg:text-5xl md:text-4xl sm:text-3xl sm:p-0 text-center">
            Global Vision,
            <br></br>
            Local Wisdom,
            <br></br>
            <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-600">
              Your Perfect Real Estate Partner.
            </h1>
          </h1>
          <br></br>
          <p className="px-4 pt-3 max-w-prose text-lg">
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
          <div className="flex justify-end">
            <Link href="/services">
              <Button
                type="button"
                title="Learn More"
                icon="https://www.svgrepo.com/show/533621/arrow-sm-right.svg"
                variant="btn_services" // from globals.css
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
