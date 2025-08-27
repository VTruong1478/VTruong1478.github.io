import React, { useEffect, useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const roles = [
  "Product Ops Specialist",
  "Customer Experience Advocate",
  "Bridge Between Teams & Customers",
];

export default function About() {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

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
      className="relative bg-background min-h-screen flex flex-col justify-center items-center py-4 px-4 text-text scroll-mt-16 overflow-hidden"
    >
      {/* Floating Background Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 rounded-full bg-accent/20 blur-3xl animate-float"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "loop" }}
      />

      <motion.div
        className="flex flex-col items-center text-center w-full sm:w-11/12 md:w-3/4 lg:flex-row lg:space-x-12 lg:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Picture */}
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          className="w-44 h-44 rounded-full shadow-lg border-4 border-primary mb-6 lg:mb-0"
          whileHover={{ scale: 1.05 }}
        />

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-4xl font-bold text-primary flex items-center justify-center lg:justify-start space-x-2">
            Hi, I'm An Truong
            <span className="animate-wave inline-block ml-2">👋</span>
          </h1>

          {/* Dynamic Tagline */}
          <p className="text-accent text-xl font-medium mt-2 h-8">
            {currentRole}
            <span className="blink">|</span>
          </p>

          <p className="text-secondaryText text-lg leading-relaxed mt-4 max-w-xl">
            I bridge the gap between what customers want and what teams deliver,
            creating experiences that stick.
          </p>

          <a
            href="/resume.pdf"
            download="An_Truong_Resume.pdf"
            className="px-6 py-3 mt-6 rounded-lg bg-accent text-white font-semibold shadow-md hover:bg-primary transition"
          >
            Download Resume
          </a>

          {/* Contact Icons */}
          <div className="flex space-x-8 mt-8">
            <a
              href="mailto:your-email@example.com"
              className="text-secondary hover:text-accent text-4xl transition-transform transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/vinhan-truong/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent text-4xl transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
