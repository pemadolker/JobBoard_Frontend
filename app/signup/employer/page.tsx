"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FiArrowLeft } from "react-icons/fi";

const EmployerSignupPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    website: "",
    contactNumber: "",
    description: "",
    location: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      setSuccessMessage("");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setSuccessMessage("");
      return;
    }

    setSuccessMessage("");  // Reset success message before trying to send request

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          company_name: formData.companyName,
          company_description: formData.description,
          website_url: formData.website,
          contact_number: formData.contactNumber,
          location: formData.location,
          role: "employer",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setSuccessMessage("Something went wrong. Please try again later.");
        return;
      }

      setSuccessMessage("Signup successful! A confirmation email has been sent. Please confirm your email to complete the process.");
      setFormData({
        companyName: "",
        email: "",
        password: "",
        confirmPassword: "",
        website: "",
        contactNumber: "",
        description: "",
        location: "",
      });
    } catch (err) {
      console.error("Error during signup:", err);
      setSuccessMessage("Something went wrong. Please try again later.");
    }
  };

  const handleGoBack = () => {
    router.push("/signup");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-teal-300 px-4">
      <div
        onClick={handleGoBack}
        className="cursor-pointer text-gray-500 text-sm flex items-center space-x-2 absolute top-5 left-4"
      >
        <FiArrowLeft />
        <span>Back</span>
      </div>

      <Card className="w-full max-w-md shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center text-gray-800">
            Signup as Employer
          </CardTitle>
          <CardDescription className="text-center text-sm text-gray-600">
            Provide your company details to create an account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Enter your company name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="website">Website URL</Label>
              <Input
                type="url"
                id="website"
                name="website"
                placeholder="Enter your company website"
                value={formData.website}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                placeholder="Enter your contact number"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="description">Company Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter a short description of your company"
                value={formData.description}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                type="text"
                id="location"
                name="location"
                placeholder="Enter your company location"
                value={formData.location}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            {successMessage && <p className="text-green-500 text-sm text-center">{successMessage}</p>}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-teal-300 text-white hover:from-teal-300 hover:to-blue-400"
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployerSignupPage;
