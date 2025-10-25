"use client";

import React from "react";
import Image from "next/image";

const EnergyInnovation = () => {
  const cards = [
    {
      title: "Get Industry-ready",
      description:
        "We ensure every graduate is industry-ready through cutting-edge curriculum, innovation labs, and strong industry collaborations that keep students aligned with the latest technologies and trends.",
      img: "/IndustryReady.jpg",
    },
    {
      title: "Research from Day One",
      description:
        "At Indira College, research is a way of life, supported by state-of-the-art facilities, experienced faculty, and collaborations that empower students to solve real-world challenges.",
      img: "/Researchfromday1.jpg",
    },
    {
      title: "Corporate Partnerships & Recruitment Drive",
      description:
        "We have established strong, lasting relationships with a diverse portfolio of national and multinational corporations. Benefit from exclusive recruitment drives, on-campus placements, and direct access to sought-after employers actively seeking ICEM talent.",
      img: "/CorporatePartnership.jpg",
    },
  ];

  return (
    <div className="bg-primary text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* ✅ Heading */}
        <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-14 leading-snug">
          At Indira College of Engineering & Management, you will discover an{" "}
          <span className="block sm:inline">Energy that runs through Everything and Everyone.</span>
        </h2>

        {/* ✅ Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-left">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group transition-all duration-300 bg-primary/5 rounded-lg p-2 sm:p-3 md:p-0"
            >
              {/* Image Section */}
              <div className="w-full h-44 sm:h-52 md:h-60 rounded-lg mb-3 sm:mb-4 overflow-hidden relative">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Text Section */}
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 underline underline-offset-4">
                {card.title}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                {card.description}
              </p>
              <p className="text-white font-medium hover:underline cursor-pointer flex items-center gap-2 text-sm sm:text-base">
                Know more <span>➜</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnergyInnovation;
