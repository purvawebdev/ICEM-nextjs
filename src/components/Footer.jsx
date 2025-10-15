"use client";

import React from "react";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 text-gray-800 border-t border-gray-300">
      {/* ===== Top Section ===== */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* ===== Left Section ===== */}
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/Logo.png"
              alt="ICEM Logo"
              className="h-16 w-auto mr-3"
              priority
                width={200}
  height={200}
            />
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            <span className="font-semibold">📍 Indira Chanakya Campus (ICC)</span>
            <br />
            S.No. 64,65, Gat No. 276 At Post : Parandwadi,
            <br />
            Near Somatne phata, Tal. : Maval, Dist. Pune – 410 506
          </p>

          <p className="text-sm flex items-center gap-2 mb-1">
            <FaPhoneAlt className="text-primary" /> 02114 – 661500 / 666
          </p>
          <p className="text-sm flex items-center gap-2 mb-4">
            <FaEnvelope className="text-primary" /> info@indiraicem.ac.in
          </p>

          {/* 🌐 Social Media Links */}
          <div className="flex gap-4 text-lg">
            <a
              href="https://www.facebook.com/ICEM.AVIRAT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-primary transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/indira-college-of-engineering-and-management-pune/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-primary transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/igipune"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-primary transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/icem_pune/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-primary transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* ===== Middle Section: Featured Links ===== */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-4">Featured Links</h3>
          <div className="grid grid-cols-2 gap-x-6 text-sm text-gray-700">
            <ul className="space-y-2">
              <li>Staff Grievance Form</li>
              <li>Women Welfare Policy</li>
              <li>Anti Ragging Policy</li>
              <li>Faculty Application Form</li>
              <li>SPPU</li>
              <li>AICTE</li>
              <li>Privacy Policy</li>
            </ul>
            <ul className="space-y-2">
              <li>DTE</li>
              <li>MahaDBT</li>
              <li>Mandatory Disclosure</li>
              <li>AICTE Approval</li>
              <li>Fees Regulating Authority</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>

        {/* ===== Right Section: Popular Posts ===== */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-4">Popular Posts</h3>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-20 h-16 bg-gray-300 rounded-md flex items-center justify-center text-gray-600 text-xs">
              Image
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-sm leading-tight">
                Investment Opportunities for Women in India
              </h4>
              <p className="text-xs text-gray-500 mt-1">March 15, 2023</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-20 h-16 bg-gray-300 rounded-md flex items-center justify-center text-gray-600 text-xs">
              Image
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-sm leading-tight">
                Importance of Pre-Planning to Achieve Success
              </h4>
              <p className="text-xs text-gray-500 mt-1">January 27, 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="bg-primary text-white text-center py-3 text-sm">
        © {new Date().getFullYear()} Indira College of Engineering and Management. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
