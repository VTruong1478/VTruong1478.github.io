/**
 * Blog window content with card-based article layout.
 * Two-column grid on desktop, single column on mobile.
 * Clicking "Read More" shows full article within the same window.
 */
import { useState, useEffect } from "react";
import lunarTeaMenuImg from "../../../assets/images/lunar-tea-menu.png";
import figmaImg from "../../../assets/images/Figma.png";

const blogPosts = [
  {
    id: 1,
    image: figmaImg,
    title: "How I Designed This Website",
    date: "January 2026",
    description:
      "Behind-the-scenes of the construction of this site.",
    fullArticle: {
      sections: [
        {
          type: "paragraph",
          content:
            "When I set out to build my personal website, I knew I didn't want it to feel like just another static resume. I wanted it to reflect my personality while still being easy and enjoyable to use. That's why I turned to **Human-Centered Design** (HCD), an approach that puts **people at the core** of every design decision. Instead of starting with \"what do I want to show?\" the question shifts to \"how will someone experience this and what will make it more enjoyable for them?\"",
        },
        {
          type: "paragraph",
          content:
            "I first came across this mindset while working on a design team. I saw what happens when you skip the foundational steps. Without a proper design system, the product quickly turned messy. Elements looked inconsistent, users got confused, and developers got frustrated trying to keep it all together. That experience taught me a simple lesson: **set the foundation first, then build everything else on top of it.** I carried that same approach into my own site, making sure every choice, from color to typography to accessibility, felt intentional and consistent.",
        },
        {
          type: "heading",
          content: "Knowing my Audience",
        },
        {
          type: "paragraph",
          content:
            "When I began planning my site, I thought about who would actually be visiting my site. For the most part, it's recruiters, potential teammates, or collaborators. It's people who might only spend a few minutes scrolling before moving on. With that in mind, I designed the site to be **clear and easy to navigate**, putting the most important information right up front. My goal was to make their experience smooth, intuitive, and leave them with a **strong, positive impression.**",
        },
        {
          type: "heading",
          content: "Starting with Color",
        },
        {
          type: "paragraph",
          content:
            "Once I had a clear understanding of my audience, I turned to color to shape my website's identity. Research in color psychology indicates that **colors significantly influence user perception.** For instance, blue is often associated with trust and professionalism, making it a popular choice for corporate and tech websites. Additionally, cool-toned palettes featuring blues, greens, and purples are known to create soothing and calming effects, which can **enhance user experience by reducing cognitive load.**",
        },
        {
          type: "paragraph",
          content:
            "To ensure readability and accessibility, I selected colors that meet WCAG contrast standards. Tools like Realtime Colors and Coolors helped me test combinations in both light and dark modes, ensuring the palette was visually appealing and functional. By grounding my choices in **color psychology** and **accessibility principles**, I aimed to create a website that not only reflects my personal brand but also provides a **positive and engaging experience for visitors.**",
        },
        {
          type: "heading",
          content: "Designing for Accessibility",
        },
        {
          type: "paragraph",
          content:
            "Another priority for me was accessibility. **Too often, accessibility gets treated as an afterthought,** which leaves people out of the experience. I wanted inclusiveness to be part of the foundation. That meant choosing text sizes and contrast ratios that make the content easy to read, building navigation that feels intuitive, and making sure the layout works just as well on a phone as it does on a laptop. I also manually tested keyboard and screen reader navigation to further ensure my site was accessible to all users.",
        },
        {
          type: "heading",
          content: "Design Decisions with Intent",
        },
        {
          type: "list",
          items: [
            "**Minimalist layout** to let the content speak louder than the decoration",
            "**Ample white space** to create clarity and a sense of calm",
            "**Consistent typography hierarchy** so visual users can instantly identify headlines, sections, and body text",
            "**Semantic HTML elements** to ensure screen reader users can easily navigate and understand the page structure",
          ],
        },
        {
          type: "heading",
          content: "What I Learned",
        },
        {
          type: "paragraph",
          content:
            "The biggest lesson I took from this process is that Human-Centered Design brings clarity. Instead of feeling overwhelmed by endless choices (decision fatigue!), I always had a guiding principle: make it useful, make it thoughtful, and make it feel human.",
        },
        {
          type: "paragraph",
          content:
            "At the end of the day, my site isn't just for me, it's for the people who visit it. Maybe that's a recruiter checking out my experience or a future teammate curious about my work. Whoever it is, I want them to leave with a **positive impression and an easy experience**. For me, that's what Human-Centered Design is all about. It's less about perfect intentions and more about empathy.",
        },
      ],
    },
  },
  {
    id: 2,
    image: lunarTeaMenuImg,
    title: "Lessons from Starting my Own Business",
    date: "December 2023",
    description:
      "What I learned from launching my own boba tea small business.",
    fullArticle: {
      sections: [
        {
          type: "paragraph",
          content:
            "In the summer of 2023, I launched a boba tea business called **Lunar Tea** at local farmers markets. On paper, I was the sole owner, but in reality I couldn't have done it without the support of **family and friends**. Looking back, here are the **lessons that shaped me**.",
        },
        {
          type: "heading",
          content: "Origin Story (Nov - Dec 2022)",
        },
        {
          type: "paragraph",
          content:
            "It all started during a late-night \"study\" session with college friends. We were joking about dream jobs when someone mentioned wanting to work at a boba shop. I laughed and said, \"What if we started one?\" We all laughed it off…but that night, the idea stuck. I couldn't stop thinking about it. I dove into research: **market trends, suppliers, startup costs**. Nervously, I pitched it to my parents. I expected skepticism. Instead, my dad said something that changed everything:",
        },
        {
          type: "quote",
          content:
            "\"I'd rather you try, fail, and learn than never try at all and regret it.\"",
        },
        {
          type: "paragraph",
          content:
            "With their encouragement, Lunar Tea went **from a joke to a plan**.",
        },
        {
          type: "subheading",
          content: "Lesson: Trust your gut and take the leap.",
        },
        {
          type: "paragraph",
          content:
            "If I had only listened to my skeptic, logical side, I never would've risked the **time, money, and energy** to start a business with no guaranteed payoff. I would've missed out on the **priceless lessons** that Lunar Tea gave me. Logic keeps you safe, but sometimes your gut knows when it's worth jumping, and that leap can change everything.",
        },
        {
          type: "heading",
          content: "Building from Scratch (Jan - May 2023)",
        },
        {
          type: "paragraph",
          content:
            "The next few months were a blur. I was still in college, so classes filled my days, and Lunar Tea filled my nights and weekends. I was:",
        },
        {
          type: "list",
          items: [
            "Hustling to lock down a spot at a farmers market in Northern Virginia",
            "Figuring out confusing licenses and permits",
            "Testing suppliers to find the best ingredients",
            "Piecing together a website and social media presence to make it all feel real",
          ],
        },
        {
          type: "paragraph",
          content:
            "Being the only one in charge was both exciting and overwhelming. Every decision, from the booth layout to the branding, landed on me. I **bootstrapped everything**. The freedom was amazing, but the weight of it all hit me harder than I expected.",
        },
        {
          type: "subheading",
          content: "Lesson: Surround yourself with the right people.",
        },
        {
          type: "paragraph",
          content:
            "Starting a business isn't just about hustle and grit—it's about the **people who show up** when it matters most. Their support turned what felt impossible into something **I'll always be proud of**.",
        },
        {
          type: "heading",
          content: "Opening Day (June 2023)",
        },
        {
          type: "paragraph",
          content:
            "By June, my to-do list seemed endless: buying inventory, setting up the POS, finalizing insurance, writing operating procedures … Every small choice, from where to place cups to how to train volunteers, felt monumental. Decision fatigue hit me at an all-time high.",
        },
        {
          type: "subheading",
          content: "Lesson: You can't plan for everything.",
        },
        {
          type: "paragraph",
          content:
            "As a naturally type-A planner, I wanted to control every detail—but some things are impossible to predict. What mattered most was **focusing on the essentials**: the people, the product, and the experience. The rest would fall into place.",
        },
        {
          type: "heading",
          content: "The Summer Grind (Jun - Aug 2023)",
        },
        {
          type: "paragraph",
          content:
            "That summer, almost every weekend started at 5 a.m.—cooking fresh boba, loading tables into my dad's truck, and setting up the booth before the first customers arrived. On top of that, I was working a full 40-hour week at my first internship. Balancing corporate projects on weekdays and Lunar Tea on weekends was exhausting, but also energizing.",
        },
        {
          type: "subheading",
          content: "Lesson: Consistent work leads to impact.",
        },
        {
          type: "paragraph",
          content:
            "The grind was intense, but nothing compared to seeing a line form at my booth, hearing customers say they'd been looking forward to my drinks all week, and realizing that all those **late nights and early mornings** had created something people genuinely loved.",
        },
        {
          type: "heading",
          content: "My Biggest Lesson",
        },
        {
          type: "paragraph",
          content:
            "Running Lunar Tea was hands down the **hardest but most rewarding** thing I've done. I learned that being a founder means constantly balancing freedom with responsibility. Lunar Tea only came to life because of the **family and friends** who stood behind me every step of the way. They showed up at dawn to help set up, spread the word, and reminded me that even though I carried the title of \"sole proprietor,\" I was never truly on my own.",
        },
        {
          type: "paragraph",
          content:
            "I'll always be grateful for the community that believed in me and turned a small experiment into one of the most transformative experiences of my life. Those lessons haven't stayed at the farmers market—they've **shaped how I approach every project since**. Whether designing for users, managing operations, or collaborating with a team, I carry Lunar Tea's lessons with me in every project: trusting my gut to take the leap, surrounding myself with the right people, focusing on what truly matters, and working hard for what counts.",
        },
      ],
    },
  },
];

