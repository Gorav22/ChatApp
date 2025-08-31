import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import chatImage from "../assets/chat.jpg"; // same chat.jpg use karo jo signup me lagayi thi

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Login successful!");
      } else {
        alert("Invalid username or password!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-center text-indigo-400 mb-6">
            Welcome Back!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full bg-transparent outline-none text-gray-200"
              />
            </div>

            {/* Password */}
            <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-transparent outline-none text-gray-200"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white font-semibold py-2 rounded-lg flex justify-center items-center space-x-2 shadow-md"
            >
              <span>Log In</span>
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-indigo-400 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src={chatImage}
          alt="Chat Illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-10">
          <h1 className="text-4xl font-bold text-indigo-400 mb-4 text-center">
            Chat Anytime, Anywhere.
          </h1>
          <p className="text-gray-300 text-lg text-center max-w-md">
            Stay connected with your friends and community. Log in to continue your conversations!
          </p>
        </div>
      </div>
    </div>
  );
}
