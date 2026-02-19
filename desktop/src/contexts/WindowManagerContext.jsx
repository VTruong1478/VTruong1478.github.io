import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { windowDefinitions } from "../config/windowDefinitions";
import { soundManager } from "../utils/soundEffects";

const MOBILE_BREAKPOINT = 768;

const WindowManagerContext = createContext(null);

/**
 * Compute window spawn position/size from grid (tablet/small/large desktop).
 * All windows are 8 columns wide, staggered by starting column.
 * @param {DOMRect} desktopBodyRect - getBoundingClientRect() of DesktopBody
 * @param {number} railTop - rail element getBoundingClientRect().top (viewport Y)
 * @param {number} startCol - starting column (0-indexed, so column 1 = 0, column 2 = 1, etc.)
 * @param {number} staggerY - vertical offset in pixels for staggering
 * @param {{ margin: number, gutter: number, cols: number, paddingTop: number, paddingBottom: number, defaultHeight: number }} options
 * @returns {{ x: number, y: number, width: number, height: number }}
 */
export function computeWindowSpawn(
  desktopBodyRect,
  railTop,
  startCol,
  staggerY = 0,
  options = {}
) {
  const margin = options.margin ?? 32;
  const gutter = options.gutter ?? 20;
  const cols = options.cols ?? 12;
  const paddingTop = options.paddingTop ?? 40;
  const paddingBottom = options.paddingBottom ?? 80;
  const defaultHeight = options.defaultHeight ?? 520;

  const usable = desktopBodyRect.width - 2 * margin;
  const colW = (usable - gutter * (cols - 1)) / cols;
  const x = desktopBodyRect.left + margin + (colW + gutter) * startCol;
  const y = railTop + staggerY;
  const width = colW * 8 + gutter * 7;
  const boundsBottom = desktopBodyRect.bottom - paddingBottom;
  const height = Math.min(defaultHeight, Math.max(200, boundsBottom - y));

  return { x, y, width, height };
}

/**
 * Compute About window spawn position/size from grid (tablet/small/large desktop).
 * x = left edge at start of column 2; y = top of rail; width = 8 cols; height clamped to padded bounds.
 * @param {DOMRect} desktopBodyRect - getBoundingClientRect() of DesktopBody
 * @param {number} railTop - rail element getBoundingClientRect().top (viewport Y)
 * @param {{ margin: number, gutter: number, cols: number, paddingTop: number, paddingBottom: number, defaultHeight: number }} options
 * @returns {{ x: number, y: number, width: number, height: number }}
 */
export function computeAboutSpawn(desktopBodyRect, railTop, options = {}) {
  return computeWindowSpawn(desktopBodyRect, railTop, 1, 0, options);
}

/**
 * Compute Portfolio window spawn position/size from grid.
 * Starts at column 3, spans 8 columns, staggered vertically.
 */
export function computePortfolioSpawn(desktopBodyRect, railTop, options = {}) {
  const staggerY = options.staggerY ?? 40;
  return computeWindowSpawn(desktopBodyRect, railTop, 2, staggerY, options);
}

/**
 * Compute Blog window spawn position/size from grid.
 * Starts at column 4, spans 8 columns, staggered vertically.
 */
export function computeBlogSpawn(desktopBodyRect, railTop, options = {}) {
  const staggerY = options.staggerY ?? 80;
  return computeWindowSpawn(desktopBodyRect, railTop, 3, staggerY, options);
}

/**
 * Compute Contact window spawn position/size from grid.
 * Starts at column 5, spans 8 columns, staggered vertically.
 */
export function computeContactSpawn(desktopBodyRect, railTop, options = {}) {
  const staggerY = options.staggerY ?? 120;
  return computeWindowSpawn(desktopBodyRect, railTop, 4, staggerY, options);
}

/**
 * Window state shape:
 * {
 *   id: string,
 *   title: string,
 *   icon: string (SVG raw),
 *   isOpen: boolean,
 *   isMinimized: boolean,
 *   isMaximized: boolean,
 *   zIndex: number,
 *   x: number,
 *   y: number,
 *   width: number,
 *   height: number,
 *   prevX?: number, // for restore after maximize
 *   prevY?: number,
 *   prevWidth?: number,
 *   prevHeight?: number,
 *   data?: any, // custom data for window content (e.g., article ID)
 * }
 */

