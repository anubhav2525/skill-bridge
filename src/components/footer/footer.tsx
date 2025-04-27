import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-black text-gray-300 px-6 md:px-20 py-16 z-[100]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className="space-y-4 grid col-span-2 md:col-span-1">
          <h2 className="text-2xl font-bold text-white">
            EduCourse<span className="text-blue-500">.</span>
          </h2>
          <p className="text-sm">
            Empowering learners worldwide with industry-ready courses designed
            for your success. Learn. Grow. Succeed.
          </p>
          <div className="flex gap-2 mt-4">
            <Link href={"#"}>
              <Image
                src={"./assets/svg/instagram.svg"}
                height={40}
                width={40}
                className="cursor-pointer hover:scale-110 transition-transform duration-200"
                alt="Instagram"
              />
            </Link>
            <Link href={"#"}>
              <Image
                src={"./assets/svg/facebook.svg"}
                height={40}
                width={40}
                className="cursor-pointer hover:scale-110 transition-transform duration-200"
                alt="Instagram"
              />
            </Link>
            <Link href={"#"}>
              <Image
                src={"./assets/svg/linkedin.svg"}
                height={40}
                width={40}
                className="cursor-pointer hover:scale-110 transition-transform duration-200"
                alt="Instagram"
              />
            </Link>
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Courses</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Web Development</li>
            <li className="hover:underline cursor-pointer">UI/UX Design</li>
            <li className="hover:underline cursor-pointer">Data Science</li>
            <li className="hover:underline cursor-pointer">
              Digital Marketing
            </li>
            <li className="hover:underline cursor-pointer">
              Business Analytics
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Courses</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Web Development</li>
            <li className="hover:underline cursor-pointer">UI/UX Design</li>
            <li className="hover:underline cursor-pointer">Data Science</li>
            <li className="hover:underline cursor-pointer">
              Digital Marketing
            </li>
            <li className="hover:underline cursor-pointer">
              Business Analytics
            </li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">Press</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} EduCourse. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
