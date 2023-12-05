import { TAcademicSemester } from '../accademicSemester/accademicSemester.interface';
import { User } from './user.model';

export const generatedStudentId = async (payload: TAcademicSemester) => {
  let currentId = (0).toString();
  const lastStudentId = await findLastStudentId();
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);
  const lastStudentSemesterYear = lastStudentId?.substring(0, 4);
  const currentSemesCode = payload.code;
  const currentSemesYear = payload.year;

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesCode &&
    lastStudentSemesterYear === currentSemesYear
  ) {
    currentId = lastStudentId.substring(6);
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;

  // find accademic semester info
};

const findLastStudentId = async () => {
  const laststudent = await User.findOne(
    {
      role: 'student',
    },
    { id: 1, _id: 0 },
  )
    .sort({ createdAt: -1 })
    .lean();
  return laststudent?.id ? laststudent.id : undefined;
};
