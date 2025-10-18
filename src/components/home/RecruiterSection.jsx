"use client";

import React from "react";
import Image from "next/image";

const RecruitersSection = () => {
  // ✅ List all 44 logo image paths from /public/logos, excluding logo13 and logo15
  const logos = Array.from({ length: 44 }, (_, i) => `/logos/logo${i + 1}.png`)
    .filter((_, index) => index + 1 !== 13 && index + 1 !== 15); // Remove logo13.png and logo15.png

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* ✅ Section Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          INDIRA DEGREE OPENS DOORS. WIDE.
        </h2>

        {/* ✅ Description */}
        <p className="text-gray-700 text-sm max-w-5xl mx-auto leading-relaxed mb-12">
          At Indira College of Engineering & Management, there is a strong focus
          on preparing every student to be industry ready. With numerous
          recruiters visiting our campus each year, our graduates gain access to
          a network of opportunities, resources, and the support needed to excel
          in a rapidly evolving job market.
        </p>

        {/* ✅ Recruiter Logos Grid (7 per row on large screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-3 gap-y-4 place-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-28 h-16 bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Image
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                width={100}
                height={60}
                className="object-contain max-w-[80%] max-h-[60px] hover:grayscale-0 transition duration-300"
                loading={index < 7 ? "eager" : "lazy"}
                priority={index < 7} // ✅ Preload only first row for LCP
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitersSection;