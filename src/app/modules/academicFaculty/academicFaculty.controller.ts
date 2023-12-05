/* eslint-disable @typescript-eslint/no-explicit-any */
// import studentValidationSchema from './student.validationZod';
// import { z } from "zod";

// import { RequestHandler } from 'express';

import sendresponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchasync from '../../utils/catchAsync';
import { AccademicFacultyService } from './academicFaculty.service';

const createAccademicFaculty = catchasync(async (req, res) => {
  // const payload = req.body;

  const result = await AccademicFacultyService.createAccademicFacultyInDB(
    req.body,
  );
  // res.status(200).json({
  //   success: true,
  //   message: 'student created successfully',
  //   data: result,
  // });
  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'created AccademicFaculty successfully',
    data: result,
  });
});

const getAllAccademicFacultyFromDB = catchasync(async (req, res) => {
  const result = await AccademicFacultyService.getAllAccademicFacultyInDB();

  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'got all AccademicFaculty successfully',
    data: result,
  });
});

const getAAccademicFacultyFromDB = catchasync(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await AccademicFacultyService.getAAccademicFacultyInDB(facultyId);
  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'got a AccademicFaculty successfully',
    data: result,
  });
});
const updateAccademicFacultyFromDB = catchasync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await AccademicFacultyService.updateAAccademicFacultyInDB(
    facultyId,
    req.body,
  );

  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'updated AccademicFaculty successfully',
    data: result,
  });
});
export const AccademicFacultyController = {
  createAccademicFaculty,
  getAllAccademicFacultyFromDB,
  getAAccademicFacultyFromDB,
  updateAccademicFacultyFromDB,
};
