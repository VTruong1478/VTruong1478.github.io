import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center py-16 px-6 text-text">
      {/* Profile Section */}
      <div className="flex flex-col items-center space-y-6 max-w-3xl text-center">
        {/* Profile Picture */}
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full shadow-lg border-4 border-primary"
        />

        {/* Name & Tagline */}
        <h1 className="text-4xl font-bold text-primary">Hi, I'm Vinhan Truong</h1>
        <p className="text-secondaryText text-lg max-w-xl">
          I’m passionate about improving processes, creating efficient solutions,
          and driving meaningful impact through thoughtful design and operations.
        </p>

        {/* Resume Download */}
        <a
          href="/resume.pdf"
          download="Vinhan_Truong_Resume.pdf"
          className="px-6 py-3 rounded-lg bg-tertiary text-white font-semibold shadow-md hover:bg-primary transition"
        >
          Download Resume
        </a>
      </div>

      {/* Contact Section */}
      <div className="flex space-x-6 mt-10">
        <a
          href="mailto:your-email@example.com"
          className="text-primary hover:text-tertiary text-2xl"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/vinhan-truong/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-tertiary text-2xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
