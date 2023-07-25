import { Router } from 'express';
import {
  getUser,
  getUserById,
  loginController,
  signupController,
} from '../controller/user.controller';
import { validateLogin, validateSignup } from '../validator/user.validator';
import authCheck from '../middleware/auth.check';

const route = Router();

route.post('/signup', validateSignup, signupController);
route.post('/login', validateLogin, loginController);
route.use(authCheck);
route.get('/get/:uid', getUserById);
route.get('/get', getUser);

const userRouter = route;
export default userRouter;
