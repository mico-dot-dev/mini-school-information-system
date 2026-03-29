import { z } from "zod";
import { Role } from "../enum/role";

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

//Creating a user form schema
export const UserFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  role: z.nativeEnum(Role),
});

export type UserFormModel = z.infer<typeof UserFormSchema>;
export type LoginFormModel = z.infer<typeof LoginFormSchema>;
