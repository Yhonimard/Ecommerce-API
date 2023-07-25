import { Types } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
  cart: ICart;
}

interface ICart {
  total_quantity: number;
  total_price: number;
  cart_list: Types.DocumentArray<ICartList>;
}

interface ICartList {
  quantity: number;
  price: number;
  product: Types.ObjectId;
}

export { IUser };
