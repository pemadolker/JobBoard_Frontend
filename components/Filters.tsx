"use client";

import React, { useState } from "react";

const Filters = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
          Location
        </label>
        <select
          id="location"
          value={selectedLocation}
          onChange={handleLocationChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Locations</option>
          <option value="Thimphu">Thimphu</option>
          <option value="Paro">Paro</option>
          <option value="Phuntsholing">Phuntsholing</option>
        </select>
      </div>
      <div>
        <label htmlFor="type" className="block text-gray-700 font-medium mb-2">
          Job Type
        </label>
        <select
          id="type"
          value={selectedType}
          onChange={handleTypeChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Types</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
