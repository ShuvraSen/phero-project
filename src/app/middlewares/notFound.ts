/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  //   const statuscode = 500;
  //   const message =  'went wrong';

  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'api route not found',
    error: '',
  });
};
export default notFound;
