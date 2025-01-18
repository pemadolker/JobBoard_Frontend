"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaCog, FaSearch, FaFileAlt, FaSignOutAlt } from "react-icons/fa";

const ViewProfile = () => {
  const router = useRouter();
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const openModal = (content: string) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (err: any) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg px-8 py-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            Logo
          </div>
          <h1 className="text-2xl font-bold">JobBoard Bhutan</h1>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="group relative w-20 hover:w-64 bg-gradient-to-b from-blue-600 to-teal-500 text-white flex flex-col py-6 shadow-lg transition-all duration-300 ease-in-out">
          <nav className="flex flex-col space-y-4 px-4">
            <button className="flex items-center space-x-4 text-white py-2 px-3 rounded-md transition duration-300 hover:bg-blue-600" onClick={() => router.push("/dashboard/seekerDashboard")}>              
              <FaHome size={24} />
              <span className="whitespace-nowrap group-hover:block hidden">Home</span>
            </button>
            <button className="flex items-center space-x-4 text-white py-2 px-3 rounded-md transition duration-300 hover:bg-blue-600" onClick={() => router.push("/settings")}>              
              <FaCog size={24} />
              <span className="whitespace-nowrap group-hover:block hidden">Settings</span>
            </button>
            <button className="flex items-center space-x-4 text-white py-2 px-3 rounded-md transition duration-300 hover:bg-blue-600" onClick={() => router.push("/dashboard/seekerDashboard/search-jobs")}>              
              <FaSearch size={24} />
              <span className="whitespace-nowrap group-hover:block hidden">Search Jobs</span>
            </button>
            <button className="flex items-center space-x-4 text-white py-2 px-3 rounded-md transition duration-300 hover:bg-blue-600" onClick={() => router.push("/dashboard/seekerDashboard/jobs")}>              
              <FaFileAlt size={24} />
              <span className="whitespace-nowrap group-hover:block hidden">Apply Job</span>
            </button>
            <button className="flex items-center space-x-4 text-white py-2 px-3 rounded-md transition duration-300 hover:bg-blue-600 mt-auto" onClick={() => router.push("/")}>              
              <FaSignOutAlt size={24} />
              <span className="whitespace-nowrap group-hover:block hidden">Logout</span>
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-8 overflow-y-auto">
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            <button className="bg-blue-100 shadow-md p-6 rounded-lg text-center hover:bg-blue-200 transition duration-300" onClick={() => openModal("Saved Jobs")}>              
              <h2 className="text-blue-600 font-medium">Saved Jobs</h2>
              <p className="text-3xl font-bold">-</p>
            </button>
            <button className="bg-green-100 shadow-md p-6 rounded-lg text-center hover:bg-green-200 transition duration-300" onClick={() => openModal("Application Submitted")}>              
              <h2 className="text-green-600 font-medium">Application Submitted</h2>
              <p className="text-3xl font-bold">-</p>
            </button>
            <button className="bg-teal-100 shadow-md p-6 rounded-lg text-center hover:bg-teal-200 transition duration-300" onClick={() => openModal("Interviews Scheduled")}>              
              <h2 className="text-teal-600 font-medium">Interviews Scheduled</h2>
              <p className="text-3xl font-bold">-</p>
            </button>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Recently Applied Jobs</h2>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && (
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
                    <tr>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </main>
      </div>

      {modalContent && (
        <div className="fixed inset-0 bg-white bg-opacity-60 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{modalContent}</h2>
            <div>
              <p className="text-gray-700">
                Here are the details of {modalContent.toLowerCase()}...
              </p>
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
  );
};

export default ViewProfile;
