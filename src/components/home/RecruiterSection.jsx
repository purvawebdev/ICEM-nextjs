"use client";

import React from "react";
import Image from "next/image";

const RecruitersSection = () => {
  // ✅ Load all 44 logos, excluding 13 & 15
  const allLogos = Array.from({ length: 44 }, (_, i) => `/logos/logo${i + 1}.png`).filter(
    (_, index) => ![35, 37 , 13].includes(index + 1)
  );

  // ✅ Remove logos 18 & 25 (they are behind the circle)
  const mainLogos = allLogos.filter((_, index) => ![17, 24].includes(index));

  // ✅ Add logos 18 & 25 to the end (last row)
  const reorderedLogos = [...mainLogos, allLogos[17], allLogos[24]];

  return (
    <div className="bg-gray-50 py-16 relative overflow-hidden">
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

        {/* ✅ Recruiter Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-3 gap-y-7 place-items-center relative">
          {reorderedLogos.map((logo, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-28 h-16 bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 ${
                [17, 24].includes(index) ? "invisible" : ""
              }`}
            >
              <Image
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                width={100}
                height={60}
                className="object-contain max-w-[80%] max-h-[60px] hover:grayscale-0 transition duration-300"
                loading={index < 7 ? "eager" : "lazy"}
                priority={index < 7}
              />
            </div>
          ))}

          {/* ✅ Center Circle Badge */}
          <div className="absolute top-[49%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[linear-gradient(145deg,_#278da4_0%,_#003c84_90%)] text-white flex flex-col items-center justify-center shadow-xl border-[4px] border-[#D4AF37]">
              <p className="text-xl md:text-2xl font-bold">350+</p>
              <p className="text-sm md:text-base font-medium">Corporates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitersSection;
