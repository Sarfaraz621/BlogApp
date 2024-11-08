import db from "../config/db.js";

export async function getAllBlogs() {
  const [rows] = await db.query("SELECT * FROM blogs");
  return rows;
}
