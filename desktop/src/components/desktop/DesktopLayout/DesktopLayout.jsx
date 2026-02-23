/**
 * Desktop shell: full-screen bg-bg, left rail, main area, right widgets.
 * Responsive: mobile <768, tablet >=768, small desktop >=1024, large desktop >=1440.
 * Uses DesktopWindowHost to render windows managed by WindowManager.
 * Mobile: vertical scroll layout with top icon bar, single window, widgets, fixed footer.
 */
import { useEffect, useRef } from "react";
import { useWindowManager } from "../../../contexts/WindowManagerContext";
import IconRail from "./IconRail";
import WidgetCard from "./WidgetCard";
import DesktopWindowHost from "./DesktopWindowHost";
import GridOverlay from "./GridOverlay";
import ThemeWidget from "./ThemeWidget";
import MobileTopBar from "./MobileTopBar";
import MobileWindowArea from "./MobileWindowArea";
import AboutWindowContent from "../Window/AboutWindow";
import PortfolioWindowContent from "../Window/PortfolioWindow";
import BlogWindowContent from "../Window/BlogWindow";
import ContactWindowContent from "../Window/ContactWindow";
import { windowDefinitions } from "../../../config/windowDefinitions";
import { computeAboutSpawn } from "../../../contexts/WindowManagerContext";
import SkipLink from "../../ui/SkipLink";

const windowContents = {
  about: AboutWindowContent,
  portfolio: PortfolioWindowContent,
  blog: BlogWindowContent,
  contact: ContactWindowContent,
};

const FOOTER_HEIGHT = 48; // var(--space-48)
const TABLET_MIN_WIDTH = 768;

