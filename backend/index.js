import express from "express";
import { createTable } from './functions/articlesTable.js';
import { createUsersTable } from './functions/userTable.js'
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import cors from 'cors';
//*ROUTER
import postsRouter from './routes/postsRouter.js'
import userRouter from './routes/userRouter.js'
import mainPageRoute from './routes/mainPage.js'
const app = express();
const PORT = 3000;
console.log('ahoj';

dotenv.config();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));
createTable();
createUsersTable();

//* ROUTES
app.use('/posts', postsRouter)
app.use('/user', userRouter)
app.use('/', mainPageRoute)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
