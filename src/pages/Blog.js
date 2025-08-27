import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How I Designed This Website",
    date: "August 2025",
    excerpt: "Look at the design decisions and tools I used...",
    image: "/images/portfolio-blog.jpg",
  },
  {
    id: 2,
    title: "Lessons from Starting my Own Business",
    date: "December 2023",
    excerpt: "What I learned from launching a small business...",
    image: "/images/startup-blog.jpg",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-background min-h-screen py-16 px-6 scroll-mt-16"
    >
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Blog
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full sm:w-11/12 md:w-3/4 lg:w-4/5 xl:w-4/5 mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-card rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col">
              <h3 className="text-2xl font-semibold text-text mb-2">
                {post.title}
              </h3>

              {/* Meta Info (date) */}
              <div className="text-sm text-accentDark mb-4">
                <span>{post.date}</span>
              </div>

              <p className="text-secondaryText mb-4">{post.excerpt}</p>
              <div className="mt-auto">
                <Link
                  to={`/blog/${post.id}`}
                  className="text-accent font-semibold hover:underline"
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
