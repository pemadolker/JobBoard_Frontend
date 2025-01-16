"use client";

import Sidebar from "../../components/Sidebar";

export default function EmployerDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md px-8 py-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png" // Replace with your logo URL
            alt="Logo"
            className="h-12 w-12 rounded-full border-2 border-white"
          />
          <h1 className="text-white text-2xl font-bold">Employer Dashboard</h1>
        </div>
        {/* User and Notifications */}
        <div className="flex items-center gap-6">
          {/* Notification Icon */}
          <div className="relative group">
            <button className="relative p-2 bg-white text-gray-800 rounded-full shadow-md hover:bg-gray-100 transition">
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
              🔔
            </button>
            <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:top-14 transition-all">
              Notifications
            </span>
          </div>
          {/* User Icon */}
          <div className="relative group">
            <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
              U
            </div>
            <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:top-14 transition-all">
              Profile
            </span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 px-8 py-6 overflow-y-auto">
          {/* Overview Section */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: "Active Jobs", count: 50, color: "bg-blue-100 text-blue-700" },
                { label: "New Applicants", count: 32, color: "bg-orange-100 text-orange-700" },
                { label: "Shortlisted", count: 15, color: "bg-teal-100 text-teal-700" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-sm ${stat.color} border border-gray-200`}
                >
                  <p className="text-3xl font-bold">{stat.count}</p>
                  <p className="mt-1 text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Jobs Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Recently Posted Jobs</h2>
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <table className="min-w-full table-auto text-left">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-4 text-gray-700 font-medium">Job Title</th>
                    <th className="px-6 py-4 text-gray-700 font-medium">Company</th>
                    <th className="px-6 py-4 text-gray-700 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { title: "IT Officer", company: "TTPL, Thimphu" },
                    { title: "Customer Care Service", company: "BoB, Pling" },
                    { title: "HRO", company: "AWP, Gelephu" },
                  ].map((job, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{job.title}</td>
                      <td className="px-6 py-4 text-gray-600">{job.company}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-4">
                         <button className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition">
                            Edit
                          </button>
                          <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
