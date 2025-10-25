"use client";

import React from "react";
import Image from "next/image";

const ExploreSection = () => {
  const cards = [
    { title: "NAAC", img: null },
    { title: "NIRF", img: null },
    { title: "QS Ranking", img: null },
    { title: "World Ranking", img: null },
  ];

  return (
    <div className="relative px-6 pt-12 pb-6 overflow-hidden">
      {/* ✅ Floating Animated Chanakya GIF with mirroring */}
      <div className="absolute top-0 right-20 h-[12vh] w-[40vw] animate-slideMirror pointer-events-none ">
        <video
          src="/chanakya.webm"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-contain"
        />
      </div>

      {/* ✅ Centered Content with max-width constraint */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Section */}
        <div>
          <div className="bg-white/90">
            <h2 className="text-2xl font-bold text-gray-900 leading-snug">
              Explore Your Potential with
            </h2>
            <h2 className="text-2xl font-bold text-secondary mb-4 leading-snug">
              INDIRA COLLEGE OF ENGINEERING & MANAGEMENT
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Located near Pune, Indira College of Engineering & Management, one
              of the leading NAAC accredited engineering institutions, offers a
              world of learning to help you achieve your goals. Choose from
              industry-led programs, learn from outstanding faculty in
              state-of-the-art facilities, and access limitless placement
              opportunities with top campus recruiters. Join a vibrant community
              of students with ambitions as big as yours.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-lg flex items-center justify-center h-28"
            >
              {card.img ? (
                <Image
                  src={card.img}
                  alt={card.title}
                  width={200}
                  height={80}
                  className="object-contain rounded-md"
                />
              ) : (
                <span className="text-gray-400 text-sm">
                  [ {card.title} Image Here ]
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
