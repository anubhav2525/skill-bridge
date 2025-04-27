import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="max-w-7xl w-full mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">Online courses</h1>
        <p className="text-gray-600">
          Nunc nulla. Ut leo. Pellentesque commodo eros a enim. Nunc egestas,
          augue at pellentesque laoreet.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md">
          Browse courses
        </button>
      </div>
      <div className="flex justify-center">
        <Image
          src="/assets/image/course.webp"
          width={400}
          height={400}
          alt="Illustration"
          className="rounded-lg object-contain"
        />
      </div>
    </section>
  );
};

export default AboutHero;
