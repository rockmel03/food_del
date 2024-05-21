import express from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/user.contoller.js';

const userRouter = express.Router();

userRouter.route('/register').post(registerUser)
userRouter.route('/login').post(loginUser)
userRouter.route('/logout').post(logoutUser)


export default userRouter