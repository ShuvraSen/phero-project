import express from 'express';
import { userController } from './user.controller';

import { createStudentValidationSchema } from '../student/student.validationZod';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  userController.createStudent,
);

export const UserRoute = router;
