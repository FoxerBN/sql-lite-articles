import db from '../config/database.js';

export const getPaginatedPosts = (req, res) => {
  const { page = 0, order = 'asc' } = req.query; 
  const pageIndex = parseInt(page, 9);
  const sortOrder = order.toLowerCase() === 'desc' ? 'DESC' : 'ASC';

  if (isNaN(pageIndex) || pageIndex < 0) {
    return res.status(400).json({ 
      message: 'Invalid page parameter. Ensure it is a non-negative number.' 
    });
  }

  const offset = pageIndex * 9;
  const totalCount = db.prepare(`SELECT COUNT(*) as count FROM posts`).get().count;

  const query = `SELECT * FROM posts ORDER BY title ${sortOrder} LIMIT 9 OFFSET ?`;
  const posts = db.prepare(query).all(offset);

  res.json({
    message: `Fetched ${posts.length} posts for page ${pageIndex}.`,
    posts,
    totalCount
  });
};