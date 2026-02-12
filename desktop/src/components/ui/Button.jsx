/**
 * Reusable button: primary bg, white text, rounded-m, 48px height,
 * 16px horizontal padding, 8px icon gap. Left icon + label. focus-visible only.
 */
import { EmailIcon, LinkedInButtonIcon } from "../icons/ButtonIcons";

const iconMap = {
  email: EmailIcon,
  linkedin: LinkedInButtonIcon,
};

export default function Button({
  label,
  icon,
  onClick,
  href,
  className = "",
  ariaLabel,
}) {
  const IconComponent = icon ? iconMap[icon] : null;
  const labelOrAria = ariaLabel ?? label;

  const content = (
    <>
      {IconComponent && (
        <span className="shrink-0" aria-hidden>
          <IconComponent className="w-[18px] h-[18px]" />
        </span>
      )}
      <span>{label}</span>
    </>
  );

  const sharedClasses =
    "inline-flex items-center justify-center gap-[var(--space-8)] h-[var(--space-48)] px-[var(--space-16)] bg-primary text-white rounded-m font-sans p-md hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-window transition-opacity";

  if (href) {
    return (
      <a
        href={href}
        className={`${sharedClasses} ${className}`}
        aria-label={labelOrAria}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${sharedClasses} ${className}`}
      aria-label={labelOrAria}
    >
      {content}
    </button>
  );
}
