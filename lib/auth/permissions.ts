export const Permission = {
  // course
  course_view: "course.view",
  course_create: "course.create",
  course_update: "course.update",
  course_delete: "course.delete",

  // student
  student_view: "student.view",
  student_create: "student.create",
  student_update: "student.update",
  student_delete: "student.delete",

  // subject
  subject_view: "subject.view",
  subject_create: "subject.create",
  subject_update: "subject.update",
  subject_delete: "subject.delete",

  // user
  user_view: "user.view",
  user_create: "user.create",
  user_update: "user.update",
  user_delete: "user.delete",

  // grade
  grade_view: "grade.view",
  grade_create: "grade.create",
  grade_update: "grade.update",
  grade_delete: "grade.delete",

  // subject prerequisite
  subject_prerequisite_view: "subject_prerequisite.view",
  subject_prerequisite_create: "subject_prerequisite.create",
  subject_prerequisite_update: "subject_prerequisite.update",
  subject_prerequisite_delete: "subject_prerequisite.delete",

  // subject reservation
  subject_reservation_view: "subject_reservation.view",
  subject_reservation_create: "subject_reservation.create",
  subject_reservation_update: "subject_reservation.update",
  subject_reservation_delete: "subject_reservation.delete",
} as const;

export type Permission = (typeof Permission)[keyof typeof Permission];
