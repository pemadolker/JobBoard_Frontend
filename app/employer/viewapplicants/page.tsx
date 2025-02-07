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
  const [applicants, setApplicants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from backend
  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/applicants"); // Adjust backend URL
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setApplicants(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);

  const statusColors: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-700 border-yellow-300",
    Shortlisted: "bg-blue-100 text-blue-700 border-blue-300",
    Rejected: "bg-red-100 text-red-700 border-red-300",
    Hired: "bg-green-100 text-green-700 border-green-300",
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md px-8 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
            JB
          </div>
          <h1 className="text-2xl font-semibold">JobBoard Bhutan</h1>
        </div>
      </nav>

      {/* Sidebar and Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 p-8 overflow-hidden">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Applicants</h1>
          <Card className="p-6 shadow-lg rounded-lg border border-gray-200 bg-white w-full">
            <Table className="w-full table-fixed border border-gray-300">
              <TableHeader>
                <TableRow className="bg-gray-100 border-b border-gray-300">
                  <TableHead className="border border-gray-300 w-10">Sl No</TableHead>
                  <TableHead className="border border-gray-300 w-32">Name</TableHead>
                  <TableHead className="border border-gray-300 w-40">Position Applied</TableHead>
                  <TableHead className="border border-gray-300 w-40">Email</TableHead>
                  <TableHead className="border border-gray-300 w-32">Phone</TableHead>
                  <TableHead className="border border-gray-300 w-32">Application Date</TableHead>
                  <TableHead className="border border-gray-300 w-24">Portfolio</TableHead>
                  <TableHead className="border border-gray-300 w-20">Slot</TableHead>
                  <TableHead className="border border-gray-300 w-24">Resume</TableHead>
                  <TableHead className="border border-gray-300 w-24">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={10} className="text-center py-4 text-gray-600 border border-gray-300">
                      Loading applicants...
                    </TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell colSpan={10} className="text-center py-4 text-red-500 border border-gray-300">
                      Error: {error}
                    </TableCell>
                  </TableRow>
                ) : applicants.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={10} className="text-center py-4 text-gray-600 border border-gray-300">
                      No applicants found.
                    </TableCell>
                  </TableRow>
                ) : (
                  applicants.map((applicant, index) => (
                    <TableRow key={index} className="hover:bg-gray-50 border-b border-gray-300">
                      <TableCell className="border border-gray-300">{index + 1}</TableCell>
                      <TableCell className="border border-gray-300">{applicant.name}</TableCell>
                      <TableCell className="border border-gray-300">{applicant.position}</TableCell>
                      <TableCell className="border border-gray-300">{applicant.email}</TableCell>
                      <TableCell className="border border-gray-300">{applicant.phone}</TableCell>
                      <TableCell className="border border-gray-300">{applicant.date}</TableCell>
                      <TableCell className="border border-gray-300">
                        <a href={applicant.portfolio} className="text-blue-600 hover:underline">View</a>
                      </TableCell>
                      <TableCell className="border border-gray-300">{applicant.slot}</TableCell>
                      <TableCell className="border border-gray-300">
                        <a href={applicant.resume} className="text-blue-600 hover:underline">View</a>
                      </TableCell>
                      <TableCell className="border border-gray-300">
                        <Badge className={cn("border rounded-md px-3 py-1 text-sm font-medium", statusColors[applicant.status] || "bg-gray-100 text-gray-700 border-gray-300")}>
                          {applicant.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
}
