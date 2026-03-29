import { Role } from "@/lib/enum/role";
import { Permission } from "./permissions";

export const rolePermissions: Record<Role, Set<Permission>> = {
  SuperAdmin: new Set([
    // full access
    //course
    "view_course",
    "create_course",
    "update_course",
    "delete_course",
    //student
    "view_student",
    "create_student",
    "update_student",
    "delete_student",
    //subject
    "view_subject",
    "create_subject",
    "update_subject",
    "delete_subject",
    //user
    "view_user",
    "create_user",
    "update_user",
    "delete_user",
    //grade
    "view_grade",
    "create_grade",
    "update_grade",
    "delete_grade",
    //prereq
    "view_subject_prerequisite",
    "create_subject_prerequisite",
    "update_subject_prerequisite",
    "delete_subject_prerequisite",
    //reservation
    "view_subject_reservation",
    "create_subject_reservation",
    "update_subject_reservation",
    "delete_subject_reservation",
  ]),

  Admin: new Set([
    //course
    "view_course",
    "create_course",
    "update_course",
    "delete_course",
    //student
    "view_student",
    "create_student",
    "update_student",
    "delete_student",
    //subject
    "view_subject",
    "create_subject",
    "update_subject",
    "delete_subject",
    //grade
    "view_grade",
    "create_grade",
    "update_grade",
    "delete_grade",
    //prereq
    "view_subject_prerequisite",
    "create_subject_prerequisite",
    "update_subject_prerequisite",
    "delete_subject_prerequisite",
    //reservation
    "view_subject_reservation",
    "create_subject_reservation",
    "update_subject_reservation",
    "delete_subject_reservation",
  ]),
  Encoder: new Set([
    //course
    "view_course",
    //student
    "view_student",
    "create_student",
    "update_student",
    //subject
    "view_subject",
    //prereq
    "view_subject_prerequisite",
    //reservation
    "view_subject_reservation",
    "create_subject_reservation",
    "update_subject_reservation",
  ]),
};

// Role based access, returns true if the role is allowed to perform the requested CRUD operation.
// Purpose: to define what functions and components the user can navigate or use and possibly return an error if the role is not allowed to perform the operation
export function hasPermission(role: Role, permission: Permission) {
  return rolePermissions[role]?.has(permission);
}
