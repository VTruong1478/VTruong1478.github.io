import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { MinimizeIcon, MaximizeIcon, CloseIcon } from "../../icons/WindowIcons";
import { useWindowManager } from "../../../contexts/WindowManagerContext";

/**
 * Window component with drag, minimize/maximize/close, and animations.
 * Title bar uses primary token, square corners, no border radius.
 */
export default function Window({ window, bounds, content }) {
  const {
    windows,
    focusWindow,
    minimizeWindow,
    toggleMaximizeWindow,
    closeWindow,
    setWindowPosition,
  } = useWindowManager();

  const windowRef = useRef(null);
  const headerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, windowX: 0, windowY: 0 });
  const hasDraggedRef = useRef(false);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = globalThis.window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Focus window on mount/update
  useEffect(() => {
    if (window.isOpen && !window.isMinimized) {
      focusWindow(window.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.id, window.isOpen, window.isMinimized]); // Only depend on window state, not focusWindow

  // Handle dragging
  const handlePointerDown = useCallback(
    (e) => {
      if (e.target.closest("button")) return; // Don't drag on buttons
      if (window.isMaximized) return; // Disable drag while maximized
      setIsDragging(true);
      hasDraggedRef.current = false; // Reset drag flag
      focusWindow(window.id);
      dragStartRef.current = {
        x: e.clientX,
        y: e.clientY,
        windowX: window.x,
        windowY: window.y,
      };
      e.preventDefault();
    },
    [window.x, window.y, window.id, window.isMaximized, focusWindow]
  );

  const handlePointerMove = useCallback(
    (e) => {
      if (!isDragging || window.isMaximized) return;

      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;

      // Mark as dragged if movement exceeds a small threshold
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        hasDraggedRef.current = true;
      }

      let newX = dragStartRef.current.windowX + dx;
      let newY = dragStartRef.current.windowY + dy;

      // Clamp to desktop body bounds (full viewport minus footer).
      // Use a minimum visible height so windows can be dragged all the way down toward the footer
      // (rendered height is content-driven with maxHeight, so we don't use window.height here).
      const minVisibleHeight = 48; // at least title bar above footer
      const minX = bounds.left;
      const minY = bounds.top;
      const maxX = bounds.right - window.width;
      const maxY = bounds.bottom - minVisibleHeight;

      newX = Math.max(minX, Math.min(maxX, newX));
      newY = Math.max(minY, Math.min(maxY, newY));

      setWindowPosition(window.id, newX, newY);
    },
    [
      isDragging,
      window.isMaximized,
      window.id,
      window.width,
      bounds,
      setWindowPosition,
    ]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handlePointerCancel = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerup", handlePointerUp);
      document.addEventListener("pointercancel", handlePointerCancel);
      return () => {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerup", handlePointerUp);
        document.removeEventListener("pointercancel", handlePointerCancel);
      };
    }
  }, [isDragging, handlePointerMove, handlePointerUp, handlePointerCancel]);

  // Reset drag state when window is maximized so header controls stay usable
  useEffect(() => {
    if (window.isMaximized) {
      setIsDragging(false);
    }
  }, [window.isMaximized]);

  // Minimize animation
  const handleMinimize = useCallback(() => {
    if (!windowRef.current) return;

    setIsAnimating(true);
    const windowRect = windowRef.current.getBoundingClientRect();
    const footerIcon = document.querySelector(
      `[data-window-icon-id="${window.id}"]`
    );

    if (!footerIcon) {
      minimizeWindow(window.id);
      setIsAnimating(false);
      return;
    }

    const iconRect = footerIcon.getBoundingClientRect();
    // Calculate transform relative to viewport (both rects are getBoundingClientRect)
    const targetX =
      iconRect.left +
      iconRect.width / 2 -
      (windowRect.left + windowRect.width / 2);
    const targetY =
      iconRect.top +
      iconRect.height / 2 -
      (windowRect.top + windowRect.height / 2);
    const scale = 0.1;

    if (prefersReducedMotion) {
      // Simple fade for reduced motion
      windowRef.current.style.transition = "opacity 150ms";
      windowRef.current.style.opacity = "0";
      setTimeout(() => {
        minimizeWindow(window.id);
        setIsAnimating(false);
        if (windowRef.current) {
          windowRef.current.style.transition = "";
          windowRef.current.style.opacity = "";
        }
      }, 150);
    } else {
      // Full animation: translate + scale + opacity
      windowRef.current.style.transition =
        "transform 300ms ease-in, opacity 300ms ease-in";
      windowRef.current.style.transform = `translate(${targetX}px, ${targetY}px) scale(${scale})`;
      windowRef.current.style.opacity = "0";

      setTimeout(() => {
        minimizeWindow(window.id);
        setIsAnimating(false);
        if (windowRef.current) {
          windowRef.current.style.transition = "";
          windowRef.current.style.transform = "";
          windowRef.current.style.opacity = "";
        }
      }, 300);
    }
  }, [window.id, minimizeWindow, prefersReducedMotion]);

  const handleMaximize = useCallback(() => {
    toggleMaximizeWindow(window.id);
  }, [window.id, toggleMaximizeWindow]);

  const handleClose = useCallback(() => {
    closeWindow(window.id);
  }, [window.id, closeWindow]);

  const handleClick = useCallback(() => {
    focusWindow(window.id);
  }, [window.id, focusWindow]);

  const handleDoubleClick = useCallback(
    (e) => {
      // Prevent double-click from triggering if clicking on buttons
      if (e.target.closest("button")) return;
      // Prevent double-click if window was just dragged
      if (hasDraggedRef.current) return;
      // Toggle maximize/restore on double-click
      handleMaximize();
    },
    [handleMaximize]
  );

  // Check if this window has the highest zIndex (is focused)
  const isFocused = useMemo(() => {
    const allWindows = Array.from(windows.values()).filter(
      (w) => w.isOpen && !w.isMinimized
    );
    if (allWindows.length === 0) return true;
    const maxZIndex = Math.max(...allWindows.map((w) => w.zIndex));
    return window.zIndex >= maxZIndex;
  }, [windows, window.zIndex]);

  // Height: content-driven when not maximized, with max so window never overlaps footer
  const maxHeight =
    bounds.bottom > 0 ? Math.max(0, bounds.bottom - window.y) : undefined;
  const heightStyle = window.isMaximized
    ? { height: `${window.height}px` }
    : { height: "auto", maxHeight: maxHeight };

  return (
    <article
      ref={windowRef}
      data-window-id={window.id}
      data-z-index={window.zIndex}
      className={`fixed bg-window text-text border border-darkgrey overflow-hidden flex flex-col ${
        isAnimating ? "" : "transition-shadow"
      } ${
        isFocused
          ? "shadow-[4px_4px_16px_rgba(0,0,0,0.25)]"
          : "shadow-[4px_4px_12px_rgba(0,0,0,0.18)]"
      }`}
      style={{
        borderRadius: 0, // Square corners, no border radius
        left: `${window.x}px`,
        top: `${window.y}px`,
        width: `${window.width}px`,
        ...heightStyle,
        zIndex: Math.max(window.zIndex, 100), // Always above rail (z-10) and widgets
        cursor: isDragging ? "grabbing" : "default",
      }}
      role="dialog"
      aria-label={window.title}
      onClick={handleClick}
    >
      {/* Title bar: primary bg, Pixelify Sans, square corners - fixed height. relative z-10 so it stays above content and controls stay clickable when maximized. */}
      <header
        ref={headerRef}
        onPointerDown={handlePointerDown}
        onDoubleClick={handleDoubleClick}
        className={`relative z-10 flex items-center justify-between gap-[var(--space-12)] px-[var(--space-16)] py-[var(--space-8)] bg-primary text-white font-pixel pixel-md cursor-grab active:cursor-grabbing select-none shrink-0 ${
          isDragging ? "cursor-grabbing" : ""
        }`}
        data-window-drag-handle
      >
        <h2 className="truncate pixel-md text-white">{window.title}</h2>
        <div className="flex items-center shrink-0 gap-0">
          <button
            type="button"
            onClick={handleMinimize}
            onPointerDown={(e) => e.stopPropagation()}
            className="flex items-center justify-center w-8 h-8 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset transition-opacity"
            aria-label="Minimize"
          >
            <MinimizeIcon className="w-8 h-8" aria-hidden />
          </button>
          <button
            type="button"
            onClick={handleMaximize}
            onPointerDown={(e) => e.stopPropagation()}
            className="flex items-center justify-center w-8 h-8 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset transition-opacity"
            aria-label={window.isMaximized ? "Restore" : "Maximize"}
          >
            <MaximizeIcon className="w-8 h-8" aria-hidden />
          </button>
          <button
            type="button"
            onClick={handleClose}
            onPointerDown={(e) => e.stopPropagation()}
            className="flex items-center justify-center w-8 h-8 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset transition-opacity"
            aria-label="Close"
          >
            <CloseIcon className="w-8 h-8" aria-hidden />
          </button>
        </div>
      </header>
      {/* Window body: scrollable, below header in stacking so header controls stay clickable when maximized */}
      <div
        className="relative z-0 flex-1 min-h-0 overflow-y-auto overflow-x-hidden"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {content}
      </div>
    </article>
  );
}
