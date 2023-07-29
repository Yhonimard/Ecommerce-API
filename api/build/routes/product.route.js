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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_validator_1 = require("../validator/product.validator");
const product_controller_1 = require("../controller/product.controller");
const route = (0, express_1.Router)();
route.get('/get', product_controller_1.getAllProductController);
route.get('/get/:pid', product_controller_1.getProductByIDController);
route.post('/add', product_validator_1.validateCreatingProduct, product_controller_1.createProductController);
route.put('/update/:pid', product_controller_1.updateProductController);
route.delete('/delete/:pid', product_controller_1.deleteProductController);
route.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: 'hello its product api' });
}));
const productRouter = route;
exports.default = productRouter;
