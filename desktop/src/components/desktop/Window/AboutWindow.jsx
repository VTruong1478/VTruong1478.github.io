/**
 * About window content (Lora typography). Matches Figma: headshot, name,
 * subtitle, intro, Let's connect buttons, I like to bullets.
 * Uses spacing and typography tokens only.
 */
import { EmailIcon, LinkedInButtonIcon } from "../../icons/ButtonIcons";

const aboutBullets = [
  "Operator with a builder's mindset. Currently looking for ops and product ops roles at growth-stage startups.",
];

const workExperiences = [
  {
    dates: "Nov 2025 – Feb 2026",
    role: "Head of Operations & Growth",
    company: "HomePlate Health",
    description:
      "Built pre-launch systems and shipped product for an early-stage food startup.",
  },
  {
    dates: "Jun 2023 – Nov 2025",
    role: "Solutions Engineer",
    company: "Deloitte Consulting",
    description:
      "Coordinated cross-functional delivery across product, engineering, and QA for a government platform.",
  },
  {
    dates: "Jan 2023 – Aug 2023",
    role: "Founder",
    company: "Lunar Tea",
    description:
      "Founded and grew a boba beverage business from zero, owning all operations.",
  },
];

export default function AboutWindowContent() {
  return (
    <div className="px-[var(--space-32)] py-[var(--space-48)] md:px-[var(--space-48)]">
      {/* Centered container with max-width */}
      <div className="max-w-[600px] mx-auto text-center">
        {/* Profile image */}
        <img
          src="/images/profile.jpg"
          alt="An Truong Headshot"
          width={160}
          height={160}
          className="w-[160px] h-[160px] rounded-[32px] object-cover border-[2px] border-solid border-tertiary mx-auto mb-[var(--space-24)]"
        />

        {/* Greeting */}
        <p
          className="text-primary"
          style={{ fontSize: "16px", fontWeight: 700 }}
        >
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span>{" "}
          Hey there! I'm
        </p>

        {/* Name */}
        <h1
          className="text-text mb-[var(--space-8)]"
          style={{ fontSize: "32px", fontWeight: 700 }}
        >
          An Truong
        </h1>

        {/* Connect buttons */}
        <div className="mb-[var(--space-16)] flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-stretch sm:items-center">
          <a
            href="mailto:v.truong1478@gmail.com"
            className="inline-flex items-center justify-center gap-[8px] h-[48px] px-[24px] py-[12px] box-border bg-primary text-white border-none rounded-[var(--radius)] hover:opacity-90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-opacity w-full sm:w-auto p-xs-bold"
            aria-label="Email An Truong"
          >
            <EmailIcon className="w-[18px] h-[18px]" />
            <span>Get in touch</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vinhan-truong/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-[8px] h-[48px] px-[16px] py-[12px] box-border bg-transparent text-primary border-[3px] border-solid border-primary rounded-[var(--radius)] hover:opacity-90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-opacity w-full sm:w-auto p-xs-bold"
            aria-label="Connect on LinkedIn, opens in new tab"
          >
            <LinkedInButtonIcon className="w-[18px] h-[18px]" />
            <span>Connect</span>
          </a>
        </div>

        {/* Bio - left aligned within centered container */}
        <div
          className="text-text text-center"
          style={{ fontSize: "16px", lineHeight: "1.5", fontWeight: 400 }}
        >
          {aboutBullets.map((item, i) =>
            item === "" ? <br key={i} /> : <p key={i}>{item}</p>,
          )}
        </div>

        <div className="mt-[var(--space-40)] text-left">
          <h2
            className="text-text"
            style={{ fontSize: "24px", fontWeight: 700 }}
          >
            Work Experience
          </h2>
          <ol className="relative mt-[var(--space-16)] space-y-[var(--space-16)]">
            {/* Continuous vertical timeline line */}
            <span
              className="absolute w-[2px] top-0 bottom-0"
              style={{ backgroundColor: "var(--tertiary)", left: "11px" }}
              aria-hidden="true"
            />
            {workExperiences.map((experience) => (
              <li
                key={`${experience.role}-${experience.company}`}
                className="relative grid grid-cols-[24px_1fr] gap-[var(--space-24)]"
              >
                <div
                  className="relative flex items-start h-full"
                  style={{ justifyContent: "center" }}
                >
                  <span
                    className="block w-[16px] h-[16px] rounded-full"
                    style={{
                      backgroundColor: "var(--tertiary)",
                    }}
                    aria-hidden="true"
                  />
                </div>
                <div
                  className="relative"
                  style={{
                    backgroundColor: "var(--window-background)",
                    padding: "var(--space-20)",
                  }}
                >
                  <p
                    className="text-darkgrey mb-[var(--space-4)]"
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                      color: "var(--dark-grey)",
                    }}
                  >
                    {experience.dates}
                  </p>
                  <h3
                    className="text-text"
                    style={{ fontSize: "20px", fontWeight: 700 }}
                  >
                    {experience.role}
                  </h3>
                  <p
                    className="text-text mt-[var(--space-4)]"
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "var(--dark-grey)",
                    }}
                  >
                    {experience.company}
                  </p>
                  <p
                    className="text-text mt-[var(--space-8)]"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.5",
                      fontWeight: 400,
                    }}
                  >
                    {experience.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
