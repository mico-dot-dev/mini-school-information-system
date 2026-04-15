import { prisma } from "@/lib/services/prisma-client";
import { SubjectFormModel } from "../model/subject";
import { DegreeLevel } from "../enum/degreeLevel";

export async function CreateSubject(subjectForm: SubjectFormModel) {
  try {
    const courseId = await prisma.course.findFirstOrThrow({
      where: {
        code: subjectForm.course,
      },
      select: { id: true },
    });

    const subject = await prisma.subject.create({
      data: {
        code: subjectForm.code,
        title: subjectForm.title,
        units: subjectForm.units,
        course_id: courseId.id,
      },
    });

    await prisma.$transaction(
      (subjectForm.prerequisites ?? []).map((prerequisiteId) =>
        prisma.subject_prerequisite.create({
          data: {
            subject_id: subject.id,
            prerequisites_subject_id: BigInt(prerequisiteId),
          },
        }),
      ),
    );

    console.log(subject);
    return subject;
  } catch (error) {
    console.error("Error creating subject:", error);
  }
}

export async function GetAllSubject() {
  try {
    console.log("Getting all subjects");
    const subjects = await prisma.subject.findMany({
      select: {
        code: true,
        title: true,
        units: true,
        course: {
          select: {
            name: true,
            degree_level: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    });

    const formattedSubjects: SubjectFormModel[] = subjects.map((s) => ({
      code: s.code,
      title: s.title,
      units: s.units,
      degreeLevel: s.course.degree_level?.title as DegreeLevel,
      course: s.course.name,
    }));

    return formattedSubjects;
  } catch (error) {
    console.log("Error getting subjects:", error);
  }
}

export async function GetSubjectByCourse(courseCode: string) {
  try {
    const subjects = await prisma.subject.findMany({
      where: {
        course: {
          code: courseCode,
        },
      },
      select: {
        id: true,
        code: true,
        title: true,
      },
    });
    return subjects;
  } catch (error) {
    console.error("Error fetching subjects by course:", error);
    throw error;
  }
}
