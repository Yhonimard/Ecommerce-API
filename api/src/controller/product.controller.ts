import { RequestHandler } from 'express';
import HttpError from '../models/http-error';
import ProductModel from '../models/product.model';
import { validationResult } from 'express-validator';

const getAllProductController: RequestHandler = async (req, res, next) => {
  try {
    const getProduct = await ProductModel.find({});

    if (!getProduct)
      return next(
        new HttpError('could not find products, please try again', 404)
      );

    return res.json(getProduct.map((p) => p.toObject({ getters: true })));
  } catch (error) {
    console.log('error from /product/get : ', error);
    return next(new HttpError('something went wrong, please try again', 500));
  }
};

const getProductByIDController: RequestHandler = async (req, res, next) => {
  const { params } = req;
  try {
    const getProductByID = await ProductModel.findById(params.pid);
    console.log('product by Id : ', getProductByID);

    if (!getProductByID) {
      return next(new HttpError('could not find this product by it id', 404));
    }

    res.json({
      status: 'success',
      message: `success get product by this ${params.pid} id`,
      data: getProductByID.toObject({ getters: true }),
    });
  } catch (error) {
    console.log('error from /product/get/:pid : ', error);
    return next(
      new HttpError(
        'something went wrong, cannot find this product. please try again',
        500
      )
    );
  }
};
const createProductController: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }
  const { body } = req;
  const { name, price, category, description } = body;

  const createProduct = new ProductModel({
    name,
    price,
    category,
    description,
  });

  try {
    await createProduct.save();
  } catch (error) {
    return next(
      new HttpError('creating product failed, please try again', 500)
    );
  }

  return res.status(201).json({
    message: 'creating product successfully',
    status: 'success',
    data: createProduct,
  });
};
const updateProductController: RequestHandler = async (req, res, next) => {
  const { params, body } = req;
  const { pid } = params;
  const { name, price, category, description } = body;
  try {
    const product = await ProductModel.findById(pid);
    if (!product) return next(new HttpError('product not found', 404));

    product.name = name;
    product.price = price;
    product.category = category;
    product.description = description;

    await product.save();

    return res.status(200).json({
      message: 'succes update product',
      status: 'success',
      data: product.toObject({ getters: true }),
    });
  } catch (error) {
    return next(
      new HttpError('could not update this product. something went wrong', 500)
    );
  }
};

const deleteProductController: RequestHandler = async (req, res, next) => {
  const { params } = req;
  const { pid } = params;

  try {
    const product = await ProductModel.findById(pid);
    if (!product) return next(new HttpError('product not found', 404));

    await product.deleteOne({});

    res.status(200).json({ message: 'success delete product' });
  } catch (error) {
    return next(
      new HttpError('couldnt delete this product. please try again', 500)
    );
  }
};

export {
  getAllProductController,
  getProductByIDController,
  createProductController,
  updateProductController,
  deleteProductController,
};
