"use client";
import React from "react";

const NoticesSection = () => {
  const notices = [
    { tag: "New", title: "COMP" },
    { tag: "New", title: "AIDS" },
  ];

  return (
    <div className="bg-gray-50 py-16 flex justify-center">
      <div className="w-full max-w-5xl bg-white border rounded-lg shadow-sm p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Notices / Circulars
        </h2>

        <div className="divide-y divide-gray-200">
          {notices.map((notice, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row justify-between items-center py-4 px-2"
            >
              <div className="flex items-center gap-3">
                <span className="bg-[#0A1E55] text-white text-xs font-semibold px-3 py-1 rounded">
                  {notice.tag}
                </span>
                <p className="text-gray-800 font-medium text-base">
                  {notice.title}
                </p>
              </div>
              <div className="flex items-center gap-6 mt-2 sm:mt-0">
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View PDF
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="border border-gray-300 rounded-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition-colors">
            View All Notices
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticesSection;
