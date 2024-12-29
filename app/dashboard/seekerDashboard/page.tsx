"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import { cn } from "@/lib/utils"; // Utility function for conditional classNames
import {
  FiUser,
  FiSettings,
  FiHelpCircle,
  FiBriefcase,
  FiBookmark,
  FiLogOut,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi"; // Icon imports

export default function SeekerDashboard() {
  const [dropdownStates, setDropdownStates] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = (title: string) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <nav className="space-y-4">
          {[
            {
              icon: <FiUser className="text-blue-500 text-xl mr-3" />,
              title: "Update Profile",
              subItems: ["Personal Details", "Education", "Experience", "Resume"],
              isDropdown: true,
            },
            {
              icon: <FiSettings className="text-green-500 text-xl mr-3" />,
              title: "Account Settings",
              subItems: ["Privacy Settings", "Security", "Preferences"],
              isDropdown: true,
            },
            {
              icon: <FiHelpCircle className="text-purple-500 text-xl mr-3" />,
              title: "Help Center",
              subItems: ["FAQs", "Contact Support", "Guides"],
              isDropdown: true,
            },
            {
              icon: <FiBriefcase className="text-yellow-500 text-xl mr-3" />,
              title: "Job Recommendations",
              subItems: ["Suggested Jobs", "Matching Criteria"],
              isDropdown: true,
            },
            {
              icon: <FiBookmark className="text-red-500 text-xl mr-3" />,
              title: "Saved Articles",
              subItems: ["Tech Articles", "Career Tips", "Guides"],
              isDropdown: true,
            },
            {
              icon: <FiLogOut className="text-gray-500 text-xl mr-3" />,
              title: "Logout",
            },
          ].map((feature, index) => (
            <div key={index} className="w-full">
              <button
                className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg w-full text-left"
                onClick={() => {
                  if (feature.isDropdown) {
                    toggleDropdown(feature.title);
                  }
                }}
              >
                {feature.icon}
                <span className="font-medium flex-grow">{feature.title}</span>
                {feature.isDropdown && (
                  dropdownStates[feature.title] ? (
                    <FiChevronUp className="text-gray-500" />
                  ) : (
                    <FiChevronDown className="text-gray-500" />
                  )
                )}
              </button>
              {feature.isDropdown && dropdownStates[feature.title] && (
                <ul className="pl-10 space-y-2 mt-2">
                  {feature.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={`/dashboard/seeker/${subItem.toLowerCase().replace(/ /g, "-")}`}
                        className="text-gray-600 text-sm hover:text-gray-800 block"
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-gray-800">Seeker Dashboard</h1>
          </div>
        </nav>

        <main className="container mx-auto p-8">
          {/* Stats Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {[
              { label: "Saved Jobs", count: 5 },
              { label: "Applications Submitted", count: 12 },
              { label: "Interviews Scheduled", count: 5 },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-6 bg-white shadow-sm rounded-lg hover:shadow-md transition-shadow"
              >
                <h2 className="text-lg font-semibold text-gray-700">{stat.label}</h2>
                <p className="text-3xl font-bold text-blue-600">{stat.count}</p>
              </Card>
            ))}
          </section>

          {/* Recent Activity Table */}
          <section className="mb-12">
            <Card className="shadow-sm rounded-lg">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-6 text-gray-700">Recent Applications</h2>
                <Table>
                  <thead>
                    <tr className="bg-gray-100 text-left text-gray-600">
                      <th className="p-4">#</th>
                      <th className="p-4">Job Title</th>
                      <th className="p-4">Company</th>
                      <th className="p-4">Qualification</th>
                      <th className="p-4">Slot</th>
                      <th className="p-4">Designation</th>
                      <th className="p-4">Last Date</th>
                      <th className="p-4">Applied Date</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(5)].map((_, index) => (
                      <tr
                        key={index}
                        className={cn(
                          "hover:bg-gray-50 transition-colors",
                          index % 2 === 1 && "bg-gray-50"
                        )}
                      >
                        <td className="p-4 text-gray-700">{index + 1}</td>
                        <td className="p-4 text-gray-700">Frontend Developer</td>
                        <td className="p-4 text-gray-700">TechCorp</td>
                        <td className="p-4 text-gray-700">Bachelor's Degree</td>
                        <td className="p-4 text-gray-700">Morning</td>
                        <td className="p-4 text-gray-700">Software Engineer</td>
                        <td className="p-4 text-gray-700">2024-01-15</td>
                        <td className="p-4 text-gray-700">2023-12-20</td>
                        <td className="p-4 text-green-600">Interview Scheduled</td>
                        <td className="p-4 flex space-x-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button variant="destructive" size="sm">
                            Withdraw
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}
