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
exports.errorController = exports.errorNoRouteController = exports.getBaseController = void 0;
const http_error_1 = __importDefault(require("../models/http-error"));
const getBaseController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
                    category: 'should be min 3 character & max 15 charater and cannot be empty',
                    description: 'should be min 5 char & max 100 char then cannot be empty',
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
});
exports.getBaseController = getBaseController;
const errorNoRouteController = (req, res, next) => {
    return next(new http_error_1.default('could not find this route', 404));
};
exports.errorNoRouteController = errorNoRouteController;
const errorController = (error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    return res
        .status(error.code)
        .json({ message: error.message, code: error.code, status: 'error' });
};
exports.errorController = errorController;
