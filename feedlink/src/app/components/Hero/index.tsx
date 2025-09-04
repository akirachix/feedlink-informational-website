'use client';

import Image from "next/image";
import Button from "../../shared-components/Button";
import Link from "next/link";

export default function HeroSection() {
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.yourapp.feedlink";

  return (
    <section id="home" className="w-full min-h-[435px] flex items-center bg-[var(--primary-color)] px-0">
      <div className="w-full max-w-[1550px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-20 py-6 md:py-0">

        {}
        <div className="flex-1 w-full flex flex-col items-center justify-center mt-6 md:mt-0 mb-10 md:mb-0 md:order-2">
          <div className="bg-white rounded-full border-[5px] sm:border-[6px] border-orange-400 flex items-center justify-center w-[180px] h-[180px] xs:w-[230px] xs:h-[230px] sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px] lg:w-[370px] lg:h-[370px]">
            <Image
              src="/images/basket.png"
              alt="Basket"
              width={195}
              height={195}
              className="object-contain w-[120px] h-[120px] xs:w-[160px] xs:h-[160px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[290px] lg:h-[290px]"
              priority
            />
          </div>
        </div>

        {}
        <div className="flex-1 w-full max-w-lg sm:max-w-xl md:max-w-none md:order-1 text-center md:text-left px-4 xs:px-6 md:px-0 mx-auto md:mx-0">
          <div className="md:items-start">
            <h1 className="text-white font-semibold text-[2rem] xs:text-[2.1rem] sm:text-[2.2rem] md:text-5xl lg:text-6xl leading-tight lg:leading-[1.2] mb-6 mt-6 md:mt-14">
              Transform Food Wastage Into{" "}
              <span className="text-orange-400 font-bold">Impact!</span>
            </h1>
            <p className="text-white text-base xs:text-lg sm:text-xl md:text-lg lg:text-3xl font-normal mb-8 lg:mb-10 leading-relaxed">
              Reduce waste, feed communities, and create sustainable value chains.
            </p>
          </div>

          {}
          <div className="flex flex-wrap gap-4 xs:gap-6 sm:gap-8 mb-8 justify-center md:justify-start">
            <Link href="#contacts" passHref >
              <Button variant="primary">
                Start Reducing Waste
              </Button>
            </Link>

            <Link href="/how-it-works" passHref>
              <Button variant="secondary">
                Learn How It Works
              </Button>
            </Link>
          </div>

          {}
          <div className="flex items-center justify-center md:justify-start gap-1 mt mb-16 md:mb-">
            <span className="text-white text-base xs:text-lg">Download on Google</span>
            <a
              href={playStoreLink}
              target="_blank"
              className="flex items-center ml-2 text-base xs:text-lg font-bold text-white hover:text-green-300 transition-colors duration-200"
            >  
              Play <span className="text-green-300 ml-1">Store</span>
              <Image
                src="/images/playstore.png"
                alt="Play Store"
                width={28}
                height={28}
                className="ml-1"
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}