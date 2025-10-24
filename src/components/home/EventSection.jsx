"use client";

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
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Academic Conferences & Events
          </h2>
          <button className="text-sm text-gray-700 hover:text-primary font-medium flex items-center gap-1 transition-colors">
            See All <span className="text-lg">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                [ Event Image ]
              </div>
              <div className="p-4">
                <p className="text-primary font-semibold text-sm mb-2">
                  {event.date}
                </p>
                <h4 className="text-gray-900 font-medium text-base">
                  {event.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-xl text-center text-white py-14 px-6">
          <h2 className="text-3xl font-bold mb-4">Shape Your Future with Us</h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg mb-8 leading-relaxed">
            Discover limitless opportunities at Indira College, where
            innovation, learning, and industry connect. Take the first step
            towards your dreams. Explore our programs and get in touch to begin
            your journey with us.
          </p>
          <a href="/#contact-form">
            <button className="bg-white text-secondary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
              Get in touch <span className="text-xl">↗</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
