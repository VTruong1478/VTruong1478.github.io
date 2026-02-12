/**
 * Window definitions: default spawn positions and sizes (small desktop 1024–1439).
 * Staggered: About top-left, then Portfolio, Blog, Contact offset down-right.
 * Uses existing spacing tokens (no new tokens).
 */
import aboutSvg from "../assets/desktop/about.svg?raw";
import portfolioSvg from "../assets/desktop/portfolio.svg?raw";
import blogSvg from "../assets/desktop/blog.svg?raw";
import contactSvg from "../assets/desktop/contact.svg?raw";

const STAGGER_OFFSET = 28; // ~space-24 + 4 for visual stagger (no new token)
const BASE_X = 80; // initial left
const BASE_Y = 80; // initial top
const DEFAULT_WIDTH = 640;
const DEFAULT_HEIGHT = 500;

export const windowDefinitions = {
  about: {
    title: "About",
    icon: aboutSvg,
    x: BASE_X,
    y: BASE_Y,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  portfolio: {
    title: "Portfolio",
    icon: portfolioSvg,
    x: BASE_X + STAGGER_OFFSET,
    y: BASE_Y + STAGGER_OFFSET,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  blog: {
    title: "Blog",
    icon: blogSvg,
    x: BASE_X + STAGGER_OFFSET * 2,
    y: BASE_Y + STAGGER_OFFSET * 2,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  contact: {
    title: "Contact",
    icon: contactSvg,
    x: BASE_X + STAGGER_OFFSET * 3,
    y: BASE_Y + STAGGER_OFFSET * 3,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
};

export const windowIds = ["about", "portfolio", "blog", "contact"];
