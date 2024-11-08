// BlogList.js
import React, { useState, useEffect } from "react";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Latest Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="p-4 border rounded shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-indigo-600">
              {blog.title}
            </h3>
            <p className="text-gray-700 mt-2">{blog.content}</p>
            <p className="text-gray-700 mt-2">{blog.publishDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
