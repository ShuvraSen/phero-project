import { Response } from 'express';

const sendresponse = <T>(
  res: Response,
  data: {
    // res.status(200).json({
    //     success: true,
    //     message: 'student created successfully',
    //     data: result,
    //   });
    statusCode: number;
    success: boolean;
    message?: string;
    data: T;
  },
) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};
export default sendresponse;
