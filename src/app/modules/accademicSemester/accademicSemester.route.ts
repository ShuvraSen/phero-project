import express from 'express';
import { AccademicSemesterController } from './accademicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AccademicValidation } from './accademicsemester.validation';

const router = express.Router();

router.post(
  '/create-accademic-semester',
  validateRequest(AccademicValidation.createAccademicSemesterValidationSchema),
  AccademicSemesterController.createAccademicsemester,
);
router.get('/', AccademicSemesterController.getAllAccademicSemesterFromDB);
router.get(
  '/:semesterId',
  AccademicSemesterController.getAAccademicSemesterFromDB,
);
router.patch(
  '/:semesterId',
  validateRequest(AccademicValidation.updateAccademicSemesterValidationSchema),
  AccademicSemesterController.updateAccademicSemesterFromDB,
);

export const AccademicSemesterRoutes = router;