export default function DesktopLayout() {
  const { openWindow, isMobile } = useWindowManager();
  const desktopBodyRef = useRef(null);
  const railRef = useRef(null);
  const hasOpenedInitialRef = useRef(false);

  // Open About window once on initial mount so it's open by default; user can close all windows after that
  useEffect(() => {
    if (hasOpenedInitialRef.current) return;
    const measureAndOpen = () => {
      if (hasOpenedInitialRef.current) return; // already opened by fallback
      const bodyEl = desktopBodyRef.current;
      const railEl = railRef.current;
      const isTabletUp =
        typeof window !== "undefined" && window.innerWidth >= TABLET_MIN_WIDTH;
      if (isTabletUp && bodyEl && railEl) {
        const bodyRect = bodyEl.getBoundingClientRect();
        const railRect = railEl.getBoundingClientRect();
        const spawn = computeAboutSpawn(bodyRect, railRect.top, {
          margin: 32,
          gutter: 20,
          cols: 12,
          paddingTop: 0,
          paddingBottom: 0,
          defaultHeight: 520,
        });
        openWindow("about", { ...windowDefinitions.about, ...spawn });
      } else {
        openWindow("about", windowDefinitions.about);
      }
      hasOpenedInitialRef.current = true;
    };
    const id = requestAnimationFrame(measureAndOpen);
    // If refs weren't ready on first frame, open with defaults after a short delay
    const fallbackId = setTimeout(() => {
      if (hasOpenedInitialRef.current) return;
      openWindow("about", windowDefinitions.about);
      hasOpenedInitialRef.current = true;
    }, 100);
    return () => {
      cancelAnimationFrame(id);
      clearTimeout(fallbackId);
    };
  }, [openWindow]);

  // Mobile layout: vertical scroll with top bar, window area, widgets, fixed footer
  if (isMobile) {
    return (
      <div className="min-h-screen bg-bg text-text flex flex-col">
        <SkipLink />
        {/* Scrollable content area - excludes fixed footer */}
        <div
          className="flex-1 flex flex-col overflow-y-auto"
          style={{ paddingBottom: `${FOOTER_HEIGHT}px` }}
        >
          {/* Top icon bar - sticky */}
          <MobileTopBar />

          {/* Window area - 24px margins, 8-col grid, 8px top spacing */}
          <main
            className="flex-shrink-0 px-[var(--space-24)] pt-[var(--space-8)]"
            role="main"
            aria-label="Content area"
          >
            <MobileWindowArea windowContents={windowContents} />
          </main>

          {/* Widgets section - below window */}
          <div className="flex flex-col gap-[var(--space-16)] px-[var(--space-24)] py-[var(--space-16)]">
            <WidgetCard
              title=""
              aria-label="Theme switcher"
              className="!p-0 !bg-transparent !border-none !shadow-none"
            >
              <ThemeWidget showLabels />
            </WidgetCard>
            <WidgetCard title="Blog Posts">
              <ul className="list-disc list-inside space-y-[var(--space-8)] pixel-xs font-pixel text-left">
                <li>
                  Jan 2026:{" "}
                  <button
                    onClick={() =>
                      openWindow("blog", { data: { articleId: 1 } })
                    }
                    className="text-tertiary underline font-pixel pixel-xs focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary bg-transparent border-none cursor-pointer p-0 align-baseline text-left"
                    style={{ display: "inline" }}
                  >
                    How I Redesigned This Website
                  </button>
                </li>
                <li>
                  Dec 2023:{" "}
                  <button
                    onClick={() =>
                      openWindow("blog", { data: { articleId: 2 } })
                    }
                    className="text-tertiary underline font-pixel pixel-xs focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary bg-transparent border-none cursor-pointer p-0 align-baseline text-left"
                    style={{ display: "inline" }}
                  >
                    Lessons from Starting my Own Business
                  </button>
                </li>
              </ul>
            </WidgetCard>
          </div>
        </div>
      </div>
    );
  }

  // Desktop/tablet layout (>= 768px)
  return (
    <div className="min-h-screen h-screen bg-bg text-text flex flex-col overflow-hidden">
      <SkipLink />
      {/* Desktop body: full viewport minus footer; used for maximize bounds */}
      <div
        ref={desktopBodyRef}
        data-desktop-body
        className="fixed left-0 right-0 top-0 flex flex-col"
        style={{ height: `calc(100vh - ${FOOTER_HEIGHT}px)`, zIndex: 0 }}
      >
        <GridOverlay />
        {/* Content area with padding; flex-1 so body has non-zero height */}
        <div
          className="flex flex-1 min-h-0 pt-[var(--space-24)] md:pt-[var(--space-32)] pb-[var(--space-48)] px-[var(--space-24)] md:px-[var(--space-32)] relative"
          style={{ zIndex: 0 }}
        >
          {/* Left rail: visible from tablet up; ref for spawn Y alignment */}
          <div
            ref={railRef}
            data-desktop-rail
            className="hidden md:flex md:shrink-0 relative z-10"
          >
            <IconRail />
          </div>

          {/* Main content area: DesktopWindowHost renders windows here */}
          <main
            className="flex-1 min-w-0 min-h-0 mx-0 md:mx-[var(--space-24)] lg:mx-[var(--space-24)]"
            role="main"
            aria-label="Desktop content area"
          >
            <DesktopWindowHost
              windowContents={windowContents}
              desktopBodyRef={desktopBodyRef}
            />
          </main>

          {/* Right widgets: visible from tablet up; width = 3 grid cols (12-col grid, margin 32, gutter 20) */}
          <div className="hidden md:flex md:flex-col md:gap-[var(--space-16)] md:shrink-0 md:ml-[var(--space-24)] md:w-[calc((100vw-64px-220px)/12*3+40px)]">
            <WidgetCard
              title=""
              aria-label="Theme switcher"
              className="!p-0 !bg-transparent !border-none !shadow-none"
            >
              <ThemeWidget />
            </WidgetCard>
            <WidgetCard title="Blog Posts">
              <ul className="list-disc list-inside space-y-[var(--space-8)] pixel-xs font-pixel text-left">
                <li>
                  Jan 2026:{" "}
                  <button
                    onClick={() =>
                      openWindow("blog", { data: { articleId: 1 } })
                    }
                    className="text-tertiary underline font-pixel pixel-xs focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary bg-transparent border-none cursor-pointer p-0 align-baseline text-left"
                    style={{ display: "inline" }}
                  >
                    How I Redesigned This Website
                  </button>
                </li>
                <li>
                  Dec 2023:{" "}
                  <button
                    onClick={() =>
                      openWindow("blog", { data: { articleId: 2 } })
                    }
                    className="text-tertiary underline font-pixel pixel-xs focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary bg-transparent border-none cursor-pointer p-0 align-baseline text-left"
                    style={{ display: "inline" }}
                  >
                    Lessons from Starting my Own Business
                  </button>
                </li>
              </ul>
            </WidgetCard>
          </div>
        </div>
      </div>
    </div>
  );
}
