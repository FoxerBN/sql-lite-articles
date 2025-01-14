import bcrypt from "bcrypt";
import db from "../config/database.js";
import {generateTokenAndSetCookie} from '../functions/createToken.js'
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Name and password are required" });
  }

  try {
    const getUserQuery = `SELECT * FROM users WHERE name = ?`;
    const user = db.prepare(getUserQuery).get(username);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const secret = process.env.JWT_SECRET;
    const payload = { id: user.id, name: user.username };
    generateTokenAndSetCookie(res, payload, secret);

    res.status(200).json({ message: "Login successful", userId: user.id });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
