export default function ResearchLab() {
  return (
    <>
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border border-gray-200 shadow-md p-8 bg-white rounded-lg">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Research Labs & Facilities
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                ICEM stands as a hub of innovation and experiential learning,
                where technology, creativity, and research converge. Every
                laboratory and facility is designed to nurture curiosity,
                encourage experimentation, and build industry-relevant
                expertise. These spaces empower students to translate concepts
                into real-world solutions, fostering hands-on learning,
                interdisciplinary collaboration, and future-ready innovation.
              </p>

              <h3 className="text-lg font-semibold text-secondary mb-4">
                Key Facilities Include:
              </h3>

              {/* ✅ Replaced Logos with List */}
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Programming Labs – I & II</li>
                <li>Artificial Intelligence & Research Labs – I & II</li>
                <li>Project Lab</li>
                <li>Database Management System Lab</li>
                <li>iOS (Apple) Lab</li>
                <li>Robotics & Automation Lab</li>
                <li>Mechatronics Lab</li>
                <li>CAD & Modelling Lab</li>
                <li>Electronics & Digital Electronics Labs</li>
                <li>Communication & IoT Labs</li>
              </ul>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full h-[580px] bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium rounded-md">
              (image here)
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
