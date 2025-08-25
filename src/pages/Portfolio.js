import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Reduced Rework by 30%",
      description:
        "Streamlined developer training and accessibility compliance, reducing rework by 30% while improving usability for end-users.",
    },
    {
      title: "Improved Workflow Automation",
      description:
        "Leveraged AI-powered tools and workflow automation to cut manual reporting time in half, enabling faster decision-making.",
    },
    {
      title: "Cross-Team Collaboration",
      description:
        "Facilitated collaboration between design, development, and QA teams, improving sprint velocity and consistency of deliverables.",
    },
  ];

  return (
    <main className="container mx-auto p-6">
      <section className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-text mb-6">Portfolio</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-text mb-2">
                {project.title}
              </h3>
              <p className="text-text">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
