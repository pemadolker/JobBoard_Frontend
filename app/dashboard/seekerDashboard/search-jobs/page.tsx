"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaCog,
  FaSearch,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import Filters from "@/components/Filters";
import JobCard from "@/components/JobCard";

const SearchJobs = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchButton = () => {
    console.log("Search button clicked with query:", searchQuery);
    // Add additional search handling logic if needed
  };

  const jobs = Array.from({ length: 6 }).map((_, index) => ({
    id: index,
    title: `Job Title ${index + 1}`,
    company: "Company Name",
    location: "Thimphu, Bhutan",
    postedDate: "2025-01-10",
  }));

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg px-8 py-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            Logo
          </div>
          <h1 className="text-2xl font-bold">JobBoard Bhutan</h1>
        </div>
        <div className="flex items-center gap-6">
          {/* Notification Icon */}
          <div className="relative group">
            <button className="relative p-2 bg-white text-gray-800 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
              🔔
            </button>
            <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:top-14 transition-all duration-300">
              Notifications
            </span>
          </div>
          {/* User Icon */}
          <div className="relative group">
            <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition duration-300">
              U
            </div>
            <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:top-14 transition-all duration-300">
              Profile
            </span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className="group relative w-20 hover:w-64 bg-gradient-to-b from-blue-600 to-teal-500 text-white flex flex-col py-6 shadow-lg transition-all duration-300 ease-in-out"
        >
          <nav className="flex flex-col space-y-4 px-4">
            <button
              className="flex items-center space-x-4 text-white py-2 px-3 rounded-md transition duration-300 hover:bg-blue-600"
              onClick={() => router.push("/dashboard/seekerDashboard")}
            >
              <FaHome size={24} />
              <span className="whitespace-nowrap group-hover:block hidden">Home</span>
            </button>
            <button
              className="flex items-center space-x-4 text-white py-2 px-3 rounded-md transition duration-300 hover:bg-blue-600"
              onClick={() => router.push("/settings")}
            >
              <FaCog size={24} />
              <span className="whitespace-nowrap group-hover:block hidden">Settings</span>
            </button>
            <button
              className="flex items-center space-x-4 text-white py-2 px-3 rounded-md transition duration-300 hover:bg-blue-600"
              onClick={() => router.push("/dashboard/seekerDashboard/search-jobs")}
            >
              <FaSearch size={24} />
              <span className="whitespace-nowrap group-hover:block hidden">Search Jobs</span>
            </button>
            <button
              className="flex items-center space-x-4 text-white py-2 px-3 rounded-md transition duration-300 hover:bg-blue-600"
              onClick={() => router.push("/dashboard/seekerDashboard/jobs")}
            >
              <FaFileAlt size={24} />
              <span className="whitespace-nowrap group-hover:block hidden">Apply Job</span>
            </button>
            <button
              className="flex items-center space-x-4 text-white py-2 px-3 rounded-md transition duration-300 hover:bg-blue-600 mt-auto"
              onClick={() => router.push("/")}
            >
              <FaSignOutAlt size={24} />
              <span className="whitespace-nowrap group-hover:block hidden">Logout</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="flex items-center gap-2 mb-6">
            {/* Search Bar */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search jobs by title..."
              className="flex-1 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearchButton}
              className="px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Search
            </button>
          </div>

          <div className="mb-6 bg-white shadow-md p-6 rounded-lg">
            {/* Filters */}
            <Filters />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job Listings */}
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  postedDate={job.postedDate}
                />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No jobs found matching your search.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchJobs;
