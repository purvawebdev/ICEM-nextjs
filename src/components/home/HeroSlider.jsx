"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const HeroSlider = () => {
  const images = [
    "/banners/ICEMBANNER27.jpg",
    "/banners/ICEMBANNER6.jpg",
    "/banners/ICEMBANNERCOMP.jpg",
    "/banners/ICEMBANNERMECH.jpg",
    "/banners/ICEMBANNERCLASS.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setIsTransitioning(true);
      setCurrentIndex(images.length);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className={`flex ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {[...images, images[0]].map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className="w-full object-cover flex-shrink-0"
            height={65}
            width={1700}
            quality={100}
            unoptimized={true}
          />
        ))}
      </div>

      {/* Dots (bottom-left corner) */}
      <div className="absolute bottom-5 right-5 flex gap-2 items-center">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-1.5 w-6 rounded-full transition-all duration-300 focus:outline-none ${
              currentIndex % images.length === i
                ? "bg-primary w-8"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
