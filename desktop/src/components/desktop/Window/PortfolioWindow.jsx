/**
 * Portfolio window content with card-based project layout.
 * Two-column grid on desktop, single column on mobile.
 * Clicking "Read More" shows full article within the same window.
 */
import { Fragment, useState, useEffect } from "react";
import { useWindowManager } from "../../../contexts/WindowManagerContext";
import legacyScreenshotImg from "../../../assets/images/portfolio/legacy-screenshot.png";
import smallBusinessImg from "../../../assets/images/portfolio/small-business.JPG";
import figmaImg from "../../../assets/images/portfolio/Figma-Light-Dark.png";
import opsWorkflowImg from "../../../assets/images/portfolio/ops-workflow.png";
import frontEndFlowImg from "../../../assets/images/portfolio/front-back-flow.png";
import intakeFigmaImg from "../../../assets/images/portfolio/intake-figma.png";
import intakeVideo from "../../../assets/images/portfolio/intake-video.mov";
import homeplateCoverImg from "../../../assets/images/portfolio/homeplate-cover.png";
import blogImage1 from "../../../assets/images/blog/How I Redesigned This Website/image1.png";

const projects = [
  {
    id: 3,
    image: figmaImg,
    title: "Designing This Website with Human-Centered Design",
    date: "February 2026",
    description:
      "Applying Human-Centered Design principles to create a personal website that reflects how I think and work.",
    fullArticle: {
      intro: {
        paragraphs: [
          {
            text: "When I set out to redesign my personal website, I wanted it to do more than display my resume. I wanted it to reflect more of how I **think and work**. So instead of jumping straight into building, I applied {{Human-Centered Design (HCD)}}: a framework that starts with the people who will use the product and works backward to every design decision.",
            links: [
              {
                label: "Human-Centered Design (HCD)",
                url: "https://www.interaction-design.org/literature/topics/human-centered-design?srsltid=AfmBOooidm3GjVAKGykvwsBKif5NUDQd-hcSsIDRgxgKKZYthV6ZByML",
              },
            ],
          },
          "It ended up being a small but real-world exercise in the way I approach my work: **define the problem, understand the audience, build intentionally, and test your assumptions**.",
          {
            text: "Note: the live site may be different from the {{Figma design}} in places. Building is iterative, and I changed my mind a few times along the way.",
            links: [
              {
                label: "Figma design",
                url: "https://www.figma.com/design/q5ouRlX1hcWwjRGEm1uGcS/Personal-Website?node-id=0-1&t=0tKYIav1wBoKT4lV-1",
              },
            ],
          },
          {
            text: "If you're curious about the **day-to-day design process** like why I chose a desktop-inspired layout, how the design language system came together, and the mistakes along the way, I wrote about it in detail in my {{blog post}}.",
            links: [
              {
                label: "blog post",
                action: {
                  type: "openWindow",
                  windowId: "blog",
                  data: { articleId: 1 },
                },
              },
            ],
          },
        ],
      },
      blocks: [
        {
          heading: "The Problem with Skipping the Foundation",
          body: [
            {
              text: "My previous site was functional but forgettable. It followed the standard template most developers default to, minimal and indistinct. I'd also seen firsthand on a design team what happens when you build without a foundation: **inconsistent components, confused users, frustrated developers**, and a product that's expensive to maintain.",
              image: {
                src: legacyScreenshotImg,
                alt: "Original legacy version",
                caption: "Version 1 — functional, but boring",
              },
            },
            "That experience changed how I approached the redesign. Before writing any code, I built a full system in Figma, including a design language system, reusable components, and responsive layouts. Building on that foundation made development much easier. It prevented last minute design decisions in development, which always takes longer than refining things in a mockup.",
          ],
        },
        {
          heading: "Understanding the Audience",
          body: [
            "Instead of starting with what **I** wanted to highlight, I started with **who would be visiting**. What would they care about? What would make their job easier?",
            "Most of the time, this site will be opened by someone who’s already seen my resume and wants a clearer sense of how I think. A recruiter who clicked after seeing my resume or maybe a founder doing a quick search. They’re busy and not reading every word, so I made it **easy to scan** yet still showcasing my personality and creativity.",
          ],
        },
        {
          heading: "Design Decisions",
          subsections: [
            {
              subheading: "Color",
              body: [
                "I could say I chose a blue-forward palette because color psychology says blue signals trust and professionalism. That’s true. But honestly, blue is also my favorite color. I tested combinations in light and dark mode using [Realtime Colors](https://www.realtimecolors.com/?colors=000305-d7d6db-3389c1-bfbfbf-13367c&fonts=Inter-Inter) and made sure everything met **WCAG AA color contrast standards** before committing.",
              ],
            },
            {
              subheading: "Accessibility",
              body: [
                "Accessibility was a foundation, not an afterthought. During my time at Deloitte, I worked closely on accessibility initiatives, and that experience shaped how seriously I take it. I followed WCAG AA guidelines throughout: contrast ratios, line height minimums, heading hierarchy, and semantic HTML structure. I also built **responsive layouts** on a 12-column grid for desktop and 8-column for mobile (**click the G key to see it!**), and manually tested keyboard and screen reader navigation.",
              ],
            },
            {
              subheading: "Typography & Layout",
              body: [
                "A clear **typographic hierarchy** makes the interface easy to scan. The desktop uses **Pixelify Sans** and the window content uses **Lora**, creating a deliberate separation between system UI and content. Spacing follows a strict **4px scale**, creating predictable visual rhythm and a layout system that is **easy to maintain and scale**.",
              ],
            },
          ],
        },
        {
          heading: "The Way I Work",
          body: [
            "This project reflects **how I approach work**. Whether it's a workflow, an internal system, or a product, I start by **understanding the people using it**. I care about designing systems that help teams execute well. Clear foundations make everything else easier to execute and scale.",
          ],
          image: {
            src: blogImage1,
            alt: "Final wireframes",
            caption: "Final design language system and wireframes",
          },
        },
      ],
    },
  },
  {
    id: 4,
    image: homeplateCoverImg,
    title: "From Founder Vision to Scalable Operations",
    date: "January 2026",
    description:
      "Built HomePlate’s ops backbone, turning vision into scalable, repeatable systems.",
    fullArticle: {
      intro: {
        paragraphs: [
          "HomePlate is a medically tailored meal startup serving seniors, helping older adults manage chronic conditions and stay independent through personalized nutrition. When I joined, the mission was clear, but the **operational foundation wasn't built yet**. In a meal delivery business, **operations is the product**. Intake, pricing, dietary needs, kitchen prep, and delivery all have to work together as one system. At the time, important decisions lived in conversations and text threads, with no documented rules or shared source of truth. That created **real scale risk**.",
          "I led the effort to operationalize the business. I translated founder ideas into **clear business logic**, defined how frontend intake connected to backend fulfillment, and created documented workflows that aligned the team. I designed HomePlate's intake flow and built the **operational backbone** that made the business repeatable and ready to scale.",
        ],
      },
      blocks: [
        {
          heading: "My Approach",
          body: [
            "I treated this as a systems design problem. Every customer choice needed to translate cleanly into fulfillment without manual interpretation. The goal was to remove ambiguity and build a structure the team could rely on as volume grew.",
          ],
        },
        {
          heading: "Operations Workflow",
          body: [
            "I started by mapping the full order lifecycle from the moment a customer places an order to final fulfillment. The goal was to surface every edge case before it became a real problem: low ingredient stock, dietary conflicts, incomplete orders, or fulfillment gaps.",
            "Documenting each stage created a **shared playbook** and established a **single source of truth** as volume scaled. Nothing relied on memory or improvisation.",
          ],
          image: {
            src: opsWorkflowImg,
            alt: "Operations workflow diagram showing the complete order lifecycle from customer intake to fulfillment",
            caption:
              "Complete order lifecycle mapping from customer intake through kitchen prep to final delivery",
          },
        },
        {
          heading: "Frontend / Backend Infrastructure",
          body: [
            "I built the infrastructure across Shopify, n8n, and Airtable, but the real design constraint was the CEO. He didn't come from a technical background, and I wasn't going to build something he would depend on me to maintain.",
            "Using n8n, I automated handoffs between systems. When an order came in through Shopify, n8n routed the data into Airtable, triggered the correct workflow, and flagged exceptions automatically. Airtable became the **central operational hub**, giving the CEO a clean interface to manage data and update logic without touching code.",
            "The system was built to scale with his skills, not just the business.",
          ],
          image: {
            src: frontEndFlowImg,
            alt: "Frontend/backend infrastructure flowchart showing system integration between Shopify, n8n, and Airtable",
            caption:
              "System architecture showing how Shopify orders flow through n8n automation to Airtable",
          },
        },
        {
          heading: "Intake Flow",
          body: [
            "With the backend defined, I designed the intake flow in Figma before writing a single line of code. I treated it as a product problem first, mapping each step a new customer would take and ensuring every selection translated into structured backend data.",
            "Because most users were older adults, I adhered to **WCAG 2.1 accessibility guidelines** and kept the interface clear and readable. Once the design held, I built it out in code. Designing first ensured no structural decisions were made mid-build.",
          ],
          image: {
            src: intakeFigmaImg,
            alt: "Figma design mockup of the customer intake flow interface",
            caption:
              "Figma mockup of the customer intake flow, designed for older adults with accessibility in mind",
          },
          video: {
            src: intakeVideo,
            alt: "Video demonstration of the intake flow implementation and user interaction",
            caption: "Live demonstration of the implemented intake flow",
          },
        },
        {
          heading: "What I Learned",
          body: [
            "Building from scratch is harder than fixing something broken. Every decision becomes foundational, which sharpens how you prioritize. I stopped chasing the perfect solution and focused on the **right solution for the current stage**.",
            "I also learned that **ops is not a support function. It is the product.** When intake breaks, the kitchen gets bad data. When the kitchen gets bad data, the wrong meal reaches a senior managing a chronic condition. In that environment, documentation and workflow design aren't optional. They're critical.",
            "The biggest shift was learning to design for someone else's constraints. I could have built something more sophisticated. But the real challenge was building a system the CEO could own and operate independently. That mattered more than technical complexity.",
          ],
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
      intro: {
        paragraphs: [
          "I started a small boba tea business at local farmers markets with the goal of creating a product that people would look forward to every week. I managed every aspect of the business from product development to supply chain and operations. In just **eight months**, I grew revenue by over **$2.2K**. This experience showed me how even a small farmers market stand can grow into a meaningful and impactful venture when **strategy and customer focus** are combined.",
        ],
      },
      blocks: [
        {
          heading: "The Challenge",
          body: [
            "Farmers markets are full of talented food and drink vendors, so standing out required more than just making a tasty drink. I needed to create an experience that customers remembered and returned to regularly. I had to build a brand and an experience that customers looked forward to week after week. My goals were:",
          ],
          bullets: [
            "**Operate sustainably** as a solo founder, managing limited resources, time, and capital.",
            "**Cultivate a loyal customer base** in a market full of choices.",
            "**Build a brand** that stood out among countless vendors while clearly communicating our value.",
          ],
        },
        {
          heading: "My Approach",
          subsections: [
            {
              subheading: "Supply Chain Optimization",
              body: [
                "By analyzing supplier offerings and customer preferences, I introduced colorful, trendy flavors like taro and mango that attracted children's attention, driving parents to try our drinks and boosting foot traffic. I also added a non-dairy milk option in a health-conscious neighborhood, resulting in over **20% of customers** choosing it (turns out, people take their oat milk seriously). This demonstrated how targeted product choices directly increased sales and customer satisfaction.",
              ],
            },
            {
              subheading: "Data-Driven Pricing",
              body: [
                "I tracked sales data and customer feedback to determine **optimal pricing** and **order quantities**. This approach helped me maximize profit while keeping drinks affordable. For example, I tested different prices and found that $6.50 struck the best balance between **profitability** and **customer satisfaction**.",
              ],
            },
            {
              subheading: "Customer Engagement",
              body: [
                "I focused on creating a welcoming experience for every visitor. I offered free samples of new flavors, which increased first-time conversions. I also designed **hand-drawn chalkboard menus** and laminated picture menus with **consistent branding**, helping to establish the stand as a recognizable and inviting presence at the market.",
              ],
            },
          ],
        },
        {
          heading: "Results",
          bullets: [
            "Increased revenue by over **$2.2K** in just eight months.",
            "Built a loyal base of **261 repeat customers** who made boba part of their weekend routine, often bringing friends and family along.",
            "Positioned the business as a **go-to destination** at the local farmers market, with customers actively seeking it out each week.",
          ],
        },
        {
          heading: "Key Takeaway",
          body: [
            "What began as a small farmers market stand grew into a meaningful community experience. The experience reinforced a simple lesson: when you combine **clear strategy** with **real attention to customers**, even a small venture can grow and matter.",
          ],
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
      "Redesigned developer workflow, cutting Jira defects by 40%, and removing bottlenecks to accelerate team delivery.",
    fullArticle: {
      intro: {
        paragraphs: [
          "While working as the frontend developer on a design team for a client's website, I noticed a disconnect between the user experience and the developer experience. Some pages felt smooth and polished for users, but others were inconsistent or visually jarring. Behind the scenes, **developers were struggling**: the codebase was messy, custom styling was scattered, and many pages were built independently without shared components or standards.",
          "Because components weren't standardized, the site lacked cohesion, and small inconsistencies started creeping into the **user experience**. Updating existing pages or creating new ones was slow, frustrating, and error-prone, which made life harder for developers and left the product feeling less polished for users.",
        ],
      },
      blocks: [
        {
          heading: "The Bottleneck",
          body: [
            'As the only developer on the design team, I quickly **became the go-to person** for every design and styling question, from "Which component should I implement to match the Figma file?" to "Where can I find an instance of this component in our codebase?"',
            "Additionally, we had to maintain **WCAG 2.1 accessibility compliance**, and many developers were unsure how to implement accessible code correctly. As a result, developers frequently pinged me directly for guidance. With limited time and bandwidth, I quickly became a bottleneck, **slowing down the entire team**.",
            "I realized that UX isn't just for end users. **Developers deserve a great experience too**.",
          ],
        },
        {
          heading: "The Product Solution",
          body: [
            "I treated the developer experience as a product opportunity and designed a component library to serve the team as its primary users. My product management approach included:",
          ],
          bullets: [
            "**Product Design:** Centralized all reusable website components and connected them to our Design Language System, bridging designers and developers.",
            "**Standards & Compliance:** Standardized styling, design patterns, and accessibility best practices so components were compliant out-of-the-box.",
            "**Documentation:** Created clear documentation, examples, and usage guidelines to reduce onboarding friction.",
            "**Adoption & Feedback:** Ran hands-on training sessions, established office hours, and built a feedback loop so the library could evolve based on developer needs.",
          ],
          subsections: [
            {
              subheading: "",
              body: [
                "I treated the library as a living product, iterating continuously with the team to maximize adoption and usability.",
              ],
            },
          ],
        },
        {
          heading: "Results",
          bullets: [
            "Streamlined the codebase by **reducing duplicate CSS**, resulting in a cleaner, more maintainable architecture and faster development cycles.",
            "Decreased **Jira defect tickets by 30%** through **standardized workflows** and built-in accessibility enhancing overall product quality and consistency.",
            "Removed **key developer bottlenecks**, freeing my time and enabling the team to **deliver features faster** with fewer interruptions.",
            "Elevated the **developer experience**, demonstrating that **thoughtful product design** benefits not just end users but also internal teams, driving long-term efficiency.",
          ],
        },
        {
          heading: "Key Takeaway",
          body: [
            "By treating developer experience as a product, I led the full lifecycle: design, rollout, and iteration. This work accelerated development, improved accessibility compliance, and created a **scalable, maintainable system** that empowered the team and elevated the overall quality of our product.",
          ],
        },
      ],
    },
  },
];

export default function PortfolioWindowContent({ windowData }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { openWindow, focusWindow, windows } = useWindowManager();

  // Restore selected article from window data when window is opened/focused
  useEffect(() => {
    if (windowData?.selectedArticleId) {
      const article = projects.find(
        (p) => p.id === windowData.selectedArticleId,
      );
      if (article) {
        setSelectedArticle(article);
      }
    }
  }, [windowData?.selectedArticleId]);

  const handleReadMore = (e, project) => {
    e.preventDefault();
    setSelectedArticle(project);
    // Save selected article to window state
    const portfolioWindow = windows.get("portfolio");
    if (portfolioWindow) {
      openWindow("portfolio", {
        data: { selectedArticleId: project.id },
        x: portfolioWindow.x,
        y: portfolioWindow.y,
        width: portfolioWindow.width,
        height: portfolioWindow.height,
      });
    }
  };

  const handleBackToPortfolio = () => {
    setSelectedArticle(null);
    // Clear selected article from window state
    const portfolioWindow = windows.get("portfolio");
    if (portfolioWindow) {
      openWindow("portfolio", {
        data: { selectedArticleId: null },
        x: portfolioWindow.x,
        y: portfolioWindow.y,
        width: portfolioWindow.width,
        height: portfolioWindow.height,
      });
    }
  };

  const renderArticleImage = (image, keyPrefix) => {
    if (!image?.src || !image?.alt) {
      return null;
    }

    return (
      <figure key={keyPrefix} className="my-[var(--space-32)]">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full rounded-[16px] object-cover shadow-sm border-[1px] border-solid border-grey98"
          style={{ aspectRatio: "16/9" }}
        />
        {image.caption && (
          <figcaption
            className="mt-[var(--space-8)] text-darkgrey opacity-80"
            style={{ fontSize: "14px", lineHeight: "1.5" }}
          >
            {image.caption}
          </figcaption>
        )}
      </figure>
    );
  };

  const renderArticleVideo = (video, keyPrefix) => {
    if (!video?.src || !video?.alt) {
      return null;
    }

    return (
      <figure key={keyPrefix} className="my-[var(--space-32)]">
        <video
          src={video.src}
          alt={video.alt}
          className="w-full rounded-[16px] shadow-sm"
          controls
          style={{ aspectRatio: "16/9" }}
        >
          Your browser does not support the video tag.
        </video>
        {video.caption && (
          <figcaption
            className="mt-[var(--space-8)] text-darkgrey opacity-80"
            style={{ fontSize: "14px", lineHeight: "1.5" }}
          >
            {video.caption}
          </figcaption>
        )}
      </figure>
    );
  };

  const handleInlineLinkAction = (action) => {
    if (action?.type === "openWindow" && action.windowId) {
      const existingWindow = windows.get(action.windowId);

      openWindow(action.windowId, {
        ...(action.data !== undefined && { data: action.data }),
      });

      if (existingWindow?.isOpen) {
        focusWindow(action.windowId);
      }
    }
  };

  // Helper function to render text with bold markdown (**text**)
  const renderLinksInText = (text, keyPrefix) => {
    const markdownLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = markdownLinkPattern.exec(text)) !== null) {
      const [fullMatch, label, url] = match;
      const matchStart = match.index;

      if (matchStart > lastIndex) {
        parts.push(text.slice(lastIndex, matchStart));
      }

      parts.push(
        <a
          key={`${keyPrefix}-link-${matchStart}-${url}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:opacity-80"
        >
          {label}
        </a>,
      );

      lastIndex = matchStart + fullMatch.length;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  const renderTextWithBold = (text, keyPrefix = "text") => {
    if (typeof text !== "string") {
      return text;
    }

    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.flatMap((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const boldContent = part.slice(2, -2);
        return (
          <strong key={`${keyPrefix}-bold-${index}`}>
            {renderLinksInText(boldContent, `${keyPrefix}-bold-${index}`)}
          </strong>
        );
      }

      return renderLinksInText(part, `${keyPrefix}-part-${index}`);
    });
  };

  const renderParagraphContent = (paragraph, keyPrefix) => {
    if (typeof paragraph === "string") {
      return renderTextWithBold(paragraph, keyPrefix);
    }

    const text = paragraph?.text ?? "";
    const links = paragraph?.links ?? [];

    if (!links.length) {
      return renderTextWithBold(text, keyPrefix);
    }

    const linksByLabel = new Map(
      links
        .filter((link) => link?.label && (link?.url || link?.action))
        .map((link) => [link.label, link]),
    );

    return text.split(/(\{\{.*?\}\})/g).flatMap((segment, segmentIndex) => {
      const placeholderMatch = segment.match(/^\{\{(.*)\}\}$/);

      if (!placeholderMatch) {
        return renderTextWithBold(
          segment,
          `${keyPrefix}-segment-${segmentIndex}`,
        );
      }

      const label = placeholderMatch[1].trim();
      const matchedLink = linksByLabel.get(label);

      if (!matchedLink) {
        return `{{${label}}}`;
      }

      if (matchedLink.url) {
        return (
          <a
            key={`${keyPrefix}-placeholder-${segmentIndex}-${label}`}
            href={matchedLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:opacity-80"
          >
            {label}
          </a>
        );
      }

      if (matchedLink.action) {
        return (
          <button
            key={`${keyPrefix}-placeholder-${segmentIndex}-${label}`}
            type="button"
            onClick={() => handleInlineLinkAction(matchedLink.action)}
            className="text-tertiary underline hover:opacity-80 bg-transparent border-none p-0 m-0 align-baseline cursor-pointer focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
          >
            {label}
          </button>
        );
      }

      return (
        <a
          key={`${keyPrefix}-placeholder-${segmentIndex}-${label}`}
          href={matchedLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:opacity-80"
        >
          {label}
        </a>
      );
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
              className="w-full rounded-[16px] mb-[var(--space-32)] object-cover border-[1px] border-solid border-grey98"
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
            {selectedArticle.fullArticle.intro?.paragraphs?.map(
              (paragraph, index) => (
                <p
                  key={`intro-paragraph-${index}`}
                  className="text-text"
                  style={{ fontSize: "16px", lineHeight: "1.8" }}
                >
                  {renderParagraphContent(
                    paragraph,
                    `intro-paragraph-${index}`,
                  )}
                </p>
              ),
            )}

            {selectedArticle.fullArticle.intro?.image &&
              renderArticleImage(
                selectedArticle.fullArticle.intro.image,
                "intro-image",
              )}

            {selectedArticle.fullArticle.blocks?.map((block, blockIndex) => (
              <section
                key={`block-${blockIndex}-${block.heading}`}
                className="space-y-[var(--space-24)]"
              >
                <h2
                  className="text-text mt-[var(--space-32)]"
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "1.3",
                  }}
                >
                  {block.heading}
                </h2>

                {block.body?.map((paragraph, paragraphIndex) => (
                  <Fragment
                    key={`block-${blockIndex}-paragraph-${paragraphIndex}`}
                  >
                    <p
                      className="text-text"
                      style={{ fontSize: "16px", lineHeight: "1.8" }}
                    >
                      {renderParagraphContent(
                        paragraph,
                        `block-${blockIndex}-paragraph-${paragraphIndex}`,
                      )}
                    </p>
                    {paragraph?.image &&
                      renderArticleImage(
                        paragraph.image,
                        `block-${blockIndex}-paragraph-image-${paragraphIndex}`,
                      )}
                  </Fragment>
                ))}

                {block.image &&
                  renderArticleImage(block.image, `block-image-${blockIndex}`)}

                {block.video &&
                  renderArticleVideo(block.video, `block-video-${blockIndex}`)}

                {block.bullets?.length > 0 && (
                  <ul
                    className="list-disc list-inside space-y-[var(--space-8)] text-text ml-[var(--space-16)]"
                    style={{ fontSize: "16px", lineHeight: "1.8" }}
                  >
                    {block.bullets.map((item, itemIndex) => (
                      <li key={`block-${blockIndex}-bullet-${itemIndex}`}>
                        {renderTextWithBold(item)}
                      </li>
                    ))}
                  </ul>
                )}

                {block.subsections?.map((subsection, subsectionIndex) => (
                  <div
                    key={`block-${blockIndex}-subsection-${subsectionIndex}`}
                    className="space-y-[var(--space-24)]"
                  >
                    <h3
                      className="text-text mt-[var(--space-24)]"
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: "1.3",
                      }}
                    >
                      {subsection.subheading}
                    </h3>

                    {subsection.body?.map((paragraph, paragraphIndex) => (
                      <p
                        key={`block-${blockIndex}-subsection-${subsectionIndex}-paragraph-${paragraphIndex}`}
                        className="text-text"
                        style={{ fontSize: "16px", lineHeight: "1.8" }}
                      >
                        {renderParagraphContent(
                          paragraph,
                          `block-${blockIndex}-subsection-${subsectionIndex}-paragraph-${paragraphIndex}`,
                        )}
                      </p>
                    ))}

                    {subsection.image &&
                      renderArticleImage(
                        subsection.image,
                        `block-${blockIndex}-subsection-image-${subsectionIndex}`,
                      )}

                    {subsection.bullets?.length > 0 && (
                      <ul
                        className="list-disc list-inside space-y-[var(--space-8)] text-text ml-[var(--space-16)]"
                        style={{ fontSize: "16px", lineHeight: "1.8" }}
                      >
                        {subsection.bullets.map((item, itemIndex) => (
                          <li
                            key={`block-${blockIndex}-subsection-${subsectionIndex}-bullet-${itemIndex}`}
                          >
                            {renderTextWithBold(item)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </section>
            ))}
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
                className="w-full rounded-[16px] mb-[var(--space-24)] object-cover border-[1px] border-solid border-grey98"
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
