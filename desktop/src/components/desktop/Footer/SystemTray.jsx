/**
 * Right system tray: LinkedIn, Download, GitHub, Volume icons + clock.
 * Pixelify Sans, text-text. Icons as inline SVG. ARIA and focus-visible only.
 * Clock shows current time and date, updates every minute.
 * On mobile (<768px), clock is hidden to save space.
 */
import { useState, useEffect, useRef } from "react";
import {
  LinkedInIcon,
  DownloadIcon,
  GithubIcon,
  VolumeIcon,
  MuteIcon,
} from "../../icons/FooterIcons";

const trayIcons = [
  {
    id: "linkedin",
    label: "LinkedIn, opens in new tab",
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
    label: "GitHub, opens in new tab",
    Icon: GithubIcon,
    href: "https://github.com/VTruong1478",
    external: true,
  },
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

export default function SystemTray({ isMobile = false }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Update time immediately
    setCurrentTime(new Date());

    // Update every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 60000ms = 1 minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Initialize audio element
    if (!audioRef.current) {
      audioRef.current = new Audio("/background-music.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.2;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const newMutedState = !prev;
      if (audioRef.current) {
        if (newMutedState) {
          audioRef.current.pause();
        } else {
          audioRef.current.play().catch((err) => {
            console.error("Failed to play audio:", err);
          });
        }
      }
      return newMutedState;
    });
  };

  const timeString = formatTime(currentTime);
  const dateString = formatDate(currentTime);
  const isoDateTime = currentTime.toISOString();
  const isoDate = currentTime.toISOString().split("T")[0];

  const iconClassName =
    "flex items-center justify-center w-8 h-8 text-text hover:opacity-90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-opacity";

  return (
    <div
      className="flex items-center gap-[var(--space-12)] pl-[var(--space-16)] pr-[var(--space-8)] py-[var(--space-8)]"
      role="region"
      aria-label="System tray"
    >
      {trayIcons.map(({ id, label, Icon, href, external, download }) => (
        <a
          key={id}
          href={href}
          className={iconClassName}
          aria-label={label}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...(download ? { download: true } : {})}
        >
          <Icon className="w-8 h-8" aria-hidden />
        </a>
      ))}
      <button
        type="button"
        className={iconClassName}
        aria-label={isMuted ? "Unmute" : "Mute"}
        onClick={toggleMute}
      >
        {isMuted ? (
          <MuteIcon className="w-8 h-8" aria-hidden />
        ) : (
          <VolumeIcon className="w-8 h-8" aria-hidden />
        )}
      </button>
      {!isMobile && (
        <div
          className="flex flex-col items-center text-center text-text font-pixel pixel-xs"
          aria-label="Current date and time"
        >
          <time dateTime={isoDateTime}>{timeString}</time>
          <time dateTime={isoDate}>{dateString}</time>
        </div>
      )}
    </div>
  );
}
