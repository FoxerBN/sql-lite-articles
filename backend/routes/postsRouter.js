import express from 'express';
import { getAllPosts } from '../controllers/getAllPost.js';
import { deletePost } from '../controllers/deletePost.js';
import { createPost } from '../controllers/createPost.js';
import { editPost } from '../controllers/editPost.js';
import { getPaginatedPosts } from '../controllers/paginatePost.js';
import { createMultiplePosts } from '../controllers/createManyPosts.js'
import { getSinglePost } from '../controllers/getSinglePost.js';
import isAuthenticated from '../middlewares/isAuthenticate.js'
const postsRouter = express.Router();

postsRouter.get('/all', getAllPosts);
postsRouter.post('/create', isAuthenticated,createPost);
postsRouter.post('/createMany', isAuthenticated,createMultiplePosts);
postsRouter.delete('/delete/:id', deletePost);
postsRouter.put('/edit/:id', editPost);
postsRouter.get('/page', getPaginatedPosts);
postsRouter.get('/:id', getSinglePost);

export default postsRouter;