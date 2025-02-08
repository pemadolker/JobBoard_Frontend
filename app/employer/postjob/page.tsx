"use client";
import React, { useState } from "react";
import CryptoJS from "crypto-js";
import axios from "axios";

const secretKey = "de8f79609b55a5ad025d18de81b813cedd7396456df5c0ea6b6c9dc15fcd6931"; // Must match the encryption key used in the backend

// Function to decrypt the token
function decryptToken(encryptedToken: string): string | null {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedToken, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Error decrypting token:", error);
    return null;
  }
}

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

    // Retrieve and decrypt the token
    const encryptedToken = localStorage.getItem("authToken");
    const token = encryptedToken ? decryptToken(encryptedToken) : null;

    if (!token) {
      alert("Authentication error: Unable to retrieve token");
      return;
    }

    // Format application deadline to YYYY-MM-DD
    const formattedDeadline = formData.applicationDeadline
      ? formData.applicationDeadline.split("-").reverse().join("-") // Convert DD-MM-YYYY to YYYY-MM-DD
      : null;

    try {
      // Optionally use axios for profile check
      await axios.get("http://localhost:8000/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const response = await fetch("http://localhost:8000/employer/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Send decrypted token
        },
        body: JSON.stringify({
          ...formData,
          applicationDeadline: formattedDeadline,
          em_id: "example_employer_id", // Replace with actual employer ID
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to post the job");
      }

      const data = await response.json();
      alert(data.message);

      // Reset the form
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

            {/* Salary Range */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="salaryRange">
                Salary Range <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="salaryRange"
                name="salaryRange"
                placeholder="e.g., $50,000 - $70,000"
                value={formData.salaryRange}
                onChange={handleChange}
                required
                className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Benefits */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="benefits">
                Benefits
              </label>
              <input
                type="text"
                id="benefits"
                name="benefits"
                placeholder="e.g., Health insurance, 401(k)"
                value={formData.benefits}
                onChange={handleChange}
                className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Application Deadline */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="applicationDeadline">
                Application Deadline <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="applicationDeadline"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
                required
                className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Number of Vacancies */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="numberOfVacancies">
                Number of Vacancies <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="numberOfVacancies"
                name="numberOfVacancies"
                value={formData.numberOfVacancies}
                onChange={handleChange}
                required
                className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="status">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Status</option>
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
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
