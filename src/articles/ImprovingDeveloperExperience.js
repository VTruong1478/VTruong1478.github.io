import React from "react";

export default function ImprovingDeveloperExperience() {
  return (
    <article className="bg-background min-h-screen py-16 px-6 text-text scroll-mt-16">
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
        <div className="col-span-6 md:col-span-8 lg:col-span-8 lg:col-start-3">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-primary mb-4">
            Improving Developer Experience
          </h1>
          <p className="text-md text-accentDark mb-12">
            Published September 2025
          </p>

          {/* Portfolio Content */}
          <div
            className="prose prose-lg prose-invert max-w-none
                prose-headings:font-bold prose-headings:text-text
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:text-secondaryText prose-h3:mt-8 prose-h3:mb-2
                prose-strong:text-secondary prose-strong:font-semibold
                prose-a:text-accent prose-a:no-underline hover:prose-a:text-secondary hover:prose-a:no-underline
                prose-li:marker:text-accent prose-li:text-text"
          >
            <h2>Overview</h2>
            <p>
              While working as the sole developer on a design team for a
              client’s website, I noticed a disconnect between the user
              experience and the developer experience. Some pages felt smooth
              and polished for users, but others were inconsistent or visually
              jarring. Behind the scenes,{" "}
              <strong>developers were struggling</strong>: the codebase was
              messy, custom styling was scattered, and many pages were built
              independently without shared components or standards.
            </p>
            <p>
              Because components weren’t standardized, the site lacked cohesion,
              and small inconsistencies started creeping into the{" "}
              <strong>user experience</strong>. Updating existing pages or
              creating new ones was slow, frustrating, and error-prone, which
              made life harder for developers and left the product feeling less
              polished for users.
            </p>

            <h2>The Bottleneck</h2>
            <p>
              As the only developer on the design team, I quickly{" "}
              <strong>became the go-to person</strong> for every design and
              styling question, from “Which component should I implement to
              match the Figma file?” to “Where can I find an instance of this
              component in our codebase?”
            </p>
            <p>
              Additionally, we had to maintain WCAG 2.1 accessibility
              compliance, and many developers were unsure how to implement
              accessible code correctly. As a result, developers frequently
              pinged me directly for guidance. With limited time and bandwidth,
              I quickly became a bottleneck,{" "}
              <strong>slowing down the entire team</strong>.
            </p>
            <p>
              I realized that UX isn’t just for end users—
              <strong>developers deserve a great experience too</strong>.
            </p>

            <h2>The Product Solution</h2>
            <p>
              I treated the developer experience as a product opportunity and
              designed a component library to serve the team as its primary
              users. My product management approach included:
            </p>
            <ul>
              <li>
                <strong>Product Design:</strong> Centralized all reusable
                website components and connected them to our Design Language
                System, bridging designers and developers.
              </li>
              <li>
                <strong>Standards & Compliance:</strong> Standardized styling,
                design patterns, and accessibility best practices so components
                were compliant out-of-the-box.
              </li>
              <li>
                <strong>Documentation:</strong> Created clear documentation,
                examples, and usage guidelines to reduce onboarding friction.
              </li>
              <li>
                <strong>Adoption & Feedback:</strong> Ran hands-on training
                sessions, established office hours, and built a feedback loop so
                the library could evolve based on developer needs.
              </li>
            </ul>
            <p>
              I treated the library as a living product, iterating continuously
              with the team to maximize adoption and usability.
            </p>

            <h2>Results</h2>
            <ul>
              <li>
                Streamlined the codebase by reducing{" "}
                <strong>duplicate CSS by 63%</strong>, resulting in a cleaner,
                more maintainable architecture and faster development cycles.
              </li>
              <li>
                Decreased <strong>Jira defect tickets by 30%</strong> through{" "}
                <strong>standardized workflows</strong> and built-in
                accessibility enhancing overall product quality and consistency.
              </li>
              <li>
                Removed <strong>key developer bottlenecks</strong>, freeing my
                time and enabling the team to{" "}
                <strong>deliver features faster</strong> with fewer
                interruptions.
              </li>
              <li>
                Elevated the <strong>developer experience</strong>,
                demonstrating that <strong>thoughtful product design</strong>{" "}
                benefits not just end users but also internal teams, driving
                long-term efficiency.
              </li>
            </ul>

            <h2>Key Takeaway</h2>
            <p>
              By treating developer experience as a product, I led the full
              lifecycle—design, rollout, and iteration—collaborating closely
              with designers, developers, and leadership. This work accelerated
              development, improved accessibility compliance, and created a
              <strong> scalable, maintainable system</strong> that empowered the
              team and elevated the overall quality of our product.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
