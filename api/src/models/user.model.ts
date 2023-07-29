import { Schema, Types, model } from 'mongoose';
import { IUser } from '../types/User';

const userSchema = new Schema<IUser>(
  {
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
          product: { type: Types.ObjectId, ref: 'Products' },
        },
      ],
    },
  },
  { timestamps: true }
);

const UserModel = model('User', userSchema);

export default UserModel;
