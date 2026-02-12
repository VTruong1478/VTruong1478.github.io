/**
 * Mobile Window component: no drag, renders in document flow, full width.
 * Title bar with minimize/maximize/close controls (maximize hidden on mobile).
 */
import { useCallback } from "react";
import { MinimizeIcon, MaximizeIcon, CloseIcon } from "../../icons/WindowIcons";
import { useWindowManager } from "../../../contexts/WindowManagerContext";

export default function MobileWindow({ window, content }) {
  const { minimizeWindow, closeWindow } = useWindowManager();

  const handleMinimize = useCallback(() => {
    minimizeWindow(window.id);
  }, [window.id, minimizeWindow]);

  const handleClose = useCallback(() => {
    closeWindow(window.id);
  }, [window.id, closeWindow]);

  return (
    <article
      data-window-id={window.id}
      className="bg-window text-text border border-darkgrey overflow-hidden flex flex-col"
      style={{ borderRadius: 0 }}
      role="dialog"
      aria-label={window.title}
    >
      {/* Title bar: primary bg, Pixelify Sans, square corners */}
      <header className="flex items-center justify-between gap-[var(--space-12)] px-[var(--space-16)] py-[var(--space-8)] bg-primary text-white font-pixel pixel-md select-none shrink-0">
        <h2 className="truncate pixel-md text-white">{window.title}</h2>
        <div className="flex items-center shrink-0 gap-0">
          <button
            type="button"
            onClick={handleMinimize}
            className="flex items-center justify-center w-8 h-8 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset transition-opacity"
            aria-label="Minimize"
          >
            <MinimizeIcon className="w-8 h-8" aria-hidden />
          </button>
          <button
            type="button"
            onClick={handleMinimize}
            className="flex items-center justify-center w-8 h-8 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset transition-opacity"
            aria-label="Maximize"
          >
            <MaximizeIcon className="w-8 h-8" aria-hidden />
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="flex items-center justify-center w-8 h-8 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset transition-opacity"
            aria-label="Close"
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
