import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

// Main Hero Component with customizable image size
export const PaymentHero = ({
  title = 'The Power to Pay Anything. Anytime. In Crypto.',
  subtitle = 'Manilla Pay is your digital bridge to real-world services. From hydro and gas bills to cable TV subscriptions and internet top-ups, all can be paid directly from your Manilla wallet using crypto or debit card.',
  features = [
    'Real-time utility and service payments',
    'USDT, BTC, ETH, and stablecoins supported',
    'Automated recurring payment features',
    'Built-in transaction dashboard',
  ],
  buttonText = 'Start Using Manilla Pay',
  brandName = 'Manilla Pay',
  heroImage = '/hero-image.png',
  imageSize = { width: 600, height: 600 },
  onButtonClick = () => console.log('Button clicked'),
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl p-12 relative overflow-hidden">
          {/* Decorative gradient orbs */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full blur-3xl opacity-40"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
                {brandName}
              </h1>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {title}
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">{subtitle}</p>

              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onButtonClick}
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {buttonText}
              </button>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative flex justify-center items-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={heroImage}
                  alt="Payment app hero"
                  width={imageSize.width}
                  height={imageSize.height}
                  className="drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: 'The Power to Pay Anything. Anytime. In Crypto.',
      subtitle:
        'Manilla Pay is your digital bridge to real-world services. From hydro and gas bills to cable TV subscriptions and internet top-ups, all can be paid directly from your Manilla wallet using crypto or debit card.',
      brandName: 'Manilla Pay',
      heroImage: '/hero-image-1.png',
      imageSize: { width: 500, height: 500 },
      features: [
        'Real-time utility and service payments',
        'USDT, BTC, ETH, and stablecoins supported',
        'Automated recurring payment features',
        'Built-in transaction dashboard',
      ],
    },
    {
      id: 2,
      title: 'Seamless Crypto Payments for Everyone.',
      subtitle:
        'Experience the future of payments with our secure and instant crypto payment platform. Make transactions effortlessly across borders.',
      brandName: 'Manilla Pay',
      heroImage: '/hero-image-2.png',
      imageSize: { width: 600, height: 600 },
      features: [
        'Instant cross-border transactions',
        'Multi-currency wallet support',
        'Bank-level security encryption',
        '24/7 customer support',
      ],
    },
    {
      id: 3,
      title: 'Your Gateway to Financial Freedom.',
      subtitle:
        'Pay bills, send money, and manage your finances all in one place with blockchain technology. Join thousands of satisfied users.',
      brandName: 'Manilla Pay',
      heroImage: '/hero-image-3.png',
      imageSize: { width: 550, height: 550 },
      features: [
        'No hidden fees or charges',
        'Lightning-fast transactions',
        'User-friendly mobile app',
        'Rewards and cashback programs',
      ],
    },
  ];

  return (
    <Carousel
      className="w-full"
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <PaymentHero
              title={slide.title}
              subtitle={slide.subtitle}
              brandName={slide.brandName}
              heroImage={slide.heroImage}
              imageSize={slide.imageSize}
              features={slide.features}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}