import { ErrorRequestHandler, RequestHandler } from 'express';
import HttpError from '../models/http-error';

const getBaseController: RequestHandler = async (req, res, next) => {
  return res.json({
    message: 'Hello Iam Yhonimard. this API currently being developed',
    USER_API: {
      SIGNUP: {
        METHOD: 'POST',
        URL: '/api/user/signup',
        REQ_BODY_EXAMPLE: {
          name: 'your name',
          email: 'your dummy email',
          password: 'Your password',
        },
      },
      LOGIN: {
        METHOD: 'POST',
        URL: '/api/user/login',
        REQUEST_BODY_EXAMPLE: {
          email: 'The email that you have registered.',
          password: 'The password that you have registered.',
        },
      },
    },
    PRODUCT_API: {
      GET_ALL_PRODUCT: {
        METHOD: 'GET',
        URL: '/api/products/get',
      },
      GET_PRODUCT_BY_ID: {
        METHOD: 'GET',
        url: '/api/products/:ID',
        example: '/api/products/get/649fc873866194001c1e7d2d',
      },
      ADD_PRODUCT: {
        METHOD: 'POST',
        URL: '/api/products/add',
        REQUST_BODY_EXAMPLE: {
          name: 'name of product',
          price: 5,
          category: 'category of product',
          description: 'description of product',
        },
        NOTE: {
          name: 'should be min 3 character & max 15 character then cannot be empty',
          category:
            'should be min 3 character & max 15 charater and cannot be empty',
          description:
            'should be min 5 char & max 100 char then cannot be empty',
        },
      },
      UPDATE_PRODUCT: {
        METHOD: 'PUT',
        URL: '/api/products/update/:ID',
        EXAMPLE_URL: '/api/products/update/64a03a780aa72f82a58a9228',
        EXAMPLE_REQUEST_BODY: {
          name: 'patch testindoang',
          price: 15,
          category: 'patch testssss',
          description: 'patch testing',
        },
      },
      DELETE_PRODUCT: {
        METHOD: 'DELETE',
        URL: '/api/products/delete/:ID',
        EXAMPLE: '/api/products/delete/6417c26c19b3c4bdbcf856c2',
      },
    },
  });
};

const errorNoRouteController: RequestHandler = (req, res, next) => {
  return next(new HttpError('could not find this route', 404));
};

const errorController: ErrorRequestHandler = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  return res
    .status(error.code)
    .json({ message: error.message, code: error.code, status: 'error' });
};

export { getBaseController, errorNoRouteController, errorController };
