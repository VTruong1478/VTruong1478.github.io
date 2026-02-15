/**
 * Fixed footer/taskbar at bottom of desktop.
 * Desktop (>=1024): Start | task icons | system tray + clock.
 * Tablet (768-1023): Start | task icons | system tray (no clock).
 * Mobile (<768): Compact footer with Start + profile | chevron + volume, expandable quick links tray.
 * Pixelify Sans, bg-widget, 1px top dark-grey border, text-text. ARIA and focus states.
 */
import { useState, useCallback, useRef, useEffect } from "react";
import StartButton from "./StartButton";
import StartMenu from "./StartMenu";
import TaskArea from "./TaskArea";
import SystemTray from "./SystemTray";
import CompactFooter from "./CompactFooter";

const FOOTER_HEIGHT = 48; // var(--space-48)
const DESKTOP_MIN = 1024;
const TABLET_MIN = 768;

function useViewportSize() {
  const [width, setWidth] = useState(() => {
    if (typeof window === "undefined") return 1024;
    return window.innerWidth;
  });

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const startButtonRef = useRef(null);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const viewportWidth = useViewportSize();

  const isCompact = viewportWidth < TABLET_MIN;
  const isTablet = viewportWidth >= TABLET_MIN && viewportWidth < DESKTOP_MIN;

  // Mobile layout (< 768px)
  if (isCompact) {
    return (
      <>
        {/* Semi-transparent overlay when Start menu is open */}
        {menuOpen && (
          <div
            className="fixed left-0 right-0 top-0 z-[45]"
            style={{
              bottom: `${FOOTER_HEIGHT}px`,
              backgroundColor:
                "color-mix(in srgb, var(--secondary) 28%, transparent)",
            }}
            aria-hidden
            onClick={closeMenu}
          />
        )}
        <CompactFooter onStartClick={toggleMenu} startMenuOpen={menuOpen} startButtonRef={startButtonRef} />
        {menuOpen && (
          <StartMenu onClose={closeMenu} startButtonRef={startButtonRef} />
        )}
      </>
    );
  }

  // Tablet (768-1023px) and Desktop (>=1024px) layout
  return (
    <>
      {/* Semi-transparent overlay on desktop body when Start menu is open */}
      {menuOpen && (
        <div
          className="fixed left-0 right-0 top-0 z-[45]"
          style={{
            bottom: `${FOOTER_HEIGHT}px`,
            backgroundColor:
              "color-mix(in srgb, var(--secondary) 28%, transparent)",
          }}
          aria-hidden
          onClick={closeMenu}
        />
      )}
      <footer
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center bg-grey98 text-text border-t border-darkgrey h-[var(--space-48)]"
        aria-label="Taskbar"
      >
        <StartButton
          ref={startButtonRef}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-pressed={menuOpen}
        />
        <TaskArea />
        <SystemTray isTablet={isTablet} />
      </footer>
      {menuOpen && (
        <StartMenu onClose={closeMenu} startButtonRef={startButtonRef} />
      )}
    </>
  );
}
