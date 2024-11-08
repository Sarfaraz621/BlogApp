// import { getAllBlogs } from "../models/Blog.js";

// backend/controllers/blogController.js
import moment from "moment";
import db from "../config/db.js";

// Create a new blog post
export const createBlog = async (req, res) => {
  const { title, content, publishDate } = req.body; // Publish Date is the scheduled time
  const publishDateFormatted = moment(publishDate).format(
    "YYYY-MM-DD HH:mm:ss"
  );
  console.log(req.body);

  const query = `INSERT INTO blogs (title, content, publish_date) VALUES (?, ?, ?)`;
  const values = [title, content, publishDateFormatted];

  try {
    const [result] = await db.execute(query, values);
    res
      .status(201)
      .json({ message: "Blog created successfully", id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating blog post" });
  }
};

// Fetch all blogs
export const getBlogs = async (req, res) => {
  const query = `SELECT * FROM blogs ORDER BY publish_date DESC`;

  try {
    const [blogs] = await db.execute(query);
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching blogs" });
  }
};
