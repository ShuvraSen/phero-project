/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import { UserRoute } from './app/modules/user/user.route';
import globalerrorHandler from './app/middlewares/globalerrorHandlers';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();
// const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// app.use('/api/v1/students', StudentRoute);
app.use('/api/v1', router);
app.use(globalerrorHandler);
app.use(notFound);

export default app;
