import db from '../config/database.js';

export const createMultiplePosts = (req,res)=>{
    const posts = req.body;
    const query = `
        INSERT INTO posts (title, content, author, date)
        VALUES (?, ?, ?, ?)
    `;

    try {
        const results = [];
        const insert = db.prepare(query)

        posts.forEach(post =>{
            const { title, content,author } = post;
            const date = new Date().toDateString();
            const result = insert.run(title, content, author, date);
            results.push({ id: result.lastInsertRowid, title, content, author, date });
        });

        res.status(201).json({message: 'Posts created successfully', results})
    } catch (err) {
        console.error("Error creating posts:", err)
        res.status(500).json({error:"Failed to create posts" })
    }
}