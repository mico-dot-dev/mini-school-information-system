import { prisma } from "@/lib/services/prisma-client";
import { SubjectFormModel } from "../model/subject";

export async function CreateSubject(subjectForm: SubjectFormModel) {
  try {
    console.log(subjectForm);
    const courseId = await prisma.course.findFirstOrThrow({
      where: {
        code: subjectForm.course,
      },
      select: { id: true },
    });

    const subject = prisma.subject.create({
      data: {
        code: subjectForm.code,
        title: subjectForm.title,
        units: subjectForm.units,
        course_id: courseId.id,
      },
    });

    console.log(subject);
    return subject;
  } catch (error) {
    // console.error("Error creating subject:", error);
  }
}
