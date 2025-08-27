import React from "react";

const portfolioData = [
  {
    title: "Small Business Growth",
    date: "August 2023",
    description:
      "Increased revenue by $2.2K in 8 months through data-driven pricing, supply chain optimization, and targeted customer engagement.",
    image: "/images/open.jpg",
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
      className="bg-background min-h-screen py-16 px-6 scroll-mt-16"
    >
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Portfolio
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full sm:w-11/12 md:w-3/4 lg:w-4/5 xl:w-4/5 mx-auto">
        {portfolioData.map((item, idx) => (
          <div
            key={idx}
            className="bg-card rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col">
              <h3 className="text-2xl font-semibold text-text mb-2">
                {item.title}
              </h3>

              {/* Meta Info (just date now) */}
              <div className="text-sm text-accentDark mb-4">
                <span>{item.date}</span>
              </div>

              <p className="text-secondaryText mb-4">{item.description}</p>
              <div className="mt-auto">
                <a
                  href="#"
                  className="text-accent font-semibold hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
