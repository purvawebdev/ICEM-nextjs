export default function Companies() {
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
          {/* Company Placeholder Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 24 }).map((_, index) => (
              <div
                key={index}
                className="h-20 bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium shadow-sm hover:shadow-md transition-all"
              >
                (image here)
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
