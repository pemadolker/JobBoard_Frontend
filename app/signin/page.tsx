"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Password validation regex
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    // Clear any previous error
    setError("");

    // Handle the login logic
    console.log(email, password);
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-teal-300">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800">Welcome back</CardTitle>
          <CardDescription className="text-gray-600 text-sm">
            Enter your details to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm text-gray-800 mb-1">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full"
                required
                autoComplete="email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-sm text-gray-800 mb-1">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full"
                required
                autoComplete="new-password"
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white hover:from-blue-700 hover:to-indigo-600 transition-all"
              size="lg"
            >
              Sign In
            </Button>

            {/* Google Sign-In Button */}
            <Button
              type="button"
              className="w-full mt-4 border border-gray-300 text-gray-800"
              variant="outline"
            >
              Sign in with Google
            </Button>
          </form>

          {/* Footer Links */}
          <p className="text-sm text-gray-600 mt-4 text-center">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
