import React from "react";
import { Link } from "react-router-dom";

const portfolioData = [
  {
    title: "Small Business Growth",
    date: "August 2023",
    description:
      "Increased revenue by $2.2K in 8 months through data-driven pricing, supply chain optimization, and targeted customer engagement.",
    image: "/images/small-business.jpg",
    path: "/portfolio/small-business-growth",
  },
  {
    title: "Developer Training",
    date: "March 2024",
    description:
      "Streamlined developer training and accessibility compliance, reducing Jira defect tickets by 30% while enhancing usability for a wider range of users.",
    image: "/images/coding.jpg",
    path: "/portfolio/developer-training",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-background min-h-screen py-8 px-8 sm:px-12 md:px-16 scroll-mt-16"
    >
      <h2 className="text-4xl font-bold text-primary text-center mb-16">
        Portfolio
      </h2>

      {/* 12-column grid on desktop, 8 on tablet, 6 on mobile */}
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6 max-w-7xl mx-auto justify-center">
        {portfolioData.map((item, idx) => (
          <div
            key={idx}
            className="group bg-card rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-2xl
                       col-span-6 md:col-span-4 lg:col-span-6"
          >
            {/* Image with zoom on hover */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
              <h3 className="text-2xl font-semibold text-text mb-2 transition-colors duration-300">
                {item.title}
              </h3>

              <div className="text-sm text-accentDark mb-4">{item.date}</div>

              <p className="text-secondaryText mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* CTA Button with float on hover */}
              <div className="mt-auto">
                <Link
                  to={item.path}
                  className="inline-block bg-accent text-white font-semibold px-4 py-2 rounded-2xl shadow transition-all duration-300 transform hover:-translate-y-1 hover:bg-accent/90"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