export default function BlogWindowContent({ windowData }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // If windowData contains an articleId, find and display that article
  useEffect(() => {
    if (windowData?.articleId) {
      const article = blogPosts.find(post => post.id === windowData.articleId);
      if (article) {
        setSelectedArticle(article);
      }
    }
  }, [windowData]);

  const handleReadMore = (e, post) => {
    e.preventDefault();
    setSelectedArticle(post);
  };

  const handleBackToBlog = () => {
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
          onClick={handleBackToBlog}
          className="inline-flex items-center gap-[8px] mb-[var(--space-24)] text-primary hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-opacity"
          style={{ fontSize: "16px", fontWeight: 600 }}
        >
          <span>← Back to Blog</span>
        </button>

        {/* Article Header */}
        <article className="max-w-[800px] mx-auto">
          {/* Featured Image */}
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

              if (section.type === "quote") {
                return (
                  <blockquote
                    key={index}
                    className="border-l-4 border-primary pl-[var(--space-16)] py-[var(--space-8)] my-[var(--space-24)] italic text-primary"
                    style={{ fontSize: "16px", lineHeight: "1.8" }}
                  >
                    {section.content}
                  </blockquote>
                );
              }

              return null;
            })}
          </div>
        </article>
      </div>
    );
  }

  // Blog Grid View (default)
  return (
    <div className="px-[var(--space-32)] py-[var(--space-48)] md:px-[var(--space-48)]">
      {/* Title */}
      <h1
        className="text-text mb-[var(--space-16)]"
        style={{ fontSize: "32px", fontWeight: 700, lineHeight: "1.2" }}
      >
        Blog
      </h1>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] items-start">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col rounded-[24px] p-[16px] bg-bg dark:bg-grey98"
          >
            {/* Image */}
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full rounded-[16px] mb-[var(--space-24)] object-cover"
                style={{ aspectRatio: "16/10" }}
              />
            )}

            {/* Title - 18px */}
            <h3 
              className="text-text mb-[4px]" 
              style={{ 
                fontSize: '18px', 
                fontWeight: 700, 
                lineHeight: '24px',
                marginTop: post.image ? '0' : '8px'
              }}
            >
              {post.title}
            </h3>

            {/* Date - smaller than paragraph, dark gray */}
            <p
              className="mb-[16px] text-darkgrey"
              style={{ fontSize: "11pt", lineHeight: "1.5" }}
            >
              {post.date}
            </p>

            {/* Description - 12pt, primary text color */}
            <p
              className="text-text mb-[32px]"
              style={{ fontSize: "12pt", lineHeight: "1.6" }}
            >
              {post.description}
            </p>

            {/* Read More Button - matches secondary button from About window, right-aligned */}
            <button
              onClick={(e) => handleReadMore(e, post)}
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
