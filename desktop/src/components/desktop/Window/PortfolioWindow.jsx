/**
 * Portfolio window content with card-based project layout.
 * Two-column grid on desktop, single column on mobile.
 * Clicking "Read More" shows full article within the same window.
 */
import { useState } from "react";
import smallBusinessImg from "../../../assets/images/small-business.jpg";
import figmaImg from "../../../assets/images/Figma.png";

const projects = [
  {
    id: 3,
    image: figmaImg,
    title: "Designing My Personal Website with Human-Centered Design",
    date: "February 2026",
    description:
      "Applying Human-Centered Design principles to create a personal website that reflects how I think and work.",
    fullArticle: {
      sections: [
        {
          type: "heading",
          content: "Overview",
        },
        {
          type: "paragraph",
          content:
            "When I set out to redesign my personal website, I wanted it to do more than display my resume. I wanted it to reflect **how I think** — and **how I work**. So instead of jumping straight into building, I applied **[Human-Centered Design (HCD)](https://www.interaction-design.org/literature/topics/human-centered-design?srsltid=AfmBOooidm3GjVAKGykvwsBKif5NUDQd-hcSsIDRgxgKKZYthV6ZByML)**: a framework that starts with the people who will use the product and works backward to every design decision.",
        },
        {
          type: "paragraph",
          content:
            "This project became a practical exercise in the same principles I apply professionally: **define the problem, understand the audience, build intentionally, and test your assumptions**.",
        },
        {
          type: "paragraph",
          content:
            "Note: the live site may differ from the Figma design in places. Design and development are iterative (and I changed my mind a few times after the design phase was over).",
        },
        {
          type: "paragraph",
          content:
            "If you're curious about the day-to-day design process like why I chose a desktop-inspired layout, how the Design Language System came together, and the mistakes along the way, I wrote about it in detail in my **[blog post](https://www.figma.com/design/q5ouRlX1hcWwjRGEm1uGcS/Personal-Website?node-id=82-1390&t=0tKYIav1wBoKT4lV-1)**.",
        },
        {
          type: "heading",
          content: "The Problem with Skipping the Foundation",
        },
        {
          type: "paragraph",
          content:
            "My previous site was functional but forgettable. It followed the standard template most developers default to — clean, minimal, and indistinct. I'd also seen firsthand on a design team what happens when you build without a foundation: **inconsistent components, confused users, frustrated developers**, and a product that's expensive to maintain.",
        },
        {
          type: "paragraph",
          content:
            "That experience shaped how I approached this redesign. Before writing a single line of code, I invested time in designing a proper system in Figma — complete with a **Design Language System (DLS), global components, and responsive layouts** for both desktop and mobile. The upfront investment paid off every step of the way.",
        },
        {
          type: "heading",
          content: "Understanding the Audience",
        },
        {
          type: "paragraph",
          content:
            'The first question I asked wasn\'t "what do I want to show?" It was "**who is going to visit this, and what do they need from it?"',
        },
        {
          type: "paragraph",
          content:
            "The primary audience is **recruiters, potential collaborators, and hiring managers** — people who may spend fewer than two minutes on the page before forming an opinion. With that in mind, I designed for **scannability and clarity**: the most important information surfaces immediately, navigation is intuitive, and nothing competes for attention unnecessarily.",
        },
        {
          type: "heading",
          content: "Design Decisions",
        },
        {
          type: "subheading",
          content: "Color",
        },
        {
          type: "paragraph",
          content:
            "I chose a **blue-forward palette** grounded in color psychology — blue signals trust and professionalism, while cool tones reduce cognitive load and create a calm experience. I used Realtime Colors and Coolors to test combinations in both light and dark modes, ensuring every color met **WCAG AA contrast standards** before it made it into the design.",
        },
        {
          type: "subheading",
          content: "Accessibility",
        },
        {
          type: "paragraph",
          content:
            "Accessibility was a foundation, not an afterthought**. I followed WCAG AA guidelines throughout: contrast ratios, line height minimums, heading hierarchy, and semantic HTML structure. I also built responsive layouts on a 12-column grid for desktop and 8-column for mobile (click the G key to see it!), and manually tested keyboard and screen reader navigation.",
        },
        {
          type: "subheading",
          content: "Typography & Layout",
        },
        {
          type: "paragraph",
          content:
            "A **clear typographic hierarchy** lets visual users instantly orient themselves — headlines, section headers, and body text each occupy a distinct visual layer. A **minimalist layout** and generous whitespace keep the focus on content rather than decoration.",
        },
        {
          type: "heading",
          content: "What This Reflects",
        },
        {
          type: "paragraph",
          content:
            "This project is a small example of something I care about in every context: **building things that work for the people who use them**. Whether it's a product workflow, an operational system, or a website, the approach is the same — **start with the user, set the foundation, then build everything else on top of it**.",
        },
      ],
    },
  },
  {
    id: 1,
    image: smallBusinessImg,
    title: "Driving Revenue Growth for Small Business",
    date: "August 2023",
    description:
      "$2.2K in 8 months by streamlining operations, pricing smarter, and engaging customers strategically.",
    fullArticle: {
      sections: [
        {
          type: "heading",
          content: "Overview",
        },
        {
          type: "paragraph",
          content:
            "I started a small boba tea business at local farmers markets with the goal of creating a product that people would look forward to every week. I managed every aspect of the business from product development to supply chain and operations. In just **eight months**, I grew revenue by over **$2.2K**. This experience showed me how even a small farmers market stand can grow into a meaningful and impactful venture when **strategy and customer focus** are combined.",
        },
        {
          type: "heading",
          content: "The Challenge",
        },
        {
          type: "paragraph",
          content:
            "Farmers markets are full of talented food and drink vendors, so standing out required more than just making a tasty drink. I needed to create an experience that customers remembered and returned to regularly. I had to build a brand and an experience that customers looked forward to week after week. My goals were:",
        },
        {
          type: "list",
          items: [
            "**Build a brand** that stood out among countless vendors while clearly communicating our value.",
            "**Cultivate a loyal customer base** in a market full of choices.",
            "**Operate sustainably** as a solo founder, managing limited resources, time, and capital.",
          ],
        },
        {
          type: "heading",
          content: "My Approach",
        },
        {
          type: "subheading",
          content: "Supply Chain Optimization",
        },
        {
          type: "paragraph",
          content:
            "By analyzing supplier offerings and customer preferences, I introduced bright, trendy flavors like taro and mango that attracted children's attention, driving parents to try our drinks and boosting foot traffic. I also added a non-dairy milk option in a health-conscious neighborhood, resulting in over **20% of customers** choosing it. This demonstrated how targeted product choices directly increased sales and customer satisfaction.",
        },
        {
          type: "subheading",
          content: "Data-Driven Pricing",
        },
        {
          type: "paragraph",
          content:
            "I tracked sales data and customer feedback to determine optimal pricing and order quantities. This approach helped me maximize profit while keeping drinks affordable. For example, I tested different prices for the standard black tea and found that **$6.50** struck the best balance between profitability and customer satisfaction.",
        },
        {
          type: "subheading",
          content: "Customer Engagement",
        },
        {
          type: "paragraph",
          content:
            "I focused on creating a welcoming experience for every visitor. I offered free samples of new flavors, which led to a **20% increase in first-time purchases**. I also designed hand-drawn chalkboard menus and laminated picture menus with consistent branding, helping to establish the stand as a recognizable and inviting presence at the market.",
        },
        {
          type: "heading",
          content: "Results",
        },
        {
          type: "list",
          items: [
            "Increased revenue by over **$2.2K** in just eight months.",
            "Built a loyal base of **261 repeat customers** who made boba part of their weekend routine, often bringing friends and family along.",
            "Positioned the business as a **go-to destination** at the local farmers market, with customers actively seeking it out each week.",
          ],
        },
        {
          type: "heading",
          content: "Key Takeaway",
        },
        {
          type: "paragraph",
          content:
            "What began as a small farmers market stand grew into a meaningful community experience. The real success went beyond revenue and metrics. It was in creating a product and environment that people felt connected to and looked forward to each week. This experience showed me that **thoughtful strategy and genuine care for customers** can make even the smallest venture thrive and leave a lasting impact.",
        },
      ],
    },
  },
  {
    id: 2,
    image: null,
    title: "Improving Developer Experience",
    date: "March 2024",
    description:
      "Redesigned developer workflow, cutting Jira defects by 30%, and removing bottlenecks to accelerate team delivery.",
    fullArticle: {
      sections: [
        {
          type: "heading",
          content: "Overview",
        },
        {
          type: "paragraph",
          content:
            "While working as the sole developer on a design team for a client's website, I noticed a disconnect between the user experience and the developer experience. Some pages felt smooth and polished for users, but others were inconsistent or visually jarring. Behind the scenes, **developers were struggling**: the codebase was messy, custom styling was scattered, and many pages were built independently without shared components or standards.",
        },
        {
          type: "paragraph",
          content:
            "Because components weren't standardized, the site lacked cohesion, and small inconsistencies started creeping into the **user experience**. Updating existing pages or creating new ones was slow, frustrating, and error-prone, which made life harder for developers and left the product feeling less polished for users.",
        },
        {
          type: "heading",
          content: "The Bottleneck",
        },
        {
          type: "paragraph",
          content:
            'As the only developer on the design team, I quickly **became the go-to person** for every design and styling question, from "Which component should I implement to match the Figma file?" to "Where can I find an instance of this component in our codebase?"',
        },
        {
          type: "paragraph",
          content:
            "Additionally, we had to maintain WCAG 2.1 accessibility compliance, and many developers were unsure how to implement accessible code correctly. As a result, developers frequently pinged me directly for guidance. With limited time and bandwidth, I quickly became a bottleneck, **slowing down the entire team**.",
        },
        {
          type: "paragraph",
          content:
            "I realized that UX isn't just for end users—**developers deserve a great experience too**.",
        },
        {
          type: "heading",
          content: "The Product Solution",
        },
        {
          type: "paragraph",
          content:
            "I treated the developer experience as a product opportunity and designed a component library to serve the team as its primary users. My product management approach included:",
        },
        {
          type: "list",
          items: [
            "**Product Design:** Centralized all reusable website components and connected them to our Design Language System, bridging designers and developers.",
            "**Standards & Compliance:** Standardized styling, design patterns, and accessibility best practices so components were compliant out-of-the-box.",
            "**Documentation:** Created clear documentation, examples, and usage guidelines to reduce onboarding friction.",
            "**Adoption & Feedback:** Ran hands-on training sessions, established office hours, and built a feedback loop so the library could evolve based on developer needs.",
          ],
        },
        {
          type: "paragraph",
          content:
            "I treated the library as a living product, iterating continuously with the team to maximize adoption and usability.",
        },
        {
          type: "heading",
          content: "Results",
        },
        {
          type: "list",
          items: [
            "Streamlined the codebase by reducing **duplicate CSS by 63%**, resulting in a cleaner, more maintainable architecture and faster development cycles.",
            "Decreased **Jira defect tickets by 30%** through **standardized workflows** and built-in accessibility enhancing overall product quality and consistency.",
            "Removed **key developer bottlenecks**, freeing my time and enabling the team to **deliver features faster** with fewer interruptions.",
            "Elevated the **developer experience**, demonstrating that **thoughtful product design** benefits not just end users but also internal teams, driving long-term efficiency.",
          ],
        },
        {
          type: "heading",
          content: "Key Takeaway",
        },
        {
          type: "paragraph",
          content:
            "By treating developer experience as a product, I led the full lifecycle—design, rollout, and iteration—collaborating closely with designers, developers, and leadership. This work accelerated development, improved accessibility compliance, and created a **scalable, maintainable system** that empowered the team and elevated the overall quality of our product.",
        },
      ],
    },
  },
];

