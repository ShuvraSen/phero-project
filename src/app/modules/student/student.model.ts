/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import {
  StudentMethod,
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';
// import validator from 'validator';
// import bcrypt from 'bcrypt';
// import config from '../../config';

const studentNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    // maxlength: [20, 'First name can not be more than 20'],
  },
  middleName: {
    type: String,
    trim: true,
    // maxlength: [20, 'First name can not be more than 20'],
  },
  lastName: {
    type: String,
    required: true,
    // trim: true,
    // validate: {
    //   validator: (value: string) => {
    //     return validator.isAlpha(value);
    //   },
    //   message: '{VALUE} is not in right form',
    // },
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true, trim: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent, StudentModel, StudentMethod>({
  id: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'id is required'],
    unique: true,
    ref: 'User',
  },

  name: {
    type: studentNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'others'],
      message: '{VALUE} is not proper type',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: (value: string) => {
    //     return validator.isEmail(value);
    //   },
    //   message: 'email is not correct form',
    // },
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group',
    },
  },
  presentAddress: { type: String, required: true },

  permanentAddress: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: { type: localGuardianSchema, required: true },
  profileImage: { type: String },

  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// studentSchema.pre('save', async function (next) {
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_round),
//   );
//   next();
// });
// studentSchema.post('save', async function (doc, next) {
//   doc.password = '';
//   next();
// });
studentSchema.pre('find', async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre('findOne', async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.methods.isStudentExit = async function (id: string) {
  const existingStudent = await Student.findOne({ id });
  return existingStudent;
};
export const Student = model<TStudent, StudentModel>('Student', studentSchema);
