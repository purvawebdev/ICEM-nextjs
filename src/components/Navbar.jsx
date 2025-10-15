"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { TbExternalLink } from "react-icons/tb";

const Navbar = () => {
  const [isHelplineOpen, setIsHelplineOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleHelpline = () => setIsHelplineOpen(!isHelplineOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleMouseEnter = (dropdownName) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setActiveDropdown(null), 150);
    setDropdownTimeout(timeout);
  };

  const toggleMobileDropdown = (dropdownName) => {
    setMobileDropdown(mobileDropdown === dropdownName ? null : dropdownName);
  };

  // ✅ Replace "to" with "href" everywhere
  const dropdownContent = {
    aboutUs: {
      title: "Our Navigation",
      sections: [
        {
          items: [
            { label: "Indira College of Engineering and Management (ICEM)", link: "/about/overview" },
            { label: "Shree Chanakya Education Society", link: "/about/chanakya-edu" },
            { label: "Indira Group of Institute", link: "/about/IGOI" },
            { label: "Chairpersons Profile & Chief Mentor IGL", link: "/about/cfcm" },
            { label: "Facilities", link: "/facilities/sports" },
            { label: "Governance", link: "/facilities/governance" },
            { label: "Campus Leadership", link: "" },
            { label: "Examination", link: "/examination" },
            { label: "Accreditation", link: "/accreditation" },
          ],
        },
      ],
    },
    campusLife: {
      title: "Campus Life",
      sections: [
        {
          title: "Student Services",
          items: [
            { label: "Student Welfare", link: "/campus-life/student-welfare" },
            { label: "IIC", link: "/campus-life/iic" },
            { label: "Induction Programme", link: "/campus-life/induction-programme" },
            { label: "Student Council", link: "/campus-life/student-council" },
            { label: "National Service Scheme", link: "/campus-life/nss" },
            { label: "ICEM Awards", link: "/campus-life/icem-awards" },
            { label: "Academics", link: "/campus-life/academics" },
            { label: "Committies", link: "/campus-life/committees" },
            { label: "Grievance Redressals", link: "/campus-life/grievance-redressals" },
          ],
        },
      ],
    },
    programs: {
      title: "Programs & Admission",
      sections: [
        {
          title: "Undergraduate Programs",
          items: [
            { label: "Civil Engineering", link: "/programs/civil-engineering" },
            { label: "Computer Engineering", link: "/programs/computer-engineering" },
            { label: "Mechanical Engineering", link: "/programs/mechanical-engineering" },
            { label: "Artificial Intelligence and Data Science", link: "/programs/ai-ds" },
            { label: "Electronics and Telecommunication", link: "/programs/entc" },
            { label: "First Year Engineering", link: "/programs/fye" },
            { label: "Information Technology", link: "/programs/it" },
            { label: "Integrated MBA (BBA + MBA)", link: "/programs/imba" },
            { label: "Integrated MCA (BCA + MCA)", link: "/programs/imca" },
          ],
        },
        {
          title: "Postgraduate Programs",
          items: [
            { label: "MBA", link: "/programs/mba" },
            { label: "MCA", link: "/programs/mca" },
            { label: "M-Tech in Mechanical Engineering", link: "/programs/mtech-mech" },
            { label: "M-Tech in Computer Science", link: "/programs/mtech-comp" },
          ],
        },
      ],
    },
  };

  const renderDropdownContent = (content) => (
    <div className="max-w-8xl px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {content.sections.map((section, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold text-secondary mb-4">
            {section.title || content.title}
          </h3>
          <ul className="space-y-4 text-gray-800 text-sm">
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex justify-between items-center border-b border-gray-300 pb-2"
              >
                {item.link ? (
                  <Link
                    href={item.link}
                    className="font-semibold flex justify-between items-center w-full text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>{item.label || item}</span>
                    <TbExternalLink className="font-semibold text-gray-900" />
                  </Link>
                ) : (
                  <div className="font-semibold flex justify-between items-center w-full">
                    <span>{item.label || item}</span>
                    <TbExternalLink className="text-gray-400 opacity-50" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="w-full h-[12vh] flex bg-white shadow-sm font-sans relative z-50">
        {/* Left: Logo */}
        <div className="w-[80%] md:w-[30%] h-full flex items-center justify-start pl-4 md:pl-0 md:justify-center">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="ICEM Logo"
              className="h-16 md:h-20 w-auto cursor-pointer"
              priority
                width={200}
  height={200}
            />
          </Link>
        </div>

        {/* Right: Desktop Links */}
        <div className="hidden md:flex w-[70%] h-full flex-col">
          {/* Top Bar */}
          <div className="flex justify-end w-full h-[45%] text-xs text-gray-700 bg-white">
            <div className="flex gap-8 items-center font-bold">
              <a href="https://rapid.grayquest.com/iudp-master" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Pay Fee</a>
              <span className="text-gray-400">|</span>
              <a href="https://indira.edupluscampus.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">ERP Login Staff</a>
              <span className="text-gray-400">|</span>
              <a href="https://myindira.edupluscampus.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">ERP Login Student</a>
              <span className="text-gray-400">|</span>
              <a href="https://indiraicem.ac.in/ICEM-360-degree-virtual-tour/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">360<sup>°</sup> Tour</a>
              <span className="text-gray-400">|</span>
              <a href="https://lc-icem-sumedh.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Leaving Certificate</a>
              <span className="text-gray-400">|</span>
              <Link href="/contact" className="hover:text-primary">Contact Us</Link>
              <button
                onClick={toggleModal}
                className="ml-4 bg-gradient-to-r from-primary to-[#003c84] text-white px-6 py-1 rounded font-bold hover:opacity-90 transition-all"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Bottom Nav Links */}
          <div className="flex justify-end items-center h-[55%] text-black px-6 text-sm font-medium whitespace-nowrap gap-10">
            <div onMouseEnter={() => handleMouseEnter("aboutUs")} onMouseLeave={handleMouseLeave} className="hover:text-primary cursor-pointer">
              About Us
            </div>
            <div onMouseEnter={() => handleMouseEnter("campusLife")} onMouseLeave={handleMouseLeave} className="hover:text-primary cursor-pointer">
              Campus Life
            </div>
            <div onMouseEnter={() => handleMouseEnter("programs")} onMouseLeave={handleMouseLeave} className="hover:text-primary cursor-pointer">
              Programs & Admission
            </div>
            <Link href="/placement" className="hover:text-primary">Placement</Link>
            <Link href="/research" className="hover:text-primary">Research</Link>
            <Link href="/alumni" className="hover:text-primary">Alumni</Link>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden w-[20%] flex items-center justify-center pr-4">
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-primary">
            <HiMenuAlt2 size={28} />
          </button>
        </div>

        {/* Dropdown Menu - Desktop */}
        {activeDropdown && (
          <div
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
            className="absolute top-full left-0 w-full backdrop-blur-md bg-white/60 shadow-xl border-t border-gray-200 z-50 hidden md:block"
          >
            {renderDropdownContent(dropdownContent[activeDropdown])}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
