import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { IToken } from '../types/Global';
import HttpError from '../models/http-error';

const authCheck: RequestHandler = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new Error('auth failed');
    }
    const { id } = jwt.verify(token, process.env.JWT_KEY!) as IToken;
    req.cookies = id;
    next();
  } catch (error) {
    return next(new HttpError('auth failed', 403));
  }
};

export default authCheck;
