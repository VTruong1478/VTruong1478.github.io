/**
 * Blog window content placeholder (Inter typography).
 * Uses spacing and typography tokens only.
 */
export default function BlogWindowContent() {
  return (
    <div className="p-[var(--space-24)] lg:p-[var(--space-32)]">
      <h1 className="h1 text-text mb-[var(--space-16)]">Blog</h1>
      <p className="p-md text-text mb-[var(--space-16)]">
        Read my latest articles and thoughts.
      </p>
      <ul className="list-disc list-inside space-y-[var(--space-8)] p-md text-text">
        <li>
          <a
            href="#blog"
            className="text-primary underline focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-m"
          >
            Jan 2026: How I Redesigned this Website
          </a>
        </li>
        <li>
          <a
            href="#blog"
            className="text-primary underline focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-m"
          >
            Dec 2023: Lessons from Starting My Own Business
          </a>
        </li>
      </ul>
    </div>
  );
}
