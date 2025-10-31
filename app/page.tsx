'use client';

import { Footer, Navbar } from './components';
import {
  HeroSection,
  WhyChooseUsSection,
  WhatMakesUsDifferentSection,
  OurProductsSection,
  OurServicesSection,
} from './components/NewHome';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <HeroSection />
        {/* <WhyChooseUsSection /> */}
        <WhatMakesUsDifferentSection />
        <OurProductsSection />
        <OurServicesSection />
        {/* <WhyChooseUsSection />
        <WhatMakesUsDifferentSection />
        <OurProductsSection />
        <OurServicesSection /> */}
        {/* <NewHeroSection />
        <NewAboutSection />
        <WhyChooseManilla />
        <LearnAboutUs />
        <OurServices />
        <WhyManiilaAppSection />
        <BlogSection />
        <MediaPartnersSection /> */}
        {/* <WhyChooseUsSection />
        <AboutSection />
        <ProductSection />
        <ServicesSection />
        <PartnersSection/>
        <NewsLetterSection/> */}
      </main>
      <Footer />
    </>
  );
}
