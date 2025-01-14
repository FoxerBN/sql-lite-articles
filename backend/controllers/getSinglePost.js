import db from '../config/database.js';

export const getSinglePost = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM posts WHERE id = ?';
  
  const post = db.prepare(query).get(id);
  
  if (post) {
    res.json({ post });
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
};
