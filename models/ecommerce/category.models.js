import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

export const Category = mongoose.model('Category', CategorySchema);
