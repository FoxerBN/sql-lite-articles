import db from '../config/database.js';

export const createPost = (req, res) =>{
    const { title, content, author} = req.body;
    const date = new Date().toDateString();
    const query = `
        INSERT INTO posts (title, content, author,date)
        VALUES (?,?,?,?)
    `;
    const result = db.prepare(query).run(title,content,author,date);
    res.status(201).json({ id: result.lastInsertRowid });
}