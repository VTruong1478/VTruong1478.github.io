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
    setWindowSize,
  } = useWindowManager();

  const windowRef = useRef(null);
  const headerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cursorStyle, setCursorStyle] = useState("default");
  const [hasBeenResized, setHasBeenResized] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, windowX: 0, windowY: 0 });
  const resizeStartRef = useRef({
    x: 0,
    y: 0,
    windowX: 0,
    windowY: 0,
    windowWidth: 0,
    windowHeight: 0,
  });
  const hasDraggedRef = useRef(false);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = globalThis.window.matchMedia(
      "(prefers-reduced-motion: reduce)",
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
    [window.x, window.y, window.id, window.isMaximized, focusWindow],
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
    ],
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

  // Detect resize edge/corner on mouse move
  const getResizeDirection = useCallback(
    (e) => {
      if (window.isMaximized || !windowRef.current) return null;

      const rect = windowRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const edgeSize = 8; // pixels from edge to detect resize

      const onLeft = x < edgeSize;
      const onRight = x > rect.width - edgeSize;
      const onTop = y < edgeSize;
      const onBottom = y > rect.height - edgeSize;

      // Corners take priority
      if (onTop && onLeft) return "nw";
      if (onTop && onRight) return "ne";
      if (onBottom && onLeft) return "sw";
      if (onBottom && onRight) return "se";

      // Edges
      if (onTop) return "n";
      if (onBottom) return "s";
      if (onLeft) return "w";
      if (onRight) return "e";

      return null;
    },
    [window.isMaximized],
  );

  // Update cursor based on hover position
  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging || isResizing) return;

      const direction = getResizeDirection(e);

      if (direction) {
        const cursorMap = {
          n: "ns-resize",
          s: "ns-resize",
          e: "ew-resize",
          w: "ew-resize",
          ne: "nesw-resize",
          sw: "nesw-resize",
          nw: "nwse-resize",
          se: "nwse-resize",
        };
        setCursorStyle(cursorMap[direction] || "default");
      } else {
        setCursorStyle("default");
      }
    },
    [isDragging, isResizing, getResizeDirection],
  );

  // Handle resizing
  const handleResizeStart = useCallback(
    (e, direction) => {
      if (window.isMaximized || !windowRef.current) return;

      // Get the actual rendered dimensions
      const rect = windowRef.current.getBoundingClientRect();

      setIsResizing(true);
      setResizeDirection(direction);
      focusWindow(window.id);

      resizeStartRef.current = {
        x: e.clientX,
        y: e.clientY,
        windowX: window.x,
        windowY: window.y,
        windowWidth: rect.width,
        windowHeight: rect.height,
      };

      // If window was using auto height, set it to the current rendered height
      if (!hasBeenResized && !window.isMaximized) {
        setWindowSize(window.id, rect.width, rect.height);
      }

      e.preventDefault();
      e.stopPropagation();
    },
    [
      window.x,
      window.y,
      window.id,
      window.isMaximized,
      hasBeenResized,
      focusWindow,
      setWindowSize,
    ],
  );

  const handleResizeMove = useCallback(
    (e) => {
      if (!isResizing || !resizeDirection || window.isMaximized) return;

      const dx = e.clientX - resizeStartRef.current.x;
      const dy = e.clientY - resizeStartRef.current.y;

      const MIN_WIDTH = 400;
      const MIN_HEIGHT = 300;

      let newX = resizeStartRef.current.windowX;
      let newY = resizeStartRef.current.windowY;
      let newWidth = resizeStartRef.current.windowWidth;
      let newHeight = resizeStartRef.current.windowHeight;

      // Handle horizontal resizing
      if (resizeDirection.includes("e")) {
        newWidth = resizeStartRef.current.windowWidth + dx;
      } else if (resizeDirection.includes("w")) {
        newWidth = resizeStartRef.current.windowWidth - dx;
        newX = resizeStartRef.current.windowX + dx;
      }

      // Handle vertical resizing
      if (resizeDirection.includes("s")) {
        newHeight = resizeStartRef.current.windowHeight + dy;
      } else if (resizeDirection.includes("n")) {
        newHeight = resizeStartRef.current.windowHeight - dy;
        newY = resizeStartRef.current.windowY + dy;
      }

      // Apply minimum size constraints
      if (newWidth < MIN_WIDTH) {
        if (resizeDirection.includes("w")) {
          newX =
            resizeStartRef.current.windowX +
            resizeStartRef.current.windowWidth -
            MIN_WIDTH;
        }
        newWidth = MIN_WIDTH;
      }

      if (newHeight < MIN_HEIGHT) {
        if (resizeDirection.includes("n")) {
          newY =
            resizeStartRef.current.windowY +
            resizeStartRef.current.windowHeight -
            MIN_HEIGHT;
        }
        newHeight = MIN_HEIGHT;
      }

      // Clamp to bounds
      if (newX < bounds.left) {
        newWidth = newWidth - (bounds.left - newX);
        newX = bounds.left;
      }
      if (newY < bounds.top) {
        newHeight = newHeight - (bounds.top - newY);
        newY = bounds.top;
      }

      const maxWidth = bounds.right - newX;
      const maxHeight = bounds.bottom - newY;
      newWidth = Math.min(newWidth, maxWidth);
      newHeight = Math.min(newHeight, maxHeight);

      // Update window position and size
      if (newX !== window.x || newY !== window.y) {
        setWindowPosition(window.id, newX, newY);
      }
      if (newWidth !== window.width || newHeight !== window.height) {
        setWindowSize(window.id, newWidth, newHeight);
      }
    },
    [
      isResizing,
      resizeDirection,
      window.isMaximized,
      window.id,
      window.x,
      window.y,
      window.width,
      window.height,
      bounds,
      setWindowPosition,
      setWindowSize,
    ],
  );

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);
    setResizeDirection(null);
    setHasBeenResized(true);
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("pointermove", handleResizeMove);
      document.addEventListener("pointerup", handleResizeEnd);
      document.addEventListener("pointercancel", handleResizeEnd);
      return () => {
        document.removeEventListener("pointermove", handleResizeMove);
        document.removeEventListener("pointerup", handleResizeEnd);
        document.removeEventListener("pointercancel", handleResizeEnd);
      };
    }
  }, [isResizing, handleResizeMove, handleResizeEnd]);

  // Handle pointer down on window edges
  const handleWindowPointerDown = useCallback(
    (e) => {
      // Don't interfere with header drag or buttons
      if (
        e.target.closest("[data-window-drag-handle]") ||
        e.target.closest("button")
      ) {
        return;
      }

      const direction = getResizeDirection(e);
      if (direction) {
        handleResizeStart(e, direction);
      }
    },
    [getResizeDirection, handleResizeStart],
  );

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
      `[data-window-icon-id="${window.id}"]`,
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
    // Check if there are multiple open windows
    const openWindows = Array.from(windows.values()).filter(
      (w) => w.isOpen && !w.isMinimized,
    );
    const hasMultipleWindows = openWindows.length > 1;

    // Play focus sound only if there are multiple windows and this window is not already focused
    const isFocused =
      window.zIndex >= Math.max(...openWindows.map((w) => w.zIndex));
    const shouldPlaySound = hasMultipleWindows && !isFocused;

    focusWindow(window.id, shouldPlaySound);
  }, [window.id, windows, window.zIndex, focusWindow]);

  const handleDoubleClick = useCallback(
    (e) => {
      // Prevent double-click from triggering if clicking on buttons
      if (e.target.closest("button")) return;
      // Prevent double-click if window was just dragged
      if (hasDraggedRef.current) return;
      // Toggle maximize/restore on double-click
      handleMaximize();
    },
    [handleMaximize],
  );

  // Check if this window has the highest zIndex (is focused)
  const isFocused = useMemo(() => {
    const allWindows = Array.from(windows.values()).filter(
      (w) => w.isOpen && !w.isMinimized,
    );
    if (allWindows.length === 0) return true;
    const maxZIndex = Math.max(...allWindows.map((w) => w.zIndex));
    return window.zIndex >= maxZIndex;
  }, [windows, window.zIndex]);

  // Height: use fixed height when resizing, has been resized, or maximized; otherwise content-driven with max
  const maxHeight =
    bounds.bottom > 0 ? Math.max(0, bounds.bottom - window.y) : undefined;
  const heightStyle =
    window.isMaximized || isResizing || hasBeenResized
      ? { height: `${window.height}px` }
      : { height: "auto", maxHeight: maxHeight };

  return (
    <article
      ref={windowRef}
      data-window-id={window.id}
      data-z-index={window.zIndex}
      className={`fixed bg-window text-text overflow-hidden flex flex-col ${
        isAnimating ? "" : "transition-shadow"
      }`}
      style={{
        borderRadius: 0, // Square corners, no border radius
        border: isFocused
          ? "1px solid var(--dark-grey)"
          : "1px solid var(--98-grey)",
        boxShadow: isFocused
          ? "var(--shadow-window-focused)"
          : "var(--shadow-window)",
        left: `${window.x}px`,
        top: `${window.y}px`,
        width: `${window.width}px`,
        ...heightStyle,
        zIndex: Math.max(window.zIndex, 100), // Always above rail (z-10) and widgets
        cursor: isDragging ? "grabbing" : cursorStyle,
      }}
      role="dialog"
      aria-label={window.title}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onPointerDown={handleWindowPointerDown}
    >
      {/* Title bar: active uses primary bg, inactive uses dark-grey bg. Pixelify Sans, square corners - fixed height. relative z-10 so it stays above content and controls stay clickable when maximized. */}
      <header
        ref={headerRef}
        onPointerDown={handlePointerDown}
        onDoubleClick={handleDoubleClick}
        className={`relative z-10 flex items-center justify-between gap-[var(--space-12)] px-[var(--space-16)] py-[var(--space-8)] ${
          isFocused ? "bg-primary" : "bg-darkgrey"
        } text-white font-pixel pixel-md cursor-grab active:cursor-grabbing select-none shrink-0 ${
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
            className="flex items-center justify-center w-8 h-8 hover:opacity-90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-tertiary transition-opacity"
            aria-label="Minimize"
          >
            <MinimizeIcon className="w-8 h-8" aria-hidden />
          </button>
          <button
            type="button"
            onClick={handleMaximize}
            onPointerDown={(e) => e.stopPropagation()}
            className="flex items-center justify-center w-8 h-8 hover:opacity-90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-tertiary transition-opacity"
            aria-label={window.isMaximized ? "Restore" : "Maximize"}
          >
            <MaximizeIcon className="w-8 h-8" aria-hidden />
          </button>
          <button
            type="button"
            onClick={handleClose}
            onPointerDown={(e) => e.stopPropagation()}
            className="flex items-center justify-center w-8 h-8 hover:opacity-90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-tertiary transition-opacity"
            aria-label="Close"
          >
            <CloseIcon className="w-8 h-8" aria-hidden />
          </button>
        </div>
      </header>
      {/* Window body: scrollable, below header in stacking so header controls stay clickable when maximized */}
      <div
        id="main-content"
        tabIndex={-1}
        className="relative z-0 flex-1 min-h-0 overflow-y-auto overflow-x-hidden focus:outline-none"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {content}
      </div>
      {/* Bottom-right resize handle: invisible but functional for diagonal resizing */}
      {!window.isMaximized && (
        <div
          onPointerDown={(e) => handleResizeStart(e, "se")}
          className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize z-20"
          aria-label="Resize window diagonally"
        />
      )}
    </article>
  );
}
