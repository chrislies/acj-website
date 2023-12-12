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
      <section className="bg-red-500d max-container padding-container flex items-center justify-center flex-col 2xl:pt-[0px] max-2xl:py-[330px] max-xl:py-[0px] max-lg:pt-[100px] max-md:pt-[100px] max:-sm:py-[0px] pb-[100px] h-screen">
        <div className="heroTextBox px-[40px] py-[25px] max-sm:px-[25px] max-sm:py-[20px] 2xl:mb-[70px] 2xl:mr-[550px] max-2xl:mb-[75px] max-2xl:mr-[460px] max-xl:mb-[140px] max-xl:mr-[300px] max-lg:mb-[auto] max-lg:mr-[auto] rounded-3xl shadow-3xl flex justify-center flex-col text-white backdrop-blur-sm bg-slate-800/90 max-sm:bg-slate-800/40">
          <h1 className="font-bold 2xl:text-5xl max-2xl:text-4xl max-xl:text-3xl max-sm:text-2xl text-center max-sm:tracking-tighter max-sm:leading-[22px]">
            <span>
              Global Vision,
              <br></br>
              Local Wisdom,
              <br></br>
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b max-sm:bg-gradient-to-t from-yellow-400 to-yellow-600">
              Your Perfect Real Estate Partner.
            </span>
          </h1>
          <br></br>
          <p className="px-4 max-2xl:pt-3 max-xl:pt-0 max-w-prose 2xl:text-lg max-2xl:text-lg max-xl:text-base max-sm:text-base max-sm:p-0 max-sm:leading-5 tracking-wider max-sm:tracking-tight max-sm:font-semibold">
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
          <span className="flex justify-end max-sm:justify-center">
            <Link href="/services">
              <button className="flex flex-row items-center gap-3 rounded-lg bg-yellow-600 hover:bg-[#d79c09] border border-yellow-900 px-6 py-2 text-white text-base tracking-wide font-semibold">
                Learn More
                <span>
                  <Image
                    src={"/right-arrow.svg"}
                    alt={"Learn More"}
                    width={20}
                    height={20}
                  />
                </span>
              </button>
            </Link>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Hero;
