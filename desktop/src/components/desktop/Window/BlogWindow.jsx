/**
 * Blog window content with card-based article layout.
 * Two-column grid on desktop, single column on mobile.
 * Clicking "Read More" shows full article within the same window.
 */
import { useState, useEffect } from "react";
import { useWindowManager } from "../../../contexts/WindowManagerContext";
import lunarTeaMenuImg from "../../../assets/images/portfolio/lunar-tea-menu.png";
import figmaImg from "../../../assets/images/portfolio/Figma-Light-Dark.png";
import blogImage1 from "../../../assets/images/blog/How I Redesigned This Website/image1.png";
import blogImage2 from "../../../assets/images/blog/How I Redesigned This Website/image2.png";
import blogImage3 from "../../../assets/images/blog/How I Redesigned This Website/image3.png";
import blogImage4 from "../../../assets/images/blog/How I Redesigned This Website/image4.png";
import blogImage5 from "../../../assets/images/blog/How I Redesigned This Website/image5.png";
import blogImage6 from "../../../assets/images/blog/How I Redesigned This Website/image6.png";
import blogImage7 from "../../../assets/images/blog/How I Redesigned This Website/image7.png";
import blogImage8 from "../../../assets/images/blog/How I Redesigned This Website/image8.png";
import blogImage9 from "../../../assets/images/blog/How I Redesigned This Website/image9.png";
import blogImage10 from "../../../assets/images/blog/How I Redesigned This Website/image10.png";
import allFigpalsImg from "../../../assets/images/blog/Meet Cardinal/all-figpals.png";
import cardinalFigpalImg from "../../../assets/images/blog/Meet Cardinal/cardinal-figpal.png";
import piskelImg from "../../../assets/images/blog/Meet Cardinal/piskel.png";
import cardinalPixelImg from "../../../assets/images/blog/Meet Cardinal/cardinal-pixel.png";

