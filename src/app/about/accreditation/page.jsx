"use client";
import { useState } from "react";
import Image from "next/image";

export default function Accreditation() {
  const [openAccordions, setOpenAccordions] = useState({
    naac: null,
    iqac: null,
    extended: null,
    bottom: null,
  });

  const toggleAccordion = (section, index) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

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

  const sections = {
    naac: {
      title: "NAAC",
      accordions: [
        {
          heading: "SSR Reports Year Wise",
          content:
            "This section will contain year-wise SSR reports and related documentation for accreditation purposes.",
        },
        {
          heading: "Criteria Wise Details",
          content:
            "Detailed information and supporting evidence for each NAAC accreditation criteria will be presented here.",
        },
        {
          heading: "AQAR Reports",
          content:
            "Annual Quality Assurance Reports (AQAR) submitted to NAAC for assessment of institutional performance.",
        },
        {
          heading: "NAAC Certificate",
          content:
            "Official NAAC accreditation certificate and other recognition documents.",
        },
      ],
    },

    iqac: {
      title: "IQAC",
      accordions: [
        {
          heading: "IQAC Committee",
          content:
            "List of IQAC committee members with their designations and institutional roles.",
        },
        {
          heading: "IQAC Notices, MOM’s & Actions",
          content:
            "Meeting minutes, notices, and action reports from IQAC sessions.",
        },
        {
          heading: "IQAC Formats",
          content:
            "Standard formats used for IQAC documentation and quality assurance processes.",
        },
      ],
    },

    extended: {
      title: "IQAC (Extended)",
      accordions: [
        {
          heading: "Best Practices",
          content:
            "Documentation of best practices adopted by the institution for continual improvement.",
        },
        {
          heading: "Distinctive Practice",
          content:
            "Unique institutional practices contributing to holistic student and faculty development.",
        },
        {
          heading: "SPPU Annual Report",
          content:
            "Savitribai Phule Pune University annual report and related institutional contributions.",
        },
        {
          heading: "Code of Conduct",
          content:
            "Institutional code of conduct for staff and students ensuring ethical governance.",
        },
        {
          heading: "NIRF",
          content:
            "National Institutional Ranking Framework (NIRF) data and submissions.",
        },
        {
          heading: "Financial Statements",
          content:
            "Audited financial reports and institutional expenditure details.",
        },
        {
          heading: "Soft Skills and Aptitude Reports",
          content:
            "Reports highlighting student soft skill training, aptitude assessments, and placement readiness initiatives.",
        },
      ],
    },
  };

  const bottomAccordions = [
    {
      title: "Academic Calendar",
      content: "PDFs and content related to academic calendar year-wise.",
    },
    {
      title: "PO’s and CO’s",
      content:
        "Program Outcomes (POs) and Course Outcomes (COs) documents for all departments.",
    },
    {
      title: "Code Of Conduct",
      content: "Rules, regulations, and ethical guidelines followed at ICEM.",
    },
    {
      title: "Best Practices @ ICEM",
      content:
        "Innovative and effective institutional practices improving student and staff engagement.",
    },
    {
      title: "Distinctive feature of ICEM",
      content:
        "Unique institutional features and recognitions that distinguish ICEM from other colleges.",
    },
    {
      title: "Procedures and Policies",
      content:
        "Official policy documents and procedural guidelines for staff/students.",
    },
    {
      title: "Media Center",
      content:
        "Photos, videos, and press releases related to college achievements and events.",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="w-full h-[60vh] relative">
        <Image
          src="/ICEM_Banner.jpg"
          alt="Accreditation Banner"
          className="w-full h-full object-cover"
          width={1700}
          height={600}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Accreditation
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* Left Section */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md space-y-12">
          {/* === NAAC Section === */}
          {Object.keys(sections).map((key) => (
            <div key={key}>
              <h2 className="text-2xl font-semibold text-secondary mb-6">
                {sections[key].title}
              </h2>
              {sections[key].accordions.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg bg-gray-50 shadow-sm overflow-hidden mb-3"
                >
                  <button
                    onClick={() => toggleAccordion(key, index)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-100 transition"
                  >
                    {item.heading}
                    <span className="text-xl text-secondary">
                      {openAccordions[key] === index ? "−" : "+"}
                    </span>
                  </button>
                  {openAccordions[key] === index && (
                    <div className="p-4 bg-white border-t border-gray-200 text-gray-700">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
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
                Enquire Now
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

      {/* === Bottom Accordions Section === */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-4">
          {bottomAccordions.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion("bottom", index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-100 transition"
              >
                {item.title}
                <span className="text-xl text-secondary">
                  {openAccordions.bottom === index ? "−" : "+"}
                </span>
              </button>
              {openAccordions.bottom === index && (
                <div className="p-6 border-t border-gray-200 text-gray-700 bg-white">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


