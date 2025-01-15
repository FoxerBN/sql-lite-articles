import db from "../config/database.js";

export const getAllPosts = async (req, res) => {
  try {
    const { order } = req.query;
    const sortOrder = order === "desc" ? "DESC" : "ASC";

    const query = `SELECT * FROM posts ORDER BY title ${sortOrder}`;
    const posts = db.prepare(query).all();

    res.json({ message: `There are ${posts.length} posts.`, posts });
  } catch (error) {}
};