export function WindowManagerProvider({ children }) {
  const [windows, setWindows] = useState(new Map());
  const nextZIndexRef = useRef(100); // Start above rail/widgets (z-10 = 10)

  // Track mobile viewport state
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Preload all sound effects on mount
  useEffect(() => {
    soundManager.preload();
  }, []);

  const getNextZIndex = useCallback(() => {
    return nextZIndexRef.current++;
  }, []);

  const openWindow = useCallback(
    (id, config = {}) => {
      // Play open sound
      soundManager.playOpen();
      
      setWindows((prev) => {
        const next = new Map(prev);
        const def = windowDefinitions[id];

        // Mobile: minimize all other open windows (single window mode)
        if (isMobile) {
          for (const [windowId, windowState] of next) {
            if (
              windowId !== id &&
              windowState.isOpen &&
              !windowState.isMinimized
            ) {
              next.set(windowId, { ...windowState, isMinimized: true });
            }
          }
        }

        let defaultsFromDef = {};
        if (def) {
          // If config already has x/y/width/height (e.g., from DesktopLayout), use it
          if (config.x !== undefined || config.y !== undefined) {
            defaultsFromDef = {
              title: def.title,
              icon: def.icon,
              x: config.x ?? def.x,
              y: config.y ?? def.y,
              width: config.width ?? def.width,
              height: config.height ?? def.height,
            };
          } else if (id === "portfolio" || id === "blog" || id === "contact") {
            // Always compute grid-based spawn positions for consistent placement
            const desktopBody = document.querySelector("[data-desktop-body]");
            const rail = document.querySelector("[data-desktop-rail]");

            if (desktopBody && rail) {
              const bodyRect = desktopBody.getBoundingClientRect();
              const railTop = rail.getBoundingClientRect().top;
              const isTabletUp =
                typeof window !== "undefined" && window.innerWidth >= 768;

              if (isTabletUp) {
                const options = {
                  margin: 32,
                  gutter: 20,
                  cols: 12,
                  paddingTop: 0,
                  paddingBottom: 0,
                  defaultHeight: 520,
                };

                let spawn;
                if (id === "portfolio") {
                  spawn = computePortfolioSpawn(bodyRect, railTop, options);
                } else if (id === "blog") {
                  spawn = computeBlogSpawn(bodyRect, railTop, options);
                } else if (id === "contact") {
                  spawn = computeContactSpawn(bodyRect, railTop, options);
                }

                if (spawn) {
                  defaultsFromDef = {
                    title: def.title,
                    icon: def.icon,
                    ...spawn,
                  };
                } else {
                  defaultsFromDef = {
                    title: def.title,
                    icon: def.icon,
                    x: def.x,
                    y: def.y,
                    width: def.width,
                    height: def.height,
                  };
                }
              } else {
                // Mobile: use windowDefinitions defaults
                defaultsFromDef = {
                  title: def.title,
                  icon: def.icon,
                  x: def.x,
                  y: def.y,
                  width: def.width,
                  height: def.height,
                };
              }
            } else {
              // Fallback to windowDefinitions defaults if DOM not ready
              defaultsFromDef = {
                title: def.title,
                icon: def.icon,
                x: def.x,
                y: def.y,
                width: def.width,
                height: def.height,
              };
            }
          } else if (id === "about") {
            // About window: compute grid-based spawn position
            const desktopBody = document.querySelector("[data-desktop-body]");
            const rail = document.querySelector("[data-desktop-rail]");

            if (desktopBody && rail) {
              const bodyRect = desktopBody.getBoundingClientRect();
              const railTop = rail.getBoundingClientRect().top;
              const isTabletUp =
                typeof window !== "undefined" && window.innerWidth >= 768;

              if (isTabletUp) {
                const options = {
                  margin: 32,
                  gutter: 20,
                  cols: 12,
                  paddingTop: 0,
                  paddingBottom: 0,
                  defaultHeight: 520,
                };
                const spawn = computeAboutSpawn(bodyRect, railTop, options);
                defaultsFromDef = {
                  title: def.title,
                  icon: def.icon,
                  ...spawn,
                };
              } else {
                // Mobile: use windowDefinitions defaults
                defaultsFromDef = {
                  title: def.title,
                  icon: def.icon,
                  x: def.x,
                  y: def.y,
                  width: def.width,
                  height: def.height,
                };
              }
            } else {
              // Fallback to windowDefinitions defaults if DOM not ready
              defaultsFromDef = {
                title: def.title,
                icon: def.icon,
                x: def.x,
                y: def.y,
                width: def.width,
                height: def.height,
              };
            }
          } else {
            // Use windowDefinitions defaults (for other windows)
            defaultsFromDef = {
              title: def.title,
              icon: def.icon,
              x: def.x,
              y: def.y,
              width: def.width,
              height: def.height,
            };
          }
        }

        const merged = { ...defaultsFromDef, ...config };
        if (next.has(id)) {
          // Window exists, restore and focus it
          const existing = next.get(id);
          // For all windows, use recomputed position if available
          if (merged.x !== undefined && merged.y !== undefined) {
            next.set(id, {
              ...existing,
              isOpen: true,
              isMinimized: false,
              zIndex: getNextZIndex(),
              x: merged.x,
              y: merged.y,
              width: merged.width ?? existing.width,
              height: merged.height ?? existing.height,
              // Update data if provided in config
              ...(config.data !== undefined && { data: config.data }),
            });
          } else {
            next.set(id, {
              ...existing,
              isOpen: true,
              isMinimized: false,
              zIndex: getNextZIndex(),
              // Update data if provided in config
              ...(config.data !== undefined && { data: config.data }),
            });
          }
        } else {
          // Create new window: use computed position/size (or merged config)
          next.set(id, {
            id,
            title: merged.title ?? id,
            icon: merged.icon ?? "",
            isOpen: true,
            isMinimized: false,
            isMaximized: false,
            zIndex: getNextZIndex(),
            x: merged.x ?? 100,
            y: merged.y ?? 100,
            width: merged.width ?? 640,
            height: merged.height ?? 500,
            ...(merged.data !== undefined && { data: merged.data }),
          });
        }
        return next;
      });
    },
    [getNextZIndex, isMobile]
  );

  const closeWindow = useCallback((id) => {
    // Play close sound
    soundManager.playClose();
    
    setWindows((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const focusWindow = useCallback(
    (id, playSound = false) => {
      // Only play focus sound if explicitly requested (to avoid sound on every window interaction)
      if (playSound) {
        soundManager.playFocus();
      }
      
      setWindows((prev) => {
        const next = new Map(prev);
        if (next.has(id)) {
          const window = next.get(id);
          next.set(id, {
            ...window,
            zIndex: getNextZIndex(),
          });
        }
        return next;
      });
    },
    [getNextZIndex]
  );

  const minimizeWindow = useCallback((id) => {
    // Play minimize sound
    soundManager.playMinimize();
    
    setWindows((prev) => {
      const next = new Map(prev);
      if (next.has(id)) {
        const window = next.get(id);
        next.set(id, {
          ...window,
          isMinimized: true,
        });
      }
      return next;
    });
  }, []);

  const restoreWindow = useCallback(
    (id) => {
      // Play focus sound when restoring a window
      soundManager.playFocus();
      
      setWindows((prev) => {
        const next = new Map(prev);

        // Mobile: minimize all other open windows (single window mode)
        if (isMobile) {
          for (const [windowId, windowState] of next) {
            if (
              windowId !== id &&
              windowState.isOpen &&
              !windowState.isMinimized
            ) {
              next.set(windowId, { ...windowState, isMinimized: true });
            }
          }
        }

        if (next.has(id)) {
          const window = next.get(id);
          next.set(id, {
            ...window,
            isMinimized: false,
            isOpen: true,
            zIndex: getNextZIndex(),
          });
        }
        return next;
      });
    },
    [getNextZIndex, isMobile]
  );

  const toggleMaximizeWindow = useCallback((id) => {
    // Play maximize sound
    soundManager.playMaximize();
    
    setWindows((prev) => {
      const next = new Map(prev);
      if (next.has(id)) {
        const window = next.get(id);
        if (window.isMaximized) {
          // Restore
          next.set(id, {
            ...window,
            isMaximized: false,
            x: window.prevX ?? window.x,
            y: window.prevY ?? window.y,
            width: window.prevWidth ?? window.width,
            height: window.prevHeight ?? window.height,
            prevX: undefined,
            prevY: undefined,
            prevWidth: undefined,
            prevHeight: undefined,
          });
        } else {
          // Maximize (will be handled by DesktopWindowHost with actual bounds)
          next.set(id, {
            ...window,
            isMaximized: true,
            prevX: window.x,
            prevY: window.y,
            prevWidth: window.width,
            prevHeight: window.height,
          });
        }
      }
      return next;
    });
  }, []);

  const setWindowPosition = useCallback((id, x, y) => {
    setWindows((prev) => {
      if (!prev.has(id)) return prev;
      const window = prev.get(id);
      if (window.x === x && window.y === y) return prev;
      const next = new Map(prev);
      next.set(id, { ...window, x, y });
      return next;
    });
  }, []);

  const setWindowSize = useCallback((id, width, height) => {
    setWindows((prev) => {
      if (!prev.has(id)) return prev;
      const window = prev.get(id);
      if (window.width === width && window.height === height) return prev;
      const next = new Map(prev);
      next.set(id, { ...window, width, height });
      return next;
    });
  }, []);

  const value = {
    windows,
    isMobile,
    openWindow,
    closeWindow,
    focusWindow,
    minimizeWindow,
    restoreWindow,
    toggleMaximizeWindow,
    setWindowPosition,
    setWindowSize,
  };

  return (
    <WindowManagerContext.Provider value={value}>
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error(
      "useWindowManager must be used within WindowManagerProvider"
    );
  }
  return context;
}
