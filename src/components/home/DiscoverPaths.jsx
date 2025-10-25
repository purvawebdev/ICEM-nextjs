"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const DiscoverPaths = () => {
  // ✅ Course data
  const courses = [
    { name: "Computer Engineering", img: "/Comp.jpg", link: "/programs/computer-engineering" },
    { name: "Mechanical Engineering", img: "/Mech.jpg", link: "/programs/mechanical-engineering" },
    { name: "Artificial Intelligence and Data Science", img: "/AIDS1.jpg", link: "/programs/ai-ds" },
    { name: "Electronics and Telecommunication", img: "/Entc.jpg", link: "/programs/entc" },
    { name: "Information Technology", img: "/IT1.jpg", link: "/programs/it" },
    { name: "MBA", img: "/IBBAMBA1.jpg", link: "/programs/mba" },
    { name: "MCA", img: "/IBCAMCA.jpg", link: "/programs/mca" },
    { name: "M-Tech in Mechanical Engineering", img: "/ICEM_Banner.jpg", link: "/programs/mtech-mech" },
    { name: "M-Tech in Computer Science", img: "/ICEM_Banner.jpg", link: "/programs/mtech-comp" },
  ];

  return (
    <div className="bg-gray-50 py-10 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 text-center sm:text-left">
          Discover Your Path to Success
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {courses.map((course, index) => (
            <Link
              key={index}
              href={course.link}
              className="relative bg-white shadow-md overflow-hidden group rounded-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Course Image */}
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                  src={course.img}
                  alt={course.name}
                  fill
                  className="object-cover group-hover:brightness-75 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>

              {/* Overlay Title */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto text-center text-white font-semibold text-xs sm:text-sm md:text-base px-2 py-1 bg-black/40 backdrop-blur-sm rounded-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] group-hover:bg-black/60 transition-all duration-300">
                {course.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPaths;
