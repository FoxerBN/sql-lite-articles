import db from '../config/database.js';

export const deletePost = (req, res) =>{
    const { id } = req.params;
    const query = `DELETE FROM posts WHERE id = ? `;
    const result = db.prepare(query).run(id)
    if(result.changes){
        res.json({ message: `Post with ID ${id} was deleted`})
    }else{
        res.status(404).json({ message: `No post with ID ${id} found`})
    }
};