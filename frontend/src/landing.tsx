import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f1b2e] to-[#2b2260] text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="ChatFlow Logo" className="w-8 h-8" />
          <span className="text-xl font-bold">ChatFlow</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#features" className="hover:text-purple-400">Features</a>
          <a href="#pricing" className="hover:text-purple-400">Pricing</a>
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
          <a href="/signin" className="font-semibold hover:text-purple-400">Sign In</a>
          <a href="/signup" className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg font-semibold">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 mt-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            <span className="text-purple-400">Connect</span> instantly, <br />
            chat <span className="text-purple-400">effortlessly</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Experience the future of communication with our lightning-fast, secure chat platform. Connect with friends, teams, and communities like never before.
          </p>
          <div className="flex space-x-4">
            <a
              href="/signup"
              className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2"
            >
              <span>Start Chatting</span>
            </a>
            <a
              href="#community"
              className="border border-purple-500 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2"
            >
              <span>Join Community</span>
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-12 md:mt-0"
        >
          <img src="/chat-hero.png" alt="Chat illustration" className="w-full rounded-xl shadow-xl" />
        </motion.div>
      </section>

      {/* Features */}
      <section className="mt-16 flex justify-around text-center px-8 md:px-24">
        <div className="space-y-2">
          <div className="bg-purple-700 p-4 rounded-full inline-block">
            ⚡
          </div>
          <h3 className="font-semibold">Lightning Fast</h3>
          <p className="text-gray-400">Real-time messaging</p>
        </div>
        <div className="space-y-2">
          <div className="bg-purple-700 p-4 rounded-full inline-block">
            👥
          </div>
          <h3 className="font-semibold">Team Focused</h3>
          <p className="text-gray-400">Built for collaboration</p>
        </div>
        <div className="space-y-2">
          <div className="bg-purple-700 p-4 rounded-full inline-block">
            🔒
          </div>
          <h3 className="font-semibold">Secure</h3>
          <p className="text-gray-400">End-to-end encryption</p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
