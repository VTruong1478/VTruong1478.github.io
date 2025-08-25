import React from "react";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-background min-h-screen justify-center py-4 px-4 scroll-mt-16"
    >
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Portfolio
      </h2>

      {/* Portfolio Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {/* Example Portfolio Card */}
        <div className="bg-card rounded-2xl shadow-md p-6 flex flex-col">
          <h3 className="text-2xl font-semibold text-text mb-2">
            Workflow Automation
          </h3>
          <p className="text-secondaryText mb-4">
            Implemented automated reporting and task tracking, reducing team
            bottlenecks and saving 10+ hours per week.
          </p>
          <div className="mt-auto">
            <a href="#" className="text-accent font-semibold hover:underline">
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-md p-6 flex flex-col">
          <h3 className="text-2xl font-semibold text-text mb-2">
            Process Optimization
          </h3>
          <p className="text-secondaryText mb-4">
            Streamlined onboarding workflows and documentation, improving team
            efficiency and reducing errors.
          </p>
          <div className="mt-auto">
            <a href="#" className="text-accent font-semibold hover:underline">
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-md p-6 flex flex-col">
          <h3 className="text-2xl font-semibold text-text mb-2">
            Project Management
          </h3>
          <p className="text-secondaryText mb-4">
            Led cross-functional projects using agile methodology, improving
            communication and meeting deadlines consistently.
          </p>
          <div className="mt-auto">
            <a href="#" className="text-accent font-semibold hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
