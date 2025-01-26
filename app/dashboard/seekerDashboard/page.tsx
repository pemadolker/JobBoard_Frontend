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
  const [savedJobs, setSavedJobs] = useState<Set<number>>(new Set()); // Track saved jobs
  const router = useRouter();


  interface Job {
    title: string;
    company: string;
    type: string;
    location: string;
    postedDate: string;
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
    { title: "Software Engineer", company: "Tech Bhutan", type: "Full-time", location: "Thimphu", postedDate: "2025-01-15" },
    { title: "Frontend Developer", company: "Web Solutions", type: "Part-time", location: "Paro", postedDate: "2025-01-14" },
    { title: "Backend Developer", company: "DevCorp", type: "Full-time", location: "Thimphu", postedDate: "2025-01-12" },
    { title: "UI/UX Designer", company: "Design Studio", type: "Contract", location: "Punakha", postedDate: "2025-01-10" },
    { title: "Project Manager", company: "Tech Solutions", type: "Full-time", location: "Phuntsholing", postedDate: "2025-01-09" },
    { title: "Data Scientist", company: "DataTech", type: "Full-time", location: "Thimphu", postedDate: "2025-01-08" },
    { title: "Mobile App Developer", company: "App Innovations", type: "Contract", location: "Gelephu", postedDate: "2025-01-07" },
    { title: "Digital Marketer", company: "Marketing Masters", type: "Part-time", location: "Wangdue", postedDate: "2025-01-06" },
    { title: "Product Manager", company: "ProductHub", type: "Full-time", location: "Thimphu", postedDate: "2025-01-05" },
    { title: "DevOps Engineer", company: "CloudTech", type: "Full-time", location: "Paro", postedDate: "2025-01-04" },
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

  const toggleSaveJob = (index: number) => {
    setSavedJobs((prev) => {
      const newSavedJobs = new Set(prev);
      if (newSavedJobs.has(index)) {
        newSavedJobs.delete(index);
      } else {
        newSavedJobs.add(index);
      }
      return newSavedJobs;
    });
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => handleSearch(), 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  useEffect(() => {
    fetchJobs();
  }, []);

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
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-3xl transition duration-300 cursor-pointer relative"
                onClick={() => setSelectedJob(job)}
              >
                <h4 className="text-lg font-bold text-blue-500">{job.title}</h4>
                <p className="text-gray-600 mt-2">{job.company}</p>
                <p className="text-gray-500 mt-1 text-sm">{job.type}</p>
                <p className="text-gray-400 mt-1 text-sm">Location: {job.location}</p>
                <p className="text-gray-400 mt-1 text-sm">Posted: {job.postedDate}</p>
                <button
                  className={`absolute top-4 right-4 px-2 py-1 text-sm rounded-full ${
                    savedJobs.has(index)
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  } hover:bg-green-600 transition`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSaveJob(index);
                  }}
                >
                  {savedJobs.has(index) ? "Saved" : "Save"}
                </button>
              </div>
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
            <p className="text-gray-600 mt-6 text-xl">
              <strong>Location:</strong> {selectedJob.location}
            </p>
            <p className="text-gray-600 mt-6 text-xl">
              <strong>Posted Date:</strong> {selectedJob.postedDate}
            </p>
            <p className="text-gray-600 mt-8 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
              vestibulum vestibulum. Cras venenatis euismod malesuada. Duis nec eros eget est
              placerat fermentum. Phasellus vel urna sed risus gravida sollicitudin.
            </p>
            <button
              className="mt-8 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
              onClick={() => alert("Application submitted successfully!")}
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeekerDashboard;
