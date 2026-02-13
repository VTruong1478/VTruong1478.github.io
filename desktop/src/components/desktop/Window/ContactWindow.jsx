/**
 * Contact window content placeholder (Inter typography).
 * Uses spacing and typography tokens only.
 */
import Button from "../../ui/Button";

export default function ContactWindowContent() {
  return (
    <div className="px-[var(--space-32)] py-[var(--space-48)] md:px-[var(--space-48)]">
      <h1 className="h1 text-text mb-[var(--space-16)]">Contact</h1>
      <p className="p-md text-text mb-[var(--space-24)]">
        Let's connect! Reach out via email or LinkedIn.
      </p>
      <div className="flex flex-wrap gap-[var(--space-16)]">
        <Button
          label="Email Me"
          icon="email"
          href="mailto:hello@example.com"
          ariaLabel="Email An Truong"
        />
        <Button
          label="Connect with Me"
          icon="linkedin"
          href="https://linkedin.com"
          ariaLabel="Connect on LinkedIn"
        />
      </div>
    </div>
  );
}
