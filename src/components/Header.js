import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary text-text shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Vinhan Truong</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-secondary">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-secondary">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
