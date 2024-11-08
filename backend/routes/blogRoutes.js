import express from "express";
import { createBlog, getBlogs } from "../controllers/blogController.js";
// import { listBlogs } from "../controllers/blogController.js";

const router = express.Router();
// router.get("/blogs", listBlogs);
router.get("/blogs", getBlogs); // Route to get all blogs
router.post("/blogs", createBlog); // Route to create a blog
export default router;
