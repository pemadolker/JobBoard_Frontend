"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaCog, FaSearch, FaFileAlt, FaSignOutAlt } from "react-icons/fa";

const JobsPage = () => {
  interface Job {
    title: string;
    company: string;
    type: string;
  }

  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const router = useRouter(); // Initialize useRouter

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

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("http://localhost:8000/dashboard/seekerdashboard/jobs");

        if (response.ok) {
          const data: Job[] = await response.json();
          setJobs(data);
          setFilteredJobs(data); // Initialize filtered jobs
        } else {
          throw new Error("API not available. Falling back to dummy data.");
        }
      } catch (err: any) {
        console.warn(err.message);
        setJobs(dummyJobs);
        setFilteredJobs(dummyJobs); // Initialize filtered jobs
        setError("Failed to load jobs. Showing dummy data.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  const handleSearchRedirect = () => {
    if (searchTerm.trim()) {
      router.push(`/search-results?query=${encodeURIComponent(searchTerm)}`);
    } else {
      alert("Please enter a search term.");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg px-8 py-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            Logo
          </div>
          <h1 className="text-2xl font-bold">JobBoard Bhutan</h1>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="group relative w-20 hover:w-64 bg-gradient-to-b from-blue-600 to-teal-500 text-white flex flex-col py-6 shadow-lg transition-all duration-300 ease-in-out">
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
          <section className="mb-8 max-w-lg mx-auto flex gap-4">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={handleSearchChange} // Updated to use optimized search filtering
              className="flex-1 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearchRedirect}
              className="px-6 py-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
            >
              Search
            </button>
          </section>

          {loading ? (
            <div className="text-center text-gray-600 text-lg flex justify-center items-center">
              <div className="spinner-border animate-spin border-4 border-t-4 border-blue-500 rounded-full w-8 h-8"></div>
              <span> Loading jobs...</span>
            </div>
          ) : error ? (
            <p className="text-center text-red-600 text-lg">{error}</p>
          ) : filteredJobs.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">No jobs available matching your search.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-3xl transition duration-300 cursor-pointer"
                  onClick={() => handleJobClick(job)}
                >
                  <h4 className="text-lg font-bold text-blue-500">{job.title}</h4>
                  <p className="text-gray-600 mt-2">{job.company}</p>
                  <p className="text-gray-500 mt-1 text-sm">{job.type}</p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

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

export default JobsPage;
