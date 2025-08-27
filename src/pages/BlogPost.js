import React from "react";
import { useParams, Link } from "react-router-dom";

const blogPosts = {
  1: {
    title: "How I Designed This Website",
    content: "Look at the design decisions and tools I used...",
  },
  2: {
    title: "Lessons from Starting my Own Business",
    content: "What I learned from launching a small business...",
  },
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed mb-8">{post.content}</p>
      <Link to="/" className="text-accent hover:underline">
        ← Back to Blog
      </Link>
    </div>
  );
};

export default BlogPost;
