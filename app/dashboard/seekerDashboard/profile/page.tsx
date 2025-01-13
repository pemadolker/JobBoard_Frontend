"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaCog, FaSearch, FaFileAlt, FaSignOutAlt } from "react-icons/fa";

const ViewProfile = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to toggle search input
  const [modalContent, setModalContent] = useState<string | null>(null); // State to manage the content displayed in the modal

  const openModal = (content: string) => {
    setModalContent(content); // Set the modal content based on the section clicked
  };

  const closeModal = () => {
    setModalContent(null); // Close the modal
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg px-8 py-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            Logo
          </div>
          <h1 className="text-2xl font-bold">JobBoard Bhutan</h1>
        </div>
        {/* User and Notifications */}
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
            {/* Home */}
            <button
              className="flex items-center space-x-4 text-white py-2 px-3 rounded-md transition duration-300 hover:bg-blue-600"
              onClick={() => router.push("/dashboard/seekerDashboard")}
            >
              <FaHome size={24} />
              <span className="whitespace-nowrap group-hover:block hidden">Home</span>
            </button>
            {/* Settings */}
            <button
              className="flex items-center space-x-4 text-white py-2 px-3 rounded-md transition duration-300 hover:bg-blue-600"
              onClick={() => router.push("/settings")}
            >
              <FaCog size={24} />
              <span className="whitespace-nowrap group-hover:block hidden">Settings</span>
            </button>
            {/* Search Jobs */}
            <div>
              <button
                className="flex items-center space-x-4 text-white py-2 px-3 rounded-md transition duration-300 hover:bg-blue-600 w-full"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <FaSearch size={24} />
                <span className="whitespace-nowrap group-hover:block hidden">Search Jobs</span>
              </button>
              {isSearchOpen && (
                <div className="mt-2 bg-white rounded-md p-3 shadow-lg">
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button
                    className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                    onClick={() => console.log(`Searching for: ${searchTerm}`)}
                  >
                    Search
                  </button>
                </div>
              )}
            </div>
            {/* Apply Job */}
            <button
              className="flex items-center space-x-4 text-white py-2 px-3 rounded-md transition duration-300 hover:bg-blue-600"
              onClick={() => router.push("/dashboard/seekerDashboard/jobs")}
            >
              <FaFileAlt size={24} />
              <span className="whitespace-nowrap group-hover:block hidden">Apply Job</span>
            </button>
            {/* Logout */}
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
          {/* Overview Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            <button
              className="bg-blue-100 shadow-md p-6 rounded-lg text-center hover:bg-blue-200 transition duration-300"
              onClick={() => openModal("Saved Jobs Details")}
            >
              <h2 className="text-blue-600 font-medium">Saved Jobs</h2>
              <p className="text-3xl font-bold">3</p>
            </button>
            <button
              className="bg-green-100 shadow-md p-6 rounded-lg text-center hover:bg-green-200 transition duration-300"
              onClick={() => openModal("Application Submitted Details")}
            >
              <h2 className="text-green-600 font-medium">Application Submitted</h2>
              <p className="text-3xl font-bold">12</p>
            </button>
            <button
              className="bg-teal-100 shadow-md p-6 rounded-lg text-center hover:bg-teal-200 transition duration-300"
              onClick={() => openModal("Interviews Scheduled Details")}
            >
              <h2 className="text-teal-600 font-medium">Interviews Scheduled</h2>
              <p className="text-3xl font-bold">5</p>
            </button>
          </section>

          {/* Recently Applied Jobs Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Recently Applied Jobs</h2>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full table-auto text-left">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-4 text-gray-700 font-medium">#</th>
                    <th className="px-6 py-4 text-gray-700 font-medium">Job Title</th>
                    <th className="px-6 py-4 text-gray-700 font-medium">Company</th>
                    <th className="px-6 py-4 text-gray-700 font-medium">Qualification</th>
                    <th className="px-6 py-4 text-gray-700 font-medium">Slot</th>
                    <th className="px-6 py-4 text-gray-700 font-medium">Designation</th>
                    <th className="px-6 py-4 text-gray-700 font-medium">Last Date</th>
                    <th className="px-6 py-4 text-gray-700 font-medium">Applied Date</th>
                    <th className="px-6 py-4 text-gray-700 font-medium">Status</th>
                    <th className="px-6 py-4 text-gray-700 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition duration-300">
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">Frontend Developer</td>
                      <td className="px-6 py-4">DHI</td>
                      <td className="px-6 py-4">Bachelor's Degree</td>
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4">Software Engineer</td>
                      <td className="px-6 py-4">2025-01-20</td>
                      <td className="px-6 py-4">2025-01-10</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">Accepted</td>
                      <td className="px-6 py-4 text-blue-500">View Details</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>

        {/* Modal */}
        {modalContent && (
          <div className="fixed inset-0 bg-white bg-opacity-60 flex justify-center items-center z-20">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{modalContent}</h2>
              <div>
                <p className="text-gray-700">Here are the details of {modalContent.toLowerCase()}...</p>
              </div>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProfile;
