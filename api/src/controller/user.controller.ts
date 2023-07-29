import { RequestHandler } from 'express';
import UserModel from '../models/user.model';
import jwt, { sign } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import HttpError from '../models/http-error';
import { cookie, param, validationResult } from 'express-validator';
import { IToken } from '../types/Global';

const signupController: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);
  // console.log('errors array : ', errors.array());
  // console.log('errors mapped : ', errors.mapped());

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }
  const { name, email, password } = req.body;

  try {
    const existingEmail = await UserModel.findOne({ email: email });
    if (existingEmail)
      return next(
        new HttpError('user already exists, please login instead', 409)
      );

    const hashPassword = await bcrypt.hash(password, 5);

    const signup = new UserModel({
      name,
      email,
      password: hashPassword,
      cart: {
        total_quantity: 0,
        total_price: 0,
        cart_list: [],
      },
    });

    await signup.save();

    const token = jwt.sign({ id: signup.id } as IToken, process.env.JWT_KEY!);

    if (!token)
      return next(new HttpError('signup failed please try again', 500));

    return res.status(201).json({
      message: 'signup success',
      code: 201,
      data: {
        userID: signup.id,
        email: signup.email,
        token,
      },
    });
  } catch (error) {
    console.log('error from signup : ', error);

    return next(
      new HttpError(
        'signup failed. something went wrong, please try again ',
        500
      )
    );
  }
};

const loginController: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(422).json({ errors: errors.mapped() });
  const { body } = req;
  const { email, password } = body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (!user)
      return next(new HttpError('could not find user by this email', 401));

    const isValidpassword = await bcrypt.compare(password, user.password);
    if (!isValidpassword)
      return next(new HttpError('could not login, invalid password', 401));

    const token = jwt.sign({ id: user.id } as IToken, process.env.JWT_KEY!);
    if (!token)
      return next(new HttpError('signup failed please try again', 500));

    return res.status(200).json({
      message: 'login success',
      code: 200,
      data: {
        userID: user.id,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    return next(
      new HttpError('login failed. something went wrong, please try again', 500)
    );
  }
};

const getUserById: RequestHandler = async (req, res, next) => {
  const { params, cookies } = req;
  const { uid } = params;
  try {
    if (uid !== cookies)
      return next(new HttpError('you are not allowed to see this user', 403));

    const user = await UserModel.findById(uid);
    if (!user)
      return next(new HttpError('could not find this user by this id', 404));

    res.json({
      message: 'success get User by id',
      status: 'success',
      data: user.toObject({ getters: true }),
    });
  } catch (error) {
    return next(
      new HttpError(
        'cannot get user by id. something went wrong, please try again',
        500
      )
    );
  }
};

const getUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.find();
    if (!user) return next(new HttpError('no user here', 404));

    return res.json({
      message: 'succes get user',
      status: 'success',
      data: user.map((u) => u.toObject({ getters: true })),
    });
  } catch (error) {
    return next(
      new HttpError(
        'cannot get user by id. something went wrong, please try again',
        500
      )
    );
  }
};

export { signupController, loginController, getUserById, getUser };
