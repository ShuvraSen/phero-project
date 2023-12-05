import express from 'express';
import { AccademicFacultyController } from './academicFaculty.controller';
import { academicFacultyValidation } from './academicFaculty.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-accademic-faculty',
  validateRequest(
    academicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AccademicFacultyController.createAccademicFaculty,
);
router.get('/', AccademicFacultyController.getAllAccademicFacultyFromDB);
router.get(
  '/:facultyId',
  AccademicFacultyController.getAAccademicFacultyFromDB,
);
router.patch(
  '/:facultyId',
  validateRequest(
    academicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  AccademicFacultyController.updateAccademicFacultyFromDB,
);

export const AccademicFacultyRoutes = router;
