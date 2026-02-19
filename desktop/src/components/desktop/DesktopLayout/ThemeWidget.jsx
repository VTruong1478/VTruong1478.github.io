/**
 * Theme toggle: matches Figma – Light | pill toggle (sun/moon) | Dark.
 * Panel bg by theme; labels active/inactive; knob blue (primary); track shows inactive icon.
 * Toggles .dark on document root. Accessible: role="switch", keyboard, focus-visible.
 * @param {boolean} showLabels - Force show labels (used on mobile)
 */
import { useState, useEffect } from "react";
import themeLight from "../../../assets/widgets/theme-light.png";
import themeDark from "../../../assets/widgets/theme-dark.png";
import { soundManager } from "../../../utils/soundEffects";

export default function ThemeWidget({ showLabels = false }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const handleToggle = () => {
    soundManager.playTheme();
    setIsDark((prev) => !prev);
  };

  return (
    <div
      className={`flex items-center rounded-m px-[var(--space-16)] py-[var(--space-16)] font-pixel pixel-sm transition-colors focus-within:ring-offset-transparent focus-within:outline-none ${
        showLabels ? "justify-between" : "justify-center lg:justify-between"
      }`}
      style={{
        background: "var(--widget-glass-bg)",
        backdropFilter: "blur(var(--widget-blur))",
        WebkitBackdropFilter: "blur(var(--widget-blur))",
        border: "1px solid var(--widget-glass-border)",
        boxShadow: "var(--shadow-widget-aero)",
      }}
    >
      <span
        aria-hidden="true"
        className={`${
          showLabels ? "block" : "hidden lg:block"
        } shrink-0 transition-colors`}
        style={{
          color: isDark ? "#BBBBBB" : "#333333",
        }}
      >
        Light
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle dark mode"
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            handleToggle();
          }
        }}
        className="relative flex h-12 w-24 shrink-0 rounded-[32px] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        style={{
          backgroundColor: isDark ? "#2a2a2a" : "#e8e8e8",
          border: isDark ? "1px solid #1a1a1a" : "1px solid #d0d0d0",
        }}
      >
        {/* Inactive icon on track - same size and position as selected icon */}
        <span className="absolute inset-0 flex items-center" aria-hidden>
          <span
            className="absolute h-6 w-6 flex items-center justify-center"
            style={{
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              opacity: isDark ? 1 : 0,
            }}
          >
            <img
              src={themeLight}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
              style={{
                filter: "brightness(0)",
                opacity: 0.3,
              }}
            />
          </span>
          <span
            className="absolute h-6 w-6 flex items-center justify-center"
            style={{
              left: "60px",
              top: "50%",
              transform: "translateY(-50%)",
              opacity: isDark ? 0 : 1,
            }}
          >
            <img
              src={themeDark}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
              style={{
                filter: "brightness(0)",
                opacity: 0.3,
              }}
            />
          </span>
        </span>
        {/* Knob: blue circle with active icon */}
        <span
          className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-primary transition-[left] duration-200 ease-out"
          style={{
            left: isDark ? "54px" : "6px",
            top: "50%",
            transform: "translateY(-50%)",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
          aria-hidden
        >
          <img
            src={isDark ? themeDark : themeLight}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </span>
      </button>
      <span
        aria-hidden="true"
        className={`${
          showLabels ? "block" : "hidden lg:block"
        } shrink-0 transition-colors ${
          isDark ? "text-[#EEEEEE]" : "text-darkgrey"
        }`}
      >
        Dark
      </span>
    </div>
  );
}
