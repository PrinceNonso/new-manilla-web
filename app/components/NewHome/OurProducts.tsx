import Image from "next/image";
import React from "react";
import ManillaPaySection from "../products";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const OurProducts = () => {
  const carouselData = [
    {
      smallHeader: "Manilla Pay",
      mainHeader: "The Power to Pay Anything. Anytime. In Crypto.",
      description:
        "Manilla Pay is your digital bridge to real-world services. From hydro and gas bills to cable TV subscriptions and internet top-ups, all can be paid directly from your Manilla wallet using crypto or debit card.",
      features: [
        "Real-time utility and service payments",
        "USDT, BTC, ETH, and stablecoins supported",
        "Automated recurring payment features",
        "Built-in transaction dashboard",
      ],
      buttonLabel: "Start Using Manilla Pay",
      imageSrc: "/mobsvg.svg",
      imageAlt: "Manilla Pay Mobile App",
      borderColor: "blue",
      buttonBgColor: "darkgr",
    },
    {
      smallHeader: "Crypto Debit Cards",
      mainHeader: "Spend Crypto Like Cash – Without the Complexity",
      description:
        "Our upcoming Manilla Crypto Debit Card links your digital wallet to everyday life. Buy groceries, pay for gas, shop online, or withdraw cash - no need to convert, wait, or worry.",
      features: [
        "Instant crypto-to-fiat conversion",
        "Accepted at all Mastercard-enabled terminals",
        "ATM withdrawals supported",
        "Travel-ready and globally accepted",
      ],
      buttonLabel: "Join Waitlist Now",
      imageSrc: "/manilla-card.png",
      imageAlt: "Manilla Crypto Debit Card",
      borderColor: "yello",
      buttonBgColor: "darkgr",
    },
    {
      smallHeader: "The Manilla Token",
      mainHeader: "Fueling the Future of Smart Spending",
      description:
        "MNLA is the utility token at the heart of the Manilla ecosystem. It does more than just power transactions - it rewards you for participation and unlocks deeper access.",
      subdes: "Why Hold MNLA?",
      features: [
        "Pay for services at discounted rates",
        "Earn tokens through referrals and app usage",
        "Stake for future rewards",
        "Use for cross-border remittances and savings",
      ],
      buttonLabel: "Start Using Manilla Pay",
      imageSrc: "/coinBg.png",
      imageAlt: "Manilla Token MNLA",
      borderColor: "yello",
      buttonBgColor: "plain",
      bgBody: "blueBg",
      smallHeaderColor: "white",
      mainHeaderColor: "white",
      descriptionColor: "white/20",
      subdesColor: "white/20",
      featuresColor: "white/50",
      buttonTextColor: "dark",
    },
  ];

  return (
    <section className="container px-4">
      <div className="container bg-dark-1 text-white rounded-2xl py-8">
        <div className="flex flex-col items-center justify-center py-8 space-y-6">
          <div className="relative w-48 h-14 hover:scale-105 cursor-pointer transition-all duration-300 ease-linear">
            <Image src={"/OurProdBtn.png"} alt="" fill />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Manilla Products
          </h2>
          <div className="text-center lg:max-w-254 text-sm md:text-lg text-[#E5E5E5] tracking-wide">
            <p>
              Manilla offers a suite of innovative solutions designed to make
              everyday financial transactions seamless and secure. Each product
              is built for speed, reliability, and convenience, empowering users
              across Africa and beyond to stay connected and in control of their
              finances.
            </p>
          </div>
        </div>

        <div className="w-full max-w-7x mx-auto">
          <Carousel
            className="w-full"
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}>
            <CarouselContent className="pb-2">
              {carouselData.map((d, i) => (
                <CarouselItem key={i} className="basis-full">
                  <ManillaPaySection {...d} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselDots />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
