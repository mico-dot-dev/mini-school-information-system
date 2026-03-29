import { prisma } from "@/lib/services/prisma-client";
import { CourseFormModel } from "../model/course";

export async function CreateCourse(courseForm: CourseFormModel) {
  try {
    // console.log(courseForm);
    const degreeLevelId = await prisma.degree_level.findUnique({
      where: { title: "Bachelor's" },
      select: { id: true },
    });

    const course = prisma.course.create({
      data: {
        code: courseForm.code,
        name: courseForm.name,
        description: courseForm.description,
        degree_level_id: degreeLevelId?.id,
      },
    });
    return course;
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
}
