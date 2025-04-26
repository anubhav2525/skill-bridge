import Clients from "@/components/landing-page/clients/clients";
import FeaturedCategory from "@/components/landing-page/featured-category/featured-category";
import FeaturedCourse from "@/components/landing-page/featured-course/featured-course";
import Hero from "@/components/landing-page/hero/hero";
import OurTeachers from "@/components/landing-page/our-teachers/our-teachers";
import Reviews from "@/components/landing-page/reviews/reviews";
import Subscribe from "@/components/landing-page/subscribe/subscribe";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <Hero/>
      <Clients />
      <FeaturedCategory/>
      <FeaturedCourse />
      <OurTeachers />
      <Reviews />
      <Subscribe />
    </section>
  );
};

export default HomePage;
