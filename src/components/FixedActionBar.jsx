"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FixedActionBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-1/2 -translate-y-1/2 z-[99999] flex items-center">
      {/* 👇 Single hover zone (Hamburger + Icons) */}
      <div
        className="relative flex items-center group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* 🌈 Hamburger Button */}
        <div className="relative p-[2px] bg-gradient-to-r from-[#00e5ff] via-[#ff00ea] to-[#00e5ff] bg-[length:200%_100%] animate-glow-border transition-all duration-500 rounded-md">
          <button
            title="Menu"
            className="relative flex items-center justify-center bg-[#278da4] text-white p-4 rounded-l-md shadow-lg hover:brightness-110 transition-all duration-300"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* 🚀 Social Icons Container */}
        <div
          className={`absolute left-full top-1/2 -translate-y-1/2 flex items-center transition-all duration-500 ease-in-out ${
            isOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-3 pointer-events-none"
          }`}
        >
          <div className="bg-[#278da4] px-3 py-2 shadow-lg flex items-center gap-3 rounded-r-md">
            {/* 🌐 Facebook */}
            <a
              href="https://www.facebook.com/ICEM.AVIRAT"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              className="bg-[#003c84] hover:bg-[#0056b3] text-white p-2.5 rounded-full transition"
            >
              <FaFacebookF size={18} />
            </a>

            {/* Divider */}
            <span className="w-[1px] h-6 bg-white/40"></span>

            {/* 🌐 LinkedIn */}
            <a
              href="https://www.linkedin.com/company/indira-college-of-engineering-and-management-pune/about/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="bg-[#003c84] hover:bg-[#0056b3] text-white p-2.5 rounded-full transition"
            >
              <FaLinkedinIn size={18} />
            </a>

            {/* Divider */}
            <span className="w-[1px] h-6 bg-white/40"></span>

            {/* 🌐 X (Twitter) */}
            <a
              href="https://x.com/igipune"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter / X"
              className="bg-[#003c84] hover:bg-[#0056b3] text-white p-2.5 rounded-full transition"
            >
              <FaSquareXTwitter size={18} />
            </a>

            {/* Divider */}
            <span className="w-[1px] h-6 bg-white/40"></span>

            {/* 🌐 Instagram */}
            <a
              href="https://www.instagram.com/icem_pune/#"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="bg-[#003c84] hover:bg-[#0056b3] text-white p-2.5 rounded-full transition"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* 🌈 Glowing Border Animation Styles */}
      <style>{`
        @keyframes glow-border {
          0% {
            background-position: 0% 50%;
            box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
          }
          50% {
            background-position: 100% 50%;
            box-shadow: 0 0 15px rgba(255, 0, 234, 0.6);
          }
          100% {
            background-position: 0% 50%;
            box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
          }
        }

        .animate-glow-border {
          animation: glow-border 3s ease-in-out infinite;
          filter: drop-shadow(0 0 5px rgba(0, 229, 255, 0.5));
        }
      `}</style>
    </div>
  );
};

export default FixedActionBar;
