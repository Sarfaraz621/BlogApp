// frontend/src/components/BlogForm.jsx
import React, { useState, useEffect } from "react";

function BlogForm({ blog }) {
  const [title, setTitle] = useState(blog ? blog.title : "");
  const [content, setContent] = useState(blog ? blog.content : "");
  const [publishDate, setPublishDate] = useState(blog ? blog.publishDate : "");

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setPublishDate(blog.publishDate);
    }
  }, [blog]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title,
      content,
      publishDate,
    };

    if (blog) {
      // Update the existing blog (make a PUT request)
      await fetch(`http://localhost:5000/api/blogs/${blog.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
    } else {
      // Create a new blog (make a POST request)
      await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-4 border rounded shadow-sm"
    >
      <h2 className="text-xl font-semibold mb-4">
        {blog ? "Edit Blog" : "Add New Blog"}
      </h2>

      <label className="block mb-2">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      <label className="block mb-2">Content</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      ></textarea>

      <label className="block mb-2">Publish Date</label>
      <input
        type="datetime-local"
        value={publishDate}
        onChange={(e) => setPublishDate(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {blog ? "Update Blog" : "Create Blog"}
      </button>
    </form>
  );
}

export default BlogForm;
