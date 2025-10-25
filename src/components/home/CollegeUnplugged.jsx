"use client";

import React, { useState } from "react";
import Image from "next/image";

const videos = [
  {
    title:
      "Ek aisa College jo kisi Resort se Kam nahi || Indira College of Engineering & Management",
    thumbnail: "https://img.youtube.com/vi/VFNW2xjcLS4/0.jpg",
    url: "https://youtu.be/VFNW2xjcLS4?si=82O2nNba-C76P6Sj",
  },
  {
    title: "ICEM (Indira College of Engineering and Management) Award Function",
    thumbnail: "https://img.youtube.com/vi/KrkLiGVGeT0/0.jpg",
    url: "https://youtu.be/KrkLiGVGeT0?si=-OHivtfzbudfoUWz",
  },
  {
    title: "Sunidhi Chauhan at ICEM",
    thumbnail: "https://img.youtube.com/vi/UxjeDzFtpMY/0.jpg",
    url: "https://youtu.be/UxjeDzFtpMY?si=1PQkCtSjM5gDA0ez",
  },
  {
    title:
      "Life at Indira University, Pune | Explore Vibrant Campus Life | Cutting Edge Facilities",
    thumbnail: "https://img.youtube.com/vi/gEXvD4OVyXg/0.jpg",
    url: "https://youtu.be/gEXvD4OVyXg?si=68Sex6D7MOVnPik3",
  },
];

// ✅ Converts YouTube links into embeddable iframe URLs
function toEmbedUrl(url) {
  if (!url) return "";
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
  const videoId = match ? match[1] : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

const CollegeUnplugged = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">
          Indira College Unplugged
        </h2>

        {/* ✅ Responsive Flex Container */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-10">
          {/* LEFT — Video List */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => setSelectedVideo(video)}
                className={`flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg cursor-pointer transition ${
                  selectedVideo.title === video.title
                    ? "bg-blue-50 border-l-4 border-blue-500"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="relative w-24 h-16 sm:w-32 sm:h-20 flex-shrink-0">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 640px) 96px, 128px"
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-800 leading-snug line-clamp-2">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>

          {/* RIGHT — Main Video Player */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full h-48 sm:h-64 md:h-80 lg:h-[360px] bg-black rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src={toEmbedUrl(selectedVideo.url)}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeUnplugged;
