import React from "react";
import CourseCard from "@/components/course-card/course-card";
import { courses } from "@/constants/courses";

const FeaturedCourse = () => {
  return (
    <section className="w-full py-16 md:py-28 lg:py-32 bg-slate-100">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center pb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Featured Course
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our top-rated courses and enhance your skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;
