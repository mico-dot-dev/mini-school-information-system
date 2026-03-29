// CRUD Permissions

export type Permission =
  // Course
  | "view_course"
  | "create_course"
  | "update_course"
  | "delete_course"

  // Student
  | "view_student"
  | "create_student"
  | "update_student"
  | "delete_student"

  // Subject
  | "view_subject"
  | "create_subject"
  | "update_subject"
  | "delete_subject"

  // User
  | "view_user"
  | "create_user"
  | "update_user"
  | "delete_user"

  // Grade
  | "view_grade"
  | "create_grade"
  | "update_grade"
  | "delete_grade"

  // Subject Prerequisites
  | "view_subject_prerequisite"
  | "create_subject_prerequisite"
  | "update_subject_prerequisite"
  | "delete_subject_prerequisite"

  // Subject Reservations
  | "view_subject_reservation"
  | "create_subject_reservation"
  | "update_subject_reservation"
  | "delete_subject_reservation";
