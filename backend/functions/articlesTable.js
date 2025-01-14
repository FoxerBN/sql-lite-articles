import db from "../config/database.js";

export const createTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        author TEXT NOT NULL,
        date TEXT NOT NULL
    );
  `;

  try {
    db.exec(query); // Synchronous execution in better-sqlite3
    console.log("Table 'posts' created successfully");
  } catch (error) {
    console.error("Error creating 'posts' table:", error.message);
  }
};
