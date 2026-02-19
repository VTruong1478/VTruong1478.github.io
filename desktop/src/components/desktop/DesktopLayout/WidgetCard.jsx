/**
 * Placeholder widget card with Windows Aero glass effect.
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
      className={`rounded-m p-[var(--space-16)] font-pixel text-text ${className}`}
      style={{
        background: "var(--widget-glass-bg)",
        backdropFilter: "blur(var(--widget-blur))",
        WebkitBackdropFilter: "blur(var(--widget-blur))",
        border: "1px solid var(--widget-glass-border)",
        boxShadow: "var(--shadow-widget-aero)",
      }}
      {...(label ? { "aria-label": label } : {})}
    >
      {title ? <p className="pixel-md mb-[var(--space-12)]">{title}</p> : null}
      {children}
    </aside>
  );
}
