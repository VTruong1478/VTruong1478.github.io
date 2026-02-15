/**
 * Middle section of the taskbar, shows icons for open windows.
 * Clicking an icon restores/focuses the window. Active state for focused window.
 */
import { useWindowManager } from "../../../contexts/WindowManagerContext";
import InlineSvgIcon from "../../icons/InlineSvgIcon";

export default function TaskArea() {
  const { windows, focusWindow, restoreWindow, minimizeWindow } =
    useWindowManager();

  const openWindows = Array.from(windows.values()).filter((w) => w.isOpen);

  const handleIconClick = (window) => {
    if (window.isMinimized) {
      restoreWindow(window.id);
      focusWindow(window.id);
    } else {
      // Check if this is the focused window
      const visibleWindows = Array.from(windows.values()).filter(
        (w) => w.isOpen && !w.isMinimized,
      );
      const maxVisibleZIndex = Math.max(
        ...visibleWindows.map((w) => w.zIndex),
        0,
      );
      if (window.zIndex >= maxVisibleZIndex && !window.isMinimized) {
        // Already focused, minimize it
        minimizeWindow(window.id);
      } else {
        // Focus it
        focusWindow(window.id);
      }
    }
  };

  // Find the highest z-index among visible (non-minimized) windows
  const visibleWindows = Array.from(windows.values()).filter(
    (w) => w.isOpen && !w.isMinimized,
  );
  const maxVisibleZIndex = Math.max(...visibleWindows.map((w) => w.zIndex), 0);

  return (
    <div
      className="flex-1 flex items-center justify-start gap-[var(--space-8)] min-w-0 px-[var(--space-8)]"
      aria-label="Open windows"
      role="region"
    >
      {openWindows.map((window) => {
        const isFocused =
          window.zIndex >= maxVisibleZIndex && !window.isMinimized;
        return (
          <button
            key={window.id}
            type="button"
            data-window-icon-id={window.id}
            onClick={() => handleIconClick(window)}
            className={`flex items-center justify-center shrink-0 w-12 h-[47px] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-widget transition-all relative ${
              isFocused ? "bg-widget" : ""
            }`}
            aria-label={`${window.title} window${
              window.isMinimized ? " (minimized)" : ""
            }`}
            aria-pressed={isFocused}
          >
            <InlineSvgIcon
              rawSvg={window.icon}
              className="w-8 h-8"
              aria-hidden
            />
          </button>
        );
      })}
    </div>
  );
}
