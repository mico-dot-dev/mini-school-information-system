import z from "zod";
import { DegreeLevel } from "../enum/degreeLevel";

export const CourseFormSchema = z.object({
  code: z.string(),
  degreeLevel: z.nativeEnum(DegreeLevel),
  name: z.string(),
  description: z.string().optional(),
});

export type CourseFormModel = z.infer<typeof CourseFormSchema>;
