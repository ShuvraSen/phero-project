import { z } from 'zod';
const createUserValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: 'password must be a string' })
    .optional(),
});
export const AccademicValidationSchema = { createUserValidationSchema };
