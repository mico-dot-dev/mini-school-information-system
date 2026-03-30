import { Role } from "@/lib/enum/role";
import { Permission } from "./permissions";

//Permission Mapping of the given roles
export const rolePermissions: Record<Role, Permission[]> = {
  //Full CRUD Access
  SuperAdmin: Object.values(Permission),

  //CRUD Aaccess except user management
  Admin: [
    //course
    Permission.course_view,
    Permission.course_create,
    Permission.course_update,
    Permission.course_delete,

    //student
    Permission.student_view,
    Permission.student_create,
    Permission.student_update,
    Permission.student_delete,

    //subject
    Permission.subject_view,
    Permission.subject_create,
    Permission.subject_update,
    Permission.subject_delete,

    //grade
    Permission.grade_view,
    Permission.grade_create,
    Permission.grade_update,
    Permission.grade_delete,

    //prerequisite
    Permission.subject_prerequisite_view,
    Permission.subject_prerequisite_create,
    Permission.subject_prerequisite_update,
    Permission.subject_prerequisite_delete,

    //reservation
    Permission.subject_reservation_view,
    Permission.subject_reservation_create,
    Permission.subject_reservation_update,
    Permission.subject_reservation_delete,
  ],

  //INSERT only on the students and VIEW only on the respective requirements for student enrollment
  Encoder: [
    //course
    Permission.course_view,

    //student
    Permission.student_view,
    Permission.student_create,
    Permission.student_update,

    //subject
    Permission.subject_view,

    //prerequisite
    Permission.subject_prerequisite_view,

    //reservation
    Permission.subject_reservation_view,
    Permission.subject_reservation_create,
  ],
};

// Role based access, returns true if the role is allowed to perform the requested CRUD operation.
// Purpose: to define what functions and components the user can navigate or use and possibly return an error if the role is not allowed to perform the operation
export function has_role_permission(user_role: Role, required: Permission) {
  return rolePermissions[user_role]?.includes(required);
}
