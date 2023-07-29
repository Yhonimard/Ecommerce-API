"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: {
        total_quantity: Number,
        total_price: Number,
        cart_list: [
            {
                quantity: Number,
                price: Number,
                product: { type: mongoose_1.Types.ObjectId, ref: 'Products' },
            },
        ],
    },
}, { timestamps: true });
const UserModel = (0, mongoose_1.model)('User', userSchema);
exports.default = UserModel;
