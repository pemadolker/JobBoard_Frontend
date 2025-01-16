"use client";

import React from "react";

interface JobCardProps {
  id: number;
  title: string;
  company: string;
  location: string;
  postedDate: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, company, location, postedDate }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{company}</p>
      <p className="text-gray-500 text-sm">{location}</p>
      <p className="text-gray-400 text-xs mt-2">Posted on {new Date(postedDate).toLocaleDateString()}</p>
    </div>
  );
};

export default JobCard;
