import z from "zod";
import { DegreeLevel } from "../enum/degreeLevel";

export const SubjectFormSchema = z.object({
  code: z.string(),
  title: z.string(),
  units: z.number().min(0),
  degreeLevel: z.nativeEnum(DegreeLevel),
  course: z.string(),
});

export type SubjectFormModel = z.infer<typeof SubjectFormSchema>;
