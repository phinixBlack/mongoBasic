import mongoose, { mongo } from 'mongoose';

const DoctorSchema = new mongoose.Schema(
  {
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
    salary: {
      type: String,
      required: true,
    },
    qualifaction: {
      type: String,
      required: true,
    },
    experienceInYear: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', DoctorSchema);
