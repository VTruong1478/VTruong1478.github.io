import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-background min-h-screen flex flex-col justify-center items-center py-4 px-4 text-text scroll-mt-16"
    >
      <div className="bg-background min-h-screen flex flex-col justify-center items-center py-4 px-4 text-text">
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-6 max-w-3xl text-center">
          {/* Profile Picture */}
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-44 h-44 rounded-full shadow-lg border-4 border-primary"
          />

          {/* Name & Tagline */}
          <h1 className="text-4xl font-bold text-primary flex items-center justify-center space-x-2">
            Hi, I'm An Truong{" "}
            <span className="animate-wave inline-block">👋</span>
          </h1>
          <p className="text-secondaryText text-lg leading-relaxed max-w-2xl mt-4">
            I’m a problem-solver at heart, passionate about designing smarter
            workflows and building efficient systems that help teams work
            better, faster, and more creatively. From scaling operations for a
            small business to optimizing digital services at a large consulting
            company, I leverage AI, automation tools, and hands-on strategy to
            drive measurable impact.
            <br />
            <br />
            With a strong foundation in{" "}
            <span className="font-semibold">
              project management and workflow automation
            </span>
            , I enjoy bridging the gap between technical solutions and business
            outcomes. Outside of work, I channel my creativity into playing
            sports, practicing guitar, and learning random new hobbies.
            <br />
            <br />
            My mission is to empower teams and organizations through thoughtful
            systems, actionable insights, and innovative workflows that actually
            make work feel lighter and more meaningful.
          </p>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download="An_Truong_Resume.pdf"
            className="px-6 py-3 rounded-lg bg-accent text-white font-semibold shadow-md hover:bg-primary transition"
          >
            Download Resume
          </a>
        </div>

        {/* Contact Section */}
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
    </section>
  );
}
