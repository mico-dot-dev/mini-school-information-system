import { DegreeLevel } from "@/lib/enum/degreeLevel";
import { GetCoursesByDegree } from "@/lib/services/course";
import { CourseFormModel, CourseFormSchema } from "@/lib/model/course";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ degree: string }> },
) {
  try {
    const { degree } = await params;
    //Validate the degree level
    if (!Object.values(DegreeLevel).includes(degree as DegreeLevel)) {
      return new Response(JSON.stringify({ error: "Invalid degree level" }), {
        status: 400,
      });
    }

    const courses = await GetCoursesByDegree(degree as DegreeLevel);
    const formattedCourses: CourseFormModel[] =
      CourseFormSchema.array().parse(courses);

    return new Response(JSON.stringify({ data: formattedCourses }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("error in route:" + error);
  }
}
