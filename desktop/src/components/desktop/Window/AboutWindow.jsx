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

export default function AboutWindowContent() {
  return (
    <div className="px-[var(--space-24)] py-[var(--space-32)] md:px-[var(--space-32)] md:pt-[var(--space-40)] md:pb-[var(--space-80)]">
      {/* Centered container with max-width */}
      <div className="max-w-[600px] mx-auto text-center">
        {/* Profile image */}
        <img
          src="/images/profile.jpg"
          alt="An Truong"
          width={160}
          height={160}
          className="w-[160px] h-[160px] rounded-[32px] object-cover border-[2px] border-solid border-tertiary mx-auto mb-[var(--space-24)]"
        />

        {/* Greeting */}
        <p className="font-sans text-primary" style={{ fontSize: '16px', fontWeight: 700 }}>
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span> Hey there! I'm
        </p>

        {/* Name */}
        <h1 className="font-sans text-text mb-[var(--space-16)]" style={{ fontSize: '32px', fontWeight: 700 }}>
          An Truong
        </h1>

        {/* Connect buttons */}
        <div className="mb-[var(--space-32)] flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-stretch sm:items-center">
          <a
            href="mailto:v.truong1478@gmail.com"
            className="inline-flex items-center justify-center gap-[8px] h-[48px] px-[24px] py-[12px] box-border bg-primary text-white border-none rounded-[var(--radius)] font-sans hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-opacity w-full sm:w-auto"
            style={{ 
              fontSize: '16px', 
              fontWeight: 600
            }}
            aria-label="Email An Truong"
          >
            <EmailIcon className="w-[18px] h-[18px]" />
            <span>Get in touch</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vinhan-truong/"
            className="inline-flex items-center justify-center gap-[8px] h-[48px] px-[24px] py-[12px] box-border bg-transparent text-primary border-[3px] border-solid border-primary rounded-[var(--radius)] font-sans hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-opacity w-full sm:w-auto"
            style={{ 
              fontSize: '16px', 
              fontWeight: 600
            }}
            aria-label="Connect on LinkedIn"
          >
            <LinkedInButtonIcon className="w-[18px] h-[18px]" />
            <span>Connect</span>
          </a>
        </div>

        {/* Bullet points - left aligned within centered container */}
        <ul className="list-disc list-inside font-sans text-text text-left" style={{ fontSize: '16px', lineHeight: '1.5', fontWeight: 400 }}>
          {aboutBullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
