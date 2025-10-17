"use client";

import React, { useState } from "react";
import Image from "next/image";

function InductionProgramme() {
  const [openIndex, setOpenIndex] = useState(null);

  // Assets from public folder
  const bannerImg = "/ICEM_Banner.jpg";
  const beComp = "/BEComp.pdf";

  const rightLinks = [
    "Student Welfare",
    "IIC",
    "Induction Programme",
    "Student Council",
    "National Service Scheme (NSS)",
    "ICEM Awards",
    "Academic Cell",
    "Academic Calendar",
    "Statutory Committee",
    "Non-Statutory Committee",
    "Grievance Redressal",
  ];

  const quickLinks = [
    "Eligibility & Fees",
    "Download Certificate Formats",
    "Admission Helpline",
    "Availability of Forms",
    "Apply Online",
  ];

  const activityReports = [
    "Report 2023-2024",
    "Report 2022-2023",
    "Report 2021-2022",
    "Report 2018-2019",
    "Report 2017-2018",
    "Report 2016-2017",
    "Report 2015-2016",
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh]">
        <Image
          src={bannerImg}
          alt="Induction Programme"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
            Induction Programme
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* Left Content */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            About Induction Programme
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The term <b>induction</b> is generally used to describe the process
            whereby new incumbents adjust to or acclimatize to their new roles
            and environment. In other words, it is a well-planned event to
            educate new entrants about the institution’s environment and connect
            them with the people in it.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-3">
            Objectives of the Induction Programme
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            The purpose of the <b>Student Induction Programme</b> is to help new
            students adjust and feel comfortable in the new environment,
            inculcate in them the ethos and culture of the institution, help
            them build bonds with other students and faculty members, and expose
            them to a sense of larger purpose and self-exploration.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6 mb-10">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Key Highlights of the Programme
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Orientation about the institution and its departments.</li>
              <li>Interactive sessions with faculty and student mentors.</li>
              <li>Workshops on personality development and ethics.</li>
              <li>
                Introduction to academic rules, facilities, and resources.
              </li>
              <li>Team-building and cultural integration activities.</li>
            </ul>
          </div>

          {/* Activities Accordion */}
          <h3 className="text-xl font-semibold text-secondary mb-4">
            Activities
          </h3>

          <div className="space-y-3">
            {activityReports.map((report, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg bg-gray-50 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <span className="underline text-[16px] font-semibold hover:text-primary transition">
                    {report}
                  </span>
                  <span className="text-xl text-gray-700">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 mb-2">
                      Click below to view the {report} document.
                    </p>
                    <a
                      href={beComp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      View Report
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="md:w-1/3 bg-primary text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          {/* Sidebar Links */}
          <ul className="space-y-4 mb-8">
            {rightLinks.map((link, index) => (
              <li
                key={index}
                className="pb-2 border-b border-white/30 hover:text-tertiary cursor-pointer transition-all duration-300 hover:underline"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Contact Form */}
          <div className="bg-tertiary p-6 rounded-lg mb-8">
            <h3 className="text-center text-lg font-bold mb-4 text-secondary">
              GET IN TOUCH WITH US
            </h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="YOUR NAME*"
                className="w-full p-2 text-black rounded"
              />
              <div className="flex items-center bg-white rounded">
                <span className="pl-2 text-black">🇮🇳</span>
                <input
                  type="text"
                  placeholder="PHONE NUMBER*"
                  className="w-full p-2 text-black rounded-r"
                />
              </div>
              <input
                type="email"
                placeholder="YOUR EMAIL ID"
                className="w-full p-2 text-black rounded"
              />
              <select className="w-full p-2 text-black rounded">
                <option>Select Program</option>
                <option>Engineering</option>
                <option>MBA</option>
                <option>MCA</option>
              </select>
              <input
                type="text"
                placeholder="STATE"
                className="w-full p-2 text-black rounded"
              />
              <p className="text-xs text-gray-300">
                By providing your contact details, you agree to receive updates
                from Indira College through WhatsApp.
              </p>
              <button
                type="submit"
                className="w-full bg-secondary text-white font-semibold py-2 rounded hover:bg-white hover:text-[#003c84] transition-colors duration-300"
              >
                Apply Now
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-center text-secondary font-bold mb-4 border-t border-white/30 pt-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm hover:text-tertiary cursor-pointer transition"
                >
                  <span className="text-secondary">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InductionProgramme;
