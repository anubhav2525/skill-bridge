import React from "react";
import Image from "next/image";

const Stats = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <span className="text-orange-500 font-semibold text-xs uppercase">
          Nullam Accumsan Lorem In Dui
        </span>
        <h3 className="text-3xl font-bold text-gray-900">
          Effective forms advertising internet web site
        </h3>
        <p className="text-gray-600">
          Over 92% of computers are infected with Adware and spyware. Such
          software is rarely accompanied by uninstall utility.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-8">
          <div>
            <h4 className="text-xl font-bold text-gray-900">14k</h4>
            <p className="text-gray-500 text-sm">Learners</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900">1.05k</h4>
            <p className="text-gray-500 text-sm">Courses</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900">52k</h4>
            <p className="text-gray-500 text-sm">Graduates</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/student.jpg"
          width={400}
          height={500}
          className="rounded-lg  object-contain"
          alt="Student"
        />
      </div>
    </section>
  );
};

export default Stats;
