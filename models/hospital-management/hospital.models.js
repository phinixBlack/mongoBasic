import mongoose, { mongo } from 'mongoose';

const HospitalSchema = new mongoose.Schema(
  {
    id: BigInt,
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: string,
      required: true,
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model('Hospital', HospitalSchema);
