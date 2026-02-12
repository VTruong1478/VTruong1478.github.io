/**
 * Start menu panel: appears above taskbar when Start is clicked.
 * 3 columns: left tertiary strip (rotated text), middle nav list, right info panel.
 * Styling matches Figma: 360px width, bg-grey98, hover row = bg-tertiary + white text.
 * No new tokens.
 */
import { useRef, useEffect } from "react";
import { useWindowManager } from "../../../contexts/WindowManagerContext";
import InlineSvgIcon from "../../icons/InlineSvgIcon";
import aboutSvg from "../../../assets/desktop/about.svg?raw";
import blogSvg from "../../../assets/desktop/blog.svg?raw";
import contactSvg from "../../../assets/desktop/contact.svg?raw";
import portfolioSvg from "../../../assets/desktop/portfolio.svg?raw";

const SITE_NAME = "vtruong1478.github.io";
const FOOTER_HEIGHT = 48; // var(--space-48)

const navItems = [
  { id: "about", label: "About", svg: aboutSvg },
  { id: "portfolio", label: "Portfolio", svg: portfolioSvg },
  { id: "blog", label: "Blog", svg: blogSvg },
  { id: "contact", label: "Contact", svg: contactSvg },
];

const infoLines = [
  { label: "An Truong", className: "pixel-sm", isTitle: true },
  { label: "OS: v.truong1478", className: "pixel-xxs" },
  { label: "Version: 2.0", className: "pixel-xxs" },
  { label: "Framework: React", className: "pixel-xxs" },
  { label: "Since: 09-24-2025", className: "pixel-xxs" },
];

export default function StartMenu({ onClose, startButtonRef }) {
  const menuRef = useRef(null);
  const { windows, openWindow, focusWindow } = useWindowManager();

  useEffect(() => {
    const handleClickOutside = (e) => {
      const target = e.target;
      if (
        !menuRef.current?.contains(target) &&
        !startButtonRef?.current?.contains(target)
      ) {
        onClose();
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [onClose, startButtonRef]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const win = windows.get(id);
    if (win && win.isOpen && !win.isMinimized) {
      focusWindow(id);
    } else {
      openWindow(id);
    }
    onClose();
  };

  return (
    <div
      ref={menuRef}
      role="menu"
      aria-label="Start menu"
      className="fixed left-0 flex border border-darkgrey border-b-0 bg-grey98 text-text"
      style={{
        bottom: `${FOOTER_HEIGHT}px`,
        zIndex: 51,
      }}
    >
      {/* Column 1: Left strip – blue rectangle on top of gray with margin */}
      <div className="shrink-0 p-[var(--space-8)] flex items-stretch" aria-hidden>
        <div
          className="bg-tertiary text-white flex items-end justify-center"
          style={{
            width: "24px",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          <span
            className="whitespace-nowrap font-pixel pixel-xxs text-center w-full"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            {SITE_NAME}
          </span>
        </div>
      </div>

      {/* Column 2: Nav list – vertically distributed with equal space between items */}
      <div className="flex min-w-0 flex-1 flex-col justify-between py-[var(--space-8)] pl-0 pr-[var(--space-8)]">
        {navItems.map(({ id, label, svg }) => {
          const win = windows.get(id);
          const isOpen = win?.isOpen && !win?.isMinimized;
          return (
            <button
              key={id}
              type="button"
              role="menuitem"
              onClick={(e) => handleNavClick(e, id)}
              className={`group flex w-full items-center gap-[var(--space-8)] px-[var(--space-4)] py-[var(--space-4)] text-left font-pixel pixel-sm text-text transition-colors hover:bg-tertiary hover:text-white focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:underline focus-visible:underline-offset-2 ${
                isOpen ? "text-primary" : ""
              } [&_svg]:shrink-0 [&_svg]:transition-[filter] group-hover:[&_svg]:brightness-0 group-hover:[&_svg]:invert`}
            >
              <InlineSvgIcon rawSvg={svg} className="h-6 w-6" aria-hidden />
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* Column 3: Info panel – compact spacing; border inset 8px from top/bottom */}
      <div className="flex shrink-0 flex-col justify-center border-l border-darkgrey bg-grey98 my-[var(--space-8)] py-[var(--space-8)] px-[var(--space-12)]">
        {infoLines.map(({ label, className, isTitle }) => (
          <span
            key={label}
            className={`font-pixel text-text ${className} ${isTitle ? "text-center block" : ""}`}
            style={{
              marginBottom: isTitle ? "8px" : "2px",
              lineHeight: isTitle ? "1.2" : "1.3",
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
