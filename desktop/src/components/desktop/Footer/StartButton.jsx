/**
 * Start button for the taskbar (left area).
 * Cardinal icon + "Start" label. Pixelify Sans, text-text, ARIA, focus-visible only.
 * Toggles Start menu on click.
 */
import { forwardRef } from "react";
import { CardinalIcon } from "../../icons/FooterIcons";

const StartButton = forwardRef(function StartButton(
  { onClick, "aria-expanded": ariaExpanded, "aria-pressed": ariaPressed },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className="flex items-center px-[var(--space-8)] py-[var(--space-8)] font-pixel text-text hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-widget rounded-m transition-opacity"
      aria-label="Start menu"
      aria-expanded={ariaExpanded}
      aria-pressed={ariaPressed}
    >
      <CardinalIcon className="w-8 h-8 shrink-0" aria-hidden />
      <span className="pixel-sm">Start</span>
    </button>
  );
});

export default StartButton;
