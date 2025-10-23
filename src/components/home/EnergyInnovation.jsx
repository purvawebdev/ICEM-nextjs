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
    <div className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 leading-snug">
          At Indira College of Engineering & Management, you will discover an
          Energy that runs through Everything and Everyone.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {cards.map((card, index) => (
            <div key={index} className="group transition-all duration-300">
              {/* Image Section */}
              <div className="w-full h-60 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Text Section */}
              <h3 className="text-lg font-semibold mb-2 underline underline-offset-4">
                {card.title}
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                {card.description}
              </p>
              <p className="text-white font-medium hover:underline cursor-pointer flex items-center gap-2">
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
