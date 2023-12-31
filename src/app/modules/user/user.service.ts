import config from '../../config';

import { AcademicSemester } from '../accademicSemester/accademicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generatedStudentId } from './user.utils';

const createStudentInDB = async (password: string, payload: TStudent) => {
  // const student = new Student(studentData);
  // if (await student.isStudentExit(student.id)) {
  //   throw new Error('you are exsisting student.');
  // }
  //   if password is not given use default password

  const userData: Partial<TUser> = {};

  if (!password) {
    userData.password = config.default_password as string;
  } else {
    userData.password = password;
  }
  // set student role
  userData.role = 'student';
  // as id will be generated by admin/client so we manually set _id for student for referencing

  // studentId generated by dynamically

  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  // userData.id = '2030100001';
  userData.id = await generatedStudentId(admissionSemester!);
  // 1.create a user
  const newUser = await User.create(userData);
  //   2.now on the basis of user we will create student_id,and userId for embeded and references
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const UserService = {
  createStudentInDB,
};
