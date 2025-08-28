import React from "react";
import { motion } from "framer-motion";

const portfolioData = [
  {
    title: "Small Business Growth",
    date: "August 2023",
    description:
      "Increased revenue by $2.2K in 8 months through data-driven pricing, supply chain optimization, and targeted customer engagement.",
    image: "/images/small-business.jpg",
  },
  {
    title: "Process Automation",
    date: "July 2024",
    description:
      "Leveraged AI-powered tools and workflow automation to manage backlog input, generate reports, and optimize repetitive processes, reducing manual work, ensuring real-time data synchronization, and saving 5+ hours per week.",
    image: "/images/automation.jpg",
  },
  {
    title: "Developer Training",
    date: "March 2024",
    description:
      "Streamlined developer training and accessibility compliance, reducing Jira defect tickets by 30% while enhancing usability for a wider range of users.",
    image: "/images/coding.jpg",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-background min-h-screen py-20 px-6 scroll-mt-16"
    >
      <h2 className="text-4xl font-bold text-primary text-center mb-16">
        Portfolio
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full sm:w-11/12 md:w-4/5 lg:w-4/5 xl:w-3/4 mx-auto">
        {portfolioData.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-card rounded-2xl shadow-lg overflow-hidden group cursor-pointer relative"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              {/* Title over image */}
              <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white drop-shadow-lg">
                {item.title}
              </h3>
            </div>

            <div className="p-6 flex flex-col">
              {/* Meta Info */}
              <div className="text-sm text-accentDark mb-3">
                <span>{item.date}</span>
              </div>

              <p className="text-secondaryText mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-auto">
                <a
                  href="#"
                  className="inline-block text-accent font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
