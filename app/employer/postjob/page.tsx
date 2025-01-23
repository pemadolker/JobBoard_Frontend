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

    try {
      const response = await fetch("http://localhost:8000/employer/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          em_id: "example_employer_id", // Replace this with actual employer ID
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to post the job");
      }

      const data = await response.json();
      alert(data.message);

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
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred");
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-400">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Post a Job</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Job Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Job Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="title">
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
                className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Job Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="jobType">
                Job Type <span className="text-red-500">*</span>
              </label>
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                required
                className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="location">
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
                className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Salary Range */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="salaryRange">
                Salary Range
              </label>
              <input
                type="text"
                id="salaryRange"
                name="salaryRange"
                placeholder="e.g., Nu.35,000 - Nu.40,000"
                value={formData.salaryRange}
                onChange={handleChange}
                className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Number of Vacancies */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="numberOfVacancies">
                Number of Vacancies
              </label>
              <input
                type="number"
                id="numberOfVacancies"
                name="numberOfVacancies"
                placeholder="e.g., 3"
                value={formData.numberOfVacancies}
                onChange={handleChange}
                className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Application Deadline */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="applicationDeadline">
                Application Deadline
              </label>
              <input
                type="date"
                id="applicationDeadline"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
                className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          {/* Job Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="description">
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
              className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          {/* Benefits */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="benefits">
              Benefits
            </label>
            <textarea
              id="benefits"
              name="benefits"
              rows={3}
              placeholder="List the benefits (e.g., Health Insurance, Paid Leaves)"
              value={formData.benefits}
              onChange={handleChange}
              className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
