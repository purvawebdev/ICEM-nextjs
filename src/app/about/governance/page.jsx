"use client";
import { useState } from "react";
import Image from "next/image";

export default function Governance() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const CompBrochure = "/pdfs/BEComp.pdf";

  const rightLinks = [
    "Overview",
    "Shree Chanakya Education Society",
    "Indira Group of Institute",
    "Chairpersons Profile & Chief Mentor IGL",
    "Sports",
    "Library",
    "Hostel",
    "Transport",
    "Canteen",
    "Gym",
    "Primary Health Centre",
    "Governance",
  ];

  const quickLinks = [
    "Eligibility & Fees",
    "Download Certificate Formats",
    "Admission Helpline",
    "Availability of Forms",
    "Apply Online",
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* ===== Hero Banner ===== */}
      <div className="w-full h-[60vh] relative">
        <Image
          src="/ICEM_Banner.jpg"
          alt="Governance at ICEM"
          className="w-full h-full object-cover"
          height={600}
          width={1700}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Governance at Indira College
          </h1>
        </div>
      </div>

      {/* ===== Main Section ===== */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* LEFT SECTION */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Institutional Governance and Leadership
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Governance at Indira College of Engineering and Management (ICEM)
            emphasizes transparency, accountability, and participative
            decision-making. The institution operates under the strategic vision
            of the Shree Chanakya Education Society (SCES) and adheres to
            policies aligned with AICTE, DTE, and Savitribai Phule Pune
            University.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Governing Body, Academic Council, and various statutory
            committees ensure the seamless implementation of academic,
            financial, and administrative processes. Each committee functions
            under defined responsibilities to maintain compliance, quality, and
            institutional excellence.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The governance model promotes participative leadership where faculty
            and staff contribute to strategic planning, curriculum design, and
            institutional development initiatives. Student representation in key
            bodies fosters inclusion and mutual growth.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Regular audits, feedback mechanisms, and performance reviews are key
            to ensuring that ICEM operates effectively and ethically while
            achieving its educational mission and objectives.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The institutional governance system thus ensures transparency,
            responsibility, and continual improvement in all facets of
            administration — academics, finance, infrastructure, and human
            resources.
          </p>

          {/* ===== Governance Documents Section ===== */}
          <h3 className="mt-10 text-2xl font-bold text-secondary mb-6">
            Institutional Committees & Governance Documents
          </h3>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
            {[
              {
                title: "College Development Committee (CDC)",
                pdf: CompBrochure,
                description:
                  "The CDC oversees academic development, infrastructure improvement, and faculty growth plans. Download the document below for full details.",
              },
              {
                title: "Institute Level Committees - AY 2024-25",
                pdf: CompBrochure,
                description:
                  "Institute-level committees ensure quality assurance and student engagement across all departments.",
              },
              {
                title: "Governing Body (AY 2023-24 to AY 2027-28)",
                pdf: CompBrochure,
                description:
                  "The Governing Body is responsible for strategic direction, policy formulation, and institutional oversight.",
              },
              {
                title: "Academic Council (AY 2023-24 to AY 2025-26)",
                pdf: CompBrochure,
                description:
                  "The Academic Council monitors curriculum design, academic standards, and teaching outcomes.",
              },
              {
                title: "Finance Committee (AY 2023-24 to AY 2025-26)",
                pdf: CompBrochure,
                description:
                  "This committee handles budget planning, fund utilization, and financial audits.",
              },
              {
                title: "Examination Committee (AY 2023-24 to AY 2025-26)",
                pdf: CompBrochure,
                description:
                  "The Examination Committee manages exam schedules, evaluation systems, and result publication.",
              },
            ].map((item, index) => (
              <div key={index} className="overflow-hidden">
                {/* Accordion Header */}
                <div
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="flex justify-between items-center w-full px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900 underline underline-offset-2 hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <span className="text-xl font-bold text-gray-700">
                    {activeFAQ === index ? "−" : "+"}
                  </span>
                </div>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeFAQ === index ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm leading-relaxed">
                    <p className="mb-3">{item.description}</p>
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary/90 transition"
                    >
                      View / Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
        <div className="md:w-1/3 bg-primary text-white p-6 rounded-xl shadow-md flex flex-col gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold border-b border-white/30 pb-2 mb-4">
              Related Pages
            </h3>
            <ul className="space-y-3 text-sm">
              {rightLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-black transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold border-b border-white/30 pb-2 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Box */}
          <div className="bg-primary/20 border border-primary/30 rounded-lg p-4 text-sm">
            <h4 className="font-semibold text-primary mb-2">Need Help?</h4>
            <p className="text-white/80 leading-relaxed">
              For admissions or academic queries, contact our support team for
              quick assistance.
            </p>
            <p className="mt-3 text-primary font-medium">
              ✉ admissions@indiraicem.ac.in
            </p>
            <p className="text-primary font-medium">📞 +91 98765 43210</p>
          </div>
        </div>
      </div>
    </div>
  );
}
