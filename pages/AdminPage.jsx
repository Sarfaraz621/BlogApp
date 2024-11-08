import React, { useState, useEffect } from "react";
import BlogForm from "../src/components/BlogForm"; // Import BlogForm
import BlogList from "../src/components/BlogList";
import CourseList from "../src/components/CourseList";

function AdminPage() {
  const [blogs, setBlogs] = useState([]); // To store fetched blogs
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  // Fetch blogs from the backend API when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array to run only once on mount

  const handleEditBlog = (blog) => {
    setIsEditing(true);
    setCurrentBlog(blog); // Set the blog that is being edited
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Display BlogForm for adding a new blog or editing an existing one */}
      <BlogForm blog={currentBlog} />

      {/* Blog Management Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Manage Blogs
        </h2>

        {/* List of Blogs */}
        <div>
          <ul>
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <li key={blog._id} className="mb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{blog.title}</span>{" "}
                    <button
                      onClick={() => handleEditBlog(blog)} // Pass the blog data to edit
                      className="bg-blue-500 text-white rounded"
                    >
                      Edit
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li>No blogs available</li>
            )}
          </ul>
        </div>
      </div>
      <BlogList />
      <CourseList />
    </div>
  );
}

export default AdminPage;
