/**
 * Right system tray: LinkedIn, Download, GitHub, Volume icons + clock.
 * Pixelify Sans, text-text. Icons as inline SVG. ARIA and focus-visible only.
 * Clock shows current time and date, updates every minute.
 */
import { useState, useEffect } from "react";
import {
  LinkedInIcon,
  DownloadIcon,
  GithubIcon,
  VolumeIcon,
} from "../../icons/FooterIcons";

const trayIcons = [
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
  { id: "volume", label: "Volume", Icon: VolumeIcon },
];

function formatTime(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  const displayMinutes = minutes.toString().padStart(2, "0");
  return `${displayHours}:${displayMinutes} ${ampm}`;
}

function formatDate(date) {
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

export default function SystemTray() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time immediately
    setCurrentTime(new Date());

    // Update every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 60000ms = 1 minute

    return () => clearInterval(interval);
  }, []);

  const timeString = formatTime(currentTime);
  const dateString = formatDate(currentTime);
  const isoDateTime = currentTime.toISOString();
  const isoDate = currentTime.toISOString().split("T")[0];

  return (
    <div
      className="flex items-center gap-[var(--space-12)] px-[var(--space-16)] py-[var(--space-8)]"
      role="region"
      aria-label="System tray"
    >
      {trayIcons.map(({ id, label, Icon, href, external, download }) => {
        const className =
          "flex items-center justify-center w-8 h-8 text-text hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-widget transition-opacity";

        if (href) {
          return (
            <a
              key={id}
              href={href}
              className={className}
              aria-label={label}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...(download ? { download: true } : {})}
            >
              <Icon className="w-8 h-8" aria-hidden />
            </a>
          );
        }

        return (
          <button
            key={id}
            type="button"
            className={className}
            aria-label={label}
          >
            <Icon className="w-8 h-8" aria-hidden />
          </button>
        );
      })}
      <div
        className="flex flex-col items-end text-right text-text font-pixel pixel-xs"
        aria-live="polite"
        aria-label="Current date and time"
      >
        <time dateTime={isoDateTime}>{timeString}</time>
        <time dateTime={isoDate}>{dateString}</time>
      </div>
    </div>
  );
}
