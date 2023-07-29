import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import cors from "cors";
import productRouter from "./routes/product.route";
import connectDB from "./controller/connectDB.controller";
import {
  errorNoRouteController,
  errorController,
  getBaseController,
} from "./controller/index.controller";
import userRouter from "./routes/user.route";

dotenv.config();
const app = express();

connectDB();
const port = process.env.PORT || 3001;

app.use(bodyparser.json());
app.use(cors());

app.get("/api", getBaseController);

app.use("/api/products", productRouter);
app.use("/api/user", userRouter);

app.use(errorNoRouteController);
app.use(errorController);

app.listen(port, () => {
  console.log(`app run on port ${port}`);
});
