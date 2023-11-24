import mongoose, { Mongoose } from 'mongoose';

const ProductSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowecaseL: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      defalut: 'active',
      required: true,
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
      },
    ],
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamp: true }
);

export const Product = mongoose.model('Product', ProductSchema);
