import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for container + items
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-primary text-2xl font-bold tracking-tight transition-colors duration-300">
          <span>An Truong</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-6 md:gap-8">
          {["about", "portfolio", "blog", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/#${item}`}
                className="group relative px-2 py-1 text-secondary hover:text-secondaryShade font-medium transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-secondaryShade transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-2 rounded-2xl text-secondary hover:bg-gray-100 transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="sm:hidden bg-white shadow-md"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {["about", "portfolio", "blog", "contact"].map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <Link
                    to={`/#${item}`}
                    onClick={() => setMenuOpen(false)} // close on click
                    className="text-secondary hover:text-secondaryShade font-medium text-lg transition-colors duration-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
