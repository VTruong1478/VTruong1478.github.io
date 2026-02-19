/**
 * Grid overlay to validate the responsive column system.
 * Toggle with "g" key. Column widths as semi-transparent red bands; gutters empty.
 * Breakpoints: mobile <768 (8 cols), tablet+ >=768 (12 cols). Margins/gutters per Figma.
 * No new tokens; uses Tailwind arbitrary values for red fill.
 */
import { useState, useEffect } from "react";

export default function GridOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const t = e.target;
      if (
        t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable)
      )
        return;
      if (e.key.toLowerCase() === "g") setVisible((v) => !v);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!visible) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[5]" aria-hidden>
      {/* Tablet and up (md: >=768): 12 cols, margin 32px, gutter 20px */}
      <div className="hidden md:grid md:grid-cols-12 md:gap-[20px] absolute inset-0 md:px-[32px]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="min-h-full bg-[rgba(255,0,0,0.12)]" />
        ))}
      </div>
      {/* Mobile (default <768): 8 cols, margin 24px, gutter 16px */}
      <div className="grid grid-cols-8 gap-[16px] absolute inset-0 px-[24px] md:hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="min-h-full bg-[rgba(255,0,0,0.12)]" />
        ))}
      </div>
    </div>
  );
}
