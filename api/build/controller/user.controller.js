"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUserById = exports.loginController = exports.signupController = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_error_1 = __importDefault(require("../models/http-error"));
const express_validator_1 = require("express-validator");
const signupController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    // console.log('errors array : ', errors.array());
    // console.log('errors mapped : ', errors.mapped());
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }
    const { name, email, password } = req.body;
    try {
        const existingEmail = yield user_model_1.default.findOne({ email: email });
        if (existingEmail)
            return next(new http_error_1.default('user already exists, please login instead', 409));
        const hashPassword = yield bcrypt_1.default.hash(password, 5);
        const signup = new user_model_1.default({
            name,
            email,
            password: hashPassword,
            cart: {
                total_quantity: 0,
                total_price: 0,
                cart_list: [],
            },
        });
        yield signup.save();
        const token = jsonwebtoken_1.default.sign({ id: signup.id }, process.env.JWT_KEY);
        if (!token)
            return next(new http_error_1.default('signup failed please try again', 500));
        return res.status(201).json({
            message: 'signup success',
            code: 201,
            data: {
                userID: signup.id,
                email: signup.email,
                token,
            },
        });
    }
    catch (error) {
        console.log('error from signup : ', error);
        return next(new http_error_1.default('signup failed. something went wrong, please try again ', 500));
    }
});
exports.signupController = signupController;
const loginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty())
        return res.status(422).json({ errors: errors.mapped() });
    const { body } = req;
    const { email, password } = body;
    try {
        const user = yield user_model_1.default.findOne({ email: email });
        if (!user)
            return next(new http_error_1.default('could not find user by this email', 401));
        const isValidpassword = yield bcrypt_1.default.compare(password, user.password);
        if (!isValidpassword)
            return next(new http_error_1.default('could not login, invalid password', 401));
        const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_KEY);
        if (!token)
            return next(new http_error_1.default('signup failed please try again', 500));
        return res.status(200).json({
            message: 'login success',
            code: 200,
            data: {
                userID: user.id,
                email: user.email,
                token,
            },
        });
    }
    catch (error) {
        return next(new http_error_1.default('login failed. something went wrong, please try again', 500));
    }
});
exports.loginController = loginController;
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { params, cookies } = req;
    const { uid } = params;
    try {
        if (uid !== cookies)
            return next(new http_error_1.default('you are not allowed to see this user', 403));
        const user = yield user_model_1.default.findById(uid);
        if (!user)
            return next(new http_error_1.default('could not find this user by this id', 404));
        res.json({
            message: 'success get User by id',
            status: 'success',
            data: user.toObject({ getters: true }),
        });
    }
    catch (error) {
        return next(new http_error_1.default('cannot get user by id. something went wrong, please try again', 500));
    }
});
exports.getUserById = getUserById;
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.find();
        if (!user)
            return next(new http_error_1.default('no user here', 404));
        return res.json({
            message: 'succes get user',
            status: 'success',
            data: user.map((u) => u.toObject({ getters: true })),
        });
    }
    catch (error) {
        return next(new http_error_1.default('cannot get user by id. something went wrong, please try again', 500));
    }
});
exports.getUser = getUser;
