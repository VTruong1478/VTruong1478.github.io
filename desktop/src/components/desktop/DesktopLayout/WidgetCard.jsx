/**
 * Placeholder widget card. bg-widget, rounded-m.
 * Used for Theme switcher and Blog Posts widgets.
 */
export default function WidgetCard({
  title,
  "aria-label": ariaLabel,
  children,
  className = "",
}) {
  const label = ariaLabel ?? (title || undefined);
  return (
    <aside
      className={`bg-widget rounded-m p-[var(--space-16)] font-pixel text-text ${className}`}
      {...(label ? { "aria-label": label } : {})}
    >
      {title ? (
        <h2 className="pixel-md mb-[var(--space-12)]">{title}</h2>
      ) : null}
      {children}
    </aside>
  );
}
