import { check, checkSchema } from 'express-validator';

const validateSignup = checkSchema({
  name: {
    notEmpty: { errorMessage: 'name cannot be empty' },
    exists: { errorMessage: 'name is required' },
    isLength: {
      options: { min: 3 },
      errorMessage: 'name should be greater than 1',
    },
  },
  email: {
    exists: { errorMessage: 'email required' },
    isEmail: { errorMessage: 'invalid email' },
  },
  password: {
    exists: { errorMessage: 'password required' },
    isLength: {
      options: { min: 4 },
      errorMessage: 'password should be greater than 4',
    },
  },
});

const validateLogin = checkSchema({
  email: {
    exists: { errorMessage: 'email required' },
    isEmail: { errorMessage: 'invalid email' },
  },
  password: {
    exists: { errorMessage: 'password required' },
    isLength: {
      options: { min: 4 },
      errorMessage: 'password should be greater than 4',
    },
  },
});

export { validateSignup, validateLogin };
