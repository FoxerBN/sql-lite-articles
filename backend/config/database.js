import Database from 'better-sqlite3';

const db = new Database('./database/blog.db', { verbose: console.log });

export default db;
