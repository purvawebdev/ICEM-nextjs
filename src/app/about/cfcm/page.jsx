"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function CFCM() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Chairperson's Message */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-secondary mb-6">Chairperson's Message</h3>
        <div className="flex flex-col md:flex-row gap-8 bg-gray-50 rounded-xl p-6 shadow-md">
          
          {/* Left Side - Image Placeholder + Socials */}
          <div className="md:w-1/3">
            {/* Image Placeholder */}
            <div className="w-full h-[380px] bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
              [ Image Placeholder ]
            </div>

            <div className="flex justify-center gap-4 mt-3 text-gray-700 text-lg">
              <FaFacebookF className="hover:text-primary transition-colors cursor-pointer" />
              <FaLinkedinIn className="hover:text-primary transition-colors cursor-pointer" />
              <FaInstagram className="hover:text-primary transition-colors cursor-pointer" />
              <FaTwitter className="hover:text-primary transition-colors cursor-pointer" />
              <FaYoutube className="hover:text-primary transition-colors cursor-pointer" />
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

          {/* Right Side - Message Content */}
          <div className="md:w-2/3 text-gray-700 leading-relaxed">
            <p className="mb-3">
              Pursuit of Management Education at Indira Group of Institutes has
              been an inspiring journey. With over two decades of existence,
              Indira strongly believes in the power of education to transform
              the youth. Indira embraces change and epitomizes matching
              innovation in curriculum, helping aspiring managers become capable
              professionals.
            </p>
            <p className="mb-3">
              Indira offers holistic and transformative learning experiences,
              designed and delivered by experts from industry and academia. Our
              curriculum keeps programs contextually abreast, and our pedagogy
              inspires application-oriented learning.
            </p>
            <p>
              Indira strives to create good human beings and not just
              professionals. With confidence that our intentions have matched
              our efforts, I wish you the very best in the future.
            </p>
          </div>
        </div>
      </div>

      {/* Visionary Educationist */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <h3 className="text-2xl font-bold text-secondary mb-4">
          A Visionary Educationist and Leader Par Excellence
        </h3>
        <p className="italic text-gray-600 mb-3">
          "A leader is the one who knows the way, goes the way and shows the
          way."
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The name Indira Group of Institutes (IGI) is synonymous with its
          driving force — Chairperson & Chief Mentor, Dr. Tarita Shankar, a
          dynamic, passionate, and caring leader who has shaped IGI from
          scratch. Dr. Shankar holds a Degree in Arts and Law and is an alumnus
          of the prestigious Harvard Business School, USA, having completed the
          'Owner/President Management' program (OPM).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Realizing during the early 1990s that Liberalization and
          Privatization of the Indian economy and the education sector would
          open immense opportunities, inspired by the wisdom of Chanakya and
          late Mrs. Indira Gandhi, and backed by the encouragement of her
          parents and well-wishers, Dr. Shankar founded the parent trust, Shree
          Chanakya Education Society, Pune.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Unwavering vision, meticulous planning, over two decades of hard work,
          and the support of her family and leadership team have seen IGI grow
          to 16 institutions delivering cutting-edge learning to more than
          18,000 students from KG to PG levels.
        </p>
      </div>

      {/* Awards & Accolades */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <h3 className="text-2xl font-bold text-secondary mb-4">Awards & Accolades</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dr. Tarita Shankar believes her work speaks for itself and has
          received numerous awards nationally and internationally, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            Exemplary Leader Award – Asian Leadership Awards, Dubai (Oct 2023)
          </li>
          <li>
            Care Club for Social Welfare Award – National Awards for Excellence (2023)
          </li>
          <li>
            Leader With A Social Heart – Golden Globe Tigers Awards, Kuala Lumpur (2023)
          </li>
          <li>
            Exceptional Women Awards 2022-23 – Mumbai, India
          </li>
          <li>
            Featured in ET Newsmakers – Women's Special, International Women's Day 2023
          </li>
          <li>
            NGO Leadership Award – World CSR Congress Awards (2023)
          </li>
          <li>
            Education Leadership Award – Business Leader of the Year (2023)
          </li>
          <li>
            Women Leader of the Year – Business Leaders of the World Awards (2022)
          </li>
          <li>
            Global Women Excellence Award – CMO Asia Awards, Singapore (2023)
          </li>
        </ul>
        <p className="text-gray-700 italic">
          "Awards recognize achievements, but true fulfillment lies in
          positively impacting the lives of others."
        </p>
      </div>

      {/* Indira Care Club */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <h3 className="text-2xl font-bold text-secondary mb-4">Indira Care Club</h3>
        <p className="italic text-gray-600 mb-3">
          "Compassion is an expression of strength... You are so confident that
          you can allow the sorrows of other people to touch you."
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          CARE – Counsel, Advise, Rise and Evolve – is an initiative by Dr. Tarita Shankar for
          students, staff, and alumni to seek guidance on professional and personal matters.
          Through one-to-one sessions with students weekly, she helps them grow as caring and empathetic human beings.
          The Care Club is a registered trust (17 Oct 2022) under the Maharashtra Public Trusts Act 1950 and its donations are exempt under the Income Tax Act 1961.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Care Club received the NGO Leadership Award at the World CSR Congress Awards in Mumbai (2023).
        </p>
      </div>

      {/* Dr. Tarita Shankar Awards for Excellence */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <h3 className="text-2xl font-bold text-secondary mb-4">
          Dr. Tarita Shankar Awards for Excellence
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Achieving excellence and striving for the highest quality are at the
          heart of Dr. Shankar's vision. Instituted in 2019 (the Silver Jubilee year of IGI), these awards honor outstanding individuals and organizations for their innovation, dedication and impact.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Now in its 5th year, the awards will be held at five national venues (Mumbai, Delhi, Bengaluru, Hyderabad, Chennai) and two international venues (Dubai, Singapore), continuing to inspire excellence and positive impact worldwide.
        </p>
      </div>

      {/* Looking Ahead - Team Indira @ 40 */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <h3 className="text-2xl font-bold text-secondary mb-4">Looking Ahead – Team Indira @ 40</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Indira Group recently celebrated 30 years of excellence (Sept 2023).
          Looking ahead, under Dr. Tarita Shankar's leadership, IGI has launched "Team Indira @ 40" – a group of 40 potential leaders who will shape IGI's next decade of growth.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Contribute to future planning and strategic development of IGI.</li>
          <li>
            Work with future leaders Mr. Shaan Mehendale and Mr. Sahil Mehendale and the core team of experts.
          </li>
          <li>
            Participate in decision-making and influence long-term organizational goals.
          </li>
          <li>
            Gain a platform for personal and professional growth and leadership skill development.
          </li>
        </ul>
      </div>

      {/* On a Personal Front */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-bold text-secondary mb-4">On a Personal Front</h3>
        <p className="italic text-gray-600 mb-3">
          "Successful leaders see the opportunity in every difficulty rather than the difficulty in every opportunity."
        </p>
        <p className="text-gray-700 leading-relaxed">
          Dr. Tarita Shankar's journey from a family-oriented young woman to an exemplary leader has been marked by perseverance and determination.
          An avid reader and eloquent speaker, she is known for her fearless opinions and deep philanthropic values.
          She is a traveler who has visited major countries worldwide, and beyond her professional accomplishments, she is a devoted mother and a grounded, compassionate individual who embodies the true spirit of leadership and humanity.
        </p>
      </div>
    </div>
  );
}

