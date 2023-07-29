"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const user_validator_1 = require("../validator/user.validator");
const auth_check_1 = __importDefault(require("../middleware/auth.check"));
const route = (0, express_1.Router)();
route.post('/signup', user_validator_1.validateSignup, user_controller_1.signupController);
route.post('/login', user_validator_1.validateLogin, user_controller_1.loginController);
route.use(auth_check_1.default);
route.get('/get/:uid', user_controller_1.getUserById);
route.get('/get', user_controller_1.getUser);
const userRouter = route;
exports.default = userRouter;
