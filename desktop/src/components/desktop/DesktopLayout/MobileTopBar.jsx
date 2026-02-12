/**
 * Mobile top icon bar: About, Portfolio, Blog, Contact.
 * 4 icons evenly distributed across full width (flex-1 each).
 * Clicking an icon opens that window (auto-minimizes others on mobile).
 * Uses desktop SVGs. Pixelify Sans labels.
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

export default function MobileTopBar() {
  const { windows, openWindow } = useWindowManager();

  const handleClick = (e, id) => {
    e.preventDefault();
    // On mobile, openWindow handles auto-minimizing other windows
    openWindow(id);
  };

  return (
    <nav
      className="sticky top-0 z-40 flex items-stretch bg-bg"
      aria-label="Mobile navigation"
    >
      {navItems.map(({ id, label, svg }) => {
        const window = windows.get(id);
        const isActive = window?.isOpen && !window?.isMinimized;
        return (
          <button
            key={id}
            type="button"
            onClick={(e) => handleClick(e, id)}
            className={`flex-1 flex flex-col items-center justify-center gap-[var(--space-4)] py-[var(--space-8)] font-pixel text-text hover:text-primary focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary transition-colors pixel-sm ${
              isActive ? "text-primary" : ""
            }`}
            aria-label={label}
            aria-pressed={isActive}
          >
            <InlineSvgIcon rawSvg={svg} className="w-8 h-8" aria-hidden />
            <span className="pixel-sm">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
