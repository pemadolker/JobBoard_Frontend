import React from "react";
import Link from "next/link";

const DefaultPage = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg sticky top-0 z-50">
        <div className="text-3xl font-bold">JobBoard Bhutan</div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-blue-300">
            Home
          </Link>
          <Link href="home/aboutus" className="text-white hover:text-blue-300">
            About us
          </Link>
          <a href="#" className="text-white hover:text-blue-300">
            Companies
          </a>
        </nav>
        <div className="flex space-x-6">
          <Link href="/signin" className="text-white hover:text-blue-300">
            Sign In
          </Link>
          <Link href="/signup" className="text-white hover:text-blue-300">
            Sign Up
          </Link>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-gradient-to-r from-blue-400 to-teal-300 py-12">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl font-bold">Find Your Dream Job in Bhutan</h1>
          <p className="mt-4 text-lg">
            Explore opportunities in Bhutan's growing tech ecosystem and beyond.
          </p>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Job title, skills, or company"
              className="p-4 w-full md:w-1/2 rounded-lg shadow-lg text-gray-800"
            />
            <button className="px-8 py-4 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">
            The Future of Bhutan’s Workforce is Here!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join the revolution of young Bhutanese professionals shaping
            tomorrow's industries.
          </p>
        </div>
      </section>

      {/* Why Choose Job Board Bhutan */}
      <section className="bg-gradient-to-r from-teal-400 to-blue-500 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Why Job Board Bhutan?</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-xl font-semibold text-blue-500">Youth-Focused</h3>
            <p className="mt-4 text-gray-700">
              Designed with Bhutanese youth in mind, find jobs that match your
              skills and ambitions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-xl font-semibold text-blue-500">
              Transparency First
            </h3>
            <p className="mt-4 text-gray-700">
              No more guessing. See job details, salary, and more upfront, so
              you make informed decisions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-xl font-semibold text-blue-500">
              Connecting You Directly
            </h3>
            <p className="mt-4 text-gray-700">
              Say goodbye to middlemen. Connect directly with local startups and
              top employers.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">
            What Bhutanese Youth are Saying
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-12">
            <div className="w-64 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700">
                “I found a job in a startup in Thimphu that aligns with my
                skills in tech. The process was quick and easy!”
              </p>
              <div className="mt-4 text-blue-500 font-semibold">
                Dupchu Wangmo, Web Developer
              </div>
            </div>
            <div className="w-64 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700">
                “Job Board Bhutan helped me land a job in a field I never
                thought would be accessible to me!”
              </p>
              <div className="mt-4 text-blue-500 font-semibold">
                Sonam Lhamo, Digital Marketer
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DefaultPage;