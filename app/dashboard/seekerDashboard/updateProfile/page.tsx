"use client";

import React from "react";
import Link from "next/link";

export default function UpdateProfile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard/seekerDashboard/updateProfile/personalDetails">
            Personal Details
          </Link>
        </li>
        <li>
          <Link href="/dashboard/seekerDashboard/updateProfile/education">
            Education
          </Link>
        </li>
        <li>
          <Link href="/dashboard/seekerDashboard/updateProfile/experience">
            Experience
          </Link>
        </li>
        <li>
          <Link href="/dashboard/seekerDashboard/updateProfile/resume">
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}
