"use client"

import React from "react";

const ExploreSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 leading-snug">
          Explore Your Potential with
        </h2>
        <h2 className="text-2xl font-bold text-secondary mb-4 leading-snug">
          INDIRA COLLEGE OF ENGINEERING & MANAGEMENT
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Located near Pune, Indira College of Engineering & Management, one of
          the leading NAAC accredited engineering institutions, offers a world
          of learning to help you achieve your goals. Choose from industry-led
          programs, learn from outstanding faculty in state-of-the-art
          facilities, and access limitless placement opportunities with top
          campus recruiters. Join a vibrant community of students with ambitions
          as big as yours.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {["NAAC", "NIRF", "QS Ranking", "World Ranking"].map((title, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-28"
          >
            <span className="text-gray-400 text-sm">
              [ {title} Image Here ]
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
