"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SeekerDashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]); // For Latest Job Listings
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]); // For search results
  const router = useRouter();

  interface Job {
    title: string;
    company: string;
    type: string;
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleLogout = () => {
    alert("Logging out...");
    router.push("/"); // Redirect to the default page
  };

  const dummyJobs: Job[] = [
    { title: "Software Engineer", company: "Tech Bhutan", type: "Full-time" },
    { title: "Frontend Developer", company: "Web Solutions", type: "Part-time" },
    { title: "Backend Developer", company: "DevCorp", type: "Full-time" },
    { title: "UI/UX Designer", company: "Design Studio", type: "Contract" },
    { title: "Project Manager", company: "Tech Solutions", type: "Full-time" },
    { title: "Data Scientist", company: "DataTech", type: "Full-time" },
    { title: "Mobile App Developer", company: "App Innovations", type: "Contract" },
    { title: "Digital Marketer", company: "Marketing Masters", type: "Part-time" },
    { title: "Product Manager", company: "ProductHub", type: "Full-time" },
    { title: "DevOps Engineer", company: "CloudTech", type: "Full-time" },
  ];

  const fetchJobs = async () => {
    setJobs(dummyJobs);
    setFilteredJobs(dummyJobs);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredJobs([]);
      setSelectedJob(null);
      return;
    }

    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg sticky top-0 z-50">
        <div className="text-3xl font-bold">JobBoard Bhutan</div>
        <nav className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 text-white hover:text-blue-300 focus:outline-none"
          >
            <span>Profile</span>
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg w-48">
              <Link
                href="/dashboard/seekerDashboard/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                View Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 w-full text-left hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </nav>
      </header>

      <section className="bg-gradient-to-r from-blue-400 to-teal-300 py-12">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-4xl font-bold">Find Your Dream Job in Bhutan</h1>
          <p className="mt-4 text-lg">
            Explore opportunities in Bhutan's growing tech ecosystem and beyond.
          </p>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Job title, skills, or company"
              className="p-4 w-full md:w-2/3 rounded-lg shadow-lg text-gray-800"
            />
            <button
              onClick={handleSearch}
              className="px-8 py-4 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
            >
              Search
            </button>
          </div>
          {searchQuery.trim() !== "" && (
            <div className="mt-8 text-lg text-white">
              {filteredJobs.length > 0 ? (
                <ul className="space-y-4">
                  {filteredJobs.map((job, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:underline"
                      onClick={() => setSelectedJob(job)}
                    >
                      {job.title} - {job.company} ({job.type})
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No jobs found matching your search criteria.</p>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">
            The Future of Bhutan’s Workforce is Here!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join the revolution of young Bhutanese professionals shaping tomorrow's
            industries.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-teal-400 to-blue-500 py-16 text-center text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold text-white mx-auto">
              Latest Job Listings
            </h2>
            <Link
              href="/dashboard/seekerDashboard/jobs"
              className="text-sm bg-white text-blue-500 px-3 py-1 rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
            >
              View All
            </Link>
          </div>
          <p className="mt-4 text-lg text-white">
            Browse the latest job opportunities tailored for you.
          </p>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {jobs.slice(0, 8).map((job, index) => (
              <button
                key={index}
                className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-3xl transition duration-300 cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <h4 className="text-lg font-bold text-blue-500">{job.title}</h4>
                <p className="text-gray-600 mt-2">{job.company}</p>
                <p className="text-gray-500 mt-1 text-sm">{job.type}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-12 max-w-4xl w-full relative">
            <button
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-4xl font-bold text-blue-500">{selectedJob.title}</h2>
            <p className="text-gray-600 mt-8 text-xl">
              <strong>Company:</strong> {selectedJob.company}
            </p>
            <p className="text-gray-600 mt-6 text-xl">
              <strong>Type:</strong> {selectedJob.type}
            </p>
            <p className="text-gray-600 mt-8 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
              vestibulum vestibulum. Cras venenatis euismod malesuada. Duis nec eros eget est
              placerat fermentum. Phasellus vel urna sed risus gravida sollicitudin.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeekerDashboard;
