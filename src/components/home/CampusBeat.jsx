"use client";

import Image from "next/image";
import React from "react";

const CampusBeat = () => {
  return (
    <div className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          The Campus Beat
        </h2>

        <p className="text-gray-700 text-lg max-w-5xl leading-relaxed mb-10">
          From celebrity talks to Lit Fests and interactions with industry
          icons, our campus pulses with energy, big ideas, and unforgettable
          moments — making student life dynamic, buzzing, inspiring, and full of
          meaningful connections & opportunities.
        </p>
      </div>

      {/* ✅ Horizontal marquee for wide image */}
      <div className="relative w-full overflow-hidden h-[65vh]">
        <div className="flex w-[1200%] animate-smoothScroll relative h-full">
          {/* Two identical images for seamless looping */}
          <div className="relative w-1/2 h-full">
            <Image
              src="/newnewMarque.jpg"
              alt="Campus Life"
              fill
              className="object-cover"
              quality={100}
              priority
              unoptimized={true}
            />
          </div>
          <div className="relative w-1/2 h-full">
            <Image
              src="/newnewMarque.jpg"
              alt="Campus Life duplicate"
              fill
              className="object-cover"
              quality={100}
              priority
              unoptimized={true}
            />
          </div>
        </div>
      </div>

      {/* ✅ Animation Styles */}
      <style jsx>{`
        @keyframes smoothScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-smoothScroll {
          animation: smoothScroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CampusBeat;
