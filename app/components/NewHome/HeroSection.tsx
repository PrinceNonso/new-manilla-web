import { DownloadIcon } from "@/public/svg";
import Image from "next/image";
import React from "react";
import FeaturedMarquee from "../heromaquee";

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
        <div>
          <h1 className="text-5xl font-extrabold text-white relative">
            <span className="drop-shadow-[3px_3px_0_#000]">Global Payments.</span>
          </h1>

          <div className="px-8 py-3 w-max bg-[#2D2DFE] text-white font-semibold text-lg rounded-xl border border-white/40 shadow-[0_5px_0_#A8A8FF] hover:translate-y-1 transition">
            Local Impact!
          </div>

          <p className="text-blue-1  max-w-xs  text-base md:text-lg font-medium">
            Manilla Pay - your all inclusive crypto-powered finance co-pilot for utility bills,
            travel, airtime, and business payments
          </p>

          <div className=" font-semibold text-blue-1 text-xl">
            <h2 className="flex gap-3 items-center">
              <DownloadIcon /> <span>Download Manilla Pay App</span>
            </h2>

            <div className="flex gap-">
              <div className="relative w-52 h-24">
                <Image src={'/hero/googlePlay.png'} alt="apple store" fill />
              </div>
              <div className="relative w-52 h-24">
                <Image src={'/hero/appleStore.png'} alt="apple store" fill />
              </div>
            </div>

            <div className="relative w-36 h-36">
              <Image src={'/heroImgs/Helix.png'} alt="apple store" fill />
            </div>
          </div>
        </div>

        <div>
          <div className="relative w-14 h-14 hidden lg:block lg:left-160 top-18">
            <Image src={'/heroImgs/stone.png'} alt="" fill />
          </div>
          <div className="relative w-16 h-16 hidden lg:block lg:top-32 lg:left-64 z-50">
            <Image src={'/heroImgs/ThorusKnot.png'} alt="" fill />
          </div>
          <div className="relative w-100 h-200 lg:w-200 lg:h-136">
            <Image
              src={'/heroImgs/heromain.png'}
              alt="apple store"
              fill
              className="object-center"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-24 z-50 ">
        <Image src={'/heroImgs/heroline.png'} alt="hero line" fill className="object " />
      </div>
    </section>
  );
};

export default HeroSection;
