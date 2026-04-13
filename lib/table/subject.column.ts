import { Column } from "./table-config";
import { SubjectFormModel } from "../model/subject";

export const subjectColumns: Column<SubjectFormModel>[] = [
  { key: "code", header: "Code" },
  { key: "title", header: "Title" },
  { key: "units", header: "Units" },
  { key: "course", header: "Course" },
  { key: "degreeLevel", header: "Degree Level" },
];
