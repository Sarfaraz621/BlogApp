import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "Tofiluk@9488",
  database: "sciastra",
});

export default db;
