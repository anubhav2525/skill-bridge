"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurTeachers = () => {
  const teamMembers = [
    {
      name: "Lainey Davidson",
      role: "Marketing Strategist",
      image: "/assets/image/teacher.webp",
      social: [
        { icon: "facebook", url: "#" },
        { icon: "instagram", url: "#" },
        { icon: "linkedin", url: "#" },
        { icon: "x", url: "#" },
      ],
    },
    {
      name: "Lainey Davidson",
      role: "Marketing Strategist",
      image: "/assets/image/teacher.webp",
      social: [
        { icon: "facebook", url: "#" },
        { icon: "instagram", url: "#" },
        { icon: "linkedin", url: "#" },
        { icon: "x", url: "#" },
      ],
    },
    {
      name: "Lainey Davidson",
      role: "Marketing Strategist",
      image: "/assets/image/teacher.webp",
      social: [
        { icon: "facebook", url: "#" },
        { icon: "instagram", url: "#" },
        { icon: "linkedin", url: "#" },
        { icon: "x", url: "#" },
      ],
    },
    {
      name: "Lainey Davidson",
      role: "Marketing Strategist",
      image: "/assets/image/teacher.webp",
      social: [
        { icon: "facebook", url: "#" },
        { icon: "instagram", url: "#" },
        { icon: "linkedin", url: "#" },
        { icon: "x", url: "#" },
      ],
    },
    {
      name: "Lainey Davidson",
      role: "Marketing Strategist",
      image: "/assets/image/teacher.webp",
      social: [
        { icon: "facebook", url: "#" },
        { icon: "instagram", url: "#" },
        { icon: "linkedin", url: "#" },
        { icon: "x", url: "#" },
      ],
    },
    {
      name: "Lainey Davidson",
      role: "Marketing Strategist",
      image: "/assets/image/teacher.webp",
      social: [
        { icon: "facebook", url: "#" },
        { icon: "instagram", url: "#" },
        { icon: "linkedin", url: "#" },
        { icon: "x", url: "#" },
      ],
    },
    {
      name: "Lainey Davidson",
      role: "Marketing Strategist",
      image: "/assets/image/teacher.webp",
      social: [
        { icon: "facebook", url: "#" },
        { icon: "instagram", url: "#" },
        { icon: "linkedin", url: "#" },
        { icon: "x", url: "#" },
      ],
    },
    {
      name: "Lainey Davidson",
      role: "Marketing Strategist",
      image: "/assets/image/teacher.webp",
      social: [
        { icon: "facebook", url: "#" },
        { icon: "instagram", url: "#" },
        { icon: "linkedin", url: "#" },
        { icon: "x", url: "#" },
      ],
    },
  ];
  return (
    <div className="pt-16 md:pt-28 lg:pt-32 pb-4 text-center w-full">
      <h2 className="text-3xl font-bold pb-2">Our Teachers</h2>
      <p className="text-lg md:text-xl pb-12 ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
        blanditiis?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-lg group"
          >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-10" />
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={500}
              className="object-cover grayscale w-full h-full transform group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 text-white z-20 transition-opacity duration-300">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="mb-4">{member.role}</p>
              <div className="flex gap-2 items-center">
                <Link href="#">
                  <Image
                    src={"/assets/svg/instagram.svg"}
                    alt=""
                    height={30}
                    width={30}
                  />
                </Link>
              
            
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeachers;
