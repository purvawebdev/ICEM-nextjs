import React from "react";
import Image from "next/image";
import Link from "next/link";

function StudentWelfare() {
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

  const committeeMembers = [
    [
      "Prof. Vijay Kumar Saini",
      "Civil",
      "9819298069",
      "vijaykumar.saini@indiraicem.ac.in",
    ],
    [
      "Prof. Pallavi Chavan",
      "AI&DS",
      "9175151731",
      "pallavichavan@indiraicem.ac.in",
    ],
    [
      "Prof. Sagar Chirade",
      "Mechanical",
      "9860477823",
      "sagar.chirade@indiraicem.ac.in",
    ],
    [
      "Prof. Minal Jungare",
      "Computer",
      "9923979064",
      "minal.jungare@indiraicem.ac.in",
    ],
    [
      "Prof. Meenakshi Patil",
      "EnTc",
      "9921844112",
      "meenakshi.madgunaki@indiraicem.ac.in",
    ],
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="w-full h-[60vh] relative">
        <Image
          src="/ICEM_Banner.jpg" // Now from public folder
          alt="Student Development Cell"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Student Development Cell
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* Left Section */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          {/* Objectives Section */}
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Objectives of the Student Development Cell
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
            <li>
              Propose various schemes from the{" "}
              <b>Board of Students' Development (BSD)</b> at Savitribai Phule
              Pune University (SPPU) and ensure their effective implementation
              once approved by BSD, SPPU.
            </li>
            <li>
              Form a <b>student council</b> in accordance with BSD, SPPU
              guidelines, guiding students in fulfilling their responsibilities
              and implementing various schemes and welfare activities.
            </li>
            <li>
              Serve as a liaison between the institute and SPPU, attend meetings
              at BSD, SPPU, and coordinate meetings with SDC faculty and student
              members.
            </li>
            <li>
              Ensure the follow-up, implementation, and auditing of approved
              BSD, SPPU schemes.
            </li>
          </ul>

          {/* Committee Table */}
          <h3 className="text-xl font-semibold text-secondary mb-4">
            Student Development Cell Committee Members:
          </h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border border-gray-300 text-left text-gray-800">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-2">Staff Name</th>
                  <th className="border border-gray-300 p-2">Department</th>
                  <th className="border border-gray-300 p-2">Contact No.</th>
                  <th className="border border-gray-300 p-2">Mail ID</th>
                </tr>
              </thead>
              <tbody>
                {committeeMembers.map(([name, dept, contact, email], index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-50">
                    <td className="border border-gray-300 p-2">{name}</td>
                    <td className="border border-gray-300 p-2">{dept}</td>
                    <td className="border border-gray-300 p-2">{contact}</td>
                    <td className="border border-gray-300 p-2">{email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="md:w-1/3 bg-primary text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          {/* Sidebar Links */}
          <ul className="space-y-4 mb-8">
            {rightLinks.map((link, index) => (
              <li
                key={index}
                className="pb-2 border-b border-white/30 hover:underline cursor-pointer transition-all"
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
                className="w-full p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <div className="flex items-center bg-white rounded focus-within:ring-2 focus-within:ring-secondary">
                <span className="pl-2 text-black">🇮🇳</span>
                <input
                  type="text"
                  placeholder="PHONE NUMBER*"
                  className="w-full p-2 text-black rounded-r focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="YOUR EMAIL ID"
                className="w-full p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <select className="w-full p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-secondary">
                <option>Select Program</option>
                <option>Engineering</option>
                <option>MBA</option>
                <option>MCA</option>
              </select>
              <input
                type="text"
                placeholder="STATE"
                className="w-full p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <p className="text-xs text-gray-300">
                By providing your contact details, you agree to receive updates
                from Indira College through WhatsApp.
              </p>
              <button
                type="submit"
                className="w-full bg-secondary text-white font-semibold py-2 rounded hover:bg-white hover:text-[#003c84] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
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
                  className="flex items-center gap-2 text-sm hover:text-tertiary cursor-pointer transition-colors"
                >
                  <span className="text-secondary">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Earn & Learn Scheme Section */}
      <div className="w-full bg-gray-50 p-10 mt-6">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Karmaveer Bhaurao Patil Earn & Learn Scheme
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            <b>Indira College of Engineering and Management, Pune</b>, offers
            the <b>Karmaveer Bhaurao Patil Earn & Learn Scheme</b> for
            financially needy students. Sponsored by the Board of Students'
            Development, Savitribai Phule Pune University (SPPU), this scheme
            provides students with opportunities to work in various labs, the
            library, and other areas within the college. In return, they receive
            financial compensation for their contributions.
          </p>

          <p className="text-gray-700 mb-6">
            This program not only supports the college's operations but also
            enables students to earn money while acquiring valuable professional
            skills and understanding the importance of financial responsibility.
            Each year, students are selected to participate in the Earn & Learn
            Scheme during the academic year.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-3">
            Objectives of the Scheme
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              To provide financial assistance to economically weaker, needy, and
              promising students to acquire higher education.
            </li>
            <li>Upholding the dignity of human labor.</li>
            <li>To become a knowledge servant.</li>
            <li>Motivating students about self-employment.</li>
            <li>Creating awareness of work culture among students.</li>
          </ul>

          <h3 className="text-xl font-semibold text-secondary mb-3">
            Eligibility for the Scheme
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              Students must have a parental annual income of Rs. 8,00,000/- or
              less, as per government rules.
            </li>
            <li>
              Income proof must be provided: either a certificate signed by the
              Tehsildar or Form No. 16 for employed parents.
            </li>
            <li>
              Applicable to regular students in degree or postgraduate courses
              at affiliated colleges, recognized institutes, or university
              departments under Savitribai Phule Pune University.
            </li>
            <li>
              Re-admitted or failed students will be ineligible for the Earn and
              Learn scheme.
            </li>
            <li>
              Students participating in the scheme must maintain at least 75%
              class attendance.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-secondary mb-3">
            Work to be Done Under the 'Earn and Learn' Scheme
          </h3>
          <p className="text-gray-700 mb-2">
            Students should be assigned tasks that promote their overall
            development and help them acquire various skills. Activities may
            include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Producing seedlings through a nursery.</li>
            <li>
              Preparing stationery materials required by the university or
              college, such as pens, files, notebooks, etc.
            </li>
            <li>
              Assisting with hostel administration, such as managing the phone
              call facility.
            </li>
            <li>
              Providing opportunities for students with skills or certificates
              in plumbing, electrical work, carpentry, and similar trades to
              utilize their knowledge and interests.
            </li>
            <li>
              Assisting in educational laboratories by receiving training in
              handling equipment and working as instrument operators.
            </li>
            <li>Perform typing and printing tasks as part of training.</li>
            <li>
              Assist faculty as research assistants in the postgraduate
              departments of the university.
            </li>
            <li>
              Undertake computer-based tasks in various departments, ensuring
              confidentiality and proper conduct.
            </li>
            <li>Work as a library assistant.</li>
          </ul>

          <h3 className="text-xl font-semibold text-secondary mb-3">
            Working Hours
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              Students can be assigned up to three hours of office work per day.
            </li>
            <li>Office work will be suspended on holidays.</li>
            <li>
              Fieldwork may also be assigned for up to three hours per day.
            </li>
            <li>
              Students should be given a maximum of 75 hours of work per month.
            </li>
            <li>
              No work should be assigned on August 15th, January 26th, or May
              1st.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-secondary mb-3">
            Rate of Work
          </h3>
          <p className="text-gray-700">
            Students working under the scheme will be paid a remuneration of{" "}
            <b>Rs. 55/- per hour.</b> This rate should remain unchanged unless
            revised by the University Authority Board, in which case updates
            will be communicated to affiliated colleges and recognized
            institutions separately.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentWelfare;
