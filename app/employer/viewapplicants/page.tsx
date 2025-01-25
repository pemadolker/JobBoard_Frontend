"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

export default function ViewApplicantsPage() {
  // State to store applicants data
  const [applicants, setApplicants] = useState([
    { name: "John Doe", position: "Software Engineer", status: "Pending" },
    { name: "Jane Smith", position: "Product Manager", status: "Shortlisted" },
    { name: "Alice Johnson", position: "Designer", status: "Rejected" },
  ]);

  // UseEffect to simulate fetching data from backend
  useEffect(() => {
    // This would be your backend API call once the server is up
    // Example: fetch('/api/applicants')
    //   .then(res => res.json())
    //   .then(data => setApplicants(data))
    
    // For now, we're using a timeout to simulate loading data
    setTimeout(() => {
      setApplicants([
        { name: "John Doe", position: "Software Engineer", status: "Pending" },
        { name: "Jane Smith", position: "Product Manager", status: "Shortlisted" },
        { name: "Alice Johnson", position: "Designer", status: "Rejected" },
        { name: "Bob Lee", position: "HR Specialist", status: "Hired" }, // Sample new applicant
      ]);
    }, 2000); // Simulating a 2-second delay for data fetching
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md px-8 py-4">
          <h1 className="text-2xl font-bold">Applicants</h1>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-8 py-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">List of Applicants</h2>

          <Card className="p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Position Applied</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applicants.map((applicant, index) => (
                  <TableRow key={index}>
                    <TableCell>{applicant.name}</TableCell>
                    <TableCell>{applicant.position}</TableCell>
                    <TableCell>{applicant.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </main>
      </div>
    </div>
  );
}
