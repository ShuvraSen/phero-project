import { Student } from './student.model';
// import { TStudent } from './student.interface';

// const createStudentInDB = async (studentData: TStudent) => {
//   const student = new Student(studentData);
//   if (await student.isStudentExit(student.id)) {
//     throw new Error('you are exsisting student.');
//   }

//   const result = await Student.create(student);
//   return result;
// };
const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getAStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};
const deleteAStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  // createStudentInDB,
  getAllStudentFromDB,
  getAStudentFromDB,
  deleteAStudentFromDB,
};
