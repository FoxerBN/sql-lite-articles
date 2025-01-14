import db from '../config/database.js';

export const editPost = (req, res) => {
    const { id } = req.params;
    const { title, content, author } = req.body;

    const query = `
        UPDATE posts
        SET 
            title = COALESCE(?, title),
            content = COALESCE(?, content),
            author = COALESCE(?, author)
        WHERE id = ?
    `;
    const result = db.prepare(query).run(title, content, author, id);

    if (result.changes) {
        res.json({ message: `Post with ID ${id} was updated` });
    } else {
        res.status(404).json({ message: `No post with ID ${id} found` });
    }
};