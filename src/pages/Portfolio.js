import React from "react";

const portfolioData = [
  {
    title: "Workflow Automation",
    date: "Sept. 12, 2019",
    author: "Admin",
    comments: 3,
    description:
      "Implemented automated reporting and task tracking, reducing team bottlenecks and saving 10+ hours per week.",
    image: "/portfolio-placeholder1.png", // Replace with your image paths
  },
  {
    title: "Process Optimization",
    date: "Oct. 5, 2019",
    author: "Admin",
    comments: 2,
    description:
      "Streamlined onboarding workflows and documentation, improving team efficiency and reducing errors.",
    image: "/portfolio-placeholder2.png",
  },
  {
    title: "Project Management",
    date: "Nov. 20, 2019",
    author: "Admin",
    comments: 5,
    description:
      "Led cross-functional projects using agile methodology, improving communication and meeting deadlines consistently.",
    image: "/portfolio-placeholder3.png",
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

              {/* Meta Info */}
              <div className="flex items-center space-x-4 text-sm text-accentDark mb-4">
                <span>{item.date}</span>
                <span>{item.author}</span>
                <span>💬 {item.comments}</span>
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
