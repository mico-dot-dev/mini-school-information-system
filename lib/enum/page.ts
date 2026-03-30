import { Permission } from "@/lib/auth/permissions";

export const Page = {
  Students: "Students",
  Courses: "Courses",
  Subjects: "Subjects",
  Users: "Users",
  Audit: "Audit",
} as const;

export type Page = (typeof Page)[keyof typeof Page];

export const PagePermissions: Record<Page, Permission> = {
  Students: Permission.student_view,
  Courses: Permission.course_view,
  Subjects: Permission.subject_view,
  Users: Permission.user_view,
  Audit: Permission.user_view,

  // [Page.Courses]: "view_course",
  // [Page.Users]: "view_user",
  // [Page.Subjects]: "view_subject",
  // [Page.Students]: "view_student",
  // [Page.Audit]: "view_user",
};
