/**
 * Contact window content with email and LinkedIn buttons.
 * Follows same layout structure as Blog/Portfolio windows.
 */
import { EmailIcon, LinkedInButtonIcon } from "../../icons/ButtonIcons";
import cardinalImg from "../../../assets/images/Cardinal.png";

export default function ContactWindowContent() {
  return (
    <div className="px-[var(--space-32)] py-[var(--space-48)] md:px-[var(--space-48)]">
      {/* Title */}
      <h1
        className="text-text mb-[var(--space-24)]"
        style={{ fontSize: "32px", fontWeight: 700, lineHeight: "1.2" }}
      >
        Contact
      </h1>

      {/* Body paragraph with email link */}
      <p
        className="text-text mb-[var(--space-16)]"
        style={{ fontSize: "16px", lineHeight: "1.6" }}
      >
        The best way to reach me is by email. I'm always happy to chat about
        advice, mentorship, shared hobbies, or potential opportunities. You can
        reach me at{" "}
        <a
          href="mailto:v.truong1478@gmail.com"
          className="focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          v.truong1478@gmail.com
        </a>
        .
      </p>

      {/* Buttons section */}
      <div className="flex flex-col sm:flex-row gap-[var(--space-16)] mb-[var(--space-16)]">
        {/* Primary button - Get in touch */}
        <a
          href="mailto:v.truong1478@gmail.com"
          className="inline-flex items-center justify-center gap-[8px] h-[48px] px-[24px] py-[12px] box-border bg-primary text-white border-none rounded-[var(--radius)] font-sans hover:opacity-90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-opacity"
          style={{
            fontSize: "16px",
            fontWeight: 600,
          }}
          aria-label="Email An Truong"
        >
          <EmailIcon className="w-[18px] h-[18px]" />
          <span>Get in touch</span>
        </a>

        {/* Secondary button - Connect */}
        <a
          href="https://www.linkedin.com/in/vinhan-truong/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-[8px] h-[48px] px-[16px] py-[12px] box-border bg-transparent text-primary border-[3px] border-solid border-primary rounded-[var(--radius)] font-sans hover:opacity-90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-opacity"
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

      {/* Closing text */}
      <p
        className="text-darkgrey italic flex items-center"
        style={{ fontSize: "14px", lineHeight: "1.5" }}
      >
        <span>Thanks for stopping by!</span>
        <img
          src={cardinalImg}
          alt=""
          className="inline-block w-[32px] h-[32px]"
          aria-hidden="true"
        />
      </p>
    </div>
  );
}
