import React, { useEffect, useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const roles = [
  "Product Ops & Strategy",
  "Bridge Between Teams & Customers",
  "Turning Ideas Into Execution",
  "Customer Insights Into Product Decisions",
  "From Vision to Product Delivery",
];

export default function About() {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Scroll to top on first load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentRole((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentRole("");
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <section
      id="about"
      className="relative bg-background min-h-screen flex flex-col justify-center py-16 px-4 text-text overflow-hidden"
    >
      <motion.div
        className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 items-center max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Picture */}
        <div className="col-span-full flex justify-center">
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            className="w-60 h-60 rounded-full shadow-lg border-4 border-primary mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Text Content */}
        <div className="col-span-full flex flex-col items-center text-center max-w-xl mx-auto">
          <h1 className="text-4xl font-bold text-primary flex items-center space-x-2">
            <span>Hi, I'm An Truong</span>
            <span className="animate-wave inline-block">👋</span>
          </h1>

          {/* Dynamic Tagline */}
          <p className="text-secondary text-xl font-medium mt-2 h-8">
            {currentRole}
            <span className="blink">|</span>
          </p>

          <p className="text-secondaryText text-lg leading-relaxed mt-4">
            Bridging ideas and execution by listening to users and delivering
            impactful products.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download="An_Truong_Resume.pdf"
            className="px-6 py-3 mt-8 rounded-xl text-center
             bg-primary text-white font-semibold shadow-md
             hover:bg-primaryShade transition-transform transform hover:-translate-y-1"
          >
            Download Resume
          </a>

          {/* Contact Icons */}
          <div className="flex justify-center space-x-8 mt-8">
            <a
              href="mailto:your-email@example.com"
              className="text-accent hover:text-accentShade text-4xl transition-transform transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/vinhan-truong/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accentShade text-4xl transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
