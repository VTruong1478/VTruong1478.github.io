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
      if (part.startsWith('**') && part.endsWith('**')) {
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
          className="inline-flex items-center gap-[8px] mb-[var(--space-24)] text-primary hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-opacity"
          style={{ fontSize: "16px", fontWeight: 600 }}
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
            className="flex flex-col rounded-[24px] p-[16px] bg-bg"
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
            <h3 className="text-text mb-[4px]" style={{ fontSize: '18px', fontWeight: 700, lineHeight: '24px' }}>
              {project.title}
            </h3>

            {/* Date - 12pt, dark gray */}
            <p
              className="mb-[8px] text-darkgrey"
              style={{ fontSize: "12pt", lineHeight: "1.5" }}
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
              className="inline-flex items-center justify-center gap-[8px] h-[48px] px-[16px] py-[12px] box-border bg-transparent text-primary border-[3px] border-solid border-primary rounded-[var(--radius)] font-sans hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-opacity self-end"
              style={{ fontSize: "16px", fontWeight: 600 }}
            >
              <span>Read More →</span>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
