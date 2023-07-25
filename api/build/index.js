"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = __importDefault(require("./routes/product.route"));
const connectDB_controller_1 = __importDefault(require("./controller/connectDB.controller"));
const index_controller_1 = require("./controller/index.controller");
const user_route_1 = __importDefault(require("./routes/user.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, connectDB_controller_1.default)();
const port = process.env.PORT || 3001;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get('/', index_controller_1.getBaseController);
app.use('/api/products', product_route_1.default);
app.use('/api/user', user_route_1.default);
app.use(index_controller_1.errorNoRouteController);
app.use(index_controller_1.errorController);
app.listen(port, () => {
    console.log(`app run on port ${port}`);
});
