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
    <section className="contain mx-auto py-14">
      <div className="flex flex-col  items-center  justify-center text-center containe">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="rounded-full border w-max p-3 px-10 border-[#181635] text-[#181635] font-medium">
            Why Choose Us
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <Image src={'/heroImgs/yellopad.png'} alt="" width={80} height={80} />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                Redefining the Way Canada Pays
              </h2>
            </div>
            <p className="text-gray-500 lg:text-xl lg:max-w-[67rem]">
              At Manilla Finance, we believe everyday payments should be instant, borderless, and
              built around your life and not the banks. That’s why we created a CEDEFI platform
              where crypto and fiat coexist seamlessly - we pay providers using fiat, and you pay us
              in crypto to access the same services with ease.{' '}
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justfy-between lg:gap-x-36 py-10 space-y-4">
          <div className="flex-1 max-w-3xl mx-auto w-full space-y-4">
            <h2 className="text-bleu text-2xl font-bold flex items-center gap-4">
              <span>Learn More About Us</span> <BsArrowUpRightCircle />
            </h2>
            <div className="border border-gray-300 bg-[#E2E2E242] tracking-wid rounded-xl md:text-2xl text-[#777777] text-start p-8">
              <p className="">
                Founded on the principle of financial freedom, the Manilla Pay app brings the power
                of digital assets to everyday transactions. Whether you’re paying your utility bills
                or booking a vacation, we make it frictionless, fast, and future-proof.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base md:text-lg text-nowrap font-semibold">
                Built for Canadian lifestyles. Engineered for the blockchain generation.
              </h3>
              <div className="flex gap-2 items-center text-nowrap">
                {Metrics.map((m, i) => (
                  <div
                    key={i}
                    className="shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-xl p-8 w-full max-w-sm shrink-"
                  >
                    {' '}
                    {/* Uniform shadow around all corners, same shape/size */}
                    <h2 className="font-bold text-xl text-foreground mb-2">
                      {' '}
                      {/* Consistent size: text-xl for h2 */}
                      {m.count}
                    </h2>
                    <p className="text-lg text-muted-foreground ">
                      {' '}
                      {/* Consistent size: text-lg for p */}
                      {m.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-0 w-full items-center justify-center">
              <Button
                variant="outline"
                className="h-16 px-6  shrink-0" // Match image height (h-20), add padding for width balance
              >
                Download Manilla Pay App
              </Button>
              <div className="relative w-44 h-20 cursor-pointer transition-all duration-300 hover:scale-105 p-0 shrink-0">
                <Image
                  src="/googleplay.png"
                  alt="Google Play Store"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-48 h-20 cursor-pointer transition-all duration-300 hover:scale-105 p-0 shrink-0">
                <Image
                  src="/applestore.png"
                  alt="Apple App Store"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
                  </div>
                  
                  
          <div className="flex-1 relative w-160 h-120 rounded-lg cursor-pointer shrink-0 ">
            <Image
              src="/heroImgs/video.png"
              alt="Apple App Store"
              fill
              className="object-coverrounded-xl!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
