import express from 'express';
import {registerUser} from '../controllers/registerUser.js'
import {loginUser} from '../controllers/loginUser.js'
import {logoutUser} from '../controllers/logout.js'
import isAuthenticated from '../middlewares/isAuthenticate.js';
const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/logout', logoutUser);

userRouter.get('/auth-check', isAuthenticated, (req, res) => {
    res.status(200).json({ authenticated: true });
  });

export default userRouter;