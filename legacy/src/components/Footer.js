import React from "react";

export default function Footer() {
  return (
    <footer className="bg-card text-secondaryText mt-16">
      {/* Bottom bar */}
      <div className=" py-12 text-center text-base text-text">
        © {new Date().getFullYear()} An Truong
      </div>
    </footer>
  );
}
