import { checkSchema } from 'express-validator';

export const validateCreatingProduct = checkSchema({
  name: {
    notEmpty: true,
    isLength: {
      options: { min: 3, max: 15 },
      errorMessage:
        'name of product should be 3 characters and 15 max character',
    },
    isString: { errorMessage: 'name should be string' },
  },
  price: {
    notEmpty: {
      options: { ignore_whitespace: true },
      errorMessage: 'price cannot be empty',
    },
    isInt: { errorMessage: 'price should be integer' },
  },
  category: {
    notEmpty: { errorMessage: 'category cannot be empty' },
    isLength: {
      options: { min: 2, max: 10 },
      errorMessage:
        'category of product should be > 3 character & max 15 character ',
    },
    isString: { errorMessage: 'category should be string' },
  },
  description: {
    notEmpty: { errorMessage: 'description cannot be empty' },
    isLength: {
      options: { min: 5, max: 100 },
      errorMessage:
        'category of product should be > 5 character & max 100 character ',
    },
    isString: { errorMessage: 'description should be string' },
  },
});
