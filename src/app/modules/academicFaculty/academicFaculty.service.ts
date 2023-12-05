import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAccademicFacultyInDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAccademicFacultyInDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getAAccademicFacultyInDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};
const updateAAccademicFacultyInDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AccademicFacultyService = {
  createAccademicFacultyInDB,
  getAllAccademicFacultyInDB,
  getAAccademicFacultyInDB,
  updateAAccademicFacultyInDB,
};
