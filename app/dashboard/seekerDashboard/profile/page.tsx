"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ViewProfile = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-20 bg-white flex flex-col items-center py-5 shadow-md justify-between">
        <div className="flex flex-col space-y-6">
          <button
            className="hover:text-blue-500 text-xl"
            onClick={() => router.push("/home")}
          >
            🏠
          </button>
          <button
            className="hover:text-blue-500 text-xl"
            onClick={() => router.push("/settings")}
          >
            ⚙️
          </button>
          <button
            className="hover:text-blue-500 text-xl"
            onClick={() => router.push("/ideas")}
          >
            💡
          </button>
          <button
            className="hover:text-blue-500 text-xl"
            onClick={() => router.push("/saved")}
          >
            💾
          </button>
        </div>
        <div className="flex flex-col space-y-6 mb-6">
          <button
            className="hover:text-blue-500 text-xl"
            onClick={() => router.push("/profile")}
          >
            👤
          </button>
          <button
            className="hover:text-blue-500 text-xl"
            onClick={() => router.push("/logout")}
          >
            🔓
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">JobBoard Bhutan</h1>
          <div className="flex items-center space-x-4">
            <span className="text-2xl">🔔</span>
            <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
              <span className="text-sm">U</span>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-md p-6 rounded-md text-center">
            <h2 className="text-gray-600 font-medium">Saved Jobs</h2>
            <p className="text-3xl font-bold">3</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-md text-center">
            <h2 className="text-gray-600 font-medium">Application Submitted</h2>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-md text-center">
            <h2 className="text-gray-600 font-medium">Interviews Scheduled</h2>
            <p className="text-3xl font-bold">5</p>
          </div>
        </section>

        {/* Recently Applied Jobs */}
        <section>
          <h2 className="text-xl font-bold mb-4">Recently Applied Jobs</h2>
          <table className="w-full bg-white shadow-md rounded-md text-sm">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Job Title</th>
                <th className="py-2 px-4">Company</th>
                <th className="py-2 px-4">Qualification</th>
                <th className="py-2 px-4">Slot</th>
                <th className="py-2 px-4">Designation</th>
                <th className="py-2 px-4">Last Date</th>
                <th className="py-2 px-4">Applied Date</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">Frontend Developer</td>
                  <td className="py-2 px-4">DHI</td>
                  <td className="py-2 px-4">Bachelor's Degree</td>
                  <td className="py-2 px-4">3</td>
                  <td className="py-2 px-4">Software Engineer</td>
                  <td className="py-2 px-4">2024-01-15</td>
                  <td className="py-2 px-4">2023-12-20</td>
                  <td className="py-2 px-4 text-green-600">Interview Scheduled</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2">View</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md">Withdraw</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ViewProfile;
