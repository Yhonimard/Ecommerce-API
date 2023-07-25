import { Router } from 'express';
import { validateCreatingProduct } from '../validator/product.validator';
import {
  createProductController,
  deleteProductController,
  getAllProductController,
  getProductByIDController,
  updateProductController,
} from '../controller/product.controller';

const route = Router();

route.get('/get', getAllProductController);

route.get('/get/:pid', getProductByIDController);

route.post('/add', validateCreatingProduct, createProductController);

route.put('/update/:pid', updateProductController);

route.delete('/delete/:pid', deleteProductController);

route.get('/', async (req, res, next) => {
  res.json({ message: 'hello its product api' });
});

const productRouter = route;
export default productRouter;
