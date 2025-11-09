import { DownloadIcon } from "@/public/svg";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/heroImgs/heroBg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay (optional) */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative  z-10  flex flex-col lg:gap-16 lg:flex-row justify-center items-center h-full text-white container  lg:ml-8 pb-28">
        <div className="space-y-6">
          <div className="flex flex-col items-center space-y-8 gap-2 text-nowrap">
            <div className="global-payments-wrapper">
              <span className="global-payments-shadow text-2xl md:text-3xl lg:text-4xl">
                Global Payments.
              </span>
              <span className="global-payments-main text-2xl md:text-3xl lg:text-4xl">
                Global Payments.
              </span>
            </div>
            <div className="ring-8 md:ring-12 ring-[#D4D0FF] translate-x-3 h-max w-max rounded-md skew-x-[-6deg] hover:skew-x-[-4deg] transition-transform duration-300">
              {" "}
              {/* Tilted outer bg; adjust -6deg for more/less bend */}
              <div className="w-max p-1 md:p-3 px-10 rounded-lg border-4 border-white bg-primary font-bold text-2xl skew-x-[6deg">
                {" "}
                {/* Counter-skew inner to keep text straight */}
                Local Impact!
              </div>
            </div>
          </div>

          <p className="text-blue-1  max-w-[20rem]  text-base md:text-lg font-medium text-cente mx-auto lg:mx-0">
            Manilla Pay - your all inclusive crypto-powered finance co-pilot for
            utility bills, travel, airtime, and business payments
          </p>

          <div className=" font-semibold text-blue-1 text-xl">
            <h2 className="flex gap-3 items-center">
              <DownloadIcon /> <span>Download Manilla Pay App</span>
            </h2>

            <div className="flex gap-">
              <div className="relative w-52 h-20">
                <Image src={"/hero/googlePlay.png"} alt="apple store" fill />
              </div>
              <div className="relative w-52 h-20">
                <Image src={"/hero/appleStore.png"} alt="apple store" fill />
              </div>
            </div>

            <div className="hidden lg:block relative w-24 h-24 relative left-44">
              <Image src={"/heroImgs/Helix.png"} alt="apple store" fill />
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative w-14 h-14 hidden lg:block lg:left-160 top-18">
            <Image src={"/heroImgs/stone.png"} alt="" fill />
          </div>
          <div className="relative w-16 h-16 hidden lg:block lg:top-32 lg:left-64 z-50">
            <Image src={"/heroImgs/ThorusKnot.png"} alt="" fill />
          </div>
          <div className="relative w-100 h-200 lg:w-220 lg:h-136">
            <Image
              src={"/heroImgs/heromain.png"}
              alt="apple store"
              fill
              className="object-center"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-24 z-50 ">
        <Image
          src={"/heroImgs/heroline.png"}
          alt="hero line"
          fill
          className="object "
        />
      </div>
    </section>
  );
};

export default HeroSection;
