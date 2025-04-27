"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const FeaturedCategory = () => {
  const categories = [
    { name: "Technology", count: 497 },
    { name: "Health and Wellness", count: 763 },
    { name: "Travel", count: 684 },
    { name: "Finance", count: 451 },
    { name: "Education", count: 433 },
    { name: "Food and Beverage", count: 463 },
    { name: "Fashion", count: 951 },
    { name: "Home and Garden", count: 194 },
    { name: "Sports", count: 425 },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-28 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Featured <br /> category
          </h2>
          <p className="text-gray-500 mb-6">
            Since wire-frame renderings are relatively simple and fast to
            calculate, they are often used in cases
          </p>
          <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-black transition">
            Explore more <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-xl px-6 py-4 shadow-sm hover:shadow-md hover:bg-white transition border"
            >
              <h3 className="text-md font-semibold text-gray-900 truncate">
                {cat.name}
              </h3>
              <p className="text-sm text-gray-500">{cat.count} students</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategory;
