"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

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

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold">All Job Listings</h1>
          <p className="mt-2 text-lg">Explore all job opportunities posted on our platform.</p>
        </div>
      </header>

      <section className="py-12 max-w-7xl mx-auto">
        <div className="mb-8 max-w-lg mx-auto flex gap-4">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearchRedirect}
            className="px-6 py-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-600 text-lg">Loading jobs...</p>
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
      </section>

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-12 max-w-4xl w-full relative"> {/* Bigger modal */}
            <button
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 text-3xl" // Larger close button
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
