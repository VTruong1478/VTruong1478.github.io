/**
 * Skip to main content link for screen reader / keyboard users.
 * Visually hidden until focused, then appears as a prominent banner.
 * Uses programmatic focus() so the URL hash never changes.
 */
export default function SkipLink() {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById("main-content");
    if (target) {
      target.focus();
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[9999] focus:px-[var(--space-16)] focus:py-[var(--space-8)] focus:bg-window focus:text-tertiary focus:font-pixel focus:border-2 focus:border-tertiary focus:outline-none"
      style={{ fontSize: "16px", fontWeight: 600 }}
    >
      Skip to main content
    </a>
  );
}
