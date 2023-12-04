import { TAcademicSemester } from './accademicSemester.interface';
import { AcademicSemester } from './accademicSemester.model';

const createAccademicSemesterInDB = async (payload: TAcademicSemester) => {
  // type TSemesterNameWithCodeMapper = {
  //   [key: string]: string;
  // };

  // const semesterNameWithCodeMapper: TSemesterNameWithCodeMapper = {
  //   Autumn: '01',
  //   Summer: '02',
  //   Fall: '03',
  // };

  // if (semesterNameWithCodeMapper[payload.name] !== payload.code) {
  //   throw new Error('code is not matching');
  // }//ami ei code ta accademicModel e korsi

  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllAccademicSemesterInDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getAAccademicSemesterInDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};
const updateAAccademicSemesterInDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AccademicSemesterService = {
  createAccademicSemesterInDB,
  getAllAccademicSemesterInDB,
  getAAccademicSemesterInDB,
  updateAAccademicSemesterInDB,
};
