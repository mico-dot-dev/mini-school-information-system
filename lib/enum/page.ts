import { Permission } from "@/lib/auth/permissions";

export enum Page {
  Students = "Students",
  Courses = "Courses",
  Subjects = "Subjects",
  Users = "Users",
  Audit = "Audit",
}

export const PagePermissions: Record<Page, Permission> = {
  [Page.Courses]: "view_course",
  [Page.Users]: "view_user",
  [Page.Subjects]: "view_subject",
  [Page.Students]: "view_student",
  [Page.Audit]: "view_user",
};
