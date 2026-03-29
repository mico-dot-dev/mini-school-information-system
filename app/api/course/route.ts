import { CourseFormSchema, CourseFormModel } from "@/lib/model/course";
import { CreateCourse } from "@/lib/services/course";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData: CourseFormModel = CourseFormSchema.parse(body);
    const course = await CreateCourse(validatedData);
    return new Response(JSON.stringify(course), { status: 200 });
  } catch (error) {
    console.log("error in route:" + error);
  }
}
