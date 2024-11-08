import express from "express";
import { listDiscountedCourses } from "../controllers/courseController.js";

const router = express.Router();
router.get("/courses", listDiscountedCourses);
export default router;
