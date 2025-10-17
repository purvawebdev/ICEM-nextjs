export default function Upskilling() {
  return (
    <>
      {/* Upskilling for the Future Section (Balanced Compact Layout) */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-8">
            Upskilling for the Future
          </h2>

          {/* Skillverse Card */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm mb-6 overflow-hidden">
            {/* Left Image Placeholder */}
            <div className="bg-gray-200 md:w-[35%] h-48 md:h-[180px] flex items-center justify-center text-gray-500 text-sm font-medium">
              (image here)
            </div>

            {/* Right Text */}
            <div className="p-5 md:w-[65%] flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Skillverse: Gaining a Competitive Edge
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                To keep students ahead in an evolving job market, Skillverse
                offers industry-specific certifications in AI, Digital
                Marketing, Finance, and other emerging domains. With training
                modules focusing on leadership skills, case studies, and live
                projects, students emerge as highly skilled professionals ready
                to thrive in a competitive landscape.
              </p>
            </div>
          </div>

          {/* URA Card */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm overflow-hidden">
            {/* Left Image Placeholder */}
            <div className="bg-gray-200 md:w-[35%] h-48 md:h-[180px] flex items-center justify-center text-gray-500 text-sm font-medium">
              (image here)
            </div>

            {/* Right Text */}
            <div className="p-5 md:w-[65%] flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                University Readiness Academy (URA): A Launchpad for Success
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                The University Readiness Academy (URA) is an exclusive
                upskilling initiative that empowers students with advanced
                technical and business skills through hands-on training and
                projects, ensuring graduates excel in placements and corporate
                roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staying Future-Ready Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading and Intro */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-4">
            Staying Future-Ready
          </h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
            At Indira College, industry readiness is seamlessly woven into our
            DNA. Through structured collaborations, cutting-edge training
            programs, and an industry-aligned curriculum, we ensure our students
            are prepared not just for their first job, but for a lifetime of
            career success. Your future begins here.
          </p>

          {/* 1️⃣ Board of Studies */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm mb-6 overflow-hidden">
            {/* Left Image Placeholder */}
            <div className="bg-gray-200 md:w-[35%] h-48 md:h-[180px] flex items-center justify-center text-gray-500 text-sm font-medium">
              (image here)
            </div>

            {/* Right Text */}
            <div className="p-5 md:w-[65%] flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Board of Studies: Keeping Our Curriculum Aligned with Industry
                Needs
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our Board of Studies, comprising academicians and industry
                leaders, plays a crucial role in keeping our curriculum aligned
                with industry trends. By integrating the latest technologies and
                essential workplace skills, we foster critical thinking,
                innovation, and problem-solving abilities. This ensures that our
                graduates remain relevant and highly sought after by recruiters.
              </p>
            </div>
          </div>

          {/* 2️⃣ Professors of Practice */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm overflow-hidden">
            {/* Left Image Placeholder */}
            <div className="bg-gray-200 md:w-[35%] h-48 md:h-[180px] flex items-center justify-center text-gray-500 text-sm font-medium">
              (image here)
            </div>

            {/* Right Text */}
            <div className="p-5 md:w-[65%] flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Professors of Practice: Learning from Industry Leaders
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                At Indira College, learning extends beyond textbooks through our
                Professors of Practice (PoP) initiative. With over 50 industry
                veterans actively involved in teaching, students gain insights
                into industry expectations, challenges, and best practices.
                These experts mentor students on real-world projects, case
                studies, and job-readiness strategies, enriching their learning
                experience with practical exposure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
