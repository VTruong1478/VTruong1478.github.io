import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How I Designed This Website",
    date: "August 2025",
    excerpt: "Look at the design decisions and tools I used...",
    image: "/images/design.jpg",
  },
  {
    id: 2,
    title: "Lessons from Starting my Own Business",
    date: "December 2023",
    excerpt: "What I learned from launching a small business...",
    image: "/images/lessons.jpg",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-background min-h-screen py-20 px-8 sm:px-12 md:px-16 scroll-mt-16"
    >
      <h2 className="text-4xl font-bold text-primary text-center mb-16">
        Blog
      </h2>

      {/* 12-column grid on desktop, 8 on tablet, 6 on mobile */}
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6 max-w-7xl mx-auto justify-center">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="group bg-card rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-2xl
                       col-span-6 md:col-span-4 lg:col-span-6"
          >
            {/* Image with zoom on hover */}
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
              <h3 className="text-2xl font-semibold text-text mb-2 transition-colors duration-300">
                {post.title}
              </h3>

              <div className="text-sm text-accentDark mb-4">{post.date}</div>

              <p className="text-secondaryText mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              {/* CTA Button with float on hover */}
              <div className="mt-auto">
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-block bg-accent text-white font-semibold px-4 py-2 rounded-xl shadow transition-all duration-300 transform hover:-translate-y-1 hover:bg-accent/90"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
