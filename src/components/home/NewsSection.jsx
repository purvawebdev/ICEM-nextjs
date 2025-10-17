"use client";
import React from "react";

const NewsSection = () => {
  const newsItems = [
    {
      tag: "RANKINGS",
      title:
        "Indira Business School Among India's Top Institutions in GHRDC Rankings",
      date: "September 26, 2025",
    },
    {
      title:
        "Director Leads Dialogue on Transforming India's Education Ecosystem",
      date: "September 26, 2025",
    },
    {
      title:
        "Indira Faculty Chairs Session on Strengthening India's Global Education Network",
      date: "September 26, 2025",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            News & Announcements
          </h2>
          <button className="text-sm text-gray-700 hover:text-primary font-medium flex items-center gap-1 transition-colors">
            See All News <span className="text-lg">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400">
                [ Main News Image Here ]
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2 hover:underline cursor-pointer">
                  Indira College and Industry Partner Launch Innovation Centre
                  for Research and Emerging Technologies
                </h3>
                <p className="text-gray-700 mb-3 text-sm">
                  Indira College has launched a new Innovation Centre in
                  collaboration with industry leaders, an initiative designed to
                  promote research, innovation, and technology-driven solutions
                  for modern challenges.
                </p>
                <p className="text-sm text-gray-500">
                  Published on — October 2, 2025
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {newsItems.map((news, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-32 h-20 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">
                  [ Img ]
                </div>
                <div>
                  {news.tag && (
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                      {news.tag}
                    </span>
                  )}
                  <h4 className="text-base font-semibold text-gray-900 hover:underline cursor-pointer hover:text-primary transition-colors">
                    {news.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Published on — {news.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
