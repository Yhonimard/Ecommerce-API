"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = exports.validateSignup = void 0;
const express_validator_1 = require("express-validator");
const validateSignup = (0, express_validator_1.checkSchema)({
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
exports.validateSignup = validateSignup;
const validateLogin = (0, express_validator_1.checkSchema)({
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
exports.validateLogin = validateLogin;
