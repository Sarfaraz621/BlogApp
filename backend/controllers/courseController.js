import { getAllCourses } from "../models/Course.js";

export async function listDiscountedCourses(req, res) {
  const courses = await getAllCourses();
  res.json(courses);
}
