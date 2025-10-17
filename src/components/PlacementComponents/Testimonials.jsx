import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      logo: "Logo Here",
      quote:
        "ICEM has always provided us with trained mechanical engineers, and as an organization, we appreciate the college's efforts to prepare students for the industry.",
      name: "Mr. Rahul Bagale",
      position: "Group HR Head – Force Motors",
    },
    {
      logo: "Logo Here",
      quote:
        "We have entered into an MOU with ICEM to actively support their endeavours in providing excellent job opportunities for civil engineering students. Our longstanding partnership of over a decade with ICEM will continue further.",
      name: "Mr. Siddharth Moorthy",
      position: "Managing Director – Vascon Engineers",
    },
    {
      logo: "Logo Here",
      quote:
        "While conducting campus recruitment drives across the country, ICEM consistently emerges as the top choice due to their exceptional commitment to preparing students for their dream job offers.",
      name: "Ms. Shilpi Mahar",
      position: "Manager, TA – Data Axle",
    },
    {
      logo: "Logo Here",
      quote:
        "We appreciate the designed training programs by ICEM aimed at equipping core Mechanical Engineering students with the necessary skills to excel in the industry. These programs ensure that students emerge as industry-ready professionals.",
      name: "Ms. Sumana Chakraborty",
      position: "HR Business Partner – Bridgestone India",
    },
    {
      logo: "Logo Here",
      quote:
        "ICEM has been a part of the Ready Engineers Programme for a long time. Their way of creating resources ensures a transformative experience that prepares students effectively for the corporate world.",
      name: "Mr. Sushant Kumar",
      position:
        "India Lead – University Relations & Campus Recruitment, Tata Technologies",
    },
  ];
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Trusted by the Best in the Business
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-14 leading-relaxed">
            Our strongest endorsements come from our recruitment partners.
            Discover why leading companies consistently choose ICEM graduates to
            drive their success.
          </p>

          {/* Horizontal Testimonial Cards */}
          <div className="flex flex-col space-y-5">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center text-left bg-white/90 text-secondary shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-8 gap-6"
              >
                {/* Logo Circle */}
                <div className="flex-shrink-0 w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center text-sm font-medium text-gray-50">
                  {item.logo}
                </div>

                {/* Quote Section */}
                <div className="flex-1">
                  <FaQuoteLeft className="text-primary text-lg mb-2" />
                  <p className="italic leading-relaxed text-sm md:text-base">
                    {item.quote}
                  </p>
                  <FaQuoteRight className="text-primary text-lg mt-2" />
                </div>

                {/* Author Info */}
                <div className="text-center md:text-right md:w-1/4">
                  <h3 className="text-sm md:text-base font-bold text-secondary">
                    {item.name}
                  </h3>
                  <p className="text-xs md:text-sm text-black">
                    {item.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
