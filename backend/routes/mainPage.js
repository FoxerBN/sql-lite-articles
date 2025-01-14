import express from 'express'
import isAuthenticated from '../middlewares/isAuthenticate.js'
const mainPageRoute = express.Router();

mainPageRoute.get('/mainpage',isAuthenticated, (req, res) => {
    res.send('Hello from the main page!');
});

export default mainPageRoute;