import { useEffect, useRef, useState } from "react";
import { useWindowManager } from "../../../contexts/WindowManagerContext";
import Window from "../Window/Window";

/**
 * DesktopWindowHost renders windows within the desktop body area.
 * Handles bounds clamping and maximized window sizing.
 * Windows can drag anywhere on the desktop body except into the footer.
 */
export default function DesktopWindowHost({
  children,
  windowContents = {},
  desktopBodyRef,
}) {
  const [bounds, setBounds] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });
  const { windows, setWindowSize, setWindowPosition } = useWindowManager();

  useEffect(() => {
    const updateBounds = () => {
      if (desktopBodyRef?.current) {
        const rect = desktopBodyRef.current.getBoundingClientRect();
        setBounds({
          top: rect.top,
          left: rect.left,
          right: rect.right,
          bottom: rect.bottom,
        });
      }
    };

    updateBounds();
    requestAnimationFrame(updateBounds);

    const resizeObserver = new ResizeObserver(updateBounds);
    if (desktopBodyRef?.current) {
      resizeObserver.observe(desktopBodyRef.current);
    }
    globalThis.window.addEventListener("resize", updateBounds);
    return () => {
      resizeObserver.disconnect();
      globalThis.window.removeEventListener("resize", updateBounds);
    };
  }, [desktopBodyRef]);

  // Update maximized window sizes when bounds change (desktop body rect; footer not overlapped)
  useEffect(() => {
    const maximizedWindows = Array.from(windows.values()).filter(
      (w) => w.isMaximized && w.isOpen && !w.isMinimized
    );
    if (
      maximizedWindows.length === 0 ||
      bounds.right === 0 ||
      bounds.bottom === 0
    )
      return;

    // DesktopBody bounds are viewport coordinates (from getBoundingClientRect)
    // Windows use fixed positioning (also viewport coordinates)
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;

    maximizedWindows.forEach((window) => {
      // Maximize: fill DesktopBody exactly (x=bounds.left, y=bounds.top, width/height from bounds)
      setWindowSize(window.id, width, height);
      setWindowPosition(window.id, bounds.left, bounds.top);
    });
  }, [bounds, windows, setWindowSize, setWindowPosition]);

  const openWindows = Array.from(windows.values())
    .filter((w) => w.isOpen && !w.isMinimized)
    .sort((a, b) => a.zIndex - b.zIndex);

  return (
    <>
      {children}
      {/* Windows are positioned absolutely relative to desktop body, not this container */}
      {openWindows.map((window) => {
        const ContentComponent = windowContents[window.id];
        if (!ContentComponent) {
          console.warn(`No content component found for window: ${window.id}`);
          return null;
        }
        return (
          <Window
            key={window.id}
            window={window}
            bounds={bounds}
            content={<ContentComponent />}
          />
        );
      })}
    </>
  );
}
