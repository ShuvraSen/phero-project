import { Router } from 'express';
import { UserRoute } from '../modules/user/user.route';
import { StudentRoute } from '../modules/student/student.route';
import { AccademicSemesterRoutes } from '../modules/accademicSemester/accademicSemester.route';
import { AccademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';

const router = Router();
const modulesRoutes = [
  {
    path: '/students',
    route: StudentRoute,
  },
  {
    path: '/users',
    route: UserRoute,
  },
  {
    path: '/accademic-semester',
    route: AccademicSemesterRoutes,
  },
  {
    path: '/accademic-faculty',
    route: AccademicFacultyRoutes,
  },
];

//  router.use('/students', StudentRoute);
// router.use('/users', UserRoute);
modulesRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
// AccademicFacultyRoutes
