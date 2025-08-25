import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-text py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Vinhan Truong. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
