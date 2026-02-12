/**
 * Compact footer for mobile and tablet screens (< 1024px).
 * Left: Cardinal icon + "Start" label + profile icon
 * Right: Chevron toggle + volume icon
 * Expandable tray with LinkedIn, Download, GitHub icons
 */
import { useState, useEffect, useRef, useCallback } from "react";
import {
  CardinalIcon,
  ProfileIcon,
  UpCaretIcon,
  DownCaretIcon,
  VolumeIcon,
  LinkedInIcon,
  DownloadIcon,
  GithubIcon,
} from "../../icons/FooterIcons";

const quickLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/vinhan-truong/",
    external: true,
  },
  {
    id: "download",
    label: "Download Resume",
    Icon: DownloadIcon,
    href: "/resume.pdf",
    download: true,
  },
  {
    id: "github",
    label: "GitHub",
    Icon: GithubIcon,
    href: "https://github.com/VTruong1478",
    external: true,
  },
];

export default function CompactFooter({ onStartClick, startMenuOpen, startButtonRef }) {
  const [trayOpen, setTrayOpen] = useState(false);
  const trayRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleTray = useCallback(() => {
    setTrayOpen((prev) => !prev);
  }, []);

  const closeTray = useCallback(() => {
    setTrayOpen(false);
  }, []);

  // Close tray on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && trayOpen) {
        closeTray();
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [trayOpen, closeTray]);

  // Close tray on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        trayOpen &&
        !trayRef.current?.contains(e.target) &&
        !toggleRef.current?.contains(e.target)
      ) {
        closeTray();
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [trayOpen, closeTray]);

  const iconButtonClass =
    "flex items-center justify-center w-10 h-10 text-text hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-grey98 dark:focus-visible:ring-offset-grey98 transition-opacity";

  return (
    <>
      {/* Semi-transparent overlay when quick links tray is open */}
      {trayOpen && (
        <div
          className="fixed left-0 right-0 top-0 z-[45]"
          style={{
            bottom: "48px",
            backgroundColor:
              "color-mix(in srgb, var(--secondary) 28%, transparent)",
          }}
          aria-hidden
          onClick={closeTray}
        />
      )}
      {/* Quick links tray - appears above footer, aligned with caret button */}
      {trayOpen && (
        <div
          ref={trayRef}
          id="compact-quick-links-tray"
          role="region"
          aria-label="Quick links"
          className="fixed z-50 flex items-center gap-[var(--space-16)] bg-grey98 border border-darkgrey border-b-0 px-[var(--space-8)] py-[var(--space-8)]"
          style={{
            bottom: "48px",
            right: "calc(var(--space-8) + 40px)", // footer padding + volume button width
          }}
        >
          {quickLinks.map(({ id, label, Icon, href, external, download }) => (
            <a
              key={id}
              href={href}
              className={iconButtonClass}
              aria-label={label}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...(download ? { download: true } : {})}
            >
              <Icon className="w-8 h-8" aria-hidden />
            </a>
          ))}
        </div>
      )}

      {/* Compact footer bar */}
      <footer
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-grey98 text-text border-t border-darkgrey h-[var(--space-48)] px-[var(--space-8)]"
        aria-label="Taskbar"
      >
        {/* Left cluster: Cardinal + Start + Profile */}
        <div className="flex items-center gap-[var(--space-4)]">
          <button
            ref={startButtonRef}
            type="button"
            onClick={onStartClick}
            className="flex items-center gap-[var(--space-4)] px-[var(--space-8)] py-[var(--space-4)] font-pixel text-text hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-grey98 transition-opacity"
            aria-label="Start menu"
            aria-expanded={startMenuOpen}
          >
            <CardinalIcon className="w-8 h-8 shrink-0" aria-hidden />
            <span className="pixel-sm">Start</span>
          </button>
          <button
            type="button"
            className={iconButtonClass}
            aria-label="Profile"
          >
            <ProfileIcon className="w-8 h-8" aria-hidden />
          </button>
        </div>

        {/* Right cluster: Chevron toggle + Volume */}
        <div className="flex items-center gap-[var(--space-8)]">
          <button
            ref={toggleRef}
            type="button"
            onClick={toggleTray}
            className={iconButtonClass}
            aria-label={trayOpen ? "Close quick links" : "Open quick links"}
            aria-expanded={trayOpen}
            aria-controls="compact-quick-links-tray"
          >
            {trayOpen ? (
              <DownCaretIcon className="w-8 h-8" aria-hidden />
            ) : (
              <UpCaretIcon className="w-8 h-8" aria-hidden />
            )}
          </button>
          <button type="button" className={iconButtonClass} aria-label="Volume">
            <VolumeIcon className="w-8 h-8" aria-hidden />
          </button>
        </div>
      </footer>
    </>
  );
}
