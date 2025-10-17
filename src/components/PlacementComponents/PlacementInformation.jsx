"use client"
import { useState } from "react";

export default function PlacementInformation() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState("Placement Team");

  const pdfLink = "/BEComp.pdf"; // public folder reference

  const tabs = [
    "Placement Team",
    "Our Recruiters",
    "Placed Students",
    "Placement Policy",
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
          Placement Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Sidebar Tabs */}
          <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
            <ul className="space-y-2">
              {tabs.map((tab, i) => (
                <li
                  key={i}
                  onClick={() => setActiveTab(tab)}
                  className={`p-3 rounded-md cursor-pointer font-medium ${
                    activeTab === tab
                      ? "bg-tertiary border-l-4 border-secondary text-secondary"
                      : "hover:bg-gray-100 text-primary"
                  }`}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Accordion */}
          <div className="bg-white shadow-md border border-gray-200 rounded-lg">
            {/* Placement Team Accordion */}
            {activeTab === "Placement Team" && (
              <div className="p-0">
                {/* Define your sections here as before */}
                {/* Example section */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === 0 ? null : 0)
                    }
                    className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                      activeAccordion === 0
                        ? "bg-secondary text-white"
                        : "text-primary hover:bg-tertiary"
                    }`}
                  >
                    1. About the Placement Cell
                    <span className="text-xl font-bold">
                      {activeAccordion === 0 ? "−" : "+"}
                    </span>
                  </button>
                  {activeAccordion === 0 && (
                    <div className="p-4 bg-tertiary text-primary rounded-b-md">
                      <p className="mb-4 text-primary">
                        Placements give students the opportunity to gain skills
                        specific to their subject or industry of choice as well
                        as the employability skills required for real-life work.
                      </p>
                      <p className="mb-4 text-primary">
                        The Training & Placement department facilitates the
                        process...
                      </p>
                    </div>
                  )}
                </div>
                {/* Add remaining sections similarly */}
              </div>
            )}

            {/* Our Recruiters Accordion */}
            {activeTab === "Our Recruiters" && (
              <div className="p-0">
                {/* Example */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === 0 ? null : 0)
                    }
                    className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                      activeAccordion === 0
                        ? "bg-secondary text-white"
                        : "text-primary hover:bg-tertiary"
                    }`}
                  >
                    1. ICEM Top Recruiters
                    <span className="text-xl font-bold">
                      {activeAccordion === 0 ? "−" : "+"}
                    </span>
                  </button>
                  {activeAccordion === 0 && (
                    <div className="p-4 bg-tertiary text-primary rounded-b-md">
                      <p className="text-primary">List of companies here...</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Placed Students Accordion */}
            {activeTab === "Placed Students" && (
              <div className="p-0">
                {[2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024].map(
                  (year, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {`Placed Students ${year}-${year + 1}`}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>
                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          <a
                            href={pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {`Placed Students ${year}-${year + 1}`}
                          </a>
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            )}

            {/* Placement Policy Accordion */}
            {activeTab === "Placement Policy" && (
              <div className="p-0">
                {/* Add sections similar to Placement Team */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