export default function PortfolioWindowContent() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleReadMore = (e, project) => {
    e.preventDefault();
    setSelectedArticle(project);
  };

  const handleBackToPortfolio = () => {
    setSelectedArticle(null);
  };

  // Helper function to render text with bold markdown (**text**)
  const renderTextWithBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // Article View
  if (selectedArticle) {
    return (
      <div className="px-[var(--space-32)] py-[var(--space-48)] md:px-[var(--space-48)]">
        {/* Back Button */}
        <button
          onClick={handleBackToPortfolio}
          className="inline-flex items-center gap-[8px] mb-[var(--space-24)] text-primary hover:opacity-80 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-opacity p-xs-bold"
        >
          <span>← Back to Portfolio</span>
        </button>

        {/* Article Header */}
        <article className="max-w-[800px] mx-auto">
          {/* Featured Image - only show if image exists */}
          {selectedArticle.image && (
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full rounded-[16px] mb-[var(--space-32)] object-cover"
              style={{ aspectRatio: "16/9" }}
            />
          )}

          {/* Title */}
          <h1
            className="text-text mb-[var(--space-16)]"
            style={{ fontSize: "32px", fontWeight: 700, lineHeight: "1.2" }}
          >
            {selectedArticle.title}
          </h1>

          {/* Date */}
          <p
            className="mb-[var(--space-32)] text-darkgrey"
            style={{ fontSize: "14px", lineHeight: "1.5" }}
          >
            {selectedArticle.date}
          </p>

          {/* Article Content */}
          <div className="space-y-[var(--space-24)]">
            {selectedArticle.fullArticle.sections.map((section, index) => {
              if (section.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="text-text"
                    style={{ fontSize: "16px", lineHeight: "1.8" }}
                  >
                    {renderTextWithBold(section.content)}
                  </p>
                );
              }

              if (section.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-text mt-[var(--space-32)]"
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.3",
                    }}
                  >
                    {section.content}
                  </h2>
                );
              }

              if (section.type === "subheading") {
                return (
                  <h3
                    key={index}
                    className="text-text mt-[var(--space-24)]"
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "1.3",
                    }}
                  >
                    {section.content}
                  </h3>
                );
              }

              if (section.type === "list") {
                return (
                  <ul
                    key={index}
                    className="list-disc list-inside space-y-[var(--space-8)] text-text ml-[var(--space-16)]"
                    style={{ fontSize: "16px", lineHeight: "1.8" }}
                  >
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{renderTextWithBold(item)}</li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>
        </article>
      </div>
    );
  }

  // Portfolio Grid View (default)
  return (
    <div className="px-[var(--space-32)] py-[var(--space-48)] md:px-[var(--space-48)]">
      {/* Title */}
      <h1
        className="text-text mb-[var(--space-16)]"
        style={{ fontSize: "32px", fontWeight: 700, lineHeight: "1.2" }}
      >
        Portfolio
      </h1>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] items-start">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col rounded-[24px] p-[16px] bg-bg dark:bg-grey98"
          >
            {/* Image - only show if image exists */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-[16px] mb-[var(--space-24)] object-cover"
                style={{ aspectRatio: "16/10" }}
              />
            )}

            {/* Title - 18px */}
            <h2
              className="text-text mb-[4px]"
              style={{
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "24px",
                marginTop: project.image ? "0" : "8px",
              }}
            >
              {project.title}
            </h2>

            {/* Date - smaller than paragraph, dark gray */}
            <p
              className="mb-[16px] text-darkgrey"
              style={{ fontSize: "11pt", lineHeight: "1.5" }}
            >
              {project.date}
            </p>

            {/* Description - 12pt, primary text color */}
            <p
              className="text-text mb-[32px]"
              style={{ fontSize: "12pt", lineHeight: "1.6" }}
            >
              {project.description}
            </p>

            {/* Read More Button - matches secondary button from About window, right-aligned */}
            <button
              onClick={(e) => handleReadMore(e, project)}
              aria-label={`Read more about ${project.title}`}
              className="inline-flex items-center justify-center gap-[8px] h-[48px] px-[16px] py-[12px] box-border bg-transparent text-primary border-[3px] border-solid border-primary rounded-[var(--radius)] hover:opacity-90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-opacity self-end p-xs-bold"
            >
              <span aria-hidden="true">Read More →</span>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
