"use client";

import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 text-gray-800 border-t border-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* ===== Left Section ===== */}
        <div>
          <div className="flex items-center mb-4">
            <Image src="/Logo.png" alt="ICEM Logo" height={300} width={400} className="h-16 mr-3" />
            <div>
              
            </div>
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

          {/* Social Media */}
          <div className="flex gap-4 text-lg">
            <a href="#" className="text-blue-700 hover:text-primary">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-700 hover:text-primary">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-blue-700 hover:text-primary">
              <FaTwitter />
            </a>
            <a href="#" className="text-blue-700 hover:text-primary">
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
              <li>Women welfare policy</li>
              <li>Anti Ragging Policy</li>
              <li>Faculty Application Form</li>
              <li>SPPU</li>
              <li>AICTE</li>
              <li>Privacy Policy</li>
            </ul>
            <ul className="space-y-2">
              <li>DTE</li>
              <li>MahaDBT</li>
              <li>MANDATORY DISCLOSURE</li>
              <li>AICTE APPROVAL</li>
              <li>Fees Regulating Authority</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>

        {/* ===== Right Section: Popular Posts ===== */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-4">Popular Post</h3>
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
                Importance of pre-planning to achieve successes
              </h4>
              <p className="text-xs text-gray-500 mt-1">January 27, 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="bg-primary text-white text-center py-3 text-sm">
        © 2024. Indira College of Engineering and Management.
      </div>
    </footer>
  );
};

export default Footer;
