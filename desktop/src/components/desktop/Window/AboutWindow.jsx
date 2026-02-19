/**
 * About window content (Inter typography). Matches Figma: headshot, name,
 * subtitle, intro, Let's connect buttons, I like to bullets.
 * Uses spacing and typography tokens only.
 */
import { EmailIcon, LinkedInButtonIcon } from "../../icons/ButtonIcons";

const aboutBullets = [
  "I connect teams, users, and stakeholders to ship products that matter",
  "I bridge vision and execution, from idea to launch",
  "I love both building from scratch and fixing what's broken",
  "I learn fast, whether it's a new industry or a new hobby",
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
          className="font-sans text-primary"
          style={{ fontSize: "16px", fontWeight: 700 }}
        >
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span>{" "}
          Hey there! I'm
        </p>

        {/* Name */}
        <h1
          className="font-sans text-text mb-[var(--space-16)]"
          style={{ fontSize: "32px", fontWeight: 700 }}
        >
          An Truong
        </h1>

        {/* Connect buttons */}
        <div className="mb-[var(--space-32)] flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-stretch sm:items-center">
          <a
            href="mailto:v.truong1478@gmail.com"
            className="inline-flex items-center justify-center gap-[8px] h-[48px] px-[24px] py-[12px] box-border bg-primary text-white border-none rounded-[var(--radius)] font-sans hover:opacity-90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-opacity w-full sm:w-auto"
            style={{
              fontSize: "16px",
              fontWeight: 600,
            }}
            aria-label="Email An Truong"
          >
            <EmailIcon className="w-[18px] h-[18px]" />
            <span>Get in touch</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vinhan-truong/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-[8px] h-[48px] px-[16px] py-[12px] box-border bg-transparent text-primary border-[3px] border-solid border-primary rounded-[var(--radius)] font-sans hover:opacity-90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-opacity w-full sm:w-auto"
            style={{
              fontSize: "16px",
              fontWeight: 600,
            }}
            aria-label="Connect on LinkedIn, opens in new tab"
          >
            <LinkedInButtonIcon className="w-[18px] h-[18px]" />
            <span>Connect</span>
          </a>
        </div>

        {/* Bullet points - left aligned within centered container */}
        <ul
          className="list-disc list-inside font-sans text-text text-left"
          style={{ fontSize: "16px", lineHeight: "1.5", fontWeight: 400 }}
        >
          {aboutBullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="mt-[var(--space-40)] text-left">
          <h2
            className="font-sans text-text"
            style={{ fontSize: "20px", fontWeight: 700 }}
          >
            Work Experience
          </h2>
          <ol className="mt-[var(--space-24)] space-y-[var(--space-32)]">
            {workExperiences.map((experience) => (
              <li
                key={`${experience.role}-${experience.company}`}
                className="grid grid-cols-[24px_1fr] gap-[var(--space-24)]"
              >
                <div className="relative flex flex-col items-center h-full">
                  <span
                    className="absolute top-0 bottom-0 w-[2px]"
                    style={{ backgroundColor: "rgba(19, 54, 124, 0.2)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="relative block w-[16px] h-[16px] rounded-full"
                    style={{
                      backgroundColor: "var(--window-background)",
                      border: "2px solid rgba(19, 54, 124, 0.4)",
                    }}
                    aria-hidden="true"
                  />
                </div>
                <div
                  className="relative font-sans"
                  style={{
                    backgroundColor: "var(--window-background)",
                    padding: "var(--space-20)",
                  }}
                >
                  <p
                    className="text-darkgrey mb-[var(--space-8)]"
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      color: "rgba(95, 95, 95, 0.75)",
                    }}
                  >
                    {experience.dates}
                  </p>
                  <h3
                    className="font-sans text-text"
                    style={{ fontSize: "20px", fontWeight: 700 }}
                  >
                    {experience.role}
                  </h3>
                  <p
                    className="text-text mt-[var(--space-4)]"
                    style={{ fontSize: "16px", fontWeight: 600 }}
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
