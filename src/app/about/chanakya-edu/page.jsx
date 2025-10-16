"use client";
import Image from "next/image";

export default function ChanakyaEdu() {
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

  const trustees = [
    {
      name: "Smt. Sarita Shankar Wakalkar",
      role: "President",
    },
    {
      name: "Dr. Tarita Shankar",
      role: "Chief Managing Trustee and Founder Secretary",
    },
    {
      name: "Mr. Shardul Gangal",
      role: "Vice - President",
    },
    {
      name: "Mr. Sahil Tarita Shankar",
      role: "Joint Secretary",
    },
    {
      name: "Mr. Rajesh Deshmukh",
      role: "Treasurer",
    },
    {
      name: "Ms. Priya Joshi",
      role: "Trustee Member",
    },
    {
      name: "Mr. Karan Patil",
      role: "Trustee Member",
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
          height={700}
          width={1700}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Shree Chanakya Education Society (SCES)
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* Left Section */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Shree Chanakya Education Society
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Shree Chanakya Education Society (SCES) was established in
            February 1994, under the visionary leadership of Dr. Tarita Shankar,
            with the aim of providing top quality post-graduate education in the
            ﬁelds of Business Management, International Business and Information
            Technology. By consistently providing quality education over the
            past few decades, institutes at Indira Group are now considered as
            some of the best in Pune.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            At a time when India was struggling to put its economy back on its
            feet, Dr. Tarita Shankar sensed that education too would have to
            become more broad-based and more vocational in nature if India was
            to stand up to global competition. Thus, in 1994, began a saga of
            growth and quality education — a story that continues with 14 full
            ﬂedged Institutes making a strong presence in Pune's educational
            landscape.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Since inception, the Institutes managed by SCES have maintained high
            academic standards and have successfully provided trained manpower
            to the industrial and services sector of the country.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            With a modest strength of 60 students pursuing a single course, SCES
            has grown steadily and today boasts of 14 Institutes with over 8000
            students from across India pursuing multi-disciplinary programs.
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            The objective of the institute is to provide 'Management education
            in a corporate environment', which has been possible due to the
            sincere and dedicated efforts of the SCES members, who bring
            invaluable experience from varied sectors.
          </p>

          {/* Board of Trustees Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-secondary mb-2">Board of Trustees</h3>
            <p className="text-gray-600 mb-8">
              Managing Committee Members/Trustees of 'Shree Chanakya Education
              Society'
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {trustees.map((member, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Placeholder instead of Image */}
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                    [ Image Placeholder ]
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-semibold text-lg text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                Enquire Now
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
    </div>
  );
}
