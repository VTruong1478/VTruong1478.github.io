import React, { useState, useEffect } from "react";

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
      className={`text-text sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight transition-colors duration-300">
          An Truong
        </h1>

        {/* Nav Links */}
        <ul className="flex space-x-6">
          <li>
            <a
              href="#about"
              className="group relative px-3 py-2 transition-colors duration-300 text-accent hover:text-accentShade"
            >
              About
              <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-accentShade transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="group relative px-3 py-2 transition-colors duration-300 text-accent hover:text-accentShade"
            >
              Portfolio
              <span className="absolute left-0 -bottom-0.5 w-full h-[2px]  bg-accentShade transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="group relative px-3 py-2 transition-colors duration-300 text-accent hover:text-accentShade"
            >
              Blog
              <span className="absolute left-0 -bottom-0.5 w-full h-[2px]  bg-accentShade transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
