/* eslint-disable @typescript-eslint/no-explicit-any */
// import studentValidationSchema from './student.validationZod';
// import { z } from "zod";

// import { RequestHandler } from 'express';
import { UserService } from './user.service';
import sendresponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchasync from '../../utils/catchAsync';

const createStudent = catchasync(async (req, res) => {
  const { password, student: studentData } = req.body;
  // zod scheema
  // const zodData = studentValidationSchema.parse(studentData);
  const result = await UserService.createStudentInDB(password, studentData);
  // res.status(200).json({
  //   success: true,
  //   message: 'student created successfully',
  //   data: result,
  // });
  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'created successfully',
    data: result,
  });
});
export const userController = {
  createStudent,
};
