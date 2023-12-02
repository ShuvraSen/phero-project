import { z } from 'zod';

const studentNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).trim(),
  middleName: z.string().min(1).trim().optional(),
  lastName: z.string().trim(),
});

const gurdianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const localgurdianValidationSchema = z.object({
  name: z.string().trim(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

export const studentValidationSchema = z.object({
  id: z.string(),
  password: z.string(),
  name: studentNameValidationSchema,
  gender: z.enum(['male', 'female', 'others']),
  dateOfBirth: z.string().optional(),
  email: z.string().email('Email is not in the correct form'),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: gurdianValidationSchema,
  localGuardian: localgurdianValidationSchema,
  profileImage: z.string().optional(),

  isDeleted: z.boolean(),
});

export default studentValidationSchema;
