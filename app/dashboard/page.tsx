import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table } from '@/components/ui/table';
import { cn } from '@/lib/utils'; // Utility function for conditional classNames

export default function EmployerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Employer Dashboard</h1>
          <Button variant="secondary">Logout</Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="p-4">
            <h2 className="text-lg font-semibold">Total Job Postings</h2>
            <p className="text-2xl font-bold">12</p>
          </Card>
          <Card className="p-4">
            <h2 className="text-lg font-semibold">Active Applications</h2>
            <p className="text-2xl font-bold">34</p>
          </Card>
          <Card className="p-4">
            <h2 className="text-lg font-semibold">New Messages</h2>
            <p className="text-2xl font-bold">8</p>
          </Card>
        </div>

        {/* Recent Activity Table */}
        <Card>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Recent Applications</h2>
            <Table>
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-2">Candidate Name</th>
                  <th className="p-2">Position</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr
                    key={index}
                    className={cn("hover:bg-gray-50", index % 2 && "bg-gray-100")}
                  >
                    <td className="p-2">John Doe</td>
                    <td className="p-2">Frontend Developer</td>
                    <td className="p-2 text-green-600">Under Review</td>
                    <td className="p-2">
                      <Button variant="outline" size="sm" className="mr-2">
                        View
                      </Button>
                      <Button variant="destructive" size="sm">
                        Reject
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
}
