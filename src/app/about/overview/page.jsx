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
            About Us
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Indira College of Engineering and Management (ICEM), Pune,
            established in 2007 under the esteemed Indira Group of Institutes,
            is a premier autonomous institution recognized for its commitment to
            academic excellence, innovation, and holistic student development.
            The college is approved by the All India Council for Technical
            Education (AICTE), New Delhi, affiliated to Savitribai Phule Pune
            University, and conferred autonomous status by the UGC. ICEM is also
            proudly NAAC-accredited, reaffirming its position as one of the top
            engineering and management institutes in Pune.
          </p>

          

          <p className="text-gray-700 leading-relaxed mb-4">
            ICEM hosts a diverse student body of over 1500 learners, offering a
            broad spectrum of undergraduate, postgraduate, and integrated
            programs.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
            Our Programs:
          </h3>

          <p className="text-gray-700 mb-2 font-medium">
            Undergraduate Engineering Programs in:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Artificial Intelligence & Data Science</li>
            <li>Information Technology</li>
            <li>Computer Engineering</li>
            <li>Electronics & Telecommunication Engineering</li>
            <li>Mechanical Engineering</li>
          </ul>

          <p className="text-gray-700 mb-2 font-medium">
            Postgraduate Engineering Programs (M.E.) in:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Computer Engineering</li>
            <li>Mechanical Engineering</li>
          </ul>

          <p className="text-gray-700 mb-2 font-medium">Integrated Programs:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Integrated MBA (BBA + MBA)</li>
            <li>Integrated MCA (BCA + MCA)</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            Through a well-balanced academic structure, ICEM blends theoretical
            learning with practical application. Our students gain hands-on
            exposure through industry-relevant projects, expert-led workshops,
            field visits, and case studies, ensuring they are industry-ready
            from day one.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            A standout feature of ICEM is its strong industry-academia
            interface, supported by collaborations and MoUs with prominent
            organizations and international institutions, including a key
            partnership with the University of Nottingham, Malaysia. These
            collaborations enable us to offer value-added programs conducted by
            industry experts, such as:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Workshops on emerging technologies</li>
            <li>Career-readiness and placement preparation bootcamps</li>
            <li>Advanced domain-specific certifications</li>
            <li>Entrepreneurship and innovation programs</li>
            <li>Professional skill development and etiquette training</li>
            <li>Mentorship and guest lectures by leading industry professionals</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our Scholar Clubs further enrich the student experience by
            recognizing and supporting academic talent through personalized
            mentoring in leadership, communication, ethics, and presentation
            skills.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our ultra-modern classrooms and labs, equipped with ICT panels, are
            renovated to meet global standards, providing a future-ready
            learning environment. With a highly qualified faculty, robust
            industry connections, and a student-centric approach, ICEM equips
            future engineers and managers to thrive in a dynamic, global
            environment.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            ICEM boasts an impressive placement record, with students securing
            opportunities in leading national and international companies across
            various industries. Our strong industry connections and career
            readiness programs ensure successful placements in top-tier
            organizations worldwide.
          </p>

          <p className="text-gray-700 leading-relaxed font-medium">
            We are proud to nurture the innovators, leaders, and change-makers
            of tomorrow.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 bg-primary text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
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
        <h3 className="text-2xl font-bold text-secondary mb-8">
          Leader's Desk
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center p-4 border border-gray-100"
            >
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
        <h3 className="text-2xl font-bold text-secondary mb-8">
          Head of Departments (HoDs)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hods.map((hod, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center p-4 border border-gray-100"
            >
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
