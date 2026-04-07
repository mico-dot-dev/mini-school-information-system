import z from "zod";
import { CourseFormModel, CourseFormSchema } from "./course";
import { SubjectFormModel, SubjectFormSchema } from "./subject";
// import { student } from "./subject";
import { UserFormModel } from "./user";

export type Column<T> = {
  key: keyof T;
  header: string;
};

export type TableConfigSchema<T> = {
  columns: Column<T>[];
  schema: z.ZodType<T>;
  data: T[];
};

export const courseColumns: Column<CourseFormModel>[] = [
  { key: "code", header: "Code" },
  { key: "degreeLevel", header: "Degree Level" },
  { key: "name", header: "Name" },
  { key: "description", header: "Description" },
];

export const subjectColumns: Column<SubjectFormModel>[] = [
  { key: "code", header: "Code" },
  { key: "title", header: "Title" },
  { key: "units", header: "Units" },
  { key: "course", header: "Course" },
  { key: "degreeLevel", header: "Degree Level" },
];

export const tableConfigModel = {
  // Users: { columns: userColumns, schema: UserSchema, data: [] as User[] },
  // Students: {
  //   columns: ,
  //   schema: ,
  //   data: [] as [],
  // },
  Courses: {
    columns: courseColumns,
    schema: CourseFormSchema,
    data: [] as CourseFormModel[],
  },
  Subjects: {
    columns: subjectColumns,
    schema: SubjectFormSchema,
    data: [] as SubjectFormModel[],
  },
} satisfies Record<string, TableConfigSchema<any>>;
