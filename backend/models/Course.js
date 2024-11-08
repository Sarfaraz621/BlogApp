import db from "../config/db.js";

export async function getAllCourses() {
  const [rows] = await db.query("SELECT * FROM courses");
  return rows;
}
