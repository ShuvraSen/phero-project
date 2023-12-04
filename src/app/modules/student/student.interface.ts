/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;

  name: TUserName;
  gender: 'male' | 'female' | 'others';
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;

  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  admissionSemester: Types.ObjectId;

  isDeleted: boolean;
};

export type StudentMethod = {
  isStudentExit(id: string): Promise<TStudent | null>;
};
// type UserModel = Model<IUser, {}, IUserMethods>;
export type StudentModel = Model<
  TStudent,
  Record<string, never>,
  StudentMethod
>;
