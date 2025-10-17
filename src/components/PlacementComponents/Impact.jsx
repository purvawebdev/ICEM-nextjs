"use client";

import { useState, useEffect, useRef } from "react";

export default function Impact() {
  const [counts, setCounts] = useState([0, 0, 0, 0]); // initial values for 4 metrics
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // run once
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
      const targets = [27, 8.16, 350, 100];
      const duration = 2000; // 2 seconds
      const intervalTime = 30;

      targets.forEach((target, i) => {
        let start = 0;
        const increment = target / (duration / intervalTime);

        const interval = setInterval(() => {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(interval);
          }
          setCounts((prev) => {
            const updated = [...prev];
            updated[i] = parseFloat(start.toFixed(2)); // keep decimals for avg package
            return updated;
          });
        }, intervalTime);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
          Our Impact in Numbers
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Highest Package */}
          <div className="bg-white shadow-md border border-blue-100 p-8 rounded-lg transition-transform hover:scale-105">
            <h3 className="text-4xl font-bold text-secondary mb-2">
              ₹{counts[0].toFixed(0)} LPA
            </h3>
            <p className="text-lg font-semibold text-primary mb-2">
              Highest Package
            </p>
          </div>

          {/* Average Package */}
          <div className="bg-white shadow-md border border-blue-100 p-8 rounded-lg transition-transform hover:scale-105">
            <h3 className="text-4xl font-bold text-secondary mb-2">
              ₹{counts[1].toFixed(2)} LPA
            </h3>
            <p className="text-lg font-semibold text-primary mb-2">
              Average Package
            </p>
          </div>

          {/* Companies */}
          <div className="bg-white shadow-md border border-blue-100 p-8 rounded-lg transition-transform hover:scale-105">
            <h3 className="text-4xl font-bold text-secondary mb-2">
              {Math.floor(counts[2])}+
            </h3>
            <p className="text-lg font-semibold text-primary mb-2">
              Recruiting Companies
            </p>
          </div>

          {/* Placement Assistance */}
          <div className="bg-white shadow-md border border-blue-100 p-8 rounded-lg transition-transform hover:scale-105">
            <h3 className="text-4xl font-bold text-secondary mb-2">
              {Math.floor(counts[3])}%
            </h3>
            <p className="text-lg font-semibold text-primary mb-2">
              Placement Assistance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
