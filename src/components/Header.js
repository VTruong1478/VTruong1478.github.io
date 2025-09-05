import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <h1 className="font-bold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight flex-shrink-0">
          An Truong
        </h1>

        {/* Nav Links */}
        <ul className="flex flex-wrap justify-end gap-4 sm:gap-6 md:gap-8 flex-1">
          <li>
            <Link
              to="/#about"
              className="group relative px-2 py-1 text-accent hover:text-accentShade font-medium transition-colors duration-300"
            >
              About
              <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-accentShade transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/#portfolio"
              className="group relative px-2 py-1 text-accent hover:text-accentShade font-medium transition-colors duration-300"
            >
              Portfolio
              <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-accentShade transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/#blog"
              className="group relative px-2 py-1 text-accent hover:text-accentShade font-medium transition-colors duration-300"
            >
              Blog
              <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-accentShade transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
