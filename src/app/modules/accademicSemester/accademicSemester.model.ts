/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './accademicSemester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './accademicSemester.constant';

const academicSemesterschema = new Schema<TAcademicSemester>({
  // name: 'Autumn' | 'Summer' | 'Fall';
  // year: Date;
  // code: string;
  // startMonth: TMonth;

  // endMonth: TMonth;
  name: {
    type: String,
    enum: AcademicSemesterName,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    enum: AcademicSemesterCode,
    required: true,
  },
  startMonth: {
    type: String,
    enum: Months,
    required: true,
  },
  endMonth: {
    type: String,
    enum: Months,
    required: true,
  },
});

academicSemesterschema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error('this semester already exists');
  }
  next();
});
// ---
type TSemesterNameWithCodeMapper = {
  [key: string]: string;
};

const semesterNameWithCodeMapper: TSemesterNameWithCodeMapper = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
academicSemesterschema.pre('save', async function () {
  if (semesterNameWithCodeMapper[this.name] !== this.code) {
    throw new Error('code is not matching');
  }
});
academicSemesterschema.pre('find', async function () {
  if (
    semesterNameWithCodeMapper[this.getQuery().name] !== this.getQuery().code
  ) {
    throw new Error('code is not matching');
  }
});

// ---
export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterschema,
);
