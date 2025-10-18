"use client";
import Image from "next/image";

export default function Companies() {
  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
    "/logos/logo7.png",
    "/logos/logo8.png",
    "/logos/logo9.png",
    "/logos/logo10.png",
    "/logos/logo11.png",
    "/logos/logo12.png",
    "/logos/logo42.png",
    "/logos/logo14.png",
    "/logos/logo41.png",
    "/logos/logo16.png",
    "/logos/logo17.png",
    "/logos/logo18.png",
    "/logos/logo19.png",
    "/logos/logo20.png",
    "/logos/logo21.png",
    "/logos/logo22.png",
    "/logos/logo23.png",
    "/logos/logo24.png",
    "/logos/logo25.png",
    "/logos/logo26.png",
    "/logos/logo27.png",
    "/logos/logo28.png",
    "/logos/logo29.png",
    "/logos/logo30.png",
    "/logos/logo31.png",
    "/logos/logo32.png",
    "/logos/logo33.png",
    "/logos/logo34.png",
    "/logos/logo35.png",
    "/logos/logo36.png",
    "/logos/logo37.png",
    "/logos/logo38.png",
    "/logos/logo39.png",
    "/logos/logo40.png",
    "/logos/logo43.png",
    "/logos/logo44.png",
  ];

  return (
    <>
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 uppercase">
            Your Career, Connected to the Best
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            The consistent quality and industry-readiness of ICEM graduates have
            made our campus a preferred recruitment destination for top-tier
            companies across the globe. These partnerships are a testament to
            our shared commitment to nurturing future-ready professionals
          </p>

          {/* ✅ Recruiter Logos Grid (replaces placeholders) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-3 place-items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center w-28 h-16 bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Image
                  src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                fill
                className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority={index < 7} // load first row faster
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
