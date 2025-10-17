"use client";

import { useState, useEffect, useRef } from "react";

const trainingData = [
  {
    count: 200,
    labelTop: "Hours of Aptitude Training",
    labelBottom: "Hours of Soft Skills Training",
  },
  {
    count: 250,
    labelTop: "Hours of Mechanical Technical Training",
    labelBottom: "Hours of Information Technology Training",
  },
  {
    count: 250,
    labelTop: "Hours of Computer Technical Training",
    labelBottom: "Hours of AI-DS Technical Training",
  },
  {
    count: 150,
    labelTop: "Hours of EnTC Technical Training",
    labelBottom: "Hours of MBA Domain Training",
  },
];

export default function TrainingOverview() {
  const [counts, setCounts] = useState(trainingData.map(() => 0));
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate the numbers
  useEffect(() => {
    if (isVisible) {
      trainingData.forEach((item, index) => {
        let start = 0;
        const end = item.count;
        const duration = 2000; // animation duration (2 seconds)
        const increment = end / (duration / 30);

        const interval = setInterval(() => {
          start += increment;
          if (start >= end) {
            clearInterval(interval);
            start = end;
          }
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = Math.floor(start);
            return updated;
          });
        }, 30);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-5">
          Training Overview
        </h2>

        {/* Section Description */}
        <p className="text-md text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          Structured training across core and domain-specific areas,
          meticulously designed to equip students with the skills, knowledge,
          and industry readiness required for professional success.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trainingData.map((item, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0
                  ? "bg-primary text-white"
                  : "bg-white text-gray-900 border border-gray-200"
              } flex flex-col items-center justify-center py-10 px-6 rounded-md shadow-md`}
            >
              {/* Top Number */}
              <h3 className="text-5xl font-extrabold mb-2">{counts[index]}+</h3>
              <p className="text-base font-medium text-center">
                {item.labelTop}
              </p>

              {/* Divider */}
              <div
                className={`w-2/3 my-4 ${
                  index % 2 === 0
                    ? "border-t border-white/60"
                    : "border-t border-gray-400"
                }`}
              ></div>

              {/* Bottom Number */}
              <h3 className="text-5xl font-extrabold mb-2">{counts[index]}+</h3>
              <p className="text-base font-medium text-center">
                {item.labelBottom}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
