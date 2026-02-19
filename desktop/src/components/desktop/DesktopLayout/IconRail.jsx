/**
 * Left vertical icon rail: About, Portfolio, Blog, Contact.
 * Clicking an icon opens that window (or focuses if already open).
 * Uses desktop SVGs. Pixelify Sans labels. focus-visible only.
 */
import { useWindowManager } from "../../../contexts/WindowManagerContext";
import InlineSvgIcon from "../../icons/InlineSvgIcon";
import aboutSvg from "../../../assets/desktop/about.svg?raw";
import blogSvg from "../../../assets/desktop/blog.svg?raw";
import contactSvg from "../../../assets/desktop/contact.svg?raw";
import portfolioSvg from "../../../assets/desktop/portfolio.svg?raw";

const navItems = [
  { id: "about", label: "About", svg: aboutSvg },
  { id: "portfolio", label: "Portfolio", svg: portfolioSvg },
  { id: "blog", label: "Blog", svg: blogSvg },
  { id: "contact", label: "Contact", svg: contactSvg },
];

export default function IconRail() {
  const { windows, openWindow, focusWindow } = useWindowManager();

  const handleClick = (e, id) => {
    e.preventDefault();
    const win = windows.get(id);
    if (win && win.isOpen && !win.isMinimized) {
      // Check if there are multiple open windows to play focus sound
      const openWindows = Array.from(windows.values()).filter(
        (w) => w.isOpen && !w.isMinimized,
      );
      const shouldPlaySound = openWindows.length > 1;
      focusWindow(id, shouldPlaySound);
    } else {
      openWindow(id); // uses windowDefinitions staggered position/size
    }
  };

  return (
    <nav
      className="flex flex-col gap-[var(--space-16)] p-[var(--space-16)] bg-bg border-grey98 shrink-0 w-[var(--space-80)] lg:w-[var(--space-80)]"
      aria-label="Desktop navigation"
    >
      {navItems.map(({ id, label, svg }) => {
        const window = windows.get(id);
        const isOpen = window?.isOpen && !window?.isMinimized;
        return (
          <button
            key={id}
            type="button"
            onClick={(e) => handleClick(e, id)}
            className={`flex flex-col items-center gap-[var(--space-8)] font-pixel text-text hover:text-primary focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors pixel-sm ${
              isOpen ? "text-primary" : ""
            }`}
            aria-label={label}
            aria-pressed={isOpen}
          >
            <InlineSvgIcon rawSvg={svg} className="w-8 h-8" aria-hidden />
            <span>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
