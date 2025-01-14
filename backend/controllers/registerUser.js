import bcrypt from "bcrypt";
import db from "../config/database.js";

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ error: "Invalid username or password" });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userQuery = `INSERT INTO users (name, password)
      VALUES (?, ?)`;

    const result = db.prepare(userQuery).run(username, hashedPassword);
    res
      .status(201)
      .json({
        message: "User registered successfully",
        userId: result.lastInsertRowid,
      });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
};
