import React from "react";

export default function Footer() {
  return (
    <footer className="bg-card text-secondaryText border-t border-border mt-16">
      <div className="container mx-auto px-6 py-12 text-center space-y-6">
        {/* Heading */}
        <h2 className="text-xl font-bold text-primary">Get in Touch</h2>

        {/* Contact Methods */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:v.truong1478@gmail.com"
            className="text-accent hover:text-accentShade transition-colors duration-300 font-medium"
          >
            v.truong1478@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-6 text-center text-sm text-secondaryText">
        © {new Date().getFullYear()} An Truong
      </div>
    </footer>
  );
}
