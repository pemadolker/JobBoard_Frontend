"use client";
import React, { useState } from "react";

export default function JobPostPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    jobType: "",
    location: "",
    salaryRange: "",
    benefits: "",
    applicationDeadline: "",
    numberOfVacancies: 1,
    status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    setFormData({
      title: "",
      description: "",
      jobType: "",
      location: "",
      salaryRange: "",
      benefits: "",
      applicationDeadline: "",
      numberOfVacancies: 1,
      status: "",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-3xl sm:max-w-2xl lg:max-w-lg bg-white rounded-lg shadow-lg p-6 sm:p-8 border-t-4 border-blue-400">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 sm:mb-8 text-center">
          Post a Job
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Job Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="title">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="e.g., Software Engineer"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
            </div>
            {/* Job Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="jobType">
                Job Type <span className="text-red-500">*</span>
              </label>
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                required
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              >
                <option value="">Select Job Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="location">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="e.g., Thimphu, Bhutan"
                value={formData.location}
                onChange={handleChange}
                required
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
            </div>
            {/* Salary Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="salaryRange">
                Salary Range
              </label>
              <input
                type="text"
                id="salaryRange"
                name="salaryRange"
                placeholder="e.g., $1,000 - $2,000"
                value={formData.salaryRange}
                onChange={handleChange}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
            </div>
            {/* Number of Vacancies */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="numberOfVacancies">
                Number of Vacancies
              </label>
              <input
                type="number"
                id="numberOfVacancies"
                name="numberOfVacancies"
                placeholder="e.g., 3"
                value={formData.numberOfVacancies}
                onChange={handleChange}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
            </div>
            {/* Application Deadline */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="applicationDeadline">
                Application Deadline
              </label>
              <input
                type="datetime-local"
                id="applicationDeadline"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
            </div>
          </div>
          {/* Job Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="description">
              Job Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              placeholder="Provide a detailed description of the job"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            ></textarea>
          </div>
          {/* Benefits */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="benefits">
              Benefits
            </label>
            <textarea
              id="benefits"
              name="benefits"
              rows={3}
              placeholder="List the benefits (e.g., Health Insurance, Paid Leaves)"
              value={formData.benefits}
              onChange={handleChange}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