const blogPosts = [
  {
    id: 1,
    image: blogImage1,
    title: "How I Redesigned This Website",
    date: "January 2026",
    description:
      "A day-by-day breakdown of redesigning my personal website from scratch in under a week.",
    fullArticle: {
      intro: {
        paragraphs: [
          "I redesigned my personal website from scratch in under a week. This is a day-by-day breakdown of how it went.",
        ],
      },
      blocks: [
        {
          heading: "Day 1 (1/8/26)",
          body: [
            "This all started from a [YouTube video](https://www.youtube.com/watch?v=_tWh4cYCTv0&t=3s) that I watched about someone showing off their personal website. It was very cute and unique. I too have grown tired of the same “corporate” design for personal websites. I felt very inspired to redesign my personal website which followed a simple yet boring design.",
            "I started doing more research and learned about [neocities](https://neocities.org/)! Neocities hosts so many cute personal websites that people have made. I spent an afternoon just surfing through other websites to get inspiration. Here are my favorite neocities sites and other personal websites that heavily inspired my redesign:",
            {
              bullets: [
                "[https://www.sharyap.com/](https://www.sharyap.com/)",
                "[https://nenrikido.neocities.org/](https://nenrikido.neocities.org/)",
                "[https://mish-corner.neocities.org/](https://mish-corner.neocities.org/)",
                "[https://shmul.dev/](https://shmul.dev/)",
              ],
            },
            "After getting a boost of inspiration, I decided to start with designing my site in Figma. In the past, I would jump straight into development thinking “I’ll just decide on the design on the fly”. That school of thought has caused me so much [decision fatigue](https://en.wikipedia.org/wiki/Decision_fatigue). This time, I knew that putting in the work of designing first would pay off.",
            "One design direction I kept coming back to was sites that emulate a [desktop environment](https://neocities.org/browse?sort_by=most_followed&tag=windows) directly in the browser. I saw many sites stick to the retro Windows 98 design, which I did like, but I wanted to add some modern design principles on top of it. I made my own desktop that takes inspiration from older Windows versions while the inner window sections display a more modern looking website inside. I also added widgets to the desktop to house some site functions, like a dark mode toggle.",
            "As I'm working on the design, I'm getting excited about how the site will look. But as a previous developer, I know that making the site is a lot harder than designing it.",
          ],
          image: {
            src: blogImage4,
            alt: "Initial desktop-style design",
            caption: "Initial desktop-style design in Figma",
          },
        },

        {
          heading: "Day 2 (1/9/26)",
          body: [
            "Day 1 was a great start. Day 2 is where I really pushed forward. It helped that I already had most of the content from my legacy site, so I could focus purely on redesigning the visual components.",
            "From my previous experience as a Frontend Developer, I knew how important it is to design with accessibility in mind. I stuck to WCAG AA guidelines: checking color contrasts, setting line heights to at least 1.5x the font size, and following the heading hierarchy. I also wanted the site to be responsive across all screen sizes, so I followed a 12-column grid for desktop (**click the G key to see it!**) and 8 columns for mobile. Did it require a lot more time and effort? Yes. Do I regret it? Absolutely not. Accessibility matters to me, and I wanted the site to reflect that.",
            "I wanted my start icon to be a pixelated cardinal bird (more on the origin of this bird here). I drew the cardinal in Piskel.",
            "I had designed the About page within the window, a mobile caret menu, and a start menu. At the end of Day 2, I realized that I should have been creating components this whole time. Copying and pasting corrections/edits 10 times for each wireframe is not fun.",
          ],
          image: {
            src: blogImage9,
            alt: "Pixel cardinal",
            caption: "Drawing the pixel cardinal in Piskel",
          },
        },
        {
          heading: "Day 3 (1/10/26)",
          body: [
            "After staring at my wireframes for a while, I started to see some inconsistencies: elements that I forgot to change after pasting them. I then did the following actions:",
            {
              bullets: [
                "Decide to make a correction or change to an element for a large desktop screen size.",
                "Make that change in one wireframe.",
                "Copy that change to all other screen sizes.",
                "Realize that I have to change certain properties because smaller screen sizes need different attributes.",
                "Regretting not having 1 global component.",
                "Repeat too many times.",
              ],
            },
            "I realized that I should have created a [Design Language System](https://www.figma.com/blog/design-systems-101-what-is-a-design-system/). I also wanted to design a Dark Mode, so I created global components for that as well. I learned a lot of Figma skills that day.",
          ],
          image: {
            src: blogImage8,
            alt: "Design System in Figma",
            caption: "Building a Design Language System in Figma",
          },
        },

        {
          heading: "Day 4 (1/11/26)",
          body: [
            "I noticed some inconsistencies between the desktop background and the inner window. Some elements were pixelated, some were modern, and they were mixed in the wrong places.",
            "I decided that everything on the desktop background is pixelated, everything inside the window is modern. That meant designing my own pixelated icons for the footer from scratch.",
            "Afterwards, I spent A LONG time working on each component and variant for the DLS. A lot of that time consisted of watching Figma YouTube tutorials on 2x speed. I knew that working diligently on the components would make designing the remaining pages a breeze, and that proved to be true.",
            "With the DLS mostly complete, I replaced the old non-global instances with the global components and built out the remaining pages in both Light and Dark mode. By the end of Day 4, the entire site was almost designed.",
          ],
        },

        {
          heading: "Day 5 (1/12/26)",
          body: [
            "I didn't have much free time this day, so I only got to finish the Typography section of the DLS. I also learned that font [pt and px](https://medium.com/level-up-web/the-difference-between-css-units-px-pt-rem-em-vh-vw-ch-ex-and-the-rest-b2cfdf069230) are not the same thing 🙃. I updated all text elements in the file to use the global text styles.",
          ],
          image: {
            src: blogImage5,
            alt: "Typography section",
            caption: "Typography section of the DLS",
          },
        },

        {
          heading: "Day 6 (1/13/26)",
          body: [
            "I realized I was missing a lot of variants for the Footer component, so I spent time building all of them out. I also drew my own pixelated icons for the window heading, the light/dark mode toggle, and the desktop icons.",
            "Once I finished all the window wireframes, I was finally done with the design (check out the [Figma file](https://www.figma.com/design/q5ouRlX1hcWwjRGEm1uGcS/Personal-Website?node-id=0-1&t=0tKYIav1wBoKT4lV-1)). Now onto the hard part: development.",
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
    id: 3,
    image: cardinalPixelImg,
    title: "Meet Cardinal",
    date: "February 2026",
    description:
      "How an April Fools joke turned into my unofficial website mascot.",
    fullArticle: {
      intro: {
        paragraphs: ["It started with an April Fools joke."],
      },
      blocks: [
        {
          heading: "",
          body: [
            "On April 1st, 2025, while I was working on a design team at Deloitte, Figma announced [FigPals](https://www.figma.com/blog/finding-a-forever-home-for-figpals/) as part of their April Fools release. They were tiny virtual desk companions inside Figma. They were completely unnecessary. I loved them immediately.",
          ],
          image: {
            src: allFigpalsImg,
            alt: "Figma FigPals April Fools release",
            caption: "The original FigPals release",
          },
        },
        {
          heading: "",
          body: [
            "I made mine a northern cardinal. I enjoy bird watching, and it's Virginia's state bird, my home state. I gave it a little propeller hat because why not. I named him Cardinal.",
          ],
          image: {
            src: cardinalFigpalImg,
            alt: "My original cardinal FigPal inside Figma",
            caption: "My FigPal: Cardinal",
          },
        },
        {
          heading: "",
          body: [
            "Our whole team had FigPals. The work day felt a little lighter having them next to our cursors.",
            "Then Figma removed them. People were [genuinely upset](https://forum.figma.com/share-your-feedback-26/we-need-to-make-figpals-a-permanent-feature-sign-the-petition-39122), our team included. I thought I'd never see my Cardinal again.",
          ],
        },
        {
          heading: "",
          body: [
            "But on my last day at Deloitte, my team surprised me with a goodbye Figma file filled with kind notes. And somehow, one teammate had tracked down my cardinal and added it back in. It must have been buried in an old file.",
            "The sweet notes alone nearly made me tear up. Seeing my cardinal again finished the job.",
          ],
        },
        {
          heading: "",
          body: [
            "When I started redesigning my website in January 2026, I needed an icon for my start menu. I remembered my little bird. He felt like the obvious choice, but I needed him in pixel art, so I recreated him in Piskel.",
          ],
          image: {
            src: piskelImg,
            alt: "Recreating the cardinal in pixel art using Piskel",
            caption: "Rebuilding Cardinal in pixel art",
          },
        },
        {
          heading: "",
          body: [
            "Now, he's my unofficial mascot.",
            "(If you're missing your FigPal too, someone kindly made a [FigPal Kit](https://www.figma.com/files/team/968694175975189422/resources/community/file/1556069421164105393/figpal-kit) for the community.)",
          ],
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
      intro: {
        paragraphs: [
          "In the summer of 2023, I launched a boba tea business called **Lunar Tea** at local farmers markets. On paper, I was the sole owner, but in reality I couldn't have done it without the support of **family and friends**. Looking back, here are the **lessons that shaped me**.",
        ],
      },
      blocks: [
        {
          heading: "Origin Story (Nov - Dec 2022)",
          body: [
            "It all started during a late-night 'study' session with college friends. We were joking about dream jobs when someone mentioned wanting to work at a boba shop. I laughed and said, 'What if we started one?' We all laughed it off…but that night, the idea stuck. I couldn't stop thinking about it. I dove into research: **market trends, suppliers, startup costs**. Nervously, I pitched it to my parents. I expected skepticism. Instead, my dad said something that changed everything:",
            {
              text: '"I\'d rather you try, fail, and learn than never try at all and regret it."',
              style: "quote",
            },
            "With their encouragement, Lunar Tea went **from a joke to a plan**.",
          ],
        },
        {
          heading: "Building from Scratch (Jan - May 2023)",
          body: [
            "The next few months were a blur. I was still in college, so classes filled my days, and Lunar Tea filled my nights and weekends. I was:",
          ],
          bullets: [
            "Hustling to lock down a spot at a farmers market in Northern Virginia",
            "Figuring out confusing licenses and permits",
            "Testing suppliers to find the best ingredients",
            "Piecing together a website and social media presence to make it all feel real",
          ],
          subsections: [
            {
              subheading: "Lesson: Surround yourself with the right people.",
              body: [
                "Starting a business isn't just about hustle and grit—it's about the **people who show up** when it matters most. Their support turned what felt impossible into something **I'll always be proud of**.",
              ],
            },
          ],
        },
        {
          heading: "Opening Day (June 2023)",
          body: [
            "By June, my to-do list seemed endless: buying inventory, setting up the POS, finalizing insurance, writing operating procedures … Every small choice, from where to place cups to how to train volunteers, felt monumental. Decision fatigue hit me at an all-time high.",
          ],
          subsections: [
            {
              subheading: "Lesson: You can't plan for everything.",
              body: [
                "As a naturally type-A planner, I wanted to control every detail—but some things are impossible to predict. What mattered most was **focusing on the essentials**: the people, the product, and the experience. The rest would fall into place.",
              ],
            },
          ],
        },
        {
          heading: "The Summer Grind (Jun - Aug 2023)",
          body: [
            "That summer, almost every weekend started at 5 a.m.—cooking fresh boba, loading tables into my dad's truck, and setting up the booth before the first customers arrived. On top of that, I was working a full 40-hour week at my first internship. Balancing corporate projects on weekdays and Lunar Tea on weekends was exhausting, but also energizing.",
          ],
          subsections: [
            {
              subheading: "Lesson: Consistent work leads to impact.",
              body: [
                "The grind was intense, but nothing compared to seeing a line form at my booth, hearing customers say they'd been looking forward to my drinks all week, and realizing that all those **late nights and early mornings** had created something people genuinely loved.",
              ],
            },
          ],
        },
        {
          heading: "My Biggest Lesson",
          body: [
            "Running Lunar Tea was hands down the **hardest but most rewarding** thing I've done. I learned that being a founder means constantly balancing freedom with responsibility. Lunar Tea only came to life because of the **family and friends** who stood behind me every step of the way. They showed up at dawn to help set up, spread the word, and reminded me that even though I carried the title of 'sole proprietor,' I was never truly on my own.",
            "I'll always be grateful for the community that believed in me and turned a small experiment into one of the most transformative experiences of my life. Those lessons haven't stayed at the farmers market—they've **shaped how I approach every project since**. Whether designing for users, managing operations, or collaborating with a team, I carry Lunar Tea's lessons with me in every project: trusting my gut to take the leap, surrounding myself with the right people, focusing on what truly matters, and working hard for what counts.",
          ],
        },
      ],
    },
  },
];

export default function BlogWindowContent({ windowData }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { openWindow, focusWindow, windows } = useWindowManager();

  // If windowData contains an articleId, find and display that article
  useEffect(() => {
    if (windowData?.articleId) {
      const article = blogPosts.find(
        (post) => post.id === windowData.articleId,
      );
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

  // Helper function to render text with bold markdown (**text**)
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

    if (paragraph?.style === "quote") {
      return (
        <blockquote
          key={keyPrefix}
          className="border-l-4 border-primary pl-[var(--space-16)] italic text-text"
          style={{ fontSize: "16px", lineHeight: "1.8" }}
        >
          {text}
        </blockquote>
      );
    }

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
          onClick={handleBackToBlog}
          className="inline-flex items-center gap-[8px] mb-[var(--space-24)] text-primary hover:opacity-80 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-opacity p-xs-bold"
        >
          <span>← Back to Blog</span>
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

                {block.body?.map((paragraph, paragraphIndex) => {
                  if (typeof paragraph === "string") {
                    return (
                      <p
                        key={`block-${blockIndex}-paragraph-${paragraphIndex}`}
                        className="text-text"
                        style={{ fontSize: "16px", lineHeight: "1.8" }}
                      >
                        {renderParagraphContent(
                          paragraph,
                          `block-${blockIndex}-paragraph-${paragraphIndex}`,
                        )}
                      </p>
                    );
                  } else if (paragraph?.bullets) {
                    return (
                      <ul
                        key={`block-${blockIndex}-bullets-${paragraphIndex}`}
                        className="list-disc list-inside space-y-[var(--space-4)] text-text ml-[var(--space-16)]"
                        style={{ fontSize: "16px", lineHeight: "1.6" }}
                      >
                        {paragraph.bullets.map((item, itemIndex) => (
                          <li
                            key={`block-${blockIndex}-bullet-${paragraphIndex}-${itemIndex}`}
                          >
                            {renderTextWithBold(item)}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}

                {block.image &&
                  renderArticleImage(block.image, `block-image-${blockIndex}`)}

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
                marginTop: post.image ? "0" : "8px",
              }}
            >
              {post.title}
            </h2>

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
              aria-label={`Read more about ${post.title}`}
              className="inline-flex items-center justify-center gap-[8px] h-[48px] px-[16px] py-[12px] box-border bg-transparent text-primary border-[3px] border-solid border-primary rounded-[var(--radius)] font-sans hover:opacity-90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-opacity self-end"
              style={{ fontSize: "16px", fontWeight: 600 }}
            >
              <span aria-hidden="true">Read More →</span>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
