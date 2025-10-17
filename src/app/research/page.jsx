"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const research = "/research.jpg";
const BEComp = "/BEComp.pdf";

const Research = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/research.jpg"
          alt="Innovation at Indira College"
          fill
          className="object-cover"
          priority // Important for above-the-fold images
          unoptimized={true}
        />

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-20">
          <div className="max-w-2xl bg-black/60 p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Innovation that Makes a Difference
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Turn ideas into impact through real-world research, invention, and
              entrepreneurial thinking. Our research culture encourages
              curiosity, creativity, and collaboration — empowering students and
              faculty to pioneer solutions that shape the future.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder for next sections */}
      <section className="py-10 text-center">
        <h2 className="text-4xl font-bold text-secondary mb-6">
          Research & Innovation
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          At Indira College, research and innovation are not confined to
          laboratories—they are embedded in the culture. We empower our students
          and faculty to imagine, investigate, and implement solutions for
          real-world challenges. From internationally recognised research
          outputs to cutting-edge prototypes, our ecosystem supports every stage
          of innovation
        </p>
      </section>
      {/* Our Impact in Numbers Section */}
      <section className="py-5 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-lg md:text-4xl font-bold text-secondary mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Year after year, Indira College has been recognized among the top
            institutions in India for pioneering research and innovation. This
            reflects our strong research team, advanced infrastructure, and
            unwavering commitment to developing new ideas and emerging
            technologies.
          </p>

          {/* Impact Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: "5000+",
                label: "Patents Successfully Filed",
              },
              {
                number: "51+",
                label: "Highly Acclaimed Centres of Excellence",
              },
              {
                number: "₹90 Cr+",
                label: "Research Grants Received",
              },
              {
                number: "11000+",
                label: "Scopus-indexed Research Papers",
              },
              {
                number: "17+",
                label: "Joint Research Projects with Global Universities",
              },
              {
                number: "Erasmus+ Program",
                label: "Empowering Education through Global Collaboration",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 shadow-md bg-white p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-3">
                  {item.number}
                </h3>
                <p className="font-semibold text-primary leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Vibrant Research Ecosystem Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
            Vibrant Research Ecosystem
          </h2>
          <p className="text-gray-700 text-center max-w-5xl mx-auto mb-12 leading-relaxed">
            From breakthroughs in sustainable technologies to transformative
            research in healthcare and AI, Indira College's vibrant research
            ecosystem drives innovation, empowers communities, and inspires
            global scientific progress.
          </p>

          {/* Research Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1 */}
            <div className="border border-gray-200 shadow-md bg-white p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-secondary mb-3">
                13690+ Publications & 97000+ Citations
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Indira's growing publication record reflects its commitment to
                impactful research that resonates globally. Our strong citation
                index stands as a testament to our academic credibility and
                innovation.
              </p>
            </div>

            {/* 2 */}
            <div className="border border-gray-200 shadow-md bg-white p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-secondary mb-3">
                Global Research Network Across 140+ Countries
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Collaborations with over 180 institutions and 3700+
                international authors enable interdisciplinary breakthroughs
                across fields such as Computer Science, Engineering, and Life
                Sciences.
              </p>
            </div>

            {/* 3 */}
            <div className="border border-gray-200 shadow-md bg-white p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-secondary mb-3">
                Focus on UN Sustainable Development Goals (SDGs)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                With thousands of publications aligned with the SDGs, our
                researchers actively address challenges in Good Health &
                Well-being, Clean Energy, and Industry Innovation.
              </p>
            </div>

            {/* 4 */}
            <div className="border border-gray-200 shadow-md bg-white p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-secondary mb-3">
                Undergraduate Research Participation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We nurture early research aptitude—our undergraduates engage in
                real-world problem-solving, contributing to impactful papers and
                industry-ready projects.
              </p>
            </div>

            {/* 5 */}
            <div className="border border-gray-200 shadow-md bg-white p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-secondary mb-3">
                Global Recognition
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our faculty and researchers have been recognized among the Top
                2% Scientists globally, spanning diverse domains of science,
                engineering, and technology.
              </p>
            </div>

            {/* 6 */}
            <div className="border border-gray-200 shadow-md bg-white p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-secondary mb-3">
                Sponsored Research & Funding Success
              </h3>
              <p className="text-gray-700 leading-relaxed">
                With over ₹90 Crores in competitive research grants, our faculty
                are continuously driving cutting-edge projects aligned with
                national and international priorities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Central Prototyping Facility Section */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Central Prototyping Facility
          </h2>
          <p className="text-gray-700 max-w-5xl mx-auto mb-12 leading-relaxed">
            At Indira College, research and innovation are not confined to
            laboratories – they are embedded in our culture. We empower students
            and faculty to imagine, investigate, and implement real-world
            solutions that make a lasting impact.
          </p>

          {/* Three Gray Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium border-b border-gray-300">
                (image here)
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Advanced Prototyping Infrastructure
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our state-of-the-art facility includes CO₂ laser cutting
                  machines, FDM 3D printers, 3-axis vertical milling machines,
                  and industry-grade metal forming & surface coating equipment
                  for precision prototyping and fabrication.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium border-b border-gray-300">
                (image here)
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Free Access for Students and Faculty
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The facility is provided at no cost to students and faculty,
                  encouraging hands-on experimentation and prototype
                  development, fostering innovation and collaborative learning.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium border-b border-gray-300">
                (image here)
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Real-World Impact
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>42 projects supported with CAD designing</li>
                  <li>74 projects 3D printed</li>
                  <li>36 projects utilized laser cutting</li>
                  <li>
                    14 projects fabricated using machining and surface
                    treatments
                  </li>
                  <li>
                    1000+ corporate gifts created using these technologies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Conferences on Research & Innovation Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Conferences on Research & Innovation
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            At Indira College, conferences are an extension of our innovation
            culture. We bring together researchers, thought leaders, and
            students to exchange ideas, present breakthroughs, and encourage
            collaborations that address real-world challenges through
            interdisciplinary research and forward-thinking discussions.
          </p>

          {/* Conference Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all">
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium">
                (image here)
              </div>
              <div className="p-6 text-left">
                <p className="text-gray-700 font-medium mb-2">
                  29th - 30th August, 2025
                </p>
                <h3 className="text-lg font-bold text-secondary leading-snug">
                  2nd International Conference on Machine Learning Algorithms
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all">
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium">
                (image here)
              </div>
              <div className="p-6 text-left">
                <p className="text-gray-700 font-medium mb-2">
                  7th - 9th August, 2025
                </p>
                <h3 className="text-lg font-bold text-secondary leading-snug">
                  29th Conference on VLSI Design and Test
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all">
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium">
                (image here)
              </div>
              <div className="p-6 text-left">
                <p className="text-gray-700 font-medium mb-2">
                  28th - 29th September, 2025
                </p>
                <h3 className="text-lg font-bold text-secondary leading-snug">
                  International Conference on Management & Information Systems
                  at Thailand
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Student Prototypes Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
            Student Prototypes at a Glance
          </h2>
          <p className="text-gray-700 text-center max-w-5xl mx-auto mb-12 leading-relaxed">
            Fuelled by curiosity and a drive to innovate, Indira College
            students transform ideas into functional prototypes. These creations
            showcase their technical expertise, creativity, and problem-solving
            mindset—bringing real-world solutions to life through hands-on
            learning and collaboration.
          </p>

          {/* Prototypes List */}
          <div className="space-y-6">
            {/* Prototype 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 shadow-sm bg-gray-50 hover:shadow-md transition-all">
              <div className="col-span-1 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium h-48 md:h-full">
                (image here)
              </div>
              <div className="col-span-3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  InteLights
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  InteLights is an AI-powered traffic management system that
                  optimises signal timing using real-time traffic data, reducing
                  wait times, fuel usage, and vehicular emissions.
                </p>
              </div>
            </div>

            {/* Prototype 2 */}
            <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 shadow-sm bg-gray-50 hover:shadow-md transition-all">
              <div className="col-span-1 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium h-48 md:h-full">
                (image here)
              </div>
              <div className="col-span-3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Video Laryngoscope
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Video laryngoscopes enhance laryngeal view and support remote
                  monitoring and cloud storage—offering ease of use for both
                  beginner and experienced anaesthesiologists.
                </p>
              </div>
            </div>

            {/* Prototype 3 */}
            <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 shadow-sm bg-gray-50 hover:shadow-md transition-all">
              <div className="col-span-1 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium h-48 md:h-full">
                (image here)
              </div>
              <div className="col-span-3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  E-Bike
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The Smart Electric Bike transforms old motorcycles into
                  eco-friendly, low-maintenance rides with remote ignition,
                  digital display, and enhanced performance for sustainable
                  commuting.
                </p>
              </div>
            </div>

            {/* Prototype 4 - New */}
            <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 shadow-sm bg-gray-50 hover:shadow-md transition-all">
              <div className="col-span-1 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium h-48 md:h-full">
                (image here)
              </div>
              <div className="col-span-3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Cold Storage Robot
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Designed for agricultural applications, the Cold Storage Robot
                  helps preserve perishables using smart temperature monitoring
                  and autonomous storage mechanisms.
                </p>
              </div>
            </div>

            {/* Prototype 5 - New */}
            <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 shadow-sm bg-gray-50 hover:shadow-md transition-all">
              <div className="col-span-1 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium h-48 md:h-full">
                (image here)
              </div>
              <div className="col-span-3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Smart Water Quality Analyzer
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This IoT-based prototype analyzes pH, turbidity, and
                  contamination levels in real time, alerting users through a
                  connected app for water safety and quality assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Student Innovation & Start-up Culture Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Student Innovation & Start-up Culture
          </h2>

          {/* Subtitle */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto mb-12">
            Driven by an entrepreneurial spirit and a passion for solving
            real-world problems, students at Indira College are leading a
            vibrant culture of innovation and start-ups. From breakthrough
            product ideas to scalable tech-enabled ventures, they're turning
            creativity into impact—building sustainable solutions that shape
            industries and communities alike.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border border-gray-200 shadow-md bg-gray-50 text-left p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-primary mb-3">
                NewGen IEDC – Pre-incubation Support
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our New Generation Innovation and Entrepreneurship Development
                Centre (NewGen IEDC), funded by the Department of Science &
                Technology, supports student-led innovations through mentorship
                and funding.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 shadow-md bg-gray-50 text-left p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-primary mb-3">
                INR 2 Crores+ in Prototype Grants
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Over the past five years, 114 student projects have received
                prototyping grants, enabling breakthrough innovations across
                diverse domains. These have led to 60 patents and the creation
                of 20 thriving start-ups.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 shadow-md bg-gray-50 text-left p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-primary mb-3">
                From Ideas to Impact
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Projects range from AI drones and biofuel reactors to low-cost
                medical devices and AR-based learning tools, showcasing
                innovation across disciplines and real-world applications that
                impact industries and communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Department Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Research Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Sidebar Tabs */}
            <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
              <ul className="space-y-2">
                {[
                  "Overview",
                  "Publication",
                  "IPR",
                  "Research Activities",
                  "Research Policy",
                ].map((tab, i) => (
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
              {/* Overview Accordion */}
              {activeTab === "Overview" && (
                <>
                  {[
                    {
                      title: "1. About the R&D Cell",
                      content: (
                        <>
                          <p className="text-primary">
                            Indira College of Engineering and Management is
                            committed to inculcate research culture among
                            faculty, researchers and students. The R&D Cell aims
                            to develop and promote research and development
                            activities to realize the vision and mission of the
                            college. The research areas of academic, practical
                            and social significance will be identified and thus
                            contributing to the nation development.
                          </p>
                          <p className="mt-3 text-primary">
                            The research policy defines the applicable rules and
                            regulations to be adhered while carrying out various
                            research activities and norms related to safe and
                            ethical conduct of research. The R&D Cell provides
                            guidance to faculty members and students
                            consistently to write research papers, research
                            projects and IPR activities. The management
                            encourages all faculty members and students by
                            providing financial assistance for research paper
                            presentation, attending national/international
                            conferences, publishing books and filing copyrights
                            and patents. To encourage innovative ideas and
                            competitive projects, the Institute provides Seed
                            funding to the research projects to develop
                            prototype and testing.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: "2. Objectives",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-primary">
                          <li>
                            To identify and inform all researchers about the
                            research opportunities available in academic,
                            industry, government and research organizations.
                          </li>
                          <li>
                            To provide a conducive environment and motivation
                            for undertaking interdisciplinary projects and
                            research.
                          </li>
                          <li>
                            To facilitate the presentation of research work in
                            national/international conferences and enhance
                            publication standards.
                          </li>
                          <li>
                            To establish centers of excellence in association
                            with industries and undertake joint research
                            projects.
                          </li>
                          <li>
                            To establish long-term relationships with research
                            organizations to widen funding and research scope.
                          </li>
                          <li>
                            To encourage participative research and promote
                            internal funded projects and consultancy services.
                          </li>
                          <li>
                            To acquire membership of renowned professional
                            bodies and build global institutional linkages.
                          </li>
                          <li>
                            To ensure quality and uphold high standards of
                            ethics and integrity in all research activities.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Memorandums of Understanding (MoUs)",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-primary">
                          <li>
                            MoU with Consortium of Technical Education for
                            innovative programs and research initiatives.
                          </li>
                          <li>
                            MoU with Shashitek Company, Bangalore for
                            internships and real-time tech projects.
                          </li>
                          <li>
                            MoU with Cyber Secured India for cyber security and
                            digital forensics training.
                          </li>
                          <li>
                            MoU with RWTH Aachen University, Germany for
                            collaborative research projects.
                          </li>
                          <li>
                            MoU with Sahyadri Pratishthan Gad Samvardhan Samiti
                            for environmental and heritage awareness.
                          </li>
                          <li>
                            MoU with India First Robotics Innovation and
                            Research LLP for robotics training.
                          </li>
                          <li>
                            MoU with IQAC Cluster India to support NAAC
                            accreditation improvement.
                          </li>
                          <li>
                            MoU with Gryphon Consultancy for training and
                            placement opportunities.
                          </li>
                          <li>
                            MoU with Edukerron to develop and monitor academic
                            work plans and projects.
                          </li>
                          <li>
                            MoU with Global Reach for international study tours,
                            lectures, and workshops.
                          </li>
                          <li>
                            MoU with MIT-ADT Incubator Forum for startup
                            mentoring programs under NITI Aayog.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "4. Research & Development Documents",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Registered Ph.D Guides AY [2024-2025]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Registered Ph.D Guides AY [2023-2024]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Registered Ph.D Guides AY [2022-2023]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research & Development Committee AY [2024-2025]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research & Development Committee AY [2023-2024]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research & Development Committee
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>
                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}

              {/* Publication Accordion */}
              {activeTab === "Publication" && (
                <>
                  {[
                    {
                      title: "1. Journals",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Key Publications in the Indexed Journals by
                              Faculty Members AY-[2023-2024]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Key Publications in the Indexed Journals by
                              Faculty Members AY-[2022-2023]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Key Publications in the Indexed Journals by
                              Faculty Members AY-[2021-2022]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "2. Conferences",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Conference 2023-24
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Conference 2022-23
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Conference 2021-22
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Books",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Books AY-2023-2024
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Books AY-2022-2023
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Books AY-2021-2022
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>
                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}

              {/* IPR Accordion */}
              {activeTab === "IPR" && (
                <div className="p-0">
                  {[
                    {
                      title: "1. Patents",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Patents Filed/Published in the AY-[2023-24]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Patents Filed/Published in the AY-[2022-23]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Patents Filed/Published in the AY-[2021-22]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "2. Copyrights",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Copyrights Filed in the academic year 2023-24
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Copyrights Filed in the academic year 2022-23
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Trademarks",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Trademarks Registered in the academic year 2023-24
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Trademarks Registered in the academic year 2022-23
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
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
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Research Activities Accordion */}
              {activeTab === "Research Activities" && (
                <div className="p-0">
                  {[
                    {
                      title: "1. Workshops/Seminars Conducted AY-[2023-24]",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Workshops/Seminars Conducted AY-[2023-24]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "2. Workshops/Seminars Conducted AY-[2022-23]",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Workshops/Seminars Conducted AY-[2022-23]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Workshops/Seminars Conducted AY-[2021-22]",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Workshops/Seminars Conducted AY-[2021-22]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
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
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Research Policy Accordion */}
              {activeTab === "Research Policy" && (
                <div className="p-0">
                  {[
                    {
                      title: "Research Policy [2023-24]",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research Policy Document for AY [2023-24]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "Research Policy [2022-23]",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research Policy Document for AY [2022-23]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "Research Policy [2021-22]",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research Policy Document for AY [2021-22]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
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
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
