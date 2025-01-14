import db from "../config/database.js";

export const createUsersTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      password TEXT NOT NULL
    );
  `;

  try {
    db.exec(query); // Synchronous execution using better-sqlite3
    console.log("Table 'users' created successfully");
  } catch (error) {
    console.error("Error creating 'users' table:", error.message);
  }
};
