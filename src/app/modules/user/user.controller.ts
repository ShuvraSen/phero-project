/* eslint-disable @typescript-eslint/no-explicit-any */
// import studentValidationSchema from './student.validationZod';
// import { z } from "zod";

import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendresponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
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
  } catch (err: any) {
    // res.status(500).json({
    //   success: false,
    //   message: err.message || 'smth went wrong',
    //   error: err,
    // });
    next(err);
  }
};
export const userController = {
  createStudent,
};
