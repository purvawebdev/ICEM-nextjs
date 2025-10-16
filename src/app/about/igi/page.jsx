"use client";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function IGOI() {
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

  const institutes = [
    { name: "Indira Institute of Management Pune (IIMP)", url: "www.indiraiimp.edu.in" },
    { name: "Indira Institute of Management PGDM (IIMP)", url: "www.indiraiimppgdm.edu.in" },
    { name: "Indira College of Pharmacy (ICP)", url: "www.indiraicp.edu.in" },
    { name: "Indira School of Business Studies PGDM (ISBS)", url: "www.indiraisbs.ac.in" },
    { name: "Indira School of Business Studies MBA (ISBS-MBA)", url: "www.indiraisbsmb.edu.in" },
    { name: "Indira Global Business School (IGBS)", url: "www.indiraigbs.edu.in" },
    { name: "Indira College of Commerce & Science (ICCS)", url: "www.iccs.ac.in" },
    { name: "Indira College of Engineering & Management (ICEM)", url: "www.indiraicem.ac.in" },
    { name: "Indira National School (INS)", url: "www.indiranationalschool.ac.in" },
    { name: "Indira College of Architecture & Design (ICAD)", url: "www.indiraicad.edu.in" },
    { name: "Indira College of Arts, Commerce & Science (ICACS)", url: "www.icacs.ac.in" },
    { name: "Indira School of Communication (ISC)", url: "www.indiraisc.edu.in" },
    { name: "Indira National School - Parandwadi (INS-P)", url: "www.insparandwadi.ac.in" },
    { name: "Indira College of Physiotherapy (ICP)", url: "www.indiraicp.ac.in" },
    { name: "Indira Institute of Technology (IIT)", url: "www.indiraiit.edu.in" },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="w-full h-[60vh] relative">
        <Image src="/ICEM_Banner.jpg" alt="Indira Group Banner" width={1700} height={600} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Indira Group of Institutes (IGI)
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* Left Section */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Indira Group of Institutes (IGI)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Shree Chanakya Education Society's "Indira Group of Institutes",
            Pune was established in 1994 with a vision to provide sustainable
            impetus to the corporate and entrepreneurial abilities in the youth.
            Under the leadership of Dr. Tarita Shankar, IGI has grown into a
            hub of excellence fostering innovation, leadership, and social
            responsibility.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Through disciplines like Management, Information Technology,
            Pharmacy, Commerce, Science, Engineering, and Mass Communication,
            IGI offers education from Kindergarten to Doctorate levels.
            Collaboration with industry experts ensures students develop both
            professional competence and entrepreneurial skills.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Having completed over two decades of excellence, IGI stands as a
            symbol of quality education and leadership in India.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Ranked among the top 2 B-Schools in Pune by AIMA – IMJ.</li>
            <li>Top 30 All India ranking on Industry Interface parameters.</li>
            <li>Consistently strong academic results and placements.</li>
            <li>Microsoft campus agreement for training and software access.</li>
            <li>Accredited by NBA and recognized by multiple national bodies.</li>
          </ul>
        </div>

        {/* Right Sidebar */}
        <div className="md:w-1/3 bg-primary text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          <ul className="space-y-4 w-full mb-8">
            {rightLinks.map((link, index) => (
              <li key={index} className="pb-2 border-b border-white/30 hover:text-black cursor-pointer transition-colors">
                {link}
              </li>
            ))}
          </ul>

          {/* Contact Form */}
          <div className="bg-secondary/90 p-6 rounded-lg mb-8">
            <h3 className="text-center text-lg font-bold mb-4">GET IN TOUCH WITH US</h3>
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
                By providing your contact details, you agree to receive updates from Indira College through WhatsApp.
              </p>
              <button type="submit" className="w-full bg-secondary text-white font-semibold py-2 rounded hover:bg-primary/90 transition">
                Apply Now
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-center text-primary font-bold mb-4 border-t border-white/30 pt-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm hover:text-primary cursor-pointer transition-colors">
                  <span className="text-primary">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Chairperson's Message */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <h3 className="text-2xl font-bold text-secondary mb-6">Chairperson's Message</h3>
        <div className="flex flex-col md:flex-row gap-8 bg-gray-50 rounded-xl p-6 shadow-md">
          <div className="md:w-1/3">
            {/* Placeholder for Chairperson Image */}
            <div className="w-full h-[380px] bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
              [ Image Placeholder ]
            </div>
            <div className="flex justify-center gap-4 mt-3 text-gray-700">
              <FaFacebookF /> <FaLinkedinIn /> <FaInstagram /> <FaTwitter /> <FaYoutube />
            </div>
            <div className="mt-3 text-center">
              <h4 className="font-semibold text-lg">Dr. Tarita Shankar</h4>
              <p className="text-sm text-gray-600">
                Founder Secretary & Chief Managing Trustee, SCES <br />
                Chairperson & Chief Mentor, Indira Group of Institutes
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Email:{" "}
                <a
                  href="mailto:taritashankar@indiraedu.com"
                  className="text-primary hover:underline"
                >
                  taritashankar@indiraedu.com
                </a>
              </p>
            </div>
          </div>

          <div className="md:w-2/3 text-gray-700 leading-relaxed">
            <p className="mb-3">
              Pursuit of Management Education at Indira Group of Institutes has
              been an inspiring journey. With over two decades of existence,
              Indira strongly believes in the power of education to transform
              the youth.
            </p>
            <p className="mb-3">
              Indira offers holistic and transformative learning experiences,
              designed by industry and academia experts. Our curriculum promotes
              innovation and application-based learning.
            </p>
            <p>
              Indira strives to create not just professionals but responsible
              citizens. We remain committed to nurturing future leaders of
              tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Principal's Message */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-bold text-secondary mb-6">Principal's Message</h3>
        <div className="flex flex-col md:flex-row gap-8 bg-gray-100 rounded-xl p-6 shadow-md">
          <div className="md:w-1/3">
            {/* Placeholder for Principal Image */}
            <div className="w-full h-[350px] bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
              [ Image Placeholder ]
            </div>
            <div className="flex justify-center gap-4 mt-3 text-gray-700">
              <FaFacebookF /> <FaLinkedinIn /> <FaInstagram /> <FaTwitter /> <FaYoutube />
            </div>
            <div className="mt-3 text-center">
              <h4 className="font-semibold text-lg">Dr. Nilesh Uke</h4>
              <p className="text-sm text-gray-600">Principal, ICEM</p>
            </div>
          </div>

          <div className="md:w-2/3 text-gray-700 leading-relaxed">
            <p className="mb-3">
              Indira Institutes have been built on a strong foundation of
              academic excellence and innovation. It gives me immense pride to
              lead ICEM, fostering creativity, discipline, and research-driven
              growth.
            </p>
            <p className="mb-3">
              We prepare students for the evolving challenges of the
              professional world through real-world exposure and mentorship from
              industry experts.
            </p>
            <p>
              Our mission is to develop ethical, confident, and competent
              leaders who bring positive change to society.
            </p>
          </div>
        </div>
      </div>

      {/* Institutes Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-bold text-secondary mb-8">
          Institutes under Indira Group (IGI)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {institutes.map((inst, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Placeholder instead of Image */}
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-t-xl">
                [ Image Placeholder ]
              </div>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-gray-800 text-base">
                  {inst.name}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{inst.url}</p>
                <button className="mt-3 px-4 py-2 bg-secondary text-white text-sm font-medium rounded hover:bg-secondary/90 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
