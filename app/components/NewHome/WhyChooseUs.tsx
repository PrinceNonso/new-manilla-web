import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { BsArrowUpRightCircle } from 'react-icons/bs';

const WhyChooseUs = () => {
  const Metrics = [
    {
      count: '10.2k+',
      title: 'Users',
    },
    {
      count: '27+',
      title: 'Countries',
    },
    {
      count: '24/7',
      title: 'Active Support',
    },
  ];
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12 md:py-14 lg:py-16">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto">
          <h2 className="rounded-full border w-max p-2 px-6 sm:p-3 sm:px-10 border-[#181635] text-[#181635] font-medium text-sm sm:text-base">
            Why Choose Us
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Image
                src={'/heroImgs/yellopad.png'}
                alt=""
                width={80}
                height={80}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0"
              />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center sm:text-left">
                Redefining the Way Canada Pays
              </h2>
            </div>
            <p className="text-gray-500 text-sm sm:text-base lg:text-xl max-w-2xl mx-auto lg:max-w-4xl">
              At Manilla Finance, we believe everyday payments should be instant, borderless, and
              built around your life and not the banks. That’s why we created a CEDEFI platform
              where crypto and fiat coexist seamlessly - we pay providers using fiat, and you pay us
              in crypto to access the same services with ease.{' '}
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-between xl:gap-x-8 lg:gap-x-12 xl:gap-x-36 py-8 sm:py-10 space-y-8 xl:space-y-0 w-full max-w-7xl mx-auto">
          <div className="flex-1 w-full space-y-4 sm:space-y-6 max-w-3xl mx-auto xl:mx-0">
            <h2 className="text-bleu text-xl sm:text-2xl font-bold flex items-center justify-center xl:justify-start gap-2 sm:gap-4">
              <span>Learn More About Us</span>{' '}
              <BsArrowUpRightCircle className="text-lg sm:text-xl" />
            </h2>
            <div className="border border-gray-300 bg-[#E2E2E242] tracking-wide rounded-xl text-[#777777] text-start p-4 sm:p-6 md:p-8 text-sm sm:text-base md:text-lg">
              <p className="">
                Founded on the principle of financial freedom, the Manilla Pay app brings the power
                of digital assets to everyday transactions. Whether you’re paying your utility bills
                or booking a vacation, we make it frictionless, fast, and future-proof.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xs md:text-xl text-center xl:text-left font-semibold whitespace-nowrap">
                Built for Canadian lifestyles. Engineered for the blockchain generation.
              </h3>
              <div className="flex flex-wrap justify-center xl:justify-start gap-3 sm:gap-4 items-stretch">
                {Metrics.map((m, i) => (
                  <div
                    key={i}
                    className="shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-xl p-4 sm:p-6 md:p-8 w-full sm:w-auto flex-1 min-w-[140px] max-w-sm basis-1/3"
                  >
                    <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-foreground mb-1 sm:mb-2 text-center xl:text-left">
                      {m.count}
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground text-center xl:text-left">
                      {m.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full items-center justify-center">
              <Button
                variant="outline"
                className="h-12 sm:h-14 md:h-16 px-4 sm:px-6 w-full sm:w-auto flex-shrink-0"
              >
                Download Manilla Pay App
              </Button>
              <div className="flex gap-2 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
                <div className="relative w-32 h-10 sm:w-40 sm:h-12 md:w-44 md:h-14 cursor-pointer transition-all duration-300 hover:scale-105 flex-shrink-0">
                  <Image
                    src="/googleplay.png"
                    alt="Google Play Store"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-36 h-10 sm:w-44 sm:h-12 md:w-48 md:h-14 cursor-pointer transition-all duration-300 hover:scale-105 flex-shrink-0">
                  <Image
                    src="/applestore.png"
                    alt="Apple App Store"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full aspect-[4/3] sm:aspect-square max-w-md mx-auto xl:mx-0 rounded-lg cursor-pointer overflow-hidden">
            <Image
              src="/heroImgs/video.png"
              alt="Video Preview"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 1280px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
