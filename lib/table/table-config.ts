import z from "zod";
import { courseColumns } from "./course.column";
import { subjectColumns } from "./subject.column";

export type Column<T> = {
  key: keyof T;
  header: string;
};

export const tableConfigModel = {
  // Users: { columns: userColumns, schema: UserSchema, data: [] as User[] },
  // Students: {
  //   columns: ,
  //   schema: ,
  //   data: [] as [],
  // },
  Courses: {
    columns: courseColumns,
  },
  Subjects: {
    columns: subjectColumns,
  },
} as const;

export type TableKey = keyof typeof tableConfigModel;
