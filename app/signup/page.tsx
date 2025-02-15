"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const SignUpPage = () => {
  const router = useRouter();

  // Navigate to Employer or Seeker page
  const handleNavigation = (role: "employer" | "seeker") => {
    if (role === "employer") {
      router.push("signup/employer");
    } else if (role === "seeker") {
      router.push("signup/seeker");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-teal-300">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-gray-800 text-2xl font-bold">
            Welcome to Job Board Bhutan
          </CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            Sign Up As
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* Employer Button */}
          <Button
            className="bg-gradient-to-r from-blue-400 to-teal-300 text-white hover:from-teal-300 hover:to-blue-400 transform transition-transform hover:scale-105"
            size="lg"
            onClick={() => handleNavigation("employer")}
          >
            Employer
          </Button>

          {/* Seeker Button */}
          <Button
            className="bg-gradient-to-r from-blue-400 to-teal-300 text-white hover:from-teal-300 hover:to-blue-400 transform transition-transform hover:scale-105"
            size="lg"
            onClick={() => handleNavigation("seeker")}
          >
            Seeker
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
