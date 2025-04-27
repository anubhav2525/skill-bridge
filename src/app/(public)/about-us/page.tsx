import AboutHero from "@/components/about-page/hero/hero";
import Stats from "@/components/about-page/stats/stats";
import Values from "@/components/about-page/values/values";
import Work from "@/components/about-page/work/work";
import Subscribe from "@/components/landing-page/subscribe/subscribe";
// import Image from "next/image";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="bg-white w-full">
      <AboutHero />
      <Work />
      <Stats />
      <Values />
      <Subscribe />
    </div>
  );
};

export default AboutUsPage;
