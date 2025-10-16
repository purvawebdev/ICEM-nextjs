"use client";
import Image from "next/image";


export default function Overview() {
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

  const leaders = [
    {
      name: "Dr. Nilesh Uke",
      designation:
        "Principal, Indira College of Engineering and Management, Pune.",
    },
    {
      name: "Dr. Soumitra S Das",
      designation:
        "Vice-Principal, Indira College of Engineering and Management, Pune.",
    },
    {
      name: "Dr. Saurabh Harishchand Gupta",
      designation:
        "Dean Academics, Indira College of Engineering and Management, Pune.",
    },
  ];

  const hods = [
    { name: "Dr. Mahesh G. Bhong", designation: "HoD Mechanical Engineering." },
    { name: "Prof. Savita Jangale", designation: "I/C HoD Civil Engineering." },
    { name: "Dr. Soumitra S Das", designation: "HoD Computer Engineering." },
    { name: "Dr. Poorna Shankar", designation: "HoD First Year Engineering." },
    {
      name: "Dr. Manjusha Tatiya",
      designation: "HoD Artificial Intelligence and Data Science.",
    },
    {
      name: "Dr. Archana Salve",
      designation: "HoD Master of Business Administration.",
    },
    {
      name: "Dr. Darshana Desai",
      designation: "HoD Master of Computer Applications.",
    },
    {
      name: "Prof. Dhiraj S. Bhagwate",
      designation: "HoD Electronics and Telecommunication Engineering.",
    },
    {
      name: "Dr. Awantika Bijwe",
      designation: "HoD Bachelor of Computer Applications.",
    },
    {
      name: "Dr. Deepa Jamnik",
      designation: "HoD Bachelor of Business Administration.",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="w-full h-[60vh] relative">
        <Image
          src="/ICEM_Banner.jpg"
          alt="ICEM Campus"
          className="w-full h-full object-cover"
          height={600}
          width={1700}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Indira College of Engineering and Management (ICEM)
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* Left Section */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Overview
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Indira College of Engineering and Management (ICEM), Pune is an
            AICTE approved engineering college in Pune, established in 2007
            under the umbrella of Indira Group of Institutes. The institute is
            approved by All India Council of Technical Education (AICTE), New
            Delhi, recognized by Government of Maharashtra and is affiliated to
            Savitribai Phule Pune University. If you are looking for engineering
            admission to an engineering college in Pune, then ICEM is a wise
            choice.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            ICEM, one of the best NAAC accredited engineering colleges in Pune,
            has laid its foundation in the serene and picturesque settings of
            Parandwadi Village of Maval Taluka, which was then dried in terms of
            educational and infrastructural facilities. With the untiring
            efforts of the management, this college has been successful in
            creating educational and economic possibilities in the adjacent
            rural areas.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Indira College of Engineering and Management, Pune is one of the
            engineering colleges in Pune, which constitutes of 1500+ students
            pursuing their UG and PG degree in Engineering and Management
            courses. The process for engineering admission is straightforward at
            ICEM, and it also has a reasonable engineering admission fees.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Indira College of Engineering Management, Pune has maintained a
            perfect balance between theory and practical learning through case
            studies, fieldwork, and industry interaction. Industrial tours help
            students gain exposure to modern practices and technologies, keeping
            them competitive and industry-ready.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The college fosters holistic development through scholar clubs,
            interpersonal skills enhancement, entrepreneurship programs, and
            ethics-driven education. Strong Industry-Institute Interaction and
            global collaborations make ICEM a top engineering institution in
            Pune.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 bg-primary  text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          {/* About Links */}
          <ul className="space-y-4 w-full mb-8">
            {rightLinks.map((link, index) => (
              <li
                key={index}
                className="pb-2 border-b border-white/30 hover:text-black cursor-pointer transition-colors"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Contact Form */}
          <div className="bg-secondary/90 p-6 rounded-lg mb-8">
            <h3 className="text-center text-lg font-bold mb-4">
              GET IN TOUCH WITH US
            </h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="YOUR NAME*"
                className="w-full p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="flex items-center bg-white rounded">
                <span className="pl-2 text-gray-600">🇮🇳</span>
                <input
                  type="text"
                  placeholder="PHONE NUMBER*"
                  className="w-full p-2 text-black rounded-r focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="email"
                placeholder="YOUR EMAIL ID"
                className="w-full p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select className="w-full p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Select Program</option>
                <option>Engineering</option>
                <option>MBA</option>
                <option>MCA</option>
              </select>
              <input
                type="text"
                placeholder="STATE"
                className="w-full p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-xs text-white/70">
                By providing your contact details, you agree to receive updates
                from Indira College through WhatsApp.
              </p>
              <button
                type="submit"
                className="w-full bg-secondary text-white font-semibold py-2 rounded hover:bg-primary/90 transition"
              >
                Apply Now
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-center text-primary font-bold mb-4 border-t border-white/30 pt-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm hover:text-primary cursor-pointer transition-colors"
                >
                  <span className="text-primary">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Leader's Desk */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-bold text-secondary mb-8">Leader's Desk</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center p-4 border border-gray-100"
            >
              {/* Empty Placeholder */}
              <div className="w-full h-64 bg-gray-100 rounded-t-xl flex items-center justify-center text-gray-500 text-sm">
                [ Image Placeholder ]
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">{leader.name}</h4>
                <p className="text-sm text-gray-600">{leader.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOD Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-bold text-secondary mb-8">Head of Departments (HoDs)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hods.map((hod, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center p-4 border border-gray-100"
            >
              {/* Empty Placeholder */}
              <div className="w-full h-60 bg-gray-100 rounded-t-xl flex items-center justify-center text-gray-500 text-sm">
                [ Image Placeholder ]
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">{hod.name}</h4>
                <p className="text-sm text-gray-600">{hod.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

