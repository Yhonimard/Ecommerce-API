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
exports.deleteProductController = exports.updateProductController = exports.createProductController = exports.getProductByIDController = exports.getAllProductController = void 0;
const http_error_1 = __importDefault(require("../models/http-error"));
const product_model_1 = __importDefault(require("../models/product.model"));
const express_validator_1 = require("express-validator");
const getAllProductController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getProduct = yield product_model_1.default.find({});
        if (!getProduct)
            return next(new http_error_1.default('could not find products, please try again', 404));
        return res.json(getProduct.map((p) => p.toObject({ getters: true })));
    }
    catch (error) {
        console.log('error from /product/get : ', error);
        return next(new http_error_1.default('something went wrong, please try again', 500));
    }
});
exports.getAllProductController = getAllProductController;
const getProductByIDController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { params } = req;
    try {
        const getProductByID = yield product_model_1.default.findById(params.pid);
        console.log('product by Id : ', getProductByID);
        if (!getProductByID) {
            return next(new http_error_1.default('could not find this product by it id', 404));
        }
        res.json({
            status: 'success',
            message: `success get product by this ${params.pid} id`,
            data: getProductByID.toObject({ getters: true }),
        });
    }
    catch (error) {
        console.log('error from /product/get/:pid : ', error);
        return next(new http_error_1.default('something went wrong, cannot find this product. please try again', 500));
    }
});
exports.getProductByIDController = getProductByIDController;
const createProductController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }
    const { body } = req;
    const { name, price, category, description } = body;
    const createProduct = new product_model_1.default({
        name,
        price,
        category,
        description,
    });
    try {
        yield createProduct.save();
    }
    catch (error) {
        return next(new http_error_1.default('creating product failed, please try again', 500));
    }
    return res.status(201).json({
        message: 'creating product successfully',
        status: 'success',
        data: createProduct,
    });
});
exports.createProductController = createProductController;
const updateProductController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { params, body } = req;
    const { pid } = params;
    const { name, price, category, description } = body;
    try {
        const product = yield product_model_1.default.findById(pid);
        if (!product)
            return next(new http_error_1.default('product not found', 404));
        product.name = name;
        product.price = price;
        product.category = category;
        product.description = description;
        yield product.save();
        return res.status(200).json({
            message: 'succes update product',
            status: 'success',
            data: product.toObject({ getters: true }),
        });
    }
    catch (error) {
        return next(new http_error_1.default('could not update this product. something went wrong', 500));
    }
});
exports.updateProductController = updateProductController;
const deleteProductController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { params } = req;
    const { pid } = params;
    try {
        const product = yield product_model_1.default.findById(pid);
        if (!product)
            return next(new http_error_1.default('product not found', 404));
        yield product.deleteOne({});
        res.status(200).json({ message: 'success delete product' });
    }
    catch (error) {
        return next(new http_error_1.default('couldnt delete this product. please try again', 500));
    }
});
exports.deleteProductController = deleteProductController;
