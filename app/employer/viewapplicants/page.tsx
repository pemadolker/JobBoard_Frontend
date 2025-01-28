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
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={`px-2 py-1 text-sm font-semibold rounded ${className}`}>{children}</span>;
}

export default function ViewApplicantsPage() {
  const [applicants, setApplicants] = useState([
    { name: "John Doe", position: "Software Engineer", email: "johndoe@example.com", phone: "123-456-7890", date: "2025-01-15", resume: "#", portfolio: "#", slot: 1, status: "Pending" },
    { name: "Jane Smith", position: "Product Manager", email: "janesmith@example.com", phone: "987-654-3210", date: "2025-01-12", resume: "#", portfolio: "#", slot: 2, status: "Shortlisted" },
    { name: "Alice Johnson", position: "Designer", email: "alicejohnson@example.com", phone: "555-666-7777", date: "2025-01-10", resume: "#", portfolio: "#", slot: 3, status: "Rejected" },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setApplicants([
        { name: "John Doe", position: "Software Engineer", email: "johndoe@example.com", phone: "123-456-7890", date: "2025-01-15", resume: "#", portfolio: "#", slot: 1, status: "Pending" },
        { name: "Jane Smith", position: "Product Manager", email: "janesmith@example.com", phone: "987-654-3210", date: "2025-01-12", resume: "#", portfolio: "#", slot: 2, status: "Shortlisted" },
        { name: "Alice Johnson", position: "Designer", email: "alicejohnson@example.com", phone: "555-666-7777", date: "2025-01-10", resume: "#", portfolio: "#", slot: 3, status: "Rejected" },
        { name: "Bob Lee", position: "HR Specialist", email: "boblee@example.com", phone: "333-444-5555", date: "2025-01-08", resume: "#", portfolio: "#", slot: 4, status: "Hired" },
      ]);
    }, 2000);
  }, []);

  const statusColors: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-700 border-yellow-300",
    Shortlisted: "bg-blue-100 text-blue-700 border-blue-300",
    Rejected: "bg-red-100 text-red-700 border-red-300",
    Hired: "bg-green-100 text-green-700 border-green-300",
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md px-8 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
            JB
          </div>
          <h1 className="text-2xl font-semibold">JobBoard Bhutan</h1>
        </div>
      </nav>
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Applicants</h1>
          <Card className="p-6 shadow-lg rounded-lg border border-gray-200 bg-white">
            <div className="overflow-x-auto"> {/* Enable horizontal scrolling */}
              <Table className="min-w-full table-auto">
                <TableHeader>
                  <TableRow className="bg-gray-100">
                    <TableHead>Sl No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Position Applied</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Application Date</TableHead>
                    <TableHead>Portfolio</TableHead>
                    <TableHead>Slot</TableHead>
                    <TableHead>Resume</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applicants.map((applicant, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell>{index + 1}</TableCell> {/* Serial Number */}
                      <TableCell>{applicant.name}</TableCell>
                      <TableCell>{applicant.position}</TableCell>
                      <TableCell>{applicant.email}</TableCell>
                      <TableCell>{applicant.phone}</TableCell>
                      <TableCell>{applicant.date}</TableCell>
                      <TableCell><a href={applicant.portfolio} className="text-blue-600 hover:underline">View</a></TableCell> {/* Portfolio */}
                      <TableCell>{applicant.slot}</TableCell> {/* Slot (now a number) */}
                      <TableCell><a href={applicant.resume} className="text-blue-600 hover:underline">View</a></TableCell>
                      <TableCell>
                        <Badge className={cn("border rounded-md px-3 py-1 text-sm font-medium", statusColors[applicant.status] || "bg-gray-100 text-gray-700 border-gray-300")}>
                          {applicant.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
