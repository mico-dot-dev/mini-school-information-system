import z from "zod";
import { DegreeLevel } from "../enum/degreeLevel";
import { title } from "process";

export const CourseFormSchema = z.object({
  code: z.string(),
  degreeLevel: z.nativeEnum(DegreeLevel),
  name: z.string(),
  description: z.string().nullable().optional(),
});

export type CourseFormModel = z.infer<typeof CourseFormSchema>;
