"use client";

import Link from "next/link";
import React from "react";

const EventsSection = () => {
  const events = [
    {
      date: "10th – 11th October, 2025",
      title: "8th World Engineering Conference on Contemporary Technologies",
    },
    {
      date: "10th – 11th November, 2025",
      title: "Indira College Doctoral Consortium",
    },
    {
      date: "28th – 29th November, 2025",
      title: "1st International Conference on Cyber Security & Data Protection",
    },
    {
      date: "12th – 13th December, 2025",
      title:
        "International Conference on Applied Data Science and Smart Systems",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ✅ Section Heading */}
        <div className="flex justify-center sm:justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">
            Academic Conferences & Events
          </h2>
          {/* ❌ Removed "See All" button completely */}
        </div>

        {/* ✅ Events Grid — 2 per row on mobile, 4 on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="h-28 sm:h-36 md:h-40 bg-gray-200 flex items-center justify-center text-gray-400 text-xs sm:text-sm">
                [ Event Image ]
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-primary font-semibold text-[10px] sm:text-sm mb-1 sm:mb-2">
                  {event.date}
                </p>
                <h4 className="text-gray-900 font-medium text-xs sm:text-base leading-snug">
                  {event.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ CTA Section */}
        <div className="bg-primary rounded-xl text-center text-white py-10 sm:py-14 px-4 sm:px-6">
          <h2 className="text-lg sm:text-3xl font-bold mb-3 sm:mb-4">
            Shape Your Future with Us
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-xs sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Discover limitless opportunities at Indira College, where
            innovation, learning, and industry connect. Take the first step
            towards your dreams. Explore our programs and get in touch to begin
            your journey with us.
          </p>
          <Link href="/#contact-form">
            <button className="bg-white text-secondary font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition flex items-center gap-2 mx-auto text-xs sm:text-base">
              Get in touch <span className="text-sm sm:text-xl">↗</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
