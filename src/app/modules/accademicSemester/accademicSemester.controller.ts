/* eslint-disable @typescript-eslint/no-explicit-any */
// import studentValidationSchema from './student.validationZod';
// import { z } from "zod";

// import { RequestHandler } from 'express';

import sendresponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchasync from '../../utils/catchAsync';
import { AccademicSemesterService } from './accademicSemester.service';

const createAccademicsemester = catchasync(async (req, res) => {
  // const payload = req.body;

  const result = await AccademicSemesterService.createAccademicSemesterInDB(
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
    message: 'created successfully',
    data: result,
  });
});

const getAllAccademicSemesterFromDB = catchasync(async (req, res) => {
  const result = await AccademicSemesterService.getAllAccademicSemesterInDB();

  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'got all successfully',
    data: result,
  });
});

const getAAccademicSemesterFromDB = catchasync(async (req, res) => {
  const { semesterId } = req.params;
  const result =
    await AccademicSemesterService.getAAccademicSemesterInDB(semesterId);

  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'got all successfully',
    data: result,
  });
});
const updateAccademicSemesterFromDB = catchasync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AccademicSemesterService.updateAAccademicSemesterInDB(
    semesterId,
    req.body,
  );

  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'updated  successfully',
    data: result,
  });
});
export const AccademicSemesterController = {
  createAccademicsemester,
  getAllAccademicSemesterFromDB,
  getAAccademicSemesterFromDB,
  updateAccademicSemesterFromDB,
};
