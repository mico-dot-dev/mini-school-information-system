import { Column } from "./table-config";
import { CourseFormModel } from "../model/course";

export const courseColumns: Column<CourseFormModel>[] = [
  { key: "code", header: "Code" },
  { key: "degreeLevel", header: "Degree Level" },
  { key: "name", header: "Name" },
  { key: "description", header: "Description" },
];
