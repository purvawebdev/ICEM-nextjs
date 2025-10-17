"use client"

import React, { useState } from "react";
import Head from "next/head";

export default function Alumni() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    graduationYear: "",
    course: "",
    currentCompany: "",
    position: "",
    linkedin: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for registering! We will get back to you soon.");
  };

  const alumniProfiles = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Software Engineer",
      company: "Google",
      year: "2018",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Product Manager",
      company: "Microsoft",
      year: "2019",
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Data Scientist",
      company: "Amazon",
      year: "2017",
    },
    {
      id: 4,
      name: "Neha Gupta",
      position: "UX Designer",
      company: "Adobe",
      year: "2020",
    },
    {
      id: 5,
      name: "Sanjay Verma",
      position: "Business Analyst",
      company: "TCS",
      year: "2016",
    },
    {
      id: 6,
      name: "Anjali Singh",
      position: "Marketing Head",
      company: "Infosys",
      year: "2018",
    },
    {
      id: 7,
      name: "Vikram Joshi",
      position: "System Architect",
      company: "IBM",
      year: "2015",
    },
    {
      id: 8,
      name: "Sneha Reddy",
      position: "DevOps Engineer",
      company: "Cisco",
      year: "2019",
    },
    {
      id: 9,
      name: "Rahul Mehta",
      position: "AI Researcher",
      company: "NVIDIA",
      year: "2021",
    },
    {
      id: 10,
      name: "Pooja Desai",
      position: "Cloud Architect",
      company: "AWS",
      year: "2017",
    },
    {
      id: 11,
      name: "Karan Malhotra",
      position: "Tech Lead",
      company: "Uber",
      year: "2016",
    },
    {
      id: 12,
      name: "Divya Iyer",
      position: "Data Engineer",
      company: "Netflix",
      year: "2020",
    },
  ];

  const courses = [
    "Computer Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electronics and Telecommunication",
    "Information Technology",
    "Artificial Intelligence and Data Science",
    "MBA",
    "MCA",
    "Integrated MBA",
    "Integrated MCA",
  ];

  const testimonials = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      position: "Senior Software Engineer at Google",
      batch: "2018 Batch",
      text: "ICEM provided me with the perfect foundation for my career. The faculty and infrastructure were exceptional, and the industry exposure helped me secure my dream job at Google.",
    },
    {
      id: 2,
      name: "Ms. Priya Sharma",
      position: "Product Manager at Microsoft",
      batch: "2019 Batch",
      text: "The alumni network has been incredibly supportive throughout my career journey. The mentorship I received from senior alumni helped me navigate my career path successfully.",
    },
    {
      id: 3,
      name: "Mr. Amit Patel",
      position: "Data Scientist at Amazon",
      batch: "2017 Batch",
      text: "ICEM not only gave me technical knowledge but also instilled confidence and leadership qualities. The campus placements and alumni connections opened doors to amazing opportunities.",
    },
  ];

  return (
    <>
      <Head>
        <title>ICEM Alumni Network</title>
        <meta
          name="description"
          content="Connect with ICEM alumni and stay updated with our alumni network."
        />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              ICEM Alumni Network
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with your alma mater and fellow alumni. Join our
              growing network of successful professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Alumni Grid Section */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center lg:text-left">
                Our Distinguished Alumni
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {alumniProfiles.map((alumni) => (
                  <div key={alumni.id} className="text-center group">
                    <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gray-300">
                      <div className="w-full h-48 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                        <span className="text-gray-600 text-lg font-semibold">
                          Alumni Photo
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-secondary bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <p className="font-semibold text-sm">
                            {alumni.position}
                          </p>
                          <p className="text-xs">{alumni.company}</p>
                          <p className="text-xs mt-1">Batch: {alumni.year}</p>
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-3 font-semibold text-gray-800">
                      {alumni.name}
                    </h3>
                    <p className="text-sm text-gray-600">{alumni.position}</p>
                    <p className="text-xs text-gray-500">{alumni.company}</p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6 text-center">
                  Alumni Network Stats
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-secondary">
                      5000+
                    </div>
                    <div className="text-gray-600">Alumni</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">25+</div>
                    <div className="text-gray-600">Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">
                      200+
                    </div>
                    <div className="text-gray-600">Companies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">15+</div>
                    <div className="text-gray-600">Years</div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
                  Alumni Testimonials
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                          <span className="text-gray-600 text-sm">Photo</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {testimonial.position}
                          </p>
                          <p className="text-xs text-primary">
                            {testimonial.batch}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">
                        "{testimonial.text}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Registration Form Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-2xl p-6 sticky top-8">
                <h2 className="text-2xl font-bold text-secondary mb-2">
                  Join Alumni Network
                </h2>
                <p className="text-gray-600 mb-6 text-sm">
                  Register to stay connected and receive updates
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="graduationYear"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Graduation Year *
                    </label>
                    <input
                      type="number"
                      id="graduationYear"
                      name="graduationYear"
                      required
                      min="2000"
                      max="2024"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="e.g., 2020"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="course"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Course Graduated *
                    </label>
                    <select
                      id="course"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm"
                    >
                      <option value="">Select your course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="currentCompany"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Current Company
                    </label>
                    <input
                      type="text"
                      id="currentCompany"
                      name="currentCompany"
                      value={formData.currentCompany}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="Where do you work?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="position"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="Your current position"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="LinkedIn profile URL"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message / Suggestions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="Share your thoughts..."
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      required
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mt-1"
                    />
                    <label
                      htmlFor="agreeTerms"
                      className="ml-2 text-xs text-gray-600"
                    >
                      I agree to receive updates and communications from ICEM
                      Alumni Network
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-4 focus:ring-primary/50 text-sm"
                  >
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 bg-primary rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Benefits of Joining Alumni Network
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ...benefits content unchanged... */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
