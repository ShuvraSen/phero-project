import { TAcademicSemester } from '../accademicSemester/accademicSemester.interface';
import { User } from './user.model';

export const generatedStudentId = async (payload: TAcademicSemester) => {
  const currentId = (await findLastStudentId()) || (0).toString();
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
  return laststudent?.id ? laststudent.id.substring(6) : undefined;
};
