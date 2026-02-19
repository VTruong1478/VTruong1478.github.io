/**
 * Mobile Window component: no drag, renders in document flow, full width.
 * Title bar with all controls disabled on mobile (single window mode).
 */
import { MinimizeIcon, MaximizeIcon, CloseIcon } from "../../icons/WindowIcons";

export default function MobileWindow({ window, content }) {

  return (
    <article
      data-window-id={window.id}
      className="bg-window text-text border border-darkgrey overflow-hidden flex flex-col"
      style={{ 
        borderRadius: 0,
        boxShadow: "var(--shadow-window)"
      }}
      role="dialog"
      aria-label={window.title}
    >
      {/* Title bar: primary bg, Pixelify Sans, square corners */}
      <header className="flex items-center justify-between gap-[var(--space-12)] px-[var(--space-16)] py-[var(--space-8)] bg-primary text-white font-pixel pixel-md select-none shrink-0">
        <h2 className="truncate pixel-md text-white">{window.title}</h2>
        <div className="flex items-center shrink-0 gap-0">
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 cursor-default"
            aria-label="Minimize (disabled on mobile)"
            aria-disabled="true"
          >
            <MinimizeIcon className="w-8 h-8" aria-hidden />
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 cursor-default"
            aria-label="Maximize (disabled on mobile)"
            aria-disabled="true"
          >
            <MaximizeIcon className="w-8 h-8" aria-hidden />
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 cursor-default"
            aria-label="Close (disabled on mobile)"
            aria-disabled="true"
          >
            <CloseIcon className="w-8 h-8" aria-hidden />
          </button>
        </div>
      </header>
      {/* Window body: scrollable content */}
      <div
        className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {content}
      </div>
    </article>
  );
}
