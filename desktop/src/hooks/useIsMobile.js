import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Hook to detect mobile viewport (< 768px).
 * Uses window.innerWidth with resize listener.
 * @returns {boolean} true if viewport width < 768px
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
