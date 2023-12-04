/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.service';
import sendresponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchasync from '../../utils/catchAsync';

const getAllStudents = catchasync(async (req, res) => {
  const result = await StudentServices.getAllStudentFromDB();

  // res.status(200).json({
  //   success: true,
  //   message: 'student got successfully',
  //   data: result,
  // });
  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'created successfully',
    data: result,
  });
});
const getAStudent = catchasync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getAStudentFromDB(studentId);

  if (!result) {
    return res.status(404).json({
      success: false,
      message: 'Student not found',
    });
  }

  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'created successfully',
    data: result,
  });
});
const deleteAStudent = catchasync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteAStudentFromDB(studentId);

  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'created successfully',
    data: result,
  });
});

export const StudentController = {
  // createStudent,
  getAllStudents,
  getAStudent,
  deleteAStudent,
};
