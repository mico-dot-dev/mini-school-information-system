import { prisma } from "@/lib/services/prisma-client";
import { CourseFormModel } from "../model/course";
import { DegreeLevel } from "../enum/degreeLevel";
import { de } from "zod/locales";

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

export async function GetAllCourse() {
  try {
    const data = await prisma.course.findMany({
      select: {
        code: true,
        name: true,
        description: true,
        degree_level: {
          select: {
            title: true,
          },
        },
      },
    });

    //Flattens the variable to mathc the course model
    const formattedCourse: CourseFormModel[] = data.map((d) => ({
      code: d.code,
      name: d.name,
      description: d.description,
      degreeLevel: d.degree_level?.title as DegreeLevel,
    }));

    return formattedCourse;
  } catch (error) {
    console.log("Error in service" + error);
  }
}

export async function GetCoursesByDegree(degree: DegreeLevel) {
  try {
    const courses = await prisma.degree_level.findMany({
      where: { title: degree },
      select: {
        course: {
          select: {
            code: true,
            name: true,
            description: true,
          },
        },
      },
    });

    //Formats the course to match the model, flattening the structure of the var and assigning the degree
    const formattedCourses: CourseFormModel[] = courses.map((course) => ({
      ...course.course[0],
      degreeLevel: degree as DegreeLevel,
    }));

    return formattedCourses;
  } catch (error) {
    console.error("Error fetching courses by degree:", error);
    throw error;
  }
}
